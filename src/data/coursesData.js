import blogperson1 from "./../assets/images/blogperson1.webp";
import blogperson2 from "./../assets/images/blogperson2.webp";
import blogperson3 from "./../assets/images/blogperson3.webp";
import course1 from "./../assets/images/Courses1.webp";
import course2 from "./../assets/images/Courses2.webp";
import course3 from "./../assets/images/Courses3.webp";
import course4 from "./../assets/images/Courses4.webp";
import course5 from "./../assets/images/Courses5.webp";
import course6 from "./../assets/images/Courses6.webp";

const courses = [
  // ================= BACKEND =================

  {
    id: 1,
    title: "Python Django",
     tech: "backend",
    slug: "python-django",
    author: "Alex Morgan",
    price: "Free",
    duration: "12 Weeks",
    available: true,
    image: course1,
    avatar: blogperson1,

  curriculum: [
  {
    title: "Phase 1: Python Basics",
    content: [
      "Variables & Data Types",
      "Input/Output Handling",
      "Operators (Arithmetic, Logical, Comparison)",
      "Conditional Statements (if/else)",
      "Loops (for, while, nested loops)",
      "Functions (parameters, return, scope)",
      "Error Handling (try/except)",
      "File Handling (read/write files)",
      "OOP Concepts (Class, Object, Inheritance, Polymorphism)",
    ],
  },
  {
    title: "Phase 2: Django Basics",
    content: [
      "Introduction to Django & MVT Architecture",
      "Project Setup & Virtual Environment",
      "Apps Structure",
      "URL Routing",
      "Views (Function & Class Based)",
      "Templates Rendering",
      "Static & Media Files",
      "Django Admin Panel Customization",
    ],
  },
  {
    title: "Phase 3: Database",
    content: [
      "SQL Basics (Tables, Queries)",
      "Django ORM Introduction",
      "Models & Migrations",
      "CRUD Operations",
      "One-to-One Relationship",
      "One-to-Many Relationship",
      "Many-to-Many Relationship",
      "Forms & ModelForms",
      "Validation (Built-in & Custom)",
    ],
  },
  {
    title: "Phase 4: APIs",
    content: [
      "REST API Concepts",
      "Django REST Framework Setup",
      "Serializers",
      "APIView & ViewSets",
      "JWT Authentication",
      "Token Authentication",
      "CRUD APIs Development",
      "Pagination & Filtering",
      "Postman API Testing",
    ],
  },
  {
    title: "Phase 5: Advanced",
    content: [
      "Caching (Redis Basics)",
      "Query Optimization",
      "Middleware Concepts",
      "Signals in Django",
      "Security (CSRF, XSS, SQL Injection)",
      "Logging System",
      "Unit Testing (PyTest/Django Test)",
      "Background Tasks (Celery Basics)",
    ],
  },
  {
    title: "Phase 6: DevOps",
    content: [
      "Linux Basics for Developers",
      "Docker (Containers)",
      "Docker Compose",
      "CI/CD Pipelines (GitHub Actions)",
      "AWS EC2 Basics",
      "Environment Variables (.env)",
      "Nginx + Gunicorn Deployment",
      "Hosting Django Applications",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Blog System (Full Stack)",
      "E-commerce Backend (Cart, Orders)",
      "Job Portal System",
      "Chat Application (Basic WebSockets)",
      "Automation Scripts (Python Projects)",
      "Real-world API Projects",
      "Portfolio-Ready Applications",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Portfolio Website Development",
      "Resume Building (ATS Friendly)",
      "GitHub Profile Optimization",
      "Interview Preparation (Python + Django)",
      "System Design Basics",
      "Freelancing Platforms (Upwork, Fiverr)",
      "Mock Interviews Practice",
    ],
  },
],
  },

 {
  id: 2,
  title: "Node.js",
   tech: "backend",
  slug: "node-js",
  author: "Daniel Smith",
  price: "Free",
  duration: "14 Weeks",
  available: true,
  image: course2,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: JavaScript Fundamentals",
      content: [
        "Variables & Data Types",
        "Operators & Expressions",
        "Conditional Statements",
        "Loops (for, while)",
        "Functions & Arrow Functions",
        "Arrays & Objects",
        "Destructuring",
        "Spread & Rest Operators",
        "Callbacks",
        "Promises",
        "Async Await",
        "ES6 Modules",
        "Error Handling",
        "JSON Handling",
      ],
    },

    {
      title: "Phase 2: Node.js Basics",
      content: [
        "Introduction to Node.js",
        "Node.js Architecture",
        "Installing Node.js",
        "NPM & Package Management",
        "Node Modules",
        "Built-in Modules",
        "File System Module",
        "Path Module",
        "OS Module",
        "Events Module",
        "Streams & Buffers",
        "Environment Variables",
        "Creating HTTP Server",
      ],
    },

    {
      title: "Phase 3: Express.js Backend Development",
      content: [
        "Introduction to Express.js",
        "Express Server Setup",
        "Routing",
        "Dynamic Routes",
        "Middleware",
        "Custom Middleware",
        "Request & Response Handling",
        "Serving Static Files",
        "Error Handling Middleware",
        "MVC Architecture",
        "Project Structure",
        "REST API Development",
      ],
    },

    {
      title: "Phase 4: Database Management",
      content: [
        "Introduction to Databases",
        "MongoDB Basics",
        "MongoDB Atlas Setup",
        "Collections & Documents",
        "CRUD Operations",
        "Mongoose ODM",
        "Schemas & Models",
        "Validation",
        "Relationships & Population",
        "Indexing",
        "Aggregation Pipeline Basics",
      ],
    },

    {
      title: "Phase 5: Authentication & Security",
      content: [
        "Authentication Basics",
        "Authorization Concepts",
        "JWT Authentication",
        "Cookies & Sessions",
        "Password Hashing with Bcrypt",
        "Role-Based Access",
        "Protected Routes",
        "CORS Handling",
        "Helmet Security",
        "Rate Limiting",
        "Environment Security",
      ],
    },

    {
      title: "Phase 6: API Development",
      content: [
        "REST API Principles",
        "CRUD API Development",
        "API Status Codes",
        "API Validation",
        "Pagination",
        "Filtering & Sorting",
        "Search Functionality",
        "Postman Testing",
        "Thunder Client",
        "API Documentation",
      ],
    },

    {
      title: "Phase 7: Advanced Backend Concepts",
      content: [
        "Socket.io",
        "Real-time Chat Application",
        "File Upload with Multer",
        "Email Sending",
        "Caching Basics",
        "Redis Introduction",
        "Background Jobs",
        "Logging System",
        "Performance Optimization",
        "Scalable Architecture",
      ],
    },

    {
      title: "Phase 8: Testing",
      content: [
        "Unit Testing Basics",
        "Integration Testing",
        "Jest Introduction",
        "API Testing",
        "Debugging Techniques",
        "Error Tracking",
      ],
    },

    {
      title: "Phase 9: DevOps & Deployment",
      content: [
        "Linux Basics",
        "Git & GitHub",
        "Docker Basics",
        "Docker Containers",
        "CI/CD Pipeline",
        "GitHub Actions",
        "Nginx Basics",
        "AWS Deployment",
        "Render Deployment",
        "Railway Deployment",
        "Environment Variables Setup",
      ],
    },

    {
      title: "Phase 10: Projects",
      content: [
        "Authentication System",
        "Blog Backend API",
        "E-commerce Backend",
        "Chat Application Backend",
        "Task Manager API",
        "Social Media API",
        "File Upload System",
        "Portfolio Backend Project",
      ],
    },

    {
      title: "Phase 11: Career Preparation",
      content: [
        "Backend Developer Resume",
        "GitHub Profile Optimization",
        "Portfolio Projects",
        "Interview Questions",
        "System Design Basics",
        "Freelancing Basics",
        "Mock Interviews",
        "LinkedIn Optimization",
      ],
    },
  ],
},

 {
  id: 3,
  title: "Java Spring Boot",
   tech: "backend",
  slug: "java-spring-boot",
  author: "Michael Brown",
  price: "Free",
  duration: "16 Weeks",
  available: true,
  image: course3,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Core Java Fundamentals",
      content: [
        "Java Introduction",
        "Variables & Data Types",
        "Operators & Expressions",
        "Conditional Statements",
        "Loops",
        "Functions & Methods",
        "Arrays & Strings",
        "OOP Concepts",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "Encapsulation",
        "Exception Handling",
      ],
    },

    {
      title: "Phase 2: Advanced Java",
      content: [
        "Collections Framework",
        "ArrayList & LinkedList",
        "HashMap & HashSet",
        "Generics",
        "File Handling",
        "Multithreading",
        "Synchronization",
        "Streams API",
        "Lambda Expressions",
        "Date & Time API",
        "JDBC Introduction",
        "MySQL Integration",
      ],
    },

    {
      title: "Phase 3: Database Management",
      content: [
        "SQL Basics",
        "Database Design",
        "CRUD Operations",
        "Joins & Relationships",
        "Normalization",
        "Indexes",
        "Transactions",
        "Stored Procedures",
        "JDBC CRUD Operations",
      ],
    },

    {
      title: "Phase 4: Java Web Development",
      content: [
        "Servlet Introduction",
        "JSP Basics",
        "MVC Architecture",
        "Session Management",
        "Cookies Handling",
        "Authentication Basics",
        "Authorization",
        "Form Handling",
        "Web Application Structure",
      ],
    },

    {
      title: "Phase 5: Spring Framework Basics",
      content: [
        "Introduction to Spring",
        "Spring Architecture",
        "Dependency Injection",
        "Inversion of Control",
        "Spring Beans",
        "Bean Lifecycle",
        "Spring Configuration",
        "Spring MVC",
      ],
    },

    {
      title: "Phase 6: Spring Boot Development",
      content: [
        "Introduction to Spring Boot",
        "Spring Boot Project Setup",
        "REST API Development",
        "CRUD APIs",
        "Spring Boot Annotations",
        "Request Handling",
        "ResponseEntity",
        "Validation",
        "Exception Handling",
        "Spring Data JPA",
        "Hibernate ORM",
      ],
    },

    {
      title: "Phase 7: Authentication & Security",
      content: [
        "Spring Security",
        "JWT Authentication",
        "Role-Based Authentication",
        "Password Encryption",
        "OAuth Basics",
        "Protected Routes",
        "CORS Handling",
        "Security Best Practices",
      ],
    },

    {
      title: "Phase 8: Microservices",
      content: [
        "Microservices Architecture",
        "Service Discovery",
        "API Gateway",
        "Service Communication",
        "Load Balancing",
        "Configuration Server",
        "Circuit Breaker",
        "Logging & Monitoring",
      ],
    },

    {
      title: "Phase 9: Testing",
      content: [
        "JUnit Basics",
        "Mockito",
        "Unit Testing",
        "Integration Testing",
        "API Testing",
        "Debugging Techniques",
      ],
    },

    {
      title: "Phase 10: DevOps & Deployment",
      content: [
        "Git & GitHub",
        "Linux Basics",
        "Docker Containers",
        "Docker Compose",
        "CI/CD Pipelines",
        "GitHub Actions",
        "AWS Basics",
        "Cloud Deployment",
        "Nginx Basics",
        "Environment Variables",
      ],
    },

    {
      title: "Phase 11: Projects",
      content: [
        "E-commerce Backend",
        "Banking System",
        "Hospital Management System",
        "Employee Management System",
        "Authentication System",
        "Microservices Project",
        "Real-world REST APIs",
        "Portfolio Projects",
      ],
    },

    {
      title: "Phase 12: Career Preparation",
      content: [
        "Java Resume Building",
        "GitHub Profile Optimization",
        "Portfolio Development",
        "Interview Questions",
        "DSA Basics",
        "System Design Basics",
        "Mock Interviews",
        "LinkedIn Optimization",
      ],
    },
  ],
},

 {
  id: 4,
  title: "PHP Laravel",
   tech: "backend",
  slug: "php-laravel",
  author: "Sophia Carter",
  price: "Free",
  duration: "14 Weeks",
  available: true,
  image: course4,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: PHP Fundamentals",
      content: [
        "Introduction to PHP",
        "PHP Installation & Setup",
        "Syntax & Comments",
        "Variables & Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Arrays",
        "Superglobals",
        "Forms Handling",
        "Sessions & Cookies",
        "Error Handling",
      ],
    },

    {
      title: "Phase 2: Advanced PHP",
      content: [
        "OOP Concepts in PHP",
        "Classes & Objects",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "Interfaces & Traits",
        "File Handling",
        "PHP with MySQL",
        "Prepared Statements",
        "Composer Basics",
      ],
    },

    {
      title: "Phase 3: Database Management",
      content: [
        "SQL Basics",
        "MySQL Database",
        "CRUD Operations",
        "Database Relationships",
        "Joins",
        "Indexes",
        "Transactions",
        "Database Optimization",
      ],
    },

    {
      title: "Phase 4: Laravel Basics",
      content: [
        "Introduction to Laravel",
        "Laravel Installation",
        "MVC Architecture",
        "Project Structure",
        "Routing",
        "Controllers",
        "Views & Blade Templates",
        "Middleware",
        "Environment Variables",
      ],
    },

    {
      title: "Phase 5: Laravel Database & CRUD",
      content: [
        "Migrations",
        "Seeders",
        "Eloquent ORM",
        "Models",
        "Relationships",
        "CRUD Operations",
        "Form Validation",
        "Pagination",
        "Search Functionality",
      ],
    },

    {
      title: "Phase 6: Authentication & Security",
      content: [
        "Laravel Authentication",
        "Authorization",
        "JWT Authentication",
        "Password Hashing",
        "Role-Based Access",
        "Session Management",
        "CORS Handling",
        "Security Best Practices",
      ],
    },

    {
      title: "Phase 7: API Development",
      content: [
        "REST API Concepts",
        "Laravel API Routes",
        "API Controllers",
        "CRUD APIs",
        "API Resources",
        "Postman Testing",
        "API Authentication",
        "Third-party API Integration",
      ],
    },

    {
      title: "Phase 8: Advanced Laravel",
      content: [
        "Caching",
        "Queue Jobs",
        "Events & Listeners",
        "File Upload",
        "Mail System",
        "Notifications",
        "Performance Optimization",
        "Logging System",
      ],
    },

    {
      title: "Phase 9: DevOps & Deployment",
      content: [
        "Git & GitHub",
        "Linux Basics",
        "Hosting Laravel Applications",
        "cPanel Deployment",
        "Docker Basics",
        "CI/CD Pipelines",
        "Environment Variables",
        "Cloud Hosting Basics",
      ],
    },

    {
      title: "Phase 10: Projects",
      content: [
        "Admin Dashboard",
        "E-commerce Website",
        "Blog Management System",
        "Authentication System",
        "Payment Gateway Integration",
        "Inventory Management System",
        "REST API Project",
        "Portfolio Projects",
      ],
    },

    {
      title: "Phase 11: Career Preparation",
      content: [
        "Portfolio Development",
        "GitHub Profile Optimization",
        "Laravel Resume Building",
        "Interview Questions",
        "Freelancing Basics",
        "Client Communication",
        "Mock Interviews",
        "LinkedIn Optimization",
      ],
    },
  ],
},

  {
  id: 5,
  title: ".NET Development",
   tech: "backend",
  slug: "net-development",
  author: "Emma Wilson",
  price: "Free",
  duration: "16 Weeks",
  available: true,
  image: course5,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: C# Fundamentals",
      content: [
        "Introduction to C#",
        "Variables & Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions & Methods",
        "Arrays & Strings",
        "OOP Concepts",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "Exception Handling",
      ],
    },

    {
      title: "Phase 2: Advanced C#",
      content: [
        "Collections",
        "Generics",
        "Delegates",
        "Events",
        "LINQ",
        "File Handling",
        "Multithreading",
        "Async Await",
        "Date & Time Handling",
        "Error Logging",
      ],
    },

    {
      title: "Phase 3: Database Management",
      content: [
        "SQL Basics",
        "MS SQL Server",
        "CRUD Operations",
        "Database Relationships",
        "Joins",
        "Indexes",
        "Stored Procedures",
        "Transactions",
        "Database Design",
      ],
    },

    {
      title: "Phase 4: ASP.NET Core Basics",
      content: [
        "Introduction to ASP.NET Core",
        "ASP.NET MVC",
        "Project Structure",
        "Routing",
        "Controllers & Views",
        "Razor Pages",
        "Forms Handling",
        "Model Binding",
        "Middleware",
        "Environment Variables",
      ],
    },

    {
      title: "Phase 5: Entity Framework",
      content: [
        "Introduction to Entity Framework",
        "DbContext",
        "Migrations",
        "LINQ Queries",
        "CRUD Operations",
        "Relationships",
        "Validation",
        "Repository Pattern",
      ],
    },

    {
      title: "Phase 6: Web API Development",
      content: [
        "REST API Concepts",
        "ASP.NET Web APIs",
        "CRUD APIs",
        "API Routing",
        "Request & Response Handling",
        "Postman Testing",
        "Swagger Documentation",
        "Third-party API Integration",
      ],
    },

    {
      title: "Phase 7: Authentication & Security",
      content: [
        "Authentication Basics",
        "Authorization",
        "JWT Authentication",
        "Role-Based Access",
        "Identity Framework",
        "Password Hashing",
        "CORS Handling",
        "Security Best Practices",
      ],
    },

    {
      title: "Phase 8: Advanced .NET Concepts",
      content: [
        "Clean Architecture",
        "Dependency Injection",
        "Caching",
        "Logging",
        "Background Services",
        "Performance Optimization",
        "Error Handling",
        "Scalable Application Design",
      ],
    },

    {
      title: "Phase 9: Testing",
      content: [
        "Unit Testing",
        "xUnit Basics",
        "Integration Testing",
        "Mocking",
        "API Testing",
        "Debugging Techniques",
      ],
    },

    {
      title: "Phase 10: Microservices",
      content: [
        "Microservices Architecture",
        "API Gateway",
        "Service Communication",
        "Docker Containers",
        "Message Queues",
        "Monitoring & Logging",
        "Security in Microservices",
      ],
    },

    {
      title: "Phase 11: Cloud & DevOps",
      content: [
        "Azure Basics",
        "Cloud Deployment",
        "Git & GitHub",
        "Docker Basics",
        "CI/CD Pipelines",
        "GitHub Actions",
        "Linux Basics",
        "Environment Variables",
      ],
    },

    {
      title: "Phase 12: Projects",
      content: [
        "Enterprise Management System",
        "E-commerce Backend",
        "Dashboard Application",
        "Authentication System",
        "Inventory Management System",
        "Microservices Project",
        "REST API Project",
        "Portfolio Projects",
      ],
    },

    {
      title: "Phase 13: Career Preparation",
      content: [
        "Resume Building",
        "GitHub Profile Optimization",
        "Portfolio Development",
        "Interview Questions",
        "System Design Basics",
        "Freelancing Basics",
        "Mock Interviews",
        "LinkedIn Optimization",
      ],
    },
  ],
},

  // ================= FRONTEND =================
 {
  id: 6,
  title: "React.js",
  tech: "frontend",
  slug: "react-js",
  author: "Olivia Brown",
  price: "Free",
  duration: "14 Weeks",
  available: true,
  image: course6,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Web Development Fundamentals",
      content: [
        "HTML Basics",
        "CSS Basics",
        "Responsive Design",
        "Flexbox & Grid",
        "JavaScript Fundamentals",
        "ES6+ Features",
        "DOM Manipulation",
        "Functions & Events",
        "Async Await",
        "Fetch API",
      ],
    },

    {
      title: "Phase 2: React Fundamentals",
      content: [
        "Introduction to React",
        "React Project Setup",
        "JSX",
        "Functional Components",
        "Props",
        "State Management",
        "Event Handling",
        "Conditional Rendering",
        "Lists & Keys",
        "Component Reusability",
      ],
    },

    {
      title: "Phase 3: React Hooks",
      content: [
        "Hooks Introduction",
        "useState",
        "useEffect",
        "useRef",
        "useContext",
        "Custom Hooks",
        "Lifecycle Understanding",
        "Forms Handling",
        "Controlled Components",
      ],
    },

    {
      title: "Phase 4: Routing & API Integration",
      content: [
        "React Router",
        "Dynamic Routes",
        "Nested Routes",
        "Navigation",
        "REST API Integration",
        "Axios",
        "Fetch API",
        "Loading States",
        "Error Handling",
      ],
    },

    {
      title: "Phase 5: State Management",
      content: [
        "Context API",
        "Global State Management",
        "Redux Basics",
        "Redux Toolkit",
        "Slices & Store",
        "Async Thunks",
        "Authentication State",
      ],
    },

    {
      title: "Phase 6: Authentication & Firebase",
      content: [
        "Firebase Setup",
        "Firebase Authentication",
        "Login & Signup System",
        "Protected Routes",
        "Google Authentication",
        "JWT Basics",
        "User Session Management",
      ],
    },

    {
      title: "Phase 7: UI Development",
      content: [
        "Tailwind CSS",
        "Responsive UI Design",
        "Dark Mode",
        "Reusable Components",
        "Dashboard UI",
        "Animations with Framer Motion",
        "Modern UI Design",
      ],
    },

    {
      title: "Phase 8: Advanced React",
      content: [
        "Performance Optimization",
        "Lazy Loading",
        "Code Splitting",
        "Memoization",
        "React.memo",
        "useMemo",
        "useCallback",
        "Error Boundaries",
      ],
    },

    {
      title: "Phase 9: Testing & Debugging",
      content: [
        "Debugging Techniques",
        "React DevTools",
        "Unit Testing Basics",
        "Jest Introduction",
        "React Testing Library",
        "Error Tracking",
      ],
    },

    {
      title: "Phase 10: Modern React Tools",
      content: [
        "Vite",
        "NPM & Yarn",
        "Webpack Basics",
        "Babel",
        "ESLint",
        "Prettier",
        "Environment Variables",
      ],
    },

    {
      title: "Phase 11: Next.js Basics",
      content: [
        "Introduction to Next.js",
        "File-based Routing",
        "SSR & SSG",
        "SEO Basics",
        "API Routes",
        "Image Optimization",
        "Deployment with Vercel",
      ],
    },

    {
      title: "Phase 12: Projects",
      content: [
        "Portfolio Website",
        "Admin Dashboard",
        "E-commerce UI",
        "Blog Application",
        "Authentication System",
        "Task Manager",
        "Real Client Projects",
        "Portfolio-ready Applications",
      ],
    },

    {
      title: "Phase 13: Career Preparation",
      content: [
        "Resume Building",
        "GitHub Profile Optimization",
        "Portfolio Development",
        "Interview Questions",
        "Freelancing Basics",
        "Client Communication",
        "Deployment",
        "LinkedIn Optimization",
      ],
    },
  ],
},

  {
  id: 7,
  title: "Angular",
  tech: "frontend",
  slug: "angular",
  author: "Alex Morgan",
  price: "Free",
  duration: "15 Weeks",
  available: true,
  image: course1,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Web Development Fundamentals",
      content: [
        "HTML Basics",
        "CSS Basics",
        "Responsive Design",
        "Flexbox & Grid",
        "JavaScript Fundamentals",
        "DOM Manipulation",
        "ES6+ Features",
        "Async Await",
        "Fetch API",
      ],
    },

    {
      title: "Phase 2: TypeScript Fundamentals",
      content: [
        "Introduction to TypeScript",
        "Variables & Data Types",
        "Functions",
        "Interfaces",
        "Classes & Objects",
        "OOP Concepts",
        "Generics",
        "Modules",
        "Error Handling",
      ],
    },

    {
      title: "Phase 3: Angular Fundamentals",
      content: [
        "Introduction to Angular",
        "Angular CLI Setup",
        "Project Structure",
        "Components",
        "Templates",
        "Data Binding",
        "Event Binding",
        "Property Binding",
        "Two-way Binding",
      ],
    },

    {
      title: "Phase 4: Core Angular Concepts",
      content: [
        "Directives",
        "Structural Directives",
        "Attribute Directives",
        "Pipes",
        "Custom Pipes",
        "Lifecycle Hooks",
        "Component Communication",
        "Input & Output Decorators",
      ],
    },

    {
      title: "Phase 5: Forms & Validation",
      content: [
        "Template-driven Forms",
        "Reactive Forms",
        "Form Validation",
        "Custom Validators",
        "Dynamic Forms",
        "Error Handling in Forms",
      ],
    },

    {
      title: "Phase 6: Routing & Navigation",
      content: [
        "Angular Routing",
        "Navigation",
        "Nested Routes",
        "Dynamic Routes",
        "Route Parameters",
        "Lazy Loading",
        "Route Guards",
      ],
    },

    {
      title: "Phase 7: Services & Dependency Injection",
      content: [
        "Services",
        "Dependency Injection",
        "Singleton Services",
        "HTTP Client",
        "API Calls",
        "REST API Integration",
        "Error Handling",
      ],
    },

    {
      title: "Phase 8: Authentication & Security",
      content: [
        "Authentication Basics",
        "JWT Authentication",
        "Login & Signup System",
        "Protected Routes",
        "Interceptors",
        "Authorization",
        "Session Management",
      ],
    },

    {
      title: "Phase 9: State Management",
      content: [
        "RxJS Basics",
        "Observables",
        "Subjects",
        "Async Pipe",
        "NgRx Introduction",
        "Actions & Reducers",
        "State Handling",
      ],
    },

    {
      title: "Phase 10: Advanced Angular",
      content: [
        "Performance Optimization",
        "Change Detection",
        "Custom Directives",
        "Reusable Components",
        "Animations",
        "Environment Variables",
        "Angular Best Practices",
      ],
    },

    {
      title: "Phase 11: Testing & Debugging",
      content: [
        "Debugging Techniques",
        "Unit Testing",
        "Jasmine Basics",
        "Karma Testing",
        "Component Testing",
        "Error Tracking",
      ],
    },

    {
      title: "Phase 12: Modern Tools & Deployment",
      content: [
        "NPM & Yarn",
        "Webpack Basics",
        "ESLint",
        "Prettier",
        "Build Process",
        "Deployment",
        "Vercel",
        "Netlify",
      ],
    },

    {
      title: "Phase 13: Projects",
      content: [
        "Admin Dashboard",
        "E-commerce Frontend",
        "Task Management App",
        "Authentication System",
        "Blog Application",
        "Portfolio Website",
        "Real Client Projects",
        "Team Collaboration",
      ],
    },

    {
      title: "Phase 14: Career Preparation",
      content: [
        "Resume Building",
        "GitHub Profile Optimization",
        "Portfolio Development",
        "Interview Questions",
        "Freelancing Basics",
        "Deployment",
        "Mock Interviews",
        "LinkedIn Optimization",
      ],
    },
  ],
},

  {
  id: 8,
  title: "JavaScript",
  tech: "frontend",
  slug: "javascript",
  author: "Sophia Carter",
  price: "Free",
  duration: "12 Weeks",
  available: true,
  image: course2,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: Web Development Basics",
      content: [
        "Introduction to Web Development",
        "HTML Basics",
        "CSS Basics",
        "Responsive Design",
        "How JavaScript Works",
        "Browser Basics",
      ],
    },

    {
      title: "Phase 2: JavaScript Fundamentals",
      content: [
        "Variables",
        "Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Scope",
        "Type Conversion",
        "Template Literals",
      ],
    },

    {
      title: "Phase 3: Core JavaScript Concepts",
      content: [
        "Arrays",
        "Array Methods",
        "Objects",
        "Object Methods",
        "Nested Objects",
        "Functions & Parameters",
        "Arrow Functions",
        "Callbacks",
      ],
    },

    {
      title: "Phase 4: DOM & Browser APIs",
      content: [
        "DOM Manipulation",
        "Selectors",
        "Events",
        "Event Listeners",
        "Forms Handling",
        "Local Storage",
        "Session Storage",
        "Timers",
      ],
    },

    {
      title: "Phase 5: ES6+ Features",
      content: [
        "let & const",
        "Destructuring",
        "Spread Operator",
        "Rest Operator",
        "Default Parameters",
        "Modules",
        "Optional Chaining",
        "Nullish Coalescing",
      ],
    },

    {
      title: "Phase 6: Asynchronous JavaScript",
      content: [
        "Synchronous vs Asynchronous",
        "Callbacks",
        "Promises",
        "Promise Chaining",
        "Async Await",
        "Fetch API",
        "API Handling",
        "Error Handling",
      ],
    },

    {
      title: "Phase 7: Advanced JavaScript",
      content: [
        "Closures",
        "Hoisting",
        "Execution Context",
        "Event Loop",
        "Prototype",
        "Prototype Inheritance",
        "this Keyword",
        "Memory Management",
      ],
    },

    {
      title: "Phase 8: Modern JavaScript Tools",
      content: [
        "NPM Basics",
        "Package Management",
        "Vite Basics",
        "Webpack Basics",
        "Babel",
        "ESLint",
        "Prettier",
        "Environment Variables",
      ],
    },

    {
      title: "Phase 9: API & JSON",
      content: [
        "REST API Basics",
        "JSON Handling",
        "CRUD Operations",
        "Axios",
        "Authentication Basics",
        "JWT Introduction",
        "API Testing",
      ],
    },

    {
      title: "Phase 10: Projects",
      content: [
        "To-Do App",
        "Weather Application",
        "Quiz Application",
        "Calculator App",
        "API Projects",
        "Mini Games",
        "Portfolio Website",
        "Authentication Project",
      ],
    },

    {
      title: "Phase 11: Career Preparation",
      content: [
        "JavaScript Interview Questions",
        "Problem Solving",
        "DSA Basics",
        "Git & GitHub",
        "Portfolio Development",
        "Resume Building",
        "Mock Interviews",
        "LinkedIn Optimization",
      ],
    },
  ],
},

  {
  id: 9,
  title: "Vue.js",
  slug: "vue-js",
  tech: "frontend",
  author: "Daniel Smith",
  price: "Free",
  duration: "13 Weeks",
  available: true,
  image: course3,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Web Development Fundamentals",
      content: [
        "HTML Basics",
        "CSS Basics",
        "Responsive Design",
        "Flexbox & Grid",
        "JavaScript Fundamentals",
        "DOM Manipulation",
        "ES6+ Features",
        "Async Await",
      ],
    },

    {
      title: "Phase 2: Vue.js Fundamentals",
      content: [
        "Introduction to Vue.js",
        "Vue Project Setup",
        "Vue CLI & Vite",
        "Templates",
        "Data Binding",
        "Directives",
        "Components",
        "Props",
        "Events",
        "Conditional Rendering",
      ],
    },

    {
      title: "Phase 3: Core Vue Concepts",
      content: [
        "Computed Properties",
        "Watchers",
        "Methods",
        "Lifecycle Hooks",
        "Component Communication",
        "Slots",
        "Reusable Components",
        "Event Handling",
      ],
    },

    {
      title: "Phase 4: Routing & Forms",
      content: [
        "Vue Router",
        "Navigation",
        "Dynamic Routes",
        "Nested Routes",
        "Forms Handling",
        "Validation",
        "Composition API",
        "Reactive State",
      ],
    },

    {
      title: "Phase 5: API Integration & Authentication",
      content: [
        "REST API Integration",
        "Axios",
        "Fetch API",
        "CRUD Operations",
        "Authentication Basics",
        "JWT Authentication",
        "Protected Routes",
        "Error Handling",
      ],
    },

    {
      title: "Phase 6: State Management",
      content: [
        "Pinia Basics",
        "Global State Management",
        "Store Actions",
        "State Handling",
        "Authentication State",
        "Persistent State",
      ],
    },

    {
      title: "Phase 7: UI Development",
      content: [
        "Tailwind CSS",
        "Responsive UI",
        "Dark Mode",
        "Dashboard UI",
        "Animations",
        "Reusable UI Components",
        "Modern Design Principles",
      ],
    },

    {
      title: "Phase 8: Advanced Vue.js",
      content: [
        "Performance Optimization",
        "Lazy Loading",
        "Code Splitting",
        "Project Structure",
        "Vue Best Practices",
        "Reusable Architecture",
        "Environment Variables",
      ],
    },

    {
      title: "Phase 9: Testing & Debugging",
      content: [
        "Debugging Techniques",
        "Vue DevTools",
        "Unit Testing Basics",
        "Component Testing",
        "API Testing",
        "Error Tracking",
      ],
    },

    {
      title: "Phase 10: Nuxt.js & Modern Tools",
      content: [
        "Introduction to Nuxt.js",
        "SSR Basics",
        "SEO Optimization",
        "Static Site Generation",
        "Deployment",
        "NPM & Yarn",
        "Build Process",
      ],
    },

    {
      title: "Phase 11: Projects",
      content: [
        "Admin Dashboard",
        "E-commerce Frontend",
        "Task Management App",
        "Authentication System",
        "Portfolio Website",
        "Real Client Projects",
        "Team Collaboration",
        "Portfolio-ready Applications",
      ],
    },

    {
      title: "Phase 12: Career Preparation",
      content: [
        "Resume Building",
        "GitHub Profile Optimization",
        "Portfolio Development",
        "Interview Questions",
        "Freelancing Basics",
        "Mock Interviews",
        "Deployment",
        "LinkedIn Optimization",
      ],
    },
  ],
},

