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
    Date: new Date().toString(),
    Merchant: '',
    Status: 'New',
    Total: (0).toString(),
    Comment: '',
    Receipt: '',
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

  on(ExpenseActions.clearExpense, (state): ExpenseState => {
    return {
      ...state,
      selectedExpense: {
        Date: new Date().toString(),
        Merchant: '',
        Status: 'New',
        Total: (0).toString(),
        Comment: '',
        Receipt: '',
      },
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
  on(ExpenseActions.filterFromDateSuccess, (state, actions): ExpenseState => {
    return {
      ...state,
      expenses: actions.expenses,
    };
  }),

  on(ExpenseActions.filterFromDateFailure, (state, actions): ExpenseState => {
    return {
      ...state,
      error: actions.error,
    };
  }),

  //   // To date
  on(ExpenseActions.filterToDateSuccess, (state, actions): ExpenseState => {
    return {
      ...state,
      expenses: actions.expenses,
    };
  }),

  on(ExpenseActions.filterToDateFailure, (state, actions): ExpenseState => {
    return {
      ...state,
      error: actions.error,
    };
  }),

  //   // By min total
  on(ExpenseActions.filterMinSuccess, (state, actions): ExpenseState => {
    return {
      ...state,
      expenses: actions.expenses,
    };
  }),

  on(ExpenseActions.filterMinFailure, (state, actions): ExpenseState => {
    return {
      ...state,
      error: actions.error,
    };
  }),

  //   // By max total
  on(ExpenseActions.filterMaxSuccess, (state, actions): ExpenseState => {
    return {
      ...state,
      expenses: actions.expenses,
    };
  }),

  on(ExpenseActions.filterMaxFailure, (state, actions): ExpenseState => {
    return {
      ...state,
      error: actions.error,
    };
  }),

  //   // By merchant
  on(ExpenseActions.filterMerchantSuccess, (state, actions): ExpenseState => {
    return {
      ...state,
      expenses: actions.expenses,
    };
  }),

  on(ExpenseActions.filterMerchantFailure, (state, actions): ExpenseState => {
    return {
      ...state,
      error: actions.error,
    };
  }),

  //   // By status
  on(ExpenseActions.filterStatusSuccess, (state, actions): ExpenseState => {
    return {
      ...state,
      expenses: actions.expenses,
    };
  }),

  on(ExpenseActions.filterStatusFailure, (state, actions): ExpenseState => {
    return {
      ...state,
      error: actions.error,
    };
  })
);

const setTotalExpense = (action: { expenses: IExpense[] }) => {
  let newTotal = 0;
  const newExpenses = action.expenses;

  newExpenses.forEach((expense) => {
    if (expense.Status === 'New') {
      const totalString = expense.Total.split('');
      totalString.shift();

      const total = Number(totalString.join(''));

      newTotal += total;
    }
  });
  return newTotal;
};
