import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bech-select',
  templateUrl: './bech-select.component.html',
  styleUrls: ['./bech-select.component.scss']
})
export class BechSelectComponent implements OnInit {
  @Input() categories: any;
  constructor() { }

  ngOnInit() {
  }

}