// newly -added--->id 26 and 27
{
  id: 10,
  title: "HTML",
  tech: "frontend",
  slug: "html",
  author: "Olivia Brown",
  price: "Free",
  duration: "6 Weeks",
  available: true,
  image: course3,
  avatar: blogperson3,

  curriculum: [

    {
      title: "Phase 1: Introduction to Web Development",
      content: [
        "How Websites Work",
        "Frontend vs Backend",
        "What is HTML",
        "Browser Basics",
        "VS Code Setup",
        "Installing Extensions",
        "Creating First HTML File",
        "Understanding File Structure",
      ],
    },

    {
      title: "Phase 2: HTML Fundamentals",
      content: [
        "HTML Document Structure",
        "DOCTYPE",
        "html, head & body Tags",
        "Headings",
        "Paragraphs",
        "Line Breaks",
        "Horizontal Rules",
        "Comments",
        "Text Formatting",
        "Strong & Em Tags",
      ],
    },

    {
      title: "Phase 3: Links & Navigation",
      content: [
        "Anchor Tags",
        "Internal Links",
        "External Links",
        "Opening Links in New Tab",
        "Bookmark Links",
        "Navigation Menus",
        "Clickable Images",
      ],
    },

    {
      title: "Phase 4: Images & Multimedia",
      content: [
        "Image Tags",
        "Image Paths",
        "Alt Attributes",
        "Responsive Images",
        "Audio Tag",
        "Video Tag",
        "Iframe Embedding",
        "YouTube Embedding",
      ],
    },

    {
      title: "Phase 5: Lists & Tables",
      content: [
        "Ordered Lists",
        "Unordered Lists",
        "Nested Lists",
        "Description Lists",
        "Table Structure",
        "Rows & Columns",
        "Table Head & Body",
        "Colspan & Rowspan",
      ],
    },

    {
      title: "Phase 6: HTML Forms",
      content: [
        "Form Basics",
        "Input Types",
        "Text Fields",
        "Email & Password Inputs",
        "Radio Buttons",
        "Checkboxes",
        "Dropdown Menus",
        "Textarea",
        "Buttons",
        "Labels",
        "Placeholder",
        "Required Fields",
        "Form Validation",
      ],
    },

    {
      title: "Phase 7: Semantic HTML",
      content: [
        "Semantic Tags",
        "Header",
        "Footer",
        "Section",
        "Article",
        "Aside",
        "Main Tag",
        "Accessibility Basics",
        "SEO-Friendly HTML",
      ],
    },

    {
      title: "Phase 8: HTML Best Practices",
      content: [
        "Clean Code Structure",
        "Indentation",
        "Naming Conventions",
        "Folder Organization",
        "Optimizing Images",
        "Reusable Components",
      ],
    },

    {
      title: "Phase 9: Real World Projects",
      content: [
        "Portfolio Website",
        "Restaurant Website",
        "Blog Layout",
        "Resume Website",
        "Product Landing Page",
        "Multi-page Website",
      ],
    },

    {
      title: "Phase 10: Deployment & Career",
      content: [
        "GitHub Basics",
        "Hosting with Netlify",
        "Hosting with Vercel",
        "Portfolio Optimization",
        "HTML Interview Questions",
      ],
    },
  ],
},
{
  id: 11,
  title: "CSS",
  tech: "frontend",
  slug: "css",
  author: "Olivia Brown",
  price: "Free",
  duration: "8 Weeks",
  available: true,
  image: course1,
  avatar: blogperson3,

  curriculum: [

    {
      title: "Phase 1: CSS Fundamentals",
      content: [
        "Introduction to CSS",
        "Inline CSS",
        "Internal CSS",
        "External CSS",
        "Selectors",
        "Class & ID",
        "Colors",
        "Units",
        "Comments",
      ],
    },

    {
      title: "Phase 2: Typography & Text Styling",
      content: [
        "Fonts",
        "Google Fonts",
        "Font Weight",
        "Text Alignment",
        "Line Height",
        "Letter Spacing",
        "Text Shadows",
        "Text Decoration",
      ],
    },

    {
      title: "Phase 3: CSS Box Model",
      content: [
        "Margin",
        "Padding",
        "Border",
        "Border Radius",
        "Width & Height",
        "Box Sizing",
        "Overflow",
        "Display Property",
      ],
    },

    {
      title: "Phase 4: Backgrounds & Effects",
      content: [
        "Background Colors",
        "Background Images",
        "Gradients",
        "Opacity",
        "Shadows",
        "Blur Effects",
        "Glassmorphism",
      ],
    },

    {
      title: "Phase 5: Layout Design",
      content: [
        "Positioning",
        "Relative Position",
        "Absolute Position",
        "Fixed Position",
        "Sticky Position",
        "Z-index",
        "Float",
        "Clear",
      ],
    },

    {
      title: "Phase 6: Flexbox",
      content: [
        "Flex Container",
        "Flex Direction",
        "Justify Content",
        "Align Items",
        "Gap",
        "Flex Wrap",
        "Flex Grow",
        "Responsive Flexbox Layouts",
      ],
    },

    {
      title: "Phase 7: CSS Grid",
      content: [
        "Grid Container",
        "Grid Columns",
        "Grid Rows",
        "Grid Gap",
        "Grid Areas",
        "Auto Fit & Auto Fill",
        "Responsive Grids",
      ],
    },

    {
      title: "Phase 8: Responsive Design",
      content: [
        "Media Queries",
        "Mobile First Design",
        "Tablet Layout",
        "Desktop Layout",
        "Responsive Typography",
        "Responsive Images",
        "Viewport Units",
      ],
    },

    {
      title: "Phase 9: Advanced CSS",
      content: [
        "Transitions",
        "Transforms",
        "Animations",
        "Keyframes",
        "Pseudo Classes",
        "Pseudo Elements",
        "CSS Variables",
        "Custom Properties",
      ],
    },

    {
      title: "Phase 10: Modern UI Development",
      content: [
        "Dark Mode",
        "Modern Cards",
        "Gradient UI",
        "Hover Effects",
        "Animated Buttons",
        "Loading Animations",
        "Premium UI Design",
      ],
    },

    {
      title: "Phase 11: Tailwind CSS Basics",
      content: [
        "Tailwind Installation",
        "Utility Classes",
        "Spacing Utilities",
        "Responsive Utilities",
        "Flex & Grid in Tailwind",
        "Dark Mode in Tailwind",
      ],
    },

    {
      title: "Phase 12: Real World Projects",
      content: [
        "Modern Landing Page",
        "Admin Dashboard",
        "Portfolio Website",
        "Pricing Section",
        "Responsive Navbar",
        "E-commerce UI",
      ],
    },

    {
      title: "Phase 13: Deployment & Career",
      content: [
        "GitHub",
        "Netlify Deployment",
        "Vercel Deployment",
        "CSS Interview Questions",
        "Portfolio Improvement",
      ],
    },
  ],
},

  // ================= MOBILE =================

 {
  id: 12,
  title: "React Native",
  tech: "mobile-development",
  slug: "react-native",
  author: "Emma Wilson",
  price: "Free",
  duration: "16 Weeks",
  available: true,
  image: course4,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: JavaScript & React Fundamentals",
      content: [
        "JavaScript Fundamentals",
        "ES6+ Features",
        "Functions & Arrays",
        "Objects & Destructuring",
        "Async Await",
        "Fetch API",
        "React Basics",
        "JSX",
        "Components",
        "Props & State",
        "Hooks Introduction",
      ],
    },

    {
      title: "Phase 2: React Native Basics",
      content: [
        "Introduction to React Native",
        "React Native Environment Setup",
        "Expo Setup",
        "Core Components",
        "View & Text",
        "ScrollView & FlatList",
        "Image Component",
        "Touchable Components",
        "SafeAreaView",
      ],
    },

    {
      title: "Phase 3: UI Development",
      content: [
        "Styling in React Native",
        "Flexbox",
        "Layouts",
        "Responsive Design",
        "Dark Mode",
        "Custom Components",
        "Reusable UI",
        "Modern Mobile UI Design",
      ],
    },

    {
      title: "Phase 4: Navigation",
      content: [
        "React Navigation",
        "Stack Navigation",
        "Bottom Tab Navigation",
        "Drawer Navigation",
        "Nested Navigation",
        "Navigation Params",
        "Deep Linking",
      ],
    },

    {
      title: "Phase 5: Forms & Authentication",
      content: [
        "Forms Handling",
        "Input Validation",
        "Authentication Basics",
        "JWT Authentication",
        "Firebase Authentication",
        "Login & Signup Screens",
        "Protected Screens",
      ],
    },

    {
      title: "Phase 6: API Integration & Storage",
      content: [
        "REST API Integration",
        "Axios",
        "Fetch API",
        "CRUD Operations",
        "AsyncStorage",
        "Secure Storage",
        "SQLite Basics",
        "Offline Data Handling",
      ],
    },

    {
      title: "Phase 7: Native Device Features",
      content: [
        "Camera Integration",
        "Image Picker",
        "Location Services",
        "Permissions Handling",
        "Push Notifications",
        "Device Sensors",
        "File Upload",
        "Sharing Features",
      ],
    },

    {
      title: "Phase 8: State Management",
      content: [
        "Context API",
        "Global State Management",
        "Redux Basics",
        "Redux Toolkit",
        "Authentication State",
        "Persistent State",
      ],
    },

    {
      title: "Phase 9: Advanced React Native",
      content: [
        "Performance Optimization",
        "Lazy Loading",
        "Animations",
        "Reanimated Basics",
        "Debugging Techniques",
        "Error Handling",
        "Project Structure",
        "Code Reusability",
      ],
    },

    {
      title: "Phase 10: Testing & Optimization",
      content: [
        "React Native Debugger",
        "Flipper Basics",
        "Unit Testing",
        "Component Testing",
        "Performance Monitoring",
        "App Optimization",
      ],
    },

    {
      title: "Phase 11: Backend & Firebase",
      content: [
        "Firebase Firestore",
        "Realtime Database",
        "Cloud Functions Basics",
        "Backend Integration",
        "Authentication APIs",
        "Push Notification Services",
      ],
    },

    {
      title: "Phase 12: Deployment",
      content: [
        "App Build Process",
        "Expo Build",
        "APK & AAB Generation",
        "Environment Variables",
        "Google Play Store Publishing",
        "App Store Basics",
        "OTA Updates",
      ],
    },

    {
      title: "Phase 13: Projects",
      content: [
        "E-commerce Mobile App",
        "Social Media App",
        "Chat Application",
        "Food Delivery App",
        "Task Manager App",
        "Authentication App",
        "Real Client Projects",
        "Portfolio-ready Applications",
      ],
    },

    {
      title: "Phase 14: Career Preparation",
      content: [
        "Portfolio Development",
        "Resume Building",
        "GitHub Profile Optimization",
        "Interview Preparation",
        "Freelancing Basics",
        "Client Communication",
        "Mock Interviews",
        "LinkedIn Optimization",
      ],
    },
  ],
},

 {
  id: 13,
  title: "Flutter",
  tech: "mobile-development",
  slug: "flutter",
  author: "Michael Brown",
  price: "Free",
  duration: "16 Weeks",
  available: true,
  image: course5,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: Dart Fundamentals",
      content: [
        "Introduction to Dart",
        "Variables & Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Collections",
        "Null Safety",
        "Async Await",
        "OOP Concepts",
        "Inheritance",
        "Exception Handling",
      ],
    },

    {
      title: "Phase 2: Flutter Basics",
      content: [
        "Introduction to Flutter",
        "Flutter SDK Setup",
        "Project Structure",
        "Widgets",
        "Stateless Widgets",
        "Stateful Widgets",
        "Layouts",
        "Scaffold",
        "Navigation Basics",
        "Hot Reload",
      ],
    },

    {
      title: "Phase 3: UI Development",
      content: [
        "Responsive UI Design",
        "Flex & Expanded",
        "Row & Column",
        "Stack & Positioned",
        "ListView & GridView",
        "Custom Widgets",
        "Themes & Dark Mode",
        "Modern UI Design",
      ],
    },

    {
      title: "Phase 4: Forms & Navigation",
      content: [
        "Forms Handling",
        "TextField",
        "Validation",
        "Navigation",
        "Named Routes",
        "Passing Data Between Screens",
        "Drawer Navigation",
        "Bottom Navigation Bar",
      ],
    },

    {
      title: "Phase 5: State Management",
      content: [
        "setState",
        "Provider",
        "Riverpod",
        "Bloc Basics",
        "Cubit",
        "Global State Management",
        "State Handling",
      ],
    },

    {
      title: "Phase 6: API Integration & Firebase",
      content: [
        "REST API Integration",
        "HTTP Package",
        "CRUD Operations",
        "JSON Parsing",
        "Firebase Setup",
        "Firebase Authentication",
        "Firestore Database",
        "Cloud Storage",
      ],
    },

    {
      title: "Phase 7: Local Storage & Database",
      content: [
        "Shared Preferences",
        "Hive Database",
        "SQLite Basics",
        "Offline Storage",
        "Secure Storage",
        "Data Persistence",
      ],
    },

    {
      title: "Phase 8: Native Device Features",
      content: [
        "Camera Integration",
        "Image Picker",
        "Location Services",
        "Google Maps Basics",
        "Permissions Handling",
        "Push Notifications",
        "File Upload",
        "Device Sensors",
      ],
    },

    {
      title: "Phase 9: Advanced Flutter",
      content: [
        "Animations",
        "Hero Animations",
        "Custom Animations",
        "Performance Optimization",
        "Lazy Loading",
        "Error Handling",
        "Code Reusability",
        "Project Architecture",
      ],
    },

    {
      title: "Phase 10: Testing & Debugging",
      content: [
        "Flutter Debugging",
        "Unit Testing",
        "Widget Testing",
        "Integration Testing",
        "Performance Monitoring",
        "Error Tracking",
      ],
    },

    {
      title: "Phase 11: Deployment",
      content: [
        "App Build Process",
        "APK & AAB Generation",
        "Environment Variables",
        "Play Store Publishing",
        "App Store Deployment",
        "CI/CD Basics",
        "Firebase App Distribution",
      ],
    },

    {
      title: "Phase 12: Projects",
      content: [
        "E-commerce App",
        "Chat Application",
        "Food Delivery App",
        "Expense Tracker",
        "Authentication App",
        "Portfolio Applications",
        "Live Client Projects",
        "Real-world Mobile Apps",
      ],
    },

    {
      title: "Phase 13: Career Preparation",
      content: [
        "Resume Building",
        "Portfolio Development",
        "GitHub Profile Optimization",
        "Interview Preparation",
        "Freelancing Basics",
        "Client Communication",
        "Mock Interviews",
        "LinkedIn Optimization",
      ],
    },
  ],
},

 {
  id: 14,
  title: "Android Development",
   tech: "mobile-development",
  slug: "android-development",
  author: "Sophia Carter",
  price: "Free",
  duration: "18 Weeks",
  available: true,
  image: course6,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Kotlin Fundamentals",
      content: [
        "Introduction to Kotlin",
        "Variables & Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Collections",
        "Null Safety",
        "OOP Concepts",
        "Inheritance",
        "Exception Handling",
        "Coroutines Basics",
      ],
    },

    {
      title: "Phase 2: Android Studio & Basics",
      content: [
        "Android Studio Setup",
        "Project Structure",
        "Gradle Basics",
        "Android Manifest",
        "Activities",
        "Fragments",
        "Lifecycle Methods",
        "Layouts",
        "View Binding",
      ],
    },

    {
      title: "Phase 3: UI Development",
      content: [
        "ConstraintLayout",
        "LinearLayout",
        "RecyclerView",
        "CardView",
        "Material Design",
        "Dark Mode",
        "Custom UI Components",
        "Responsive UI Design",
      ],
    },

    {
      title: "Phase 4: Navigation & Storage",
      content: [
        "Navigation Component",
        "Intents",
        "Passing Data Between Screens",
        "Shared Preferences",
        "SQLite Basics",
        "Room Database",
        "Offline Storage",
        "Data Persistence",
      ],
    },

    {
      title: "Phase 5: API Integration & Firebase",
      content: [
        "REST API Basics",
        "Retrofit",
        "JSON Parsing",
        "CRUD Operations",
        "Firebase Setup",
        "Firebase Authentication",
        "Firestore Database",
        "Cloud Storage",
      ],
    },

    {
      title: "Phase 6: State Management & Architecture",
      content: [
        "MVVM Architecture",
        "ViewModel",
        "LiveData",
        "Repository Pattern",
        "Dependency Injection",
        "Hilt Basics",
        "Coroutines",
        "Flow Basics",
      ],
    },

    {
      title: "Phase 7: Native Device Features",
      content: [
        "Camera Integration",
        "Location Services",
        "Google Maps",
        "Permissions Handling",
        "Push Notifications",
        "File Upload",
        "Media Handling",
        "Sensors Basics",
      ],
    },

    {
      title: "Phase 8: Advanced Android Development",
      content: [
        "Background Services",
        "WorkManager",
        "Performance Optimization",
        "Security Best Practices",
        "Code Reusability",
        "Error Handling",
        "Modern Android Architecture",
      ],
    },

    {
      title: "Phase 9: Testing & Debugging",
      content: [
        "Android Debugging",
        "Logcat",
        "Unit Testing",
        "UI Testing",
        "Espresso Basics",
        "Performance Monitoring",
      ],
    },

    {
      title: "Phase 10: Deployment",
      content: [
        "APK & AAB Generation",
        "Signing Applications",
        "Environment Variables",
        "Play Store Publishing",
        "App Optimization",
        "CI/CD Basics",
        "Firebase App Distribution",
      ],
    },

    {
      title: "Phase 11: Projects",
      content: [
        "E-commerce Application",
        "Booking Application",
        "Chat Application",
        "Expense Tracker",
        "Authentication System",
        "Live Client Projects",
        "Portfolio-ready Apps",
        "Team Collaboration",
      ],
    },

    {
      title: "Phase 12: Career Preparation",
      content: [
        "Resume Building",
        "Portfolio Development",
        "GitHub Profile Optimization",
        "Interview Preparation",
        "DSA Basics",
        "Freelancing Basics",
        "Mock Interviews",
        "LinkedIn Optimization",
      ],
    },
  ],
},


