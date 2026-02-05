import { Link } from 'react-router-dom';
import { Star, Clock, Users, BookOpen, TrendingUp } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { motion } from 'framer-motion';
import { instructors } from '../../data/coursesData';

const CourseCard = ({ course, index = 0 }) => {
  const { 
    id, 
    title, 
    slug, 
    description, 
    thumbnail, 
    price, 
    originalPrice,
    category,
    level,
    duration,
    studentsEnrolled,
    rating,
    reviewsCount,
    instructorId,
    isBestseller
  } = course;
  
  // Look up instructor by ID
  const instructor = instructors.find(i => i.id === instructorId);

  const discount = originalPrice > 0 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link to={`/courses/${slug}`}>
        <Card hover padding="none" className="overflow-hidden h-full group">
          {/* Thumbnail */}
          <div className="relative overflow-hidden">
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            
            {/* Badges Overlay */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {isBestseller && (
                <Badge variant="warning" icon={<TrendingUp className="w-3 h-3" />}>
                  Bestseller
                </Badge>
              )}
              {discount > 0 && (
                <Badge variant="danger">
                  {discount}% OFF
                </Badge>
              )}
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 right-3">
              <Badge variant="primary">{typeof category === 'object' ? category.name : category}</Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Title */}
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {description}
            </p>

            {/* Instructor */}
            {instructor && (
              <div className="flex items-center gap-2">
                <img 
                  src={instructor.avatar} 
                  alt={instructor.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {instructor.name}
                </span>
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900 dark:text-white">{rating}</span>
                <span>({reviewsCount.toLocaleString()})</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{studentsEnrolled.toLocaleString()}</span>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500 pt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                <span>{course.lessonsCount} lessons</span>
              </div>
              <Badge size="sm" variant={level === 'Beginner' ? 'success' : level === 'Intermediate' ? 'info' : 'danger'}>
                {level}
              </Badge>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-baseline gap-2">
                {price === 0 ? (
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    FREE
                  </span>
                ) : (
                  <>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${price}
                    </span>
                    {originalPrice > price && (
                      <span className="text-sm text-gray-500 dark:text-gray-500 line-through">
                        ${originalPrice}
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
