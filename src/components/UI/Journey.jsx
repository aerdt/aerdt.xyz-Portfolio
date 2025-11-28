import React, { useState } from "react";
import communityImg from "../../assets/images/community.png";
import goitImg from "../../assets/images/goit.png";
import freecodecampImg from "../../assets/images/freecodecamp.png";
import sbpImg from "../../assets/images/sbp.png";
import epamImg from "../../assets/images/epam.png";
import wilsonImg from "../../assets/images/wilson.png";

const Journey = ({ language }) => {
  const [journeyType, setJourneyType] = useState("design"); // "design" або "recruitment"

  const content = {
    EN: {
      badge: "Career Timeline",
      title: {
        design: "Design Journey",
        recruitment: "Recruitment Journey",
      },
      subtitle: {
        design:
          "Throughout my career in recruitment (7+ years), I’ve always been involved in design to some extent—whether creating booklets, flyers, advertisements, brand logos, design systems, or even web services. In 2024, I finally embraced my true passion in Product Design.",
        recruitment:
          "A vast background in recruitment, staffing, people operations and resource management helps me form an enterprise vision of TA practices and execute it successfully. My valuable knowledge and experience working with international stakeholders and local heads help successfully manage HQ vision and expectations.",
      },
      current: "Current",
      years: "Years",
      companies: "Companies",
      projects: "Projects",
      designBtn: "Design Journey",
      recruitmentBtn: "Recruitment Journey",
      milestones: {
        experience: "2+",
        companies: "2",
        projects: "8",
      },
    },
    UA: {
      badge: "Карʼєрний шлях",
      title: {
        design: "Робота в дизайні",
        recruitment: "Робота в рекрутації",
      },
      subtitle: {
        design:
          "Протягом моєї кар’єри у іншій сфері (понад 7 років) я завжди певною мірою займався дизайном — створював буклети, флаєри, рекламні матеріали, логотипи брендів, дизайн-системи або навіть вебсервіси. У 2024 році я нарешті усвідомив свою справжню пристрасть до продуктового дизайну.",
        recruitment:
          "Широкий досвід у рекрутингу, підборі персоналу, управлінні людьми та ресурсами допомагає мені формувати корпоративне бачення практик Talent Acquisition і успішно його реалізовувати. Мої цінні знання та досвід співпраці з міжнародними стейкхолдерами та локальними керівниками дозволяють ефективно управляти очікуваннями та баченням головного офісу.",
      },
      current: "Зараз",
      years: "Роки досвіду",
      companies: "Компанії",
      projects: "Проєкти",
      designBtn: "Дизайн",
      recruitmentBtn: "Рекрутинг",
      milestones: {
        experience: "2+",
        companies: "2",
        projects: "8",
      },
    },
  };

  const currentContent = content[language];

  // DESIGN JOURNEY
  const designJourney = [
    {
      id: 1,
      period: { EN: "2025 - now", UA: "2025 - зараз" },
      title: language === "EN" ? "UX/UI Designer" : "UX/UI Дизайнер",
      subtitle: "Part-time",
      company: (
        <a
          href="https://www.linkedin.com/company/client-feedback-hub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primaryColor font-semibold hover:text-orange-600"
        >
          Client Feedback Hub
        </a>
      ),
      icon: communityImg,
      color: "from-orange-500 to-orange-600",
      technologies: ["Figma", "FigJam", "ProtoPie", "Midjourney", "Sketch", "Adobe CC"],
      description:
        language === "EN"
          ? "Project focused on understanding user needs and improving the overall feedback experience. Conducted deep user research, identifying pain points, preferences and potential selling points to inform the product strategy. Through interviews, surveys and usability testing, gathered actionable insights that shaped the information architecture, user flows, and interface design."
          : "Проєкт спрямований на розуміння потреб користувачів та покращення загального досвіду отримання зворотного зв’язку. Проведено глибоке дослідження користувачів, виявлено проблемні моменти, вподобання та потенційні точки продажу, що допомогли сформувати стратегію продукту. Через інтерв’ю, опитування та тестування зручності використання було зібрано практичні інсайти, які вплинули на інформаційну архітектуру, користувацькі потоки та дизайн інтерфейсу.",
    },
        {
      id: 2,
      period: { EN: "2025 - now", UA: "2025 - зараз" },
      title: language === "EN" ? "UX/UI Designer" : "UX/UI Дизайнер",
      subtitle: "Occasional projects",
      company: (
        <a
          href="https://schubergphilis.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primaryColor font-semibold hover:text-orange-600"
        >
          Schuberg Philis
        </a>
      ),
      icon: sbpImg,
      color: "from-blue-500 to-blue-600",
      technologies: ["Figma", "FigJam", "ProtoPie", "Midjourney", "Sketch", "Adobe CC"],
      description:
        language === "EN"
          ? "A complete redesign of a SaaS workload management dashboard. Developed a comprehensive design system from scratch, including typography, color palettes, UI components, icons, and interactive patterns, ensuring consistency across all screens. The project involved user research, prototyping, and iterative testing, resulting in a scalable and cohesive interface that enhanced efficiency for users managing complex workloads."
          : "Повний редизайн панелі керування робочими проєктами у SaaS. Розробив комплексну дизайн-систему з нуля, включно з типографікою, палітрою кольорів, UI-компонентами, іконками та інтерактивними елементами, що забезпечило послідовність на всіх екранах. Проєкт включав дослідження користувачів, прототипування та ітеративне тестування, що призвело до створення масштабованого та цілісного інтерфейсу, який підвищив ефективність користувачів у керуванні складними завданнями.",
    },
    {
      id: 3,
      period: { EN: "2024 - 2025", UA: "2024 - 2025" },
      title: language === "EN" ? "Product Design" : "Продуктовий Дизайн",
      subtitle: language === "EN" ? "Education" : "Навчання",
      company: (
        <a
          href="https://goit.global"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primaryColor font-semibold hover:text-orange-600"
        >
          GoIT
        </a>
      ),
      icon: goitImg,
      color: "from-orange-500 to-orange-600",
      technologies: ["Figma", "FigJam", "ProtoPie", "Midjourney", "Sketch", "Adobe CC"],
      description:
        language === "EN"
          ? "An intensive, 6-month hands-on program during which I got experience with the skills needed to create user-centric digital products. The course emphasized practical experience, culminating in a portfolio of real-world projects."
          : "Інтенсивна 6-місячна практична програма, під час якої я здобув досвід у створенні цифрових продуктів, орієнтованих на користувача. Курс робив акцент на практичних завданнях і завершувався формуванням портфоліо реальних проєктів.",
    },
    {
      id: 4,
      period: { EN: "2024 - 2025", UA: "2024 - 2025" },
      title: language === "EN" ? "Responsive Web Design" : "Адаптивний Веб-Дизайн",
      subtitle: language === "EN" ? "Education" : "Навчання",
      company: (
        <a
          href="https://www.freecodecamp.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primaryColor font-semibold hover:text-orange-600"
        >
          freeCodeCamp
        </a>
      ),
      icon: freecodecampImg,
      color: "from-gray-500 to-gray-800",
      technologies: ["HTML/CSS", "JavaScript", "Visual Studio", "GitHub"],
      description:
        language === "EN"
          ? "A comprehensive online course that took roughly 300 hours to complete. Focused on learning the foundational skills required to build modern, accessible and mobile-friendly websites."
          : "Комплексний онлайн-курс, який тривав приблизно 300 годин. Орієнтований на вивчення базових навичок, необхідних для створення сучасних, доступних та адаптивних вебсайтів.",
    },
  ];

  // RECRUITMENT JOURNEY
  const recruitmentJourney = [
    {
      id: 1,
      period: { EN: "2025 - now", UA: "2025 - зараз" },
      title: language === "EN" ? "Technology Recruiter" : "Технічний Рекрутер",
      subtitle: "Full-time",
      company: (
        <a
          href="https://schubergphilis.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primaryColor font-semibold hover:text-orange-600"
        >
          Schuberg Philis
        </a>
      ),
      icon: sbpImg,
      color: "from-blue-500 to-blue-600",
      technologies: ["LinkedIn Recruiter", "Copilot", "Airia", "Greenhouse", "Boolean Search", "X-Ray"],
      description:
        language === "EN"
          ? "Manage end-to-end recruitment for niche roles in a self-managed organization, enhancing GenAI talent capabilities. Utilize AI tools (Airia, Copilot, internal LLM) to automate sourcing and selection, and design efficient, AI-driven recruitment workflows for scalability."
          : "Керую повним циклом рекрутингу для нішевих позицій у самокерованій організації, сприяючи розвитку компетенцій у сфері GenAI. Використовую інструменти штучного інтелекту (Airia, Copilot, внутрішню LLM) для автоматизації пошуку та відбору кандидатів, а також розробляю ефективні AI-орієнтовані процеси рекрутингу для підвищення масштабованості та продуктивності.",
    },
    {
      id: 2,
      period: { EN: "2019 - 2025", UA: "2019 - 2025" },
      title: language === "EN" ? "Recruitment Lead" : "Керівник Рекрутингу",
      subtitle: "Full-time",
      company: (
        <a
          href="https://www.epam.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primaryColor font-semibold hover:text-orange-600"
        >
          EPAM Systems
        </a>
      ),
      icon: epamImg,
      color: "from-gray-600 to-gray-600",
      technologies: ["LinkedIn Recruiter", "GitHub", "Behance", "Boolean Search", "X-Ray"],
      description:
        language === "EN"
          ? "Oversee full-cycle recruitment and talent strategy across the organization, managing hiring campaigns, partnerships, and employer branding initiatives. Drive process optimization and long-term recruitment planning while collaborating with C-level stakeholders across EMEA. Lead market mapping projects and build sustainable pipelines for critical roles."
          : "Керував повним циклом рекрутингу та стратегією залучення талантів у компанії, координував рекрутингові кампанії, партнерства та ініціативи з розвитку бренду роботодавця. Оптимізував процеси та розробляв довгострокові плани найму, співпрацюючи з топменеджментом регіону EMEA. Очолював аналітичні дослідження ринку праці та формував стабільні воронки кандидатів для ключових ролей.",
    },
    {
      id: 3,
      period: { EN: "2017 - 2019", UA: "2017 - 2019" },
      title: language === "EN" ? "Senior Talent Acquisition Consultant" : "Старший Консультант з Підбору Талантів",
      subtitle: "Full-time",
      company: (
        <a
          href="https://www.wilsonhr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primaryColor font-semibold hover:text-orange-600"
        >
          Wilson
        </a>
      ),
      icon: wilsonImg,
      color: "from-[#00ae8a] to-[#00ae8a]",
      technologies: ["LinkedIn Recruiter", "Lever", "Taleo", "Greenhouse", "iCIMS", "Boolean Search", "X-Ray"],
      description:
        language === "EN"
          ? "Led global full-cycle recruitment for IT clients, including Atlassian, Google, IBM, and TomTom. Delivered RPO solutions and established new client offices worldwide (NA, EMEA, APAC). Managed ATS systems (Lever, Greenhouse, Taleo) and mentored sourcing interns. Specialized in technical recruitment, negotiations, and onboarding."
          : "Здійснював повний цикл рекрутингу для міжнародних ІТ-клієнтів (Atlassian, Google, IBM, TomTom), надавав RPO-рішення та відкривав нові офіси клієнтів по всьому світу (NA, EMEA, APAC). Адміністрував системи ATS (Lever, Greenhouse, Taleo) та менторив сорсерів-початківців. Спеціалізувався на технічному рекрутингу, переговорах та онбордингу кандидатів.",
    },
  ];

  const journeyData = journeyType === "design" ? designJourney : recruitmentJourney;

  return (
    <section
      id="journey"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primaryColor/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-primaryColor/10 text-primaryColor px-3 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="ri-map-pin-time-line"></i>
            {currentContent.badge}
          </div>

          {/* Toggle buttons */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setJourneyType("design")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${journeyType === "design"
                    ? "bg-white text-primaryColor shadow-sm"
                    : "text-gray-600 hover:text-orange-600"
                  }`}
              >
                {currentContent.designBtn}
              </button>
              <button
                onClick={() => setJourneyType("recruitment")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${journeyType === "recruitment"
                    ? "bg-white text-primaryColor shadow-sm"
                    : "text-gray-600 hover:text-orange-600"
                  }`}
              >
                {currentContent.recruitmentBtn}
              </button>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-headingColor mb-4">
            {currentContent.title[journeyType]}
          </h2>
          <p className="text-base sm:text-lg text-smallTextColor max-w-2xl mx-auto">
            {currentContent.subtitle[journeyType]}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-8">
            {journeyData.map((item, index) => (
              <div key={item.id} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-2 top-10 w-4 h-4 bg-primaryColor rounded-full border-2 border-white shadow"></div>

                {/* Card */}
                <div
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.color} text-white px-3 py-1.5 rounded-xl text-sm font-bold`}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-6 h-6 filter brightness-0 invert"
                      />
                      <span>{item.period[language]}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-headingColor mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3 text-sm sm:text-base">
                    <span className="text-smallTextColor font-medium">
                      {item.subtitle}
                    </span>
                    <span className="hidden sm:inline text-gray-300">•</span>
                    <span className="text-primaryColor font-semibold">
                      {item.company}
                    </span>
                  </div>

                  <p className="text-smallTextColor mb-4 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primaryColor/10 text-primaryColor text-xs sm:text-sm font-medium rounded-lg hover:bg-primaryColor/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
