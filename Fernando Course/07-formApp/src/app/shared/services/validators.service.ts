import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public cantBeStrider = ( control: FormControl) : ValidationErrors | null => {

    const value : string = control.value.trim().toLowerCase();

    if(value === 'strider'){
      return {
        noStrider: true
      };
    }

    return null;
  }

  public isValidField( form : FormGroup, field: string ): boolean | null{
    return form.controls[field].errors && form.controls[field].touched;
  }

  public isFieldOneEqualFieldTwo(field1: string, field2: string){

    // return (formGroup : FormGroup) : ValidationErrors | null => {
    // Segun angular se debe usar esta firma
    return (formGroup : AbstractControl) : ValidationErrors | null => {

      const fieldOneValue = formGroup.get(field1)?.value;
      const fieldTwoValue = formGroup.get(field2)?.value;

      if( fieldOneValue !== fieldTwoValue ){
        formGroup.get(field2)?.setErrors({ notEqual : true });
        return { notEqual : true };
      }

      //Cuidado esto puede quitar los otros errores, en este caso no importa pero se puede buscar el error especifico y quitarlo
      formGroup.get(field2)?.setErrors(null);
      return null;

      // Esta sería en teoria la forma de buscar un error y borrarlo
      // if (formGroup.get(field2)?.hasError('notEqual')) {
      //   delete formGroup.get(field2)?.errors!['notEqual'];
      //   formGroup.get(field2)?.updateValueAndValidity();
      // }
      // return null;
    }
  }

}
