import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`)
  }

  getProductsById(productId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${productId}`)
  }
}
