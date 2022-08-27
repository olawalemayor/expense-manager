import { Injectable } from '@angular/core';
import * as ExpenseApi from '../../assets/api/expenses/api';
import { IExpense } from '../models/expenses';

@Injectable()
export class ExpenseService {
  constructor() {}

  getExpenses() {
    return ExpenseApi.getExpenses();
  }

  getExpense(id: number) {
    return ExpenseApi.getExpense(id);
  }

  addExpense(expense: IExpense) {
    return ExpenseApi.addExpense(expense);
  }

  removeExpense(id: number) {
    return ExpenseApi.removeExpense(id);
  }
}
