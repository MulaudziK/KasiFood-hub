import { Component, OnInit } from '@angular/core';
import  { FormBuilder, Validators, FormGroup, AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import { ConfirmEqualValidatorDirective } from '../shared/confim-equal-validator.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  get fname() {
    return this.registrationForm.get('fname');
  }

  get lname() {
    return this.registrationForm.get('lname');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get cellPhone() {
    return this.registrationForm.get('cellPhone');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

 

  public errorFeedback = {

    fname:[
      {type: 'required', feedback: 'First name is required'},
      {type: 'maxlength' , feedback: 'First name cannot be longer than 50 characters'}
    ],

    lname:[
      {type: 'required', feedback: 'Last name is required'},
      {type: 'maxlength' , feedback: 'Last name cannot be longer than 50 characters'}
   
    ],

    email:[
      {type: 'required', feedback: 'Email is required'},
      {type: 'pattern', feedback: 'Please enter a valid email address'}
    ],

    cellPhone:[
      {type: 'required', feedback: 'Cellphone number is required'},
      {type: 'pattern' , feedback: 'Please enter a valid cellphone number'}
    ],

    password:[
      {type: 'required' , feedback: 'Please enter password'},
      {type: 'pattern' , feedback: 'please enter valid password'}
    ],

    confirmPassword:[
      {type: 'required' , feedback: 'Please enter password'},
      {type: 'pattern' , feedback: 'please enter valid password'}
    ]

  }

  registrationForm = this.fb.group({
    fname:['', [
      Validators.required,
      Validators.maxLength(50)
    ]
    ],
    lname:['', [
      Validators.required,
      Validators.maxLength(50)
    ]
    ],
    email:['', [
      Validators.required,
      Validators.pattern("[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]
  ],
    cellPhone: ['', [
      Validators.required,
      Validators.pattern("(^0[678][12345678][0-9]{7})")
    ]
  ],
    password:['', [
      Validators.required, 
      Validators.pattern("[A-z].{8,}")
    ]
  ],
    confirmPassword:['', [
      Validators.required,
      Validators.pattern
    ]
  ]

  });


  constructor(private fb: FormBuilder) {

   

   }

  ngOnInit() {
    
  }

  public registerForm() {

    if (this.registrationForm.get('password').value !== this.registrationForm.get('confirmPassword').value) {
      console.log('Passwords do not match'); 
    }
    else
    {
      console.log('Passwords match');
      console.log(this.registrationForm.value);
    }

    
  }

  

}
