import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExpenseState, getEditMode } from './state/expenses.reducer';
import { toggleEditMode, clearExpense } from './state/expenses.actions';
import { Observable } from 'rxjs';
import { IExpense } from '../../models/expenses';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  constructor(private store: Store<ExpenseState>) {}

  editMode$!: Observable<boolean>;

  openEditor() {
    const newExpense: IExpense = {
      Date: new Date().toString(),
      Merchant: '',
      Status: 'New',
      Total: (0).toString(),
      Comment: '',
      Receipt: '',
    };

    this.store.dispatch(clearExpense());

    this.store.dispatch(toggleEditMode());
  }

  ngOnInit(): void {
    this.editMode$ = this.store.select(getEditMode);
  }
}
