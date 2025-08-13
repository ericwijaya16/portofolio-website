// Java and Linux progress circular bar 
let htmlProgress = document.querySelector(".java-linux"),
  htmlValue = document.querySelector(".java-linux-progress");

let htmlStartValue = 0,
  htmlEndValue = 85,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// SQL progress circular bar 
let javascriptProgress = document.querySelector(".sql"),
  javascriptValue = document.querySelector(".sql-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// SOAP API progress circular bar 
let phpProgress = document.querySelector(".api"),
  phpValue = document.querySelector(".api-progress");

let phpStartValue = 0,
  phpEndValue = 70,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// HTML CSS JS progress circular bar 
let reactProgress = document.querySelector(".html-css-js"),
  reactValue = document.querySelector(".html-css-js-progress");

let reactStartValue = 0,
  reactEndValue = 45,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// Fetch latest IT Articel from different website
async function fetchLatestArticles() {
  const feeds = [
    { name: "Ness Labs", url: "https://nesslabs.com/feed" },
    { name: "The Verge", url: "https://www.theverge.com/rss/index.xml" },
    { name: "ZDNet", url: "https://www.zdnet.com/news/rss.xml" }
  ];

  const container = document.getElementById('latestNews');
  container.innerHTML = '';

  for (const site of feeds) {
    try {
      const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(site.url)}`);
      const data = await res.json();
      const item = data.items[0]; // latest article

      const date = new Date(item.pubDate).toLocaleDateString();

      container.innerHTML += `
      <div class="blogpost col-md-4 col-10 mb-4">
        <div class="card h-100">
          <img src="${item.thumbnail || 'https://placehold.co/400x200'}" class="card-img-top rounded-4" alt="${item.title}">
          <div class="card-body px-4">
            <small>${site.name}</small><span class="ms-3">${date}</span>
            <h4 class="card-title mt-2">
              <a href="${item.link}" target="_blank">${item.title}</a>
            </h4>
            <p class="text-paragraph">${item.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 120)}…</p>
            <a href="${item.link}" target="_blank" class="read-more-btn link">Read More</a>
          </div>
        </div>
      </div>`;
    } catch (e) {
      console.error(`Failed to fetch feed for ${site.name}`, e);
    }
  }
}

document.addEventListener('DOMContentLoaded', fetchLatestArticles);

// Sending Request to Backend for Sending Email
(function () {
  const submitBtn = document.getElementById("submitBtn");
  const errorMsg = document.getElementById("errorMsg");

  const spamWords = ["buy now", "free money", "visit link"];

  function showError(message) {
    errorMsg.textContent = message;
  }

  function clearError() {
    errorMsg.textContent = "";
  }

  function validateCaptcha() {
    const captchaResponse = grecaptcha.getResponse();
    return captchaResponse !== "";
  }

  function containsSpam(message) {
    const lowerMsg = message.toLowerCase();
    return spamWords.some(word => lowerMsg.includes(word));
  }

  function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(email);
  }

  function isValidPhone(phone) {
    return /^[0-9]+$/.test(phone);
  }

  function sendEmail() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Frontend validations
    if (!name || !email || !phone || !message) {
      showError("Please fill out all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    if (!isValidPhone(phone)) {
      showError("Phone number must contain only digits.");
      return;
    }

    if (!validateCaptcha()) {
      showError("Please complete the CAPTCHA.");
      return;
    }

    if (containsSpam(message)) {
      showError("Message contains blocked words.");
      return;
    }

    clearError();
    submitBtn.textContent = "Sending…";
    submitBtn.disabled = true;

    const captcha = grecaptcha.getResponse();

    fetch("https://portofolio-worker.ericwijayaa7.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message, captcha })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        submitBtn.textContent = "Sent!";
        grecaptcha.reset();
        alert("Email successfully sent!");
        location.reload();
      } else {
        submitBtn.textContent = "Submit";
        submitBtn.disabled = false;
        showError("Failed to send email. Please try again.");
      }
    })
    .catch(() => {
      submitBtn.textContent = "Submit";
      submitBtn.disabled = false;
      showError("Failed to send email. Please try again.");
    });
  }

  submitBtn.addEventListener("click", sendEmail);
})();