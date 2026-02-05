import { motion } from 'framer-motion';
import { Target, Users, Award, Zap, Heart, Shield } from 'lucide-react';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission-Driven',
      description: 'Making technology education accessible to everyone, everywhere.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'Building a supportive community of learners and makers.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Education',
      description: 'Expert instructors delivering industry-relevant content.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies and trends.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'We love what we do and it shows in everything we create.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Safety',
      description: 'Your data and learning experience are always protected.'
    }
  ];

  const stats = [
    { value: '150,000+', label: 'Students Worldwide' },
    { value: '500+', label: 'Quality Courses' },
    { value: '50+', label: 'Expert Instructors' },
    { value: '4.8/5', label: 'Average Rating' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      bio: '15+ years in EdTech'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'Former Google Engineer'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Content',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Curriculum Design Expert'
    },
    {
      name: 'David Kim',
      role: 'Lead Instructor',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      bio: 'IoT Specialist'
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-darker">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyber-darker via-cyber-dark to-black text-white py-20 overflow-hidden">
        {/* Cyber background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-600 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-primary-400 to-secondary-400">
                About Spy Code
              </span>
            </h1>
            <p className="text-xl text-white/90">
              Empowering the next generation of developers, makers, and innovators through 
              quality education and premium hardware.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-to-b from-cyber-darker to-cyber-dark relative">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                  Our Story
                </span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2020, Spy Code started with a simple mission: make technology 
                  education accessible to everyone. What began as a small online course platform 
                  has grown into a comprehensive learning ecosystem.
                </p>
                <p>
                  Today, we serve over 150,000 students worldwide, offering not just courses but 
                  also the hardware and tools needed to bring ideas to life. From IoT development 
                  to electronics, we're building the future, one learner at a time.
                </p>
                <p>
                  Our integrated approach combines expert instruction, hands-on projects, and 
                  quality hardware - everything you need to succeed in your technology journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden border border-primary-500/30 shadow-neon-green">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cyber-dark border-y border-primary-500/20 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-cyber-dark to-cyber-darker relative">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate educators and technologists dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students already learning on Spy Code
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button variant="secondary" size="lg">
                  Browse Courses
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-600">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
