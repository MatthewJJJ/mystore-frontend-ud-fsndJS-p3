import { Component, OnInit } from '@angular/core';
import CartItem from 'src/app/models/CartItem';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: CartItem[];
  username: string;
  address: string;
  cardNumber: number;
  cartTotal: number;
  quantity: number;

  constructor(private cartService: CartService, private router: Router) {
    this.items = [];
    this.username = '';
    this.address = '';
    this.cardNumber = 0;
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
    this.items = this.items.filter((e) => e.quantity !== 0);
    this.cartService.updateCart(this.items);
    this.recalculatePrice();
  };

  onSubmit = () => {
    this.cartService.sendCartCheckoutDetails({
      fullPrice: this.cartTotal,
      name: String(this.username),
      address: this.address,
      cardNumber: this.cardNumber,
    });
    this.router.navigate(['/confirmation']);
  };

  ngOnInit(): void {
    this.items = this.cartService.getCart();
    this.recalculatePrice();
  }
}
