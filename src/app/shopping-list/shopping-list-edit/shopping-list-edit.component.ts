import {
  Component,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Ingredient } from 'src/app/shared/models';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddButtonClick(event: Event) {
    event.preventDefault();
    this.ingredientAdded.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        parseInt(this.amountInput.nativeElement.value, 10)
      )
    );
  }
}
