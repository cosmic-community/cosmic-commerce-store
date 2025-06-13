'use client'

import { useState } from 'react'
import ProductGrid from './ProductGrid'
import CollectionFilter from './CollectionFilter'
import type { Product, Collection } from '@/types'

interface ProductsContentProps {
  products: Product[]
  collections: Collection[]
}

export default function ProductsContent({ products, collections }: ProductsContentProps) {
  const [selectedCollection, setSelectedCollection] = useState<string>('')

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

  return (
    <>
      <CollectionFilter 
        collections={collections}
        selectedCollection={selectedCollection}
        onCollectionChange={handleCollectionChange}
      />
      <ProductGrid products={filteredProducts} />
    </>
  )
}