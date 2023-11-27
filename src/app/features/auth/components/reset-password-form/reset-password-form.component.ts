import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent {
  resetPasswordForm: FormGroup;

  @Input() isButtonSubmitLoading = false;
  @Output() onSubmitForm = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.onSubmitForm.emit(this.resetPasswordForm.value);
    }
  }
}
