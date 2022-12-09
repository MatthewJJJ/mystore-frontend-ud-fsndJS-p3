import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import CartItem from '../../models/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;
  @Input() quantity: number;
  @Output() emitUpdatedCartItem: EventEmitter<CartItem> = new EventEmitter();

  constructor() {
    this.quantity = 1;
    this.item = {
      name: '',
      price: 0,
      url: '',
      quantity: 0,
    };
  }

  onChange = (event: Event) => {
    this.quantity = Number(event);
    this.item.quantity = this.quantity;
    this.emitUpdatedCartItem.emit(this.item);
  };

  ngOnInit(): void {}
}
