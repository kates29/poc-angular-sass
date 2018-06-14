import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-panel-collapse',
  templateUrl: './panel-collapse.component.html',
  styleUrls: ['./panel-collapse.component.scss'],
  animations: [
		trigger('expandCollapse', [ state('expandCollapseState', style({height: '0', opacity:"0"})),
            transition('* => void', [style({height: '*'}), animate('.5s ease-in-out', style({height: "0",opacity:"0"})) ]),
            transition('void => *', [style({height: '0',opacity:"0"}), animate('.5s ease-in-out', style({height: "*",opacity:"1"})) ])
	    ]
  )]
})
export class PanelCollapseComponent implements OnInit {
  @Input() question: any;
  constructor() { }

  ngOnInit() {
  }

  show_this_panel(collapse_this): void{
    console.log("Animation on: "+collapse_this);
    console.log(this[collapse_this]);
    this[collapse_this] = !this[collapse_this];
  }
}
