import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from 'apollo-client';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ProductData } from '@src/app/types';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Observable<ApolloQueryResult<ProductData>>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.product = this.route.data.pipe(
      map((data: { product: ApolloQueryResult<ProductData> }) => {
        return data.product;
      })
    );
  }

  addToCart(variantId: string): void {
    console.log('addToCart', variantId);
  }
}
