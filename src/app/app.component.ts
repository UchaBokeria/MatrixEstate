import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testA';
  toggle = false;
  
  constructor() { 
    setTimeout(() => {
      this.toggle = true;
    },2000);
  }

  ngOnInit(): void {

  }
}
