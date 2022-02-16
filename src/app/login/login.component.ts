import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service';
import { DealerService } from './../services/dealer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dealer: any = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private dealerService: DealerService, private driverService: DriverService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId') != null) {
      if(localStorage.getItem('userType') == 'dealer') {
        this.router.navigate(['/dealer']);
      } else if(localStorage.getItem('userType') == 'driver') {
        this.router.navigate(['/driver']);
      }
    }
  }

  loginDealer(): void {
    this.dealerService.dealerLogin(this.dealer.email, this.dealer.password).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('userType', 'dealer');
        localStorage.setItem('userId', response.id.toString());
        this.router.navigate(['/dealer']);
      }
    });
  }

  loginDriver(): void {
    this.driverService.driverLogin(this.dealer.email, this.dealer.password).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('userType', 'driver');
        localStorage.setItem('userId', response.id.toString());
        this.router.navigate(['/driver']);
      }
    });
  }

}
