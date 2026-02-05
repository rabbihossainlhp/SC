import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ShoppingCart, User, Moon, Sun, 
  Terminal, Shield, Code2, LogIn, Heart, Zap
} from 'lucide-react';
import useThemeStore from '../../context/themeStore';
import useCartStore from '../../context/cartStore';
import useUserStore from '../../context/userStore';
import Button from '../common/Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const { theme, toggleTheme } = useThemeStore();
  const cartItems = useCartStore(state => state.getItemCount());
  const { isAuthenticated, user } = useUserStore();

  const navigation = [
    { name: 'Courses', href: '/courses', icon: <Terminal className="w-4 h-4" /> },
    { name: 'Products', href: '/products', icon: <Shield className="w-4 h-4" /> },
    { name: 'Digital Products', href: '/digital-products', icon: <Code2 className="w-4 h-4" /> },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-cyber-darker/95 backdrop-blur-xl border-b border-primary-500/20 shadow-lg shadow-primary-500/5">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center border border-primary-400/50 shadow-neon-green group-hover:shadow-neon-cyan transition-all">
              <span className="text-white font-bold text-xl font-mono">&lt;/&gt;</span>
              <div className="absolute inset-0 bg-primary-400/20 rounded-lg blur group-hover:bg-secondary-400/20 transition-all"></div>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-xl font-bold bg-gradient-to-r from-[#00ff41] via-[#34d399] to-[#22d3ee] text-transparent bg-clip-text">
                Spy Code
              </span>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">LEARN.BUILD.INNOVATE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium font-mono text-gray-300 hover:bg-primary-500/10 hover:text-primary-400 transition-all border border-transparent hover:border-primary-500/30 flex items-center gap-2 group"
              >
                <span className="group-hover:animate-pulse">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all border border-transparent hover:border-primary-500/30"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-400 hover:text-secondary-400 hover:bg-secondary-500/10 transition-all border border-transparent hover:border-secondary-500/30"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="hidden md:block p-2 rounded-lg text-gray-400 hover:text-accent-neon hover:bg-primary-500/10 transition-all border border-transparent hover:border-primary-500/30"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all border border-transparent hover:border-primary-500/30"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-linear-to-r from-primary-500 to-primary-600 text-white text-xs font-bold font-mono rounded-full w-5 h-5 flex items-center justify-center shadow-neon-green animate-pulse">
                  {cartItems()}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium font-mono text-gray-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all border border-transparent hover:border-primary-500/30"
              >
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-bold border border-primary-400/50 shadow-neon-green">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <span className="hidden xl:block">{user?.name}</span>
              </Link>
            ) : (
              <Link to="/login" className="hidden md:block">
                <Button 
                  size="sm" 
                  className="bg-linear-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-neon-green"
                  icon={<LogIn className="w-4 h-4" />}
                >
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all border border-transparent hover:border-primary-500/30"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-primary-500/20 overflow-hidden bg-cyber-dark/50 backdrop-blur-xl"
          >
            <div className="container-custom py-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
                <input
                  type="text"
                  placeholder="Search courses, products..."
                  className="w-full pl-10 pr-4 py-3 bg-cyber-darker border border-primary-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500 font-mono"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-primary-500/20 overflow-hidden bg-cyber-dark/90 backdrop-blur-xl"
          >
            <div className="container-custom py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium font-mono text-gray-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all border border-transparent hover:border-primary-500/30"
                >
                  <span className="hover:animate-pulse">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
              
              {!isAuthenticated && (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium bg-linear-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 transition-all shadow-neon-green"
                >
                  <LogIn className="w-5 h-5" />
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
