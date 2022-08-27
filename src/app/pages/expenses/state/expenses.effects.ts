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
      mergeMap(({ id }) =>
        this.expenseService.getExpense(id).pipe(
          map((expense) => ExpenseActions.getExpenseSuccess({ expense })),
          catchError((error) => of(ExpenseActions.addExpenseFail({ error })))
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
      mergeMap(({ id }) =>
        this.expenseService.removeExpense(id).pipe(
          map((expenses) => ExpenseActions.addExpenseSuccess({ expenses })),
          catchError((error) => of(ExpenseActions.addExpenseFail({ error })))
        )
      )
    );
  });
}
