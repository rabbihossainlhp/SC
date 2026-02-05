import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

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

// Dashboard Pages
import { 
  StudentDashboard,
  InstructorDashboard,
  EnrolledCoursesPage,
  CoursePlayerPage
} from '../pages/dashboard/index';

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
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      
      // Auth
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
      
      // Dashboard
      { path: 'dashboard', element: <StudentDashboard /> },
      { path: 'dashboard/instructor', element: <InstructorDashboard /> },
      { path: 'dashboard/courses', element: <EnrolledCoursesPage /> },
      { path: 'learn/:courseSlug', element: <CoursePlayerPage /> },
      
      // Catch all
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

export default router;
