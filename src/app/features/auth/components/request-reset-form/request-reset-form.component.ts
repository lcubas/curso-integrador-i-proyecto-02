import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-reset-form',
  templateUrl: './request-reset-form.component.html',
  styleUrls: ['./request-reset-form.component.scss']
})
export class RequestResetFormComponent {
  requestResetForm: FormGroup;

  @Input() isButtonSubmitLoading = false;
  @Output() onSubmitForm = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.requestResetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.requestResetForm.valid) {
      this.onSubmitForm.emit(this.requestResetForm.value);
    }
  }
}
