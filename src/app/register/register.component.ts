import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService, AuthenticationService } from '../_services';

export class Register {
    constructor(
      public firstName: string,
      public lastName: string,
      public username:string,
      public password:string,
      public role:string,
    ) { }
  }
@Component({  selector: 'app-register',templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    @Output() registerdata = new EventEmitter<Register>();
    registerForm: FormGroup;
    submitted = false;
    register;
    public obj: any = {};
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required],
            role:['User', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }


        this.obj = { ...this.registerForm.value, ...this.obj };
        this.registerForm.value;
    
     
          if (this.registerForm.valid) {
            this.registerdata.emit(
              new Register(
                this.registerForm.value.firstName,
                this.registerForm.value.lastName,
                this.registerForm.value.username,
                this.registerForm.value.password,
                this.registerForm.value.role,
              )
            );
        }

        var data =  this.registerForm.value;
        this.userService.register(data).pipe(first()).subscribe(
            data => {
               this.register= data;
            },
            error => {
              console.log("LOG: LoginComponent -> onSubmit -> error", error);
            }
          );
    }
}
