import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';
import { RecipesService } from '../recipes/recipes.service';
import { DataStorageService } from '../shared/data-storage.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { AppRoutingModule } from './../app.routing-module';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './/header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [CommonModule, HttpClientModule, SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    AuthService,
    AuthGuard,
    DataStorageService,
    RecipesService,
    ShoppingListService
  ]
})
export class CoreModule {}
