import { Component, OnInit } from '@angular/core';
import { } from '@angular/forms';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  public userName: string;


  constructor() { }



  ngOnInit() {
    console.log(this.userName);
  }

}
