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
    return this.http.post('https://transport-app-apis.onrender.com/api/dealer/addDealer', dealer);
  }

  dealerLogin(email: string, password: string): Observable<any> {
    return this.http.post('https://transport-app-apis.onrender.com/api/dealer/login', {email, password});
  }

  getDealer(id: number): Observable<any> {
    return this.http.get(`https://transport-app-apis.onrender.com/api/dealer/getDealer/${id}`);
  }

  getAllDealers(): Observable<any> {
    return this.http.get('https://transport-app-apis.onrender.com/api/dealer/getAllDealers');
  }

  updateDealer(dealer:Dealer, id: number): Observable<any> {
    return this.http.put(`https://transport-app-apis.onrender.com/api/dealer/updateDealer/${id}`, dealer);
  }

  deleteDealer(id: number): Observable<any> {
    return this.http.delete(`https://transport-app-apis.onrender.com/api/dealer/deleteDealer/${id}`);
  }

  getAllDealersByCity(city: string): Observable<any> {
    return this.http.get(`https://transport-app-apis.onrender.com/api/dealer/getAllDealersByCity/${city}`);
  }

  getDriversByRoutes(city: string): Observable<any> {
    return this.http.get(`https://transport-app-apis.onrender.com/api/dealer/getDriversByRoutes/${city}`);
  }

  requestDriver(dealerId: number, driverId: number): Observable<any> {
    return this.http.post(`https://transport-app-apis.onrender.com/api/dealer/requestDriver/${dealerId}/${driverId}`, {});
  }

  getRequestedDrivers(dealerId: number): Observable<any> {
    return this.http.get(`https://transport-app-apis.onrender.com/api/dealer/getRequestedDrivers/${dealerId}`);
  }

  removeRequest(id: number, dealerId: number, driverId: number) {
    return this.http.delete(`https://transport-app-apis.onrender.com/api/dealer/removeRequest/${id}/${dealerId}/${driverId}`);
  }

}
