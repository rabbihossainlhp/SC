import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Plus, Edit, Trash2, Search, Mail, Shield, UserCheck } from 'lucide-react';
import DataTable from '../../components/dashboard/DataTable';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Card from '../../components/common/Card';

const AdminUsers = () => {
  const [showModal, setShowModal] = useState(false);

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'student',
      status: 'active',
      courses: 5,
      joined: '2026-01-15',
      avatar: 'JD'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'admin',
      status: 'active',
      courses: 0,
      joined: '2025-12-01',
      avatar: 'JS'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'student',
      status: 'active',
      courses: 8,
      joined: '2026-01-20',
      avatar: 'MJ'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      role: 'student',
      status: 'inactive',
      courses: 2,
      joined: '2025-11-10',
      avatar: 'SW'
    },
  ];

  const columns = [
    {
      key: 'user',
      label: 'User',
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
            {row.avatar}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{row.name}</p>
            <p className="text-xs text-gray-400">{row.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      label: 'Role',
      render: (row) => (
        <Badge variant={row.role === 'admin' ? 'primary' : 'info'} size="sm">
          {row.role}
        </Badge>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => (
        <Badge variant={row.status === 'active' ? 'success' : 'danger'} size="sm">
          {row.status}
        </Badge>
      ),
    },
    {
      key: 'courses',
      label: 'Courses',
      render: (row) => <span className="text-sm text-gray-300">{row.courses}</span>,
    },
    {
      key: 'joined',
      label: 'Joined',
      sortable: true,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (row) => (
        <div className="flex items-center gap-2">
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
    { label: 'Total Users', value: '2,543', icon: Users, color: 'primary' },
    { label: 'Active', value: '2,401', icon: UserCheck, color: 'success' },
    { label: 'Admins', value: '12', icon: Shield, color: 'warning' },
    { label: 'New This Month', value: '156', icon: Plus, color: 'info' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            User <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Management</span>
          </h1>
          <p className="text-gray-400">Manage all platform users and their permissions.</p>
        </div>
        <Button variant="primary" className="shadow-neon-green" onClick={() => setShowModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add User
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
                  <div className={`w-12 h-12 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Users Table */}
      <DataTable
        columns={columns}
        data={users}
        actions={
          <>
            <Button variant="outline" size="sm" className="border-primary-500/30">
              <Mail className="w-4 h-4 mr-2" />
              Email All
            </Button>
            <Button variant="primary" size="sm" className="shadow-neon-green">
              Export
            </Button>
          </>
        }
      />
    </div>
  );
};

export default AdminUsers;
