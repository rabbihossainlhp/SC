import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '',
  hover = false,
  padding = 'md',
  onClick,
  ...props 
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700';
  
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hoverClass = hover ? 'cursor-pointer card-hover' : '';
  
  const CardComponent = hover ? motion.div : 'div';
  
  return (
    <CardComponent
      className={`${baseStyles} ${paddings[padding]} ${hoverClass} ${className}`}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      {...props}
    >
      {children}
    </CardComponent>
  );
};

export default Card;
