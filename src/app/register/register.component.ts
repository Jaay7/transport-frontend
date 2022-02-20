import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dealer } from '../models/dealer.model';
import { DealerService } from '../services/dealer.service';
import { Driver } from './../models/driver.model';
import { DriverService } from './../services/driver.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userType?: string = "dealer";
  
  dealer: Dealer = {
    name: '',
    email: '',
    password: '',
    mobile: '',
    natureOfMaterial: '',
    weightOfMaterial: '',
    quantity: '',
    city: '',
    state: ''
  }

  driver: Driver = {
    name: '',
    email: '',
    password: '',
    age: '',
    truckNumber: '',
    mobile: '',
    truckCapacity: '',
    transporterName: '',
    drivingExperience: '',
    route1: '',
    route2: '',
    route3: ''
  }
  
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private dealerService: DealerService, private router: Router, private driverService: DriverService, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    if(localStorage.getItem('userId') != null) {
      if(localStorage.getItem('userType') == 'dealer') {
        this.router.navigate(['/dealer']);
      } else if(localStorage.getItem('userType') == 'driver') {
        this.router.navigate(['/driver']);
      }
    }
  }

  addDealer(): void {
    const data = {
      name: this.dealer.name,
      email: this.dealer.email,
      password: this.dealer.password,
      mobile: this.dealer.mobile,
      natureOfMaterial: this.dealer.natureOfMaterial,
      weightOfMaterial: this.dealer.weightOfMaterial,
      quantity: this.dealer.quantity,
      city: this.dealer.city,
      state: this.dealer.state
    };
    if(this.dealer.name !== '' || this.dealer.email !== '' || this.dealer.password !== '' || this.dealer.mobile !== '' || this.dealer.natureOfMaterial !== '' || this.dealer.weightOfMaterial !== '' || this.dealer.quantity !== '' || this.dealer.city !== '' || this.dealer.state !== '') {
      this.dealerService.addDealer(data).subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem('userType', 'dealer');
          localStorage.setItem('userId', response.id.toString());
          this.router.navigate(['/login']);
        }
      });
    } else {
      alert('Please fill all the details');
    }
  }

  addDriver(): void {
    const data = {
      name: this.driver.name,
      email: this.driver.email,
      password: this.driver.password,
      age: this.driver.age,
      truckNumber: this.driver.truckNumber,
      mobile: this.driver.mobile,
      truckCapacity: this.driver.truckCapacity,
      transporterName: this.driver.transporterName,
      drivingExperience: this.driver.drivingExperience,
      route1: this.driver.route1,
      route2: this.driver.route2,
      route3: this.driver.route3
    };
    this.driverService.addDriver(data).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('userType', 'driver');
        localStorage.setItem('userId', response.id.toString());
        this.router.navigate(['/login']);
      }
    });
  }

}
