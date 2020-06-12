import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    constructor(private userService: UserService) { }

    orderData:any;
  
    ngOnInit() {
      this.getfitness();
    }
    getfitness() {
      this.userService.getfitnessdata().subscribe(
        data => {
           this.orderData = data;
        },
        error => {
          console.log("LOG: LoginComponent -> onSubmit -> error", error);
        }
      );
    }
   
}