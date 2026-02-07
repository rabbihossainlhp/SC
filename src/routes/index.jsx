import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../components/dashboard/DashboardLayout';

// Public Pages
import { 
  LandingPage,
  CoursesListingPage,
  ProductsListingPage,
  AboutPage,
  CartPage,
  CourseDetailsPage, 
  ProductDetailsPage,
  DigitalProductsPage,
  DigitalProductDetailsPage,
  ContactPage,
  PricingPage,
  CheckoutPage
} from '../pages/public/index';

// Auth Pages
import LoginPage from '../pages/auth/LoginPage';
import { 
  SignupPage, 
  ForgotPasswordPage 
} from '../pages/auth/index';

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminUsers from '../pages/admin/AdminUsers';
import AdminCourses from '../pages/admin/AdminCourses';

// Student Pages
import StudentDashboard from '../pages/student/StudentDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'courses', element: <CoursesListingPage /> },
      { path: 'courses/:slug', element: <CourseDetailsPage /> },
      { path: 'products', element: <ProductsListingPage /> },
      { path: 'products/:slug', element: <ProductDetailsPage /> },
      { path: 'digital-products', element: <DigitalProductsPage /> },
      { path: 'digital-products/:slug', element: <DigitalProductDetailsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      
      // Auth
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
    ],
  },
  
  // Admin Dashboard
  {
    path: '/admin',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'users', element: <AdminUsers /> },
      { path: 'courses', element: <AdminCourses /> },
      { path: 'products', element: <div className="text-white">Products Page - Coming Soon</div> },
      { path: 'digital-products', element: <div className="text-white">Digital Products Page - Coming Soon</div> },
      { path: 'orders', element: <div className="text-white">Orders Page - Coming Soon</div> },
      { path: 'payments', element: <div className="text-white">Payments Page - Coming Soon</div> },
      { path: 'analytics', element: <div className="text-white">Analytics Page - Coming Soon</div> },
      { path: 'reviews', element: <div className="text-white">Reviews Page - Coming Soon</div> },
      { path: 'settings', element: <div className="text-white">Settings Page - Coming Soon</div> },
    ],
  },
  
  // Student Dashboard
  {
    path: '/student',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/student/dashboard" replace /> },
      { path: 'dashboard', element: <StudentDashboard /> },
      { path: 'courses', element: <div className="text-white">My Courses Page - Coming Soon</div> },
      { path: 'orders', element: <div className="text-white">My Orders Page - Coming Soon</div> },
      { path: 'downloads', element: <div className="text-white">Downloads Page - Coming Soon</div> },
      { path: 'schedule', element: <div className="text-white">Schedule Page - Coming Soon</div> },
      { path: 'profile', element: <div className="text-white">Profile Page - Coming Soon</div> },
      { path: 'settings', element: <div className="text-white">Settings Page - Coming Soon</div> },
    ],
  },
  
  // Catch all
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;
