import { expenses, sampleData } from './expenses';
import { IExpense } from '../../models/expenses';
import { of, throwError } from 'rxjs';

export const getExpenses = () => {
  // Returns list of all expensese

  expenses.next(sampleData);

  return expenses;
};

// export const editExpense = (expense: IExpense) => {
//   const selectedExpense = sampleData.find(exp => exp === expense)

//   if (!selectedExpense) return throwError(() => 'Expense not found')

//   selectedExpense.
// }

export const addExpense = (expense: IExpense) => {
  // Assigns the ID of the expense by adding 1, then adds the expense to the expenses array

  const exp = [...sampleData];

  const status = 'New';

  const newExpense = Object.freeze<IExpense>({
    Status: status,
    Comment: expense.Comment,
    Date: expense.Date,
    Merchant: expense.Merchant,
    Total: expense.Total,
    Receipt: expense.Receipt,
  });

  exp.push(newExpense);

  expenses.next(exp);

  return expenses;
};

export const getExpense = (findValue: IExpense) => {
  // Gets expense using id of expense

  const expense = sampleData.find((expense) => expense === findValue);

  if (!expense) {
    return throwError(() => 'Expense not found');
  }

  return of(expense);
};

export const removeExpense = (findValue: IExpense) => {
  // Removes expense by id
  const exp = sampleData;

  const newExpenses = exp.filter((expense) => expense !== findValue);

  expenses.next(newExpenses);

  return expenses;
};

export const filterByDate = (from?: Date, to?: Date) => {
  if (!from && !to) return expenses;

  // Filters by date and return expenses based on from and to provisions
  const exp = sampleData.filter((expense) => {
    const date = new Date(expense.Date);

    if (from && to) return date >= from && date <= to;
    else if (from) return date >= from;
    else if (to) return date <= to;
    else return;
  });

  expenses.next(exp);

  return expenses;
};

export const filterByTotal = (min?: number, max?: number) => {
  // Filter Total amount by min and max amount

  if (!min && !max) return expenses;

  const exp = sampleData.filter((expense) => {
    const totalString = expense.Total.split('');
    totalString.shift();
    const total = Number(totalString.join(''));

    if (min && max) return total >= min && total <= max;
    else if (min) return total >= min;
    else if (max) return total <= max;
    else return;
  });

  expenses.next(exp);

  return expenses;
};

export const filterByMerchant = (merchant: string) => {
  if (!merchant) return expenses;

  const exp = sampleData.filter((expense) => expense.Merchant === merchant);

  expenses.next(exp);

  return expenses;
};

export const filterByStatus = (status: string) => {
  if (!status) return expenses;

  const exp = sampleData.filter((expense) => expense.Status === status);

  expenses.next(exp);

  return expenses;
};
