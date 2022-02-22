import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/driver.model';
import { DealerService } from './../../services/dealer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allDriver: any[] = [];

  myCity: string = '';

  constructor(private DealerService: DealerService) { }

  ngOnInit(): void {
    this.DealerService.getDealer(Number(localStorage.getItem('userId'))).subscribe({
      next: (response: any) => {
        this.myCity = response.city;
        this.getDrivers(this.myCity);
      }
    });
  }

  getDrivers(myCity: string): void {
    this.DealerService.getDriversByRoutes(myCity).subscribe({
      next: (data) => {
        this.allDriver = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
