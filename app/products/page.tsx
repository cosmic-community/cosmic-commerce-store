// app/products/page.tsx
import { getProducts, getCollections } from '@/lib/cosmic'
import Header from '@/components/Header'
import ProductsContent from '@/components/ProductsContent'
import Footer from '@/components/Footer'
import type { Product, Collection } from '@/types'

export default async function ProductsPage() {
  let products: Product[] = []
  let collections: Collection[] = []
  let error: string | null = null

  try {
    const [productsData, collectionsData] = await Promise.all([
      getProducts(),
      getCollections()
    ])
    products = productsData
    collections = collectionsData
  } catch (err) {
    console.error('Error fetching data:', err)
    error = 'Failed to load products. Please try again later.'
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Products</h1>
            <p className="text-red-600">{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Products</h1>
        </div>
        <ProductsContent products={products} collections={collections} />
      </main>
      <Footer />
    </div>
  )
}