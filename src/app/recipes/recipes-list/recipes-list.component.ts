import { Subscription } from 'rxjs';
import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Recipe } from '../models';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];

  private subscription: Subscription;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
    this.subscription = this.recipesService.recipesChanged.subscribe(
      recipes => (this.recipes = recipes)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
