import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  message: string='';

  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.form = this.formbuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form.controls;
  }

  submithandelr() {
    if (
      this.form.value.mail === 'mohamed@gmail.com' &&
      this.form.value.pass === '1234'
    ) {
      console.log('login successfull');
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
        this.message ='login successfull'
      });
    } else {
      console.log('login failed');
      alert('login failed');
      this.message ='login failed'
    }
  }
}
