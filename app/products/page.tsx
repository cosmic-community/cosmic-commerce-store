// app/products/page.tsx  
'use client'

import { useState, useEffect } from 'react'
import { getProducts, getCollections } from '@/lib/cosmic'
import Header from '@/components/Header'
import ProductGrid from '@/components/ProductGrid'
import CollectionFilter from '@/components/CollectionFilter'
import Footer from '@/components/Footer'
import type { Product, Collection } from '@/types'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [collections, setCollections] = useState<Collection[]>([])
  const [selectedCollection, setSelectedCollection] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsData, collectionsData] = await Promise.all([
          getProducts(),
          getCollections()
        ])
        setProducts(productsData)
        setCollections(collectionsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleCollectionChange = (collectionSlug: string | null) => {
    setSelectedCollection(collectionSlug || '')
  }

  const filteredProducts = selectedCollection 
    ? products.filter(product => 
        product.metadata.collections?.some((collection: any) => 
          collection.slug === selectedCollection
        )
      )
    : products

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">Loading...</div>
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
          <CollectionFilter 
            collections={collections}
            selectedCollection={selectedCollection}
            onCollectionChange={handleCollectionChange}
          />
        </div>
        <ProductGrid products={filteredProducts} />
      </main>
      <Footer />
    </div>
  )
}