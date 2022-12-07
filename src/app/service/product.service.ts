import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cloneDeep } from 'lodash';
import Product from '../models/Product';
import CartItem from '../models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cart: CartItem[];

  constructor(private client: HttpClient) {
    this.cart = [];
  }

  getProducts = (): Observable<Product[]> => {
    return this.client.get<[Product]>('assets/data.json');
  };

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

    console.log('New Cart:', this.cart);
  };

  getCart = () => {
    return this.cart;
  };
}
