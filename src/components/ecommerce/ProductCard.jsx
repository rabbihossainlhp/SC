import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { motion } from 'framer-motion';
import useCartStore from '../../context/cartStore';
import useUserStore from '../../context/userStore';

const ProductCard = ({ product, index = 0 }) => {
  const { 
    id, 
    name, 
    slug, 
    description, 
    price, 
    originalPrice,
    category,
    images,
    inStock,
    rating,
    reviewsCount,
    isFeatured
  } = product;

  const addItem = useCartStore(state => state.addItem);
  const { addToWishlist, wishlist } = useUserStore();
  
  const discount = originalPrice > 0 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;

  const isInWishlist = wishlist.some(item => item.id === id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, 1);
    // Could show a toast notification here
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link to={`/products/${slug}`}>
        <Card hover padding="none" className="overflow-hidden h-full group relative">
          {/* Thumbnail */}
          <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img 
              src={images[0]} 
              alt={name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {!inStock && (
                <Badge variant="danger">Out of Stock</Badge>
              )}
              {discount > 0 && inStock && (
                <Badge variant="warning">{discount}% OFF</Badge>
              )}
              {isFeatured && (
                <Badge variant="primary">Featured</Badge>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={handleWishlist}
              className={`
                absolute top-3 right-3 w-10 h-10 rounded-full
                flex items-center justify-center transition-all
                ${isInWishlist 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/90 text-gray-700 hover:bg-white'
                }
              `}
            >
              <Heart 
                className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} 
              />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Category */}
            <Badge size="sm" variant="default">{typeof category === 'object' ? category.name : category}</Badge>

            {/* Title */}
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {rating}
                </span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                ({reviewsCount.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price & Action */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${price.toFixed(2)}
                </span>
                {originalPrice > price && (
                  <span className="text-sm text-gray-500 dark:text-gray-500 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <Button
                size="sm"
                onClick={handleAddToCart}
                disabled={!inStock}
                icon={<ShoppingCart className="w-4 h-4" />}
              >
                {inStock ? 'Add' : 'Out'}
              </Button>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
