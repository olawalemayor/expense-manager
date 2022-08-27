import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/user';

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

// Getting user details
export const getUser = createAction('[User] Get user');

export const getUserSuccess = createAction(
  '[User] Get user successful',
  props<{ user: IUser }>()
);

export const getUserFail = createAction(
  '[User] Get user Failure',
  props<{ error: string }>()
);
