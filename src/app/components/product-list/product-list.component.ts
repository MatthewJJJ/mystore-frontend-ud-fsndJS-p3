import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.products = require('../../../assets/data.json');
  }
}
