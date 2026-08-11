const projects = {
  "carmart": {
    title: "CARMART",

    summary: "A modern full-stack car marketplace platform designed to simplify vehicle discovery, selling, purchasing, and order management through role-based experiences.",

    image: "assets/MyAssets/p1.png",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "REST API",
      "Vercel"
    ],

    live: "https://carmart-frontend.vercel.app/",

    github: "https://github.com/0xiloveyou/carmart-frontend",

    description:
      "CarMart is a modern full-stack car marketplace built to provide a complete vehicle buying and selling experience. The platform includes vehicle discovery, search and filtering, favorites, purchasing, order management, and dedicated Customer, Seller, and Admin dashboards. The frontend is built with Next.js, React, TypeScript, and Tailwind CSS, while the backend provides secure REST APIs using Node.js, Express.js, PostgreSQL, and Prisma.",

    challenges:
      "The main challenge was designing a complete role-based marketplace where Customers, Sellers, and Admins have different workflows and permissions while keeping authentication, vehicle management, purchases, and orders secure and organized across the frontend and backend.",

    future:
      "Future improvements can include advanced vehicle comparison, real-time notifications, improved search and filtering, seller analytics, enhanced payment workflows, and additional marketplace features."
  },

  "fix-it-now": {
    title: "Fix It Now",

    summary: "A full-featured home service marketplace built for discovering services, managing bookings, processing payments, and connecting customers with service providers.",

    image: "assets/MyAssets/p2.png",

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Stripe",
      "REST API"
    ],

    live: "https://fix-it-now-frontend-seven.vercel.app/",

    github: "https://github.com/0xiloveyou/fix-it-now-frontend",

    description:
      "Fix It Now is a full-stack home service marketplace that allows users to discover services, manage bookings, make payments, and leave reviews. The platform includes secure JWT authentication, role-based dashboards, service discovery, booking management, Stripe payment integration, and administrative functionality. The frontend provides a responsive production-ready interface while the backend delivers scalable REST APIs.",

    challenges:
      "The main challenge was connecting multiple marketplace workflows such as authentication, service discovery, booking management, payments, reviews, and role-based dashboards while keeping the application responsive and easy to use.",

    future:
      "Future improvements can include real-time booking notifications, provider availability scheduling, advanced service filtering, improved analytics, messaging between customers and providers, and enhanced payment functionality."
  },

  "mission-restart": {
    title: "Ticket Booking System",

    summary: "A React-based ticket booking frontend focused on component-driven UI development, responsive design, and a live production deployment.",

    image: "assets/MyAssets/p3.png",

    stack: [
      "React",
      "JavaScript",
      "CSS",
      "Surge",
      "GitHub"
    ],

    live: "https://leet-assignment-missionrestart-assignment2-3301-1337.surge.sh/",

    github: "https://github.com/SifatAsifAsif/Mission-Restart-Assignment-2/tree/main",

    description:
      "Ticket Booking System is a React-based frontend project designed around a ticket booking experience. The project focuses on reusable UI components, structured page layouts, responsive presentation, and a smooth user interface. It is deployed publicly through Surge with the complete source code available on GitHub.",

    challenges:
      "The main challenge was organizing the React components and interface structure so that the booking experience remained clean, responsive, and easy to maintain while satisfying the project requirements.",

    future:
      "Future improvements can include real booking functionality, stronger state management, ticket availability handling, payment integration, authentication, and improved user feedback throughout the booking process."
  },
  /*
  taskflow: {
    title: "TaskFlow API",
    summary: "Role-based task management backend for teams, priorities, comments, and deadline tracking.",
    image: "assets/projects/task-api.svg",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Postman"],
    live: "https://example.com/taskflow",
    github: "https://github.com/0xiloveyou/taskflow-api",
    description:
      "TaskFlow API is a backend service for organizing team tasks. It includes authentication, user roles, workspace-level permissions, task filters, comments, and clean route separation so the API can support a real dashboard or mobile app.",
    challenges:
      "The main challenge was designing permissions without making every controller hard to read. I solved it by separating authentication middleware, role checks, validation, and service logic into small focused layers.",
    future:
      "Future plans include real-time notifications, automated email reminders, activity logs, file attachments, and a dashboard analytics endpoint for team productivity reports."
  },
  shopcore: {
    title: "ShopCore Backend",
    summary: "E-commerce API with product catalog, cart, order flow, admin inventory, and checkout-ready structure.",
    image: "assets/projects/ecommerce-api.svg",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe Ready", "Cloud Deploy"],
    live: "https://example.com/shopcore",
    github: "https://github.com/0xiloveyou/shopcore-backend",
    description:
      "ShopCore Backend powers an online store with product management, category filtering, cart operations, order creation, and admin-only inventory controls. The API is structured to support payment integration and a separate frontend client.",
    challenges:
      "The hardest part was keeping order totals trustworthy. I handled prices on the server side, recalculated cart totals before order creation, and kept admin routes protected from normal customer accounts.",
    future:
      "Planned improvements include payment webhooks, coupon rules, stock reservation, product image uploads, advanced search, and a stronger test suite for checkout behavior."
  },
  learnhub: {
    title: "LearnHub Server",
    summary: "Learning platform backend for courses, lessons, enrollments, reviews, and instructor workflows.",
    image: "assets/projects/learning-platform.svg",
    stack: ["Express.js", "MongoDB", "JWT", "REST API", "Role Auth", "Multer"],
    live: "https://example.com/learnhub",
    github: "https://github.com/0xiloveyou/learnhub-server",
    description:
      "LearnHub Server supports a course platform where students can enroll in courses, instructors can manage lessons, and users can review completed learning content. It focuses on organized API routes and protected resource access.",
    challenges:
      "The biggest challenge was separating student and instructor permissions while keeping shared course data easy to query. I used role-aware middleware and clear ownership checks for course updates.",
    future:
      "Future improvements include progress tracking, certificate generation, video processing integration, quiz modules, and recommendation endpoints based on enrolled course categories."
  }
  */
};

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");
const preloader = document.querySelector("#preloader");
const contactForm = document.querySelector("#contact-form");
const whatsappButton = document.querySelector("#whatsapp-button");
const formStatus = document.querySelector("#form-status");
const animatedCodeText = document.querySelector(".animated-code-text");

