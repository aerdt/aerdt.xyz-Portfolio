import React from "react";

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const content = {
    EN: {
      ctaTitle: "Ready to work together?",
      ctaSubtitle: "Let's create something amazing",
      ctaButton: "Start a conversation",
      quickLinks: "Quick Links",
      connect: "Connect",
      location: "Based in Amsterdam",
      availability: "Available for freelance",
      navigation: {
        about: "About",
        journey: "Journey",
        portfolio: "Portfolio",
        skills: "Skills",
        contact: "Contact"
      },
      copyright: `© ${currentYear} All credits go to 🙌 omardev.xyz`,
      madeWith: "Stand with 🇺🇦 Ukraine"
    },
    UA: {
      ctaTitle: "Попрацюємо разом?",
      ctaSubtitle: "Cтворимо щось неймовірне",
      ctaButton: "Розпочати розмову",
      quickLinks: "Швидкі посилання",
      connect: "Зв’язатися",
      location: "Знаходжусь в Амстердамі",
      availability: "Доступний для фрилансу",
      navigation: {
        about: "Про мене",
        journey: "Досвід",
        portfolio: "Портфоліо",
        skills: "Навички",
        contact: "Контакт"
      },
      copyright: `© ${currentYear} Всі авторські права захищені 🙌 omardev.xyz`,
      madeWith: "З любов’ю 🇺🇦 до України"
    }
  };

  const currentContent = content[language];

  const socialLinks = [
    {
      href: "https://www.behance.net/aerdt",
      icon: "ri-behance-line",
      label: "Behance",
      platform: "Artem Erdt",
      color: "from-blue-600 to-blue-700"
    },
    {
      href: "https://t.me/artemerdt",
      icon: "ri-send-plane-fill",
      label: "Telegram",
      platform: "@artemerdt",
      color: "from-gray-700 to-gray-800"
    }
  ];

  const navigationLinks = [
    { href: "#about", label: currentContent.navigation.about },
    { href: "#journey", label: currentContent.navigation.journey },
    { href: "#portfolio", label: currentContent.navigation.portfolio },
    { href: "#skills", label: currentContent.navigation.skills },
    { href: "#contact", label: currentContent.navigation.contact }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="relative bg-white border-t border-gray-100">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238873ef' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* CTA Section */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="max-w-md">
              <h2 className="text-3xl sm:text-4xl font-bold text-headingColor mb-4 leading-tight">
                {currentContent.ctaTitle}
              </h2>
              <p className="text-xl text-smallTextColor mb-8 leading-relaxed">
                {currentContent.ctaSubtitle}
              </p>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="inline-block group"
              >
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                  <i className="ri-chat-3-line text-xl group-hover:scale-110 transition-transform duration-200"></i>
                  {currentContent.ctaButton}
                  <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform duration-200"></i>
                </div>
              </a>

              {/* Status badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="flex items-center gap-2 text-sm text-smallTextColor bg-green-50 px-3 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {currentContent.availability}
                </div>
                <div className="flex items-center gap-2 text-sm text-smallTextColor bg-blue-50 px-3 py-2 rounded-full">
                  <i className="ri-map-pin-line text-blue-500"></i>
                  {currentContent.location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation & Social */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-headingColor mb-6">
                  {currentContent.quickLinks}
                </h3>
                <nav className="space-y-4">
                  {navigationLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="block text-smallTextColor hover:text-primaryColor font-medium transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Social Connect */}
              <div>
                <h3 className="text-lg font-semibold text-headingColor mb-6">
                  {currentContent.connect}
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <i className={`${link.icon} text-xl text-white`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-headingColor group-hover:text-primaryColor transition-colors duration-200">
                          {link.label}
                        </div>
                        <div className="text-xs text-smallTextColor">
                          {link.platform}
                        </div>
                      </div>
                      <i className="ri-external-link-line text-smallTextColor group-hover:text-primaryColor transition-colors duration-200"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-smallTextColor">
              <span>{currentContent.copyright}</span>
              <span className="hidden sm:block">•</span>
              <span>{currentContent.madeWith}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;