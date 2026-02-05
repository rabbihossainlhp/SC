import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import CourseCard from '../../components/lms/CourseCard';
import { CourseCardSkeleton } from '../../components/common/SkeletonLoader';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { courses, categories } from '../../data/coursesData';

const CoursesListingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPriceType, setSelectedPriceType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const priceTypes = ['All', 'Free', 'Paid'];

  // Filter courses
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || course.category === selectedCategory;
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    const matchesPriceType = !selectedPriceType || selectedPriceType === 'All' ||
                             (selectedPriceType === 'Free' && course.price === 0) ||
                             (selectedPriceType === 'Paid' && course.price > 0);
    
    return matchesSearch && matchesCategory && matchesLevel && matchesPriceType;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white py-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-secondary-400">Explore</span>
              <span className="text-white"> Courses</span>
            </h1>
            <p className="text-xl text-gray-300">
              {courses.length} courses to help you learn and grow
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-blue-300 text-primary-600" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Filters
                </h2>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === '' 
                        ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.name 
                          ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                  Level
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedLevel('')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedLevel === '' 
                        ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    All Levels
                  </button>
                  {levels.map(level => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedLevel === level 
                          ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedPriceType(type)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedPriceType === type 
                          ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  setSelectedCategory('');
                  setSelectedLevel('');
                  setSelectedPriceType('');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            {/* Search & Sort */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                  />
                </div>
                <select className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white">
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory || selectedLevel || selectedPriceType) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory && (
                  <Badge variant="primary" className="px-3 py-1.5">
                    {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory('')}
                      className="ml-2 hover:text-primary-800"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedLevel && (
                  <Badge variant="secondary" className="px-3 py-1.5">
                    {selectedLevel}
                    <button
                      onClick={() => setSelectedLevel('')}
                      className="ml-2 hover:text-secondary-800"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedPriceType && (
                  <Badge variant="success" className="px-3 py-1.5">
                    {selectedPriceType}
                    <button
                      onClick={() => setSelectedPriceType('')}
                      className="ml-2 hover:text-green-800"
                    >
                      ×
                    </button>
                  </Badge>
                )}
              </div>
            )}

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
              </p>
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <CourseCardSkeleton key={index} />
                ))
              ) : filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    No courses found matching your criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesListingPage;
