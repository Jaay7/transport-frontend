import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  addDriver(driver: Driver): Observable<any> {
    return this.http.post('http://localhost:5000/api/driver/addDriver', driver);
  }

  driverLogin(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:5000/api/driver/login', {email, password});
  }

  getDriver(id: number): Observable<any> {
    return this.http.get(`http://localhost:5000/api/driver/getDriver/${id}`);
  }

  getAllDrivers(): Observable<any> {
    return this.http.get('http://localhost:5000/api/driver/getAllDrivers');
  }

  updateDriver(driver:Driver, id: number): Observable<any> {
    return this.http.put(`http://localhost:5000/api/driver/updateDriver/${id}`, driver);
  }

  deleteDriver(id: number): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/driver/deleteDriver/${id}`);
  }

  getRequestedDealers(driverId: number): Observable<any> {
    return this.http.get(`http://localhost:5000/api/driver/getRequestedDealers/${driverId}`);
  }

  getAcceptedDealers(driverId: number): Observable<any> {
    return this.http.get(`http://localhost:5000/api/driver/getAcceptedDealers/${driverId}`);
  }

  acceptDealer(id: number, dealerId: number, driverId: number): Observable<any> {
    return this.http.put(`http://localhost:5000/api/driver/acceptDealer/${id}/${dealerId}/${driverId}`, {});
  }

  removeRequest(id: number, dealerId: number, driverId: number): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/driver/removeRequest/${id}/${dealerId}/${driverId}`);
  }
}
