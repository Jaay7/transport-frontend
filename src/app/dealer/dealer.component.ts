import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  searchText: string = "";

  private _mobileQueryListener: () => void;
  sidenavItems: { name: string; route: string; }[] = [];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    if(localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);
    }
    this.sidenavItems = [
      {
        name: 'Home',
        route: "."
      },
      {
        name: 'Profile',
        route: "./profile"
      }
    ];
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
