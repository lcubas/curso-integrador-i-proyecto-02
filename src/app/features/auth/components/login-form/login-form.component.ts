
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export type LoginFormValues = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup;

  @Input() isButtonSubmitLoading = false;
  @Output() onSubmitForm = new EventEmitter<LoginFormValues>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.onSubmitForm.emit(this.loginForm.value);
    }
  }
}
