import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  apps_array:any[] = [1,2,3,4,5,6,7,8,9,'*',0,'a','f','as'];

  constructor() { }

  ngOnInit() {
  }

}
