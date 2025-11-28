import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = ({ language }) => {
  const [nextItems, setNextItems] = useState(12);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);
  const [sortOrder, setSortOrder] = useState("newest"); // newest or oldest

  const filterOptions = [
    { key: "all", labelEN: "All Projects", labelUA: "Всі проєкти", count: data.length },
    {
      key: "commercial",
      labelEN: "💼 Commercial",
      labelUA: "💼 Комерційні",
      count: data.filter(item => item.category === "Commercial").length
    },
    {
      key: "pet",
      labelEN: "👨‍💻 Pet Projects",
      labelUA: "👨‍💻 Пет проєкти",
      count: data.filter(item => item.category === "Pet").length
    }
  ];

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  const sortProjects = (projects, order) => {
    return [...projects].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      // First sort by date
      const dateDiff = order === "newest" ? dateB - dateA : dateA - dateB;
      if (dateDiff !== 0) return dateDiff;

      // Then sort by priority if dates are equal
      return (a.priority || 0) - (b.priority || 0);
    });
  };

  useEffect(() => {
    let filteredData = data;

    if (selectTab === "pet") {
      filteredData = data.filter(item => item.category === "Pet");
    } else if (selectTab === "commercial") {
      filteredData = data.filter(item => item.category === "Commercial");
    }

    const sortedData = sortProjects(filteredData, sortOrder);
    setPortfolios(sortedData);
  }, [selectTab, sortOrder]);

  const getCategoryColor = (category) => {
    switch (category) {
      case "Commercial":
        return "bg-purple-100 text-puple-500 border-purple-200";
      case "Pet":
        return "bg-orange-100 text-orange-500 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "EN" ? "en-US" : "ua-UA", {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primaryColor/10 text-primaryColor px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {language === "EN" ? "Portfolio Timeline" : "Хронологія портфоліо"}
          </div>
          <h3 className="text-headingColor text-4xl md:text-5xl font-bold mb-4">
            {language === "EN" ? "My Projects" : "Мої проєкти"}
          </h3>
          <p className="text-smallTextColor text-lg max-w-2xl mx-auto">
            {language === "EN"
              ? "A chronological journey through my career development — from first steps to UX/UI."
              : "Послідовна подорож мого карʼєрного розвитку — від перших кроків у UX/UI."}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setSelectTab(option.key)}
                className={`
                  group relative px-6 py-3 rounded-full font-medium transition-all duration-300 
                  transform hover:scale-105 hover:-translate-y-1
                  ${selectTab === option.key
                    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-600 text-white shadow-lg shadow-primaryColor/25'
                    : 'bg-white text-smallTextColor border border-gray-200 hover:border-orange-600 hover:text-orange-600'
                  }
                `}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {language === "EN" ? option.labelEN : option.labelUA}
                  <span className={`
                    px-2 py-1 text-xs rounded-full
                    ${selectTab === option.key
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                    }
                  `}>
                    {option.count}
                  </span>
                </span>
                {selectTab === option.key && (
                  <div className="absolute inset-0 bg-primaryColor rounded-full opacity-10 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-3">
            <span className="text-smallTextColor font-medium text-sm">
              {language === "EN" ? "Sort by:" : "Сортувати за:"}
            </span>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSortOrder("newest")}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                  ${sortOrder === "newest"
                    ? 'bg-white text-primaryColor shadow-sm'
                    : 'text-gray-600 hover:text-orange-600'
                  }
                `}
              >
                {language === "EN" ? "Newest" : "Новіші"}
              </button>
              <button
                onClick={() => setSortOrder("oldest")}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                  ${sortOrder === "oldest"
                    ? 'bg-white text-primaryColor shadow-sm'
                    : 'text-gray-600 hover:text-orange-600'
                  }
                `}
              >
                {language === "EN" ? "Oldest" : "Старіші"}
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={portfolio.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                       transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Timeline Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-headingColor shadow-sm">
                  {formatDate(portfolio.date)}
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`
                  px-3 py-1 text-xs font-medium rounded-full border
                  ${getCategoryColor(portfolio.category)}
                `}>
                  {portfolio.category}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-78 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={portfolio.imgUrl}
                  alt={portfolio.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primaryColor/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="bg-white text-primaryColor px-6 py-3 rounded-full font-semibold 
                             transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300
                             hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    {language === "EN" ? "View Details" : "Переглянути деталі"}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-headingColor mb-3 group-hover:text-primaryColor transition-colors duration-300">
                  {portfolio.title}
                </h4>

                <p className="text-smallTextColor text-sm leading-relaxed mb-4 line-clamp-3">
                  {language === "EN" ? portfolio.descriptionEN : portfolio.descriptionUA}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {portfolio.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {portfolio.technologies.length > 3 && (
                    <span
                      onClick={() => showModalHandler(portfolio.id)}
                      className="px-3 py-1 bg-primaryColor/10 text-primaryColor text-xs rounded-lg font-medium cursor-pointer hover:bg-primaryColor/20 transition"
                    >
                      +{portfolio.technologies.length - 3}{" "}
                      {language === "EN" ? "more" : "більше"}
                    </span>
                  )}
                </div>

                {/* Year Timeline */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-2 h-2 bg-primaryColor rounded-full"></div>
                  <span className="font-medium">{portfolio.year}</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {nextItems < portfolios.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreHandler}
              className="bg-primaryColor text-white px-8 py-4 rounded-full font-semibold
                       hover:bg-primaryColor/90 transform hover:scale-105 transition-all duration-300
                       shadow-lg hover:shadow-xl"
            >
              {language === "EN" ? "Show More" : "Показати більше"}
            </button>
          </div>
        )}
      </div>

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          activeID={activeID}
          language={language}
        />
      )}
    </section>
  );
};

export default Portfolio;