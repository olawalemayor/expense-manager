import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  ExpenseState,
  getTotalExpenses,
} from '../../pages/expenses/state/expenses.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class InfoBarComponent implements OnInit {
  constructor(private store: Store<ExpenseState>) {}

  totalExpenses!: Observable<number>;

  ngOnInit(): void {
    this.totalExpenses = this.store.select(getTotalExpenses);
  }
}
