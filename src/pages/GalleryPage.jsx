import React from "react";
import img1 from "./../assets/images/gallery1.webp";
import img2 from "./../assets/images/gallery2.webp";
import img3 from "./../assets/images/gallery3.webp";
import img4 from "./../assets/images/gallery4.webp";
import img5 from "./../assets/images/gallery5.webp";
import img6 from "./../assets/images/gallery6.webp";
import img7 from "./../assets/images/gallery7.webp";
import img8 from "./../assets/images/gallery8.webp";
import img9 from "./../assets/images/gallery9.webp";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";

const GalleryPage = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section className="bg-gray-50 min-h-screen pt-16 md:pt-20 overflow-hidden dark:bg-gray-900">
      {/* HEADER */}
      <PageHeader title="Gallery" />

      {/* GALLERY GRID */}
      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="
          relative
          overflow-hidden
          rounded-3xl
          group
          cursor-zoom-in
          bg-white
          dark:bg-gray-800
          shadow-md
          hover:shadow-2xl
          transition-all
          duration-500
        "
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="
              w-full
              h-64 sm:h-72 lg:h-80
              object-cover
              group-hover:scale-110
              transition-transform
              duration-700
            "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default GalleryPage;
