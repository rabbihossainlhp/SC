export const categories = [
  { id: 1, name: 'Web Development', slug: 'web-development', icon: 'Code' },
  { id: 2, name: 'IoT & Embedded Systems', slug: 'iot-embedded', icon: 'Cpu' },
  { id: 3, name: 'Mobile Development', slug: 'mobile-development', icon: 'Smartphone' },
  { id: 4, name: 'Electronics', slug: 'electronics', icon: 'Zap' },
  { id: 5, name: 'Data Science', slug: 'data-science', icon: 'Database' },
  { id: 6, name: 'Microcontrollers', slug: 'microcontrollers', icon: 'Cpu' },
];

export const instructors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior IoT Engineer',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=0ea5e9&color=fff',
    bio: '10+ years experience in embedded systems and IoT development',
    rating: 4.8,
    students: 45230,
    courses: 12
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Full Stack Developer',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=a855f7&color=fff',
    bio: 'Expert in React, Node.js, and modern web technologies',
    rating: 4.9,
    students: 62000,
    courses: 18
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    title: 'Electronics Designer',
    avatar: 'https://ui-avatars.com/api/?name=Emma+Rodriguez&background=f59e0b&color=fff',
    bio: 'PCB design specialist and hardware prototyping expert',
    rating: 4.7,
    students: 28500,
    courses: 8
  },
];

export const courses = [
  {
    id: 1,
    title: 'Complete IoT Development with ESP32',
    slug: 'complete-iot-development-esp32',
    description: 'Master IoT development from basics to advanced projects using ESP32 microcontroller',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop',
    price: 89.99,
    originalPrice: 129.99,
    category: 'IoT & Embedded Systems',
    level: 'Intermediate',
    duration: '24 hours',
    lessonsCount: 156,
    studentsEnrolled: 12450,
    rating: 4.8,
    reviewsCount: 3421,
    instructorId: 1,
    isBestseller: true,
    lastUpdated: '2025-12-15',
    language: 'English',
    subtitles: ['English', 'Spanish', 'French'],
    features: [
      '24 hours on-demand video',
      '156 lessons',
      'Lifetime access',
      'Certificate of completion',
      '10 hands-on projects',
      'Community forum access'
    ],
    whatYouWillLearn: [
      'Build IoT devices using ESP32',
      'Connect devices to cloud platforms',
      'Implement MQTT and HTTP protocols',
      'Create mobile apps for IoT control',
      'Work with sensors and actuators',
      'Secure your IoT devices'
    ],
    requirements: [
      'Basic programming knowledge (C/C++)',
      'Computer with internet connection',
      'ESP32 development board (provided in kit option)'
    ]
  },
  {
    id: 2,
    title: 'Modern React Development - Complete Guide',
    slug: 'modern-react-development',
    description: 'Learn React 18+ with hooks, context, and modern best practices',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    price: 79.99,
    originalPrice: 99.99,
    category: 'Web Development',
    level: 'Beginner',
    duration: '32 hours',
    lessonsCount: 210,
    studentsEnrolled: 28900,
    rating: 4.9,
    reviewsCount: 8120,
    instructorId: 2,
    isBestseller: true,
    lastUpdated: '2026-01-10',
    language: 'English',
    subtitles: ['English', 'Spanish'],
    features: [
      '32 hours on-demand video',
      '210 lessons',
      'Lifetime access',
      'Certificate of completion',
      '15 real-world projects',
      'Source code included'
    ],
    whatYouWillLearn: [
      'Master React 18+ features',
      'Build scalable applications',
      'State management with Context API and Zustand',
      'React Router for navigation',
      'API integration',
      'Deploy React apps'
    ],
    requirements: [
      'Basic JavaScript knowledge',
      'HTML & CSS fundamentals',
      'Code editor installed'
    ]
  },
  {
    id: 3,
    title: 'Arduino Mastery - From Zero to Hero',
    slug: 'arduino-mastery',
    description: 'Complete Arduino course with 20+ projects and real-world applications',
    thumbnail: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=225&fit=crop',
    price: 69.99,
    originalPrice: 89.99,
    category: 'Microcontrollers',
    level: 'Beginner',
    duration: '18 hours',
    lessonsCount: 120,
    studentsEnrolled: 19200,
    rating: 4.7,
    reviewsCount: 4560,
    instructorId: 1,
    isBestseller: false,
    lastUpdated: '2025-11-22',
    language: 'English',
    subtitles: ['English'],
    features: [
      '18 hours on-demand video',
      '120 lessons',
      'Lifetime access',
      'Certificate of completion',
      '20+ Arduino projects',
      'Circuit diagrams included'
    ],
    whatYouWillLearn: [
      'Arduino programming fundamentals',
      'Work with sensors and modules',
      'Create smart home projects',
      'Interface with displays',
      'Build robotics projects',
      'Troubleshoot Arduino circuits'
    ],
    requirements: [
      'No prior experience needed',
      'Arduino board (UNO recommended)',
      'Basic electronic components'
    ]
  },
  {
    id: 4,
    title: 'PCB Design & Manufacturing',
    slug: 'pcb-design-manufacturing',
    description: 'Learn professional PCB design from schematic to manufacturing',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop',
    price: 0,
    originalPrice: 0,
    category: 'Electronics',
    level: 'Advanced',
    duration: '28 hours',
    lessonsCount: 185,
    studentsEnrolled: 8750,
    rating: 4.9,
    reviewsCount: 1890,
    instructorId: 3,
    isBestseller: false,
    lastUpdated: '2025-10-05',
    language: 'English',
    subtitles: ['English', 'German'],
    features: [
      '28 hours on-demand video',
      '185 lessons',
      'Lifetime access',
      'Certificate of completion',
      'Professional PCB templates',
      'Manufacturing guidelines'
    ],
    whatYouWillLearn: [
      'Schematic design principles',
      'PCB layout best practices',
      'Component selection',
      'Signal integrity',
      'Manufacturing files preparation',
      'Testing and debugging'
    ],
    requirements: [
      'Basic electronics knowledge',
      'Understanding of circuits',
      'KiCad or Altium Designer'
    ]
  },
  {
    id: 5,
    title: 'Full Stack Web Development Bootcamp',
    slug: 'fullstack-bootcamp',
    description: 'Become a full stack developer with React, Node.js, and MongoDB',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop',
    price: 119.99,
    originalPrice: 199.99,
    category: 'Web Development',
    level: 'Intermediate',
    duration: '45 hours',
    lessonsCount: 298,
    studentsEnrolled: 35600,
    rating: 4.8,
    reviewsCount: 12450,
    instructorId: 2,
    isBestseller: true,
    lastUpdated: '2026-01-20',
    language: 'English',
    subtitles: ['English', 'Spanish', 'French', 'German'],
    features: [
      '45 hours on-demand video',
      '298 lessons',
      'Lifetime access',
      'Certificate of completion',
      '8 full-stack projects',
      'Job interview preparation'
    ],
    whatYouWillLearn: [
      'Frontend with React',
      'Backend with Node.js & Express',
      'Database with MongoDB',
      'RESTful API development',
      'Authentication & Authorization',
      'Deployment strategies'
    ],
    requirements: [
      'JavaScript fundamentals',
      'Basic understanding of HTML/CSS',
      'Motivation to learn'
    ]
  },
  {
    id: 6,
    title: 'Raspberry Pi Projects Masterclass',
    slug: 'raspberry-pi-projects',
    description: 'Build amazing projects with Raspberry Pi from home automation to AI',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=225&fit=crop',
    price: 94.99,
    originalPrice: 139.99,
    category: 'IoT & Embedded Systems',
    level: 'Intermediate',
    duration: '22 hours',
    lessonsCount: 142,
    studentsEnrolled: 16800,
    rating: 4.7,
    reviewsCount: 3780,
    instructorId: 1,
    isBestseller: false,
    lastUpdated: '2025-12-01',
    language: 'English',
    subtitles: ['English'],
    features: [
      '22 hours on-demand video',
      '142 lessons',
      'Lifetime access',
      'Certificate of completion',
      '12 Raspberry Pi projects',
      'Python scripts included'
    ],
    whatYouWillLearn: [
      'Raspberry Pi setup and configuration',
      'Python programming for Pi',
      'GPIO programming',
      'Home automation projects',
      'Camera and image processing',
      'AI and machine learning on Pi'
    ],
    requirements: [
      'Raspberry Pi (3B+ or 4)',
      'Basic Linux knowledge helpful',
      'Python basics (beginner friendly)'
    ]
  }
];

