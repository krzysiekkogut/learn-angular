import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Output() recipeClick = new EventEmitter();

  @Input() recipe: Recipe;

  onClick() {
    this.recipeClick.emit();
  }
}
