// app/products/[slug]/page.tsx
import { getProduct, getProductReviews } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import ProductDetail from '@/components/ProductDetail'
import ProductReviews from '@/components/ProductReviews'
import Footer from '@/components/Footer'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  
  const product = await getProduct(slug)
  
  if (!product) {
    notFound()
  }

  const reviews = await getProductReviews(product.id)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetail product={product} />
        <ProductReviews productId={product.id} reviews={reviews} />
      </main>
      <Footer />
    </div>
  )
}