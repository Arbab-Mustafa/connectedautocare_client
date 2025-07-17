import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Car,
  Home,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const HomePage = () => {
  const [stats, setStats] = useState({
    customers: 0,
    claims: 0,
    satisfaction: 0,
  });

  // Animate stats on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        customers: 50000,
        claims: 25000,
        satisfaction: 98,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description:
        "Complete coverage for your home, auto, and personal property with industry-leading protection plans.",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description:
        "Best-in-class rates with flexible payment options including 0% financing for qualified customers.",
    },
    {
      icon: Clock,
      title: "Instant Quotes",
      description:
        "Get accurate quotes in seconds with our advanced rating engine and real-time pricing.",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service and claims support when you need it most.",
    },
  ];

  const products = [
    {
      category: "Hero Products",
      icon: Shield,
      items: [
        "Home Protection Plans",
        "Auto Protection Plans",
        "Deductible Reimbursement",
      ],
      priceRange: "$120 - $1,295",
      link: "/hero-products",
      color: "bg-blue-500",
    },
    {
      category: "Vehicle Service Contracts",
      icon: Car,
      items: ["Silver Coverage", "Gold Coverage", "Platinum Coverage"],
      priceRange: "$800 - $2,800",
      link: "/vsc",
      color: "bg-green-500",
    },
    {
      category: "Home Protection",
      icon: Home,
      items: [
        "Comprehensive Plans",
        "Deductible Coverage",
        "Emergency Services",
      ],
      priceRange: "$160 - $1,814",
      link: "/hero-products",
      color: "bg-purple-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "ConnectedAutoCare saved me thousands when my HVAC system failed. The claim process was seamless and fast.",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Auto Dealer",
      content:
        "As a reseller, their wholesale pricing and support have been exceptional. My customers love the coverage options.",
      rating: 5,
    },
    {
      name: "Jennifer Chen",
      role: "Insurance Agent",
      content:
        "The instant quote system and comprehensive products make it easy to serve my clients' protection needs.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  Professional Insurance Protection
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Protect What Matters Most
                </h1>
                <p className="text-xl lg:text-2xl text-white/90">
                  Comprehensive protection plans for your home, auto, and peace
                  of mind. Get instant quotes and professional coverage from
                  industry leaders.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link to="/quote">
                    Get Instant Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  View Products
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {stats.customers.toLocaleString()}+
                  </div>
                  <div className="text-white/80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {stats.claims.toLocaleString()}+
                  </div>
                  <div className="text-white/80">Claims Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {stats.satisfaction}%
                  </div>
                  <div className="text-white/80">Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Hero Image Placeholder - In production, add actual video/image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Shield className="h-16 w-16 mx-auto text-white/80" />
                    <p className="text-white/80">
                      Professional Protection Video
                    </p>
                    <p className="text-sm text-white/60">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose ConnectedAutoCare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading protection with professional service, competitive
              rates, and comprehensive coverage options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardHeader className="text-center">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Our Protection Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coverage options designed to protect your most
              valuable assets with professional service and competitive pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardHeader>
                    <div
                      className={`${product.color} p-3 rounded-full w-fit mb-4`}
                    >
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">
                      {product.category}
                    </CardTitle>
                    <CardDescription className="text-lg price-highlight">
                      {product.priceRange}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {product.items.map((item) => (
                        <li key={item} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link to={product.link}>
                        Learn More
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from satisfied customers across the country.
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
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-muted-foreground">
                        {testimonial.role}
                      </div>
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
              Ready to Protect What Matters Most?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get an instant quote in seconds and discover why thousands of
              customers trust ConnectedAutoCare for their protection needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link to="/quote">
                  Get Your Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/contact">Speak with an Expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
