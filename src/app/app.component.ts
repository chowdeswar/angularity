import { Component, OnInit } from '@angular/core';
import { TooltipModule, ModalModule } from 'ngx-bootstrap';

import { RouterLink, Router } from '@angular/router';



const HEROES = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 17, name: 'Dynama' },
  { id: 20, name: 'Tornado' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = "tour of heroes";
  heroes = HEROES;

  ngOnInit() {

   }
}
