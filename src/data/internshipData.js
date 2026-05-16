import {
  FaReact,
  FaVuejs,
  FaPhp,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiDjango, SiDotnet } from "react-icons/si";

const internshipData = [


 // ================= DJANGO =================
  {
    id: 1,
     courseId: 8,
    title: "Python Django",
    slug: "python-django",
    desc: "Python Backend Framework",
    icon: SiDjango,

    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        highlights: [
          "Practical Training",
          "Internship Certificate",
          "Mini Project",
          "Knowledge Boost Sessions"
        ],

        topics: [
          {
            title: "Python Basics",
            content: [
              "Variables",
              "Functions",
              "Loops",
              "OOP Concepts"
            ],
          },
          {
            title: "Django Setup",
            content: [
              "Install Django",
              "Project Creation",
              "App Structure",
              "Run Server"
            ],
          },
          {
            title: "Basic Project",
            content: [
              "Simple Django App",
              "Routing",
              "Basic Views"
            ],
          },
        ],

        about: "Introduction to Python and Django framework",
        learn: "Understand basics of Django development",
      },

      {
        duration: "1 Month",
        level: "Beginner",
        highlights: [
          "Core Practical Sessions",
          "Internship Certificate",
          "Mini Project Implementation",
          "Knowledge & Case Studies"
        ],

        topics: [
          {
            title: "Django Core",
            content: [
              "Models",
              "Views",
              "Templates",
              "Admin Panel"
            ],
          },
          {
            title: "Database Basics",
            content: [
              "ORM",
              "Migrations",
              "CRUD Operations"
            ],
          },
          {
            title: "Mini Project",
            content: [
              "Blog System",
              "Create & Display Data",
              "Admin Usage"
            ],
          },
        ],

        about: "Core Django development",
        learn: "Build database-driven apps",
      },

      {
        duration: "2 Months",
        level: "Junior Developer",
        highlights: [
          "Advanced Practical Training",
          "Internship Certificate",
          "E-commerce Project",
          "Technology Knowledge  Sessions"
        ],

        topics: [
          {
            title: "Forms & Validation",
            content: [
              "Django Forms",
              "Validation",
              "User Input Handling"
            ],
          },
          {
            title: "Authentication",
            content: [
              "Login/Logout",
              "User Registration",
              "Session Handling"
            ],
          },
          {
            title: "Project",
            content: [
              "Auth System",
              "User Dashboard",
              "Secure Routes"
            ],
          },
        ],

        about: "User system & validation",
        learn: "Build secure applications",
      },

      {
        duration: "3 Months",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement"
        ],
        topics: [
          {
            title: "APIs",
            content: [
              "Django REST Framework",
              "Serializers",
              "API Views",
              "Postman Testing"
            ],
          },
          {
            title: "JWT Authentication",
            content: [
              "Token System",
              "Secure APIs",
              "User Auth APIs"
            ],
          },
          {
            title: "Project",
            content: [
              "REST API Backend",
              "Frontend Integration",
              "API Testing"
            ],
          },
        ],

        about: "API development with Django",
        learn: "Build REST APIs",
      },

      {
        duration: "4 Months",
        level: "Advanced",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement",
          "Mock Interview Practice & HR Round Preparation"
        ],

        topics: [
          {
            title: "Advanced Concepts",
            content: [
              "Caching",
              "Optimization",
              "Security",
              "Testing"
            ],
          },
          {
            title: "Project Structure",
            content: [
              "Scalable Architecture",
              "Best Practices",
              "Code Organization"
            ],
          },
          {
            title: "Project",
            content: [
              "Optimized Backend",
              "Secure Application",
              "Performance Focus"
            ],
          },
        ],

        about: "Advanced backend development",
        learn: "Optimize production apps",
      },

      {
        duration: "6 Months",
        level: "Professional",

        highlights: [
          "Complete Practical Mastery",
          "Internship Certificate",
          "Full E-commerce Project + Payment Gateway + Live Lunch",
          "Industry Knowledge Sessions",
          "Interview Pre + Personality Dev",
          "Mock Interview ,Group Discussion & Technical Interview Practice"
        ],
        topics: [
          {
            title: "DevOps",
            content: [
              "Docker",
              "Cloud Deployment",
              "CI/CD",
              "AWS Basics"
            ],
          },
          {
            title: "Live Projects",
            content: [
              "Client Projects",
              "Team Collaboration",
              "Git Workflow"
            ],
          },
          {
            title: "Industry Work",
            content: [
              "Agile Process",
              "Task Management",
              "Code Reviews"
            ],
          },
        ],

        about: "Industry-level development",
        learn: "Work on real-world projects",
      },

      {
        duration: "1 Year",
        level: "Expert",
        highlights: [
          "Full Stack Practical Mastery",
          "Experience Certificate + Internship Certificate",
          "Live Industry Project + Deployment",
          "6 Month Internship +  6 Month Probation",
          "Salary Slip + Increment Experience ",
          "Mock Interviews,GRoup Discussions,Technical Interview Practice,HR Round Training, and Job Placement Guidance"
        ],

        topics: [
          {
            title: "Advanced Backend",
            content: [
              "Microservices Basics",
              "Scalable Systems",
              "System Design"
            ],
          },
          {
            title: "Career Preparation",
            content: [
              "Portfolio",
              "Resume",
              "Interview Prep",
              "Freelancing"
            ],
          },
          {
            title: "Enterprise Project",
            content: [
              "E-commerce Backend",
              "Automation Scripts",
              "Live Deployment"
            ],
          },
        ],

        about: "Complete Django mastery",
        learn: "Become job-ready backend developer",
      },
    ],
  },
