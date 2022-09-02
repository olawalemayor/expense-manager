import { Injectable } from '@angular/core';
import * as ExpenseApi from '../../assets/api/expenses/api';
import { IExpense } from '../models/expenses';
import { throwError } from 'rxjs';

@Injectable()
export class ExpenseService {
  constructor() {}

  getExpenses() {
    return ExpenseApi.getExpenses();
  }

  getExpense(expense: IExpense) {
    return ExpenseApi.getExpense(expense);
  }

  addExpense(expense: IExpense) {
    return ExpenseApi.addExpense(expense);
  }

  removeExpense(expense: IExpense) {
    return ExpenseApi.removeExpense(expense);
  }

  filterByDate(from?: Date, to?: Date) {
    return ExpenseApi.filterByDate(from, to);
  }

  filterByTotal({ min, max }: { min?: number; max?: number }) {
    return ExpenseApi.filterByTotal(min, max);
  }

  filterByMerchant(merchant: string) {
    return ExpenseApi.filterByMerchant(merchant);
  }

  filterByStatus(status: string) {
    return ExpenseApi.filterByStatus(status);
  }
}
