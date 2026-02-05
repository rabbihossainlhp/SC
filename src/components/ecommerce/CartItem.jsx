import { Minus, Plus, X } from 'lucide-react';
import useCartStore from '../../context/cartStore';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    if (newQuantity > (item.stockCount || 99)) return;
    updateQuantity(item.id, newQuantity);
  };

  const subtotal = item.price * item.quantity;

  return (
    <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      {/* Product Image */}
      <img 
        src={item.images?.[0] || item.thumbnail} 
        alt={item.name || item.title}
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1">
          {item.name || item.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          ${item.price.toFixed(2)} each
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          
          <span className="w-12 text-center font-medium text-gray-900 dark:text-white">
            {item.quantity}
          </span>
          
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Price & Remove */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeItem(item.id)}
          className="text-gray-400 hover:text-red-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          ${subtotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