const contactConfig = {
  email: "care.1337.leet@gmail.com",
  whatsapp: "8801580320488"
};

const stackIcons = {
  "Node.js": { type: "i", className: "devicon-nodejs-plain colored" },
  "Express.js": {
    type: "img",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    className: "invert-icon"
  },
  MongoDB: { type: "i", className: "devicon-mongodb-plain colored" },
  Mongoose: { type: "i", className: "devicon-mongoose-original colored" },
  JWT: { type: "i", className: "fas fa-key color-jwt" },
  Postman: { type: "i", className: "devicon-postman-plain colored" },
  "Stripe Ready": { type: "i", className: "fas fa-credit-card color-api" },
  "Cloud Deploy": { type: "i", className: "fas fa-cloud-arrow-up color-render" },
  "REST API": { type: "i", className: "fas fa-network-wired color-rest" },
  "Role Auth": { type: "i", className: "fas fa-user-shield color-validation" },
  Multer: { type: "i", className: "fas fa-file-arrow-up color-api" },
  HTML: { type: "i", className: "devicon-html5-plain colored" },
  CSS: { type: "i", className: "devicon-css3-plain colored" },
  JavaScript: { type: "i", className: "devicon-javascript-plain colored" },
  React: { type: "i", className: "devicon-react-original colored" },
  Netlify: { type: "i", className: "fas fa-cloud color-render" },
  Surge: { type: "i", className: "fas fa-cloud-arrow-up color-api" },
  GitHub: { type: "i", className: "devicon-github-original color-github" },
  Vercel: { type: "i", className: "devicon-vercel-original color-github" }
};

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (preloader) {
  window.addEventListener("load", () => {
    window.setTimeout(() => {
      preloader.classList.add("hidden");
    }, 1050);
  });
}

