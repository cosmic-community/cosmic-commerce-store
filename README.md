<!-- README_START -->
# Cosmic Commerce Store

A modern e-commerce website built with Next.js and powered by Cosmic CMS. Browse products across different collections, read customer reviews, and enjoy a seamless shopping experience.

## Features

- 🛍️ Product catalog with featured images and galleries
- 📂 Product collections (Electronics, Clothing, Home & Garden)
- ⭐ Customer reviews and ratings system
- 📱 Responsive design with modern UI
- 🔍 Product search and filtering
- 💰 Real-time pricing and stock information
- 🖼️ Optimized image delivery with imgix

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=test-ecommerce-production)

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Cosmic](https://www.cosmicjs.com) - Headless CMS
- [Cosmic SDK](https://www.cosmicjs.com/docs) - Content management

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Cosmic SDK Examples

### Fetching Products
```typescript
const products = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Getting Product Reviews
```typescript
const reviews = await cosmic.objects
  .find({ 
    type: 'reviews',
    'metadata.product': productId 
  })
  .depth(1);
```

### Filtering by Collection
```typescript
const electronicsProducts = await cosmic.objects
  .find({ 
    type: 'products',
    'metadata.collections': collectionId 
  })
  .depth(1);
```

## Cosmic CMS Integration

This project uses [Cosmic](https://www.cosmicjs.com) as a headless CMS with the following object types:

- **Products** - Product catalog with pricing, images, and stock information
- **Collections** - Product categories for organization
- **Reviews** - Customer reviews with ratings and verification status

Content is managed through the Cosmic dashboard and delivered via the [Cosmic SDK](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

Remember to add your environment variables in your hosting platform's dashboard.
<!-- README_END -->