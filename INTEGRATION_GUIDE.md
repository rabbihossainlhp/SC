# Frontend-Backend Integration Guide

## 🎉 Setup Complete!

The SpyCode frontend is now fully integrated with the backend API. All stores have been updated to use real API calls instead of mock data.

---

## 📦 Installation

First, install the dependencies (includes axios):

```bash
cd spy_code
npm install
```

---

## 🚀 Running the Application

### 1. Start the Backend Server

```bash
cd server
npm install
npm run dev
```

The backend will run on `http://localhost:5000`

### 2. Start the Frontend Development Server

```bash
cd spy_code
npm run dev
```

The frontend will run on `http://localhost:5173`

---

## 🔐 Test Accounts

Use these pre-configured accounts for testing:

**Admin Account:**
- Email: `admin@spycode.com`
- Password: `Admin@123`
- Role: Admin (full access)

**Instructor Account:**
- Email: `instructor@spycode.com`
- Password: `Instructor@123`
- Role: Instructor (can manage courses)

**Student Account:**
- Email: `student@spycode.com`
- Password: `Student@123`
- Role: Student (standard user)

---

## 🏗️ Architecture Overview

### API Services

All API communication is handled through service modules located in `/src/api/`:

- **`config.js`** - Axios instance with interceptors for auth & error handling
- **`authService.js`** - Authentication (login, register, logout, password reset)
- **`userService.js`** - User profile & wishlist management
- **`productService.js`** - Product CRUD & filtering
- **`courseService.js`** - Course management & enrollment
- **`cartService.js`** - Shopping cart operations
- **`orderService.js`** - Order creation & tracking
- **`reviewService.js`** - Product/course reviews

### Zustand Stores

State management with automatic API synchronization:

- **`userStore.js`** - User authentication & profile
- **`cartStore.js`** - Shopping cart with backend sync
- **`productStore.js`** - Product catalog & filtering
- **`courseStore.js`** - Course catalog & enrollment
- **`orderStore.js`** - Order management
- **`themeStore.js`** - Theme preferences (local only)

---

## 🔄 API Integration Features

### 1. Automatic Token Management

The API configuration automatically handles JWT tokens:

- Stores access & refresh tokens in localStorage
- Adds Authorization header to all requests
- Auto-refreshes expired tokens
- Redirects to login on auth failure

### 2. Optimistic Updates

Cart operations use optimistic updates for better UX:
- Updates UI immediately
- Syncs with backend in background
- Reverts on error

### 3. Error Handling

All API calls return structured responses:

```javascript
{
  success: boolean,
  data: any,        // on success
  error: {          // on failure
    message: string,
    status: number,
    errors: object  // validation errors
  }
}
```

### 4. Request Interceptors

- Automatically adds JWT token to requests
- Includes credentials (cookies) for session management

### 5. Response Interceptors

- Handles token refresh on 401 errors
- Standardizes error responses
- Manages logout on auth failures

---

## 💡 Usage Examples

### Authentication

```javascript
import useUserStore from './context/userStore';

function LoginComponent() {
  const { login, loading, error } = useUserStore();
  
  const handleLogin = async (email, password) => {
    const result = await login(email, password);
    
    if (result.success) {
      // Redirect to dashboard
    } else {
      // Show error message
      console.error(result.error);
    }
  };
}
```

### Fetching Products

```javascript
import useProductStore from './context/productStore';

function ProductsPage() {
  const { 
    products, 
    loading, 
    fetchProducts, 
    setFilter 
  } = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const handleSearch = (query) => {
    setFilter('searchQuery', query);
    // Auto-fetches with new filter
  };
}
```

### Adding to Cart

```javascript
import useCartStore from './context/cartStore';

function ProductCard({ product }) {
  const { addItem } = useCartStore();
  
  const handleAddToCart = async () => {
    const result = await addItem(product, 1);
    
    if (result.success) {
      // Show success message
    } else {
      // Show error
      alert(result.error);
    }
  };
}
```

### Creating Order

```javascript
import { useOrderStore } from './context/orderStore';
import useCartStore from './context/cartStore';

function CheckoutPage() {
  const { createOrder } = useOrderStore();
  const { items, clearCart } = useCartStore();
  
  const handleCheckout = async (shippingAddress, paymentMethod) => {
    const orderData = {
      items: items.map(item => ({
        product: item.product._id,
        quantity: item.quantity
      })),
      shippingAddress,
      paymentMethod
    };
    
    const result = await createOrder(orderData);
    
    if (result.success) {
      await clearCart();
      // Redirect to order confirmation
    }
  };
}
```

### Course Enrollment

```javascript
import useCourseStore from './context/courseStore';

function CourseDetailsPage({ courseId }) {
  const { enrollInCourse, loading } = useCourseStore();
  
  const handleEnroll = async () => {
    const result = await enrollInCourse(courseId);
    
    if (result.success) {
      // Redirect to course content
    } else {
      alert(result.error);
    }
  };
}
```

---

## 🔧 Environment Configuration

