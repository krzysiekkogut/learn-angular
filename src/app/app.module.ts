import { RecipesModule } from './recipes/recipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, SharedModule, ShoppingListModule, RecipesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
