import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, FileText, Palette, Download, Star, Search, Filter,
  BookOpen, Layers, Package, Zap, CheckCircle, ArrowRight
} from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Card from '../../components/common/Card';

const DigitalProductsPage = () => {
  const categories = [
    { id: 'all', name: 'All Products', icon: <Package className="w-4 h-4" />, count: 156 },
    { id: 'code', name: 'Code Templates', icon: <Code className="w-4 h-4" />, count: 68 },
    { id: 'ebooks', name: 'E-Books & Guides', icon: <BookOpen className="w-4 h-4" />, count: 42 },
    { id: 'designs', name: 'UI/UX Designs', icon: <Palette className="w-4 h-4" />, count: 28 },
    { id: 'libraries', name: 'Code Libraries', icon: <Layers className="w-4 h-4" />, count: 18 },
  ];

  const digitalProducts = [
    {
      id: 'dg-1',
      name: 'React Admin Dashboard Pro',
      slug: 'react-admin-dashboard-pro',
      description: 'Complete admin dashboard with 50+ pages, dark mode, and authentication',
      category: 'code',
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.9,
      downloads: 3420,
      preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      features: ['50+ Pages', 'Dark Mode', 'TypeScript', 'Responsive'],
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Dashboard'],
      isBestseller: true,
      fileSize: '45 MB',
      lastUpdated: '2026-01-15'
    },
    {
      id: 'dg-2',
      name: 'IoT Firmware Library Collection',
      slug: 'iot-firmware-library',
      description: 'Production-ready firmware libraries for ESP32, Arduino, and STM32',
      category: 'libraries',
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.8,
      downloads: 2180,
      preview: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      features: ['ESP32 Support', 'Arduino Compatible', 'Documentation', 'Examples'],
      tags: ['IoT', 'ESP32', 'Arduino', 'C++'],
      isBestseller: false,
      fileSize: '12 MB',
      lastUpdated: '2025-12-20'
    },
    {
      id: 'dg-3',
      name: 'Complete Web Development E-Book Bundle',
      slug: 'web-dev-ebook-bundle',
      description: '5 comprehensive e-books covering modern web development from basics to advanced',
      category: 'ebooks',
      price: 34.99,
      originalPrice: 69.99,
      rating: 5.0,
      downloads: 5640,
      preview: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop',
      features: ['5 E-Books (PDF)', '2000+ Pages', 'Code Examples', 'Lifetime Updates'],
      tags: ['JavaScript', 'React', 'Node.js', 'Full Stack'],
      isBestseller: true,
      fileSize: '125 MB',
      lastUpdated: '2026-01-28'
    },
    {
      id: 'dg-4',
      name: 'Mobile App UI Kit - 100+ Screens',
      slug: 'mobile-ui-kit',
      description: 'Premium mobile UI kit with 100+ screens for iOS and Android',
      category: 'designs',
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.9,
      downloads: 1890,
      preview: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      features: ['100+ Screens', 'Figma & Sketch', 'Dark Mode', 'Customizable'],
      tags: ['UI Design', 'Mobile', 'Figma', 'iOS'],
      isBestseller: false,
      fileSize: '230 MB',
      lastUpdated: '2025-11-10'
    },
    {
      id: 'dg-5',
      name: 'Next.js E-commerce Starter Kit',
      slug: 'nextjs-ecommerce-starter',
      description: 'Full-featured e-commerce template with payment integration and admin panel',
      category: 'code',
      price: 59.99,
      originalPrice: 99.99,
      rating: 4.8,
      downloads: 2760,
      preview: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      features: ['Payment Gateway', 'Admin Panel', 'SEO Optimized', 'Cart & Checkout'],
      tags: ['Next.js', 'E-commerce', 'Stripe', 'React'],
      isBestseller: true,
      fileSize: '68 MB',
      lastUpdated: '2026-01-22'
    },
    {
      id: 'dg-6',
      name: 'Machine Learning Algorithms Guide',
      slug: 'ml-algorithms-guide',
      description: 'Comprehensive guide to ML algorithms with Python implementations',
      category: 'ebooks',
      price: 24.99,
      originalPrice: 39.99,
      rating: 4.7,
      downloads: 4320,
      preview: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      features: ['350+ Pages', 'Python Code', 'Visual Examples', 'PDF & EPUB'],
      tags: ['Machine Learning', 'Python', 'AI', 'Data Science'],
      isBestseller: false,
      fileSize: '45 MB',
      lastUpdated: '2025-10-15'
    },
  ];

  const discount = (orig, curr) => Math.round(((orig - curr) / orig) * 100);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white overflow-hidden">
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
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-primary-400">
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
      <section className="py-16 bg-gradient-to-br from-gray-50 via-gray-50 to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
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
                          <span>{product.downloads.toLocaleString()} downloads</span>
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
      <section className="py-20 bg-gradient-to-br from-green-600 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Zap className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                Can't Find What You Need?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Let us know what digital products you'd like to see. We're constantly adding new templates, libraries, and resources.
              </p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Request a Product
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalProductsPage;
