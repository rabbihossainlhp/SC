import { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Users, BookOpen, Package, Download, ShoppingCart,
  BarChart3, Settings, LogOut, Menu, X, Bell, Search, User,
  ChevronDown, Zap, Shield, CreditCard, FileText, MessageSquare,
  Calendar, TrendingUp
} from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import useUserStore from '../../context/userStore';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { user, logout } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();

  // Check both user role and URL path to determine if admin dashboard
  const isAdmin = user?.role === 'admin' || location.pathname.startsWith('/admin');

  const adminMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Users, label: 'Users', path: '/admin/users', badge: '156' },
    { icon: BookOpen, label: 'Courses', path: '/admin/courses', badge: '24' },
    { icon: Package, label: 'Products', path: '/admin/products' },
    { icon: Download, label: 'Digital Products', path: '/admin/digital-products' },
    { icon: ShoppingCart, label: 'Orders', path: '/admin/orders', badge: '12' },
    { icon: CreditCard, label: 'Payments', path: '/admin/payments' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
    { icon: MessageSquare, label: 'Reviews', path: '/admin/reviews' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const studentMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/student/dashboard' },
    { icon: BookOpen, label: 'My Courses', path: '/student/courses', badge: '3' },
    { icon: ShoppingCart, label: 'My Orders', path: '/student/orders' },
    { icon: Download, label: 'Downloads', path: '/student/downloads' },
    { icon: Calendar, label: 'Schedule', path: '/student/schedule' },
    { icon: User, label: 'Profile', path: '/student/profile' },
    { icon: Settings, label: 'Settings', path: '/student/settings' },
  ];

  const menuItems = isAdmin ? adminMenuItems : studentMenuItems;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-cyber-darker">
      {/* Cyber Background */}
      <div className="fixed inset-0 bg-cyber-grid bg-grid opacity-5 pointer-events-none"></div>
      <div className="fixed top-1/4 -left-48 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-48 w-96 h-96 bg-secondary-500/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none"></div>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed left-0 top-0 h-screen w-64 bg-cyber-dark/95 backdrop-blur-xl border-r border-primary-500/20 z-50 overflow-y-auto"
          >
            {/* Logo */}
            <div className="p-6 border-b border-primary-500/20">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-neon-green">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] via-[#34d399] to-[#22d3ee]">
                      Spy Code
                    </span>
                  </h1>
                  <p className="text-xs text-gray-400 font-mono">
                    {isAdmin ? 'Admin Panel' : 'Student Portal'}
                  </p>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all group relative ${
                      isActive
                        ? 'bg-primary-500/20 text-primary-400 shadow-neon-green'
                        : 'text-gray-400 hover:bg-primary-500/10 hover:text-primary-400'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary-500/20 rounded-lg border border-primary-500/30"
                        transition={{ type: 'spring', damping: 25 }}
                      />
                    )}
                    <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-primary-400' : 'group-hover:text-primary-400'}`} />
                    <span className="relative z-10 font-medium">{item.label}</span>
                    {item.badge && (
                      <Badge variant="primary" size="sm" className="ml-auto relative z-10">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* User Card */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary-500/20 bg-cyber-darker/50">
              <div className="flex items-center gap-3 p-3 bg-cyber-dark/50 rounded-lg border border-primary-500/20">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{user?.name || 'User'}</p>
                  <p className="text-xs text-gray-400 truncate">{user?.email || 'user@example.com'}</p>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-cyber-dark/95 backdrop-blur-xl border-b border-primary-500/20">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-400 hover:text-primary-400"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>

              {/* Search */}
              <div className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 bg-cyber-darker/50 border border-primary-500/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-primary-400 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent-neon rounded-full"></span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileDropdown(!profileDropdown)}
                  className="flex items-center gap-3 p-2 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {profileDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-56 bg-cyber-dark/95 backdrop-blur-xl border border-primary-500/20 rounded-lg shadow-2xl overflow-hidden"
                  >
                    <div className="p-4 border-b border-primary-500/20">
                      <p className="text-sm font-medium text-white">{user?.name || 'User'}</p>
                      <p className="text-xs text-gray-400">{user?.email || 'user@example.com'}</p>
                      <Badge variant="primary" size="sm" className="mt-2">
                        {isAdmin ? 'Admin' : 'Student'}
                      </Badge>
                    </div>
                    <div className="p-2">
                      <Link
                        to={isAdmin ? '/admin/settings' : '/student/profile'}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 rounded-lg transition-colors"
                      >
                        <User className="w-4 h-4" />
                        Profile
                      </Link>
                      <Link
                        to={isAdmin ? '/admin/settings' : '/student/settings'}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 rounded-lg transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 relative z-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
