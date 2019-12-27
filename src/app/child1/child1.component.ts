import { Component, OnInit, Input } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  regForm: FormGroup;
  @Input('Manikandan') message: string;
  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group(
      {
        'firstName': [],
        'lastName': []
      }
    )
  }

  ngOnInit() {

  }

}
