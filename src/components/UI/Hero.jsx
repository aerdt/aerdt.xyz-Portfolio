import React, { useEffect, useRef } from "react";
import me from "../../assets/images/me.png";
import CountUp from "react-countup";
import Typed from "typed.js";

const Hero = ({ language }) => {
  const typedRef = useRef(null);
  const typedMobileRef = useRef(null);


  const text =
    language === "EN"
      ? "Hi! I’m Artem, a creative individual with blending empathy and creativity to build delightful, user-centered digital products."
      : "Привіт! Я Артем, Продуктовий Дизайнер, з емпатією та креативністі я створюю приємні, орієнтовані на користувача продукти.";

  useEffect(() => {
  const options = {
    strings: [
      "Product Design",
      "Responsive Design",
      "UX/UI Design",
      "Prototyping",
      "Wireframing",
      "User Research",
      "Visual Design",
    ],
    typeSpeed: 40,
    backSpeed: 20,
    loop: true,
  };

  // Desktop Typed.js
  typedRef.current = new Typed("#typed-text", options);

  // Mobile Typed.js
  typedMobileRef.current = new Typed("#typed-text-mobile", options);

  // Cleanup
  return () => {
    typedRef.current.destroy();
    typedMobileRef.current.destroy();
  };
}, []);

  const socialLinks = [
    {
      href: "mailto:artemerdt@gmail.com",
      icon: "ri-mail-line",
      label: "Email",
      gradient: "from-red-500 to-red-600"
    },
    {
      href: "https://www.behance.net/aerdt",
      icon: "ri-behance-line",
      label: "Behance",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      href: "https://t.me/artemerdt",
      icon: "ri-send-plane-fill",
      label: "Telegram",
      gradient: "from-gray-700 to-gray-900"
    }
  ];

  const stats = [
    { end: 200, suffix: "+", labelEN: "Developed UI components", labelUA: "Розробив UI компонентів", icon: "ri-shapes-line", color: "text-green-600" },
    { end: 120, suffix: "+", labelEN: "Designed mobile app screens", labelUA: "Екранів мобільних застосунків", icon: "ri-smartphone-line", color: "text-purple-600" },
    { end: 25, suffix: "%", labelEN: "Reduced order completion time", labelUA: "Скоротив час замовлення", icon: "ri-history-line", color: "text-orange-600" },
    { end: 18, suffix: "%", labelEN: "Increased conversion rate", labelUA: "Підвищив коефіцієнт конверсії", icon: "ri-bar-chart-line", color: "text-blue-600" },
  ];

  return (
    <section className="relative min-h-screen pt-0 overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primaryColor/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-primaryColor/20 rotate-45 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-blue-500/20 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-10 w-8 h-8 bg-purple-500/20 rotate-12 animate-float animation-delay-2000"></div>

      <div className="container relative z-10 pt-20 pb-16">

        {/* ============= DESKTOP LAYOUT (lg and up) ================= */}
        <div className="hidden lg:flex items-center justify-between gap-12">

          {/* Desktop - Hero Left Content */}
          <div className="lg:w-1/2 xl:w-2/5">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h5
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  className="text-gray-600 font-semibold text-lg"
                >
                  {language === "EN" ? "Hello, I'm" : "Привіт, мене звати"}
                </h5>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  className="text-headingColor font-black text-4xl md:text-6xl xl:text-7xl leading-tight"
                >
                  Artem{" "}
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 bg-clip-text text-transparent">
                    Erdt
                  </span>
                </h1>

                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                  className="text-xl md:text-2xl text-gray-600 font-medium"
                >
                  {language === "EN" ? "Specialized in " : "Спеціалізуюсь на "}
                  <span className="text-primaryColor font-bold min-h-[1.2em] inline-block">
                    <span id="typed-text" />
                  </span>
                </div>
              </div>

              {/* Description */}
              <div
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="600"
                className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg"
              >
                <p className="text-gray-700 leading-relaxed text-lg">
                  {text}
                </p>
              </div>

              {/* Action Buttons */}
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className="flex flex-wrap items-center gap-4"
              >
                <a href="#contact">
                  <button className="group bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 modern-button">
                    <i className="ri-mail-line text-lg"></i>
                    {language === "EN" ? "Let's Connect" : "Контакти"}
                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                  </button>
                </a>

                <a href="#portfolio">
                  <button className="group bg-white border-2 border-purple-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-primaryColor hover:text-primaryColor transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                    <i className="ri-folder-line text-lg"></i>
                    {language === "EN" ? "View Portfolio" : "Портфоліо"}
                  </button>
                </a>
              </div>

              {/* Social Media */}
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className="space-y-4"
              >
                <h4 className="text-gray-600 font-semibold text-lg">
                  {language === "EN" ? "Connect with me" : "Звʼязатися зі мною"}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                        <i className={`${social.icon} text-lg`}></i>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop - Hero Center - Profile Image */}
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="200"
            data-aos-duration="800"
            className="lg:w-1/3 xl:w-1/3 flex justify-center my-12 lg:my-0"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="200"
                data-aos-duration="800"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primaryColor/20 to-blue-600/20 animate-spin-slow"
              ></div>
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="200"
                data-aos-duration="800"
                className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-reverse-spin"
              ></div>

              {/* Profile image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={me}
                  alt="Artem Erdt"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating badges - synced with image timing */}
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="200"
                data-aos-duration="800"
                className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slow"
              >
                🧑‍🎨 Product Designer
              </div>
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="200"
                data-aos-duration="800"
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slow animation-delay-1000"
              >
                🤖 Technology Recruiter
              </div>
            </div>
          </div>

          {/* Desktop - Hero Right - Statistics */}
          <div className="lg:w-1/3 xl:w-1/3">
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
              className="grid grid-cols-2 lg:grid-cols-1 gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={200 + (index * 50)}
                  className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${stat.color.replace('text-', 'bg-').replace('600', '100')} rounded-xl flex items-center justify-center`}>
                      <i className={`${stat.icon} text-xl ${stat.color}`}></i>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-headingColor">
                        <CountUp
                          start={0}
                          end={stat.end}
                          duration={2.5}
                          suffix={stat.suffix || ""}
                        />
                      </h2>
                      <p className="text-gray-600 font-medium text-sm">
                        {language === "EN" ? stat.labelEN : stat.labelUA}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement badges */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="mt-8 space-y-3"
            >
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border border-red-200 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-200 rounded-lg flex items-center justify-center">
                    <i className="ri-graduation-cap-line text-orange-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-800 text-sm">
                      {language === "EN" ? "GoIT School Graduate" : "Випускник школи GoIT"}
                    </p>
                    <p className="text-orange-400 text-xs">
                      {language === "EN" ? "Major: Product Design" : "Спеціалізація: Продукт дизайн"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============= MOBILE LAYOUT (below lg) ================= */}
        <div className="block lg:hidden space-y-12">

          {/* Mobile Step 1: Greeting & Title */}
          <div className="text-center space-y-6">
            <h5
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-gray-600 font-semibold text-lg"
            >
              {language === "EN" ? "Hello, I'm" : "Привіт, мене звати"}
            </h5>

            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-headingColor font-black text-4xl md:text-5xl leading-tight"
            >
              Artem{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 bg-clip-text text-transparent">
                Erdt
              </span>
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="text-xl text-gray-600 font-medium"
            >
              {language === "EN" ? "Specialized in " : "Спеціалізуюсь на "}
              <span className="text-primaryColor font-bold min-h-[1.2em] inline-block">
                <span id="typed-text-mobile" />
              </span>
            </div>
          </div>

          {/* Mobile Step 2: Avatar */}
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="400"
            data-aos-duration="800"
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-duration="800"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primaryColor/20 to-blue-600/20 animate-spin-slow"
              ></div>
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-duration="800"
                className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-reverse-spin"
              ></div>

              {/* Profile image container - smaller on mobile */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-6 border-white shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={me}
                  alt="Artem Erdt"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating badges - synced with image timing */}
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-duration="800"
                className="absolute -top-2 -right-2 bg-gradient-to-r from-primaryColor to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce-slow"
              >
                🧑‍🎨 Product Designer
              </div>
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-duration="800"
                className="absolute -bottom-2 -left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce-slow animation-delay-1000"
              >
                🤖 Technology Recruiter
              </div>
            </div>
          </div>

          {/* Mobile Step 3: Description */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
            className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg mx-4"
          >
            <p className="text-gray-700 leading-relaxed text-base text-center">
              {text}
            </p>
          </div>

          {/* Mobile Step 4: Action Buttons */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <button className="group w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 modern-button">
                <i className="ri-mail-line text-lg"></i>
                {language === "EN" ? "Let's Connect" : "Звʼяжемось?"}
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
            </a>

            <a href="#portfolio" className="w-full sm:w-auto">
              <button className="group w-full bg-white border-2 border-purple-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-primaryColor hover:text-primaryColor transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <i className="ri-folder-line text-lg"></i>
                {language === "EN" ? "View Portfolio" : "Переглянути портфоліо"}
              </button>
            </a>
          </div>

          {/* Mobile Step 5: Statistics Cards */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            className="grid grid-cols-2 gap-4 px-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={600 + (index * 50)}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center space-y-2">
                  <div className={`w-10 h-10 ${stat.color.replace('text-', 'bg-').replace('600', '100')} rounded-lg flex items-center justify-center mx-auto`}>
                    <i className={`${stat.icon} text-lg ${stat.color}`}></i>
                  </div>
                  <h2 className="text-2xl font-bold text-headingColor">
                    <CountUp
                      start={0}
                      end={stat.end}
                      duration={2.5}
                      suffix={stat.suffix || ""}
                    />
                  </h2>
                  <p className="text-gray-600 font-medium text-xs">
                    {language === "EN" ? stat.labelEN : stat.labelUA}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Step 6: Achievement Badge */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            className="px-4"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-graduation-cap-line text-blue-600"></i>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-blue-800 text-sm">
                    {language === "EN" ? "GoIT School Graduate" : "Випускник школи GoIT"}
                    </p>
                    <p className="text-blue-600 text-xs">
                    {language === "EN" ? "Major: Responsive Web Design" : "Спеціалізація: Адаптивний вебдизайн"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Step 7: Social Media */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            className="space-y-6 px-4"
          >
            <h4 className="text-gray-600 font-semibold text-lg text-center">
              {language === "EN" ? "Connect with me" : "Звʼязатися зі мною"}
            </h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <i className={`${social.icon} text-lg`}></i>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;