{
  id: 15,
  title: "iOS Development",
   tech: "mobile-development",
  slug: "ios-development",
  author: "Alex Morgan",
  price: "Free",
  duration: "18 Weeks",
  available: true,
  image: course1,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Swift Fundamentals",
      content: [
        "Introduction to Swift",
        "Variables & Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Collections (Array, Dictionary, Set)",
        "Optionals",
        "OOP Concepts",
        "Inheritance",
        "Protocols",
        "Error Handling",
      ],
    },

    {
      title: "Phase 2: iOS Development Basics",
      content: [
        "Xcode Setup",
        "Project Structure",
        "Storyboard Basics",
        "UIKit Introduction",
        "SwiftUI Introduction",
        "View Controllers",
        "Auto Layout",
        "Navigation",
      ],
    },

    {
      title: "Phase 3: UI Development",
      content: [
        "UIKit Components",
        "SwiftUI Views",
        "Stacks (VStack, HStack, ZStack)",
        "Buttons & Labels",
        "TableView & CollectionView",
        "Reusable Components",
        "Dark Mode Support",
        "Responsive UI Design",
      ],
    },

    {
      title: "Phase 4: Data Storage",
      content: [
        "UserDefaults",
        "File Handling",
        "Core Data Basics",
        "CRUD Operations",
        "Data Persistence",
        "Local Database Management",
      ],
    },

    {
      title: "Phase 5: Networking & APIs",
      content: [
        "REST API Basics",
        "URLSession",
        "Alamofire",
        "JSON Parsing",
        "API Integration",
        "Error Handling",
        "Async Networking",
      ],
    },

    {
      title: "Phase 6: Firebase Integration",
      content: [
        "Firebase Setup",
        "Firebase Authentication",
        "Cloud Firestore",
        "Realtime Database",
        "Cloud Storage",
        "Push Notifications",
      ],
    },

    {
      title: "Phase 7: Architecture & State Management",
      content: [
        "MVC Pattern",
        "MVVM Architecture",
        "Dependency Injection",
        "Combine Framework",
        "State Management",
        "App Lifecycle Management",
      ],
    },

    {
      title: "Phase 8: Advanced iOS Concepts",
      content: [
        "Concurrency (GCD)",
        "Async/Await",
        "Memory Management",
        "Performance Optimization",
        "Security Best Practices",
        "Debugging Techniques",
      ],
    },

    {
      title: "Phase 9: Testing & Debugging",
      content: [
        "XCTest Framework",
        "Unit Testing",
        "UI Testing",
        "Debugging Tools",
        "Crash Handling",
      ],
    },

    {
      title: "Phase 10: Deployment",
      content: [
        "App Signing",
        "Build Process",
        "TestFlight",
        "App Store Guidelines",
        "App Store Submission",
        "Version Control",
        "CI/CD Basics",
      ],
    },

    {
      title: "Phase 11: Projects",
      content: [
        "E-commerce App",
        "Social Media App",
        "Chat Application",
        "Expense Tracker",
        "Authentication App",
        "Portfolio Apps",
        "Real Client Projects",
        "Production Ready Apps",
      ],
    },

    {
      title: "Phase 12: Career Preparation",
      content: [
        "Resume Building",
        "Portfolio Development",
        "GitHub Profile Optimization",
        "Interview Preparation",
        "Freelancing Basics",
        "Client Communication",
        "Mock Interviews",
        "LinkedIn Optimization",
      ],
    },
  ],
},

