import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/models';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private shoppingListService: ShoppingListService) {}
  ingredients: Ingredient[] = [];

  private subscription = new Subscription();

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription.add(
      this.shoppingListService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => (this.ingredients = ingredients)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
