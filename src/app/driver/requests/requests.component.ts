import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  myRequests: any[] = [];

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.driverService.getRequestedDealers(Number(localStorage.getItem('userId'))).subscribe({
      next: (response: any) => {
        this.myRequests = response;
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

  acceptRequest(id: number, dealerId: number): void {
    this.driverService.acceptDealer(id, dealerId, Number(localStorage.getItem('userId'))).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
