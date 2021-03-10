import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http'; //bir backende istekte bulunmaya yarayan import.
import { ProductResponseModel } from 'src/app/models/productResponseModel';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'https://localhost:44383/api/products/getall';
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      .subscribe((response)=> {
        this.products = response.data
      });
  }

}
