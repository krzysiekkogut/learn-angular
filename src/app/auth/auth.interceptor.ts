import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { AppState } from './../store/app.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select('auth').pipe(
      take(1),
      mergeMap(authState => {
        const newRequest = req.clone({
          params: req.params.set('auth', authState.token)
        });
        return next.handle(newRequest);
      })
    );
  }
}
