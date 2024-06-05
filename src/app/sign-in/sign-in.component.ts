import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  form: FormGroup;
  message: string='';

  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.form = this.formbuilder.group({
      name: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form.controls;
  }

  signInhandelr() {
    if (
      this.form.value.name === 'mohamed' &&
      this.form.value.mail === 'mohamed@gmail.com' &&
      this.form.value.pass === '1234'
    ) {
      console.log('sign in successfull');
      alert('sign in successfull');
      this.message='sign in successfull'

     
    } else {
      console.log('sign in failed');
      alert('sign in failed');
      this.message='sign in failed'

    }
  }
}
