import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  
   }
  getProducts(limit:number=10,category:string='all'):Observable<Product[]> {
    let url:string=this.apiUrl+'products?limit='+limit;
    if(category!='all')url=this.apiUrl+'products/category/'+category+'?limit='+limit;
    return this.http.get<Product[]>(url);
  }
  getCategories(){
    return this.http.get<any>(this.apiUrl+'products/categories');
  }
}

 
