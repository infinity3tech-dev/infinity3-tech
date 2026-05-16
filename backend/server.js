const express = require("express");
const cors = require("cors");
const axios = require("axios");
const coursesData = require("./coursesData");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8001;

const quizzes = {
    "Frontend Development": [
        {
            question: "What is React?",
            options: ["Library", "Database", "Server", "Language"],
            answer: "Library",
        },
        {
            question: "Which hook is used for state?",
            options: ["useRef", "useState", "useEffect", "useMemo"],
            answer: "useState",
        },
        {
            question: "Which language React uses?",
            options: ["Python", "Java", "JavaScript", "PHP"],
            answer: "JavaScript",
        },
        {
            question: "Which company created React?",
            options: ["Google", "Meta", "Amazon", "Netflix"],
            answer: "Meta",
        },
        {
            question: "Which is used for styling?",
            options: ["CSS", "MongoDB", "Node.js", "Express"],
            answer: "CSS",
        },
    ],

    "Backend Development": [
        {
            question: "Node.js is used for?",
            options: ["Frontend", "Backend", "Database", "Design"],
            answer: "Backend",
        },
        {
            question: "Which framework is used with Node?",
            options: ["Laravel", "Django", "Express", "Flutter"],
            answer: "Express",
        },
        {
            question: "Which method sends data?",
            options: ["GET", "POST", "FETCH", "READ"],
            answer: "POST",
        },
        {
            question: "Which database is NoSQL?",
            options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
            answer: "MongoDB",
        },
        {
            question: "JWT is used for?",
            options: ["Authentication", "Styling", "Animation", "Hosting"],
            answer: "Authentication",
        },
    ],

    "Mobile Development": [
        {
            question: "React Native is used for?",
            options: ["Web Apps", "Mobile Apps", "AI", "Database"],
            answer: "Mobile Apps",
        },
        {
            question: "Flutter uses which language?",
            options: ["Python", "Java", "Dart", "PHP"],
            answer: "Dart",
        },
        {
            question: "APK is for?",
            options: ["iOS", "Android", "Database", "Backend"],
            answer: "Android",
        },
        {
            question: "Expo is used in?",
            options: ["React Native", "Node", "MongoDB", "Express"],
            answer: "React Native",
        },
        {
            question: "Play Store belongs to?",
            options: ["Apple", "Google", "Microsoft", "Amazon"],
            answer: "Google",
        },
    ],

    "AI / ML": [
        {
            question: "Python is popular in?",
            options: ["AI/ML", "Cooking", "Gaming", "Design"],
            answer: "AI/ML",
        },
        {
            question: "TensorFlow is?",
            options: ["Database", "AI Library", "CSS Framework", "Browser"],
            answer: "AI Library",
        },
        {
            question: "Machine Learning means?",
            options: [
                "Machine Repair",
                "Learning from Data",
                "Web Design",
                "Animation",
            ],
            answer: "Learning from Data",
        },
        {
            question: "ChatGPT is?",
            options: ["AI Model", "Car", "Database", "Phone"],
            answer: "AI Model",
        },
        {
            question: "NumPy is used for?",
            options: ["Math", "Cooking", "Hosting", "Design"],
            answer: "Math",
        },
    ],

    Database: [
        {
            question: "MongoDB is?",
            options: ["SQL", "NoSQL", "CSS", "Framework"],
            answer: "NoSQL",
        },
        {
            question: "MySQL is?",
            options: ["Database", "Language", "Framework", "Library"],
            answer: "Database",
        },
        {
            question: "Which command fetches data?",
            options: ["SELECT", "DELETE", "DROP", "CLEAR"],
            answer: "SELECT",
        },
        {
            question: "Primary key is?",
            options: [
                "Unique ID",
                "Color",
                "Frontend Tool",
                "Animation",
            ],
            answer: "Unique ID",
        },
        {
            question: "Firebase is?",
            options: ["Backend Service", "Game", "Browser", "IDE"],
            answer: "Backend Service",
        },
    ],
};


