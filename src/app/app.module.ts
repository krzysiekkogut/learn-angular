import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { SinginComponent } from './auth/singin/singin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingupComponent,
    SinginComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
    ShoppingListModule,
    RecipesModule,
    AppRoutingModule
  ],
  providers: [DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
