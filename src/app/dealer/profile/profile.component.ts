import { Component, OnInit } from '@angular/core';
import { Dealer } from './../../models/dealer.model';
import { DealerService } from './../../services/dealer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  dealer!: Dealer;

  constructor(private dealerService: DealerService) { }

  ngOnInit(): void {
    this.dealerService.getDealer(Number(localStorage.getItem('userId'))).subscribe({
      next: (response: any) => {
        this.dealer = response;
      }
    });
  }

}
