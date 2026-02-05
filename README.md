# 🚀 Spy Code - Hybrid LMS + E-Commerce Platform

A **production-grade** frontend for a comprehensive Learning Management System (LMS) integrated with e-commerce capabilities. Built with modern React patterns, beautiful UI/UX, and scalable architecture.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css) ![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Key Features Deep Dive](#-key-features-deep-dive)
- [State Management](#-state-management)
- [Component Library](#-component-library)
- [Mock Data](#-mock-data)
- [Customization](#-customization)
- [Production Deployment](#-production-deployment)
- [Contributing](#-contributing)

---

## ✨ Features

### **LMS Features**
- 📚 **Course Catalog** - Browse 500+ courses across 6 categories
- 🎥 **Protected Video Player** - DRM-like protection with watermarks
- 📊 **Progress Tracking** - Real-time course completion tracking
- ⭐ **Reviews & Ratings** - Authentic student feedback system
- 👨‍🏫 **Instructor Profiles** - Detailed instructor information
- 📝 **Lesson Sidebar** - Structured course curriculum with sections
- 🏆 **Course Certificates** - (UI ready for backend integration)

### **E-Commerce Features**
- 🛒 **Shopping Cart** - Add physical products & digital goods
- 💳 **Checkout Flow** - Complete purchase journey (UI only)
- 📦 **Product Catalog** - IoT, microcontrollers, electronics
- 💻 **Digital Products** - PDFs, templates, tools, kits
- ❤️ **Wishlist System** - Save items for later
- 🔍 **Advanced Filtering** - Category, price, level, search

### **UI/UX Features**
- 🌗 **Dark Mode** - Persistent theme switching
- 📱 **Fully Responsive** - Mobile-first design
- ✨ **Smooth Animations** - Framer Motion powered
- 🎨 **Custom Design System** - Tailwind 4 with custom colors
- ⚡ **Optimized Performance** - Fast page loads
- ♿ **Accessibility** - ARIA labels, keyboard navigation

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI library |
| **Vite** | 7.2.4 | Build tool |
| **Tailwind CSS** | 4.x | Styling framework |
| **Framer Motion** | 11.x | Animations |
| **React Router** | 6.x | Client-side routing |
| **Zustand** | 4.x | State management |
| **Lucide React** | Latest | Icon library |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd spy_code

# Install dependencies
npm install

# Start development server
npm run dev
```

**The app will be available at:** `http://localhost:5173`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   ├── Tabs.jsx
│   │   ├── Accordion.jsx
│   │   ├── ProgressBar.jsx
│   │   └── SkeletonLoader.jsx
│   ├── lms/              # Learning Management System
│   │   ├── CourseCard.jsx
│   │   ├── VideoPlayer.jsx   # Protected video player
│   │   ├── LessonSidebar.jsx
│   │   └── ReviewCard.jsx
│   ├── ecommerce/        # E-commerce components
│   │   ├── ProductCard.jsx
│   │   ├── CartItem.jsx
│   │   └── QuantitySelector.jsx
│   └── layout/           # Layout components
│       ├── Navbar.jsx
│       └── Footer.jsx
├── pages/
│   ├── public/           # Public-facing pages
│   │   ├── LandingPage.jsx
│   │   ├── CoursesListingPage.jsx
│   │   ├── ProductsListingPage.jsx
│   │   ├── DigitalProductsPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── CartPage.jsx
│   │   └── CheckoutPage.jsx
│   ├── auth/             # Authentication pages
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   └── ForgotPasswordPage.jsx
│   └── dashboard/        # User dashboards
│       ├── StudentDashboard.jsx
│       ├── InstructorDashboard.jsx
│       ├── EnrolledCoursesPage.jsx
│       └── CoursePlayerPage.jsx
├── context/              # State management (Zustand)
│   ├── themeStore.js     # Dark/light theme
│   ├── cartStore.js      # Shopping cart
│   ├── userStore.js      # Auth & user data
│   └── courseStore.js    # Course filters
├── data/                 # Mock data
│   ├── coursesData.js    # 6 complete courses
│   ├── productsData.js   # 10 products
│   └── digitalProductsData.js
├── routes/               # React Router config
│   └── index.jsx
├── layouts/              # Page layouts
│   └── MainLayout.jsx
├── hooks/                # Custom React hooks
└── utils/                # Helper functions
```

---

## 🎯 Key Features Deep Dive

### 🎥 Protected Video Player

The `VideoPlayer.jsx` component includes **UI-level content protection**:

```jsx
// Features:
- Right-click disabled
- Keyboard shortcuts blocked (F12, Ctrl+S, Ctrl+U, Ctrl+Shift+I)
- Custom watermark overlay
- No download button
- controlsList="nodownload"
- disablePictureInPicture
- onProgress and onComplete callbacks
```

**Note:** For production, implement **server-side video streaming** with proper DRM (e.g., Widevine, FairPlay, PlayReady).

### 🛒 Shopping Cart System

```javascript
// Cart Store API
import useCartStore from './context/cartStore';

const { addItem, removeItem, updateQuantity, clearCart, getTotal, getItemCount } = useCartStore();

// Add item
addItem({ id: 1, name: 'Course', price: 99, type: 'course' });

// Get total
const total = getTotal();
```

### 🌗 Dark Mode Implementation

```javascript
// Theme Store
import useThemeStore from './context/themeStore';

const { theme, toggleTheme } = useThemeStore();

// Toggle theme
<button onClick={toggleTheme}>
  {theme === 'dark' ? <Sun /> : <Moon />}
</button>
```

**Persistence:** Saved in `localStorage` and syncs across tabs.

### 🔐 Mock Authentication

```javascript
// User Store
import useUserStore from './context/userStore';

const { login, logout, isAuthenticated, user } = useUserStore();

// Login (mock)
login({
  email: 'user@example.com',
  name: 'John Doe',
  id: 1
});
```

**For production:** Replace with real API calls to your backend.

---

## 📊 State Management

### Zustand Stores

| Store | Purpose | Persistence |
|-------|---------|-------------|
| `themeStore` | Dark/light mode | ✅ localStorage |
| `cartStore` | Shopping cart items | ✅ localStorage |
| `userStore` | Authentication, enrolled courses, wishlist | ✅ localStorage |
| `courseStore` | Course filters (category, level, price) | ❌ Session only |

### Store Locations
- `src/context/themeStore.js`
- `src/context/cartStore.js`
- `src/context/userStore.js`
- `src/context/courseStore.js`

---

## 🧩 Component Library

### Common Components

#### Button
```jsx
import Button from './components/common/Button';

<Button variant="primary" size="lg" icon={<Icon />}>
  Click Me
</Button>
```

**Variants:** `primary`, `secondary`, `outline`, `ghost`, `danger`, `success`  
**Sizes:** `sm`, `md`, `lg`, `xl`

#### Modal
```jsx
import Modal from './components/common/Modal';

<Modal isOpen={isOpen} onClose={closeModal} size="lg" title="Title">
  Modal content here
</Modal>
```

#### Badge
```jsx
import Badge from './components/common/Badge';

<Badge variant="success" size="sm">Bestseller</Badge>
```

#### Card
```jsx
import Card from './components/common/Card';

<Card hover shadow="soft">
  <Card.Header>Title</Card.Header>
  <Card.Content>Content</Card.Content>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

---

## 📦 Mock Data

### Courses
- **Location:** `src/data/coursesData.js`
- **Count:** 6 complete courses
- **Categories:** Web Development, Data Science, Mobile Development, Cybersecurity, Cloud Computing, AI & ML
- **Includes:** Lessons, reviews, instructors, pricing, features

### Products
- **Location:** `src/data/productsData.js`
- **Count:** 10 products
- **Categories:** Microcontrollers, Development Boards, Sensors, Motors & Actuators, Kits & Bundles

### Digital Products
- **Location:** `src/data/digitalProductsData.js`
- **Count:** 6 items
- **Types:** PDFs, tools, templates, kits

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:

```js
extend: {
  colors: {
    primary: {
      // Change these hex values
      50: '#eff6ff',
      600: '#0ea5e9', // Main blue
      950: '#082f49'
    },
    secondary: {
      600: '#a855f7', // Main purple
    }
  }
}
```

### Typography
Update font in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap');
```

Then in `tailwind.config.js`:

```js
fontFamily: {
  sans: ['YourFont', 'sans-serif']
}
```

### Animations
All animations defined in `tailwind.config.js`:

```js
animation: {
  'fade-in': 'fadeIn 0.3s ease-in',
  'slide-up': 'slideUp 0.4s ease-out',
  'slide-down': 'slideDown 0.4s ease-out',
}
```

---

## 🌐 Production Deployment

### Backend Integration Checklist

- [ ] Replace mock authentication with real API
- [ ] Implement course enrollment API
- [ ] Add payment gateway (Stripe, PayPal)
- [ ] Setup video streaming service (Cloudflare Stream, Mux)
- [ ] Create product inventory management
- [ ] Add order processing system
- [ ] Implement email notifications
- [ ] Setup analytics tracking
- [ ] Add search functionality with Algolia/ElasticSearch
- [ ] Implement review moderation

### Environment Variables

Create `.env` file:

```env
VITE_API_BASE_URL=https://api.yoursite.com
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_VIDEO_STREAM_URL=https://stream.cloudflare.com/...
```

### Build Optimization

```bash
# Analyze bundle size
npm run build
npx vite-bundle-visualizer

# Optimize images
# Use WebP format, lazy loading (already implemented)
```

### Hosting Options
- **Vercel** - Zero config deployment
- **Netlify** - Continuous deployment
- **AWS Amplify** - AWS integration
- **Cloudflare Pages** - Fast edge deployment

---

## 🧪 Testing (TODO)

```bash
# Unit tests with Vitest
npm install -D vitest @testing-library/react @testing-library/jest-dom

# E2E tests with Playwright
npm install -D @playwright/test
```

---

## 📚 Pages Overview

| Page | Route | Status |
|------|-------|--------|
| Landing Page | `/` | ✅ Complete |
| Courses Listing | `/courses` | ✅ Complete |
| Products Listing | `/products` | ⚠️ Placeholder |
| Digital Products | `/digital-products` | ⚠️ Placeholder |
| Course Details | `/courses/:slug` | ⚠️ Placeholder |
| Product Details | `/products/:slug` | ⚠️ Placeholder |
| Cart | `/cart` | ⚠️ Placeholder |
| Checkout | `/checkout` | ⚠️ Placeholder |
| Login | `/login` | ✅ Complete |
| Signup | `/signup` | ⚠️ Placeholder |
| Student Dashboard | `/dashboard` | ⚠️ Placeholder |
| Course Player | `/learn/:courseSlug` | ⚠️ Placeholder |
| Instructor Dashboard | `/dashboard/instructor` | ⚠️ Placeholder |

**⚠️ Placeholders** contain basic structure - ready for content implementation.

---

## 🎨 Design System

### Color Palette
- **Primary (Blue):** `#0ea5e9` - CTAs, links, highlights
- **Secondary (Purple):** `#a855f7` - Accents, badges
- **Gray Scale:** 50-950 for backgrounds, text, borders

### Responsive Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Shadows
- `shadow-soft` - Subtle elevation
- `shadow-soft-lg` - Prominent elevation

---

## 🐛 Known Limitations

1. **Authentication is mock** - No real backend API calls
2. **Video protection is UI-level only** - Not true DRM
3. **No payment processing** - UI only, no Stripe/PayPal integration
4. **Search is mock** - No real search indexing
5. **Some pages are placeholders** - Basic structure only

---

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

MIT License - feel free to use this project for commercial purposes.

---

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first framework
- **Framer Motion** for buttery-smooth animations
- **Lucide Icons** for beautiful iconography
- **Zustand** for simple state management
- **Unsplash** for placeholder images

---

## 📧 Support

For questions or support:
- **Documentation:** Check `BUILD_COMPLETE.md` for detailed setup
- **Issues:** Open a GitHub issue
- **Email:** your.email@example.com

---

<div align="center">

**Built with ❤️ using React + Tailwind CSS**

⭐ **Star this repo if you found it helpful!**

</div>