const FALLBACK_RESPONSES = {
    "hello": "Hello! 👋 Welcome to Infinity3 Technology. How can I help you today?",
    "hi": "Hi there! 👋 Welcome to Infinity3 Technology. What can I do for you?",
    "courses": "We offer comprehensive courses in React, MERN Stack, Python, Java, PHP, and more. Visit our courses page for detailed information!",
    "course": "We offer comprehensive courses in React, MERN Stack, Python, Java, PHP, and more. Visit our courses page for detailed information!",
    "internship": "We provide internships in React.js, Node.js, Java Development, .NET Development, PHP Laravel, Python Django, Full Stack Development, Vue.js. Check our internship page for details!",
    "services": "We provide Web Development, App Development, MERN/MEAN Stack Developer, Python Full Course, Live Project Training, PHP Laravel, SaaS Products, Internship, and SEO Services.",
    "contact": "📞 Contact: +91 9409259294\n📧 Email: info@infinity3technology.com\n📍 Location: Ahmedabad, Gujarat, India",
    "address": "📍 We're located in 205, Emerald Complex, CG Road, Near Mithakhali, Navrangpura, Ahmedabad Gujarat 380009, Gujarat, India",
    "timing": "⏰ Office Timing: 9:30 AM to 6:30 PM",
    "whatsapp": "You can connect with us directly on WhatsApp using the WhatsApp button.",
    "good morning": "Good morning! 👋 Welcome to Infinity3 Technology. How can I help you today?",
    "morning": "Good morning! 👋 Welcome to Infinity3 Technology. How can I help you today?",
    "good afternoon": "Good afternoon! 👋 How can Infinity3 Technology help you today?",
    "good evening": "Good evening! 👋 How can I help you with Infinity3 Technology today?",
    "good night": "Good night! 🌙 If you have any questions, feel free to ask anytime.",
    "thanks": "You're welcome! 😊 Glad to help.",
    "thank": "You're welcome! 😊 Happy to assist.",
};

function getFallbackResponse(message) {
    // Get fallback response for common questions
    const messageLower = message.toLowerCase().trim();

    for (const [key, response] of Object.entries(FALLBACK_RESPONSES)) {
        if (messageLower.includes(key)) {
            return response;
        }
    }

    return null;
}

function getLevel(score) {
    if (score <= 2) {
        return {
            level: "Beginner",
            message:
                "You should start from basics and build small projects.",
        };
    }

    if (score <= 4) {
        return {
            level: "Intermediate",
            message:
                "Good knowledge. Now build real-world projects and improve problem solving.",
        };
    }

    return {
        level: "Advanced",
        message:
            "Excellent skills. Start building production-level applications and apply for jobs.",
    };
};

function getCareerRoadmap(field) {
    const cleanField = field?.trim().toLowerCase();

    if (cleanField.includes("frontend")) {
        return `
🧭 Frontend Developer Roadmap

📌 HTML
📌 CSS
📌 JavaScript
📌 React JS
📌 API Integration
📌 Redux
📌 Tailwind CSS
📌 Build Projects

🚀 Career:
Frontend Developer
`;
    }

    if (cleanField.includes("backend")) {
        return `
🧭 Backend Developer Roadmap

📌 Node.js
📌 Express.js
📌 MongoDB
📌 REST API
📌 Authentication
📌 JWT
📌 Deployment

🚀 Career:
Backend Developer
`;
    }

    if (cleanField.includes("mobile")) {
        return `
🧭 Mobile App Developer Roadmap

📌 JavaScript
📌 React Native
📌 Expo
📌 Firebase
📌 APIs
📌 Play Store Deployment

🚀 Career:
Mobile Developer
`;
    }

    if (cleanField.includes("ai") || cleanField.includes("ml")) {
        return `
🧭 AI / ML Roadmap

📌 Python
📌 NumPy
📌 Pandas
📌 Machine Learning
📌 Deep Learning
📌 AI Projects

🚀 Career:
AI Engineer
`;
    }

    if (cleanField.includes("database")) {
        return `
🧭 Database Developer Roadmap

📌 SQL
📌 MySQL
📌 MongoDB
📌 Firebase
📌 Database Design
📌 Query Optimization

🚀 Career:
Database Developer
`;
    }

    return "No roadmap found";
}

