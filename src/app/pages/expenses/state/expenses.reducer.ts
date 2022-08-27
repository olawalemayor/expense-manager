import { createFeatureSelector, createReducer } from '@ngrx/store';
export interface ExpenseState {}

const initialState: ExpenseState = {};

const expenseFeatureSlice = createFeatureSelector('expense');

export const expenseReducer = createReducer(initialState);
