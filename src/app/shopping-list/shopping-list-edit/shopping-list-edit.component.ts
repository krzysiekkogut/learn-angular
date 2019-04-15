import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from 'src/app/shared/models';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;

  editMode: boolean;
  editedIndex: number;

  private subscription: Subscription;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (editIndex: number) => {
        this.editMode = true;
        this.editedIndex = editIndex;
        this.editedItem = this.shoppingListService.getIngredient(editIndex);
        this.form.setValue({ ...this.editedItem });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const newIngredient = new Ingredient(
      this.form.value.name,
      parseInt(this.form.value.amount, 10)
    );
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.onClear();
  }

  onClear() {
    this.form.resetForm();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedIndex);
    this.onClear();
  }
}
