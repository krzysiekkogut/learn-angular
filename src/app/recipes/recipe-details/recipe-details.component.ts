import { Component, Input } from '@angular/core';
import { Recipe } from '../models';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {
  @Input() recipe: Recipe;
}
