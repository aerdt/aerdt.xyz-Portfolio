import portfolioImg01 from "../images/portfolio-01.png"; // Dwelli
import portfolioImg02 from "../images/portfolio-02.png"; // theCore
import portfolioImg03 from "../images/portfolio-03.png"; // VORCL
import portfolioImg04 from "../images/portfolio-04.png"; // CryptoB
import portfolioImg05 from "../images/portfolio-05.png"; // Gameplify
import portfolioImg06 from "../images/portfolio-06.png"; // Resident Complex
import portfolioImg07 from "../images/portfolio-07.png"; // TFD
import cryptobImg01 from "../images/cryptob-1.png"; // CryptoB - 1
import cryptobImg02 from "../images/cryptob-2.png"; // CryptoB - 2
import cryptobImg03 from "../images/cryptob-3.png"; // CryptoB - 3
import dwelliImg01 from "../images/dwelli-1.png"; // Dwelli - 1
import dwelliImg02 from "../images/dwelli-2.png"; // Dwelli - 2
import dwelliImg03 from "../images/dwelli-3.png"; // Dwelli - 3
import gameplifyImg01 from "../images/gameplify-1.png"; // Gameplify - 1
import gameplifyImg02 from "../images/gameplify-2.png"; // Gameplify - 2
import gameplifyImg03 from "../images/gameplify-3.png"; // Gameplify - 3
import gameplifyImg04 from "../images/gameplify-4.png"; // Gameplify - 4
import residentComplexImg01 from "../images/residential-1.png"; // Resident Complex - 1
import residentComplexImg02 from "../images/residential-2.png"; // Resident Complex - 2
import residentComplexImg03 from "../images/residential-3.png"; // Resident Complex - 3
import theCoreImg01 from "../images/thecore-1.png"; // theCore - 1
import thecoreImg02 from "../images/thecore-2.png"; // theCore - 2
import thecoreImg03 from "../images/thecore-3.png"; // theCore - 3
import vorclImg01 from "../images/vorcl-1.png"; // VORCL - 1
import vorclImg02 from "../images/vorcl-2.png"; // VORCL - 2
import vorclImg03 from "../images/vorcl-3.png"; // VORCL - 3
import tfdImg01 from "../images/tfd-1.png"; // TFD - 1
import tfdImg02 from "../images/tfd-2.png"; // TFD - 2
import tfdImg03 from "../images/tfd-3.png"; // TFD - 3

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg07,
    gallery: [portfolioImg07, tfdImg01, tfdImg02, tfdImg03],
    category: "Commercial",
    title: "The Four Deuces (Portfolio Website)",
    date: "2025-09-01",
    year: 2025,
    priority: 1,
    duration: "2 months",
    client: "The Four Deuces",
    descriptionEN:
      "Developed a fully custom website for a tattoo shop, leveraging React for interactivity and HTML5/CSS3 for structure and styling. Implemented bespoke animations, such as mouse-tracking image angle changes, to enhance user engagement. Integrated a contact form with Formspree for seamless submissions and utilized Cloudinary for efficient media management and optimization.",
    descriptionUA:
      "Розробив повністю кастомізований вебсайт для тату-салону, використовуючи React для інтерактивності та HTML5/CSS3 для структури й стилізації. Реалізував унікальні анімації, зокрема зміну кута зображення при русі миші, щоб підвищити залученість користувачів. Інтегрував контактну форму з Formspree для зручної відправки повідомлень та використав Cloudinary для ефективного керування й оптимізації медіа.",
    technologies: [
      "React",
      "HTML",
      "CSS",
      "Figma",
      "Adobe CC",
      "ProtoPie",
    ],
    siteUrl: "https://thefourdeuces.nl/",
  },
  {
    id: "02",
    imgUrl: portfolioImg03,
    gallery: [portfolioImg03, vorclImg01, vorclImg02, vorclImg03],
    category: "Commercial",
    title: "VORCL (AI Mobile Agent)",
    date: "2025-07-01",
    year: 2025,
    priority: 2,
    duration: "2 months",
    client: "VORCL",
    descriptionEN:
      "Designed from scratch a mobile-first AI-powered assistant called VORCL that helps professionals organize workflows, manage tasks, and prioritize activities efficiently.",
    descriptionUA:
      "Розробив з нуля мобільного AI-асистента під назвою VORCL, який допомагає професіоналам організовувати робочі процеси, керувати завданнями та ефективно розставляти пріоритети.",
    technologies: [
      "Figma",
      "Adobe CC",
      "ProtoPie",
      "Base44",
      "Lovable.ai",
      "Claude.ai",
      "FigJam",
    ],
    siteUrl: "",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    gallery: [portfolioImg02, theCoreImg01, thecoreImg02, thecoreImg03],
    category: "Commercial",
    title: "theCore (SaaS Dashboard)",
    date: "2025-05-01",
    year: 2025,
    priority: 3,
    duration: "5 months and ongoing",
    client: "Schuberg Philis B.V.",
    descriptionEN:
      "Redesigned centralized dashboard called theCore for Schuberg Philis B.V. to monitor team allocation, project health, and operational performance. It streamlines project management with real-time insights for leadership and delivery teams.",
    descriptionUA:
      "Переробив централізовану панель керування theCore для Schuberg Philis B.V. для моніторингу завантаженості команд, стану проєктів та операційної ефективності. Вона оптимізує управління проєктами завдяки аналітиці в реальному часі для керівництва та команд доставки.",
    technologies: [
      "Figma",
      "Adobe CC",
      "HTML 5",
      "CSS 3",
      "React JS",
      "Lovable.ai",
      "Claude.ai",
      "FigJam",
      "Miro",
    ],
    siteUrl: "",
  },
  {
    id: "04",
    imgUrl: portfolioImg01,
    gallery: [portfolioImg01, dwelliImg01, dwelliImg02, dwelliImg03],
    category: "Pet",
    title: "Dwelli (Retail Mobile Application)",
    date: "2025-03-01",
    year: 2025,
    priority: 4,
    duration: "2 months",
    client: "Pet Project",
    descriptionEN:
      "Designed a mobile app for real estate retail, featuring AR-powered property viewing to let users virtually explore apartments and houses before visiting in person.",
    descriptionUA:
      "Спроєктував мобільний застосунок для ринку нерухомості з функцією AR-перегляду, що дозволяє користувачам віртуально оглядати квартири та будинки перед особистим відвідуванням.",
    technologies: [
      "Figma",
      "Adobe CC",
      "ProtoPie",
      "Miro",
    ],
    siteUrl: "https://www.behance.net/gallery/220827645/Real-Estate-Mobile-Application-iOS-AR",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    gallery: [portfolioImg05, gameplifyImg01, gameplifyImg02, gameplifyImg03, gameplifyImg04],
    category: "Pet",
    title: "Gameplify (E-sports Web Service)",
    date: "2025-01-01",
    year: 2025,
    priority: 5,
    duration: "2 months",
    client: "Pet Project",
    descriptionEN:
      "Designed from scratch a platform where gamers can find coaches, build teams, and participate in e-sport tournaments. It fosters community growth and competitive collaboration.",
    descriptionUA:
      "Розробив з нуля платформу, де гравці можуть знаходити тренерів, створювати команди та брати участь у кіберспортивних турнірах. Вона сприяє розвитку спільноти та конкурентній співпраці.",
    technologies: [
      "Figma",
      "Adobe CC",
      "ProtoPie",
      "Miro",
    ],
    siteUrl: "https://www.behance.net/gallery/217835693/Gamplify-Gamer-Hub",
  },
  {
    id: "06",
    imgUrl: portfolioImg04,
    gallery: [portfolioImg04, cryptobImg01, cryptobImg02, cryptobImg03],
    category: "Pet",
    title: "CryptoB (Cryptocurrency Landing Page)",
    date: "2024-11-01",
    year: 2024,
    priority: 6,
    duration: "2 months",
    client: "Pet Project",
    descriptionEN:
      "Redesigned a modern, responsive landing page for a cryptocurrency platform, designed to clearly communicate value propositions, build trust, and drive conversions.",
    descriptionUA:
      "Переробив сучасну адаптивну лендинг-сторінку для криптовалютної платформи, яка чітко комунікує ціннісні пропозиції, формує довіру та стимулює конверсії.",
    technologies: [
      "Figma",
      "Adobe CC",
      "ProtoPie",
      "Miro",
    ],
    siteUrl: "https://www.behance.net/gallery/213304343/Crypto-App-Landing-Page-Adaptation",
  },
  {
    id: "07",
    imgUrl: portfolioImg06,
    gallery: [portfolioImg06, residentComplexImg01, residentComplexImg02, residentComplexImg03],
    category: "Pet",
    title: "Dnipro Rivera (Residential Complex Webpage)",
    date: "2024-10-01",
    year: 2024,
    priority: 7,
    duration: "1 month",
    client: "Pet Project",
    descriptionEN:
      "Designed from scratch a responsive website for a residential complex, showcasing property listings with interactive viewing options, floor plans, and booking features.",
    descriptionUA:
      "Розробив з нуля адаптивний вебсайт для житлового комплексу з інтерактивними опціями перегляду нерухомості, планування поверхів та функціями бронювання.",
    technologies: [
      "Figma",
      "Adobe CC",
      "ProtoPie",
      "Miro",
    ],
    siteUrl: "",
  },
];

export default portfolios;