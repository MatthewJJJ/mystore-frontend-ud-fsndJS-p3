import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: string;

  constructor(private cartService: CartService) {
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
    this.cartService.addToCart({
      name: this.product.name,
      price: this.product.price,
      quantity: Number(this.quantity),
      url: this.product.url,
    });
  };
}
