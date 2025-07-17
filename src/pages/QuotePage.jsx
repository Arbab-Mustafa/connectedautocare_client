import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Car, Home, Shield, DollarSign, CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Badge } from '../components/ui/badge'
import { heroAPI, vscAPI, formatCurrency, validateQuoteData, handleAPIError } from '../lib/api'

const QuotePage = () => {
  const [activeTab, setActiveTab] = useState('hero')
  const [loading, setLoading] = useState(false)
  const [quote, setQuote] = useState(null)
  const [error, setError] = useState('')

  // Hero Products Form State
  const [heroForm, setHeroForm] = useState({
    product_type: '',
    term_years: '',
    coverage_limit: '',
    customer_type: 'retail'
  })

  // VSC Form State
  const [vscForm, setVscForm] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    coverage_level: '',
    term_months: '',
    customer_type: 'retail'
  })

  const heroProducts = [
    { value: 'home_protection', label: 'Home Protection Plan', icon: Home },
    { value: 'auto_protection', label: 'Auto Protection Plan', icon: Car },
    { value: 'home_deductible', label: 'Home Deductible Reimbursement', icon: Shield },
    { value: 'auto_advantage', label: 'Auto Advantage DDR', icon: Car },
    { value: 'all_vehicle', label: 'All Vehicle DDR', icon: Car },
    { value: 'auto_rv', label: 'Auto & RV DDR', icon: Car },
    { value: 'multi_vehicle', label: 'Multi Vehicle DDR', icon: Car }
  ]

  const vehicleMakes = [
    'Honda', 'Toyota', 'Nissan', 'Hyundai', 'Kia', 'Lexus', 'Mazda', 'Mitsubishi', 'Subaru',
    'Ford', 'Chevrolet', 'Buick', 'Chrysler', 'Dodge', 'GMC', 'Jeep', 'Mercury', 'Oldsmobile',
    'Plymouth', 'Pontiac', 'Saturn', 'BMW', 'Mercedes-Benz', 'Audi', 'Cadillac', 'Lincoln',
    'Volkswagen', 'Volvo', 'Acura', 'Infiniti'
  ]

  const handleHeroSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setQuote(null)

    try {
      const errors = validateQuoteData(heroForm, 'hero')
      if (errors.length > 0) {
        setError(errors.join(', '))
        return
      }

      const response = await heroAPI.generateQuote(heroForm)
      setQuote(response.data)
    } catch (err) {
      setError(handleAPIError(err))
    } finally {
      setLoading(false)
    }
  }

  const handleVSCSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setQuote(null)

    try {
      const errors = validateQuoteData(vscForm, 'vsc')
      if (errors.length > 0) {
        setError(errors.join(', '))
        return
      }

      const response = await vscAPI.generateQuote(vscForm)
      setQuote(response.data)
    } catch (err) {
      setError(handleAPIError(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto">
            <Calculator className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Get Your Instant Quote</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional protection plans with competitive pricing. Get accurate quotes in seconds with our advanced rating engine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="quote-form">
              <CardHeader>
                <CardTitle className="text-2xl">Quote Calculator</CardTitle>
                <CardDescription>
                  Select your protection type and get an instant quote with detailed pricing breakdown.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="hero">Hero Products</TabsTrigger>
                    <TabsTrigger value="vsc">Vehicle Service Contracts</TabsTrigger>
                  </TabsList>

                  {/* Hero Products Tab */}
                  <TabsContent value="hero" className="space-y-6">
                    <form onSubmit={handleHeroSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="hero-product">Product Type</Label>
                          <Select 
                            value={heroForm.product_type} 
                            onValueChange={(value) => setHeroForm({...heroForm, product_type: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a product" />
                            </SelectTrigger>
                            <SelectContent>
                              {heroProducts.map((product) => (
                                <SelectItem key={product.value} value={product.value}>
                                  <div className="flex items-center space-x-2">
                                    <product.icon className="h-4 w-4" />
                                    <span>{product.label}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="hero-term">Term (Years)</Label>
                          <Select 
                            value={heroForm.term_years} 
                            onValueChange={(value) => setHeroForm({...heroForm, term_years: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select term" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Year</SelectItem>
                              <SelectItem value="2">2 Years</SelectItem>
                              <SelectItem value="3">3 Years</SelectItem>
                              <SelectItem value="4">4 Years</SelectItem>
                              <SelectItem value="5">5 Years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="hero-coverage">Coverage Limit</Label>
                          <Select 
                            value={heroForm.coverage_limit} 
                            onValueChange={(value) => setHeroForm({...heroForm, coverage_limit: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select coverage" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="500">$500</SelectItem>
                              <SelectItem value="1000">$1,000</SelectItem>
                              <SelectItem value="unlimited">Unlimited</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="hero-customer">Customer Type</Label>
                          <Select 
                            value={heroForm.customer_type} 
                            onValueChange={(value) => setHeroForm({...heroForm, customer_type: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select customer type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="retail">Retail Customer</SelectItem>
                              <SelectItem value="wholesale">Wholesale/Reseller</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Calculating...' : 'Get Hero Products Quote'}
                      </Button>
                    </form>
                  </TabsContent>

                  {/* VSC Tab */}
                  <TabsContent value="vsc" className="space-y-6">
                    <form onSubmit={handleVSCSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="vsc-make">Vehicle Make</Label>
                          <Select 
                            value={vscForm.make} 
                            onValueChange={(value) => setVscForm({...vscForm, make: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select make" />
                            </SelectTrigger>
                            <SelectContent>
                              {vehicleMakes.map((make) => (
                                <SelectItem key={make} value={make}>
                                  {make}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="vsc-model">Vehicle Model</Label>
                          <Input
                            id="vsc-model"
                            placeholder="Enter model"
                            value={vscForm.model}
                            onChange={(e) => setVscForm({...vscForm, model: e.target.value})}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="vsc-year">Vehicle Year</Label>
                          <Input
                            id="vsc-year"
                            type="number"
                            placeholder="2020"
                            min="1990"
                            max={new Date().getFullYear() + 1}
                            value={vscForm.year}
                            onChange={(e) => setVscForm({...vscForm, year: e.target.value})}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="vsc-mileage">Current Mileage</Label>
                          <Input
                            id="vsc-mileage"
                            type="number"
                            placeholder="50000"
                            min="0"
                            max="500000"
                            value={vscForm.mileage}
                            onChange={(e) => setVscForm({...vscForm, mileage: e.target.value})}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="vsc-coverage">Coverage Level</Label>
                          <Select 
                            value={vscForm.coverage_level} 
                            onValueChange={(value) => setVscForm({...vscForm, coverage_level: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select coverage" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="silver">Silver Coverage</SelectItem>
                              <SelectItem value="gold">Gold Coverage</SelectItem>
                              <SelectItem value="platinum">Platinum Coverage</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="vsc-term">Term (Months)</Label>
                          <Select 
                            value={vscForm.term_months} 
                            onValueChange={(value) => setVscForm({...vscForm, term_months: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select term" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="12">12 Months</SelectItem>
                              <SelectItem value="24">24 Months</SelectItem>
                              <SelectItem value="36">36 Months</SelectItem>
                              <SelectItem value="48">48 Months</SelectItem>
                              <SelectItem value="60">60 Months</SelectItem>
                              <SelectItem value="72">72 Months</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Calculating...' : 'Get VSC Quote'}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                {/* Error Display */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                    <p className="text-red-600">{error}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quote Results */}
          <div className="space-y-6">
            {quote ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span>Your Quote</span>
                    </CardTitle>
                    <CardDescription>
                      Professional protection plan pricing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold price-highlight">
                        {formatCurrency(quote.total_price)}
                      </div>
                      <Badge variant="secondary">
                        {quote.customer_type === 'wholesale' ? 'Wholesale Price' : 'Retail Price'}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Base Price:</span>
                        <span>{formatCurrency(quote.base_price)}</span>
                      </div>
                      {quote.admin_fee && (
                        <div className="flex justify-between">
                          <span>Admin Fee:</span>
                          <span>{formatCurrency(quote.admin_fee)}</span>
                        </div>
                      )}
                      {quote.tax && (
                        <div className="flex justify-between">
                          <span>Tax:</span>
                          <span>{formatCurrency(quote.tax)}</span>
                        </div>
                      )}
                      {quote.discount && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount:</span>
                          <span>-{formatCurrency(quote.discount)}</span>
                        </div>
                      )}
                      <div className="border-t pt-3 flex justify-between font-bold">
                        <span>Total:</span>
                        <span>{formatCurrency(quote.total_price)}</span>
                      </div>
                    </div>

                    {quote.monthly_payment && (
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">Monthly Payment</div>
                          <div className="text-2xl font-bold text-primary">
                            {formatCurrency(quote.monthly_payment)}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Button className="w-full">
                        Purchase This Plan
                      </Button>
                      <Button variant="outline" className="w-full">
                        Save Quote
                      </Button>
                    </div>

                    {quote.coverage_details && (
                      <div className="space-y-2">
                        <h4 className="font-semibold">Coverage Details:</h4>
                        <ul className="text-sm space-y-1">
                          {quote.coverage_details.map((detail, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <DollarSign className="h-12 w-12 text-muted-foreground mx-auto" />
                    <div>
                      <h3 className="font-semibold">Get Your Quote</h3>
                      <p className="text-sm text-muted-foreground">
                        Fill out the form to see your personalized pricing
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Benefits Card */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Our Protection?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Instant quotes with real-time pricing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Competitive rates and flexible terms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Professional claims processing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Nationwide coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuotePage

