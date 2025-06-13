'use client'

import { useState } from 'react'
import { Collection } from '@/types'

interface CollectionFilterProps {
  collections: Collection[]
  selectedCollection: string | null
  onCollectionChange: (collectionSlug: string | null) => void
}

export default function CollectionFilter({ 
  collections, 
  selectedCollection, 
  onCollectionChange 
}: CollectionFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold">Products</h2>
        
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full sm:w-48 px-4 py-2 text-left bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <span className="text-sm font-medium">
              {selectedCollection 
                ? collections.find(c => c.slug === selectedCollection)?.title || 'All Products'
                : 'All Products'
              }
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 z-10 w-full sm:w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              <div className="py-1">
                <button
                  onClick={() => {
                    onCollectionChange(null)
                    setIsOpen(false)
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                    !selectedCollection ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                  }`}
                >
                  All Products
                </button>
                
                {collections.map((collection) => (
                  <button
                    key={collection.id}
                    onClick={() => {
                      onCollectionChange(collection.slug)
                      setIsOpen(false)
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                      selectedCollection === collection.slug 
                        ? 'bg-primary-50 text-primary-700' 
                        : 'text-gray-700'
                    }`}
                  >
                    {collection.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}