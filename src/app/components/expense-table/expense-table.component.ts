import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ExpenseTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
