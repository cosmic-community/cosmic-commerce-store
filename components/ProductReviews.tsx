import { Review } from '@/types'

interface ProductReviewsProps {
  reviews: Review[]
  productId: string
}

export default function ProductReviews({ reviews, productId }: ProductReviewsProps) {
  const productReviews = reviews.filter(review => 
    review.metadata?.product?.id === productId
  )

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const averageRating = productReviews.length > 0
    ? productReviews.reduce((sum, review) => 
        sum + parseInt(review.metadata?.rating?.key || '0'), 0
      ) / productReviews.length
    : 0

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        
        {productReviews.length > 0 ? (
          <>
            <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mr-4">
                {renderStars(Math.round(averageRating))}
                <span className="ml-2 text-lg font-semibold">
                  {averageRating.toFixed(1)} out of 5
                </span>
              </div>
              <span className="text-gray-600">
                Based on {productReviews.length} review{productReviews.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            <div className="space-y-6">
              {productReviews.map((review) => (
                <div key={review.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center mb-1">
                        {renderStars(parseInt(review.metadata?.rating?.key || '0'))}
                        <span className="ml-2 font-semibold">
                          {review.metadata?.customer_name}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        {review.metadata?.review_date && (
                          <span>
                            {new Date(review.metadata.review_date).toLocaleDateString()}
                          </span>
                        )}
                        
                        {review.metadata?.verified_purchase && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {review.metadata?.review_text && (
                    <p className="text-gray-700 leading-relaxed">
                      {review.metadata.review_text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>No reviews yet. Be the first to review this product!</p>
          </div>
        )}
      </div>
    </div>
  )
}