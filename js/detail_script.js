// Define paragraphs for each topic
const paragraphs = {
  backend:
    "As a Backend Developer at PT Finexus Jakarta for 2 years, I was responsible for building and maintaining backend systems using Java, SQL, Linux, and SOAP APIs. I developed backend logic to handle end-of-day credit card transaction calculations and ensured stability across SIT and UAT environments through log analysis, issue resolution, and proactive system maintenance.\n \n My role also involved writing and executing test cases, collaborating with users during testing, and supporting deployments to production. I provided after-hours support for critical operations, conducted financial and data recovery analysis, and offered guidance to internal teams on backend flow and technical processes.\n \n With strong expertise in credit card systems — including issuance, interest calculations, installments, and statement generation — I consistently applied critical thinking to resolve issues efficiently and improve backend performance, contributing to seamless operations and high client satisfaction.",
  webdev:
    "I am a self-taught web developer with a solid foundation in HTML, CSS, and JavaScript, with hands-on experience using Bootstrap 5 and jQuery to build responsive and dynamic websites. Over the past six months, I have focused on learning JavaScript to enhance my frontend development skills. \n \nMy journey in web development began at university, where I learned the fundamentals through Laravel, giving me an early understanding of backend integration and full-stack workflows. This background has equipped me with both practical and academic perspectives in developing modern web applications.",
  debug:
    "I am experienced in analyzing system issues in production and UAT environments using tools like Glogg to scan and trace logs efficiently. When such tools are unavailable, I utilize Linux commands to navigate and investigate directly on the server. \n\nI am skilled in identifying root causes by analyzing logs, executing SQL queries, and tracing through backend processes. My responsibilities also include resolving data discrepancies, such as unbalanced formulas in financial credit card calculations, and ensuring accurate end-of-day transaction processing. \n\nAdditionally, I can also improve performance by analyzing the runtime of batch credit card operations.",
  default: "Topic not found. Please go back and choose a valid section.",
};

const header_list = {
  backend: "Backend Engineer – Financial Systems",
  webdev: "Web Developer",
  debug: "Debugging and Data Analysis",
  default: "Not Found",
};

const image_list = {
  backend: "../images/cc_cycle.jpg",
  webdev: "../images/web_development.webp",
  debug: "../images/debug_logo.png",
  default: "",
};

// Load and display content based on the URL parameter
function loadContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const topic = urlParams.get("topic");

  const content = paragraphs[topic] || paragraphs["default"];
  const header = header_list[topic] || header_list["default"];
  const image = image_list[topic] || image_list["default"];

  const contentDiv = document.getElementById("expertise-content");
  const headerDiv = document.getElementById("expertise-header");
  const imageDiv = document.getElementById("expertise-image");
  const imageLinkDiv = document.getElementById("expertise-image-link");

  if (contentDiv) {
    contentDiv.innerText = content;
  }

  if (headerDiv) {
    headerDiv.innerText = header;
  }

  if (imageDiv) {
    imageDiv.src = image;
  }

  if (imageLinkDiv) {
    imageLinkDiv.href = image;
  }
}

document.addEventListener("DOMContentLoaded", loadContent);
