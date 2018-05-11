import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators{
    static nospace(control: AbstractControl): ValidationErrors | null{ 
        //this fuction requires abstract control and should return errors or null
        if((control.value as string).indexOf(' ') >=0){
            //checking for spaces    
            return { nospace: true};
                //returning parametre requires boolean method 
        }
    }    
}