import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, FileText, Palette, Download, Star, Search, Filter,
  BookOpen, Layers, Package, Zap, CheckCircle, ArrowRight, Send, Sparkles
} from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Card from '../../components/common/Card';
import { digitalProducts } from '../../data/productsData';

const DigitalProductsPage = () => {
  const categories = [
    { id: 'all', name: 'All Products', icon: <Package className="w-4 h-4" />, count: 156 },
    { id: 'code', name: 'Code Templates', icon: <Code className="w-4 h-4" />, count: 68 },
    { id: 'ebooks', name: 'E-Books & Guides', icon: <BookOpen className="w-4 h-4" />, count: 42 },
    { id: 'designs', name: 'UI/UX Designs', icon: <Palette className="w-4 h-4" />, count: 28 },
    { id: 'libraries', name: 'Code Libraries', icon: <Layers className="w-4 h-4" />, count: 18 },
  ];

  const discount = (orig, curr) => Math.round(((orig - curr) / orig) * 100);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge size="lg" className="bg-green-500/20 border border-green-500/30 text-green-300 mb-6">
                <Download className="w-4 h-4 mr-2" />
                156+ Digital Products
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-green-400 to-primary-400">
                Digital Products for Developers
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Code templates, libraries, e-books, and design files to accelerate your development workflow
              </p>

              {/* Search Bar */}
              <div className="flex gap-3 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search digital products..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
                  Search
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all whitespace-nowrap"
              >
                {cat.icon}
                <span className="font-medium">{cat.name}</span>
                <Badge size="sm" variant="default">{cat.count}</Badge>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-linear-to-br from-gray-50 via-gray-50 to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                All Digital Products
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {digitalProducts.length} products available
              </p>
            </div>
            <Button variant="outline" icon={<Filter className="w-4 h-4" />}>
              Filters
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/digital-products/${product.slug}`}>
                  <Card hover padding="none" className="overflow-hidden h-full group">
                    {/* Preview Image */}
                    <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={product.preview}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isBestseller && (
                          <Badge variant="warning">Bestseller</Badge>
                        )}
                        {discount(product.originalPrice, product.price) > 0 && (
                          <Badge variant="primary">
                            {discount(product.originalPrice, product.price)}% OFF
                          </Badge>
                        )}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge size="sm" className="bg-white/90 text-gray-900">
                          {categories.find(c => c.id === product.category)?.name}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 pt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {product.rating}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{product.students.toLocaleString()} downloads</span>
                        </div>
                      </div>

                      {/* Price & Action */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            ${product.price}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          icon={<ArrowRight className="w-4 h-4" />}
                        >
                          View
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-cyber-dark overflow-hidden">
        {/* Cyber Background */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-[120px] animate-pulse-glow"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-cyber-darker/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-12 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-neon-green">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-primary-400 to-secondary-400">
                  Looking for Something Specific?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find the perfect digital product? Tell us what you need! We're constantly expanding our library with new templates, code libraries, and educational resources based on community feedback.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-neon-green"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Request a Product
                </Button>
                
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary-500/30 hover:border-primary-500/50 hover:bg-primary-500/10"
                  >
                    Contact Support
                  </Button>
                </Link>
              </div>
              
              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-500/20">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-accent-neon mx-auto mb-2" />
                  <p className="text-sm font-medium text-white">Community Driven</p>
                  <p className="text-xs text-gray-400 mt-1">Built based on your requests</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-accent-neon mx-auto mb-2" />
                  <p className="text-sm font-medium text-white">Quality Assured</p>
                  <p className="text-xs text-gray-400 mt-1">Tested and production-ready</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-accent-neon mx-auto mb-2" />
                  <p className="text-sm font-medium text-white">Regular Updates</p>
                  <p className="text-xs text-gray-400 mt-1">Free lifetime updates</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalProductsPage;
