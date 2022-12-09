import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import CartItem from '../models/CartItem';
import CartCheckoutDetails from '../models/CartCheckoutDetails';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartItem[];
  cartCheckoutDetails: CartCheckoutDetails;

  constructor() {
    this.cart = [];
    this.cartCheckoutDetails = {
      name: '',
      address: '',
      cardNumber: 0,
      fullPrice: 0,
    };
  }

  addToCart = (item: CartItem) => {
    let addToCartItemIndex: number = -1;

    // checking to see if a number of the particular item has already been added
    this.cart.forEach((e, index) => {
      if (e.name === item.name) {
        addToCartItemIndex = index;
      }
    });

    if (addToCartItemIndex > -1) {
      let tempCart: CartItem[] = cloneDeep(this.cart); // cloning so array doesn't get messed up while appending
      tempCart[addToCartItemIndex].quantity += item.quantity;
      this.cart = tempCart;
      alert(
        `Added ${item.quantity} more item(s) of type ${item.name} to your cart!`
      );
    } else {
      alert(
        `Added ${item.quantity} item(s) of type ${item.name} to your cart!`
      );
      this.cart = [...this.cart, item];
    }
  };

  updateCart = (cart: CartItem[]) => {
    this.cart = cart;
  };

  getCart = () => {
    return this.cart;
  };

  sendCartCheckoutDetails = (cartDetails: CartCheckoutDetails) => {
    this.cartCheckoutDetails = cartDetails;
  };

  getCartCheckoutDetails = () => {
    return this.cartCheckoutDetails;
  };
}
