import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../app.routing-module';
import { AuthGuard } from './../auth/auth.guard';
import { AuthInterceptor } from './../auth/auth.interceptor';
import { DataStorageService } from './../shared/data-storage.service';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoggingInterceptor } from './logging/logging.interceptor';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [CommonModule, HttpClientModule, SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    DataStorageService
  ]
})
export class CoreModule {}
