import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-password-form',
  templateUrl: './create-password-form.component.html',
  styleUrls: ['./create-password-form.component.scss']
})
export class CreatePasswordFormComponent {
  createPasswordForm: FormGroup;

  @Input() isButtonSubmitLoading = false;
  @Output() onSubmitForm = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.createPasswordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.createPasswordForm.valid) {
      this.onSubmitForm.emit(this.createPasswordForm.value);
    }
  }
}
