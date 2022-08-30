import { NgModule } from '@angular/core';

import { ExpensesComponent } from './expenses.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { expenseReducer } from './state/expenses.reducer';
import { InfoBarComponent } from '../../components/info-bar/info-bar.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { ExpenseService } from '../../shared/expense.service';
import { EffectsModule } from '@ngrx/effects';
import { ExpenseEffects } from './state/expenses.effects';
import { ExpenseModalComponent } from '../../components/expense-modal/expense-modal.component';
import { ExpenseTableComponent } from '../../components/expense-table/expense-table.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('expense', expenseReducer),
    FilterComponent,
    InfoBarComponent,
    ExpenseModalComponent,
    ExpenseTableComponent,
    EffectsModule.forFeature([ExpenseEffects]),
  ],
  exports: [],
  declarations: [ExpensesComponent],
  providers: [ExpenseService, ExpenseEffects],
})
export class ExpensesModule {}
