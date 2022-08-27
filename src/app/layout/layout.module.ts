import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './UI/header/header.component';
import { FooterComponent } from './UI/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProfileModule } from '../pages/profile/profile.module';
import { ExpensesModule } from '../pages/expenses/expenses.module';

@NgModule({
  imports: [LayoutRoutingModule, CommonModule],
  exports: [ProfileModule, ExpensesModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  providers: [],
})
export class LayoutModule {}