The `.env` file contains:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=SpyCode
VITE_APP_VERSION=1.0.0
```

For production, update to your production API URL.

---

## 🛡️ Security Features

### Frontend Security

1. **JWT Token Storage**: Tokens stored in localStorage (consider httpOnly cookies for production)
2. **Automatic Token Refresh**: Seamless token renewal without user intervention
3. **Secure Logout**: Clears all tokens and user data
4. **CORS**: Backend configured to accept requests from frontend origin

### Backend Security (Already Implemented)

- ✅ JWT authentication with refresh tokens
- ✅ Bcrypt password hashing (12 rounds)
- ✅ Rate limiting (100 req/15min general, 5/15min auth)
- ✅ XSS protection
- ✅ NoSQL injection prevention
- ✅ Account lockout after 5 failed attempts
- ✅ Helmet security headers
- ✅ Input validation & sanitization
- ✅ Role-based access control

---

## 📊 API Endpoints Reference

Full documentation available in `/server/API_DOCUMENTATION.md`

### Quick Reference:

**Auth:**
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password/:token` - Reset password

**Products:**
- `GET /api/products` - List products (with filters)
- `GET /api/products/:id` - Get single product
- `GET /api/products/featured/list` - Featured products
- `GET /api/products/categories/list` - Categories

**Courses:**
- `GET /api/courses` - List courses (with filters)
- `GET /api/courses/:id` - Get single course
- `POST /api/courses/:id/enroll` - Enroll in course
- `GET /api/courses/my-courses/list` - My enrolled courses

**Cart:**
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:productId` - Update quantity
- `DELETE /api/cart/:productId` - Remove item
- `DELETE /api/cart` - Clear cart

**Orders:**
- `POST /api/orders` - Create order
- `GET /api/orders` - Get my orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/cancel` - Cancel order

---

## 🐛 Troubleshooting

### CORS Errors

If you see CORS errors, ensure:
1. Backend is running on `http://localhost:5000`
2. Frontend is running on `http://localhost:5173`
3. Backend `.env` has `CLIENT_URL=http://localhost:5173`

### Authentication Issues

If login doesn't work:
1. Check browser console for errors
2. Verify JWT tokens in localStorage
3. Check backend is connected to MongoDB
4. Run backend seeder: `npm run seed` in `/server`

### Cart Not Syncing

If cart doesn't sync:
1. Ensure user is logged in
2. Check network tab for API calls
3. Verify cart endpoints are working in backend

### Products/Courses Not Loading

If data doesn't load:
1. Run backend seeder to populate database
2. Check API_BASE_URL in `.env`
3. Verify backend is running
4. Check browser console for errors

---

## 🔄 Syncing Data

### On User Login

The app should sync data after login:

```javascript
// In your login component
const handleLogin = async (email, password) => {
  const result = await userStore.login(email, password);
  
  if (result.success) {
    // Sync cart with backend
    await cartStore.syncCart();
    
    // Fetch user's wishlist
    await userStore.fetchWishlist();
    
    // Fetch enrolled courses
    await courseStore.fetchMyEnrolledCourses();
  }
};
```

### On App Mount

Fetch initial data when app loads:

```javascript
// In App.jsx or main layout
useEffect(() => {
  const initializeApp = async () => {
    // Check if user is logged in
    const token = localStorage.getItem('accessToken');
    
    if (token) {
      // Fetch current user
      await userStore.fetchCurrentUser();
      
      // Sync cart
      await cartStore.syncCart();
    }
    
    // Fetch featured products/courses for landing page
    await productStore.fetchFeaturedProducts();
    await courseStore.fetchFeaturedCourses();
  };
  
  initializeApp();
}, []);
```

---

## 📝 Next Steps

1. **Install Dependencies**: Run `npm install` in spy_code folder
2. **Start Both Servers**: Backend (5000) and Frontend (5173)
3. **Test Login**: Use test accounts to verify authentication
4. **Browse Products**: Check product listing and filtering
5. **Test Cart**: Add items and verify backend sync
6. **Create Order**: Complete checkout flow
7. **Enroll in Course**: Test course enrollment

---

## 🎯 Key Files Modified/Created

### Created:
- `/src/api/config.js` - API configuration & interceptors
- `/src/api/authService.js` - Auth API service
- `/src/api/userService.js` - User API service
- `/src/api/productService.js` - Product API service
- `/src/api/courseService.js` - Course API service
- `/src/api/cartService.js` - Cart API service
- `/src/api/orderService.js` - Order API service
- `/src/api/reviewService.js` - Review API service
- `/src/api/index.js` - Service exports
- `/src/context/productStore.js` - Product store with API
- `/src/context/orderStore.js` - Order store with API
- `.env` - Environment variables
- `.env.example` - Environment template

### Updated:
- `package.json` - Added axios dependency
- `/src/context/userStore.js` - Real authentication
- `/src/context/cartStore.js` - Backend sync
- `/src/context/courseStore.js` - API integration

---

## ✅ Integration Complete!

Your SpyCode application now has a fully functional connection between the React frontend and Express.js backend with:

✅ Secure authentication with JWT
✅ Real-time cart synchronization
✅ Product & course management
✅ Order processing
✅ User profile & wishlist
✅ Automatic token refresh
✅ Error handling & loading states
✅ Optimistic UI updates

Ready to start building! 🚀
