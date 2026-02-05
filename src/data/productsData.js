export const productCategories = [
  { id: 1, name: 'Development Boards', slug: 'dev-boards' },
  { id: 2, name: 'Sensors & Modules', slug: 'sensors-modules' },
  { id: 3, name: 'Starter Kits', slug: 'starter-kits' },
  { id: 4, name: 'Components', slug: 'components' },
  { id: 5, name: 'Tools', slug: 'tools' },
];

export const products = [
  {
    id: 'prod-1',
    name: 'ESP32 Development Board',
    slug: 'esp32-dev-board',
    description: 'High-performance ESP32-WROOM-32 development board with WiFi and Bluetooth',
    fullDescription: 'This ESP32 development board features a powerful dual-core processor, built-in WiFi and Bluetooth, making it perfect for IoT projects. Includes USB-C connector, voltage regulator, and easy-to-use pin headers.',
    price: 12.99,
    originalPrice: 16.99,
    category: 'Development Boards',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop'
    ],
    inStock: true,
    stockCount: 250,
    rating: 4.8,
    reviewsCount: 1250,
    specifications: {
      'Processor': 'Xtensa dual-core 32-bit LX6',
      'Clock Speed': 'Up to 240 MHz',
      'Flash Memory': '4 MB',
      'SRAM': '520 KB',
      'WiFi': '802.11 b/g/n',
      'Bluetooth': 'v4.2 BR/EDR and BLE',
      'GPIO Pins': '34',
      'Operating Voltage': '3.3V',
      'Input Voltage': '5V via USB or 7-12V via VIN'
    },
    features: [
      'Dual-core processor for multitasking',
      'Built-in WiFi and Bluetooth',
      'Low power consumption',
      'Compatible with Arduino IDE',
      'USB-C for programming and power',
      '34 GPIO pins'
    ],
    tags: ['esp32', 'iot', 'wifi', 'bluetooth', 'microcontroller'],
    isFeatured: true,
    relatedProducts: ['prod-2', 'prod-3', 'prod-8']
  },
  {
    id: 'prod-2',
    name: 'Arduino Uno R3',
    slug: 'arduino-uno-r3',
    description: 'Classic Arduino Uno R3 board - perfect for beginners and professionals',
    fullDescription: 'The Arduino Uno R3 is the most popular Arduino board, featuring the ATmega328P microcontroller. It\'s easy to use and perfect for learning electronics and programming.',
    price: 24.99,
    originalPrice: 29.99,
    category: 'Development Boards',
    images: [
      'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=600&h=600&fit=crop'
    ],
    inStock: true,
    stockCount: 180,
    rating: 4.9,
    reviewsCount: 3420,
    specifications: {
      'Microcontroller': 'ATmega328P',
      'Operating Voltage': '5V',
      'Input Voltage': '7-12V',
      'Digital I/O Pins': '14',
      'PWM Pins': '6',
      'Analog Input Pins': '6',
      'Flash Memory': '32 KB',
      'SRAM': '2 KB',
      'Clock Speed': '16 MHz'
    },
    features: [
      'Easy to use for beginners',
      'Large community support',
      'Compatible with shields',
      'USB connection',
      'Open-source hardware',
      'Arduino IDE support'
    ],
    tags: ['arduino', 'uno', 'beginner', 'microcontroller'],
    isFeatured: true,
    relatedProducts: ['prod-1', 'prod-4', 'prod-9']
  },
  {
    id: 'prod-3',
    name: 'Raspberry Pi 4 Model B (4GB)',
    slug: 'raspberry-pi-4-4gb',
    description: 'Powerful single-board computer with 4GB RAM for advanced projects',
    fullDescription: 'Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range. It offers ground-breaking increases in processor speed, multimedia performance, memory, and connectivity.',
    price: 55.00,
    originalPrice: 65.00,
    category: 'Development Boards',
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop'
    ],
    inStock: true,
    stockCount: 95,
    rating: 4.9,
    reviewsCount: 2890,
    specifications: {
      'Processor': 'Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit',
      'Clock Speed': '1.5GHz',
      'RAM': '4GB LPDDR4',
      'Connectivity': 'WiFi 802.11ac, Bluetooth 5.0, Gigabit Ethernet',
      'USB Ports': '2x USB 3.0, 2x USB 2.0',
      'Display': '2x micro-HDMI ports (up to 4Kp60)',
      'GPIO': '40-pin header',
      'Storage': 'microSD card slot'
    },
    features: [
      'Quad-core 1.5GHz processor',
      '4K video playback',
      'Dual display support',
      'USB 3.0 ports',
      'Gigabit Ethernet',
      'Full Linux desktop experience'
    ],
    tags: ['raspberry-pi', 'single-board-computer', 'linux', 'iot'],
    isFeatured: true,
    relatedProducts: ['prod-1', 'prod-7', 'prod-10']
  },
  {
    id: 'prod-4',
    name: 'Ultimate IoT Starter Kit',
    slug: 'ultimate-iot-starter-kit',
    description: 'Complete kit with ESP32, sensors, and components for 20+ IoT projects',
    fullDescription: 'Everything you need to start building IoT projects! This comprehensive kit includes an ESP32 board, various sensors, LED modules, breadboard, jumper wires, and detailed project guide.',
    price: 79.99,
    originalPrice: 99.99,
    category: 'Starter Kits',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop'
    ],
    inStock: true,
    stockCount: 124,
    rating: 4.7,
    reviewsCount: 890,
    specifications: {
      'Included Components': '50+ items',
      'Development Board': 'ESP32-WROOM-32',
      'Sensors': 'DHT11, HC-SR04, PIR, LDR, Gas sensor',
      'Displays': 'OLED 0.96", LCD 16x2',
      'Additional': 'Breadboard, jumper wires, LEDs, resistors, buttons'
    },
    features: [
      'ESP32 development board',
      'Temperature & humidity sensor',
      'Ultrasonic distance sensor',
      'Motion sensor',
      'OLED display',
      'Project guide with 20+ projects',
      'All necessary components included'
    ],
    tags: ['kit', 'starter', 'iot', 'esp32', 'sensors', 'bundle'],
    isFeatured: true,
    relatedProducts: ['prod-1', 'prod-5', 'prod-6']
  },
  {
    id: 'prod-5',
    name: 'DHT22 Temperature & Humidity Sensor',
    slug: 'dht22-sensor',
    description: 'High-precision digital temperature and humidity sensor',
    fullDescription: 'The DHT22 is a basic, low-cost digital temperature and humidity sensor. It uses a capacitive humidity sensor and a thermistor to measure the surrounding air with calibrated digital signal output.',
    price: 8.99,
    originalPrice: 12.99,
    category: 'Sensors & Modules',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop'
    ],
    inStock: true,
    stockCount: 450,
    rating: 4.6,
    reviewsCount: 1120,
    specifications: {
      'Power Supply': '3.3V to 6V',
      'Temperature Range': '-40°C to 80°C',
      'Humidity Range': '0% to 100%',
      'Temperature Accuracy': '±0.5°C',
      'Humidity Accuracy': '±2%',
      'Sampling Rate': '0.5 Hz (once every 2 seconds)'
    },
    features: [
      'High precision measurements',
      'Long-term stability',
      'Fast response',
      'Low power consumption',
      'Excellent quality',
      'Easy to interface'
    ],
    tags: ['sensor', 'temperature', 'humidity', 'dht22'],
    isFeatured: false,
    relatedProducts: ['prod-1', 'prod-6', 'prod-8']
  },
  {
    id: 'prod-6',
    name: 'Ultrasonic Distance Sensor HC-SR04',
    slug: 'hc-sr04-ultrasonic',
    description: 'Precise ultrasonic ranging sensor for distance measurement',
    fullDescription: 'The HC-SR04 ultrasonic sensor uses sonar to determine distance to an object. It offers excellent non-contact range detection with high accuracy and stable readings.',
    price: 3.99,
    originalPrice: 5.99,
    category: 'Sensors & Modules',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop'
    ],
    inStock: true,
    stockCount: 680,
    rating: 4.5,
    reviewsCount: 2340,
    specifications: {
      'Power Supply': '5V DC',
      'Working Current': '15mA',
      'Working Frequency': '40Hz',
      'Range': '2cm to 400cm',
      'Measuring Angle': '15 degrees',
      'Trigger Input': '10µS TTL pulse',
      'Echo Output': 'TTL level signal'
    },
    features: [
      'Non-contact measurement',
      'High accuracy',
      'Stable performance',
      'Wide range detection',
      'Easy to use',
      'Low cost'
    ],
    tags: ['sensor', 'ultrasonic', 'distance', 'hc-sr04'],
    isFeatured: false,
    relatedProducts: ['prod-1', 'prod-2', 'prod-5']
  },
  {
    id: 'prod-7',
    name: 'OLED Display 0.96" I2C',
    slug: 'oled-096-i2c',
    description: '128x64 OLED display module with I2C interface',
    fullDescription: 'High-contrast OLED display module perfect for displaying sensor data and graphics. Features I2C interface for easy connection with only 2 pins.',
    price: 6.99,
    originalPrice: 9.99,
    category: 'Sensors & Modules',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop'
    ],
    inStock: true,
    stockCount: 320,
    rating: 4.7,
    reviewsCount: 780,
    specifications: {
      'Size': '0.96 inch',
      'Resolution': '128x64 pixels',
      'Interface': 'I2C',
      'Driver IC': 'SSD1306',
      'Viewing Angle': '>160°',
      'Operating Voltage': '3.3V to 5V',
      'Display Color': 'White'
    },
    features: [
      'High contrast display',
      'Wide viewing angle',
      'Low power consumption',
      'I2C interface (only 2 pins needed)',
      'Compatible with Arduino & ESP32',
      'Easy to program'
    ],
    tags: ['display', 'oled', 'i2c', 'screen'],
    isFeatured: false,
    relatedProducts: ['prod-1', 'prod-2', 'prod-3']
  },
  {
    id: 'prod-8',
    name: 'Breadboard 830 Points + Jumper Wires Kit',
    slug: 'breadboard-jumper-kit',
    description: 'Solderless breadboard with premium jumper wires set',
    fullDescription: 'High-quality 830 tie-points breadboard with matching jumper wire kit. Perfect for prototyping circuits without soldering. Includes color-coded jumper wires in various lengths.',
    price: 11.99,
    originalPrice: 15.99,
    category: 'Components',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop'
    ],
    inStock: true,
    stockCount: 520,
    rating: 4.8,
    reviewsCount: 1650,
    specifications: {
      'Tie Points': '830',
      'Size': '165mm x 55mm',
      'Power Rails': 'Yes (both sides)',
      'Jumper Wires': '65 pieces',
      'Wire Lengths': '3cm to 20cm',
      'Material': 'ABS plastic base'
    },
    features: [
      'No soldering required',
      'Reusable',
      'Color-coded rows',
      'Power rails on both sides',
      '65 premium jumper wires',
      'Multiple wire lengths'
    ],
    tags: ['breadboard', 'jumper-wires', 'prototyping', 'components'],
    isFeatured: false,
    relatedProducts: ['prod-1', 'prod-2', 'prod-4']
  },
  {
    id: 'prod-9',
    name: 'Servo Motor SG90 (5-pack)',
    slug: 'servo-motor-sg90-pack',
    description: 'Micro servo motors pack for robotics and automation',
    fullDescription: 'Pack of 5 high-quality SG90 micro servo motors. Perfect for robotics projects, camera gimbals, and automation. Includes mounting hardware and arms.',
    price: 14.99,
    originalPrice: 19.99,
    category: 'Components',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop'
    ],
    inStock: true,
    stockCount: 210,
    rating: 4.6,
    reviewsCount: 890,
    specifications: {
      'Operating Voltage': '4.8V to 6V',
      'Torque': '2.5kg/cm at 4.8V',
      'Speed': '0.1s/60° at 4.8V',
      'Rotation': '0° to 180°',
      'Weight': '9g',
      'Dimensions': '22mm x 11.5mm x 27mm'
    },
    features: [
      'Pack of 5 servos',
      '180-degree rotation',
      'Precise control',
      'Low noise',
      'Mounting hardware included',
      'Compatible with Arduino & Raspberry Pi'
    ],
    tags: ['servo', 'motor', 'robotics', 'actuator'],
    isFeatured: false,
    relatedProducts: ['prod-1', 'prod-2', 'prod-4']
  },
  {
    id: 'prod-10',
    name: 'Professional Multimeter',
    slug: 'professional-multimeter',
    description: 'Digital multimeter for electronics testing and troubleshooting',
    fullDescription: 'Professional-grade digital multimeter with auto-ranging, large LCD display, and multiple measurement functions. Essential tool for any electronics enthusiast or professional.',
    price: 34.99,
    originalPrice: 49.99,
    category: 'Tools',
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop'
    ],
    inStock: true,
    stockCount: 85,
    rating: 4.8,
    reviewsCount: 450,
    specifications: {
      'DC Voltage': '0.1mV to 1000V',
      'AC Voltage': '0.1V to 750V',
      'DC Current': '0.1µA to 10A',
      'Resistance': '0.1Ω to 40MΩ',
      'Display': 'Large LCD with backlight',
      'Auto-ranging': 'Yes'
    },
    features: [
      'Auto-ranging functionality',
      'Large backlit display',
      'Continuity tester',
      'Diode test',
      'Data hold function',
      'Safety rated CAT III 600V',
      'Test leads included'
    ],
    tags: ['multimeter', 'tool', 'testing', 'measurement'],
    isFeatured: false,
    relatedProducts: ['prod-1', 'prod-2', 'prod-3']
  }
];

export default { productCategories, products };
