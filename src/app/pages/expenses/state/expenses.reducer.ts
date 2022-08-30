import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { IExpense } from '../../../models/expenses';
import * as ExpenseActions from './expenses.actions';
import { State } from '../../../state/app.state';
export interface ExpenseState extends State {
  expenses: IExpense[];
  totalExpense: number;
  selectedExpense: IExpense;
  error: string;
  editMode: boolean;
}

const initialState: ExpenseState = {
  expenses: [],
  selectedExpense: {
    date: new Date(),
    id: 0,
    merchant: '',
    status: 'new',
    total: 0,
    comment: '',
    receipt: '',
  },
  error: '',
  totalExpense: 0,
  editMode: false,
};

const expenseFeatureSlice = createFeatureSelector<ExpenseState>('expense');

export const getExpenses = createSelector(
  expenseFeatureSlice,
  (state) => state.expenses
);

export const getSelectedExpense = createSelector(
  expenseFeatureSlice,
  (state) => state.selectedExpense
);

export const getEditMode = createSelector(
  expenseFeatureSlice,
  (state) => state.editMode
);

export const getTotalExpenses = createSelector(
  expenseFeatureSlice,
  (state) => state.totalExpense
);

export const expenseReducer = createReducer(
  initialState,

  // Add expense case
  on(ExpenseActions.addExpenseSuccess, (state, action): ExpenseState => {
    const newTotal = setTotalExpense(action);

    return {
      ...state,
      expenses: action.expenses,
      totalExpense: newTotal,
    };
  }),

  on(ExpenseActions.addExpenseFail, (state, action): ExpenseState => {
    return {
      ...state,
      error: action.error,
    };
  }),

  // Get Single Expense
  on(ExpenseActions.getExpenseSuccess, (state, action): ExpenseState => {
    return {
      ...state,
      selectedExpense: action.expense,
    };
  }),

  on(ExpenseActions.getExpenseFailure, (state, action): ExpenseState => {
    return {
      ...state,
      error: action.error,
    };
  }),

  // Get all expenses
  on(ExpenseActions.getExpensesSuccess, (state, action): ExpenseState => {
    const newTotal = setTotalExpense(action);

    return {
      ...state,
      expenses: action.expenses,
      totalExpense: newTotal,
    };
  }),

  on(ExpenseActions.getExpensesFailure, (state, action): ExpenseState => {
    return {
      ...state,
      error: action.error,
    };
  }),

  // Remove single expense
  on(ExpenseActions.removeExpenseSuccess, (state, action): ExpenseState => {
    return {
      ...state,
      expenses: action.expenses,
    };
  }),

  on(ExpenseActions.removeExpenseFailure, (state, action): ExpenseState => {
    return {
      ...state,
      error: action.error,
    };
  }),

  // Toggle Edit mode
  on(ExpenseActions.toggleEditMode, (state): ExpenseState => {
    return {
      ...state,
      editMode: !state.editMode,
    };
  }),

  // Filters

  // From date
  on(ExpenseActions.filterFromDate, (state, actions): ExpenseState => {
    const expenses = [...state.expenses].filter(
      (expense) => expense.date >= actions.date
    );

    return {
      ...state,
      expenses,
    };
  }),

  // To date
  on(ExpenseActions.filterToDate, (state, actions): ExpenseState => {
    const expenses = [...state.expenses].filter(
      (expense) => expense.date <= actions.date
    );

    return {
      ...state,
      expenses,
    };
  }),

  // By min total
  on(ExpenseActions.filterMin, (state, actions): ExpenseState => {
    const expenses = [...state.expenses].filter(
      (expense) => expense.total >= actions.total
    );

    return {
      ...state,
      expenses,
    };
  }),

  // By max total
  on(ExpenseActions.filterMax, (state, actions): ExpenseState => {
    const expenses = [...state.expenses].filter(
      (expense) => expense.total <= actions.total
    );

    return {
      ...state,
      expenses,
    };
  }),

  // By merchant
  on(ExpenseActions.filterMerchant, (state, actions): ExpenseState => {
    const expenses = [...state.expenses].filter(
      (expense) => expense.merchant === actions.merchant
    );

    return {
      ...state,
      expenses,
    };
  }),

  // By status
  on(ExpenseActions.filterStatus, (state, actions): ExpenseState => {
    const expenses = [...state.expenses].filter(
      (expense) => expense.status === actions.status
    );

    return {
      ...state,
      expenses,
    };
  })
);

const setTotalExpense = (action: { expenses: IExpense[] }) => {
  let newTotal = 0;
  const newExpenses = action.expenses;
  newExpenses.forEach((expense) => {
    if (expense.status === 'new') newTotal += expense.total;
  });

  return newTotal;
};
