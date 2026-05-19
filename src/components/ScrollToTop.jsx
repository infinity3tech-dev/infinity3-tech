import React, { useEffect, useRef, useState } from "react";
import {
  FaChevronUp,
  FaWhatsapp,
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SiProbot } from "react-icons/si";
import { BsRobot } from "react-icons/bs";
import coursesData from "../data/coursesData";
import internshipData from "../data/internshipData";
import chatbotIcon from "./../assets/chatbot.mp4";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showActions] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showHelpText, setShowHelpText] = useState(true);
  // QUIZ STATES
  const [quizField, setQuizField] = useState("");
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);

  const messagesEndRef = useRef(null);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const phoneNumber = "919409259294";

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 Welcome to Infinity3 Technology.\nHow can I help you today?",
      type: "greeting",
    },
  ]);

  // API CALL
  const API_URL = import.meta.env.VITE_URL_PORT;

  const askGemini = async (userMessage, extraData = {}) => {
    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: userMessage,
          ...extraData,
        }),
      });

      if (!response.ok) {
        return {
          reply: "Server error 😔 Please try again later.",
        };
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log("API Error:", error);

      return {
        reply: "Unable to connect to server 😔",
      };
    }
  };

  // AUTO SCROLL
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // ROUTE CHANGE SCROLL TOP
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // SHOW FLOATING BUTTONS
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // WHATSAPP
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=Hello, I want more information`,
      "_blank",
    );
  };

  // QUICK ACTIONS
  const handleQuickAction = (action) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: action,
      },
    ]);

    setTimeout(() => {
      // COURSES
      if (action === "📚 Explore Courses") {
        const topCourses = coursesData.slice(0, 4);

        const reply = `
🎓 Popular Courses:

${topCourses
  .map((course) => `📌 ${course.title} - ${course.duration}`)
  .join("\n")}

Would you like to explore more courses?
        `;

        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: reply,
            type: "courses",
          },
        ]);
      }

      // INTERNSHIP
      else if (action === "💼 Internship Programs") {
        const topInternships = internshipData.slice(0, 5);

        const reply = `
🚀 Internship Programs:

${topInternships.map((item) => `📌 ${item.title}`).join("\n")}

Join our internship programs and gain real-world experience!
        `;

        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: reply,
            type: "internship",
          },
        ]);
      }

      // CAREER
      else if (action === "🧭 Career Path Finder") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "🧭 Choose your field 👇",

            options: [
              "Frontend Development",
              "Backend Development",
              "Mobile Development",
              "AI / ML",
              "Database",
            ],

            type: "career",
          },
        ]);
      }

      // QUIZ
      else if (action === "🧪 Skill Test") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "🧪 Select Quiz Field 👇",

            options: [
              "Frontend Development",
              "Backend Development",
              "Mobile Development",
              "AI / ML",
              "Database",
            ],

            type: "quiz-field",
          },
        ]);
      }
    }, 500);
  };

  // CAREER OPTION
  const handleCareerOption = async (option) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: option,
      },
    ]);

    setLoading(true);

    const data = await askGemini(option, {
      feature: "career",
      field: option,
    });

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: data.reply,
      },
    ]);

    setLoading(false);
  };

  // QUIZ OPTION
  const handleQuizOption = async (option) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: option,
      },
    ]);

    const fields = [
      "Frontend Development",
      "Backend Development",
      "Mobile Development",
      "AI / ML",
      "Database",
    ];

    // SELECT QUIZ FIELD
    if (fields.includes(option)) {
      setQuizField(option);

      setQuizQuestionIndex(0);

      setQuizScore(0);

      setLoading(true);

      const data = await askGemini("start quiz", {
        feature: "quiz",
        field: option,
        questionIndex: 0,
        score: 0,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.question,
          options: data.options,
          type: "quiz-options",
        },
      ]);

      setLoading(false);

      return;
    }

    // ANSWER QUESTION
    setLoading(true);

    const data = await askGemini("next question", {
      feature: "quiz",
      field: quizField,
      questionIndex: quizQuestionIndex + 1,
      score: quizScore,
      answer: option,
    });

    // QUIZ FINISHED
    if (data.finished) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `
🎉 Quiz Finished
✅ Score: ${data.score}/${data.total}
🏆 Level: ${data.level}
📘 ${data.message}
${data.roadmap}
        `,
        },
      ]);

      setLoading(false);

      return;
    }

    // UPDATE SCORE
    const currentQuiz = data.score !== undefined ? data.score : quizScore;

    setQuizScore(currentQuiz);

    setQuizQuestionIndex((prev) => prev + 1);

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: data.question,
        options: data.options,
        type: "quiz-options",
      },
    ]);

    setLoading(false);
  };

  // SEND MESSAGE
  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userText = message;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText,
      },
    ]);

    setMessage("");

    setLoading(true);

    const data = await askGemini(userText);

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: data.reply,
        options: data.options || [],
        type: data.type || "",
        link: data.link || "",
        linkText: data.linkText || "",
      },
    ]);

    setLoading(false);
  };

  // ENTER KEY
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {visible && (
        <>
          {/* FLOATING BUTTONS */}
          <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
            {/* CHATBOT + TEXT */}
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-2">
                {/* HELP TEXT */}
                {!chatOpen && showHelpText && (
                  <div className="bg-black text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full shadow-lg animate-pulse whitespace-nowrap max-w-[140px] sm:max-w-none overflow-hidden text-ellipsis">
                    How can I help you?
                  </div>
                )}

                <button
                  onClick={() => {
                    setChatOpen(true);
                    setShowHelpText(false);
                  }}
                  className="relative overflow-hidden w-12 h-12 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <video
                    src={chatbotIcon}
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate nofullscreen"
                    preload="auto"
                    draggable={false}
                    className="w-full h-full object-cover rounded-full pointer-events-none select-none scale-125"
                  />
                </button>
              </div>

              {/* WHATSAPP */}
              <button
                onClick={openWhatsApp}
                className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition duration-300 cursor-pointer"
              >
                <FaWhatsapp size={24} />
              </button>

              {/* SCROLL TOP */}
              <button
                onClick={scrollToTop}
                className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-2xl hover:bg-black transition duration-300 cursor-pointer"
              >
                <FaChevronUp />
              </button>
            </div>
          </div>

          {/* CHAT WINDOW */}
          {chatOpen && (
            <div
              className="fixed inset-0 sm:inset-auto sm:bottom-5 sm:right-5 z-50 w-full h-full 
sm:w-[320px] md:w-[340px] sm:h-[480px] md:max-h-full rounded-none sm:rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-700 flex flex-col"
            >
              {/* HEADER */}
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2.5 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <video
                      src={chatbotIcon}
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate nofullscreen"
                      preload="auto"
                      draggable={false}
                      className="w-full h-full object-cover rounded-full pointer-events-none select-none scale-125"
                    />
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold sm:text-lg">
                      Infinity3 Assistant
                    </h2>

                    <p className="text-[11px] text-orange-100">
                      AI Powered Chatbot
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setChatOpen(false)}
                  className="cursor-pointer"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* MESSAGES */}
              <div className="flex-1 overflow-y-auto scrollbar-hide px-2.5 py-3 bg-gray-100 dark:bg-gray-800 space-y-3">
                {messages.map((msg, index) => (
                  <div key={index} className="space-y-2">
                    {/* MESSAGE */}
                    <div
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[82%] px-3 py-2.5 rounded-2xl text-[12px] leading-relaxed shadow-sm whitespace-pre-wrap ${
                          msg.sender === "user"
                            ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-br-md"
                            : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-md"
                        }`}
                      >
                        <p className="break-words">{msg.text}</p>

                        {msg.link && (
                          <div className="mt-3">
                            <Link
                              to={`/course-details/${msg.link}`}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200"
                            >
                              {msg.linkText || "Open Course"}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* OPTIONS */}
                    {msg.options && (
                      <div className="flex flex-col gap-2 mt-2">
                        {msg.options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (msg.type === "career") {
                                handleCareerOption(option);
                              } else {
                                handleQuizOption(option);
                              }
                            }}
                            className="text-left px-3 py-3 sm:py-2 rounded-lg bg-white dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-600 border border-orange-200 dark:border-gray-600 text-[14px] sm:text-sm text-gray-800 dark:text-white transition-all duration-200 hover:translate-x-1 hover:shadow-md flex items-center justify-between cursor-pointer"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* COURSES BUTTON */}
                    {msg.type === "courses" && (
                      <button
                        onClick={() => navigate("/courses")}
                        className="w-full mt-2 px-3 py-3 sm:py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[14px] sm:text-sm font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        View All Courses
                        <FaArrowRight size={12} />
                      </button>
                    )}

                    {/* INTERNSHIP BUTTON */}
                    {msg.type === "internship" && (
                      <button
                        onClick={() => navigate("/internship")}
                        className="w-full mt-2 px-3 py-3 sm:py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[14px] sm:text-sm font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        View All Programs
                        <FaArrowRight size={12} />
                      </button>
                    )}
                  </div>
                ))}

                {/* LOADING */}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-gray-700 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></span>

                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-100"></span>

                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-200"></span>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />

                {/* QUICK ACTIONS */}
                {showActions && (
                  <div className="flex flex-col gap-2 mt-3">
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                      Choose one:
                    </p>

                    {[
                      "📚 Explore Courses",
                      "💼 Internship Programs",
                      "🧭 Career Path Finder",
                      "🧪 Skill Test",
                    ].map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickAction(action)}
                        className="text-left px-3 py-2 rounded-lg bg-white dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-600 border border-orange-200 dark:border-gray-600 text-[12px] text-gray-800 dark:text-white transition-all duration-200 hover:translate-x-1 hover:shadow-md flex items-center justify-between cursor-pointer"
                      >
                        <span>{action}</span>

                        <FaArrowRight size={12} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* INPUT */}
              <div className="p-2.5 border-t border-orange-100 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-2xl px-2 sm:px-3 py-2 border border-orange-100 dark:border-gray-700">
                  <input
                    type="text"
                    placeholder="Ask something..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="flex-1 bg-transparent outline-none text-[15px] sm:text-sm text-black dark:text-white placeholder:text-gray-400"
                  />

                  <button
                    onClick={sendMessage}
                    disabled={loading}
                    className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center disabled:opacity-50 cursor-pointer"
                  >
                    <FaPaperPlane size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ScrollToTop;