function startCodeTyping() {
  if (!animatedCodeText) {
    return;
  }

  const phrases = [
    "secure REST APIs",
    "JWT auth flows",
    "MongoDB schemas",
    "clean service layers"
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const phrase = phrases[phraseIndex];
    animatedCodeText.textContent = `"${phrase.slice(0, charIndex)}"`;

    if (!deleting && charIndex < phrase.length) {
      charIndex += 1;
      window.setTimeout(tick, 70);
      return;
    }

    if (!deleting && charIndex === phrase.length) {
      deleting = true;
      window.setTimeout(tick, 1200);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      window.setTimeout(tick, 36);
      return;
    }

    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    window.setTimeout(tick, 300);
  }

  tick();
}

startCodeTyping();

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

function getContactMessage() {
  if (!contactForm) {
    return null;
  }

  const data = new FormData(contactForm);
  const name = String(data.get("name") || "").trim();
  const to = String(data.get("to") || contactConfig.email).trim();
  const from = String(data.get("from") || "").trim();
  const type = String(data.get("type") || "").trim();
  const message = String(data.get("message") || "").trim();

  return { name, to, from, type, message };
}

function validateContactMessage(details) {
  if (!details.name || !details.to || !details.from || !details.type || !details.message) {
    return "Please fill in every field first.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.from)) {
    return "Please enter a valid from email address.";
  }

  return "";
}

function buildContactBody(details) {
  return [
    `Name: ${details.name}`,
    `To: ${details.to}`,
    `From: ${details.from}`,
    `Project Type: ${details.type}`,
    "",
    "Message:",
    details.message
  ].join("\n");
}

function setFormStatus(message, isError = false) {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.classList.toggle("error", isError);
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const details = getContactMessage();
    const error = validateContactMessage(details);

    if (error) {
      setFormStatus(error, true);
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry: ${details.type}`);
    const body = encodeURIComponent(buildContactBody(details));
    const to = encodeURIComponent(details.to);
    const from = encodeURIComponent(details.from);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&from=${from}&su=${subject}&body=${body}`;
    const opened = window.open(gmailUrl, "_blank", "noreferrer");

    if (!opened) {
      window.location.href = gmailUrl;
    }

    setFormStatus("Opening Gmail with your message ready.");
  });
}

if (whatsappButton) {
  whatsappButton.addEventListener("click", () => {
    const details = getContactMessage();
    const error = validateContactMessage(details);

    if (error) {
      setFormStatus(error, true);
      return;
    }

    const text = encodeURIComponent(buildContactBody(details));
    window.open(`https://wa.me/${contactConfig.whatsapp}?text=${text}`, "_blank", "noreferrer");
    setFormStatus("Opening WhatsApp with the message ready.");
  });
}

function renderProjectDetails() {
  const title = document.querySelector("#project-title");
  if (!title) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "frontend-assignment";
  const project = projects[id] || projects["frontend-assignment"];

  document.title = `${project.title} | Rafiq Ahammed`;
  title.textContent = project.title;
  document.querySelector("#project-summary").textContent = project.summary;
  document.querySelector("#project-image").src = project.image;
  document.querySelector("#project-image").alt = `${project.title} preview`;
  document.querySelector("#live-link").href = project.live;
  document.querySelector("#github-link").href = project.github;
  document.querySelector("#project-description").textContent = project.description;
  document.querySelector("#project-challenges").textContent = project.challenges;
  document.querySelector("#project-future").textContent = project.future;

  const stack = document.querySelector("#project-stack");
  stack.innerHTML = "";
  project.stack.forEach((item) => {
    const card = document.createElement("div");
    card.className = "icon-card";

    const icon = stackIcons[item];
    if (icon?.type === "img") {
      const image = document.createElement("img");
      image.src = icon.src;
      image.alt = item;
      if (icon.className) {
        image.className = icon.className;
      }
      card.appendChild(image);
    } else {
      const symbol = document.createElement("i");
      symbol.className = icon?.className || "fas fa-code color-api";
      symbol.setAttribute("aria-hidden", "true");
      card.appendChild(symbol);
    }

    const label = document.createElement("span");
    label.textContent = item;
    card.appendChild(label);
    stack.appendChild(card);
  });
}

renderProjectDetails();
