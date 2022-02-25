import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dealer } from '../models/dealer.model';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private http: HttpClient) { }
  
  addDealer(dealer: Dealer): Observable<any> {
    return this.http.post('http://localhost:5000/api/dealer/addDealer', dealer);
  }

  dealerLogin(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:5000/api/dealer/login', {email, password});
  }

  getDealer(id: number): Observable<any> {
    return this.http.get(`http://localhost:5000/api/dealer/getDealer/${id}`);
  }

  getAllDealers(): Observable<any> {
    return this.http.get('http://localhost:5000/api/dealer/getAllDealers');
  }

  updateDealer(dealer:Dealer, id: number): Observable<any> {
    return this.http.put(`http://localhost:5000/api/dealer/updateDealer/${id}`, dealer);
  }

  deleteDealer(id: number): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/dealer/deleteDealer/${id}`);
  }

  getAllDealersByCity(city: string): Observable<any> {
    return this.http.get(`http://localhost:5000/api/dealer/getAllDealersByCity/${city}`);
  }

  getDriversByRoutes(city: string): Observable<any> {
    return this.http.get(`http://localhost:5000/api/dealer/getDriversByRoutes/${city}`);
  }

  requestDriver(dealerId: number, driverId: number): Observable<any> {
    return this.http.post(`http://localhost:5000/api/dealer/requestDriver/${dealerId}/${driverId}`, {});
  }

  getRequestedDrivers(dealerId: number): Observable<any> {
    return this.http.get(`http://localhost:5000/api/dealer/getRequestedDrivers/${dealerId}`);
  }

  removeRequest(id: number, dealerId: number, driverId: number) {
    return this.http.delete(`http://localhost:5000/api/dealer/removeRequest/${id}/${dealerId}/${driverId}`);
  }

}
