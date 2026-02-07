import { motion } from 'framer-motion';
import {
  BookOpen, Download, Calendar, Clock, Award, TrendingUp,
  Play, CheckCircle, Target, Zap
} from 'lucide-react';
import StatCard from '../../components/dashboard/StatCard';
import ChartCard from '../../components/dashboard/ChartCard';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

const StudentDashboard = () => {
  const stats = [
    { icon: BookOpen, label: 'Enrolled Courses', value: '8', color: 'primary' },
    { icon: CheckCircle, label: 'Completed', value: '5', color: 'success' },
    { icon: Clock, label: 'In Progress', value: '3', color: 'info' },
    { icon: Award, label: 'Certificates', value: '5', color: 'warning' },
  ];

  const activeCourses = [
    {
      id: 1,
      title: 'Advanced React Development',
      progress: 65,
      nextLesson: 'Lesson 12: Custom Hooks',
      duration: '45 min',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
    },
    {
      id: 2,
      title: 'IoT with ESP32',
      progress: 40,
      nextLesson: 'Lesson 8: WiFi Configuration',
      duration: '30 min',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop',
    },
    {
      id: 3,
      title: 'Machine Learning Basics',
      progress: 20,
      nextLesson: 'Lesson 4: Neural Networks',
      duration: '60 min',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
    },
  ];

  const upcomingSchedule = [
    { title: 'React Hooks Deep Dive', time: 'Today, 2:00 PM', type: 'Live Session', color: 'primary' },
    { title: 'IoT Project Review', time: 'Tomorrow, 10:00 AM', type: 'Assignment Due', color: 'warning' },
    { title: 'ML Workshop', time: 'Feb 10, 3:00 PM', type: 'Workshop', color: 'success' },
  ];

  const recentDownloads = [
    { name: 'React Dashboard Pro', type: 'Code Template', date: '2026-02-07' },
    { name: 'IoT Study Guide', type: 'PDF', date: '2026-02-05' },
    { name: 'ML Algorithms Cheatsheet', type: 'PDF', date: '2026-02-03' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome Back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Student</span>!
          </h1>
          <p className="text-gray-400">Continue your learning journey today.</p>
        </div>
        <Button variant="primary" className="shadow-neon-green">
          <Play className="w-4 h-4 mr-2" />
          Resume Learning
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} delay={index * 0.1} />
        ))}
      </div>

      {/* Learning Progress */}
      <ChartCard
        title="Learning Progress"
        subtitle="This week"
        icon={TrendingUp}
        actions={
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
              <span className="text-xs text-gray-400">Study Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
              <span className="text-xs text-gray-400">Target</span>
            </div>
          </div>
        }
      >
        <div className="h-48 flex items-end justify-between gap-2">
          {[
            [3, 5],
            [4, 5],
            [2, 5],
            [5, 5],
            [3, 5],
            [4, 5],
            [2, 5],
          ].map(([actual, target], index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(actual / target) * 100}%` }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                className="w-full bg-gradient-to-t from-primary-500 to-secondary-500 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer relative"
                style={{ minHeight: `${(actual / target) * 192}px` }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-white">
                  {actual}h
                </div>
              </motion.div>
              <div className="w-full h-1 bg-gray-700 rounded-full"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6 text-xs text-gray-500">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </ChartCard>

      {/* Active Courses */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Continue Learning</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {activeCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-500/40 transition-all overflow-hidden group">
                {/* Thumbnail */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/90 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-semibold mb-2">{course.title}</h3>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-primary-400 font-semibold">{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-cyber-darker rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      />
                    </div>
                  </div>

                  {/* Next Lesson */}
                  <div className="flex items-start gap-2 text-sm">
                    <Play className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">{course.nextLesson}</p>
                      <p className="text-gray-400 text-xs">{course.duration}</p>
                    </div>
                  </div>

                  {/* Action */}
                  <Button variant="primary" size="sm" fullWidth className="shadow-neon-green">
                    Continue
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Schedule & Downloads */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming Schedule */}
        <ChartCard title="Upcoming Schedule" subtitle="Don't miss these" icon={Calendar}>
          <div className="space-y-3">
            {upcomingSchedule.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-cyber-darker/50 rounded-lg border border-primary-500/20"
              >
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-${item.color}-400`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                </div>
                <Badge variant={item.color} size="sm">
                  {item.type}
                </Badge>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Recent Downloads */}
        <ChartCard title="Recent Downloads" subtitle="Your digital resources" icon={Download}>
          <div className="space-y-3">
            {recentDownloads.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-cyber-darker/50 rounded-lg border border-primary-500/20 hover:border-primary-500/40 transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Download className="w-5 h-5 text-primary-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-400">{item.type}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

export default StudentDashboard;
