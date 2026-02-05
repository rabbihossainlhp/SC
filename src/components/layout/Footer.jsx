import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube, 
  Mail, Phone, MapPin, BookOpen, Package, Laptop
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Courses', href: '/courses', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Products', href: '/products', icon: <Package className="w-4 h-4" /> },
      { name: 'Digital Store', href: '/digital-products', icon: <Laptop className="w-4 h-4" /> },
      { name: 'Pricing', href: '/pricing' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'FAQs', href: '/faq' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
    learn: [
      { name: 'Become an Instructor', href: '/teach' },
      { name: 'Student Dashboard', href: '/dashboard' },
      { name: 'Course Catalog', href: '/courses' },
      { name: 'Certifications', href: '/certificates' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-cyber-dark border-t border-primary-500/20 relative overflow-hidden">
      {/* Cyber background effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-[120px]"></div>
      
      {/* Main Footer */}
      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center border border-primary-400/50 shadow-neon-green">
                <span className="text-white font-bold text-xl font-mono">&lt;/&gt;</span>
                <div className="absolute inset-0 bg-primary-400/20 rounded-lg blur group-hover:bg-secondary-400/20 transition-all"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#00ff41] via-[#34d399] to-[#22d3ee] text-transparent bg-clip-text">
                Spy Code
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-sm">
              Your premier destination for learning technology, electronics, and IoT development. 
              Quality courses and products for every skill level.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2 group">
                <Mail className="w-4 h-4 text-primary-400" />
                <a href="mailto:support@spycode.com" className="hover:text-primary-400 transition-colors">
                  support@spycode.com
                </a>
              </div>
              <div className="flex items-center gap-2 group">
                <Phone className="w-4 h-4 text-secondary-400" />
                <a href="tel:+1234567890" className="hover:text-secondary-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-neon" />
                <span>123 Tech Street, Silicon Valley, CA 94000</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="group-hover:text-primary-400">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Learn</h3>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-primary-500/20">
          <div className="max-w-md">
            <h3 className="font-semibold text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Subscribe to our newsletter
              </span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest courses, products, and exclusive deals delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-cyber-darker border border-primary-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-medium rounded-lg transition-all shadow-neon-green"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-500/20 bg-cyber-darker/50">
        <div className="container-custom py-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-semibold">Spy Code</span>. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-primary-400 transition-all p-2 rounded-lg hover:bg-primary-500/10 border border-transparent hover:border-primary-500/30"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Secure Payment:</span>
              <span className="font-semibold text-gray-400">Visa • Mastercard • PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
