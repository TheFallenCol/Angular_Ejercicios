import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators{
    static canNotContaintSpace(control : AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0){
            
            //Ejemplo de envio de objeto complejo
            // return { minLength : {
            //     requiredLength: 10,
            //     actualLength : control.value.length
            // }};

            return { canNotContaintSpace : true };            
        }
        
        return null;
    }

    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null>{        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((control.value as string).toLowerCase() === 'german')
                    resolve({shouldBeUnique : true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}