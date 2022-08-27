import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { toggleEditMode } from '../../pages/expenses/state/expenses.actions';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.component.html',
  styleUrls: ['./expense-modal.component.css'],
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule],
})
export class ExpenseModalComponent implements OnInit {
  constructor(private store: Store) {}

  closeEditor() {
    this.store.dispatch(toggleEditMode());
  }

  ngOnInit(): void {}
}
