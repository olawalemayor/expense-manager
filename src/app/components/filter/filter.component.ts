import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import {
  ExpenseState,
  getExpenses,
} from 'src/app/pages/expenses/state/expenses.reducer';
import { getExpenses as loadExpenses } from 'src/app/pages/expenses/state/expenses.actions';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { getTotalExpenses } from '../../pages/expenses/state/expenses.reducer';
import {
  filterFromDate,
  filterToDate,
  filterMin,
  filterMax,
  filterMerchant,
  filterStatus,
} from '../../pages/expenses/state/expenses.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
  ],
})
export class FilterComponent implements OnInit {
  constructor(private store: Store<ExpenseState>) {}

  merchants!: string[];

  // onSetMechant(merchant: string) {
  //   this.merchant = merchant;
  // }

  // setStatus(status: string) {
  //   this.status = status;
  // }

  from!: Date;
  to!: Date;
  min!: number;
  max!: number;
  merchant!: string;
  status!: string;

  isOpened = false;

  toggleFilter() {
    this.isOpened = !this.isOpened;
  }

  clear() {
    this.store.dispatch(loadExpenses());
  }

  removeFilters() {
    this.clear();
    this.from = new Date();
    this.to = new Date();
    this.status = '';
    this.merchant = '';
    this.min = 0;
    this.max = 0;
  }

  // Filter actions
  filterFrom() {
    console.log('Called');
    const to = this.to ? this.to : new Date();

    this.store.dispatch(filterFromDate({ from: this.from, to }));
  }

  filterTo() {
    const from = this.from ? this.from : new Date(0, 0, 0, 0);
    this.store.dispatch(filterToDate({ from, to: this.to }));
  }

  filterMin() {
    const max = this.max ? this.max : 9999999999999999999999999;
    this.store.dispatch(filterMin({ max, total: this.min }));
  }

  filterMax() {
    const min = this.min ? this.min : 0;
    this.store.dispatch(filterMax({ min, total: this.max }));
  }

  filterMerchant() {
    this.store.dispatch(filterMerchant({ merchant: this.merchant }));
  }

  filterStatus() {
    this.store.dispatch(filterStatus({ status: this.status }));
  }

  totalExpense!: Observable<number>;

  ngOnInit(): void {
    this.store.select(getExpenses).subscribe((expenses) => {
      this.merchants = Array.from(new Set(expenses.map((ex) => ex.Merchant)));
    });

    this.totalExpense = this.store.select(getTotalExpenses);
  }
}
