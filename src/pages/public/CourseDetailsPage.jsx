import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, Clock, BarChart, Users, Star, CheckCircle, Lock,
  BookOpen, Download, Award, Globe, Smartphone, Code, ChevronDown,
  MessageSquare, ThumbsUp, Share2, Bookmark, Calendar
} from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Accordion from '../../components/common/Accordion';
import Tabs from '../../components/common/Tabs';
import ReviewCard from '../../components/lms/ReviewCard';
import { courses, instructors, reviews, lessons } from '../../data/coursesData';
import useUserStore from '../../context/userStore';
import useCartStore from '../../context/cartStore';

const CourseDetailsPage = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const { isAuthenticated, user, enrolledCourses, enrollInCourse, addToWishlist, removeFromWishlist } = useUserStore();
  const { addItem } = useCartStore();
  
  // Find course by slug (for demo, using first course)
  const course = courses[0];
  const instructor = instructors.find(i => i.id === course.instructorId);
  const courseLessons = lessons.filter(l => l.courseId === course.id);
  const courseReviews = reviews.filter(r => r.courseId === course.id);
  
  const isEnrolled = enrolledCourses.includes(course.id);
  const isInWishlist = user?.wishlist?.includes(course.id);

  const handleEnroll = () => {
    if (isAuthenticated) {
      enrollInCourse(course.id);
    } else {
      addItem({
        id: course.id,
        name: course.title,
        price: course.price,
        image: course.thumbnail,
        type: 'course'
      });
    }
  };

  const toggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(course.id);
    } else {
      addToWishlist(course.id);
    }
  };

  // Group lessons by section
  const lessonsBySection = courseLessons.reduce((acc, lesson) => {
    if (!acc[lesson.section]) {
      acc[lesson.section] = [];
    }
    acc[lesson.section].push(lesson);
    return acc;
  }, {});

  const stats = [
    { icon: <Users className="w-5 h-5" />, label: 'Students', value: course.studentsEnrolled.toLocaleString(), color: 'text-primary-400' },
    { icon: <Clock className="w-5 h-5" />, label: 'Duration', value: course.duration, color: 'text-secondary-400' },
    { icon: <BarChart className="w-5 h-5" />, label: 'Level', value: course.level, color: 'text-green-400' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Lessons', value: course.totalLessons, color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section with Course Header */}
      <section className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container-custom relative z-10 py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left: Course Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Link to="/courses" className="hover:text-primary-400 transition-colors">Courses</Link>
                <span>/</span>
                <Link to={`/courses?category=${typeof course.category === 'object' ? course.category.slug : course.category}`} className="hover:text-primary-400 transition-colors">{typeof course.category === 'object' ? course.category.name : course.category}</Link>
                <span>/</span>
                <span className="text-white">{course.title}</span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {course.isBestseller && <Badge variant="warning" size="sm">🔥 Bestseller</Badge>}
                <Badge variant="primary" size="sm">{typeof course.category === 'object' ? course.category.name : course.category}</Badge>
                <Badge variant="secondary" size="sm">{course.level}</Badge>
                <Badge variant="success" size="sm">Updated 2026</Badge>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300">
                {course.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(course.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-yellow-400 font-semibold">{course.rating}</span>
                  <span className="text-gray-400">({course.totalReviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-5 h-5 text-primary-400" />
                  <span>{course.studentsEnrolled.toLocaleString()} students</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-12 h-12 rounded-full ring-2 ring-primary-500"
                />
                <div>
                  <p className="text-sm text-gray-400">Created by</p>
                  <Link to={`/instructor/${instructor.id}`} className="font-semibold text-white hover:text-primary-400 transition-colors">
                    {instructor.name}
                  </Link>
                </div>
              </div>

              {/* Quick Actions (Mobile) */}
              <div className="lg:hidden space-y-3">
                {isEnrolled ? (
                  <Link to={`/learn/${course.slug}`}>
                    <Button variant="success" size="lg" fullWidth icon={<Play className="w-5 h-5" />}>
                      Continue Learning
                    </Button>
                  </Link>
                ) : (
                  <Button variant="primary" size="lg" fullWidth icon={<Play className="w-5 h-5" />} onClick={handleEnroll}>
                    {course.price === 0 ? 'Enroll for Free' : `Enroll Now - $${course.price}`}
                  </Button>
                )}
                <div className="flex gap-3">
                  <Button variant="outline" size="md" fullWidth onClick={toggleWishlist} className="border-white/20 text-white hover:border-primary-400">
                    <Bookmark className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="outline" size="md" fullWidth className="border-white/20 text-white hover:border-primary-400">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: Preview Card (Desktop) */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 sticky top-24"
              >
                {/* Video Preview */}
                <div className="relative aspect-video bg-linear-to-br from-gray-700 to-gray-900">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center hover:bg-primary-600 transition-colors shadow-xl hover:scale-110 transform">
                      <Play className="w-6 h-6 ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Preview this course
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    {course.originalPrice && course.originalPrice > course.price ? (
                      <>
                        <span className="text-3xl font-bold text-white">${course.price}</span>
                        <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                        <Badge variant="danger" size="sm">
                          {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                        </Badge>
                      </>
                    ) : course.price === 0 ? (
                      <span className="text-3xl font-bold text-green-400">Free</span>
                    ) : (
                      <span className="text-3xl font-bold text-white">${course.price}</span>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    {isEnrolled ? (
                      <Link to={`/learn/${course.slug}`}>
                        <Button variant="success" size="lg" fullWidth icon={<Play className="w-5 h-5" />}>
                          Continue Learning
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="primary" size="lg" fullWidth icon={<Play className="w-5 h-5" />} onClick={handleEnroll}>
                        {course.price === 0 ? 'Enroll for Free' : 'Enroll Now'}
                      </Button>
                    )}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="md" 
                        fullWidth 
                        onClick={toggleWishlist}
                        className="border-gray-700 text-white hover:border-primary-400 hover:text-primary-400"
                      >
                        <Bookmark className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="md" 
                        fullWidth
                        className="border-gray-700 text-white hover:border-primary-400 hover:text-primary-400"
                      >
                        <Share2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="pt-4 border-t border-gray-700 space-y-3">
                    <p className="font-semibold text-white">This course includes:</p>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary-400" />
                        <span>{course.duration} of content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-primary-400" />
                        <span>Downloadable resources</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary-400" />
                        <span>Lifetime access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-primary-400" />
                        <span>Access on mobile and desktop</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary-400" />
                        <span>Certificate of completion</span>
                      </div>
                    </div>
                  </div>

                  {/* Money Back Guarantee */}
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
                    <p className="text-sm text-green-400 font-medium">
                      💰 30-Day Money-Back Guarantee
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className={`${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <Tabs
              tabs={[
                { id: 'overview', label: 'Overview' },
                { id: 'curriculum', label: 'Curriculum' },
                { id: 'instructor', label: 'Instructor' },
                { id: 'reviews', label: 'Reviews' }
              ]}
              activeTab={activeTab}
              onChange={setActiveTab}
            />

            {/* Tab Content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6 md:p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* What You'll Learn */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      What you'll learn
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Requirements
                    </h2>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <span className="text-primary-500">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Description
                    </h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {course.description}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                        This comprehensive course covers everything from the basics to advanced concepts. 
                        You'll work on real-world projects and build a strong portfolio that showcases your skills.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Course Curriculum
                    </h2>
                    <span className="text-gray-600 dark:text-gray-400">
                      {course.totalLessons} lessons • {course.duration}
                    </span>
                  </div>

                  {Object.entries(lessonsBySection).map(([section, sectionLessons], sectionIndex) => (
                    <Accordion
                      key={section}
                      title={
                        <div className="flex items-center justify-between w-full">
                          <span className="font-semibold">Section {sectionIndex + 1}: {section}</span>
                          <span className="text-sm text-gray-500">
                            {sectionLessons.length} lessons
                          </span>
                        </div>
                      }
                      defaultOpen={sectionIndex === 0}
                    >
                      <div className="space-y-2">
                        {sectionLessons.map((lesson, lessonIndex) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              {lesson.isFree ? (
                                <Play className="w-4 h-4 text-green-500" />
                              ) : (
                                <Lock className="w-4 h-4 text-gray-400" />
                              )}
                              <span className="text-gray-700 dark:text-gray-300">
                                {lessonIndex + 1}. {lesson.title}
                              </span>
                              {lesson.isFree && (
                                <Badge variant="success" size="sm">Preview</Badge>
                              )}
                            </div>
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </Accordion>
                  ))}
                </div>
              )}

              {activeTab === 'instructor' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full ring-4 ring-primary-500"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {instructor.name}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{instructor.title}</p>
                      
                      <div className="flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-gray-700 dark:text-gray-300">{instructor.rating} rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary-500" />
                          <span className="text-gray-700 dark:text-gray-300">{instructor.totalStudents.toLocaleString()} students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-secondary-500" />
                          <span className="text-gray-700 dark:text-gray-300">{instructor.totalCourses} courses</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {instructor.bio}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Student Reviews
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(course.rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{course.rating}</span>
                      <span className="text-gray-600 dark:text-gray-400">({course.totalReviews} reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {courseReviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Features */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Course Features</h3>
              <div className="space-y-3">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['IoT', 'Arduino', 'ESP32', 'Sensors', 'Programming', 'Electronics'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailsPage;