export const lessons = [
  // Course 1 lessons
  {
    id: 1,
    courseId: 1,
    title: 'Introduction to IoT and ESP32',
    duration: '12:34',
    isPreview: true,
    videoUrl: 'sample-video-1',
    resources: ['slides.pdf', 'code-samples.zip'],
    section: 'Getting Started'
  },
  {
    id: 2,
    courseId: 1,
    title: 'Setting Up Development Environment',
    duration: '18:45',
    isPreview: true,
    videoUrl: 'sample-video-2',
    resources: ['setup-guide.pdf'],
    section: 'Getting Started'
  },
  {
    id: 3,
    courseId: 1,
    title: 'Your First ESP32 Program',
    duration: '25:12',
    isPreview: false,
    videoUrl: 'sample-video-3',
    resources: ['starter-code.zip'],
    section: 'Getting Started'
  },
  {
    id: 4,
    courseId: 1,
    title: 'Understanding GPIO Pins',
    duration: '22:30',
    isPreview: false,
    videoUrl: 'sample-video-4',
    resources: ['pin-diagram.pdf'],
    section: 'Hardware Basics'
  },
  {
    id: 5,
    courseId: 1,
    title: 'Working with Sensors',
    duration: '31:15',
    isPreview: false,
    videoUrl: 'sample-video-5',
    resources: ['sensor-library.zip', 'datasheets.pdf'],
    section: 'Hardware Basics'
  },
  // More lessons would be added here for complete course
];

export const reviews = [
  {
    id: 1,
    courseId: 1,
    userId: 1,
    userName: 'John Doe',
    userAvatar: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
    rating: 5,
    comment: 'Excellent course! Very well structured and easy to follow. The projects are practical and fun.',
    date: '2025-12-20',
    helpful: 245
  },
  {
    id: 2,
    courseId: 1,
    userId: 2,
    userName: 'Alice Smith',
    userAvatar: 'https://ui-avatars.com/api/?name=Alice+Smith&background=random',
    rating: 4,
    comment: 'Great content, but I wish there were more advanced projects included.',
    date: '2025-12-18',
    helpful: 142
  },
  {
    id: 3,
    courseId: 2,
    userId: 3,
    userName: 'Robert Brown',
    userAvatar: 'https://ui-avatars.com/api/?name=Robert+Brown&background=random',
    rating: 5,
    comment: 'Best React course I\'ve taken! Clear explanations and modern practices.',
    date: '2026-01-15',
    helpful: 389
  },
];

export default { categories, instructors, courses, lessons, reviews };
