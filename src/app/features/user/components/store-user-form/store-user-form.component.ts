import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

enum DocumentType {
   
}

interface StoreUser {
  documentType: string,
  documentNumber: string,
  firstName: string,
  lastName: string,
  email: string,
  department: string,
  district: string,
  address: string,
  birthday: string,
  phoneNumber: string,
}

@Component({
  selector: 'app-store-user-form',
  templateUrl: './store-user-form.component.html',
  styleUrls: ['./store-user-form.component.scss']
})
export class StoreUserFormComponent {
  storeUserForm: FormGroup;

  @Input() isButtonSubmitLoading = false;
  @Output() onSubmitForm = new EventEmitter();

  @ViewChild('picker') datepicker!: MatDatepicker<Date>;

  constructor(private fb: FormBuilder) {
    this.storeUserForm = this.fb.group({
      documentType: ['', [Validators.required]],
      documentNumber: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required]],
      district: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.storeUserForm.valid) {
      this.onSubmitForm.emit(this.storeUserForm.value);
    }
  }

  openDatepicker() {
    this.datepicker.open();
  }
}