// ================= NODE =================
  {
    id: 2,
     courseId: 4,
    title: "Node.js",
    slug: "node-js",
    desc: "Backend JavaScript Runtime",
    icon: FaNodeJs,

    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        highlights: [
          "Practical Training",
          "Internship Certificate",
          "Mini Project",
          "Knowledge Boost Sessions"
        ],

        topics: [
          {
            title: "JavaScript Basics",
            content: [
              "Variables",
              "Functions",
              "Async Basics",
              "ES6 Features"
            ],
          },
          {
            title: "Node Setup",
            content: [
              "Install Node.js",
              "NPM",
              "Modules",
              "File System"
            ],
          },
          {
            title: "Basic Project",
            content: [
              "Simple Server",
              "CLI App",
              "File Handling"
            ],
          },
        ],

        about: "Introduction to Node.js fundamentals",
        learn: "Understand backend basics with Node",
      },

      {
        duration: "1 Month",
        level: "Beginner",
        highlights: [
          "Core Practical Sessions",
          "Internship Certificate",
          "Mini Project Implementation",
          "Knowledge & Case Studies"
        ],

        topics: [
          {
            title: "Express.js",
            content: [
              "Server Setup",
              "Routing",
              "Middleware",
              "Request & Response"
            ],
          },
          {
            title: "REST APIs",
            content: [
              "CRUD APIs",
              "Postman Testing",
              "JSON Handling"
            ],
          },
          {
            title: "Mini Project",
            content: [
              "Basic API",
              "User CRUD System",
              "Route Handling"
            ],
          },
        ],

        about: "Build backend APIs",
        learn: "Create RESTful services",
      },

      {
        duration: "2 Months",
        level: "Junior Developer",
        highlights: [
          "Advanced Practical Training",
          "Internship Certificate",
          "E-commerce Project",
          "Technology Knowledge  Sessions"
        ],

        topics: [
          {
            title: "Database",
            content: [
              "MongoDB",
              "Mongoose",
              "Schema Design",
              "CRUD Operations"
            ],
          },
          {
            title: "Authentication",
            content: [
              "JWT",
              "Login/Register",
              "Password Hashing"
            ],
          },
          {
            title: "Project",
            content: [
              "Auth API",
              "User Dashboard Backend",
              "Secure Routes"
            ],
          },
        ],

        about: "Database-driven backend",
        learn: "Build secure backend systems",
      },

      {
        duration: "3 Months",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement"
        ],

        topics: [
          {
            title: "Advanced Backend",
            content: [
              "MVC Architecture",
              "Error Handling",
              "Validation",
              "Logging"
            ],
          },
          {
            title: "API Integration",
            content: [
              "Third-party APIs",
              "Async Handling",
              "Data Processing"
            ],
          },
          {
            title: "Project",
            content: [
              "Dashboard Backend",
              "API Integration",
              "Structured Codebase"
            ],
          },
        ],

        about: "Scalable backend systems",
        learn: "Build structured APIs",
      },

      {
        duration: "4 Months",
        level: "Advanced",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement",
          "Mock Interview Practice & HR Round Preparation"
        ],

        topics: [
          {
            title: "Optimization",
            content: [
              "Caching",
              "Performance Tuning",
              "Security Best Practices"
            ],
          },
          {
            title: "File & Media",
            content: [
              "File Upload",
              "Cloud Storage",
              "Image Handling"
            ],
          },
          {
            title: "Project",
            content: [
              "Advanced Backend System",
              "Secure APIs",
              "Optimized Performance"
            ],
          },
        ],

        about: "Advanced Node development",
        learn: "Optimize production systems",
      },

      {
        duration: "6 Months",
        level: "Professional",
        highlights: [
          "Complete Practical Mastery",
          "Internship Certificate",
          "Full E-commerce Project + Payment Gateway + Live Lunch",
          "Industry Knowledge Sessions",
          "Interview Pre + Personality Dev",
          "Mock Interview ,Group Discussion & Technical Interview Practice"
        ],

        topics: [
          {
            title: "DevOps",
            content: [
              "Docker",
              "CI/CD",
              "Deployment",
              "Cloud Hosting"
            ],
          },
          {
            title: "Live Projects",
            content: [
              "Client Work",
              "Team Collaboration",
              "Git Workflow"
            ],
          },
          {
            title: "Industry Practice",
            content: [
              "Agile Process",
              "Task Management",
              "Code Reviews"
            ],
          },
        ],

        about: "Industry-level backend development",
        learn: "Work on real-world systems",
      },

      {
        duration: "1 Year",
        level: "Expert",
        highlights: [
          "Full Stack Practical Mastery",
          "Experience Certificate + Internship Certificate",
          "Live Industry Project + Deployment",
          "6 Month Internship +  6 Month Probation",
          "Salary Slip + Increment Experience ",
          "Mock Interviews,GRoup Discussions,Technical Interview Practice,HR Round Training, and Job Placement Guidance"
        ],

        topics: [
          {
            title: "System Design",
            content: [
              "Scalable Architecture",
              "Microservices Basics",
              "High Performance Systems"
            ],
          },
          {
            title: "Advanced Backend",
            content: [
              "Advanced APIs",
              "Security",
              "Best Practices"
            ],
          },
          {
            title: "Enterprise Project",
            content: [
              "Production Backend",
              "Live Deployment",
              "Portfolio Project"
            ],
          },
        ],

        about: "Complete Node.js mastery",
        learn: "Become backend developer",
      },
    ],
  },
  // ================= JAVA =================
  {
    id: 3,
     courseId: 2,
    title: "Java Development",
    slug: "java-development",
    desc: "Core Java + Spring Boot",
    icon: FaJava,

    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        highlights: [
          "Practical Training",
          "Internship Certificate",
          "Mini Project",
          "Knowledge Boost Sessions"
        ],
        topics: [
          {
            title: "Java Basics",
            content: [
              "Variables",
              "Data Types",
              "Operators",
              "Control Statements"
            ],
          },
          {
            title: "OOP Concepts",
            content: [
              "Classes & Objects",
              "Inheritance",
              "Polymorphism",
              "Encapsulation"
            ],
          },
          {
            title: "Basic Project",
            content: [
              "Console Application",
              "User Input Handling",
              "Basic Logic Building"
            ],
          },
        ],

        about: "Introduction to Java programming",
        learn: "Understand core Java fundamentals",
      },

      {
        duration: "1 Month",
        level: "Beginner",
        highlights: [
          "Core Practical Sessions",
          "Internship Certificate",
          "Mini Project Implementation",
          "Knowledge & Case Studies"
        ],
        topics: [
          {
            title: "Advanced Java",
            content: [
              "Collections",
              "Exception Handling",
              "File Handling",
              "Multithreading Basics"
            ],
          },
          {
            title: "JDBC",
            content: [
              "Database Connection",
              "CRUD Operations",
              "SQL Integration"
            ],
          },
          {
            title: "Mini Project",
            content: [
              "Database Application",
              "User Data Management",
              "CRUD System"
            ],
          },
        ],

        about: "Java with database integration",
        learn: "Build data-driven applications",
      },

      {
        duration: "2 Months",
        level: "Junior Developer",
        highlights: [
          "Advanced Practical Training",
          "Internship Certificate",
          "E-commerce Project",
          "Technology Knowledge  Sessions"
        ],
        topics: [
          {
            title: "Spring Boot Basics",
            content: [
              "Project Setup",
              "Controllers",
              "Dependency Injection",
              "REST APIs"
            ],
          },
          {
            title: "Database Integration",
            content: [
              "Spring Data JPA",
              "Entity Mapping",
              "CRUD APIs"
            ],
          },
          {
            title: "Project",
            content: [
              "REST API Backend",
              "Database Integration",
              "API Testing"
            ],
          },
        ],

        about: "Backend development with Spring Boot",
        learn: "Build RESTful services",
      },

      {
        duration: "3 Months",
        level: "Intermediate",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement"
        ],
        topics: [
          {
            title: "Authentication",
            content: [
              "Spring Security",
              "JWT",
              "User Roles",
              "Secure APIs"
            ],
          },
          {
            title: "Advanced APIs",
            content: [
              "Pagination",
              "Filtering",
              "Error Handling"
            ],
          },
          {
            title: "Project",
            content: [
              "Secure Backend System",
              "User Dashboard Backend",
              "Role-based Access"
            ],
          },
        ],

        about: "Secure backend systems",
        learn: "Build production-ready APIs",
      },

      {
        duration: "4 Months",
        level: "Advanced",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement",
          "Mock Interview Practice & HR Round Preparation"
        ],
        topics: [
          {
            title: "Architecture",
            content: [
              "Layered Architecture",
              "Microservices Basics",
              "Best Practices"
            ],
          },
          {
            title: "Optimization",
            content: [
              "Caching",
              "Performance Tuning",
              "Logging"
            ],
          },
          {
            title: "Project",
            content: [
              "Scalable Backend",
              "Optimized APIs",
              "Structured Codebase"
            ],
          },
        ],

        about: "Advanced backend development",
        learn: "Build scalable systems",
      },

      {
        duration: "6 Months",
        level: "Professional",
        highlights: [
          "Complete Practical Mastery",
          "Internship Certificate",
          "Full E-commerce Project + Payment Gateway + Live Lunch",
          "Industry Knowledge Sessions",
          "Interview Pre + Personality Dev",
          "Mock Interview ,Group Discussion & Technical Interview Practice"
        ],
        topics: [
          {
            title: "DevOps",
            content: [
              "Docker",
              "CI/CD",
              "Cloud Deployment",
              "AWS Basics"
            ],
          },
          {
            title: "Live Projects",
            content: [
              "Enterprise Application",
              "Client Work",
              "Team Collaboration"
            ],
          },
          {
            title: "Industry Practice",
            content: [
              "Agile Methodology",
              "Code Reviews",
              "Task Management"
            ],
          },
        ],

        about: "Industry-level experience",
        learn: "Work on real-world systems",
      },

      {
        duration: "1 Year",
        level: "Expert",
        highlights: [
          "Full Stack Practical Mastery",
          "Experience Certificate + Internship Certificate",
          "Live Industry Project + Deployment",
          "6 Month Internship +  6 Month Probation",
          "Salary Slip + Increment Experience ",
          "Mock Interviews,GRoup Discussions,Technical Interview Practice,HR Round Training, and Job Placement Guidance"
        ],
        topics: [
          {
            title: "System Design",
            content: [
              "Scalable Architecture",
              "High Performance Systems",
              "Best Practices"
            ],
          },
          {
            title: "Advanced Backend",
            content: [
              "Microservices",
              "Security",
              "Enterprise Solutions"
            ],
          },
          {
            title: "Enterprise Project",
            content: [
              "Full Backend System",
              "Live Deployment",
              "Portfolio Project"
            ],
          },
        ],

        about: "Complete Java mastery",
        learn: "Become job-ready Java developer",
      },
    ],
  },

  
  // ================= LARAVEL =================
  {
    id: 4,
     courseId: 1,
    title: "PHP Laravel",
    slug: "php-laravel",
    desc: "PHP Full Stack Framework",
    icon: FaPhp,

    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        highlights: [
          "Practical Training",
          "Internship Certificate",
          "Mini Project",
          "Knowledge Boost Sessions"
        ],

        topics: [
          {
            title: "PHP Basics",
            content: [
              "Syntax",
              "Variables",
              "Functions",
              "Forms Handling"
            ],
          },
          {
            title: "Laravel Setup",
            content: [
              "Install Laravel",
              "Project Structure",
              "Artisan Commands",
              "Routing Basics"
            ],
          },
          {
            title: "Basic Project",
            content: [
              "Simple Laravel App",
              "Routing & Views",
              "Basic UI"
            ],
          },
        ],

        about: "Introduction to PHP and Laravel framework",
        learn: "Understand Laravel basics and setup",
      },

      {
        duration: "1 Month",
        level: "Beginner",
        highlights: [
          "Core Practical Sessions",
          "Internship Certificate",
          "Mini Project Implementation",
          "Knowledge & Case Studies"
        ],

        topics: [
          {
            title: "Laravel Core",
            content: [
              "MVC Structure",
              "Blade Templates",
              "Controllers",
              "Routing"
            ],
          },
          {
            title: "Database",
            content: [
              "Migration",
              "Models",
              "Eloquent ORM",
              "CRUD Operations"
            ],
          },
          {
            title: "Mini Project",
            content: [
              "CRUD Application",
              "Data Management",
              "Admin Panel Basics"
            ],
          },
        ],

        about: "Core Laravel development",
        learn: "Build database-driven applications",
      },

      {
        duration: "2 Months",
        level: "Junior Developer",
        highlights: [
          "Advanced Practical Training",
          "Internship Certificate",
          "E-commerce Project",
          "Technology Knowledge  Sessions"
        ],

        topics: [
          {
            title: "Authentication",
            content: [
              "Login & Registration",
              "Session Management",
              "Validation",
              "Password Security"
            ],
          },
          {
            title: "File Handling",
            content: [
              "File Upload",
              "Storage",
              "Image Handling"
            ],
          },
          {
            title: "Project",
            content: [
              "Auth System",
              "User Dashboard",
              "Secure Routes"
            ],
          },
        ],

        about: "Secure Laravel development",
        learn: "Build authentication systems",
      },

      {
        duration: "3 Months",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement"
        ],
        topics: [
          {
            title: "APIs",
            content: [
              "REST APIs",
              "API Routing",
              "JSON Response",
              "Postman Testing"
            ],
          },
          {
            title: "JWT Authentication",
            content: [
              "Token-based Auth",
              "Secure APIs",
              "User Authorization"
            ],
          },
          {
            title: "Project",
            content: [
              "API Backend",
              "Frontend Integration",
              "Secure API System"
            ],
          },
        ],

        about: "API development with Laravel",
        learn: "Build RESTful APIs",
      },

      {
        duration: "4 Months",
        level: "Advanced",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement",
          "Mock Interview Practice & HR Round Preparation"
        ],

        topics: [
          {
            title: "Advanced Laravel",
            content: [
              "Caching",
              "Queue Jobs",
              "Optimization",
              "Security"
            ],
          },
          {
            title: "Architecture",
            content: [
              "Project Structure",
              "Best Practices",
              "Code Organization"
            ],
          },
          {
            title: "Project",
            content: [
              "Optimized Backend",
              "Secure System",
              "Performance App"
            ],
          },
        ],

        about: "Advanced backend development",
        learn: "Optimize and scale applications",
      },

      {
        duration: "6 Months",
        level: "Professional",
        highlights: [
          "Complete Practical Mastery",
          "Internship Certificate",
          "Full E-commerce Project + Payment Gateway + Live Lunch",
          "Industry Knowledge Sessions",
          "Interview Pre + Personality Dev",
          "Mock Interview ,Group Discussion & Technical Interview Practice"
        ],

        topics: [
          {
            title: "Deployment",
            content: [
              "Hosting",
              "cPanel",
              "Docker Basics",
              "CI/CD"
            ],
          },
          {
            title: "Live Projects",
            content: [
              "E-commerce Website",
              "Payment Gateway",
              "Client Projects"
            ],
          },
          {
            title: "Industry Practice",
            content: [
              "Git Workflow",
              "Team Collaboration",
              "Agile Development"
            ],
          },
        ],

        about: "Real-world Laravel development",
        learn: "Work on production projects",
      },

      {
        duration: "1 Year",
        level: "Expert",
        highlights: [
          "Full Stack Practical Mastery",
          "Experience Certificate + Internship Certificate",
          "Live Industry Project + Deployment",
          "6 Month Internship +  6 Month Probation",
          "Salary Slip + Increment Experience ",
          "Mock Interviews,GRoup Discussions,Technical Interview Practice,HR Round Training, and Job Placement Guidance"
        ],

        topics: [
          {
            title: "Advanced Systems",
            content: [
              "Scalable Architecture",
              "High Performance Apps",
              "Security Best Practices"
            ],
          },
          {
            title: "Career Preparation",
            content: [
              "Portfolio",
              "Resume",
              "Freelancing",
              "Interview Prep"
            ],
          },
          {
            title: "Enterprise Project",
            content: [
              "Full Stack Application",
              "Live Deployment",
              "Client-level Project"
            ],
          },
        ],

        about: "Complete Laravel mastery",
        learn: "Become job-ready Laravel developer",
      },
    ],
  },
 // ================= .NET =================
  {
    id: 5,
     courseId: 3,
    title: ".NET Development",
    slug: "dotnet-development",
    desc: "ASP.NET Core Backend",
    icon: SiDotnet,

    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        highlights: [
          "Practical Training",
          "Internship Certificate",
          "Mini Project",
          "Knowledge Boost Sessions"
        ],

        topics: [
          {
            title: "C# Basics",
            content: [
              "Variables",
              "OOP Concepts",
              "Collections",
              "Exception Handling"
            ],
          },
          {
            title: ".NET Setup",
            content: [
              ".NET SDK Installation",
              "Project Creation",
              "CLI Commands",
              "Project Structure"
            ],
          },
          {
            title: "Basic Project",
            content: [
              "Console Application",
              "Simple CRUD Logic",
              "User Input Handling"
            ],
          },
        ],

        about: "Introduction to C# and .NET fundamentals",
        learn: "Write basic C# programs and understand .NET environment",
      },

      {
        duration: "1 Month",
        level: "Beginner",
        highlights: [
          "Core Practical Sessions",
          "Internship Certificate",
          "Mini Project Implementation",
          "Knowledge & Case Studies"
        ],
        topics: [
          {
            title: ".NET Core",
            content: [
              "ASP.NET MVC",
              "Routing",
              "Controllers",
              "Views"
            ],
          },
          {
            title: "Forms & CRUD",
            content: [
              "Form Handling",
              "CRUD Operations",
              "Model Binding"
            ],
          },
          {
            title: "Mini Project",
            content: [
              "Basic Web App",
              "User Form System",
              "Data Display"
            ],
          },
        ],

        about: "Web development using ASP.NET Core",
        learn: "Build basic web applications",
      },

      {
        duration: "2 Months",
        level: "Junior Developer",
        highlights: [
          "Advanced Practical Training",
          "Internship Certificate",
          "E-commerce Project",
          "Technology Knowledge  Sessions"
        ],

        topics: [
          {
            title: "Web APIs",
            content: [
              "REST API",
              "Routing",
              "Controllers",
              "JSON Handling"
            ],
          },
          {
            title: "Authentication",
            content: [
              "JWT",
              "User Login",
              "Authorization"
            ],
          },
          {
            title: "Database",
            content: [
              "Entity Framework",
              "Migrations",
              "CRUD Operations"
            ],
          },
        ],

        about: "Backend API development",
        learn: "Build secure APIs with database",
      },

      {
        duration: "3 Months",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement"
        ],


        topics: [
          {
            title: "Advanced Concepts",
            content: [
              "LINQ",
              "Architecture",
              "Dependency Injection",
              "Layered Structure"
            ],
          },
          {
            title: "Project Structure",
            content: [
              "Clean Architecture",
              "Repository Pattern",
              "Service Layer"
            ],
          },
          {
            title: "Project",
            content: [
              "API + Frontend Integration",
              "Dashboard Backend",
              "Authentication System"
            ],
          },
        ],

        about: "Scalable application structure",
        learn: "Build structured backend systems",
      },

      {
        duration: "4 Months",
        level: "Advanced",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement",
          "Mock Interview Practice & HR Round Preparation"
        ],

        topics: [
          {
            title: "Microservices",
            content: [
              "Microservices Architecture",
              "API Gateway",
              "Service Communication"
            ],
          },
          {
            title: "Optimization",
            content: [
              "Performance Tuning",
              "Caching",
              "Security Best Practices"
            ],
          },
          {
            title: "Project",
            content: [
              "Scalable Backend System",
              "Optimized APIs",
              "Secure Architecture"
            ],
          },
        ],

        about: "Advanced backend development",
        learn: "Build scalable enterprise systems",
      },

      {
        duration: "6 Months",
        level: "Professional",

        highlights: [
          "Complete Practical Mastery",
          "Internship Certificate",
          "Full E-commerce Project + Payment Gateway + Live Lunch",
          "Industry Knowledge Sessions",
          "Interview Pre + Personality Dev",
          "Mock Interview ,Group Discussion & Technical Interview Practice"
        ],
        topics: [
          {
            title: "Cloud & DevOps",
            content: [
              "Azure",
              "CI/CD",
              "Deployment",
              "Docker"
            ],
          },
          {
            title: "Live Projects",
            content: [
              "Enterprise Application",
              "Team Collaboration",
              "Git Workflow"
            ],
          },
          {
            title: "Industry Practice",
            content: [
              "Agile Workflow",
              "Code Reviews",
              "Task Management"
            ],
          },
        ],

        about: "Industry-level development experience",
        learn: "Work on real-world enterprise apps",
      },

      {
        duration: "1 Year",
        level: "Expert",
        highlights: [
          "Full Stack Practical Mastery",
          "Experience Certificate + Internship Certificate",
          "Live Industry Project + Deployment",
          "6 Month Internship +  6 Month Probation",
          "Salary Slip + Increment Experience ",
          "Mock Interviews,GRoup Discussions,Technical Interview Practice,HR Round Training, and Job Placement Guidance"
        ],

        topics: [
          {
            title: "Advanced Architecture",
            content: [
              "System Design",
              "Scalability",
              "High Performance Systems"
            ],
          },
          {
            title: "Career Preparation",
            content: [
              "Resume",
              "Interview Prep",
              "Portfolio"
            ],
          },
          {
            title: "Enterprise Project",
            content: [
              "Full Enterprise Backend",
              "Microservices System",
              "Live Deployment"
            ],
          },
        ],

        about: "Complete .NET mastery program",
        learn: "Become job-ready .NET developer",
      },
    ],
  }
