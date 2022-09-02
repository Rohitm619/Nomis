import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-completed',
  templateUrl: './recently-completed.component.html',
  styleUrls: ['./recently-completed.component.css'],
})
export class RecentlyCompletedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() parentClass: any;
}
