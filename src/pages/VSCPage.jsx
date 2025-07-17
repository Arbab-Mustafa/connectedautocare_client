import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Car, Shield, CheckCircle, ArrowRight, Star, DollarSign } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const VSCPage = () => {
  const coverageLevels = [
    {
      name: "Silver Coverage",
      description: "Essential protection for your vehicle's most important components",
      features: [
        "Engine coverage",
        "Transmission protection",
        "Basic electrical systems",
        "24/7 roadside assistance",
        "Nationwide coverage"
      ],
      priceRange: "$800 - $1,600",
      color: "bg-gray-500"
    },
    {
      name: "Gold Coverage",
      description: "Comprehensive protection with enhanced coverage options",
      features: [
        "All Silver benefits",
        "Air conditioning system",
        "Power steering",
        "Fuel system coverage",
        "Rental car reimbursement"
      ],
      priceRange: "$1,200 - $2,200",
      color: "bg-yellow-500",
      popular: true
    },
    {
      name: "Platinum Coverage",
      description: "Maximum protection with premium benefits and services",
      features: [
        "All Gold benefits",
        "Complete electrical coverage",
        "Advanced diagnostics",
        "Trip interruption coverage",
        "Concierge services"
      ],
      priceRange: "$1,600 - $2,800",
      color: "bg-purple-500"
    }
  ]

  const vehicleClasses = [
    {
      class: "Class A",
      description: "Most Reliable Vehicles",
      makes: ["Honda", "Toyota", "Nissan", "Hyundai", "Kia", "Lexus", "Mazda", "Subaru"],
      rateMultiplier: "Lowest Rates"
    },
    {
      class: "Class B", 
      description: "Moderate Risk Vehicles",
      makes: ["Ford", "Chevrolet", "Buick", "Chrysler", "Dodge", "GMC", "Jeep"],
      rateMultiplier: "Standard Rates"
    },
    {
      class: "Class C",
      description: "Higher Risk Vehicles", 
      makes: ["BMW", "Mercedes-Benz", "Audi", "Cadillac", "Lincoln", "Volkswagen", "Volvo"],
      rateMultiplier: "Premium Rates"
    }
  ]

  const benefits = [
    {
      title: "Nationwide Coverage",
      description: "Get service at any ASE-certified repair facility across the United States"
    },
    {
      title: "24/7 Roadside Assistance",
      description: "Emergency roadside help whenever and wherever you need it"
    },
    {
      title: "Rental Car Coverage",
      description: "Reimbursement for rental car expenses during covered repairs"
    },
    {
      title: "Trip Interruption",
      description: "Coverage for lodging and meals if your trip is interrupted by a breakdown"
    },
    {
      title: "Transferable Coverage",
      description: "Transfer your contract to a new owner to help maintain vehicle value"
    },
    {
      title: "No Deductible Options",
      description: "Choose from $0, $100, $200, or $500 deductible options"
    }
  ]

  const testimonials = [
    {
      name: "David Thompson",
      vehicle: "2019 Honda Accord",
      content: "My transmission failed at 85,000 miles. VSC covered the entire $4,200 repair. Best investment I ever made!",
      rating: 5,
      savings: "$4,200"
    },
    {
      name: "Maria Garcia",
      vehicle: "2020 Ford Explorer",
      content: "The air conditioning system went out in summer. Quick approval and repair - no hassle at all.",
      rating: 5,
      savings: "$1,800"
    },
    {
      name: "Robert Chen",
      vehicle: "2018 BMW X5",
      content: "Multiple electrical issues covered under my Platinum plan. The peace of mind is worth every penny.",
      rating: 5,
      savings: "$3,500"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30">
                Vehicle Service Contracts
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Protect Your Vehicle Investment
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
                Comprehensive vehicle protection with industry-leading coverage, competitive rates, 
                and professional service from licensed administrators.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/quote">
                  Get VSC Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Coverage Options
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">3</div>
                <div className="text-white/80">Coverage Levels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">72</div>
                <div className="text-white/80">Months Max Term</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-white/80">Roadside Assistance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Levels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Choose Your Coverage Level</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the protection level that best fits your vehicle and budget. All plans include professional service and nationwide coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {level.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <Card className={`card-hover h-full ${level.popular ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <div className={`${level.color} p-3 rounded-full w-fit mb-4`}>
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{level.name}</CardTitle>
                    <CardDescription className="text-lg price-highlight">
                      {level.priceRange}
                    </CardDescription>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {level.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link to={`/quote?coverage=${level.name.toLowerCase().replace(' ', '_')}`}>
                        Get {level.name} Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Classes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Vehicle Classification System</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our pricing is based on vehicle reliability data and manufacturer quality ratings to ensure fair and accurate pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleClasses.map((vehicleClass, index) => (
              <motion.div
                key={vehicleClass.class}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardHeader className="text-center">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <Car className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{vehicleClass.class}</CardTitle>
                    <CardDescription className="text-lg">{vehicleClass.description}</CardDescription>
                    <Badge variant="secondary">{vehicleClass.rateMultiplier}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Included Makes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicleClass.makes.map((make) => (
                          <Badge key={make} variant="outline" className="text-xs">
                            {make}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">VSC Benefits & Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive protection with professional service and industry-leading benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Real Customer Savings</h2>
            <p className="text-xl text-muted-foreground">
              See how VSC protection saved our customers thousands in unexpected repair costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Saved {testimonial.savings}
                      </Badge>
                    </div>
                    <blockquote className="text-lg mb-4">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.vehicle}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Protect Your Vehicle Today
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Don't wait for expensive repairs. Get comprehensive VSC protection with competitive rates and professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/quote">
                  Get Your VSC Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">
                  Speak with an Expert
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default VSCPage