,
  // ================= REACT =================
  {
    id: 6,
     courseId: 7,
    title: "React.js",
    slug: "react-js",
    desc: "Frontend Library",
    icon: FaReact,

    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        highlights: [
          "Practical Training",
          "Internship Certificate",
          "Mini Project",
          "Knowledge Boost Sessions"
        ],

        topics: [
          {
            title: "Frontend Basics",
            content: [
              "HTML",
              "CSS",
              "JavaScript Basics",
              "DOM Manipulation"
            ],
          },
          {
            title: "React Introduction",
            content: [
              "React Setup",
              "JSX",
              "Components",
              "Props"
            ],
          },
          {
            title: "Basic Project",
            content: [
              "Static UI Page",
              "Simple Components",
              "Basic Styling"
            ],
          },
        ],

        about: "Introduction to React fundamentals",
        learn: "Understand React basics and UI building",
      },

      {
        duration: "1 Month",
        level: "Beginner",
        highlights: [
          "Core Practical Sessions",
          "Internship Certificate",
          "Mini Project Implementation",
          "Knowledge & Case Studies"
        ],

        topics: [
          {
            title: "Core React",
            content: [
              "useState",
              "useEffect",
              "Event Handling",
              "Forms"
            ],
          },
          {
            title: "Component Structure",
            content: [
              "Reusable Components",
              "Props Drilling",
              "Folder Structure"
            ],
          },
          {
            title: "Mini Project",
            content: [
              "Todo App",
              "Add/Delete Tasks",
              "User Interaction"
            ],
          },
        ],

        about: "Build dynamic React apps",
        learn: "Create reusable UI components",
      },

      {
        duration: "2 Months",
        level: "Junior Developer",
        highlights: [
          "Advanced Practical Training",
          "Internship Certificate",
          "E-commerce Project",
          "Technology Knowledge  Sessions"
        ],

        topics: [
          {
            title: "Routing",
            content: [
              "React Router",
              "Navigation",
              "Dynamic Routes",
              "Protected Routes"
            ],
          },
          {
            title: "API Integration",
            content: [
              "Fetch API",
              "Axios",
              "Error Handling"
            ],
          },
          {
            title: "Project",
            content: [
              "Multi-page App",
              "API Data Display",
              "Frontend Integration"
            ],
          },
        ],

        about: "Build interactive apps",
        learn: "Handle routing and APIs",
      },

      {
        duration: "3 Months",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement"
        ],
        topics: [
          {
            title: "State Management",
            content: [
              "Context API",
              "Global State",
              "State Sharing"
            ],
          },
          {
            title: "Advanced Hooks",
            content: [
              "Custom Hooks",
              "Performance Hooks",
              "Optimization"
            ],
          },
          {
            title: "Project",
            content: [
              "Dashboard App",
              "User Panel",
              "Dynamic UI"
            ],
          },
        ],

        about: "Manage complex applications",
        learn: "Handle global state efficiently",
      },

      {
        duration: "4 Months",
        level: "Advanced",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement",
          "Mock Interview Practice & HR Round Preparation"
        ],

        topics: [
          {
            title: "Optimization",
            content: [
              "Lazy Loading",
              "Code Splitting",
              "Performance Optimization"
            ],
          },
          {
            title: "Best Practices",
            content: [
              "Clean Code",
              "Reusable Logic",
              "Project Structure"
            ],
          },
          {
            title: "Project",
            content: [
              "Advanced UI App",
              "Optimized Performance",
              "Reusable Components"
            ],
          },
        ],

        about: "Advanced frontend development",
        learn: "Optimize and scale applications",
      },

      {
        duration: "6 Months",
        level: "Professional",
        highlights: [
          "Complete Practical Mastery",
          "Internship Certificate",
          "Full E-commerce Project + Payment Gateway + Live Lunch",
          "Industry Knowledge Sessions",
          "Interview Pre + Personality Dev",
          "Mock Interview ,Group Discussion & Technical Interview Practice"
        ],

        topics: [
          {
            title: "Testing & Deployment",
            content: [
              "Unit Testing",
              "Build Process",
              "Deployment",
              "Hosting"
            ],
          },
          {
            title: "Live Projects",
            content: [
              "Client Projects",
              "Team Collaboration",
              "Git Workflow"
            ],
          },
          {
            title: "Industry Practice",
            content: [
              "Agile Methodology",
              "Task Management",
              "Code Reviews"
            ],
          },
        ],

        about: "Real-world React development",
        learn: "Work on production apps",
      },

      {
        duration: "1 Year",
        level: "Expert",
        highlights: [
          "Full Stack Practical Mastery",
          "Experience Certificate + Internship Certificate",
          "Live Industry Project + Deployment",
          "6 Month Internship +  6 Month Probation",
          "Salary Slip + Increment Experience ",
          "Mock Interviews,GRoup Discussions,Technical Interview Practice,HR Round Training, and Job Placement Guidance"
        ],

        topics: [
          {
            title: "Advanced React",
            content: [
              "Next.js Basics",
              "SSR",
              "SEO",
              "Performance"
            ],
          },
          {
            title: "Architecture",
            content: [
              "Scalable Apps",
              "Folder Structure",
              "Best Practices"
            ],
          },
          {
            title: "Enterprise Project",
            content: [
              "Full Production App",
              "Live Deployment",
              "Portfolio Project"
            ],
          },
        ],

        about: "Complete React mastery",
        learn: "Become job-ready frontend developer",
      },
    ],
  }
  ,
  // ================= VUE =================
  {
    id: 8,
     courseId: 9,
    title: "Vue.js",
    slug: "vue-js",
    desc: "Vue Framework",
    icon: FaVuejs,

    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        highlights: [
          "Practical Training",
          "Internship Certificate",
          "Mini Project",
          "Knowledge Boost Sessions"
        ],

        topics: [
          {
            title: "Vue Setup",
            content: [
              "Vue CLI",
              "Project Structure",
              "Create App",
              "Folder Understanding"
            ],
          },
          {
            title: "Directives",
            content: [
              "v-if",
              "v-for",
              "v-bind",
              "v-model"
            ],
          },
          {
            title: "Basic Project",
            content: [
              "Static UI Page",
              "Simple Components",
              "Basic Styling"
            ],
          },
        ],

        about: "Intro to Vue fundamentals",
        learn: "Build simple UI using Vue",
      },

      {
        duration: "1 Month",
        level: "Beginner",
        highlights: [
          "Core Practical Sessions",
          "Internship Certificate",
          "Mini Project Implementation",
          "Knowledge & Case Studies"
        ],

        topics: [
          {
            title: "Components",
            content: [
              "Reusable Components",
              "Props",
              "Events",
              "Component Communication"
            ],
          },
          {
            title: "Data Binding",
            content: [
              "Two-way Binding",
              "Form Handling",
              "Reactive Data"
            ],
          },
          {
            title: "Mini Project",
            content: [
              "Todo App",
              "Add/Delete Tasks",
              "UI Interaction"
            ],
          },
        ],

        about: "Build dynamic Vue apps",
        learn: "Create reusable components",
      },

      {
        duration: "2 Months",
        level: "Junior Developer",
        highlights: [
          "Advanced Practical Training",
          "Internship Certificate",
          "E-commerce Project",
          "Technology Knowledge  Sessions"
        ],

        topics: [
          {
            title: "Vue Router",
            content: [
              "Routing Setup",
              "Navigation",
              "Dynamic Routes"
            ],
          },
          {
            title: "Forms & Validation",
            content: [
              "Form Inputs",
              "Validation",
              "User Input Handling"
            ],
          },
          {
            title: "Project",
            content: [
              "Form Application",
              "Multi-page App",
              "Routing Integration"
            ],
          },
        ],

        about: "Multi-page app development",
        learn: "Build structured frontend apps",
      },

      {
        duration: "3 Months",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement"
        ],
        topics: [
          {
            title: "State Management",
            content: [
              "Vuex",
              "Global State",
              "Store Structure"
            ],
          },
          {
            title: "API Integration",
            content: [
              "Axios",
              "Fetch Data",
              "Async Handling"
            ],
          },
          {
            title: "Project",
            content: [
              "Dashboard App",
              "API Data Display",
              "User Interaction"
            ],
          },
        ],

        about: "Dynamic & data-driven apps",
        learn: "Handle APIs and state",
      },

      {
        duration: "4 Months",
        level: "Advanced",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement",
          "Mock Interview Practice & HR Round Preparation"
        ],

        topics: [
          {
            title: "Modern State",
            content: [
              "Pinia",
              "Advanced Store",
              "State Optimization"
            ],
          },
          {
            title: "Performance",
            content: [
              "Lazy Loading",
              "Optimization",
              "Best Practices"
            ],
          },
          {
            title: "Project",
            content: [
              "Advanced UI App",
              "Performance Optimized",
              "Reusable Architecture"
            ],
          },
        ],

        about: "Advanced frontend architecture",
        learn: "Optimize large apps",
      },

      {
        duration: "6 Months",
        level: "Professional",
        highlights: [
          "Complete Practical Mastery",
          "Internship Certificate",
          "Full E-commerce Project + Payment Gateway + Live Lunch",
          "Industry Knowledge Sessions",
          "Interview Pre + Personality Dev",
          "Mock Interview ,Group Discussion & Technical Interview Practice"
        ],

        topics: [
          {
            title: "Testing",
            content: [
              "Vue Test Utils",
              "Unit Testing",
              "Debugging"
            ],
          },
          {
            title: "Deployment",
            content: [
              "Hosting",
              "Build Process",
              "Environment Setup"
            ],
          },
          {
            title: "Live Project",
            content: [
              "Production App",
              "Real Client Work",
              "Team Collaboration"
            ],
          },
        ],

        about: "Real-world development",
        learn: "Build production apps",
      },

      {
        duration: "1 Year",
        level: "Expert",
        highlights: [
          "Full Stack Practical Mastery",
          "Experience Certificate + Internship Certificate",
          "Live Industry Project + Deployment",
          "6 Month Internship +  6 Month Probation",
          "Salary Slip + Increment Experience ",
          "Mock Interviews,GRoup Discussions,Technical Interview Practice,HR Round Training, and Job Placement Guidance"
        ],

        topics: [
          {
            title: "Nuxt.js",
            content: [
              "SSR",
              "SEO",
              "Performance"
            ],
          },
          {
            title: "Architecture",
            content: [
              "Scalable Apps",
              "Folder Structure",
              "Code Splitting"
            ],
          },
          {
            title: "Enterprise Project",
            content: [
              "Large Scale App",
              "Team Workflow",
              "Production Ready"
            ],
          },
        ],

        about: "Enterprise-level frontend",
        learn: "Become Vue expert",
      },
    ],
  },


  // ================= MERN =================
  {
    id: 7,
     courseId: 6,
    title: "MERN Stack",
    slug: "mern-stack",
    desc: "MongoDB + Express + React + Node",
    icon: FaReact,

    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        highlights: [
          "Practical Training",
          "Internship Certificate",
          "Mini Project",
          "Knowledge Boost Sessions"
        ],

        topics: [
          {
            title: "Frontend Basics",
            content: [
              "HTML",
              "CSS",
              "JavaScript Basics",
              "DOM Manipulation"
            ],
          },
          {
            title: "React Introduction",
            content: [
              "JSX",
              "Components",
              "Props",
              "Basic UI"
            ],
          },
          {
            title: "Backend Intro",
            content: [
              "Node.js Setup",
              "Basic Server",
              "Routing"
            ],
          },
        ],

        about: "Introduction to full-stack development",
        learn: "Understand MERN fundamentals",
      },

      {
        duration: "1 Month",
        level: "Beginner",
        highlights: [
          "Core Practical Sessions",
          "Internship Certificate",
          "Mini Project Implementation",
          "Knowledge & Case Studies"
        ],

        topics: [
          {
            title: "React Development",
            content: [
              "Hooks (useState, useEffect)",
              "Event Handling",
              "Forms",
              "Component Structure"
            ],
          },
          {
            title: "Backend with Express",
            content: [
              "Express.js",
              "Routing",
              "Middleware",
              "REST APIs"
            ],
          },
          {
            title: "Mini Project",
            content: [
              "Frontend + Backend Integration",
              "Simple CRUD App",
              "API Connection"
            ],
          },
        ],

        about: "Build basic full-stack apps",
        learn: "Create frontend + backend apps",
      },

      {
        duration: "2 Months",
        level: "Junior Developer",
        highlights: [
          "Advanced Practical Training",
          "Internship Certificate",
          "E-commerce Project",
          "Technology Knowledge  Sessions"
        ],

        topics: [
          {
            title: "Database",
            content: [
              "MongoDB",
              "Collections",
              "Mongoose Models",
              "CRUD Operations"
            ],
          },
          {
            title: "Authentication",
            content: [
              "JWT Authentication",
              "Login/Register",
              "Password Hashing"
            ],
          },
          {
            title: "Project",
            content: [
              "Full Auth System",
              "User Dashboard",
              "Secure Routes"
            ],
          },
        ],

        about: "Secure full-stack apps",
        learn: "Build database-driven apps",
      },

      {
        duration: "3 Months",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement"
        ],
        topics: [
          {
            title: "Advanced React",
            content: [
              "Context API",
              "State Management",
              "Routing",
              "Protected Routes"
            ],
          },
          {
            title: "API Integration",
            content: [
              "Axios",
              "Fetch APIs",
              "Error Handling"
            ],
          },
          {
            title: "Project",
            content: [
              "Dashboard App",
              "User Panel",
              "Dynamic Data UI"
            ],
          },
        ],

        about: "Dynamic and scalable apps",
        learn: "Handle complex frontend logic",
      },

      {
        duration: "4 Months",
        level: "Advanced",
        highlights: [
          "Practical Training + Frameworks",
          "Internship Certificate",
          "E-commerce + Payment Gateway Project",
          "Realtime problem solving Skills",
          "Communication &Personality Enhancement",
          "Mock Interview Practice & HR Round Preparation"
        ],

        topics: [
          {
            title: "Optimization",
            content: [
              "Performance Optimization",
              "Lazy Loading",
              "Code Splitting"
            ],
          },
          {
            title: "Backend Scaling",
            content: [
              "MVC Architecture",
              "Error Handling",
              "File Upload"
            ],
          },
          {
            title: "Project",
            content: [
              "E-commerce App",
              "Admin Panel",
              "Full CRUD System"
            ],
          },
        ],

        about: "Advanced MERN development",
        learn: "Build scalable applications",
      },

      {
        duration: "6 Months",
        level: "Professional",
        highlights: [
          "Complete Practical Mastery",
          "Internship Certificate",
          "Full E-commerce Project + Payment Gateway + Live Lunch",
          "Industry Knowledge Sessions",
          "Interview Pre + Personality Dev",
          "Mock Interview ,Group Discussion & Technical Interview Practice"
        ],

        topics: [
          {
            title: "DevOps",
            content: [
              "Docker",
              "CI/CD",
              "Cloud Deployment"
            ],
          },
          {
            title: "Live Projects",
            content: [
              "Client Projects",
              "Team Collaboration",
              "Git Workflow"
            ],
          },
          {
            title: "Industry Practice",
            content: [
              "Agile Methodology",
              "Task Management",
              "Code Reviews"
            ],
          },
        ],

        about: "Real-world development experience",
        learn: "Work on production apps",
      },

      {
        duration: "1 Year",
        level: "Expert",
        highlights: [
          "Full Stack Practical Mastery",
          "Experience Certificate + Internship Certificate",
          "Live Industry Project + Deployment",
          "6 Month Internship +  6 Month Probation",
          "Salary Slip + Increment Experience ",
          "Mock Interviews,GRoup Discussions,Technical Interview Practice,HR Round Training, and Job Placement Guidance"
        ],

        topics: [
          {
            title: "System Design",
            content: [
              "Scalable Architecture",
              "Performance Systems",
              "Best Practices"
            ],
          },
          {
            title: "Advanced Stack",
            content: [
              "Microservices Basics",
              "Advanced APIs",
              "Security"
            ],
          },
          {
            title: "Enterprise Project",
            content: [
              "Full Stack Production App",
              "Live Deployment",
              "Portfolio Project"
            ],
          },
        ],

        about: "Complete MERN mastery",
        learn: "Become full-stack developer",
      },
    ],
  },

 

 
];

export default internshipData;