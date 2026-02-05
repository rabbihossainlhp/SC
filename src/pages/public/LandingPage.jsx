import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, BookOpen, Package, Laptop, Star, Users, 
  Award, TrendingUp, CheckCircle, Play, Shield, Lock,
  Terminal, Code2, Zap, Eye, Database, Network
} from 'lucide-react';
import Button from '../../components/common/Button';
import CourseCard from '../../components/lms/CourseCard';
import ProductCard from '../../components/ecommerce/ProductCard';
import { courses } from '../../data/coursesData';
import { products } from '../../data/productsData';

const LandingPage = () => {
  const featuredCourses = courses.filter(c => c.isBestseller).slice(0, 3);
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 3);

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '150K+', label: 'Active Students', color: 'primary' },
    { icon: <BookOpen className="w-8 h-8" />, value: '500+', label: 'Quality Courses', color: 'secondary' },
    { icon: <Award className="w-8 h-8" />, value: '50+', label: 'Expert Instructors', color: 'green' },
    { icon: <Star className="w-8 h-8" />, value: '4.9/5', label: 'Average Rating', color: 'orange' },
  ];

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with hands-on projects, real-world applications, and practical skills.',
      color: 'primary'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Quality Hardware',
      description: 'Access premium IoT devices, microcontrollers, sensors, and electronics components for your projects.',
      color: 'secondary'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Digital Resources',
      description: 'Download code templates, project libraries, design files, and development tools to accelerate learning.',
      color: 'green'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certifications',
      description: 'Earn industry-recognized certificates upon course completion to boost your professional credentials.',
      color: 'orange'
    },
  ];

  return (
    <div className="min-h-screen bg-cyber-darker">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyber-darker via-cyber-dark to-black text-white overflow-hidden">
        {/* Matrix-style animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-600 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary-500 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-neon rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>
        
        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-scan-line opacity-30"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Terminal-style badge */}
                <div className="inline-flex items-center gap-2 bg-primary-500/10 backdrop-blur-sm px-4 py-2 rounded border border-primary-500/30 text-sm">
                  <TrendingUp className="w-4 h-4 text-primary-400" />
                  <span className="text-primary-200">Join 150,000+ learners worldwide</span>
                </div>

                {/* Glitch effect title */}
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-primary-400 to-secondary-400">
                    Spy Code
                  </span>
                  <span className="block mt-3 text-white drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                    Learn. Build. Innovate.
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Master IoT development, electronics, and programming with expert-led courses.
                  Access premium hardware and digital resources to accelerate your learning journey.
                </p>

                {/* Terminal-style CTA buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link to="/courses">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-neon-green font-semibold group"
                      icon={<BookOpen className="w-5 h-5" />}
                    >
                      Explore Courses
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button 
                      size="lg" 
                      className="bg-cyber-grid border-2 border-secondary-500/50 text-secondary-300 hover:bg-secondary-500/10 hover:border-secondary-400 hover:text-secondary-200 transition-all shadow-neon-cyan group"
                      icon={<Package className="w-5 h-5" />}
                    >
                      Shop Products
                    </Button>
                  </Link>
                </div>

                {/* Terminal-style stats */}
                <div className="flex flex-wrap gap-8 pt-4">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                    <div className="relative">
                      <div className="text-4xl font-bold text-primary-400">500+</div>
                      <div className="text-gray-400 text-xs tracking-wider">COURSES</div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                    <div className="relative">
                      <div className="text-4xl font-bold text-secondary-400">50+</div>
                      <div className="text-gray-400 text-xs tracking-wider">INSTRUCTORS</div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-neon to-primary-400 rounded blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                    <div className="relative">
                      <div className="text-4xl font-bold text-accent-neon">4.9★</div>
                      <div className="text-gray-400 text-xs tracking-wider">RATING</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Cyber Terminal */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  {/* Terminal window */}
                  <div className="relative bg-cyber-dark/80 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-primary-500/30">
                    {/* Terminal header */}
                    <div className="bg-cyber-darker/90 px-4 py-3 flex items-center justify-between border-b border-primary-500/30">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono ml-3">terminal@spycode:~$</span>
                      </div>
                      <Terminal className="w-4 h-4 text-primary-400" />
                    </div>
                    
                    {/* Terminal content */}
                    <div className="p-6 font-mono text-sm space-y-2">
                      <div className="text-primary-400">$ spycode --list-courses</div>
                      <div className="text-gray-500">Loading available courses...</div>
                      <div className="text-secondary-400">[✓] Web Development & Programming</div>
                      <div className="text-secondary-400">[✓] IoT & Electronics Engineering</div>
                      <div className="text-secondary-400">[✓] Mobile App Development</div>
                      <div className="text-secondary-400">[✓] Data Science & Machine Learning</div>
                      <div className="text-gray-500 mt-4">All systems ready.</div>
                      <div className="text-accent-neon animate-pulse">Start learning today...</div>
                    </div>

                    {/* Glowing image overlay */}
                    <div className="relative aspect-video">
                      <img 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
                        alt="Cybersecurity Training"
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center hover:scale-110 transition-transform shadow-neon-green group">
                          <Play className="w-8 h-8 text-white ml-1 group-hover:animate-pulse" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Floating cyber elements */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-6 -left-6 bg-gradient-to-br from-primary-500/20 to-primary-600/20 backdrop-blur-xl rounded-xl p-4 border border-primary-500/30 shadow-neon-green"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/50">
                        <CheckCircle className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <div className="font-bold text-primary-300">5,000+</div>
                        <div className="text-xs text-gray-400 tracking-wider">COMPLETED</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    className="absolute -bottom-6 -right-6 bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 backdrop-blur-xl rounded-xl p-4 border border-secondary-500/30 shadow-neon-cyan"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center border border-secondary-500/50">
                        <Star className="w-6 h-6 text-secondary-400 fill-secondary-400" />
                      </div>
                      <div>
                        <div className="font-bold text-secondary-300">4.9/5</div>
                        <div className="text-xs text-gray-400 tracking-wider">RATING</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Cyber Dashboard */}
      <section className="py-16 bg-cyber-dark border-y border-primary-500/20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 border-2 transition-all duration-300 ${
                  stat.color === 'primary' ? 'bg-primary-500/10 border-primary-500/30 text-primary-400 group-hover:bg-primary-500/20 group-hover:border-primary-400 group-hover:shadow-neon-green' :
                  stat.color === 'secondary' ? 'bg-secondary-500/10 border-secondary-500/30 text-secondary-400 group-hover:bg-secondary-500/20 group-hover:border-secondary-400 group-hover:shadow-neon-cyan' :
                  stat.color === 'green' ? 'bg-accent-neon/10 border-accent-neon/30 text-accent-neon group-hover:bg-accent-neon/20 group-hover:border-accent-neon group-hover:shadow-neon-green' :
                  'bg-orange-500/10 border-orange-500/30 text-orange-400 group-hover:bg-orange-500/20 group-hover:border-orange-400'
                }`}>
                  {stat.icon}
                </div>
                <div className={`text-4xl font-bold mb-2 font-mono transition-colors ${
                  stat.color === 'primary' ? 'text-primary-400 group-hover:text-primary-300' :
                  stat.color === 'secondary' ? 'text-secondary-400 group-hover:text-secondary-300' :
                  stat.color === 'green' ? 'text-accent-neon group-hover:text-primary-300' :
                  'text-orange-400 group-hover:text-orange-300'
                }`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm tracking-widest uppercase font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Cyber Arsenal */}
      <section className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark relative overflow-hidden">
        {/* Animated glowing orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-secondary-500/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-primary-400 to-secondary-400">
                Why Choose Spy Code?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Everything you need to succeed in your learning journey
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cyber-dark/50 backdrop-blur-xl p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 group hover:shadow-neon-green"
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 border-2 transition-all duration-300 ${
                  feature.color === 'primary' ? 'bg-primary-500/10 border-primary-500/30 text-primary-400 group-hover:bg-primary-500/20 group-hover:border-primary-400' :
                  feature.color === 'secondary' ? 'bg-secondary-500/10 border-secondary-500/30 text-secondary-400 group-hover:bg-secondary-500/20 group-hover:border-secondary-400' :
                  feature.color === 'green' ? 'bg-accent-neon/10 border-accent-neon/30 text-accent-neon group-hover:bg-accent-neon/20 group-hover:border-accent-neon' :
                  'bg-orange-500/10 border-orange-500/30 text-orange-400 group-hover:bg-orange-500/20 group-hover:border-orange-400'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors font-mono">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses - Exploit Modules */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                  Featured Courses
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Start learning with our most popular courses
              </p>
            </div>
            <Link to="/courses">
              <Button 
                className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-neon-green"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View All
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Hardware Arsenal */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-[120px] animate-pulse-glow"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-cyan">
                  Featured Products
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Premium hardware for your projects
              </p>
            </div>
            <Link to="/products">
              <Button 
                className="bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-500 hover:to-secondary-400 text-white shadow-neon-cyan"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View All
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Terminal Style */}
      <section className="py-20 bg-gradient-to-br from-cyber-darker via-primary-900/20 to-secondary-900/20 relative overflow-hidden">
        {/* Cyber effects */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500 rounded-full blur-[120px] opacity-20 animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary-500 rounded-full blur-[120px] opacity-20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Terminal window */}
            <div className="bg-cyber-dark/80 backdrop-blur-xl rounded-xl border border-primary-500/30 overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="bg-cyber-darker/90 px-6 py-4 flex items-center justify-between border-b border-primary-500/30">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">root@spycode: ~$</span>
                </div>
                <Terminal className="w-5 h-5 text-primary-400" />
              </div>
              
              {/* Terminal content */}
              <div className="p-8 md:p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-primary-400 to-secondary-400">
                    Ready to Start Learning?
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join 150,000+ students mastering technology with expert-led courses.
                  Get instant access to 500+ courses and premium hardware products.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center mb-6">
                  <Link to="/signup">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-neon-green font-semibold"
                      icon={<ArrowRight className="w-5 h-5" />}
                    >
                      Get Started Free
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button 
                      size="lg" 
                      className="bg-cyber-grid border-2 border-secondary-500/50 text-secondary-300 hover:bg-secondary-500/10 hover:border-secondary-400 hover:text-secondary-200 transition-all shadow-neon-cyan"
                      icon={<Star className="w-5 h-5" />}
                    >
                      View Pricing
                    </Button>
                  </Link>
                </div>
                
                <div className="text-accent-neon text-sm">
                  ✓ No credit card required • Cancel anytime
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
