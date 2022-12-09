import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from '../../models/Product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  id: number;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      data.forEach((e) => {
        if (Number(e.id) === Number(this.id)) {
          this.product = e;
        }
      });
    });
  }
}