{
  id: 16,
  title: "Xamarin",
   tech: "mobile-development",
  slug: "xamarin",
  author: "Emma Wilson",
  price: "Free",
  duration: "16 Weeks",
  available: true,
  image: course2,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: C# Fundamentals",
      content: [
        "Introduction to C#",
        "Variables & Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
        "OOP Concepts",
        "Classes & Objects",
        "Inheritance",
        "Polymorphism",
        "Exception Handling",
      ],
    },

    {
      title: "Phase 2: Xamarin Basics",
      content: [
        "Introduction to Xamarin",
        "Xamarin Forms Setup",
        "Project Structure",
        "Layouts",
        "UI Components",
        "Pages & Navigation",
        "Cross Platform Development",
        "Device Compatibility",
      ],
    },

    {
      title: "Phase 3: UI Development",
      content: [
        "XAML Basics",
        "Data Binding",
        "Styles & Resources",
        "Custom Controls",
        "Responsive UI Design",
        "ListView & CollectionView",
        "Animations Basics",
      ],
    },

    {
      title: "Phase 4: Data Handling",
      content: [
        "Local Storage",
        "SQLite Database",
        "File Storage",
        "CRUD Operations",
        "MVVM Architecture",
        "Data Binding Deep Dive",
      ],
    },

    {
      title: "Phase 5: APIs & Networking",
      content: [
        "REST API Integration",
        "HTTP Client",
        "JSON Serialization",
        "Authentication",
        "Error Handling",
        "Async Programming",
      ],
    },

    {
      title: "Phase 6: Advanced Concepts",
      content: [
        "Dependency Injection",
        "Performance Optimization",
        "Memory Management",
        "Debugging Techniques",
        "Logging",
        "Code Reusability",
      ],
    },

    {
      title: "Phase 7: Deployment & Build",
      content: [
        "Android Build Process",
        "iOS Build Process",
        "Release Configuration",
        "App Signing",
        "CI/CD Pipeline",
        "Cloud Deployment",
        "Versioning",
      ],
    },

    {
      title: "Phase 8: Projects",
      content: [
        "E-commerce App",
        "Business Management App",
        "Chat Application",
        "Task Management App",
        "Real Client Projects",
        "Team Collaboration",
      ],
    },

    {
      title: "Phase 9: Career Preparation",
      content: [
        "Resume Building",
        "Portfolio Development",
        "GitHub Projects",
        "Interview Preparation",
        "Freelancing Basics",
        "Client Handling",
        "Mock Interviews",
      ],
    },
  ],
},

  // ================= DATABASE =================

 {
  id: 17,
  title: "MongoDB",
   tech: "database",
  slug: "mongodb",
  author: "Alex Morgan",
  price: "Free",
  duration: "8 Weeks",
  available: true,
  image: course1,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Database Fundamentals",
      content: [
        "What is Database?",
        "SQL vs NoSQL",
        "Introduction to MongoDB",
        "Installation & Setup",
        "MongoDB Compass",
        "Collections & Documents",
        "BSON Format",
      ],
    },

    {
      title: "Phase 2: CRUD Operations",
      content: [
        "Insert One & Insert Many",
        "Find Queries",
        "Filtering Data",
        "Update Operations",
        "Delete Operations",
        "Query Operators",
        "Projection",
      ],
    },

    {
      title: "Phase 3: Mongoose ODM",
      content: [
        "Introduction to Mongoose",
        "Schemas & Models",
        "Schema Types",
        "Validation Rules",
        "Virtual Properties",
        "Relationships (Ref & Populate)",
      ],
    },

    {
      title: "Phase 4: Advanced MongoDB",
      content: [
        "Aggregation Pipeline",
        "Indexes",
        "Text Search",
        "Data Modeling Best Practices",
        "Performance Optimization",
        "Sharding Basics",
      ],
    },

    {
      title: "Phase 5: Security & Authentication",
      content: [
        "User Authentication",
        "Authorization",
        "Password Hashing (bcrypt)",
        "Data Encryption",
        "Role-Based Access Control",
        "Security Best Practices",
      ],
    },

    {
      title: "Phase 6: Integration",
      content: [
        "Node.js Integration",
        "Express.js with MongoDB",
        "REST API Development",
        "MongoDB Atlas (Cloud)",
        "Environment Variables",
        "Backup & Restore",
      ],
    },

    {
      title: "Phase 7: Projects",
      content: [
        "Blog Application Database",
        "E-commerce Backend",
        "User Management System",
        "Analytics Dashboard",
        "Task Management API",
        "Live Real-world Projects",
      ],
    },

    {
      title: "Phase 8: Career Preparation",
      content: [
        "Query Optimization Techniques",
        "Interview Questions",
        "System Design Basics",
        "Portfolio Projects",
        "Real-world Case Studies",
        "Freelancing Use Cases",
      ],
    },
  ],
},

 {
  id: 18,
  title: "PostgreSQL",
  tech: "database",
  slug: "postgresql",
  author: "Emma Wilson",
  price: "Free",
  duration: "9 Weeks",
  available: true,
  image: course2,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: SQL Fundamentals",
      content: [
        "What is Database?",
        "Relational Database Concepts",
        "Tables, Rows, Columns",
        "Data Types in SQL",
        "Primary Key & Foreign Key",
        "Basic SELECT Queries",
        "Filtering with WHERE",
      ],
    },

    {
      title: "Phase 2: Intermediate SQL",
      content: [
        "Joins (INNER, LEFT, RIGHT)",
        "Group By & Aggregations",
        "HAVING Clause",
        "Subqueries",
        "Set Operations",
        "Constraints (NOT NULL, UNIQUE, CHECK)",
      ],
    },

    {
      title: "Phase 3: PostgreSQL Core Features",
      content: [
        "Introduction to PostgreSQL",
        "Database Creation & Management",
        "Schemas",
        "Functions",
        "Views",
        "Triggers",
        "Stored Procedures",
      ],
    },

    {
      title: "Phase 4: Advanced PostgreSQL",
      content: [
        "Window Functions",
        "CTEs (Common Table Expressions)",
        "Recursive Queries",
        "JSON & JSONB Support",
        "Full-Text Search",
        "Advanced Query Writing",
      ],
    },

    {
      title: "Phase 5: Performance Optimization",
      content: [
        "Indexes & Index Types",
        "Query Execution Plans (EXPLAIN)",
        "Query Optimization Techniques",
        "Partitioning Tables",
        "Vacuum & Analyze",
        "Performance Tuning",
      ],
    },

    {
      title: "Phase 6: Security & Administration",
      content: [
        "Roles & Users",
        "Privileges & Permissions",
        "Authentication Methods",
        "Data Encryption Basics",
        "Backup & Restore",
        "Database Maintenance",
      ],
    },

    {
      title: "Phase 7: Integration & Tools",
      content: [
        "Node.js Integration with PostgreSQL",
        "Java Integration",
        "ORM Tools (Sequelize / Prisma)",
        "REST API Integration",
        "Cloud Databases",
        "Environment Configuration",
      ],
    },

    {
      title: "Phase 8: Projects",
      content: [
        "Banking Database System",
        "E-commerce Database Design",
        "Analytics Dashboard DB",
        "Inventory Management System",
        "Real-world Production Projects",
      ],
    },

    {
      title: "Phase 9: Career Preparation",
      content: [
        "Advanced SQL Interview Questions",
        "System Design Basics for DB",
        "Portfolio Projects",
        "Case Studies",
        "Freelancing Use Cases",
      ],
    },
  ],
},

 {
  id: 19,
  title: "Oracle Database",
  tech: "database",
  slug: "oracle",
  author: "Daniel Smith",
  price: "Free",
  duration: "10 Weeks",
  available: true,
  image: course3,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Database Fundamentals",
      content: [
        "What is Database?",
        "Relational Database Concepts",
        "Tables, Schemas & Instances",
        "Data Types in Oracle",
        "Primary Key & Foreign Key",
        "Basic SQL Queries (SELECT, WHERE)",
      ],
    },

    {
      title: "Phase 2: SQL in Oracle",
      content: [
        "Joins (INNER, LEFT, RIGHT)",
        "Subqueries",
        "Set Operations (UNION, INTERSECT)",
        "Indexes in Oracle",
        "Constraints (NOT NULL, UNIQUE, CHECK)",
        "Group By & Aggregations",
      ],
    },

    {
      title: "Phase 3: PL/SQL Programming",
      content: [
        "Introduction to PL/SQL",
        "Variables & Data Types",
        "Control Statements (IF, LOOP)",
        "Procedures",
        "Functions",
        "Cursors",
        "Triggers",
        "Packages",
      ],
    },

    {
      title: "Phase 4: Advanced Oracle Concepts",
      content: [
        "Exception Handling in PL/SQL",
        "Stored Procedures Optimization",
        "Query Optimization Techniques",
        "Execution Plans",
        "Partitioning",
        "Materialized Views",
      ],
    },

    {
      title: "Phase 5: Performance Tuning",
      content: [
        "Indexing Strategies",
        "SQL Tuning",
        "Database Performance Monitoring",
        "Memory Management Basics",
        "Explain Plan Analysis",
      ],
    },

    {
      title: "Phase 6: Security & Administration",
      content: [
        "User Management",
        "Roles & Privileges",
        "Authentication Methods",
        "Data Encryption",
        "Backup & Recovery",
        "Audit & Logging",
      ],
    },

    {
      title: "Phase 7: Enterprise Integration",
      content: [
        "Java Integration with Oracle",
        "Enterprise Application Integration",
        "API Connectivity",
        "Cloud Oracle (OCI Basics)",
        "Data Migration",
      ],
    },

    {
      title: "Phase 8: Projects",
      content: [
        "Banking Management System",
        "ERP Database System",
        "HR Management System",
        "Inventory System",
        "Real-world Enterprise Projects",
      ],
    },

    {
      title: "Phase 9: Career Preparation",
      content: [
        "Oracle DBA Skills",
        "Advanced SQL Interview Questions",
        "System Design for Databases",
        "Portfolio Projects",
        "Case Studies",
      ],
    },
  ],
},

