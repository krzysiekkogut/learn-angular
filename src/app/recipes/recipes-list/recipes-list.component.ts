import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipesState } from '../store/recipes.reducers';
import { AppState } from './../../store/app.reducers';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipesState: Observable<RecipesState>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.recipesState = this.store.select('recipes');
  }
}
