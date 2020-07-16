const { GraphQLClient } = require("graphql-request");

class ShopifyService {
  constructor() {
    const endpoint = `${process.env.SHOP_URL}/api/graphql.json`;

    this.graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        "X-Shopify-Storefront-Access-Token": process.env.APP_TOKEN,
      },
    });
  }

  async getProductPriceRange(productHandle) {
    const query = `{
      productByHandle(handle: "${productHandle}") {
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }`;
    const response = await this.graphQLClient.request(query);
    if (response.errors) {
      throw response.error;
    }
    return response.productByHandle.priceRange;
  }
}

module.exports = { ShopifyService };
