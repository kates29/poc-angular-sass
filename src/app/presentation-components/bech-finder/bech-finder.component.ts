import { Component, OnInit, Input, ViewChild, NgModule, } from '@angular/core';

@Component({
  selector: 'app-bech-finder',
  templateUrl: './bech-finder.component.html',
  styleUrls: ['./bech-finder.component.scss']
})
export class BechFinderComponent implements OnInit {
  search_this:string="";
  msgError:string="";
  active:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  clean_input(){
    this.search_this = "";
  }


}
