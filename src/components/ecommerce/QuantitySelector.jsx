import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const QuantitySelector = ({ 
  quantity = 1, 
  onChange, 
  min = 1, 
  max = 99,
  className = '' 
}) => {
  const [value, setValue] = useState(quantity);

  const handleDecrease = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      if (onChange) onChange(newValue);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      if (onChange) onChange(newValue);
    }
  };

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value) || min;
    const clampedValue = Math.min(Math.max(newValue, min), max);
    setValue(clampedValue);
    if (onChange) onChange(clampedValue);
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <button
        onClick={handleDecrease}
        disabled={value <= min}
        className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Minus className="w-5 h-5" />
      </button>
      
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-16 h-10 text-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      
      <button
        onClick={handleIncrease}
        disabled={value >= max}
        className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
};

export default QuantitySelector;
