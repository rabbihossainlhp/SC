import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ReviewCard = ({ review, index = 0 }) => {
  const { userName, userAvatar, rating, comment, date, helpful } = review;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
    >
      {/* User Info */}
      <div className="flex items-start gap-4 mb-4">
        <img 
          src={userAvatar} 
          alt={userName}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {userName}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            {/* Star Rating */}
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating 
                      ? 'fill-yellow-400 text-yellow-400' 
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {new Date(date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      {/* Comment */}
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {comment}
      </p>

      {/* Helpful */}
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <span>Helpful?</span>
        <button className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          👍 {helpful}
        </button>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
