# Spy Code - Admin & Student Dashboard

## 🎯 Overview
Modern, fully controllable admin and student dashboard system built with React, featuring a cyber-themed UI with neon accents and smooth animations.

## 🚀 Features

### Admin Dashboard
- **Dashboard Overview**: Statistics, revenue charts, recent orders, quick actions, activity feed
- **User Management**: View, add, edit, delete users with role management
- **Course Management**: Manage courses, view enrollments, track revenue
- **Products Management**: (Coming Soon)
- **Digital Products Management**: (Coming Soon)
- **Orders Management**: (Coming Soon)
- **Payments Management**: (Coming Soon)
- **Analytics**: (Coming Soon)
- **Reviews Management**: (Coming Soon)
- **Settings**: (Coming Soon)

### Student Dashboard
- **Dashboard Overview**: Learning progress, enrolled courses, upcoming schedule
- **My Courses**: Continue learning with progress tracking
- **My Orders**: (Coming Soon)
- **Downloads**: Access purchased digital products
- **Schedule**: Upcoming live sessions and assignments
- **Profile**: (Coming Soon)
- **Settings**: (Coming Soon)

## 🎨 Design Features
- **Cyber Theme**: Dark mode with neon green (#00ff41) and cyan (#22d3ee) accents
- **Animated Components**: Smooth transitions with Framer Motion
- **Responsive Layout**: Works on all screen sizes
- **Collapsible Sidebar**: Easy navigation with active state indicators
- **Data Tables**: Sortable, searchable tables with pagination
- **Interactive Charts**: Visual data representation
- **Stat Cards**: Key metrics with trend indicators

## 📁 File Structure
```
src/
├── components/
│   └── dashboard/
│       ├── DashboardLayout.jsx    # Main layout with sidebar & topbar
│       ├── StatCard.jsx           # Reusable stat card component
│       ├── ChartCard.jsx          # Card wrapper for charts
│       └── DataTable.jsx          # Sortable data table component
├── pages/
│   ├── admin/
│   │   ├── AdminDashboard.jsx    # Admin overview page
│   │   ├── AdminUsers.jsx        # User management
│   │   └── AdminCourses.jsx      # Course management
│   └── student/
│       └── StudentDashboard.jsx   # Student overview page
└── routes/
    └── index.jsx                  # Route configuration
```

## 🔑 Access

### Testing the Dashboard
On the login page, use the quick access buttons:
- **Admin Access**: Click "Login as Admin" → `/admin/dashboard`
- **Student Access**: Click "Login as Student" → `/student/dashboard`

### Routes
**Admin Routes:**
- `/admin/dashboard` - Overview
- `/admin/users` - User Management
- `/admin/courses` - Course Management
- `/admin/products` - Products (Coming Soon)
- `/admin/digital-products` - Digital Products (Coming Soon)
- `/admin/orders` - Orders (Coming Soon)
- `/admin/payments` - Payments (Coming Soon)
- `/admin/analytics` - Analytics (Coming Soon)
- `/admin/reviews` - Reviews (Coming Soon)
- `/admin/settings` - Settings (Coming Soon)

**Student Routes:**
- `/student/dashboard` - Overview
- `/student/courses` - My Courses (Coming Soon)
- `/student/orders` - My Orders (Coming Soon)
- `/student/downloads` - Downloads (Coming Soon)
- `/student/schedule` - Schedule (Coming Soon)
- `/student/profile` - Profile (Coming Soon)
- `/student/settings` - Settings (Coming Soon)

## 🛠️ Components Usage

### StatCard
```jsx
<StatCard
  icon={Users}
  label="Total Users"
  value="2,543"
  trend="up"
  trendValue="+12%"
  color="primary"
  delay={0.1}
/>
```

### ChartCard
```jsx
<ChartCard
  title="Revenue Overview"
  subtitle="Last 7 days"
  icon={TrendingUp}
  actions={<Button>Export</Button>}
>
  {/* Your chart content */}
</ChartCard>
```

### DataTable
```jsx
<DataTable
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { 
      key: 'status', 
      label: 'Status',
      render: (row) => <Badge>{row.status}</Badge>
    }
  ]}
  data={users}
  actions={<Button>Export</Button>}
/>
```

## 🎨 Color Palette
- **Primary Green**: `#10b981` (Matrix/Cyber green)
- **Secondary Cyan**: `#06b6d4` (Neon cyan)
- **Accent Neon**: `#00ff41` (Bright neon green)
- **Cyber Dark**: `#0a0e27` (Background)
- **Cyber Darker**: `#050815` (Darker background)

## 📊 Future Enhancements
- Real-time notifications
- Advanced analytics with charts (Chart.js/Recharts)
- File upload for courses/products
- Bulk actions for user/course management
- Email templates for notifications
- Role-based permissions system
- Activity logs
- Export to CSV/PDF
- Dark/Light theme toggle for dashboard
- Keyboard shortcuts
- Multi-language support

## 🔒 Security Note
**Important**: This is a frontend-only implementation for demonstration purposes. In production:
- Implement proper backend authentication (JWT tokens)
- Add role-based access control (RBAC)
- Validate all user inputs
- Implement rate limiting
- Add CSRF protection
- Use HTTPS only
- Implement proper session management

## 💡 Tips for Extension
1. **Adding New Pages**: Create component in `pages/admin/` or `pages/student/`, then add route in `routes/index.jsx`
2. **Custom Stat Cards**: Use different colors: `primary`, `secondary`, `success`, `warning`, `danger`, `info`
3. **Data Tables**: Add custom render functions for complex data display
4. **Charts**: Use Chart.js or Recharts for advanced visualizations
5. **Sidebar Items**: Update `menuItems` array in `DashboardLayout.jsx`

## 📝 Notes
- All mock data is hardcoded - replace with API calls in production
- User authentication uses Zustand store - implement real auth flow
- Dashboard is fully responsive and mobile-friendly
- All animations are optimized for performance
- Components follow React best practices and are reusable