{
  id: 20,
  title: "MySQL",
  tech: "database",
  slug: "mysql",
  author: "Sophia Carter",
  price: "Free",
  duration: "8 Weeks",
  available: true,
  image: course4,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: SQL Fundamentals",
      content: [
        "What is Database?",
        "Relational Database Concepts",
        "Tables, Rows & Columns",
        "Data Types in MySQL",
        "Primary Key & Foreign Key",
        "Basic SELECT Queries",
      ],
    },

    {
      title: "Phase 2: Intermediate SQL",
      content: [
        "Joins (INNER, LEFT, RIGHT)",
        "Subqueries",
        "Group By & Aggregations",
        "HAVING Clause",
        "Constraints (NOT NULL, UNIQUE, CHECK)",
        "Set Operations Basics",
      ],
    },

    {
      title: "Phase 3: Database Design",
      content: [
        "Normalization (1NF, 2NF, 3NF)",
        "ER Diagrams",
        "Schema Design Principles",
        "Relationships (One-to-One, One-to-Many, Many-to-Many)",
        "Index Design Basics",
      ],
    },

    {
      title: "Phase 4: Performance Optimization",
      content: [
        "Indexing Strategies",
        "Query Optimization Techniques",
        "Execution Plans (EXPLAIN)",
        "Caching Basics",
        "Database Tuning",
      ],
    },

    {
      title: "Phase 5: Security & Administration",
      content: [
        "User Management",
        "Roles & Privileges",
        "Authentication Methods",
        "Data Backup & Restore",
        "Security Best Practices",
      ],
    },

    {
      title: "Phase 6: Integration",
      content: [
        "Node.js Integration with MySQL",
        "PHP Integration",
        "ORM Tools (Sequelize, Prisma)",
        "REST API Development",
        "Cloud Database Hosting",
      ],
    },

    {
      title: "Phase 7: Projects",
      content: [
        "E-commerce Database System",
        "Blog Management System",
        "Inventory Management System",
        "Analytics Dashboard",
        "Real-world Backend Projects",
      ],
    },

    {
      title: "Phase 8: Career Preparation",
      content: [
        "Advanced SQL Interview Questions",
        "System Design Basics",
        "Portfolio Projects",
        "Case Studies",
        "Freelancing Use Cases",
      ],
    },
  ],
},

  // ================= CYBER SECURITY =================

 {
  id: 21,
  title: "Ethical Hacking",
  tech: "cyber-security",
  slug: "ethical-hacking",
  author: "Michael Brown",
  price: "Free",
  duration: "18 Weeks",
  available: true,
  image: course3,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Networking Fundamentals",
      content: [
        "What is Networking?",
        "IP Addressing (IPv4 & IPv6)",
        "OSI Model in Detail",
        "TCP/IP Protocol Suite",
        "DNS, HTTP, HTTPS Basics",
        "Ports & Protocols",
      ],
    },

    {
      title: "Phase 2: Linux Fundamentals",
      content: [
        "Linux Introduction",
        "File System Structure",
        "Basic Linux Commands",
        "User & Permission Management",
        "Process Management",
        "Shell Scripting Basics",
      ],
    },

    {
      title: "Phase 3: Cyber Security Basics",
      content: [
        "Introduction to Cyber Security",
        "Types of Cyber Attacks",
        "Malware Basics",
        "Vulnerabilities & Threats",
        "Security Tools Overview",
        "Risk Management Basics",
      ],
    },

    {
      title: "Phase 4: Ethical Hacking Basics",
      content: [
        "What is Ethical Hacking?",
        "Kali Linux Setup",
        "Footprinting & Reconnaissance",
        "Scanning Networks",
        "Enumeration Techniques",
        "Penetration Testing Basics",
      ],
    },

    {
      title: "Phase 5: Web Application Security",
      content: [
        "OWASP Top 10 Overview",
        "SQL Injection Attacks",
        "Cross-Site Scripting (XSS)",
        "CSRF Attacks",
        "Authentication Bypass",
        "Session Hijacking",
      ],
    },

    {
      title: "Phase 6: Advanced Security Tools",
      content: [
        "Metasploit Framework",
        "Wireshark Packet Analysis",
        "Nmap Advanced Usage",
        "Password Cracking Tools",
        "Burp Suite Basics",
        "Social Engineering Techniques",
      ],
    },

    {
      title: "Phase 7: Projects & Labs",
      content: [
        "Vulnerability Assessment Lab",
        "Penetration Testing Practice",
        "Bug Bounty Simulations",
        "Web App Security Testing",
        "Live Security Projects",
      ],
    },

    {
      title: "Phase 8: Career Preparation",
      content: [
        "CEH Certification Preparation",
        "Cyber Security Interview Questions",
        "Resume Building for Security Roles",
        "Bug Bounty Platforms",
        "Freelancing in Cyber Security",
      ],
    },
  ],
},

  {
  id: 22,
  title: "Network Security",
  tech: "cyber-security",
  slug: "network-security",
  author: "Emma Wilson",
  price: "Free",
  duration: "16 Weeks",
  available: true,
  image: course4,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Networking Fundamentals",
      content: [
        "What is Networking?",
        "OSI Model in Detail",
        "TCP/IP Protocol Suite",
        "IP Addressing (IPv4 & IPv6)",
        "Subnetting Basics",
        "Ports & Protocols",
      ],
    },

    {
      title: "Phase 2: Network Devices",
      content: [
        "Routers & Switching Concepts",
        "Switches & VLAN Basics",
        "Firewalls Overview",
        "Load Balancers",
        "Access Points",
        "Network Topologies",
      ],
    },

    {
      title: "Phase 3: Network Security Fundamentals",
      content: [
        "Introduction to Network Security",
        "Firewalls Configuration Basics",
        "VPN (Virtual Private Network)",
        "IDS & IPS Systems",
        "Secure Network Protocols",
        "Authentication in Networks",
      ],
    },

    {
      title: "Phase 4: Network Attacks & Threats",
      content: [
        "DDoS Attacks",
        "Man-in-the-Middle Attacks",
        "IP Spoofing",
        "Packet Sniffing",
        "DNS Attacks",
        "ARP Poisoning",
      ],
    },

    {
      title: "Phase 5: Monitoring & Analysis",
      content: [
        "Network Monitoring Tools",
        "Wireshark Deep Dive",
        "Log Analysis Techniques",
        "Intrusion Detection Systems",
        "Traffic Analysis",
        "Performance Monitoring",
      ],
    },

    {
      title: "Phase 6: Advanced Network Security",
      content: [
        "Zero Trust Security Model",
        "Cloud Network Security",
        "Security Policies & Compliance",
        "Risk Assessment",
        "Encryption in Networks",
        "Secure Architecture Design",
      ],
    },

    {
      title: "Phase 7: Projects",
      content: [
        "Secure Enterprise Network Setup",
        "Firewall Configuration Project",
        "Threat Detection System",
        "VPN Implementation",
        "Real-world Security Projects",
      ],
    },

    {
      title: "Phase 8: Career Preparation",
      content: [
        "CCNA & Security+ Certification Prep",
        "Network Security Interview Questions",
        "Portfolio Development",
        "Case Studies",
        "Freelancing in Cyber Security",
      ],
    },
  ],
},


{
  id: 23,
  title: "Cryptography",
  tech: "cyber-security",
  slug: "cryptography",
  author: "Daniel Smith",
  price: "Free",
  duration: "14 Weeks",
  available: true,
  image: course5,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: Cryptography Fundamentals",
      content: [
        "What is Cryptography?",
        "Encryption vs Decryption",
        "Types of Cryptography",
        "Keys & Algorithms",
        "History of Cryptography",
        "Security Goals (CIA Triad)",
      ],
    },

    {
      title: "Phase 2: Symmetric Encryption",
      content: [
        "Symmetric Key Cryptography",
        "AES Algorithm",
        "DES Algorithm",
        "Block Ciphers",
        "Stream Ciphers",
        "Encryption Modes (CBC, ECB)",
      ],
    },

    {
      title: "Phase 3: Asymmetric Encryption",
      content: [
        "Asymmetric Key Cryptography",
        "RSA Algorithm",
        "Public & Private Keys",
        "Key Exchange Methods",
        "Diffie-Hellman Basics",
        "Digital Certificates",
      ],
    },

    {
      title: "Phase 4: Hashing Algorithms",
      content: [
        "What is Hashing?",
        "SHA Family (SHA-1, SHA-256)",
        "MD5 Algorithm",
        "Password Hashing",
        "Salting Techniques",
        "Integrity Verification",
      ],
    },

    {
      title: "Phase 5: Security Protocols",
      content: [
        "SSL/TLS Protocols",
        "HTTPS Working",
        "Secure Communication Channels",
        "Digital Certificates",
        "Blockchain Introduction",
        "PKI Overview",
      ],
    },

    {
      title: "Phase 6: Advanced Cryptography",
      content: [
        "Digital Signatures",
        "Public Key Infrastructure (PKI)",
        "Cryptanalysis Techniques",
        "Quantum Cryptography Basics",
        "Zero-Knowledge Proofs (Intro)",
        "Security Attacks on Cryptosystems",
      ],
    },

    {
      title: "Phase 7: Projects",
      content: [
        "Secure Messaging Application",
        "File Encryption Tool",
        "Password Manager System",
        "Data Encryption API",
        "Real-world Security Projects",
      ],
    },

    {
      title: "Phase 8: Career Preparation",
      content: [
        "Cyber Security Certifications",
        "Cryptography Interview Questions",
        "Portfolio Development",
        "Research Topics in Cryptography",
        "Bug Bounty Basics",
      ],
    },
  ],
},

  // ================= AI / ML =================

  {
  id: 24,
  title: "Machine Learning",
  slug: "machine-learning",
  tech: "ai-ml",
  author: "Olivia Brown",
  price: "Free",
  duration: "18 Weeks",
  available: true,
  image: course4,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Python & Data Fundamentals",
      content: [
        "Python Programming Basics",
        "NumPy Arrays & Operations",
        "Pandas DataFrames",
        "Data Loading & Cleaning",
        "Exploratory Data Analysis (EDA)"
      ],
    },
    {
      title: "Phase 2: Data Analysis & Visualization",
      content: [
        "Data Cleaning Techniques",
        "Missing Value Handling",
        "Data Visualization Basics",
        "Matplotlib Charts",
        "Seaborn Graphs"
      ],
    },
    {
      title: "Phase 3: Mathematics for Machine Learning",
      content: [
        "Descriptive Statistics",
        "Probability Theory",
        "Linear Algebra Basics",
        "Mean, Median, Variance",
        "Data Distributions"
      ],
    },
    {
      title: "Phase 4: Core Machine Learning Algorithms",
      content: [
        "Supervised vs Unsupervised Learning",
        "Linear Regression",
        "Logistic Regression",
        "KNN Algorithm",
        "SVM (Support Vector Machine)",
        "Clustering (K-Means)"
      ],
    },
    {
      title: "Phase 5: Advanced ML Algorithms",
      content: [
        "Decision Trees",
        "Random Forest",
        "Gradient Boosting (XGBoost Basics)",
        "Model Evaluation Metrics",
        "Cross Validation"
      ],
    },
    {
      title: "Phase 6: Tools & Deployment",
      content: [
        "Scikit-learn Library",
        "Model Training & Testing",
        "Flask API for ML Models",
        "Model Deployment Basics",
        "Cloud Deployment Introduction"
      ],
    },
    {
      title: "Phase 7: Real World Projects",
      content: [
        "House Price Prediction",
        "Stock Price Prediction",
        "Recommendation System",
        "Customer Segmentation",
        "Kaggle Competitions Practice"
      ],
    },
    {
      title: "Phase 8: Career Preparation",
      content: [
        "ML Interview Questions",
        "Resume Building for Data Science",
        "Portfolio Projects",
        "Case Study Analysis",
        "Job Roles in ML"
      ],
    },
  ],
},


 {
  id: 25,
  title: "Deep Learning",
    tech: "ai-ml",
  slug: "deep-learning",
  author: "Alex Morgan",
  price: "Free",
  duration: "16 Weeks",
  available: true,
  image: course5,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: Python & Mathematics Foundations",
      content: [
        "Python Programming Basics",
        "Linear Algebra (Vectors, Matrices)",
        "Probability Concepts",
        "Statistics for Machine Learning",
        "Data Handling with NumPy & Pandas"
      ],
    },
    {
      title: "Phase 2: Neural Network Basics",
      content: [
        "Perceptron Model",
        "Artificial Neural Networks (ANN)",
        "Activation Functions (ReLU, Sigmoid, Tanh)",
        "Forward Propagation",
        "Loss Functions Overview"
      ],
    },
    {
      title: "Phase 3: Training Neural Networks",
      content: [
        "Backpropagation Algorithm",
        "Gradient Descent Optimization",
        "Learning Rate Tuning",
        "Overfitting vs Underfitting",
        "Regularization Techniques"
      ],
    },
    {
      title: "Phase 4: Deep Learning Architectures",
      content: [
        "Convolutional Neural Networks (CNN)",
        "Recurrent Neural Networks (RNN)",
        "LSTM & GRU Networks",
        "Autoencoders",
        "GAN Basics"
      ],
    },
    {
      title: "Phase 5: Deep Learning Frameworks",
      content: [
        "TensorFlow Introduction",
        "Keras API Usage",
        "PyTorch Basics",
        "GPU Acceleration",
        "Model Saving & Loading"
      ],
    },
    {
      title: "Phase 6: Advanced Deep Learning",
      content: [
        "Transfer Learning",
        "Fine-Tuning Models",
        "Natural Language Processing (NLP)",
        "Computer Vision Applications",
        "Model Optimization Techniques"
      ],
    },
    {
      title: "Phase 7: Real-world Projects",
      content: [
        "Image Classification System",
        "AI Chatbot Development",
        "Face Recognition System",
        "Object Detection Project",
        "Live Industry Projects"
      ],
    },
    {
      title: "Phase 8: Career Preparation",
      content: [
        "Portfolio Building (AI Projects)",
        "Research Paper Basics",
        "Interview Preparation",
        "AI/ML Job Roles Overview",
        "Freelancing in AI"
      ],
    },
  ],
},

