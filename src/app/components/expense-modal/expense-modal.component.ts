import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  toggleEditMode,
  addExpense,
} from '../../pages/expenses/state/expenses.actions';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { IExpense } from '../../models/expenses';
import { Observable } from 'rxjs';
import { getSelectedExpense } from 'src/app/pages/expenses/state/expenses.reducer';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.component.html',
  styleUrls: ['./expense-modal.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
})
export class ExpenseModalComponent implements OnInit {
  constructor(private store: Store) {}

  selectedExpense$!: Observable<IExpense>;

  expenseForm!: FormGroup<{
    merchant: FormControl<string>;
    total: FormControl<number>;
    date: FormControl<Date>;
    comment: FormControl<string>;
    receipt: FormControl<string>;
  }>;

  addNewExpense() {
    const { comment, date, merchant, receipt, total } = this.expenseForm.value;
    const newComment = comment as string;
    const newDate = date as Date;
    const newMerchant = merchant as string;
    const newReceipt = receipt as string;
    const newTotal = total as number;

    const expense: IExpense = {
      Comment: newComment,
      Date: newDate.toString(),
      Merchant: newMerchant,
      Receipt: newReceipt,
      Total: String(newTotal),
      Status: 'New',
    };

    if (!expense.Date || !expense.Merchant) return;

    this.store.dispatch(addExpense({ expense }));

    this.closeEditor();
  }

  saveExpense() {
    // const { comment, date, merchant, receipt, total } = this.expenseForm.value;
    // const newComment = comment as string;
    // const newDate = date as Date;
    // const newMerchant = merchant as string;
    // const newReceipt = receipt as string;
    // const newTotal = total as number;
    // const expense: IExpense = {
    //   comment: newComment,
    //   date: newDate,
    //   merchant: newMerchant,
    //   receipt: newReceipt,
    //   total: newTotal,
    // };
    // if (!expense.date || !expense.merchant || !expense.receipt) return;
    // this.store.dispatch(({ expense }));
    // this.closeEditor();
  }

  closeEditor() {
    this.store.dispatch(toggleEditMode());
  }

  ngOnInit(): void {
    this.selectedExpense$ = this.store.select(getSelectedExpense);

    this.expenseForm = new FormGroup({
      comment: new FormControl(),
      date: new FormControl(),
      merchant: new FormControl(),
      receipt: new FormControl(),
      total: new FormControl(),
    });

    this.selectedExpense$.subscribe((expense) => {
      const {
        Date: date,
        Merchant: merchant,
        Total,
        Comment: comment,
        Receipt,
      } = expense;

      const tempTotal = Total.split('');
      tempTotal.shift();

      const total = Number(tempTotal.join(''));
      const receipt = Receipt || '';

      this.expenseForm.setValue({
        comment,
        date: new Date(date),
        merchant,
        receipt,
        total,
      });
    });
  }
}
