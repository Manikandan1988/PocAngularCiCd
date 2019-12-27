import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(Child1Component) child1: Child1Component;
  @ViewChild(Child2Component) child2: Child2Component;
  message: any;
  constructor(private dc: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.message = "Dhinesh";
  }
  ngAfterViewInit() {
    console.log(this.child1);
    console.log(this.child2);
    // this.message = "Raja";
    // this.dc.detectChanges();
  }

  clickme() {
    //this.dc.detectChanges();
    console.log(this.child1.regForm.value);
    console.log(this.child2);
  }

}