{
  id: 26,
  title: "Neural Networks",
    tech: "ai-ml",
  slug: "neural-networks",
  author: "Emma Wilson",
  price: "Free",
  duration: "14 Weeks",
  available: true,
  image: course6,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Neural Network Fundamentals",
      content: [
        "What is a Neural Network",
        "Biological vs Artificial Neurons",
        "Structure of Neural Networks",
        "Neurons, Layers, Weights & Bias",
        "Activation Functions (ReLU, Sigmoid, Tanh)"
      ],
    },
    {
      title: "Phase 2: Forward Propagation",
      content: [
        "Input Layer Processing",
        "Matrix Multiplication Basics",
        "Forward Pass Workflow",
        "Activation Flow Between Layers",
        "Loss Function Calculation"
      ],
    },
    {
      title: "Phase 3: Backpropagation & Training",
      content: [
        "Backpropagation Algorithm",
        "Gradient Descent Optimization",
        "Learning Rate Importance",
        "Weight Updates",
        "Error Minimization Process"
      ],
    },
    {
      title: "Phase 4: Neural Network Architectures",
      content: [
        "Feedforward Neural Networks",
        "Convolutional Neural Networks (CNN)",
        "Recurrent Neural Networks (RNN)",
        "LSTM Networks",
        "Deep Neural Networks (DNN)"
      ],
    },
    {
      title: "Phase 5: Regularization & Optimization",
      content: [
        "Overfitting vs Underfitting",
        "Dropout Technique",
        "Batch Normalization",
        "Hyperparameter Tuning",
        "Early Stopping"
      ],
    },
    {
      title: "Phase 6: Frameworks & Implementation",
      content: [
        "TensorFlow Basics",
        "Keras API",
        "PyTorch Introduction",
        "Model Building Workflow",
        "GPU Acceleration Basics"
      ],
    },
    {
      title: "Phase 7: Real World Projects",
      content: [
        "Handwritten Digit Recognition",
        "Image Classification System",
        "Predictive Models",
        "AI Chatbot Basics",
        "Live Industry Projects"
      ],
    },
    {
      title: "Phase 8: Career Preparation",
      content: [
        "Neural Network Interview Questions",
        "Research Paper Basics",
        "AI Portfolio Development",
        "Specialization in Deep Learning",
        "Job Roles in AI/ML"
      ],
    },
  ],
},

{
  id: 27,
  title: "Data Science",
    tech: "ai-ml",
  slug: "data-science",
  author: "Daniel Smith",
  price: "Free",
  duration: "20 Weeks",
  available: true,
  image: course1,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Python Programming & Tools",
      content: [
        "Python Basics for Data Science",
        "NumPy for Numerical Computing",
        "Pandas for Data Handling",
        "Jupyter Notebook Usage",
        "Data Loading & File Handling"
      ],
    },
    {
      title: "Phase 2: Data Analysis & Visualization",
      content: [
        "Data Cleaning Techniques",
        "Exploratory Data Analysis (EDA)",
        "Data Visualization Basics",
        "Matplotlib Charts",
        "Seaborn Advanced Visuals"
      ],
    },
    {
      title: "Phase 3: Statistics for Data Science",
      content: [
        "Mean, Median, Mode",
        "Standard Deviation & Variance",
        "Probability Concepts",
        "Hypothesis Testing",
        "Data Distributions"
      ],
    },
    {
      title: "Phase 4: Machine Learning Basics",
      content: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Regression Models",
        "Classification Models",
        "Model Evaluation Metrics"
      ],
    },
    {
      title: "Phase 5: Advanced Data Science",
      content: [
        "Feature Engineering",
        "Time Series Analysis",
        "SQL for Data Science",
        "Big Data Basics",
        "Data Pipelines"
      ],
    },
    {
      title: "Phase 6: Tools & Deployment",
      content: [
        "Power BI / Tableau Dashboards",
        "Advanced Excel for Analytics",
        "Model Deployment Basics",
        "Cloud Platforms Introduction",
        "Data Pipeline Tools"
      ],
    },
    {
      title: "Phase 7: Real World Projects",
      content: [
        "Business Analytics Dashboard",
        "Sales Prediction Model",
        "Customer Segmentation",
        "Fraud Detection System",
        "Live Industry Projects"
      ],
    },
    {
      title: "Phase 8: Career Preparation",
      content: [
        "Data Science Portfolio",
        "Resume Building",
        "Interview Preparation",
        "Case Study Analysis",
        "Job Roles in Data Science"
      ],
    },
  ],
},


// newly added with id-28
{
  id: 28,
  title: "Network Engineer",
  tech: "network-engineer",
  slug: "network-engineer",
  author: "David Wilson",
  price: "Free",
  duration: "14 Weeks",
  available: true,
  image: course4,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: Networking Fundamentals",
      content: [
        "Introduction to Computer Networks",
        "Types of Networks (LAN, WAN, MAN)",
        "OSI Model",
        "TCP/IP Model",
        "IP Addressing",
        "IPv4 & IPv6",
        "MAC Address",
        "Subnetting Basics",
        "Network Topologies",
        "Network Devices (Router, Switch, Hub)",
      ],
    },

    {
      title: "Phase 2: Routing & Switching",
      content: [
        "Introduction to Routing",
        "Static Routing",
        "Dynamic Routing",
        "RIP Protocol",
        "OSPF Protocol",
        "EIGRP Basics",
        "Switching Concepts",
        "VLAN Configuration",
        "Trunking",
        "Inter-VLAN Routing",
      ],
    },

    {
      title: "Phase 3: Network Security",
      content: [
        "Firewall Basics",
        "Access Control Lists (ACL)",
        "VPN Concepts",
        "Network Security Fundamentals",
        "Port Security",
        "SSH Configuration",
        "Wireless Security",
        "Intrusion Detection Systems",
        "Cybersecurity Basics",
      ],
    },

    {
      title: "Phase 4: Wireless Networking",
      content: [
        "Wireless Network Basics",
        "Wi-Fi Standards",
        "Wireless Access Points",
        "SSID & Channels",
        "Wireless Encryption",
        "Troubleshooting Wireless Issues",
        "Enterprise Wireless Networks",
      ],
    },

    {
      title: "Phase 5: Servers & Services",
      content: [
        "DNS Configuration",
        "DHCP Concepts",
        "Web Server Basics",
        "FTP & File Sharing",
        "Email Server Basics",
        "Proxy Server",
        "Network Monitoring Tools",
      ],
    },

    {
      title: "Phase 6: Cloud & Virtualization",
      content: [
        "Virtual Machines",
        "VMware Basics",
        "Cloud Networking",
        "AWS Networking Basics",
        "Azure Networking",
        "Hybrid Networks",
        "VPN & Remote Access",
      ],
    },

    {
      title: "Phase 7: Network Troubleshooting",
      content: [
        "Ping & Traceroute",
        "Network Diagnostics",
        "Packet Analysis (Wireshark)",
        "Troubleshooting Methodology",
        "Performance Monitoring",
        "Common Network Issues",
        "Real-world Troubleshooting Scenarios",
      ],
    },

    {
      title: "Phase 8: Certifications & Career",
      content: [
        "CCNA Preparation",
        "CompTIA Network+",
        "Resume Building",
        "Interview Questions",
        "Lab Practice",
        "Network Documentation",
        "Freelancing & Remote Jobs",
        "Career Guidance",
      ],
    },
  ],
},
{
  id: 29,
  title: "Cloud Computing",
  tech: "cloud-computing",
  slug: "cloud-computing",
  author: "Sophia Carter",
  price: "Free",
  duration: "16 Weeks",
  available: true,
  image: course5,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Cloud Computing Fundamentals",
      content: [
        "What is Cloud Computing",
        "History of Cloud Computing",
        "Traditional IT vs Cloud",
        "Benefits of Cloud Computing",
        "Scalability & Elasticity",
        "High Availability",
        "Fault Tolerance",
        "Cloud Architecture Basics",
        "Virtualization",
        "Hypervisors",
        "Virtual Machines",
        "Containers Overview",
        "Cloud Deployment Models",
        "Public Cloud",
        "Private Cloud",
        "Hybrid Cloud",
        "Multi Cloud",
        "Cloud Service Models",
        "IaaS",
        "PaaS",
        "SaaS",
      ],
    },

    {
      title: "Phase 2: Networking Fundamentals",
      content: [
        "Computer Networking Basics",
        "IP Addressing",
        "IPv4 & IPv6",
        "Subnetting",
        "DNS",
        "DHCP",
        "HTTP & HTTPS",
        "TCP/IP",
        "OSI Model",
        "Ports & Protocols",
        "Load Balancing",
        "CDN Basics",
        "VPN",
        "Firewalls",
        "Network Security Basics",
      ],
    },

    {
      title: "Phase 3: Linux & System Administration",
      content: [
        "Linux Introduction",
        "Linux File System",
        "Linux Commands",
        "File Permissions",
        "Users & Groups",
        "Package Managers",
        "System Monitoring",
        "Disk Management",
        "Process Management",
        "SSH",
        "Cron Jobs",
        "Environment Variables",
        "Shell Scripting",
        "Bash Scripting",
        "Server Management",
      ],
    },

    {
      title: "Phase 4: Storage & Databases",
      content: [
        "Cloud Storage Basics",
        "Object Storage",
        "Block Storage",
        "File Storage",
        "Database Fundamentals",
        "SQL Databases",
        "NoSQL Databases",
        "Database Scaling",
        "Replication",
        "Backups",
        "Disaster Recovery",
        "Caching Basics",
        "Redis Introduction",
      ],
    },

    {
      title: "Phase 5: DevOps Fundamentals",
      content: [
        "Introduction to DevOps",
        "DevOps Lifecycle",
        "Git Basics",
        "GitHub",
        "Repositories",
        "Branching",
        "Merge",
        "Pull Requests",
        "CI/CD Concepts",
        "Build Pipelines",
        "Deployment Pipelines",
        "Automation Basics",
      ],
    },

    {
      title: "Phase 6: Docker & Containerization",
      content: [
        "Introduction to Containers",
        "Docker Installation",
        "Docker Images",
        "Docker Containers",
        "Docker Commands",
        "Dockerfile",
        "Docker Compose",
        "Volumes",
        "Docker Networking",
        "Container Registries",
        "Container Security",
        "Deploying Containerized Apps",
      ],
    },

    {
      title: "Phase 7: Kubernetes Fundamentals",
      content: [
        "Introduction to Kubernetes",
        "Kubernetes Architecture",
        "Pods",
        "Deployments",
        "ReplicaSets",
        "Services",
        "Namespaces",
        "ConfigMaps",
        "Secrets",
        "Ingress",
        "Scaling Applications",
        "Kubernetes Networking",
        "Monitoring Kubernetes",
      ],
    },

    {
      title: "Phase 8: Infrastructure as Code",
      content: [
        "Infrastructure as Code Basics",
        "Terraform Introduction",
        "Terraform Installation",
        "Providers",
        "Terraform State",
        "Variables",
        "Outputs",
        "Modules",
        "Provisioning Infrastructure",
        "Automation with Terraform",
      ],
    },

    {
      title: "Phase 9: Cloud Security",
      content: [
        "Cloud Security Fundamentals",
        "Identity & Access Management",
        "Authentication",
        "Authorization",
        "Multi-factor Authentication",
        "Encryption Basics",
        "Data Security",
        "Network Security",
        "Security Best Practices",
        "Compliance Basics",
        "Backup Strategies",
        "Disaster Recovery Planning",
      ],
    },

    {
      title: "Phase 10: Monitoring & Logging",
      content: [
        "Monitoring Fundamentals",
        "Logging Basics",
        "Performance Monitoring",
        "Application Monitoring",
        "Infrastructure Monitoring",
        "Alerts & Notifications",
        "Observability",
        "Metrics Collection",
        "Log Analysis",
        "Troubleshooting Systems",
      ],
    },

    {
      title: "Phase 11: Real-world Cloud Projects",
      content: [
        "Deploy Static Website",
        "Host Full Stack Application",
        "Deploy Dockerized Application",
        "Build CI/CD Pipeline",
        "Infrastructure Automation Project",
        "Cloud Monitoring Dashboard",
        "Scalable Web Application",
        "Secure Cloud Architecture",
        "Production-ready Deployment",
      ],
    },

    {
      title: "Phase 12: Career Preparation",
      content: [
        "Cloud Engineer Roadmap",
        "DevOps Engineer Roadmap",
        "Site Reliability Engineering Basics",
        "Resume Building",
        "LinkedIn Optimization",
        "GitHub Portfolio",
        "Interview Questions",
        "System Design Basics",
        "Freelancing",
        "Remote Jobs",
        "Internship Preparation",
      ],
    },
  ],
},

// ================= GENERAL ASSISTANCE =================
{
  id: 30,
  title: "ChatGPT",
  tech: "ai-tools",
  slug: "chatgpt",
  categoryId: "general-assistance",
  author: "OpenAI",
  price: "Freemium",
  duration: "6 Weeks",
  image: course5,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: Introduction to ChatGPT",
      content: [
        "What is ChatGPT",
        "History of Generative AI",
        "How AI Chatbots Work",
        "Large Language Models (LLMs)",
        "Natural Language Processing",
        "Creating OpenAI Account",
        "Using ChatGPT Interface",
        "Free vs Paid Versions",
      ],
    },

    {
      title: "Phase 2: Prompt Engineering",
      content: [
        "Prompt Writing Basics",
        "Role-based Prompting",
        "Chain of Thought Prompting",
        "Few-shot Prompting",
        "Context Prompting",
        "Prompt Optimization",
        "Prompt Templates",
        "Advanced AI Instructions",
      ],
    },

    {
      title: "Phase 3: Productivity Workflows",
      content: [
        "Email Writing",
        "Resume Building",
        "Content Writing",
        "Blog Generation",
        "Research Assistance",
        "Summarization",
        "Daily Productivity",
        "AI Study Assistant",
      ],
    },

    {
      title: "Phase 4: Real Projects",
      content: [
        "AI Chatbot",
        "AI Resume Builder",
        "AI Content Generator",
        "AI Research Assistant",
        "AI Automation Workflows",
        "Business AI Assistant",
      ],
    },
  ],
},

