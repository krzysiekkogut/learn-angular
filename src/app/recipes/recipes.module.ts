import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent
  ],
  imports: [CommonModule],
  exports: [RecipesComponent],
  providers: []
})
export class RecipesModule {}
