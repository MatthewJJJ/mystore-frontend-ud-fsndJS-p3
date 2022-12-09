import { Component, OnInit } from '@angular/core';
import CartItem from 'src/app/models/CartItem';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

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
  quantity: number;

  constructor(private productService: ProductService, private router: Router) {
    this.items = [];
    this.username = null;
    this.address = null;
    this.cardNumber = null;
    this.cartTotal = 0;
    this.quantity = 0;
  }

  recalculatePrice = () => {
    let tempTotal: number = 0;
    this.items.forEach((e) => {
      tempTotal += e.price * e.quantity;
    });
    this.cartTotal = tempTotal;
  };

  updateCart = (cartItem: CartItem) => {
    this.items.forEach((e, index) => {
      if (e.name === cartItem.name) {
        this.items[index] = cartItem;
      }
    });
    this.productService.updateCart(this.items);
    this.recalculatePrice();
  };

  onSubmit = () => {
    console.log(
      this.cartTotal,
      this.username,
      this.address,
      Number(this.cardNumber)
    );
    this.router.navigate(['/confirmation']);
  };

  ngOnInit(): void {
    this.items = this.productService.getCart();
    this.recalculatePrice();
  }
}
