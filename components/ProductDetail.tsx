import { Product } from '@/types'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const featuredImage = product.metadata?.featured_image
  const gallery = product.metadata?.gallery || []
  const price = product.metadata?.price || 0
  const inStock = product.metadata?.in_stock
  const stockQuantity = product.metadata?.stock_quantity || 0

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          {featuredImage && (
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={`${featuredImage.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}
          
          {gallery.length > 0 && (
            <div className="grid grid-cols-4 gap-4">
              {gallery.map((image, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={`${image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-20 object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            
            {product.metadata?.collections && product.metadata.collections.length > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                {product.metadata.collections[0]?.title}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
            
            {inStock ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                In Stock ({stockQuantity} available)
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                Out of Stock
              </span>
            )}
          </div>

          {product.metadata?.description && (
            <div 
              className="prose prose-sm text-gray-700"
              dangerouslySetInnerHTML={{ __html: product.metadata.description }}
            />
          )}

          <div className="border-t pt-6">
            <div className="flex space-x-4">
              <button 
                className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400"
                disabled={!inStock}
              >
                {inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              
              <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                ♡ Save
              </button>
            </div>
          </div>

          {product.metadata?.sku && (
            <div className="text-sm text-gray-500">
              SKU: {product.metadata.sku}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}