{
  id: 31,
  title: "Claude AI",
  tech: "ai-tools",
  slug: "claude-ai",
  categoryId: "general-assistance",
  author: "Anthropic",
  price: "Freemium",
  duration: "5 Weeks",
  image: course3,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Claude Basics",
      content: [
        "Introduction to Claude AI",
        "Anthropic AI Overview",
        "Claude Interface",
        "AI Conversations",
        "Long Context AI",
        "Document Analysis",
        "Claude Features",
      ],
    },

    {
      title: "Phase 2: Writing & Research",
      content: [
        "Research Assistance",
        "Essay Writing",
        "Long-form Content",
        "AI Collaboration",
        "Knowledge Management",
        "Document Summaries",
        "PDF Analysis",
      ],
    },

    {
      title: "Phase 3: Real-world Workflows",
      content: [
        "Business Reports",
        "AI Research Projects",
        "AI Writing Assistant",
        "Content Planning",
        "Learning Assistant",
      ],
    },
  ],
},

{
  id: 32,
  title: "Gemini AI",
  tech: "ai-tools",
  slug: "gemini-ai",
  categoryId: "general-assistance",
  author: "Google",
  price: "Freemium",
  duration: "5 Weeks",
  image: course3,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Gemini Fundamentals",
      content: [
        "Introduction to Gemini AI",
        "Google AI Ecosystem",
        "Gemini Models",
        "Multimodal AI",
        "Google Workspace AI",
        "Gemini Interface",
        "Search AI",
      ],
    },

    {
      title: "Phase 2: Productivity & Research",
      content: [
        "AI-powered Research",
        "Google Docs AI",
        "Content Writing",
        "AI Summaries",
        "Presentation Generation",
        "Image Understanding",
        "AI Learning Workflows",
      ],
    },

    {
      title: "Phase 3: AI Projects",
      content: [
        "AI Research Assistant",
        "AI Study Tool",
        "Google Workspace Automation",
        "AI Productivity Dashboard",
      ],
    },
  ],
},

// ================= DEVELOPMENT / PROGRAMMING =================
{
  id: 33,
  title: "Cursor AI",
  tech: "ai-tools",
  slug: "cursor-ai",
  categoryId: "development-programming",
  author: "Cursor",
  price: "Freemium",
  duration: "8 Weeks",
  image: course2,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Cursor Fundamentals",
      content: [
        "Introduction to Cursor AI",
        "AI Code Editor",
        "VS Code Integration",
        "Code Autocomplete",
        "AI Chat",
        "Project Navigation",
        "Code Generation",
      ],
    },

    {
      title: "Phase 2: Development Workflows",
      content: [
        "React Development",
        "Backend APIs",
        "Debugging",
        "Refactoring",
        "Code Optimization",
        "Database Queries",
        "Error Fixing",
      ],
    },

    {
      title: "Phase 3: Real Projects",
      content: [
        "Build Full Stack App",
        "AI Coding Assistant",
        "Portfolio Website",
        "Authentication System",
        "REST API Project",
      ],
    },
  ],
},

{
  id: 34,
  title: "Replit AI",
  tech: "ai-tools",
  slug: "replit-ai",
  categoryId: "development-programming",
  author: "Replit",
  price: "Freemium",
  duration: "6 Weeks",
  image: course5,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: Replit Basics",
      content: [
        "Online IDE",
        "Cloud Coding",
        "AI Coding",
        "Templates",
        "Team Collaboration",
        "Replit Workspace",
      ],
    },

    {
      title: "Phase 2: Deployment & Apps",
      content: [
        "Deploy Web Apps",
        "Build APIs",
        "Database Hosting",
        "Realtime Collaboration",
        "Environment Variables",
      ],
    },

    {
      title: "Phase 3: Projects",
      content: [
        "Portfolio App",
        "Chat App",
        "Todo App",
        "REST API",
        "Realtime Web App",
      ],
    },
  ],
},
{
  id: 35,
  title: "Bolt.new",
  tech: "ai-tools",
  slug: "bolt-new",
  categoryId: "development-programming",
  author: "StackBlitz",
  price: "Freemium",
  duration: "5 Weeks",
  image: course2,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Bolt.new Basics",
      content: [
        "Introduction to Bolt.new",
        "AI Website Generation",
        "Prompt-based Development",
        "Frontend Generation",
        "Full-stack AI Apps",
        "Instant Deployment",
      ],
    },

    {
      title: "Phase 2: AI App Development",
      content: [
        "React App Creation",
        "API Integration",
        "Database Setup",
        "Authentication",
        "Responsive UI",
        "AI Debugging",
      ],
    },

    {
      title: "Phase 3: Projects",
      content: [
        "Portfolio Website",
        "SaaS Dashboard",
        "AI Chat App",
        "Landing Page",
      ],
    },
  ],
},

{
  id: 36,
  title: "V0 by Vercel",
  tech: "ai-tools",
  slug: "v0-vercel",
  categoryId: "development-programming",
  author: "Vercel",
  price: "Freemium",
  duration: "5 Weeks",
  image: course3,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: v0 Fundamentals",
      content: [
        "Introduction to v0",
        "AI UI Generation",
        "React Components",
        "Tailwind CSS",
        "Prompt-based UI Design",
        "shadcn/ui Components",
      ],
    },

    {
      title: "Phase 2: Advanced UI Workflows",
      content: [
        "Dashboard Design",
        "Responsive Layouts",
        "Animations",
        "Dark Mode",
        "Landing Pages",
        "UI Optimization",
      ],
    },

    {
      title: "Phase 3: Projects",
      content: [
        "Admin Dashboard",
        "Portfolio Website",
        "SaaS Landing Page",
        "E-commerce UI",
      ],
    },
  ],
},
{
  id: 37,
  title: "GitHub Copilot",
  tech: "ai-tools",
  slug: "github-copilot",
  categoryId: "development-programming",
  author: "GitHub",
  price: "Paid",
  duration: "6 Weeks",
  image: course5,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Copilot Basics",
      content: [
        "Introduction to GitHub Copilot",
        "VS Code Integration",
        "AI Code Suggestions",
        "Autocomplete",
        "Copilot Chat",
        "Code Generation",
      ],
    },

    {
      title: "Phase 2: Development Workflows",
      content: [
        "React Development",
        "Backend APIs",
        "Debugging",
        "Refactoring",
        "Unit Testing",
        "Documentation Generation",
      ],
    },

    {
      title: "Phase 3: Projects",
      content: [
        "Full Stack App",
        "REST API",
        "Authentication System",
        "Portfolio Website",
      ],
    },
  ],
},

{
  id: 38,
  title: "Codeium",
  tech: "ai-tools",
  slug: "codeium",
  categoryId: "development-programming",
  author: "Codeium",
  price: "Freemium",
  duration: "5 Weeks",
  image: course2,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Codeium Basics",
      content: [
        "Introduction to Codeium",
        "AI Coding Assistant",
        "Autocomplete",
        "AI Chat",
        "Code Refactoring",
        "IDE Integration",
      ],
    },

    {
      title: "Phase 2: Coding Productivity",
      content: [
        "Bug Fixing",
        "React Development",
        "Backend Logic",
        "Database Queries",
        "Testing",
        "Optimization",
      ],
    },

    {
      title: "Phase 3: Projects",
      content: [
        "CRUD App",
        "Portfolio Website",
        "Chat Application",
        "API Project",
      ],
    },
  ],
},
// ================= CREATIVE / DESIGN =================
{
  id: 39,
  title: "Midjourney",
  tech: "ai-tools",
  slug: "midjourney",
  categoryId: "creativity-design",
  author: "Midjourney",
  price: "Paid",
  duration: "5 Weeks",
  image: course1,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: AI Art Basics",
      content: [
        "Introduction to Midjourney",
        "Prompt Writing",
        "Image Generation",
        "Art Styles",
        "Aspect Ratios",
        "Lighting & Composition",
      ],
    },

    {
      title: "Phase 2: Advanced Creativity",
      content: [
        "Cinematic Art",
        "Fantasy Design",
        "Concept Art",
        "Character Design",
        "Brand Design",
        "Poster Creation",
      ],
    },

    {
      title: "Phase 3: Design Projects",
      content: [
        "Movie Posters",
        "Social Media Art",
        "Brand Identity",
        "YouTube Thumbnails",
        "AI Wallpapers",
      ],
    },
  ],
},

{
  id: 40,
  title: "Canva AI",
  tech: "ai-tools",
  slug: "canva-ai",
  categoryId: "creativity-design",
  author: "Canva",
  price: "Freemium",
  duration: "4 Weeks",
  image: course5,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: Canva Basics",
      content: [
        "Canva Interface",
        "Magic Design",
        "Templates",
        "Layouts",
        "Color Theory",
        "Typography",
      ],
    },

    {
      title: "Phase 2: Content Creation",
      content: [
        "Instagram Posts",
        "YouTube Thumbnails",
        "Presentation Design",
        "Branding",
        "Marketing Creatives",
        "AI Image Editing",
      ],
    },

    {
      title: "Phase 3: Real Projects",
      content: [
        "Social Media Kit",
        "Business Presentation",
        "Brand Design",
        "Marketing Posters",
      ],
    },
  ],
},

// ================= RESEARCH / SEARCH =================
{
  id: 41,
  title: "Perplexity AI",
  tech: "ai-tools",
  slug: "perplexity-ai",
  categoryId: "research-search",
  author: "Perplexity",
  price: "Freemium",
  duration: "4 Weeks",
  image: course4,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: AI Search Basics",
      content: [
        "Introduction to Perplexity AI",
        "AI Search Engine",
        "Smart Search",
        "Citations",
        "Research Queries",
        "Reliable Sources",
      ],
    },

    {
      title: "Phase 2: Advanced Research",
      content: [
        "Deep Research",
        "Market Analysis",
        "Competitor Research",
        "Academic Research",
        "Research Reports",
      ],
    },

    {
      title: "Phase 3: Projects",
      content: [
        "Research Dashboard",
        "AI Study Assistant",
        "Market Research Report",
      ],
    },
  ],
},

// ================= VIDEO CREATION =================
{
  id: 42,
  title: "Runway ML",
  tech: "ai-tools",
  slug: "runway-ml",
  categoryId: "video-creation",
  author: "Runway",
  price: "Freemium",
  duration: "6 Weeks",
  image: course4,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Video AI Basics",
      content: [
        "Introduction to Runway ML",
        "Text to Video",
        "AI Video Editing",
        "Green Screen AI",
        "Video Effects",
        "Motion Tracking",
      ],
    },

    {
      title: "Phase 2: Production Workflows",
      content: [
        "YouTube Editing",
        "Cinematic Videos",
        "Marketing Videos",
        "AI Visual Effects",
        "Short-form Content",
      ],
    },

    {
      title: "Phase 3: Projects",
      content: [
        "YouTube Video",
        "Commercial Ad",
        "Cinematic Trailer",
        "Instagram Reels",
      ],
    },
  ],
},

// ================= PRODUCTIVITY =================
{
  id: 43,
  title: "Notion AI",
  tech: "ai-tools",
  slug: "notion-ai",
  categoryId: "productivity",
  author: "Notion",
  price: "Freemium",
  duration: "4 Weeks",
  image: course6,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Workspace Basics",
      content: [
        "Notion Interface",
        "Notes",
        "Docs",
        "Databases",
        "Task Management",
        "Workspace Organization",
      ],
    },

    {
      title: "Phase 2: AI Productivity",
      content: [
        "AI Writing",
        "Summaries",
        "Meeting Notes",
        "Workflow Automation",
        "Knowledge Base",
      ],
    },

    {
      title: "Phase 3: Projects",
      content: [
        "Personal Dashboard",
        "Project Management System",
        "AI Notes App",
      ],
    },
  ],
},

// ================= MUSIC =================
{
  id: 44,
  title: "Suno AI",
  tech: "ai-tools",
  slug: "suno-ai",
  categoryId: "creativity-music",
  author: "Suno",
  price: "Freemium",
  duration: "3 Weeks",
  image: course3,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: Music Basics",
      content: [
        "Introduction to Suno AI",
        "Text to Music",
        "Lyrics Generation",
        "Music Genres",
        "AI Vocals",
      ],
    },

    {
      title: "Phase 2: Music Production",
      content: [
        "AI Songs",
        "Background Music",
        "Commercial Audio",
        "Music Editing",
        "Song Customization",
      ],
    },

    {
      title: "Phase 3: Projects",
      content: [
        "YouTube Intro Music",
        "Podcast Music",
        "AI Song Album",
      ],
    },
  ],
},

// ================= VOICE / AUDIO =================
{
  id: 45,
  title: "ElevenLabs",
  tech: "ai-tools",
  slug: "elevenlabs",
  categoryId: "voice-audio",
  author: "ElevenLabs",
  price: "Freemium",
  duration: "4 Weeks",
  image: course3,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Voice AI Basics",
      content: [
        "Introduction to ElevenLabs",
        "Text to Speech",
        "Voice Cloning",
        "AI Voices",
        "Speech Generation",
      ],
    },

    {
      title: "Phase 2: Audio Production",
      content: [
        "Podcast Narration",
        "YouTube Voiceovers",
        "Commercial Audio",
        "Audiobooks",
        "Voice Customization",
      ],
    },

    {
      title: "Phase 3: Projects",
      content: [
        "Podcast Voice",
        "AI Audiobook",
        "YouTube Narration",
      ],
    },
  ],
},



// ================= AWS =================
{
  id: 46,
  title: "Amazon Web Services (AWS)",
  tech: "cloud-computing",
  slug: "aws",
  author: "Amazon",
  price: "Freemium",
  duration: "18 Weeks",
  available: true,
  image: course1,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: AWS Fundamentals",
      content: [
        "Introduction to AWS",
        "AWS Global Infrastructure",
        "Regions & Availability Zones",
        "AWS Shared Responsibility Model",
        "AWS Free Tier",
        "AWS Management Console",
        "AWS CLI Basics",
        "AWS Pricing Basics",
        "AWS Architecture Basics",
      ],
    },

    {
      title: "Phase 2: Compute Services",
      content: [
        "EC2 Introduction",
        "EC2 Instance Types",
        "Launching EC2 Instances",
        "AMI Basics",
        "Elastic IP",
        "Auto Scaling",
        "Elastic Load Balancer",
        "Lambda Functions",
        "Serverless Basics",
      ],
    },

    {
      title: "Phase 3: Storage Services",
      content: [
        "Amazon S3",
        "S3 Buckets",
        "S3 Permissions",
        "S3 Static Website Hosting",
        "EBS Volumes",
        "EFS Basics",
        "Storage Classes",
        "Backup Strategies",
      ],
    },

    {
      title: "Phase 4: Networking",
      content: [
        "VPC Basics",
        "Subnets",
        "Route Tables",
        "Internet Gateway",
        "NAT Gateway",
        "Security Groups",
        "Network ACL",
        "DNS with Route 53",
        "CloudFront CDN",
      ],
    },

    {
      title: "Phase 5: Databases",
      content: [
        "RDS Basics",
        "MySQL on AWS",
        "PostgreSQL on AWS",
        "DynamoDB",
        "Database Backups",
        "Replication",
        "Scaling Databases",
      ],
    },

    {
      title: "Phase 6: Security & Monitoring",
      content: [
        "IAM Users",
        "IAM Roles",
        "Policies",
        "CloudWatch",
        "CloudTrail",
        "AWS Config",
        "Encryption Basics",
        "Secrets Manager",
      ],
    },

    {
      title: "Phase 7: DevOps on AWS",
      content: [
        "CI/CD Basics",
        "CodePipeline",
        "CodeBuild",
        "Docker on AWS",
        "ECS Basics",
        "EKS Introduction",
        "Infrastructure as Code",
        "Terraform with AWS",
      ],
    },

    {
      title: "Phase 8: Real-world Projects",
      content: [
        "Deploy Static Website",
        "Deploy Full Stack App",
        "Serverless Application",
        "Containerized Application",
        "CI/CD Deployment",
        "Production-ready Architecture",
      ],
    },
  ],
},

