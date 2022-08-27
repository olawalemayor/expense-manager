import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, mergeMap, tap } from 'rxjs';
import * as AppActions from './app.actions';
import { UserService } from '../shared/user.service';

@Injectable({ providedIn: 'root' })
export class AppEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private userService: UserService
  ) {}

  // Handle login success and failure
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.loginUser),
      mergeMap(({ username, password }) =>
        this.userService.login(username, password).pipe(
          map((userToken) => AppActions.loginSuccess({ userToken })),
          catchError((error) => of(AppActions.loginFailure({ error })))
        )
      )
    );
  });

  // If login is successful set user token and navigate to expenses
  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AppActions.loginSuccess),
        tap(({ userToken }) => {
          sessionStorage.setItem('userToken', userToken);
          this.router.navigate(['in']);
        })
      );
    },
    { dispatch: false }
  );
}
