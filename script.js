const projects = {
  "frontend-assignment": {
    title: "Frontend Assignment",
    summary: "Responsive frontend project deployed on Netlify with source code available on GitHub.",
    image: "assets/MyAssets/project 1.png",
    stack: ["HTML", "CSS", "JavaScript", "Netlify", "GitHub"],
    live: "https://699495a9ca0e4453735ea916--iridescent-cascaron-b3abaf.netlify.app/",
    github: "https://github.com/SifatAsifAsif/Assignment",
    description:
      "Frontend Assignment is a responsive frontend project focused on clean layout, visual presentation, and accessible page structure. It is deployed publicly on Netlify and backed by a GitHub repository.",
    challenges:
      "The main challenge was keeping the interface organized across screen sizes while maintaining a clean structure for future updates.",
    future:
      "Future improvements can include stronger component organization, more interactive states, and additional polish for accessibility and performance."
  },
  "mission-restart": {
    title: "Mission Restart Assignment 2",
    summary: "React frontend project with a live Surge deployment and complete GitHub source.",
    image: "assets/MyAssets/project 2.png",
    stack: ["React", "JavaScript", "CSS", "Surge", "GitHub"],
    live: "https://leet-assignment-missionrestart-assignment2-3301-1337.surge.sh/",
    github: "https://github.com/SifatAsifAsif/Mission-Restart-Assignment-2/tree/main",
    description:
      "Mission Restart Assignment 2 is a React-based frontend project built with reusable UI thinking and deployed live through Surge.",
    challenges:
      "The key challenge was organizing the React implementation so the interface stayed manageable while matching the assignment requirements.",
    future:
      "Future improvements can include better state handling, refined responsive details, and stronger UI feedback for user actions."
  },
  "level-two-backend": {
    title: "Level 2 Assignment 2",
    summary: "Backend API project deployed on Vercel with production source available on GitHub.",
    image: "assets/MyAssets/project 3.png",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Vercel", "REST API"],
    live: "https://level-2-assignment-2-mu-nine.vercel.app/",
    github: "https://github.com/0xiloveyou/Level_2_Assignment_2",
    description:
      "Level 2 Assignment 2 is a backend project focused on API behavior, route organization, database work, and public deployment.",
    challenges:
      "The main challenge was keeping backend logic clear while preparing the project for a public deployment flow.",
    future:
      "Future improvements can include API documentation, stronger validation coverage, and automated tests around the core routes."
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
