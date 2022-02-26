import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myDealers: any[] = [];

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.driverService.getAcceptedDealers(Number(localStorage.getItem('userId'))).subscribe({
      next: (response: any) => {
        this.myDealers = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  
  removeRequest(id: number, dealerId: number): void {
    this.driverService.removeRequest(id, dealerId, Number(localStorage.getItem('userId'))).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
