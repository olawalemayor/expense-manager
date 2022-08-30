import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { getExpenses } from 'src/app/pages/expenses/state/expenses.reducer';
import { getExpenses as loadExpenses } from 'src/app/pages/expenses/state/expenses.actions';
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
  ],
})
export class FilterComponent implements OnInit {
  constructor(private store: Store) {}

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
    this.clear();
    this.store.dispatch(filterFromDate({ date: this.from }));
  }

  filterTo() {
    this.clear;
    this.store.dispatch(filterToDate({ date: this.to }));
  }

  filterMin() {
    this.clear();
    this.store.dispatch(filterMin({ total: this.min }));
  }

  filterMax() {
    this.clear();
    this.store.dispatch(filterMax({ total: this.max }));
  }

  filterMerchant() {
    this.clear();
    this.store.dispatch(filterMerchant({ merchant: this.merchant }));
  }

  filterStatus() {
    this.clear();
    this.store.dispatch(filterStatus({ status: this.status }));
  }

  ngOnInit(): void {
    this.store.select(getExpenses).subscribe((expenses) => {
      this.merchants = Array.from(new Set(expenses.map((ex) => ex.merchant)));
    });
  }
}
