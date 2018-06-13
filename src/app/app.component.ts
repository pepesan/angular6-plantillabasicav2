import { Component } from '@angular/core';
import {Cliente} from './cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cliente: Cliente;
  constructor() {
    this.cliente = new Cliente('David', 'Vaquero', '098765443A');
  }
}
