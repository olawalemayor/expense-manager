import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class InfoBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
