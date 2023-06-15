import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-new-subscriber',
  templateUrl: './new-subscriber.component.html',
  styleUrls: ['./new-subscriber.component.css'],
})
export class NewSubscriberComponent {
  subscriberForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.subscriberForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      phoneCode: [''],
      phone: [''],
    });
  }

  onSubmit() {
    if (this.subscriberForm.invalid) {
      return;
    }

    const formData = this.subscriberForm.value;

    this.apiService.createSubscriber(formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );

    // Reset the form after send the data
    this.subscriberForm.reset();
  }
}
