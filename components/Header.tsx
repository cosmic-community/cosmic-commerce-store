import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Cosmic Commerce
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link href="/products" className="text-gray-500 hover:text-gray-900">
              Products
            </Link>
            <Link href="/collections/electronics" className="text-gray-500 hover:text-gray-900">
              Electronics
            </Link>
            <Link href="/collections/clothing" className="text-gray-500 hover:text-gray-900">
              Clothing
            </Link>
            <Link href="/collections/home-garden" className="text-gray-500 hover:text-gray-900">
              Home & Garden
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13v5a2 2 0 002 2h9.1M9 19v2M20 19v2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}