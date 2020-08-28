import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  name: string;
  annio: number;
  constructor(){
    this.name = 'Arturo L. A.';
    this.annio = new Date().getFullYear();
  }
}
