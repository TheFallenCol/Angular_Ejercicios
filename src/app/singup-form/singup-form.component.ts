import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.scss']
})
export class SingupFormComponent {
  form = new FormGroup({
    'user-name': new FormControl('default', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', Validators.required)
  })

  get username(){
    return this.form.get("user-name");
  }

  get password(){
    return this.form.get("password");
  }

  checkValue(algo){
    console.log(algo);
    console.log(this.form.get("user-name"));
  }
}
