import { NgModule } from '@angular/core';

import { ExpensesComponent } from './expenses.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { expenseReducer } from './state/expenses.reducer';
import { FilterComponent } from '../../components/filter/filter.component';
import { Routes, RouterModule } from '@angular/router';
import { InfoBarComponent } from '../../components/info-bar/info-bar.component';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('expense', expenseReducer)],
  exports: [],
  declarations: [ExpensesComponent, FilterComponent, InfoBarComponent],
  providers: [],
})
export class ExpensesModule {}
