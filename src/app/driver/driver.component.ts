import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
