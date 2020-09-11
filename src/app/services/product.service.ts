import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  SERVER_URL = 'http://localhost:3000';

  public getProducts() {
    return this.http.get(`${this.SERVER_URL}/produtos`)
  }
}
