import { getProducts, getCollections, getReviews } from '@/lib/cosmic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import CollectionsGrid from '@/components/CollectionsGrid'
import RecentReviews from '@/components/RecentReviews'
import Footer from '@/components/Footer'

export default async function HomePage() {
  const [products, collections, reviews] = await Promise.all([
    getProducts(),
    getCollections(),
    getReviews()
  ])

  const featuredProducts = products.slice(0, 6)
  const recentReviews = reviews.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts products={featuredProducts} />
        <CollectionsGrid collections={collections} />
        <RecentReviews reviews={recentReviews} />
      </main>
      <Footer />
    </div>
  )
}