function getCourseResponse(message) {

    const lowerMessage = message.toLowerCase();

    const foundCourse = coursesData.find((course) =>
        course.keywords.some((keyword) =>
            lowerMessage.includes(keyword)
        )
    );

    if (!foundCourse) return null;

    return {
        reply: `${foundCourse.title} course is available at Infinity3 Technology 🚀`,
        link: foundCourse.slug,
        linkText: `View ${foundCourse.title} Course`,
    };
}

app.post("/api/chat", async (req, res) => {
    try {
        const {
            message,
            feature,
            field,
            questionIndex,
            score,
            answer,
        } = req.body;

        const lowerMessage = message.toLowerCase();

        if (
            lowerMessage.includes("what course") ||
            lowerMessage.includes("courses provide") ||
            lowerMessage.includes("popular course") ||
            lowerMessage.includes("which courses") ||
            lowerMessage.includes("best course")
        ) {
            return res.json({
                reply: `
🎓 Our Most Popular Courses:

📌 Python Django
📌 React JS
📌 Node.js
📌PHP Laravel
📌 Java Spring Boot
📌 .NET Development
📌 JavaScript

🚀 We also provide internships and live project training.
    `,
            });
        }


        // QUIZ SYSTEM
        if (feature === "quiz") {
            const quizData = quizzes[field];

            if (!quizData) {
                return res.json({
                    reply: "Quiz field not found",
                });
            }

            // START QUIZ
            if (questionIndex === 0 && !answer) {
                return res.json({
                    question: quizData[0].question,
                    options: quizData[0].options,
                    questionIndex: 0,
                    totalQuestions: quizData.length,
                });
            }

            let newScore = score;

            // CHECK ANSWER
            if (
                answer === quizData[questionIndex - 1].answer
            ) {
                newScore++;
            }

            // NEXT QUESTION
            if (questionIndex < quizData.length) {
                return res.json({
                    question:
                        quizData[questionIndex].question,
                    options:
                        quizData[questionIndex].options,
                    questionIndex,
                    totalQuestions: quizData.length,
                    score: newScore,
                });
            }

            // FINAL RESULT
            const result = getLevel(newScore);

            return res.json({
                finished: true,
                score: newScore,
                total: quizData.length,
                level: result.level,
                roadmap: getCareerRoadmap(field),
                message: result.message,
            });
        }

        // CAREER PATH
        if (feature === "career") {
            const roadmap = getCareerRoadmap(field);

            return res.json({
                reply: roadmap,
                field: field,
            });
        }
        const courseReply = getCourseResponse(message);

        if (courseReply) {
            return res.json(courseReply);
        }

        // Check fallback responses
        const fallbackReply = getFallbackResponse(message);

        if (fallbackReply) {

            // IF RESPONSE IS OBJECT
            if (typeof fallbackReply === "object") {
                return res.json({
                    reply: fallbackReply.reply,
                    link: fallbackReply.link,
                    linkText: fallbackReply.linkText,
                });
            }

            // NORMAL STRING RESPONSE
            return res.json({
                reply: fallbackReply,
            });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: "Gemini API key is not configured" });
        }

        const geminiPayload = {
            contents: [
                {
                    parts: [
                        {
                            text: `You are Infinity3 Technology AI Assistant.

Company Information:
- Company Name: Infinity3 Technology
- Location: Ahmedabad, Gujarat, India

User Question:
${message}
`
                        }
                    ]
                }
            ]
        };

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
            geminiPayload,
            {
                headers: { 'Content-Type': 'application/json' },
                timeout: 30000
            }
        );

        const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "🤖 Sorry, I didn't understand that. Please choose an option below or ask something related to courses, internships, career, or skills.";

        res.json({ reply });


    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Server error",
        });
    }
});


app.listen(PORT, () => {
    console.log(
        `Server running on http://localhost:${PORT}`
    );
});