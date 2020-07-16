import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';

import {
  CollectionProducts,
  Product,
  ProductData,
  Products,
} from '@src/app/types';

@Injectable({
  providedIn: 'root',
})
export class ShopifyService {
  constructor(private apollo: Apollo) {}

  getShopData(): Observable<ApolloQueryResult<{ shop: { name: string } }>> {
    return this.apollo.query<{ shop: { name: string } }>({
      query: gql`
        {
          shop {
            name
            moneyFormat
          }
        }
      `,
    });
  }

  getProducts(
    collectionName: string
  ): Observable<ApolloQueryResult<CollectionProducts>> {
    return this.apollo.query<CollectionProducts>({
      query: gql`
        {
          collectionByHandle(handle: "${collectionName}") {
            products(first: 10) {
              edges {
                node {
                  id
                  title
                  description
                  handle
                  images(first: 1) {
                    edges {
                      node {
                        altText
                        transformedSrc
                      }
                    }
                  }
                  variants(first: 10) {
                    edges {
                      node {
                        id
                        priceV2 {
                          amount
                          currencyCode
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  }

  getAllProducts(): Observable<ApolloQueryResult<Products>> {
    return this.apollo.query<Products>({
      query: gql`
        {
          products(first: 10) {
            edges {
              node {
                id
                title
                description
                handle
                images(first: 1) {
                  edges {
                    node {
                      altText
                      transformedSrc
                    }
                  }
                }
                variants(first: 10) {
                  edges {
                    node {
                      id
                      priceV2 {
                        amount
                        currencyCode
                      }
                      image {
                        altText
                        transformedSrc
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  }

  getProduct(
    productHandle: string
  ): Observable<ApolloQueryResult<ProductData>> {
    return this.apollo.query<ProductData>({
      query: gql`
      {
        productByHandle(handle: "${productHandle}") {
          id
          title
          description
          descriptionHtml
          tags
          handle
          images(first: 1) {
            edges {
              node {
                altText
                transformedSrc
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                selectedOptions {
                  name
                  value
                }
                priceV2 {
                  amount
                  currencyCode
                }
                image {
                  altText
                  transformedSrc
                }
              }
            }
          }
        }
      }
      `,
    });
  }
}
