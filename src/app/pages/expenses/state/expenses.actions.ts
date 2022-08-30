import { createAction, props } from '@ngrx/store';
import { IExpense } from '../../../models/expenses';

// Add single expense
export const addExpense = createAction(
  '[Expense] create new expense',
  props<{ expense: IExpense }>()
);

export const addExpenseSuccess = createAction(
  '[Expense] Create New Expense Successful',
  props<{ expenses: IExpense[] }>()
);

export const addExpenseFail = createAction(
  '[Expense] Create New Expense Failure',
  props<{ error: string }>()
);

// Get all expenses
export const getExpenses = createAction('[Expense] Get all expenses');

export const getExpensesSuccess = createAction(
  '[Expense] Get all expenses successful',
  props<{ expenses: IExpense[] }>()
);

export const getExpensesFailure = createAction(
  '[Expense] Get all expenses Failure',
  props<{ error: string }>()
);

// Get single expense
export const getExpense = createAction(
  '[Expense] Get single expense',
  props<{ id: number }>()
);

export const getExpenseSuccess = createAction(
  '[Expense] Get single expense',
  props<{ expense: IExpense }>()
);

export const getExpenseFailure = createAction(
  '[Expense] Get single expense',
  props<{ error: string }>()
);

// Remove single expense
export const removeExpense = createAction(
  '[Expense] Remove expense',
  props<{ id: number }>()
);

export const removeExpenseSuccess = createAction(
  '[Expense] Remove expense',
  props<{ expenses: IExpense[] }>()
);

export const removeExpenseFailure = createAction(
  '[Expense] Remove expense',
  props<{ error: string }>()
);

// Toggle edit mode
export const toggleEditMode = createAction('[Expense] Toggle Edit Mode');

// Filters
export const filterFromDate = createAction(
  '[Expense] Filter Expense from date',
  props<{ date: Date }>()
);

export const filterToDate = createAction(
  '[Expense] Filter Expense to date',
  props<{ date: Date }>()
);

export const filterMin = createAction(
  '[Expense] Filter Expense by minimum total',
  props<{ total: number }>()
);

export const filterMax = createAction(
  '[Expense] Filter Expense by maximum total',
  props<{ total: number }>()
);

export const filterStatus = createAction(
  '[Expense] Filter Expense by status',
  props<{ status: string }>()
);

export const filterMerchant = createAction(
  '[Expense] Filter Expense by merchant',
  props<{ merchant: string }>()
);
