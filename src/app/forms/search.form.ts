import { Component, OnInit }        from '@angular/core';
import {
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  Validators
}                                   from '@angular/forms';

import { ControlMessagesComponent } from '../control-messages/control-messages.component';

@Component({
  selector: 'my-search-form',
  templateUrl: './search.form.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ControlMessagesComponent]
})

export class SearchFormComponent implements OnInit {

  private form: any;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      'search': ['', Validators.required]
    });
  }

  search() {
    if (this.form.dirty && this.form.valid) {
      alert(`Name: ${this.form.value.email}`);
    }
  }
}
