# Saifee Creations

A modern e-commerce platform for custom envelope design and personalization services. Built with Vue 3, TypeScript, and Tailwind CSS.

## Features

- **Product Catalog**: Browse premium envelope collections with multiple image support
- **Product Customization**: Personalize envelopes with custom text, font styles, and quantities
- **WhatsApp Integration**: Direct order placement via WhatsApp
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Smooth Animations**: Enhanced UX with GSAP and AOS animations
- **SEO Optimized**: Open Graph and Twitter Card meta tags for social sharing

## Tech Stack

- **Framework**: Vue 3 with Composition API
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **Animations**: GSAP, AOS
- **Smooth Scrolling**: Lenis
- **Email Service**: EmailJS

## Prerequisites

- Node.js ^20.19.0 or >=22.12.0
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saifee-creation
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm preview
```

Type checking:
```bash
npm run type-check
```

## Project Structure

```
src/
├── components/          # Vue components
│   ├── AllProducts.vue  # Product catalog display
│   ├── CustomizationPage.vue  # Product customization interface
│   ├── Hero.vue         # Landing page hero section
│   ├── LookBook.vue     # Full product lookbook
│   ├── Navbar.vue       # Navigation component
│   ├── OurProcess.vue   # Process showcase
│   └── TheFooter.vue    # Footer component
├── data/
│   └── catalog.js       # Product catalog data
├── pages/
│   └── Home.vue         # Home page
├── router/
│   └── index.ts         # Vue Router configuration
├── types/               # TypeScript type definitions
└── main.ts              # Application entry point
```

## Configuration

### Product Catalog

Product data is managed in `src/data/catalog.js`. Each product supports:
- Multiple images (array format)
- Category grouping
- Pricing tiers
- Product specifications

### WhatsApp Integration

WhatsApp number is configured in `src/components/CustomizationPage.vue`. Update the `waNumber` constant to change the contact number.

### Email Service

EmailJS is configured for contact form submissions. Update EmailJS service ID, template ID, and public key in the relevant components.

## Environment Variables

Create a `.env` file for environment-specific configurations if needed.

## Deployment

The project is configured for static hosting. Build the project and deploy the `dist` folder to your hosting provider.

## License

Private - All rights reserved
