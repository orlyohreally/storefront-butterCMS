export interface Product {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    images: { edges: { node: { altText: string; transformedSrc: string } }[] };
    variants: {
      edges: {
        node: {
          id: string;
          priceV2: {
            amount: string;
            currencyCode: string;
          };
        };
      }[];
    };
  };
}

export interface CollectionProducts {
  collectionByHandle: {
    products: {
      edges: Product[];
    };
  };
}

export interface Products {
  products: {
    edges: Product[];
  };
}

export interface ProductData {
  productByHandle: {
    id: string;
    title: string;
    description: string;
    descriptionHtml: string;
    tags: string[];
    handle: string;
    images: {
      edges: {
        node: {
          altText: string;
          transformedSrc: string;
        };
      }[];
    };
    variants: {
      edges: {
        node: {
          id: string;
          title: string;
          selectedOptions: {
            name: string;
            value: string;
          }[];
          priceV2: {
            amount: string;
            currencyCode: string;
          };
          image: {
            altText: string;
            transformedSrc: string;
          };
        };
      }[];
    };
  };
}

export interface PromotionalPage {
  slug: string;
  name: string;
  page_type: string;
  fields: {
    seo: {
      title: string;
      meta_description: string;
    };
    hero: {
      headline: string;
      sub_headline: string;
      image: string;
      image_alt: string;
      cta_button_text: string;
      cta_button_link: string;
    };
    products: {
      headline: string;
      products_list: PromotionalProduct[];
    };
  };
}

export interface PromotionalProduct {
  title: string;
  image: string;
  image_alt: string;
  description: string;
  price: string;
}
