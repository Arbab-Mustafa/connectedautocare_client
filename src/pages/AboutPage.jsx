import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Users, Award, Clock, CheckCircle, Target, Heart, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const AboutPage = () => {
  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "25,000+", label: "Claims Processed", icon: CheckCircle },
    { number: "98%", label: "Satisfaction Rate", icon: Award },
    { number: "24/7", label: "Customer Support", icon: Clock }
  ]

  const values = [
    {
      icon: Shield,
      title: "Protection First",
      description: "We prioritize comprehensive protection for our customers' most valuable assets with industry-leading coverage options."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Every customer interaction is guided by genuine care and commitment to providing exceptional service and support."
    },
    {
      icon: Target,
      title: "Precision & Accuracy",
      description: "Our advanced rating systems and professional processes ensure accurate pricing and reliable service delivery."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously innovate our technology and services to provide the best possible customer experience."
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      description: "20+ years in insurance industry leadership, focused on customer-centric protection solutions."
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer", 
      description: "Expert in insurance technology and digital transformation with proven track record in fintech."
    },
    {
      name: "Jennifer Chen",
      role: "Head of Customer Success",
      description: "Dedicated to ensuring exceptional customer experiences and satisfaction across all touchpoints."
    },
    {
      name: "David Thompson",
      role: "Director of Operations",
      description: "Operations excellence specialist with expertise in claims processing and service delivery."
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "ConnectedAutoCare.com launched with a mission to provide professional protection plans with exceptional service."
    },
    {
      year: "2021", 
      title: "Hero Products Launch",
      description: "Introduced comprehensive Hero protection products for home, auto, and deductible reimbursement."
    },
    {
      year: "2022",
      title: "VSC Platform",
      description: "Launched advanced Vehicle Service Contract platform with real-time rating and instant quotes."
    },
    {
      year: "2023",
      title: "Nationwide Expansion",
      description: "Expanded coverage to all 50 states with licensed administrators and professional service network."
    },
    {
      year: "2024",
      title: "Technology Innovation",
      description: "Deployed AI-powered rating engine and automated contract generation for enhanced customer experience."
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
                About ConnectedAutoCare
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Professional Protection, Personal Service
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
                We're dedicated to providing comprehensive protection plans with industry-leading service, 
                competitive rates, and the peace of mind you deserve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
                <p className="text-xl text-muted-foreground">
                  To provide comprehensive, affordable protection plans that give our customers peace of mind 
                  and financial security when they need it most.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg">
                  At ConnectedAutoCare.com, we believe that everyone deserves access to professional protection 
                  plans without the complexity and high costs traditionally associated with insurance products.
                </p>
                <p className="text-lg">
                  Our team of licensed professionals works tirelessly to deliver exceptional service, 
                  competitive pricing, and comprehensive coverage options that protect what matters most to our customers.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Licensed & Professional</h3>
                  <p className="text-muted-foreground">Fully licensed administrators and professional service team</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-primary/5 rounded-2xl p-8">
                <div className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Shield className="h-16 w-16 mx-auto text-primary" />
                    <h3 className="text-xl font-semibold">Professional Protection</h3>
                    <p className="text-muted-foreground">Industry-leading coverage with personal service</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make for our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to industry leader - the milestones that shaped ConnectedAutoCare.com.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 lg:pr-8">
                    <Card className={`card-hover ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-primary text-primary-foreground">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block relative">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="flex-1 lg:pl-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals leading ConnectedAutoCare.com to new heights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust ConnectedAutoCare.com for their protection needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-2">
                Professional • Reliable • Affordable
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

