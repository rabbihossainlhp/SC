import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Plus, Edit, Trash2, Eye, Users, DollarSign } from 'lucide-react';
import DataTable from '../../components/dashboard/DataTable';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Card from '../../components/common/Card';

const AdminCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Complete IoT Development Course',
      instructor: 'Dr. Smith',
      students: 1234,
      price: '$149.99',
      status: 'published',
      rating: 4.8,
      updated: '2026-02-01'
    },
    {
      id: 2,
      title: 'Advanced React Development',
      instructor: 'John Doe',
      students: 856,
      price: '$129.99',
      status: 'published',
      rating: 4.9,
      updated: '2026-01-28'
    },
    {
      id: 3,
      title: 'Machine Learning Basics',
      instructor: 'Dr. Jane',
      students: 2341,
      price: '$99.99',
      status: 'published',
      rating: 4.7,
      updated: '2026-01-25'
    },
    {
      id: 4,
      title: 'Python for Beginners',
      instructor: 'Mike Tech',
      students: 523,
      price: '$79.99',
      status: 'draft',
      rating: 0,
      updated: '2026-02-05'
    },
  ];

  const columns = [
    {
      key: 'title',
      label: 'Course',
      sortable: true,
      render: (row) => (
        <div>
          <p className="text-sm font-medium text-white">{row.title}</p>
          <p className="text-xs text-gray-400">by {row.instructor}</p>
        </div>
      ),
    },
    {
      key: 'students',
      label: 'Students',
      sortable: true,
      render: (row) => (
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-300">{row.students}</span>
        </div>
      ),
    },
    {
      key: 'price',
      label: 'Price',
      render: (row) => <span className="text-sm font-semibold text-primary-400">{row.price}</span>,
    },
    {
      key: 'rating',
      label: 'Rating',
      render: (row) => (
        <div className="flex items-center gap-1">
          <span className="text-sm text-yellow-400">★</span>
          <span className="text-sm text-gray-300">{row.rating || 'N/A'}</span>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => (
        <Badge variant={row.status === 'published' ? 'success' : 'warning'} size="sm">
          {row.status}
        </Badge>
      ),
    },
    {
      key: 'updated',
      label: 'Last Updated',
      sortable: true,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (row) => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-secondary-400 hover:text-secondary-300">
            <Eye className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-primary-400 hover:text-primary-300">
            <Edit className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ];

  const stats = [
    { label: 'Total Courses', value: '24', icon: BookOpen },
    { label: 'Published', value: '20', icon: Eye },
    { label: 'Total Students', value: '5,234', icon: Users },
    { label: 'Total Revenue', value: '$128K', icon: DollarSign },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Management</span>
          </h1>
          <p className="text-gray-400">Create and manage all courses on the platform.</p>
        </div>
        <Button variant="primary" className="shadow-neon-green">
          <Plus className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Courses Table */}
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default AdminCourses;
