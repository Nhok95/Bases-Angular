import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about', // selector --> Elemento que me va a permitir injectar este componente en otros
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
