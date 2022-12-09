import { Component, OnInit } from '@angular/core';
import CartCheckoutDetails from 'src/app/models/CartCheckoutDetails';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  details: CartCheckoutDetails;

  constructor(private cartService: CartService) {
    this.details = {
      name: '',
      address: '',
      cardNumber: 0,
      fullPrice: 0,
    };
  }

  ngOnInit(): void {
    this.details = this.cartService.getCartCheckoutDetails();
    console.log(this.details);
  }
}
