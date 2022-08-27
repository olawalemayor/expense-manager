import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { State } from './app.state';
import { IUser } from '../models/user';
import * as AppActions from './app.actions';

export interface AppState extends State {
  user: IUser | null;
  userToken: string | null;
  error: string;
}

const initialState: AppState = {
  user: null,
  userToken: null,
  error: '',
};

const appFeatureSelector = createFeatureSelector<AppState>('app');

export const errorSelector = createSelector(appFeatureSelector, (state) => {
  return state.error;
});

export const userSelector = createSelector(appFeatureSelector, (state) => {
  return state.user;
});

export const appReducer = createReducer(
  initialState,

  on(AppActions.loginSuccess, (state, action): AppState => {
    return {
      ...state,
      userToken: action.userToken,
    };
  }),

  on(AppActions.loginFailure, (state, action): AppState => {
    return {
      ...state,
      error: action.error,
    };
  })
);
