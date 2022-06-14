import { Component, OnInit } from '@angular/core';
import { Driver } from './../../models/driver.model';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  driver!: Driver;

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.driverService.getDriver(Number(localStorage.getItem('userId'))).subscribe({
      next: (response: any) => {
        this.driver = response;
      }
    });
  }

}
