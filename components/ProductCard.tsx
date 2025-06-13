import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const featuredImage = product.metadata?.featured_image
  const price = product.metadata?.price || 0
  const inStock = product.metadata?.in_stock

  return (
    <div className="card group hover:shadow-lg transition-shadow duration-300">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-w-4 aspect-h-3 bg-gray-200">
          {featuredImage && (
            <img
              src={`${featuredImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={product.title}
              width="300"
              height="200"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {product.title}
          </h3>
          
          <div className="mt-2 flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
            
            <div className="flex items-center space-x-2">
              {inStock ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Out of Stock
                </span>
              )}
            </div>
          </div>
          
          {product.metadata?.collections && product.metadata.collections.length > 0 && (
            <div className="mt-3">
              <span className="text-sm text-gray-500">
                {product.metadata.collections[0].title}
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}