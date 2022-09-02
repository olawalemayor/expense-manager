import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { of, takeUntil } from 'rxjs';
import { IExpense } from 'src/app/models/expenses';
import {
  ExpenseState,
  getExpenses,
} from 'src/app/pages/expenses/state/expenses.reducer';
import {
  getExpense,
  getExpenses as getAllExpenses,
  toggleEditMode,
} from '../../pages/expenses/state/expenses.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    FormsModule,
  ],
})
export class ExpenseTableComponent implements OnInit {
  constructor(private store: Store<ExpenseState>) {}

  subs = of();

  displayedColumns: string[] = [
    'date',
    'merchant',
    'total',
    'status',
    'comment',
  ];

  sortedExpenses!: IExpense[];

  expenses!: IExpense[];

  sortData(sort: Sort) {
    const data = this.expenses.slice();

    if (!sort.active || sort.direction === '') {
      this.sortedExpenses = data;
      return;
    }

    this.sortedExpenses = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';

      switch (sort.active) {
        case 'date':
          return compare(a.Date, b.Date, isAsc);
        case 'merchant':
          return compare(a.Merchant, b.Merchant, isAsc);
        case 'total':
          return compare(a.Total, b.Total, isAsc);
        case 'status':
          return compare(a.Status, b.Status, isAsc);
        default:
          return 0;
      }
    });
  }

  selectExpense(expense: any) {
    const selectedExpense = expense as IExpense;

    this.store.dispatch(getExpense({ expense: selectedExpense }));

    this.store.dispatch(toggleEditMode());
  }

  searchTerm!: string;
  searchTable() {
    const expenses = [...this.expenses];
    this.sortedExpenses = expenses.filter((e) => {
      const merchant = e.Merchant.toLowerCase();

      return merchant.includes(this.searchTerm.toLowerCase());
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getAllExpenses());
    this.store
      .select(getExpenses)
      .pipe(takeUntil(this.subs))
      .subscribe((expenses) => {
        this.expenses = expenses;
        this.sortedExpenses = this.expenses.slice();
      });
  }
}

function compare(
  a: number | string | Date | any,
  b: number | string | Date | any,
  isAsc: boolean
) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
