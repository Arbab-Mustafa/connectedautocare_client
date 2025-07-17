# ConnectedAutoCare.com Frontend

## Overview

This is the frontend React application for ConnectedAutoCare.com, providing a professional interface for customers to browse protection plans, generate quotes, and manage their policies. Built with modern React, Vite, and Tailwind CSS for optimal performance and user experience.

## Features

### User Interface
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern Styling**: Tailwind CSS with custom design system
- **Smooth Animations**: Framer Motion for professional interactions
- **Accessible**: WCAG compliant with keyboard navigation support

### Core Functionality
- **Product Catalog**: Browse Hero products and VSC options
- **Quote Calculator**: Real-time pricing with instant results
- **VIN Decoder**: Automatic vehicle information lookup
- **Customer Portals**: Separate interfaces for different user types
- **Payment Integration**: Ready for credit card and financing options

### Pages and Components
- **Homepage**: Hero section with product overview
- **Hero Products**: Detailed product catalog with filtering
- **VSC Page**: Vehicle Service Contract information and quotes
- **Quote Page**: Comprehensive quote calculator
- **About Page**: Company information and team details

## Technology Stack

### Core Technologies
- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework

### UI Libraries
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Modern icon library
- **React Router**: Client-side routing for single-page application

### Development Tools
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **PostCSS**: CSS processing and optimization

## Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (buttons, cards, etc.)
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Footer.jsx      # Site footer
│   │   └── ...
│   ├── pages/              # Application pages
│   │   ├── HomePage.jsx    # Landing page
│   │   ├── HeroProductsPage.jsx  # Hero products catalog
│   │   ├── VSCPage.jsx     # Vehicle Service Contracts
│   │   ├── QuotePage.jsx   # Quote calculator
│   │   ├── AboutPage.jsx   # About company
│   │   └── ...
│   ├── lib/                # Utilities and helpers
│   │   ├── api.js          # API integration functions
│   │   └── utils.js        # General utility functions
│   ├── App.jsx             # Main application component
│   ├── App.css             # Global styles
│   └── main.jsx            # Application entry point
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── vercel.json             # Vercel deployment configuration
```

## Local Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=ConnectedAutoCare.com
VITE_ENABLE_HERO_PRODUCTS=true
VITE_ENABLE_VSC=true
VITE_SUPPORT_EMAIL=support@connectedautocare.com
VITE_SUPPORT_PHONE=1-800-AUTOCARE
```

## Components

### UI Components (`src/components/ui/`)

#### Button
```jsx
import { Button } from '../components/ui/button'

<Button variant="primary" size="lg">
  Get Quote
</Button>
```

#### Card
```jsx
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Product Name</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Product description</p>
  </CardContent>
</Card>
```

#### Input
```jsx
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter email" />
</div>
```

### Page Components

#### HomePage
- Hero section with call-to-action
- Product overview cards
- Customer testimonials
- Company statistics

#### HeroProductsPage
- Product filtering by category
- Detailed product cards with pricing
- Quote generation modals
- Feature comparisons

#### VSCPage
- Coverage level explanations
- Vehicle classification information
- Benefits and features
- Customer success stories

#### QuotePage
- Tabbed interface for different product types
- Form validation and error handling
- Real-time quote calculations
- Quote results display

## API Integration

### API Configuration (`src/lib/api.js`)

```javascript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Hero Products API
export const heroAPI = {
  getAllProducts: () => fetch(`${API_BASE_URL}/api/hero/products`),
  generateQuote: (data) => fetch(`${API_BASE_URL}/api/hero/quote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

