import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ServicesDetails from "./pages/ServicesDetails";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import TeamPage from "./pages/TeamPage";
import GalleryPage from "./pages/GalleryPage";
import CoursesPage from "./pages/CoursesPage";
import FAQPage from "./pages/FAQPage";
import ContactUsPage from "./pages/ContactUsPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import BlogGrid from "./pages/BlogGrid";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import InternshipPage from "./pages/InternshipPage";
import InternshipDetails from "./pages/InternshipDetails";
import SearchResults from "./pages/SearchResults";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyDetails from "./pages/TechnologyDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CareerPath from "./pages/CareerPath";
import RoadmapDetails from "./pages/RoadmapDetails";
import FullRoadmapDetails from "./pages/FullRoadmapDetails";
// import TopicDetails from "./pages/TopicDetails";
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career-path" element={<CareerPath />} />
        <Route path="/roadmap/:tech" element={<RoadmapDetails />} />
         <Route path="/roadmap/:tech/:slug" element={<FullRoadmapDetails />}
        />
        {/* <Route path="/topic/:slug" element={<TopicDetails />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/service-details/:id" element={<ServicesDetails />} />
        <Route path="/blog" element={<BlogGrid />} />
        <Route path="/blog-details/:id" element={<BlogDetailsPage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course-details/:slug" element={<CourseDetailsPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/technology/:slug" element={<TechnologyDetails />} />
        <Route
          path="/internship-details/:slug"
          element={<InternshipDetails />}
        />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event-details/:id" element={<EventDetailsPage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}

export default App;
