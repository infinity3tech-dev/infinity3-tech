import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import Sidebar from "../components/Sidebar";
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
        Blog not found
      </div>
    );
  }

  const relatedPosts = blogs.slice(0, 2);

  return (
    <div
      className="
        bg-gray-50 dark:bg-gray-900
        min-h-screen
        pt-16 sm:pt-20 md:pt-24
        pb-10 sm:pb-14
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <PageHeader title="Blog Details" />

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            {/* BLOG CARD */}
            <div
              className="
                bg-white dark:bg-gray-800
                rounded-2xl
                shadow-sm
                overflow-hidden
                border border-gray-100 dark:border-gray-700
              "
            >
              {/* IMAGE */}
              <img
                src={blog.image}
                alt=""
                className="
                  w-full
                  h-60 sm:h-72 md:h-96
                  object-cover
                "
              />

              <div className="p-5 sm:p-6 md:p-8">
                {/* META */}
                <div
                  className="
                    flex flex-wrap
                    items-center
                    gap-3
                    text-sm
                    text-gray-500 dark:text-gray-300
                    mb-5
                  "
                >
                  <img
                    src={blog.avatar}
                    className="w-8 h-8 rounded-full"
                    alt=""
                  />

                  <span>{blog.author}</span>

                  <span>•</span>

                  <span>{blog.date}</span>
                </div>

                {/* TITLE */}
                <h2
                  className="
                    text-2xl sm:text-3xl
                    font-semibold
                    text-gray-800 dark:text-white
                    mb-5
                    leading-snug
                  "
                >
                  {blog.title}
                </h2>

                {/* CONTENT */}
                <p
                  className="
                    text-gray-600 dark:text-gray-300
                    leading-8
                    mb-5
                    text-sm sm:text-base
                  "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>

                {/* QUOTE */}
                <blockquote
                  className="
                    bg-gray-100 dark:bg-gray-700
                    border-l-4 border-orange-500
                    p-4 sm:p-5
                    italic
                    text-gray-600 dark:text-gray-200
                    rounded-md
                    mb-6
                    leading-7
                  "
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </blockquote>

                <p
                  className="
                    text-gray-600 dark:text-gray-300
                    leading-8
                    mb-6
                    text-sm sm:text-base
                  "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>

                {/* LIST */}
                <h3
                  className="
                    font-semibold
                    text-black dark:text-white
                    text-lg sm:text-xl
                    mb-3
                  "
                >
                  Four major elements that we offer:
                </h3>

                <ul
                  className="
                    list-disc
                    pl-5
                    space-y-2
                    text-gray-600 dark:text-gray-300
                    mb-6
                    text-sm sm:text-base
                  "
                >
                  <li>Scientific skills for better results</li>
                  <li>Communication skills</li>
                  <li>Career opportunities</li>
                  <li>Good work environment</li>
                </ul>

                <h3
                  className="
                    font-semibold
                    text-black dark:text-white
                    text-lg sm:text-xl
                    mb-3
                  "
                >
                  Setting the mood with incense
                </h3>

                <p
                  className="
                    text-gray-600 dark:text-gray-300
                    leading-8
                    mb-6
                    text-sm sm:text-base
                  "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime fugiat aspernatur, beatae voluptatum.
                </p>

                <h3
                  className="
                    font-semibold
                    text-black dark:text-white
                    text-lg sm:text-xl
                    mb-3
                  "
                >
                  The rise of marketing and why you need it
                </h3>

                <p
                  className="
                    text-gray-600 dark:text-gray-300
                    leading-8
                    text-sm sm:text-base
                  "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime fugiat aspernatur, beatae voluptatum.
                </p>

                {/* TAGS + SHARE */}
                <div
                  className="
                    flex flex-col lg:flex-row
                    lg:justify-between
                    lg:items-center
                    gap-5
                    border-y border-gray-200 dark:border-gray-700
                    py-5
                    mt-8
                    mb-6
                  "
                >
                  {/* TAGS */}
                  <div className="flex gap-2 flex-wrap">
                    {["Fashion", "Games", "Travel"].map((tag) => (
                      <span
                        key={tag}
                        className="
                          bg-gray-100 dark:bg-gray-700
                          text-black dark:text-white
                          px-3 py-1
                          font-semibold
                          rounded-full
                          text-sm
                          hover:bg-orange-500
                          hover:text-white
                          cursor-pointer
                          transition
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* SHARE */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="
                        text-sm font-bold
                        text-black dark:text-white
                      "
                    >
                      Share:
                    </span>

                    <div className="flex gap-3">
                      {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                        (Icon, i) => (
                          <div
                            key={i}
                            className="
                              w-10 h-10
                              flex items-center justify-center
                              rounded-full
                              bg-white dark:bg-gray-700
                              text-gray-700 dark:text-white
                              shadow-sm
                              border border-gray-200 dark:border-gray-600
                              hover:bg-orange-500
                              hover:text-white
                              transition-all duration-300
                              cursor-pointer
                            "
                          >
                            <Icon size={14} />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* AUTHOR */}
                <div
                  className="
                    flex flex-col sm:flex-row
                    gap-4
                    bg-gray-50 dark:bg-gray-700
                    p-5
                    rounded-xl
                  "
                >
                  <img
                    src={blog.avatar}
                    className="w-16 h-16 rounded-full"
                    alt=""
                  />

                  <div>
                    <h4
                      className="
                        font-semibold
                        text-gray-800 dark:text-white
                      "
                    >
                      {blog.author}
                    </h4>

                    <p
                      className="
                        text-sm
                        text-gray-500 dark:text-gray-300
                        mb-1
                      "
                    >
                      Photographer, Author, Writer
                    </p>

                    <p
                      className="
                        text-sm
                        text-gray-600 dark:text-gray-200
                        leading-7
                      "
                    >
                      Chris Orwig is a celebrated photographer and writer who
                      brings passion to everything he does.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RELATED POSTS */}
            <div
              className="
                bg-white dark:bg-gray-800
                mt-8
                p-5 sm:p-6
                rounded-2xl
                shadow-sm
                border border-gray-100 dark:border-gray-700
              "
            >
              <h3
                className="
                  font-semibold
                  text-lg
                  text-gray-800 dark:text-white
                  mb-5
                "
              >
                Related Posts
              </h3>

              <div className="grid sm:grid-cols-2 gap-5">
                {relatedPosts.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      className="w-24 h-20 rounded-lg object-cover"
                      alt=""
                    />

                    <div>
                      <p
                        className="
                          text-sm font-medium
                          text-gray-800 dark:text-white
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          text-xs
                          text-gray-400 dark:text-gray-300
                          mt-1
                        "
                      >
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COMMENTS */}
            <div
              className="
                bg-white dark:bg-gray-800
                mt-8
                p-5 sm:p-6
                rounded-2xl
                shadow-sm
                border border-gray-100 dark:border-gray-700
              "
            >
              <h3
                className="
                  font-semibold
                  text-lg
                  text-gray-800 dark:text-white
                  mb-6
                "
              >
                2 Comments
              </h3>

              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="
                    flex gap-4
                    mb-6
                    border-b border-gray-100 dark:border-gray-700
                    pb-5
                    last:border-none
                    last:pb-0
                  "
                >
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>

                  <div>
                    <h4
                      className="
                        font-medium
                        text-gray-800 dark:text-white
                      "
                    >
                      John Jones
                    </h4>

                    <p
                      className="
                        text-xs
                        text-gray-400 dark:text-gray-300
                        mb-1
                      "
                    >
                      April 24, 2025
                    </p>

                    <p
                      className="
                        text-gray-600 dark:text-gray-300
                        text-sm
                      "
                    >
                      Lorem Ipsum has been the industry standard.
                    </p>

                    <button className="text-xs text-orange-500 mt-2">
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* REPLY FORM */}
            <div
              className="
                bg-white dark:bg-gray-800
                mt-8
                p-5 sm:p-6
                rounded-2xl
                shadow-sm
                border border-gray-100 dark:border-gray-700
              "
            >
              <h3
                className="
                  font-semibold
                  text-black dark:text-white
                  text-lg
                  mb-4
                "
              >
                Leave a Reply
              </h3>

              <p
                className="
                  text-sm
                  text-gray-600 dark:text-gray-300
                  mb-4
                "
              >
                Your email address will not be published.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input
                  className="
                    border border-gray-300 dark:border-gray-600
                    bg-white dark:bg-gray-700
                    text-black dark:text-white
                    rounded-lg
                    px-4 py-3
                    w-full
                    outline-none
                    focus:ring-2 focus:ring-orange-400
                  "
                  placeholder="Your Name*"
                />

                <input
                  className="
                    border border-gray-300 dark:border-gray-600
                    bg-white dark:bg-gray-700
                    text-black dark:text-white
                    rounded-lg
                    px-4 py-3
                    w-full
                    outline-none
                    focus:ring-2 focus:ring-orange-400
                  "
                  placeholder="Your Email*"
                />
              </div>

              <input
                className="
                  border border-gray-300 dark:border-gray-600
                  bg-white dark:bg-gray-700
                  text-black dark:text-white
                  rounded-lg
                  px-4 py-3
                  w-full
                  mb-4
                  outline-none
                  focus:ring-2 focus:ring-orange-400
                "
                placeholder="Website"
              />

              <textarea
                className="
                  border border-gray-300 dark:border-gray-600
                  bg-white dark:bg-gray-700
                  text-black dark:text-white
                  rounded-lg
                  px-4 py-3
                  w-full
                  mb-4
                  outline-none
                  focus:ring-2 focus:ring-orange-400
                "
                rows="4"
                placeholder="Your Comment..."
              />

              <div className="flex items-start gap-2 mb-5">
                <input
                  type="checkbox"
                  className="
                    w-4 h-4
                    mt-1
                    border rounded
                    cursor-pointer
                  "
                />

                <label
                  className="
                    text-sm
                    text-gray-700 dark:text-gray-300
                    cursor-pointer
                    leading-6
                  "
                >
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>

              <button
                className="
                  bg-orange-500
                  hover:bg-black
                  text-white
                  px-6 py-3
                  rounded-lg
                  transition
                  font-medium
                "
              >
                Post Comment
              </button>
            </div>
          </div>

          {/* SIDEBAR */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;