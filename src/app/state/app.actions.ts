import { createAction, props } from '@ngrx/store';

export const loginUser = createAction(
  '[User] Login user',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[User] Login user success',
  props<{ userToken: string }>()
);

export const loginFailure = createAction(
  '[User] Login user Failure',
  props<{ error: string }>()
);
