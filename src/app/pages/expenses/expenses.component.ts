import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExpenseState, getEditMode } from './state/expenses.reducer';
import { toggleEditMode } from './state/expenses.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  constructor(private store: Store<ExpenseState>) {}

  editMode$!: Observable<boolean>;

  openEditor() {
    this.store.dispatch(toggleEditMode());
  }

  ngOnInit(): void {
    this.editMode$ = this.store.select(getEditMode);
  }
}
