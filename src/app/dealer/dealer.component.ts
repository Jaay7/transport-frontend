import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import { DealerService } from './../services/dealer.service';
@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  searchText: string = "";
  drivers: any[] = [];
  showLoader: boolean = true;

  private _mobileQueryListener: () => void;
  sidenavItems: { name: string; route: string; }[] = [];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private dealerService: DealerService) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    if(localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);
    }
    
  }

  getDrivers(searchText: string): void {
    this.dealerService.getDriversByRoutes(searchText).subscribe({
      next: (data) => {
        this.drivers = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 1500);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
