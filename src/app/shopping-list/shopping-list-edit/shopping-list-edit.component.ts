import { ShoppingListService } from './../shopping-list.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/models';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddButtonClick(event: Event) {
    event.preventDefault();
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameInput.nativeElement.value,
        parseInt(this.amountInput.nativeElement.value, 10)
      )
    );
  }
}
