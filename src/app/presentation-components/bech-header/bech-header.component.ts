import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../../shared/services/questions.service';

@Component({
  selector: 'app-bech-header',
  templateUrl: './bech-header.component.html',
  styleUrls: ['./bech-header.component.scss']
})
export class BechHeaderComponent implements OnInit {
  @Input() url: any;
  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
  }

}
