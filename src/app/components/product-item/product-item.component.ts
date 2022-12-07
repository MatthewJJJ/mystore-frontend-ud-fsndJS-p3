import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: string;

  constructor(private productService: ProductService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
    this.quantity = '1';
  }

  ngOnInit(): void {}

  onSubmit = () => {
    this.productService.addToCart({
      name: this.product.name,
      price: this.product.price,
      quantity: Number(this.quantity),
      url: this.product.url,
    });
  };
}
