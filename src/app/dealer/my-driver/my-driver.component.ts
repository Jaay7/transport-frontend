import { Component, OnInit } from '@angular/core';
import { DealerService } from './../../services/dealer.service';

@Component({
  selector: 'app-my-driver',
  templateUrl: './my-driver.component.html',
  styleUrls: ['./my-driver.component.css']
})
export class MyDriverComponent implements OnInit {

  myDrivers: any[] = [];
  
  constructor(private dealerService: DealerService) { }

  ngOnInit(): void {
    this.dealerService.getRequestedDrivers(Number(localStorage.getItem('userId'))).subscribe({
      next: (response: any) => {
        this.myDrivers = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  removeRequest(id: number, driverId: number): void {
    this.dealerService.removeRequest(id, Number(localStorage.getItem('userId')), driverId).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


}
