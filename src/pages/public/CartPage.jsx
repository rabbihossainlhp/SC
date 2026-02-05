import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../../components/common/Button';
import CartItem from '../../components/ecommerce/CartItem';
import useCartStore from '../../context/cartStore';

const CartPage = () => {
  const { items, getTotal, clearCart } = useCartStore();
  const total = getTotal();
  const itemCount = items.length;

  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-12"
            >
              <ShoppingCart className="w-24 h-24 text-gray-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Looks like you haven't added anything to your cart yet
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button variant="primary" size="lg">
                    Browse Courses
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" size="lg">
                    Shop Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {items.map((item) => (
                <CartItem key={`${item.type}-${item.id}`} item={item} />
              ))}
            </motion.div>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Clear all items
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6 sticky top-24"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal ({itemCount} items)</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax (estimated)</span>
                  <span className="font-medium">${(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600 dark:text-green-400">FREE</span>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>${(total * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link to="/checkout">
                <Button variant="primary" size="lg" fullWidth icon={<ArrowRight className="w-5 h-5" />}>
                  Proceed to Checkout
                </Button>
              </Link>

              <Link to="/courses" className="block mt-4">
                <Button variant="ghost" size="md" fullWidth icon={<ArrowLeft className="w-4 h-4" />}>
                  Continue Shopping
                </Button>
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  We Accept
                </h3>
                <div className="flex gap-3 opacity-60">
                  <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-900 dark:text-white">
                    VISA
                  </div>
                  <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-900 dark:text-white">
                    MC
                  </div>
                  <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-900 dark:text-white">
                    AMEX
                  </div>
                  <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-900 dark:text-white">
                    PayPal
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-300 text-center">
                  🔒 Secure checkout with 256-bit SSL encryption
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            You might also like
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6">
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Recommended products will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
