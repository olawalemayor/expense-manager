import { expenses } from './expenses';
import { IExpense } from '../../../app/models/expenses';
import { of, throwError } from 'rxjs';

export const getExpenses = () => {
  // Returns list of all expensese
  return expenses;
};

export const addExpense = (expense: IExpense) => {
  // Assigns the ID of the expense by adding 1, then adds the expense to the expenses array

  const exp = [...expenses.getValue()];

  const id = exp.length + 1;
  const status = 'new';

  const newExpense: IExpense = { id, status, ...expense };

  exp.push(newExpense);

  expenses.next(exp);

  return expenses;
};

export const getExpense = (id: number) => {
  // Gets expense using id of expense

  const expense = expenses.getValue().find((expense) => expense.id === id);

  if (!expense) {
    return throwError(() => 'Expense not found');
  }

  return of(expense);
};

export const removeExpense = (id: number) => {
  // Removes expense by id
  const exp = expenses.getValue();

  const newExpenses = exp.filter((expense) => expense.id !== id);

  expenses.next(newExpenses);

  return expenses;
};
