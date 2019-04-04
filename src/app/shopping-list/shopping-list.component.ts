import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatos', 10)
  ];

  constructor() {}

  ngOnInit() {}
}
