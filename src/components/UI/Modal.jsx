import React, { useState } from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal, language }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  const [mainImage, setMainImage] = useState(portfolio.imgUrl); // main image state

  const handleCloseModal = (event) => {
    event.stopPropagation();
    setShowModal(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
      onClick={() => setShowModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-11/12 md:max-w-[900px] bg-white rounded-lg p-6 max-h-[90vh] overflow-y-auto relative"
      >
        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 w-8 h-8 bg-primaryColor text-white flex items-center justify-center rounded hover:bg-red-500 transition"
        >
          &times;
        </button>

        {/* Main Image */}
        <div className="mb-4">
          <figure>
            <img className="rounded-[8px] w-full object-cover" src={mainImage} alt="" />
          </figure>
        </div>

        {/* Gallery Thumbnails */}
        {Array.isArray(portfolio.gallery) && portfolio.gallery.length > 0 && (
          <div className="flex gap-8 mb-8 overflow-x-auto py-2 pl-2 pr-2">
            {portfolio.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={`h-24 w-32 object-cover rounded cursor-pointer border-2 transition-all duration-200
                  ${mainImage === img
                    ? "border-primaryColor opacity-100 scale-105 outline outline-2 outline-purple-500"
                    : "border-transparent opacity-50 hover:opacity-80 hover:scale-105"
                  }`
                }
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-3xl font-bold text-headingColor mb-6">
          {portfolio.title}
        </h2>

        {/* Client, Duration & Link */}
        <div className="flex flex-wrap gap-6 mb-8">
          {portfolio.client && (
            <div className="flex flex-col gap-1 min-w-[150px]">
              <span className="text-headingColor font-semibold text-sm">Client</span>
              <div className="flex items-center gap-2">
                <i className="ri-building-line text-primaryColor text-xl"></i>
                <span className="text-sm text-smallTextColor">{portfolio.client}</span>
              </div>
            </div>
          )}

          {portfolio.duration && (
            <div className="flex flex-col gap-1 min-w-[150px]">
              <span className="text-headingColor font-semibold text-sm">Duration</span>
              <div className="flex items-center gap-2">
                <i className="ri-time-line text-primaryColor text-xl"></i>
                <span className="text-sm text-smallTextColor">{portfolio.duration}</span>
              </div>
            </div>
          )}

          {portfolio.siteUrl && (
            <div className="flex flex-col gap-1 min-w-[150px]">
              <span className="text-headingColor font-semibold text-sm">
                {language === "EN" ? "Project Link" : "Посилання на проєкт"}
              </span>
              <div className="flex items-center gap-2">
                <i className="ri-links-line text-primaryColor text-xl"></i>
                <a
                  href={portfolio.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primaryColor underline hover:text-purple-500 transition"
                >
                  {language === "EN" ? "View Project" : "Переглянути проєкт"}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-headingColor font-semibold mb-2">Description</h3>
          <p className="text-sm text-smallTextColor">
            {language === "EN"
              ? portfolio.descriptionEN
              : portfolio.descriptionUA}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-headingColor font-semibold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-primaryColor/10 text-primaryColor py-1 px-3 rounded text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;