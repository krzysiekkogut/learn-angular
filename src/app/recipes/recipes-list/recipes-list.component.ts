import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe(
      'First recipe',
      'It\'s only a test',
      'https://s0.dziennik.pl/pliki/10420000/10420181-tofu-900-554.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
