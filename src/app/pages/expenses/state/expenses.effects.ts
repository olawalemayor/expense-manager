import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ExpenseService } from '../../../shared/expense.service';
import * as ExpenseActions from './expenses.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ExpenseEffects {
  constructor(
    private actions$: Actions,
    private expenseService: ExpenseService
  ) {}

  addExpense$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.addExpense),
      mergeMap(({ expense }) =>
        this.expenseService.addExpense(expense).pipe(
          map((expenses) => ExpenseActions.addExpenseSuccess({ expenses })),
          catchError((error) => of(ExpenseActions.addExpenseFail({ error })))
        )
      )
    );
  });

  getExpense$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.getExpense),
      mergeMap(({ expense }) =>
        this.expenseService.getExpense(expense).pipe(
          map((expense) => ExpenseActions.getExpenseSuccess({ expense })),
          catchError((error) => of(ExpenseActions.getExpenseFailure({ error })))
        )
      )
    );
  });

  getExpenses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.getExpenses),
      mergeMap(() =>
        this.expenseService.getExpenses().pipe(
          map((expenses) => ExpenseActions.getExpensesSuccess({ expenses })),
          catchError((error) =>
            of(ExpenseActions.getExpensesFailure({ error }))
          )
        )
      )
    );
  });

  removeExpense$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.removeExpense),
      mergeMap(({ expense }) =>
        this.expenseService.removeExpense(expense).pipe(
          map((expenses) => ExpenseActions.removeExpenseSuccess({ expenses })),
          catchError((error) =>
            of(ExpenseActions.removeExpenseFailure({ error }))
          )
        )
      )
    );
  });

  filterExpenseFrom$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.filterFromDate),
      mergeMap(({ from, to }) =>
        this.expenseService.filterByDate(from, to).pipe(
          map((expenses) => ExpenseActions.filterFromDateSuccess({ expenses })),
          catchError((error) =>
            of(ExpenseActions.filterFromDateFailure({ error }))
          )
        )
      )
    );
  });

  filterExpenseTo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.filterToDate),
      mergeMap(({ from, to }) =>
        this.expenseService.filterByDate(from, to).pipe(
          map((expenses) => ExpenseActions.filterToDateSuccess({ expenses })),
          catchError((error) =>
            of(ExpenseActions.filterToDateFailure({ error }))
          )
        )
      )
    );
  });

  filterExpenseMin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.filterMin),
      mergeMap(({ max, total }) =>
        this.expenseService.filterByTotal({ min: total, max }).pipe(
          map((expenses) => ExpenseActions.filterMinSuccess({ expenses })),
          catchError((error) => of(ExpenseActions.filterMinFailure({ error })))
        )
      )
    );
  });

  filterExpenseMax$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.filterMax),
      mergeMap(({ min, total }) =>
        this.expenseService.filterByTotal({ min, max: total }).pipe(
          map((expenses) => ExpenseActions.filterMaxSuccess({ expenses })),
          catchError((error) => of(ExpenseActions.filterMaxFailure({ error })))
        )
      )
    );
  });

  filterExpenseMerchant$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.filterMerchant),
      mergeMap(({ merchant }) =>
        this.expenseService.filterByMerchant(merchant).pipe(
          map((expenses) => ExpenseActions.filterMerchantSuccess({ expenses })),
          catchError((error) =>
            of(ExpenseActions.filterMerchantFailure({ error }))
          )
        )
      )
    );
  });

  filterExpenseStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.filterStatus),
      mergeMap(({ status }) =>
        this.expenseService.filterByStatus(status).pipe(
          map((expenses) => ExpenseActions.filterStatusSuccess({ expenses })),
          catchError((error) =>
            of(ExpenseActions.filterStatusFailure({ error }))
          )
        )
      )
    );
  });
}