// ================= MICROSOFT AZURE =================
{
  id: 47,
  title: "Microsoft Azure",
  tech: "cloud-computing",
  slug: "microsoft-azure",
  author: "Microsoft",
  price: "Freemium",
  duration: "16 Weeks",
  available: true,
  image: course2,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: Azure Fundamentals",
      content: [
        "Introduction to Azure",
        "Azure Portal",
        "Azure Architecture",
        "Regions & Availability Zones",
        "Azure Pricing",
        "Azure Resource Manager",
        "Subscriptions",
        "Resource Groups",
      ],
    },

    {
      title: "Phase 2: Compute Services",
      content: [
        "Azure Virtual Machines",
        "VM Scaling",
        "Azure App Services",
        "Azure Functions",
        "Container Instances",
        "Serverless Computing",
      ],
    },

    {
      title: "Phase 3: Storage & Databases",
      content: [
        "Azure Storage Accounts",
        "Blob Storage",
        "File Storage",
        "Managed Disks",
        "Azure SQL Database",
        "Cosmos DB",
        "Backup & Recovery",
      ],
    },

    {
      title: "Phase 4: Networking",
      content: [
        "Virtual Networks",
        "Subnets",
        "Network Security Groups",
        "Load Balancer",
        "Azure DNS",
        "VPN Gateway",
        "Application Gateway",
      ],
    },

    {
      title: "Phase 5: Identity & Security",
      content: [
        "Azure Active Directory",
        "Role-based Access Control",
        "IAM Basics",
        "Authentication",
        "Security Center",
        "Key Vault",
      ],
    },

    {
      title: "Phase 6: Monitoring & DevOps",
      content: [
        "Azure Monitor",
        "Log Analytics",
        "Azure DevOps",
        "CI/CD Pipelines",
        "GitHub Integration",
        "Docker on Azure",
        "Kubernetes Service",
      ],
    },

    {
      title: "Phase 7: Infrastructure Automation",
      content: [
        "ARM Templates",
        "Terraform with Azure",
        "Automation Scripts",
        "Infrastructure as Code",
      ],
    },

    {
      title: "Phase 8: Projects & Career",
      content: [
        "Deploy Portfolio Website",
        "Deploy Web Applications",
        "CI/CD Project",
        "Cloud Monitoring Dashboard",
        "Interview Preparation",
        "Azure Certifications",
      ],
    },
  ],
},

// ================= GOOGLE CLOUD PLATFORM =================
{
  id: 48,
  title: "Google Cloud Platform (GCP)",
  tech: "cloud-computing",
  slug: "google-cloud-platform",
  author: "Google",
  price: "Freemium",
  duration: "16 Weeks",
  available: true,
  image: course3,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: GCP Fundamentals",
      content: [
        "Introduction to GCP",
        "Google Cloud Console",
        "Projects & Billing",
        "Global Infrastructure",
        "Regions & Zones",
        "IAM Basics",
        "Cloud Shell",
      ],
    },

    {
      title: "Phase 2: Compute Services",
      content: [
        "Compute Engine",
        "Virtual Machines",
        "Instance Templates",
        "App Engine",
        "Cloud Run",
        "Cloud Functions",
        "Serverless Basics",
      ],
    },

    {
      title: "Phase 3: Storage & Databases",
      content: [
        "Cloud Storage",
        "Storage Classes",
        "Persistent Disks",
        "Cloud SQL",
        "Firestore",
        "BigQuery Basics",
      ],
    },

    {
      title: "Phase 4: Networking",
      content: [
        "VPC Networks",
        "Subnets",
        "Firewall Rules",
        "Cloud DNS",
        "Load Balancing",
        "CDN Basics",
      ],
    },

    {
      title: "Phase 5: Containers & Kubernetes",
      content: [
        "Docker Basics",
        "Google Kubernetes Engine",
        "Kubernetes Pods",
        "Deployments",
        "Container Registry",
      ],
    },

    {
      title: "Phase 6: DevOps & Monitoring",
      content: [
        "CI/CD Basics",
        "Cloud Build",
        "Monitoring",
        "Logging",
        "Observability",
        "Terraform with GCP",
      ],
    },

    {
      title: "Phase 7: Security",
      content: [
        "IAM Roles",
        "Authentication",
        "Authorization",
        "Encryption",
        "Security Best Practices",
      ],
    },

    {
      title: "Phase 8: Projects & Certifications",
      content: [
        "Deploy Full Stack App",
        "Kubernetes Project",
        "Serverless Project",
        "Production Deployment",
        "GCP Certifications",
        "Interview Preparation",
      ],
    },
  ],
},

// ================= DEVOPS =================
{
  id: 49,
  title: "DevOps Engineering",
  tech: "cloud-computing",
  slug: "devops-engineering",
  author: "Daniel Smith",
  price: "Free",
  duration: "20 Weeks",
  available: true,
  image: course4,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: DevOps Fundamentals",
      content: [
        "What is DevOps",
        "DevOps Lifecycle",
        "Agile Basics",
        "CI/CD Introduction",
        "Automation Concepts",
      ],
    },

    {
      title: "Phase 2: Linux & Networking",
      content: [
        "Linux Commands",
        "Shell Scripting",
        "Networking Basics",
        "SSH",
        "Server Administration",
      ],
    },

    {
      title: "Phase 3: Git & GitHub",
      content: [
        "Git Basics",
        "Repositories",
        "Branching",
        "Merge",
        "Pull Requests",
        "GitHub Actions",
      ],
    },

    {
      title: "Phase 4: Docker",
      content: [
        "Containers",
        "Docker Installation",
        "Docker Images",
        "Docker Compose",
        "Container Deployment",
      ],
    },

    {
      title: "Phase 5: Kubernetes",
      content: [
        "Kubernetes Architecture",
        "Pods",
        "Services",
        "Deployments",
        "Ingress",
        "Scaling",
      ],
    },

    {
      title: "Phase 6: CI/CD Pipelines",
      content: [
        "Jenkins",
        "GitHub Actions",
        "GitLab CI/CD",
        "Pipeline Automation",
        "Deployment Strategies",
      ],
    },

    {
      title: "Phase 7: Infrastructure as Code",
      content: [
        "Terraform",
        "Ansible",
        "Provisioning",
        "Automation",
        "Cloud Infrastructure",
      ],
    },

    {
      title: "Phase 8: Monitoring & Projects",
      content: [
        "Prometheus",
        "Grafana",
        "Logging",
        "Production Deployment",
        "End-to-End DevOps Project",
      ],
    },
  ],
},
// ================= IBM CLOUD =================
{
  id: 50,
  title: "IBM Cloud",
  tech: "cloud-computing",
  slug: "ibm-cloud",
  author: "IBM",
  price: "Freemium",
  duration: "14 Weeks",
  available: true,
  image: course5,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: IBM Cloud Fundamentals",
      content: [
        "Introduction to IBM Cloud",
        "IBM Cloud Architecture",
        "Cloud Computing Basics",
        "IBM Cloud Console",
        "Resource Management",
        "Pricing & Billing",
        "Hybrid Cloud Basics",
      ],
    },

    {
      title: "Phase 2: Compute & Storage",
      content: [
        "Virtual Servers",
        "Bare Metal Servers",
        "IBM Cloud Storage",
        "Object Storage",
        "File Storage",
        "Block Storage",
      ],
    },

    {
      title: "Phase 3: AI & Data Services",
      content: [
        "IBM Watson AI",
        "Machine Learning Basics",
        "Data Analytics",
        "Cloud Databases",
        "AI APIs",
        "Natural Language Processing",
      ],
    },

    {
      title: "Phase 4: Networking & Security",
      content: [
        "VPC Basics",
        "Networking",
        "Load Balancing",
        "Identity & Access Management",
        "Cloud Security",
        "Encryption",
      ],
    },

    {
      title: "Phase 5: DevOps & Containers",
      content: [
        "Docker Basics",
        "Kubernetes Service",
        "CI/CD Pipelines",
        "Infrastructure Automation",
        "Monitoring & Logging",
      ],
    },

    {
      title: "Phase 6: Projects & Career",
      content: [
        "Deploy Cloud Applications",
        "Hybrid Cloud Project",
        "AI-powered Application",
        "Resume Building",
        "Cloud Engineer Interview Prep",
      ],
    },
  ],
},

// ================= ORACLE CLOUD =================
{
  id: 51,
  title: "Oracle Cloud Infrastructure (OCI)",
  tech: "cloud-computing",
  slug: "oracle-cloud",
  author: "Oracle",
  price: "Freemium",
  duration: "15 Weeks",
  available: true,
  image: course6,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: OCI Fundamentals",
      content: [
        "Introduction to OCI",
        "OCI Architecture",
        "Cloud Infrastructure Basics",
        "OCI Console",
        "Compartments",
        "Regions & Availability Domains",
      ],
    },

    {
      title: "Phase 2: Compute & Networking",
      content: [
        "Compute Instances",
        "Virtual Cloud Networks",
        "Subnets",
        "Load Balancers",
        "DNS Management",
        "Networking Security",
      ],
    },

    {
      title: "Phase 3: Storage & Databases",
      content: [
        "Block Storage",
        "Object Storage",
        "File Storage",
        "Oracle Autonomous Database",
        "SQL Databases",
        "Database Backups",
      ],
    },

    {
      title: "Phase 4: Security & Monitoring",
      content: [
        "IAM Basics",
        "Policies",
        "Encryption",
        "Cloud Guard",
        "Logging",
        "Monitoring Services",
      ],
    },

    {
      title: "Phase 5: DevOps & Automation",
      content: [
        "Terraform with OCI",
        "CI/CD Pipelines",
        "Docker on OCI",
        "Kubernetes Engine",
        "Automation Workflows",
      ],
    },

    {
      title: "Phase 6: Real-world Projects",
      content: [
        "Database Hosting",
        "ERP Cloud Deployment",
        "Enterprise Application Deployment",
        "Production-ready Infrastructure",
      ],
    },
  ],
},

// ================= ALIBABA CLOUD =================
{
  id: 52,
  title: "Alibaba Cloud",
  tech: "cloud-computing",
  slug: "alibaba-cloud",
  author: "Alibaba Group",
  price: "Freemium",
  duration: "14 Weeks",
  available: true,
  image: course2,
  avatar: blogperson3,

  curriculum: [
    {
      title: "Phase 1: Alibaba Cloud Basics",
      content: [
        "Introduction to Alibaba Cloud",
        "Cloud Architecture",
        "Alibaba Cloud Console",
        "Regions & Zones",
        "Pricing Basics",
      ],
    },

    {
      title: "Phase 2: Compute & Storage",
      content: [
        "Elastic Compute Service",
        "Object Storage Service",
        "Block Storage",
        "File Storage",
        "Server Deployment",
      ],
    },

    {
      title: "Phase 3: Networking",
      content: [
        "VPC Basics",
        "Load Balancer",
        "CDN Services",
        "DNS",
        "Network Security",
      ],
    },

    {
      title: "Phase 4: AI & Big Data",
      content: [
        "Machine Learning",
        "AI Services",
        "Big Data Analytics",
        "Data Processing",
        "Cloud Intelligence",
      ],
    },

    {
      title: "Phase 5: Containers & DevOps",
      content: [
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Cloud Monitoring",
        "Infrastructure Automation",
      ],
    },

    {
      title: "Phase 6: Projects",
      content: [
        "Deploy E-commerce App",
        "Cloud Website Hosting",
        "Containerized Applications",
        "Production Deployments",
      ],
    },
  ],
},

// ================= SALESFORCE CLOUD =================
{
  id: 53,
  title: "Salesforce Cloud",
  tech: "cloud-computing",
  slug: "salesforce-cloud",
  author: "Salesforce",
  price: "Freemium",
  duration: "12 Weeks",
  available: true,
  image: course3,
  avatar: blogperson2,

  curriculum: [
    {
      title: "Phase 1: Salesforce Fundamentals",
      content: [
        "Introduction to Salesforce",
        "CRM Basics",
        "Salesforce Ecosystem",
        "Cloud Concepts",
        "Salesforce UI",
      ],
    },

    {
      title: "Phase 2: CRM & Business Apps",
      content: [
        "Sales Cloud",
        "Service Cloud",
        "Marketing Cloud",
        "Customer Management",
        "Business Automation",
      ],
    },

    {
      title: "Phase 3: Development Basics",
      content: [
        "Apex Basics",
        "Lightning Components",
        "SOQL",
        "Workflow Automation",
        "App Customization",
      ],
    },

    {
      title: "Phase 4: Security & Administration",
      content: [
        "Users & Roles",
        "Profiles & Permissions",
        "Data Security",
        "Reports & Dashboards",
        "Administration Basics",
      ],
    },

    {
      title: "Phase 5: Integrations & AI",
      content: [
        "API Integrations",
        "Einstein AI",
        "Automation Tools",
        "Third-party Integrations",
      ],
    },

    {
      title: "Phase 6: Projects & Career",
      content: [
        "CRM Dashboard Project",
        "Business Automation Project",
        "Salesforce Certifications",
        "Interview Preparation",
      ],
    },
  ],
},

// ================= TENCENT CLOUD =================
{
  id: 54,
  title: "Tencent Cloud",
  tech: "cloud-computing",
  slug: "tencent-cloud",
  author: "Tencent",
  price: "Freemium",
  duration: "13 Weeks",
  available: true,
  image: course4,
  avatar: blogperson1,

  curriculum: [
    {
      title: "Phase 1: Tencent Cloud Fundamentals",
      content: [
        "Introduction to Tencent Cloud",
        "Cloud Infrastructure",
        "Tencent Cloud Console",
        "Regions & Availability Zones",
      ],
    },

    {
      title: "Phase 2: Compute & Storage",
      content: [
        "Cloud Virtual Machines",
        "Object Storage",
        "Cloud Databases",
        "File Storage",
        "Server Management",
      ],
    },

    {
      title: "Phase 3: Networking & CDN",
      content: [
        "Virtual Private Cloud",
        "Load Balancing",
        "CDN Services",
        "DNS Management",
        "Cloud Networking",
      ],
    },

    {
      title: "Phase 4: AI & Big Data",
      content: [
        "AI Services",
        "Machine Learning",
        "Big Data Analytics",
        "Cloud Intelligence",
      ],
    },

    {
      title: "Phase 5: Security & Monitoring",
      content: [
        "IAM",
        "Cloud Security",
        "Monitoring Tools",
        "Logging Systems",
        "Encryption",
      ],
    },

    {
      title: "Phase 6: Projects",
      content: [
        "Deploy Cloud Applications",
        "Streaming Platform Deployment",
        "Scalable Web Applications",
        "Production-ready Projects",
      ],
    },
  ],
},

];

export default courses;