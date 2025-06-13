import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Discover Amazing</span>
              <span className="block text-primary-600">Products</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Shop our curated collection of electronics, clothing, and home goods. 
              Quality products with verified customer reviews.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/products" className="btn-primary w-full flex justify-center py-3 px-8 text-base md:py-4 md:text-lg md:px-10">
                  Shop Now
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/collections/electronics" className="btn-secondary w-full flex justify-center py-3 px-8 text-base md:py-4 md:text-lg md:px-10">
                  Browse Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}