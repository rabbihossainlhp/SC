import { motion } from 'framer-motion';
import {
  Users, BookOpen, Package, ShoppingCart, DollarSign, TrendingUp,
  Download, MessageSquare, Eye, Clock
} from 'lucide-react';
import StatCard from '../../components/dashboard/StatCard';
import ChartCard from '../../components/dashboard/ChartCard';
import DataTable from '../../components/dashboard/DataTable';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

const AdminDashboard = () => {
  // Mock data - in real app, this would come from API
  const stats = [
    { icon: Users, label: 'Total Users', value: '2,543', trend: 'up', trendValue: '+12%', color: 'primary' },
    { icon: DollarSign, label: 'Revenue', value: '$45,892', trend: 'up', trendValue: '+23%', color: 'success' },
    { icon: ShoppingCart, label: 'Orders', value: '892', trend: 'up', trendValue: '+8%', color: 'secondary' },
    { icon: BookOpen, label: 'Courses', value: '24', trend: 'up', trendValue: '+2', color: 'info' },
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      email: 'john@example.com',
      product: 'React Dashboard Pro',
      amount: '$49.99',
      status: 'completed',
      date: '2026-02-07'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      product: 'ESP32 Dev Board',
      amount: '$12.99',
      status: 'pending',
      date: '2026-02-07'
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      email: 'mike@example.com',
      product: 'IoT Course Bundle',
      amount: '$149.99',
      status: 'completed',
      date: '2026-02-06'
    },
    {
      id: 'ORD-004',
      customer: 'Sarah Williams',
      email: 'sarah@example.com',
      product: 'Arduino Uno R3',
      amount: '$24.99',
      status: 'processing',
      date: '2026-02-06'
    },
  ];

  const columns = [
    { key: 'id', label: 'Order ID', sortable: true },
    { key: 'customer', label: 'Customer', sortable: true },
    { 
      key: 'product', 
      label: 'Product',
      render: (row) => <span className="text-sm font-medium text-white">{row.product}</span>
    },
    { 
      key: 'amount', 
      label: 'Amount',
      render: (row) => <span className="text-sm font-semibold text-primary-400">{row.amount}</span>
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => {
        const variants = {
          completed: 'success',
          pending: 'warning',
          processing: 'info',
          cancelled: 'danger',
        };
        return (
          <Badge variant={variants[row.status]} size="sm">
            {row.status}
          </Badge>
        );
      },
    },
    { key: 'date', label: 'Date', sortable: true },
  ];

  const quickActions = [
    { icon: Users, label: 'Add User', color: 'primary' },
    { icon: BookOpen, label: 'New Course', color: 'secondary' },
    { icon: Package, label: 'Add Product', color: 'info' },
    { icon: Download, label: 'Digital Item', color: 'success' },
  ];

  const recentActivity = [
    { action: 'New user registered', user: 'John Doe', time: '5 mins ago', icon: Users },
    { action: 'Course purchased', user: 'Jane Smith', time: '15 mins ago', icon: BookOpen },
    { action: 'Product reviewed', user: 'Mike Johnson', time: '1 hour ago', icon: MessageSquare },
    { action: 'Order completed', user: 'Sarah Williams', time: '2 hours ago', icon: ShoppingCart },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Dashboard <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Overview</span>
          </h1>
          <p className="text-gray-400">Welcome back! Here's what's happening with your store.</p>
        </div>
        <Button variant="primary" className="shadow-neon-green">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} delay={index * 0.1} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <ChartCard
          title="Revenue Overview"
          subtitle="Last 7 days"
          icon={TrendingUp}
          actions={
            <select className="px-3 py-1 text-sm bg-cyber-darker border border-primary-500/20 rounded-lg text-white focus:outline-none focus:border-primary-500/50">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          }
        >
          <div className="h-64 flex items-end justify-between gap-2">
            {[40, 65, 45, 80, 55, 70, 85].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                className="flex-1 bg-gradient-to-t from-primary-500 to-secondary-500 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </ChartCard>

        {/* Quick Actions & Activity */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <ChartCard title="Quick Actions" subtitle="Common tasks">
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-cyber-darker/50 border border-primary-500/20 rounded-lg hover:border-primary-500/50 transition-all group"
                  >
                    <Icon className="w-6 h-6 text-primary-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium text-white">{action.label}</p>
                  </motion.button>
                );
              })}
            </div>
          </ChartCard>

          {/* Recent Activity */}
          <ChartCard title="Recent Activity" subtitle="Latest updates">
            <div className="space-y-3">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-3 bg-cyber-darker/30 rounded-lg">
                    <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white">{activity.action}</p>
                      <p className="text-xs text-gray-400">{activity.user}</p>
                    </div>
                    <span className="text-xs text-gray-500 flex-shrink-0">{activity.time}</span>
                  </div>
                );
              })}
            </div>
          </ChartCard>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Recent Orders</h2>
          <Button variant="outline" size="sm" className="border-primary-500/30">
            View All
          </Button>
        </div>
        <DataTable
          columns={columns}
          data={recentOrders}
          actions={
            <Button variant="primary" size="sm" className="shadow-neon-green">
              Export
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
