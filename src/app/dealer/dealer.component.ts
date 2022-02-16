import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {

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
