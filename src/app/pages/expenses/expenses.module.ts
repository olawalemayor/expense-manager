import { NgModule } from '@angular/core';

import { ExpensesComponent } from './expenses.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { expenseReducer } from './state/expenses.reducer';
import { InfoBarComponent } from '../../components/info-bar/info-bar.component';
import { FilterComponent } from '../../components/filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('expense', expenseReducer),
    FilterComponent,
    InfoBarComponent,
  ],
  exports: [],
  declarations: [ExpensesComponent],
  providers: [],
})
export class ExpensesModule {}
