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
  props<{ expense: IExpense }>()
);

export const getExpenseSuccess = createAction(
  '[Expense] Get single expense successful',
  props<{ expense: IExpense }>()
);

export const getExpenseFailure = createAction(
  '[Expense] Get single expense failed',
  props<{ error: string }>()
);

// Remove single expense
export const removeExpense = createAction(
  '[Expense] Remove expense',
  props<{ expense: IExpense }>()
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
// From Date
export const filterFromDate = createAction(
  '[Expense] Filter Expense from date',
  props<{ from: Date; to: Date }>()
);

export const filterFromDateSuccess = createAction(
  '[Expense] Filter Expense From Date SuccessFul',
  props<{ expenses: IExpense[] }>()
);

export const filterFromDateFailure = createAction(
  '[Expense] Filter Expense From Date Failed',
  props<{ error: string }>()
);

// To date
export const filterToDate = createAction(
  '[Expense] Filter Expense to date',
  props<{ from: Date; to: Date }>()
);

export const filterToDateSuccess = createAction(
  '[Expense] Filter Expense To Date SuccessFul',
  props<{ expenses: IExpense[] }>()
);

export const filterToDateFailure = createAction(
  '[Expense] Filter Expense To Date Failed',
  props<{ error: string }>()
);

// Min Total
export const filterMin = createAction(
  '[Expense] Filter Expense by minimum total',
  props<{ max: number; total: number }>()
);

export const filterMinSuccess = createAction(
  '[Expense] Filter Expense Min Total SuccessFul',
  props<{ expenses: IExpense[] }>()
);

export const filterMinFailure = createAction(
  '[Expense] Filter Expense Min Total Failed',
  props<{ error: string }>()
);

// Max Total
export const filterMax = createAction(
  '[Expense] Filter Expense by maximum total',
  props<{ min: number; total: number }>()
);

export const filterMaxSuccess = createAction(
  '[Expense] Filter Expense By Max Total SuccessFul',
  props<{ expenses: IExpense[] }>()
);

export const filterMaxFailure = createAction(
  '[Expense] Filter Expense By Max Total Failed',
  props<{ error: string }>()
);

// By status
export const filterStatus = createAction(
  '[Expense] Filter Expense by status',
  props<{ status: string }>()
);

export const filterStatusSuccess = createAction(
  '[Expense] Filter Expense By Status SuccessFul',
  props<{ expenses: IExpense[] }>()
);

export const filterStatusFailure = createAction(
  '[Expense] Filter Expense By Status Failed',
  props<{ error: string }>()
);

// By Merchant
export const filterMerchant = createAction(
  '[Expense] Filter Expense by merchant',
  props<{ merchant: string }>()
);

export const filterMerchantSuccess = createAction(
  '[Expense] Filter Expense By Merchant SuccessFul',
  props<{ expenses: IExpense[] }>()
);

export const filterMerchantFailure = createAction(
  '[Expense] Filter Expense By Merchant Failed',
  props<{ error: string }>()
);
