import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShoppingCart, Heart, Share2, Star, Package, Truck, Shield,
  CheckCircle, Download, FileText, Code, ArrowRight, Users,
  Calendar, RefreshCw, AlertCircle, Info, ChevronDown
} from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Card from '../../components/common/Card';
import Tabs from '../../components/common/Tabs';
import Accordion from '../../components/common/Accordion';
import ReviewCard from '../../components/lms/ReviewCard';
import { products } from '../../data/productsData';
import { reviews } from '../../data/coursesData';
import useCartStore from '../../context/cartStore';
import useUserStore from '../../context/userStore';

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  
  const { addItem } = useCartStore();
  const { addToWishlist, wishlist } = useUserStore();
  
  // For demo, using first product
  const product = products[0];
  const productReviews = reviews.slice(0, 4);
  
  const isInWishlist = wishlist.some(item => item.id === product.id);
  const discount = product.originalPrice > 0 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleWishlist = () => {
    addToWishlist(product);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'reviews', label: `Reviews (${productReviews.length})` },
  ];

  const faqs = [
    {
      question: 'Is this product genuine?',
      answer: 'Yes, all our products are 100% genuine and sourced directly from authorized manufacturers. We provide authenticity certificates with every purchase.'
    },
    {
      question: 'What is the warranty period?',
      answer: 'This product comes with a 1-year manufacturer warranty. Extended warranty options are available at checkout.'
    },
    {
      question: 'Do you provide technical support?',
      answer: 'Yes, we offer lifetime technical support via email and community forums. Premium support with 24/7 chat is available for enterprise customers.'
    },
    {
      question: 'Can I return this product?',
      answer: 'Yes, we have a 30-day money-back guarantee. If you\'re not satisfied, return the product in its original condition for a full refund.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary-600 dark:hover:text-primary-400">Products</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {typeof product.category === 'object' ? product.category.name : product.category}
            </span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Product Images & Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Images */}
            <Card padding="lg">
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden group">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {!product.inStock && (
                      <Badge variant="danger">Out of Stock</Badge>
                    )}
                    {discount > 0 && product.inStock && (
                      <Badge variant="warning">{discount}% OFF</Badge>
                    )}
                    {product.isFeatured && (
                      <Badge variant="primary">Featured</Badge>
                    )}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? 'border-secondary-500 scale-95'
                            : 'border-gray-200 dark:border-gray-700 hover:border-secondary-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Card>

            {/* Tabs Content */}
            <Card padding="lg">
              <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

              <div className="mt-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        About This Product
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {product.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Key Features
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {product.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                          >
                            <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        What's in the Box
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                          <Package className="w-5 h-5 text-secondary-500" />
                          1x {product.name}
                        </li>
                        <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                          <FileText className="w-5 h-5 text-secondary-500" />
                          Documentation & Quick Start Guide
                        </li>
                        <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                          <Code className="w-5 h-5 text-secondary-500" />
                          Sample Code & Libraries
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Technical Specifications
                    </h3>
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="py-3 flex items-start">
                          <span className="w-1/3 font-medium text-gray-900 dark:text-white">
                            {key}
                          </span>
                          <span className="w-2/3 text-gray-600 dark:text-gray-400">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {/* Rating Summary */}
                    <div className="flex items-center gap-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                          {product.rating}
                        </div>
                        <div className="flex items-center gap-1 justify-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {product.reviewsCount.toLocaleString()} reviews
                        </div>
                      </div>

                      <div className="flex-1 space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <div key={stars} className="flex items-center gap-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400 w-12">
                              {stars} star
                            </span>
                            <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-yellow-400"
                                style={{
                                  width: `${stars === 5 ? 75 : stars === 4 ? 20 : 5}%`
                                }}
                              />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">
                              {stars === 5 ? '75%' : stars === 4 ? '20%' : '5%'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Reviews List */}
                    <div className="space-y-4">
                      {productReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                      ))}
                    </div>

                    <Button variant="outline" className="w-full">
                      Load More Reviews
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* FAQs */}
            <Card padding="lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h3>
              <Accordion items={faqs} />
            </Card>
          </div>

          {/* Right: Purchase Card (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <Card padding="lg">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {product.name}
                    </h1>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {product.rating}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          ({product.reviewsCount.toLocaleString()})
                        </span>
                      </div>
                      <Badge size="sm" variant="default">
                        {typeof product.category === 'object' ? product.category.name : product.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice > product.price && (
                        <>
                          <span className="text-xl text-gray-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                          <Badge variant="warning">Save {discount}%</Badge>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Inclusive of all taxes
                    </p>
                  </div>

                  {/* Stock Status */}
                  <div className={`flex items-center gap-2 p-3 rounded-lg ${
                    product.inStock
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                  }`}>
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">
                      {product.inStock ? `In Stock (${product.stockCount} available)` : 'Out of Stock'}
                    </span>
                  </div>

                  {/* Quantity Selector */}
                  {product.inStock && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Quantity
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          min="1"
                          max={product.stockCount}
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-20 h-10 text-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                        <button
                          onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                          className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      size="lg"
                      className="w-full bg-secondary-600 hover:bg-secondary-700"
                      icon={<ShoppingCart className="w-5 h-5" />}
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handleWishlist}
                        icon={<Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />}
                      >
                        {isInWishlist ? 'Saved' : 'Wishlist'}
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        icon={<Share2 className="w-5 h-5" />}
                      >
                        Share
                      </Button>
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 text-sm">
                      <Truck className="w-5 h-5 text-secondary-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Free delivery on orders over $50
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <RefreshCw className="w-5 h-5 text-secondary-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        30-day return policy
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Shield className="w-5 h-5 text-secondary-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        1-year manufacturer warranty
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Related Products Link */}
              <Card padding="md" className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/20 dark:to-primary-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Related Products
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      View similar items
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
