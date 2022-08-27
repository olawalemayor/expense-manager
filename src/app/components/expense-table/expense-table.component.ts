import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { Store } from '@ngrx/store';

@Component({
  selector: 'expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule],
})
export class ExpenseTableComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
