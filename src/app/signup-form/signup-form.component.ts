import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  formcontrol= new FormGroup({  //instance of a form group object

    //instance of password and username has been created
    username: new FormControl('', Validators.required), //formcontrol is derived from abstract class
    password: new FormControl('', Validators.required) 
    //validators added in form control objects and initially set to null  
  });

  get username(){
    return this.formcontrol.get('username'); //to get the value of username in div
  }

}
