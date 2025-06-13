// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
  status?: string;
  published_at?: string;
}

// Product interface
export interface Product extends CosmicObject {
  type_slug: 'products';
  metadata: {
    name: string;
    description?: string;
    price: number;
    sku: string;
    stock_quantity?: number;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    collections?: Collection[];
    in_stock?: boolean;
  };
}

// Collection interface
export interface Collection extends CosmicObject {
  type_slug: 'collections';
  metadata: {
    name: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Review interface
export interface Review extends CosmicObject {
  type_slug: 'reviews';
  metadata: {
    customer_name: string;
    rating: {
      key: string;
      value: string;
    };
    review_text?: string;
    product?: Product;
    review_date?: string;
    verified_purchase?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Rating type for reviews
export type RatingKey = '1' | '2' | '3' | '4' | '5';

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type_slug === 'products';
}

export function isCollection(obj: CosmicObject): obj is Collection {
  return obj.type_slug === 'collections';
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type_slug === 'reviews';
}