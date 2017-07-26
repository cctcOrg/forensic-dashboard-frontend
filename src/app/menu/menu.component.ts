import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  
})

export class MenuComponent implements OnInit {
  links = ["Cases", "Settings"];

  constructor() { }

  ngOnInit() {
  }
  
  name = "John Doe";
  
  onClick() {
     console.log("Hello");
  }

}