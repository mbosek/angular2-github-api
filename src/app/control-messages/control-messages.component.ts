import { Component, Input }  from '@angular/core';
import { FormControl }       from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'my-control-messages',
  templateUrl: './control-messages.component.html'
})

export class ControlMessagesComponent {
    
  @Input() control: FormControl;

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
