import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing-module';
import { RecipesModule } from './recipes/recipes.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { DataStorageService } from './shared/data-storage.service';
import { SingupComponent } from './auth/singup/singup.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SingupComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    ShoppingListModule,
    RecipesModule,
    AppRoutingModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
