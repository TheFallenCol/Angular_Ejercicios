import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validators.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm : FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern) ]],
    // El ingreso del validador asíncrono se puede realizar de ambas formas, se sugiere inyectarlo
    // email: ['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern) ], [ new EmailValidator() ]],
    email: ['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern) ], [ this.emailValidator ]],
    username: ['', [ Validators.required, this.validatorsService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', Validators.required],
  },
  {
    validators : [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
  ){
  }

  isVaslidField( field: string ): boolean | null{
    return this.validatorsService.isValidField( this.myForm, field );
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
