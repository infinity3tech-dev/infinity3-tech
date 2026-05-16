import React from "react";
import img1 from "./../assets/images/gallery1.jpg";
import img2 from "./../assets/images/gallery2.jpg";
import img3 from "./../assets/images/gallery3.jpg";
import img4 from "./../assets/images/gallery4.jpg";
import img5 from "./../assets/images/gallery5.jpg";
import img6 from "./../assets/images/gallery6.jpg";
import img7 from "./../assets/images/gallery7.jpg";
import img8 from "./../assets/images/gallery8.jpg";
import img9 from "./../assets/images/gallery9.jpg";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";

const GalleryPage = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section className="bg-gray-50 min-h-screen pt-16 md:pt-20 overflow-hidden dark:bg-gray-900">
      {/* HEADER */}
      <PageHeader title="Gallery" />

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md bg-white dark:bg-gray-800 group cursor-pointer hover:shadow-2xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="
                    w-full
                    h-56 sm:h-64 md:h-72 lg:h-80
                    object-cover
                    group-hover:scale-110
                    transition duration-500
                    cursor-zoom-in
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
