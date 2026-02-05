import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShoppingCart, Heart, Share2, Star, Download, FileText, Code, 
  CheckCircle, Shield, Users, Calendar, ArrowRight, Book, 
  Play, Package, AlertCircle, Info, Zap, Terminal, RefreshCw, ExternalLink, Globe, Monitor
} from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Card from '../../components/common/Card';
import Tabs from '../../components/common/Tabs';
import Accordion from '../../components/common/Accordion';
import ReviewCard from '../../components/lms/ReviewCard';
import { digitalProducts } from '../../data/productsData';
import { reviews } from '../../data/coursesData';
import useCartStore from '../../context/cartStore';
import useUserStore from '../../context/userStore';

const DigitalProductDetailsPage = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  const { addItem } = useCartStore();
  const { addToWishlist, wishlist } = useUserStore();
  
  // For demo, using first digital product
  const product = digitalProducts[0];
  const productReviews = reviews.slice(0, 4);
  
  const isInWishlist = wishlist.some(item => item.id === product.id);
  const discount = product.originalPrice > 0 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const handleAddToCart = () => {
    addItem(product, 1); // Digital products are always quantity 1
  };

  const handleWishlist = () => {
    addToWishlist(product);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'content', label: 'Content Included' },
    { id: 'reviews', label: `Reviews (${productReviews.length})` },
  ];

  const faqs = [
    {
      question: 'How do I access the digital product?',
      answer: 'After purchase, you will receive instant access through your account dashboard. All files and resources are available for immediate download.'
    },
    {
      question: 'Are there any updates?',
      answer: 'Yes, all digital products receive free lifetime updates. You will be notified via email when new versions or content is available.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'We offer a 14-day money-back guarantee for all digital products. If you\'re not satisfied, contact our support team for a full refund.'
    },
    {
      question: 'Do I need any special software?',
      answer: 'Most digital products include PDF files, code samples, and other standard formats. Specific requirements are listed in the product details.'
    },
  ];

  return (
    <div className="min-h-screen bg-cyber-darker relative overflow-hidden">
      {/* Cyber Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>

      {/* Breadcrumb */}
      <div className="bg-cyber-dark/50 backdrop-blur-sm border-b border-primary-500/20 relative z-10">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
            <Link to="/" className="hover:text-primary-400 transition-colors">Home</Link>
            <span className="text-primary-500/50">/</span>
            <Link to="/digital-products" className="hover:text-primary-400 transition-colors">Digital Products</Link>
            <span className="text-primary-500/50">/</span>
            <span className="text-white">
              {typeof product.category === 'object' ? product.category.name : product.category}
            </span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Product Preview & Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Preview Card */}
            <Card className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20">
              <div className="space-y-6">
                {/* Product Preview */}
                <div className="relative aspect-video bg-gradient-to-br from-cyber-darker to-cyber-dark rounded-xl overflow-hidden border border-primary-500/30">
                  <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-neon-green">
                        {product.type === 'download' && <Download className="w-12 h-12 text-white" />}
                        {product.type === 'online-tool' && <Globe className="w-12 h-12 text-white" />}
                        {product.type === 'app' && <Monitor className="w-12 h-12 text-white" />}
                        {product.type === 'web-tool' && <Terminal className="w-12 h-12 text-white" />}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {product.type === 'download' && 'Digital Download'}
                          {product.type === 'online-tool' && 'Online Tool Access'}
                          {product.type === 'app' && 'Desktop Application'}
                          {product.type === 'web-tool' && 'Web-Based Tool'}
                        </h3>
                        <p className="text-gray-400">
                          {product.type === 'download' && 'Instant download after purchase'}
                          {product.type === 'online-tool' && 'Access online anytime'}
                          {product.type === 'app' && 'Install on your device'}
                          {product.type === 'web-tool' && 'Use directly in browser'}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Digital Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="primary" className="bg-gradient-to-r from-primary-600 to-secondary-600 shadow-neon-green">
                      <Zap className="w-3 h-3 mr-1" />
                      {product.type === 'download' && 'Download'}
                      {product.type === 'online-tool' && 'Online Tool'}
                      {product.type === 'app' && 'Desktop App'}
                      {product.type === 'web-tool' && 'Web Tool'}
                    </Badge>
                  </div>
                </div>

                {/* Key Features */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-cyber-darker/50 rounded-lg border border-primary-500/20">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                      {product.type === 'download' && <Download className="w-5 h-5 text-primary-400" />}
                      {product.type === 'online-tool' && <ExternalLink className="w-5 h-5 text-primary-400" />}
                      {product.type === 'app' && <Monitor className="w-5 h-5 text-primary-400" />}
                      {product.type === 'web-tool' && <Globe className="w-5 h-5 text-primary-400" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {product.type === 'download' && 'Instant Access'}
                        {product.type === 'online-tool' && 'Cloud-Based'}
                        {product.type === 'app' && 'Multi-Platform'}
                        {product.type === 'web-tool' && 'Browser Access'}
                      </p>
                      <p className="text-xs text-gray-400">
                        {product.type === 'download' && 'Download immediately'}
                        {product.type === 'online-tool' && 'No installation needed'}
                        {product.type === 'app' && 'Win, Mac, Linux'}
                        {product.type === 'web-tool' && 'Use anywhere'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-cyber-darker/50 rounded-lg border border-secondary-500/20">
                    <div className="w-10 h-10 rounded-lg bg-secondary-500/20 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-secondary-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Free Updates</p>
                      <p className="text-xs text-gray-400">Lifetime access</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-cyber-darker/50 rounded-lg border border-accent-neon/20">
                    <div className="w-10 h-10 rounded-lg bg-accent-neon/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-accent-neon" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Money Back</p>
                      <p className="text-xs text-gray-400">14-day guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tabs Section */}
            <Card className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20">
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onChange={setActiveTab}
              />

              <div className="mt-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-primary-400" />
                        About This Digital Product
                      </h3>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed">{product.description}</p>
                        <p className="text-gray-400 mt-4">
                          This comprehensive digital resource is designed to help you master modern development 
                          techniques and best practices. With detailed documentation, code examples, and practical 
                          exercises, you'll gain hands-on experience that you can apply immediately to your projects.
                        </p>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="p-6 bg-cyber-darker/50 rounded-xl border border-primary-500/20">
                      <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-400" />
                        What's Included
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-accent-neon flex-shrink-0 mt-0.5" />
                          <span>Complete documentation (200+ pages)</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-accent-neon flex-shrink-0 mt-0.5" />
                          <span>Source code and templates</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-accent-neon flex-shrink-0 mt-0.5" />
                          <span>Video tutorials and walkthroughs</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-accent-neon flex-shrink-0 mt-0.5" />
                          <span>Project files and assets</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-accent-neon flex-shrink-0 mt-0.5" />
                          <span>Lifetime access and updates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'content' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary-400" />
                      Content Included
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Complete Guide PDF', size: '45 MB', icon: <FileText className="w-5 h-5" /> },
                        { name: 'Source Code Package', size: '120 MB', icon: <Code className="w-5 h-5" /> },
                        { name: 'Video Tutorials', size: '2.5 GB', icon: <Play className="w-5 h-5" /> },
                        { name: 'Project Templates', size: '85 MB', icon: <Book className="w-5 h-5" /> },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-cyber-darker/50 rounded-lg border border-primary-500/20 hover:border-primary-500/40 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400">
                              {item.icon}
                            </div>
                            <div>
                              <p className="font-medium text-white">{item.name}</p>
                              <p className="text-sm text-gray-400">{item.size}</p>
                            </div>
                          </div>
                          <Download className="w-5 h-5 text-gray-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Customer Reviews</h3>
                      <Button variant="outline" size="sm" className="border-primary-500/30 hover:border-primary-500/50">
                        Write a Review
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {productReviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* FAQs */}
            <Card className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-primary-400" />
                Frequently Asked Questions
              </h3>
              <Accordion items={faqs} />
            </Card>
          </div>

          {/* Right: Purchase Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20">
                <div className="space-y-6">
                  {/* Product Title */}
                  <div>
                    <h1 className="text-2xl font-bold text-white mb-2">{product.name}</h1>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-accent-neon text-accent-neon'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        {product.rating} ({product.reviewCount} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="py-4 border-y border-primary-500/20">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                        ${product.price}
                      </span>
                      {product.originalPrice > 0 && (
                        <>
                          <span className="text-xl text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                          <Badge variant="success" className="shadow-neon-green">
                            {discount}% OFF
                          </Badge>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">
                      {product.type === 'online-tool' && product.accessType === 'subscription' 
                        ? 'Monthly subscription, cancel anytime'
                        : 'One-time purchase, lifetime access'
                      }
                    </p>
                  </div>

                  {/* Stats or Platform Info */}
                  {product.type === 'app' && product.platforms ? (
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-300">Available Platforms:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.platforms.map((platform) => (
                          <div key={platform} className="px-3 py-2 bg-cyber-darker/50 border border-primary-500/20 rounded-lg text-sm text-white">
                            {platform}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-cyber-darker/50 rounded-lg border border-primary-500/20">
                        <Users className="w-5 h-5 text-primary-400 mx-auto mb-1" />
                        <p className="text-sm font-medium text-white">{product.students}+</p>
                        <p className="text-xs text-gray-400">
                          {product.type === 'download' ? 'Downloads' : 'Users'}
                        </p>
                      </div>
                      <div className="text-center p-3 bg-cyber-darker/50 rounded-lg border border-secondary-500/20">
                        <Calendar className="w-5 h-5 text-secondary-400 mx-auto mb-1" />
                        <p className="text-sm font-medium text-white">Recently Updated</p>
                        <p className="text-xs text-gray-400">2024</p>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="space-y-3">
                    {/* Primary Action Button */}
                    {product.type === 'online-tool' || product.type === 'web-tool' ? (
                      <>
                        <Button
                          variant="primary"
                          size="lg"
                          fullWidth
                          onClick={handleAddToCart}
                          className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-neon-green"
                        >
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Purchase Access
                        </Button>
                        {product.accessUrl && (
                          <a href={product.accessUrl} target="_blank" rel="noopener noreferrer" className="block">
                            <Button
                              variant="outline"
                              size="lg"
                              fullWidth
                              className="border-secondary-500/30 hover:border-secondary-500/50 hover:bg-secondary-500/10"
                            >
                              <ExternalLink className="w-5 h-5 mr-2" />
                              Preview Online Tool
                            </Button>
                          </a>
                        )}
                      </>
                    ) : product.type === 'app' ? (
                      <>
                        <Button
                          variant="primary"
                          size="lg"
                          fullWidth
                          onClick={handleAddToCart}
                          className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-neon-green"
                        >
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Purchase & Download
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="primary"
                        size="lg"
                        fullWidth
                        onClick={handleAddToCart}
                        className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-neon-green"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Add to Cart
                      </Button>
                    )}
                    
                    <Button
                      variant="outline"
                      size="lg"
                      fullWidth
                      onClick={handleWishlist}
                      className="border-primary-500/30 hover:border-primary-500/50 hover:bg-primary-500/10"
                    >
                      <Heart className={`w-5 h-5 mr-2 ${isInWishlist ? 'fill-primary-400 text-primary-400' : ''}`} />
                      {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 pt-4 border-t border-primary-500/20">
                    {product.type === 'download' && (
                      <>
                        <div className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle className="w-5 h-5 text-accent-neon" />
                          <span>Instant download access</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle className="w-5 h-5 text-accent-neon" />
                          <span>All source files included</span>
                        </div>
                      </>
                    )}
                    {(product.type === 'online-tool' || product.type === 'web-tool') && (
                      <>
                        <div className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle className="w-5 h-5 text-accent-neon" />
                          <span>Access from any device</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle className="w-5 h-5 text-accent-neon" />
                          <span>No installation required</span>
                        </div>
                      </>
                    )}
                    {product.type === 'app' && (
                      <>
                        <div className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle className="w-5 h-5 text-accent-neon" />
                          <span>Works offline</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle className="w-5 h-5 text-accent-neon" />
                          <span>Multi-platform support</span>
                        </div>
                      </>
                    )}
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="w-5 h-5 text-accent-neon" />
                      <span>14-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="w-5 h-5 text-accent-neon" />
                      <span>Free lifetime updates</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="w-5 h-5 text-accent-neon" />
                      <span>Premium support included</span>
                    </div>
                  </div>

                  {/* Share */}
                  <div className="flex items-center justify-center gap-2 pt-4 border-t border-primary-500/20">
                    <span className="text-sm text-gray-400">Share:</span>
                    <Button variant="ghost" size="sm" className="hover:bg-primary-500/10 hover:text-primary-400">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Trust Badges */}
              <Card className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20">
                <div className="space-y-4">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-400" />
                    Secure Purchase
                  </h4>
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-neon flex-shrink-0" />
                      <span>256-bit SSL encryption</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-neon flex-shrink-0" />
                      <span>PCI DSS compliant</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-neon flex-shrink-0" />
                      <span>Secure payment processing</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalProductDetailsPage;
