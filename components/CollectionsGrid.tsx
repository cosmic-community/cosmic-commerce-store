import Link from 'next/link'
import { Collection } from '@/types'

interface CollectionsGridProps {
  collections: Collection[]
}

export default function CollectionsGrid({ collections }: CollectionsGridProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Collection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link 
              key={collection.id} 
              href={`/collections/${collection.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-w-3 aspect-h-2">
                {collection.metadata?.featured_image && (
                  <img
                    src={`${collection.metadata.featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={collection.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                    {collection.metadata?.description && (
                      <p className="text-sm opacity-90">{collection.metadata.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}