// VSC API
export const vscAPI = {
  generateQuote: (data) => fetch(`${API_BASE_URL}/api/vsc/quote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}
```

### Error Handling
```javascript
export const handleAPIError = (error) => {
  if (error.response) {
    return error.response.data.message || 'Server error occurred'
  } else if (error.request) {
    return 'Network error - please check your connection'
  } else {
    return 'An unexpected error occurred'
  }
}
```

## Styling

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
```

### Custom CSS Classes
```css
/* src/App.css */
.hero-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-hover {
  transition: transform 0.2s ease-in-out;
}

.card-hover:hover {
  transform: translateY(-4px);
}

.price-highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## State Management

### React Hooks
```jsx
// Quote form state management
const [quoteForm, setQuoteForm] = useState({
  product_type: '',
  term_years: '',
  coverage_limit: '',
  customer_type: 'retail'
})

// API loading states
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')
const [quote, setQuote] = useState(null)

// Form submission
const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  setError('')
  
  try {
    const response = await heroAPI.generateQuote(quoteForm)
    const data = await response.json()
    
    if (data.success) {
      setQuote(data.data)
    } else {
      setError(data.error)
    }
  } catch (err) {
    setError('Failed to generate quote')
  } finally {
    setLoading(false)
  }
}
```

## Routing

### React Router Setup
```jsx
// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hero-products" element={<HeroProductsPage />} />
        <Route path="/vsc" element={<VSCPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}
```

## Performance Optimization

### Code Splitting
```jsx
// Lazy load pages for better performance
import { lazy, Suspense } from 'react'

const HeroProductsPage = lazy(() => import('./pages/HeroProductsPage'))
const VSCPage = lazy(() => import('./pages/VSCPage'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/hero-products" element={<HeroProductsPage />} />
        <Route path="/vsc" element={<VSCPage />} />
      </Routes>
    </Suspense>
  )
}
```

### Image Optimization
```jsx
// Lazy loading images
<img 
  src={imageUrl} 
  alt={altText}
  loading="lazy"
  className="w-full h-auto"
/>
```

## Deployment

### Vercel Configuration
```json
{
  "version": 2,
  "name": "connectedautocare-frontend",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Build Configuration
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "vercel-build": "vite build"
  }
}
```

### Environment Variables for Production
Set in Vercel dashboard:
```
VITE_API_URL=https://your-backend-domain.vercel.app
VITE_APP_NAME=ConnectedAutoCare.com
VITE_ENABLE_HERO_PRODUCTS=true
VITE_ENABLE_VSC=true
```

## Testing

### Component Testing
```jsx
// Example test for quote form
import { render, screen, fireEvent } from '@testing-library/react'
import QuotePage from '../pages/QuotePage'

test('quote form submits correctly', async () => {
  render(<QuotePage />)
  
  const productSelect = screen.getByLabelText('Product Type')
  const termSelect = screen.getByLabelText('Term (Years)')
  const submitButton = screen.getByText('Get Quote')
  
  fireEvent.change(productSelect, { target: { value: 'home_protection' } })
  fireEvent.change(termSelect, { target: { value: '3' } })
  fireEvent.click(submitButton)
  
  expect(screen.getByText('Calculating...')).toBeInTheDocument()
})
```

### API Testing
```javascript
// Test API integration
const testQuoteGeneration = async () => {
  const mockData = {
    product_type: 'home_protection',
    term_years: 3,
    coverage_limit: '1000',
    customer_type: 'retail'
  }
  
  const response = await heroAPI.generateQuote(mockData)
  const data = await response.json()
  
  console.log('Quote response:', data)
  return data.success
}
```

## Accessibility

### WCAG Compliance
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

### Implementation
```jsx
// Accessible form components
<div className="space-y-2">
  <Label htmlFor="product-type" className="sr-only">
    Product Type
  </Label>
  <Select 
    id="product-type"
    aria-label="Select product type"
    value={formData.product_type}
    onChange={handleChange}
  >
    <SelectTrigger>
      <SelectValue placeholder="Choose a product" />
    </SelectTrigger>
  </Select>
</div>
```

## Browser Support

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Polyfills
Vite automatically includes necessary polyfills for:
- ES6+ features
- CSS Grid and Flexbox
- Fetch API
- Promise support

## Troubleshooting

### Common Issues

**Issue**: Vite dev server not starting
**Solution**: Check Node.js version (18+ required)

**Issue**: API calls failing in development
**Solution**: Verify VITE_API_URL environment variable

**Issue**: Build errors with Tailwind
**Solution**: Check tailwind.config.js content paths

**Issue**: Routing not working after deployment
**Solution**: Verify vercel.json routes configuration

### Debug Mode
```javascript
// Enable debug logging
if (import.meta.env.DEV) {
  console.log('Debug mode enabled')
  console.log('API URL:', import.meta.env.VITE_API_URL)
}
```

## Contributing

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use TypeScript for type safety
- Implement proper error boundaries
- Add PropTypes for component props

### Git Workflow
1. Create feature branch from main
2. Make changes with descriptive commits
3. Test locally before pushing
4. Create pull request for review
5. Deploy after approval

---

**ConnectedAutoCare.com Frontend** - Professional React Application for Protection Plans

