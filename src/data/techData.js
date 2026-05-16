import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaJava,
  FaSwift,
  FaAws,
  FaShieldAlt,
  FaLock,
  FaRobot,
  FaBrain,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb, SiFirebase, SiFlutter, SiKotlin } from "react-icons/si";


const techData = [
  {
    title: "Backend Technology",
    description:
      `Backend development is the core foundation of any modern application. It handles server-side logic, authentication, database management, and ensures smooth communication between frontend and database systems.

Without backend systems, applications cannot process user requests, store data, or perform business logic. It acts as the brain of the application where all computations and decisions are made securely.

In today’s industry, backend developers are highly in demand because every scalable system—whether it is e-commerce, banking, or social media—depends heavily on strong backend architecture.`,

    items: ["Python Django", "Node.js", "Java Spring Boot", "PHP Laravel", ".NET Development"],
    icons: [FaPython, FaNodeJs, FaJava],
    features: ["API Development", "Authentication", "Database handling"],
    useCases: ["Web apps", "Mobile apps", "APIs"],
    roadmap: ["Learn Node.js or Python", "Build REST APIs", "Connect Database", "Deploy Backend"],
    projects: ["Blog API", "E-commerce API"],
  },

  {
    title: "Frontend Technology",
    description:
      `Frontend development focuses on creating the visual part of a website or application that users directly interact with. It includes layout design, responsiveness, animations, and user experience optimization.

A strong frontend ensures that users can easily navigate and interact with the application. It transforms backend data into visually appealing and user-friendly interfaces using modern frameworks like React, Angular, and Vue.

In today’s digital world, frontend developers play a crucial role in shaping user perception of a product. A well-designed UI/UX can significantly increase user engagement, retention, and overall business success.`,

    items: ["React.js", "Angular","JavaScript", "Vue.js"],
    icons: [FaAngular, FaReact, FaHtml5],
    features: ["UI Development", "Responsive Design", "Component-based Architecture"],
    useCases: ["Websites", "Dashboards", "Web apps"],
    roadmap: ["Learn HTML/CSS/JS", "Master React or Angular", "Build UI Projects", "Learn State Management"],
    projects: ["Portfolio Website", "Dashboard UI"],
  },

  {
    title: "Mobile Technology",
    description:
      `Mobile application development involves building software applications specifically designed for smartphones and tablets. It covers both Android and iOS platforms using technologies like Flutter, Kotlin, and Swift.

Mobile apps have become essential in daily life, from ordering food to booking tickets and managing finances. Developers focus on performance, usability, and offline capabilities to ensure smooth user experience.

With the rise of smartphones, mobile development has become one of the fastest-growing fields in IT. Companies are heavily investing in mobile-first strategies, making mobile developers highly valuable in the job market.`,

    items: ["React Native", "Android Development","Flutter","iOS Development",  "Xamarin"],
    icons: [SiFlutter, SiKotlin, FaSwift],
    features: ["Cross-platform Apps", "Native Performance", "UI/UX Optimization"],
    useCases: ["Mobile apps", "Hybrid apps", "Enterprise apps"],
    roadmap: ["Learn Dart or Kotlin", "Build mobile UI", "Connect APIs", "Publish apps"],
    projects: ["Chat App", "Food Delivery App"],
  },

  {
    title: "Database Technology",
    description:
      `Database technology is responsible for storing, organizing, and managing data efficiently in any application. It ensures that data is secure, accessible, and scalable for large systems.

Databases play a critical role in every software system, from small websites to large enterprise applications. They help manage user information, transactions, logs, and business data in a structured manner.

Modern applications rely on both SQL and NoSQL databases depending on the type of data. Proper database design improves performance, reduces redundancy, and ensures system reliability.`,

    items: ["MongoDB", "Oracle", "PostgreSQL", "MySQL"],
    icons: [SiMongodb, SiFirebase, BiLogoPostgresql],
    features: ["Data Storage", "Query Optimization", "Scalability"],
    useCases: ["Web apps", "Analytics systems", "Cloud apps"],
    roadmap: ["Learn SQL/NoSQL", "Practice Queries", "Design Schema", "Integrate with Backend"],
    projects: ["User Management System", "Inventory DB"],
  },

  {
    title: "Cyber Security",
    description:
      `Cyber Security focuses on protecting computer systems, networks, and applications from digital attacks, unauthorized access, and data breaches. It is one of the most critical fields in modern IT infrastructure.

As cyber threats increase globally, organizations invest heavily in security systems to protect sensitive information such as financial data, personal records, and enterprise systems. Ethical hackers help identify vulnerabilities before attackers exploit them.

Cyber security professionals play a vital role in maintaining trust and safety in digital systems. Their work ensures that businesses, governments, and users remain protected in an increasingly connected world.`,

    items: ["Ethical Hacking", "Network Security", "Cryptography"],
    icons: [FaShieldAlt, FaLock],
    features: ["Threat Detection", "Data Protection", "Network Security"],
    useCases: ["Banking systems", "Government systems", "Enterprise security"],
    roadmap: ["Learn Networking basics", "Understand Linux", "Learn Ethical Hacking", "Practice Security Tools"],
    projects: ["Vulnerability Scanner", "Secure Login System"],
  },

  {
    title: "AI, ML & Deep Learning",
    description:
      `Artificial Intelligence and Machine Learning focus on building intelligent systems that can analyze data, learn patterns, and make decisions without human intervention. These technologies are transforming every industry.

Machine Learning algorithms allow systems to improve automatically through experience, while Deep Learning uses neural networks to solve complex problems like image recognition and natural language processing.

AI is now widely used in healthcare, finance, transportation, and automation systems. It helps businesses make smarter decisions, improve efficiency, and deliver personalized user experiences.`,

    items: ["Machine Learning", "Deep Learning", "Neural Networks", "Data Science"],
    icons: [FaRobot, FaBrain, FaPython],
    features: ["Prediction Models", "Automation", "Data Analysis"],
    useCases: ["Chatbots", "Recommendation systems", "Image recognition"],
    roadmap: ["Learn Python", "Understand Math & Statistics", "Study ML algorithms", "Build AI projects"],
    projects: ["Chatbot AI", "Image Classifier", "Recommendation System"],
  },

  
];

export default techData;