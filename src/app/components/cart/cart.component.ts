import { Component, OnInit } from '@angular/core';
import CartItem from 'src/app/models/CartItem';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: CartItem[];
  username: string | null;
  address: string | null;
  cardNumber: number | null;
  cartTotal: number;

  constructor(private productService: ProductService) {
    this.items = [];
    this.username = null;
    this.address = null;
    this.cardNumber = null;
    this.cartTotal = 0;
  }

  ngOnInit(): void {
    this.items = this.productService.getCart();
    console.log(this.items);
  }

  onSubmit = () => {
    console.log(
      this.cartTotal,
      this.username,
      this.address,
      Number(this.cardNumber)
    );
  };
}
