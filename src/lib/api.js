// API Configuration and Utilities for ConnectedAutoCare.com

// API Base URL - Update this for production deployment
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-domain.vercel.app'  // Update with your actual backend URL
  : 'http://localhost:5000'

// API Client class for making requests
class APIClient {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`)
      }

      return data
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // GET request
  async get(endpoint, headers = {}) {
    return this.request(endpoint, { method: 'GET', headers })
  }

  // POST request
  async post(endpoint, data = {}, headers = {}) {
    return this.request(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
  }

  // PUT request
  async put(endpoint, data = {}, headers = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    })
  }

  // DELETE request
  async delete(endpoint, headers = {}) {
    return this.request(endpoint, { method: 'DELETE', headers })
  }
}

// Create API client instance
const api = new APIClient()

// Health Check APIs
export const healthAPI = {
  checkHealth: () => api.get('/health'),
  checkAPIHealth: () => api.get('/api/health'),
}

// Hero Products APIs
export const heroAPI = {
  checkHealth: () => api.get('/api/hero/health'),
  getAllProducts: () => api.get('/api/hero/products'),
  getProductsByCategory: (category) => api.get(`/api/hero/products/${category}`),
  generateQuote: (quoteData) => api.post('/api/hero/quote', quoteData),
}

// VSC APIs
export const vscAPI = {
  checkHealth: () => api.get('/api/vsc/health'),
  getCoverageOptions: () => api.get('/api/vsc/coverage-options'),
  generateQuote: (quoteData) => api.post('/api/vsc/quote', quoteData),
}

// VIN Decoder APIs
export const vinAPI = {
  checkHealth: () => api.get('/api/vin/health'),
  validateVIN: (vin) => api.post('/api/vin/validate', { vin }),
  decodeVIN: (vin) => api.post('/api/vin/decode', { vin }),
}

// Payment APIs
export const paymentAPI = {
  getPaymentMethods: () => api.get('/api/payments/methods'),
}

// Contract APIs
export const contractAPI = {
  generateContract: (contractData) => api.post('/api/contracts/generate', contractData),
}

// Utility functions for data formatting
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export const formatDate = (dateString) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString))
}

// Quote data validation
export const validateQuoteData = (data, type) => {
  const errors = []

  if (type === 'hero') {
    if (!data.product_type) errors.push('Product type is required')
    if (!data.term_years) errors.push('Term is required')
    if (data.term_years && (data.term_years < 1 || data.term_years > 5)) {
      errors.push('Term must be between 1 and 5 years')
    }
  }

  if (type === 'vsc') {
    if (!data.make) errors.push('Vehicle make is required')
    if (!data.year) errors.push('Vehicle year is required')
    if (!data.mileage) errors.push('Vehicle mileage is required')
    if (data.year && (data.year < 1990 || data.year > new Date().getFullYear() + 1)) {
      errors.push('Invalid vehicle year')
    }
    if (data.mileage && (data.mileage < 0 || data.mileage > 500000)) {
      errors.push('Invalid mileage')
    }
  }

  return errors
}

// Error handling utility
export const handleAPIError = (error) => {
  console.error('API Error:', error)
  
  if (error.message.includes('Failed to fetch')) {
    return 'Unable to connect to server. Please check your internet connection.'
  }
  
  if (error.message.includes('404')) {
    return 'Service not found. Please try again later.'
  }
  
  if (error.message.includes('500')) {
    return 'Server error. Please try again later.'
  }
  
  return error.message || 'An unexpected error occurred. Please try again.'
}

// Default export
export default api

