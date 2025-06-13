import { getProducts, getCollections } from '@/lib/cosmic'
import Header from '@/components/Header'
import ProductGrid from '@/components/ProductGrid'
import CollectionFilter from '@/components/CollectionFilter'
import Footer from '@/components/Footer'

export default async function ProductsPage() {
  const [products, collections] = await Promise.all([
    getProducts(),
    getCollections()
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Products</h1>
          <CollectionFilter collections={collections} />
        </div>
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  )
}