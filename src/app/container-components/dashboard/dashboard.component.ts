import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../shared/services/questions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  apps_array:any[] = [
    {"name":"Saldos Y Transferencias", "icon": "access_time"},
    {"name":"Banca Móvil", "icon": "access_time"},
    {"name":"Mi App", "icon": "access_time"},
    {"name":"PagoRUT", "icon": "access_time"},
    {"name":"Clave Tarjeta", "icon": "access_time"},
    {"name":"Cambiar Clave App", "icon": "access_time"},
    {"name":"Otra Fx", "icon": "access_time"},
    {"name":"Seguros", "icon": "access_time"},
    {"name":"Inversiones", "icon": "access_time"},
    {"name":'Avance Tarjetas', "icon": "access_time"},
    {"name":"Dudas existenciales", "icon": "access_time"},
    {"name":'Más...', "icon": "access_time"}
  ];

  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
  }

  go_to(url):void{
    this.questionService.go_to(url);
  }

}
