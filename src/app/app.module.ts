import { RecipesModule } from './recipes/recipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListModule } from './shopping-list/shoppping-list.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, ShoppingListModule, RecipesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
