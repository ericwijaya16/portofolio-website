// Define paragraphs for each topic
const paragraphs = {
  weather:
    "I developed a Java-based weather application with four main features designed to provide weather information in a user-friendly way. The first feature allows users to check the current weather at their location by using IPInfo to determine their location and OpenCage to retrieve the corresponding latitude and longitude, then fetching live weather data from Open-Meteo." +
    "\n\nThe second feature focuses specifically on displaying the current temperature and timestamp from the same data source, parsing the JSON response using OkHttp and JSON libraries. The third feature lets users check the weather in any city by manually entering the city name, which is again converted to geographic coordinates using OpenCage." +
    "\n\nThe fourth feature is more advanced—it allows users to input any specific weather attribute they want to check, such as temperature, dew point, or cloud coverage. To improve usability, it includes an auto-suggestion system powered by the Levenshtein distance algorithm to help users select valid attribute names.",
  pizza:
    "I created a pizza ordering website using Laravel while studying at BINUS University. The homepage shows a list of pizzas sold by the restaurant, along with a search bar to help users find specific types of pizza. If someone isn’t logged in, they can only view the pizza descriptions. " +
    "\n\nTo place an order, users can log in or register for an account. Once logged in, they can add pizzas to their cart with the desired quantity. They can also see their Transaction History." +
    "\n\nFor admin users, the site provides extra features, such as adding new pizzas to the menu, viewing all user transactions, and checking detailed information about each user.",
  wonder:
    "I created a website using Laravel called Wonderful Journey. It’s a platform for sharing different kinds of vacation destinations. Users can browse the destinations and sort them by category. When they click on one, they’ll see its picture and description." +
    "\n\nPeople can log in or register if they don’t already have an account. Once logged in, they can write their own travel blogs and fill in their profile details, like a phone number. After a blog is submitted, an admin will review it to decide if it’s suitable to be published. Admins can also delete blogs or add new categories to keep the content organized.",
  ecom:
    "I built an e-commerce website inspired by Amazon, based on a tutorial from the YouTube channel SuperSimpleDev. While I started by following the video’s instructions, I went beyond the tutorial and added my own features. I created a working “Place Order” button that processes the current cart, calculates the total cost, and clears the cart afterward. I also fixed a bug so the cart count in the top right only counts unique items." +
    "\n\nI developed an Order History page using a grid layout, where each order is displayed with its details at the top and all the items listed below. Each item has a “Buy More” button (not yet functional) and a “Tracking” button that leads to a tracking page. The tracking page currently shows order details and a working progress bar, though there’s no system yet to update progress — I plan to build an admin page for that, along with features like adding new products." +
    "\n\nI also made the grid responsive for different screen sizes and added a search bar that filters products by name using JavaScript. The project is still in progress, and I’m continuing to add more features over time.",
  tetris:
    "I created a Tetris game in Java as a way to apply Object-Oriented Programming (OOP) principles such as inheritance, encapsulation, and polymorphism. The game logic is fully written in Java without external libraries, using only the Java Standard Library. " +
    "\n\nI built the interface with Java Swing, using JPanel for the game area, Graphics for drawing blocks, and Color to differentiate shapes. The UI updates in real time as the player interacts with the game through keyboard controls to move and rotate blocks. Behind the scenes, the code manages block placement, collision detection, and line clearing, all handled in the Game Board class. Each Tetris piece is represented as a separate class, making it easy to add new shapes or rules in the future. " +
    "\n\nThis project taught me how to combine game logic, UI design, and event handling in Java to create a functional and visually interactive program.",
  animate:
    "I created three animated countdown videos using Adobe Animate for my college organization, HIMTI. The purpose was to build excitement three days before the HIMTI Workshop, which had a gaming theme." +
    "\n\nI designed the animations frame by frame using JavaScript and ActionScript, using Mario as the main inspiration. Each video was 30 seconds long to perfectly fit Instagram Stories at the time (back in 2020, before Instagram started splitting stories over 30 seconds). You can see one of the videos to the right of this paragraph.",
  porest:
    "This project is a RESTful API built with Spring Boot that manages purchase orders in a structured and secure way. It provides full CRUD functionality for core entities such as purchase order headers, order details, items, and users. The goal of the project is to simulate a real-world backend system that could support purchasing workflows in a business environment." +
    "\n\nSecurity is a key part of the implementation. The API uses Spring Security with JWT (JSON Web Tokens) to handle authentication and role-based authorization. Passwords are safely stored using BCrypt hashing, ensuring that sensitive information is properly protected. Only authorized users can access specific endpoints, which makes the project a good foundation for production-grade applications." +
    "\n\nThe application is backed by a MySQL database, and all credentials are configured through environment variables for safety and portability. Database initialization scripts are included to create the schema and insert sample data, making it easy to set up and test the system." +
    "\n\nTo ensure reliability, the project also includes JUnit 5 tests for both service logic and API endpoints. This adds confidence that the API behaves as expected and makes future changes easier to maintain.",
  default: "Topic not found. Please go back and choose a valid section.",
};

const header_list = {
  weather: "Weather App",
  pizza: "Pizza Ordering Website",
  wonder: "Wonderful Journey Website",
  ecom: "E-Commerce Website",
  tetris: "Tetris in Java",
  animate: "Countdown Animation Video",
  porest: "Purchase Order REST API",
  default: "Not Found",
};

function genMediaList(basePath, prefix, count, ext) {
  const list = [];
  for (let i = 1; i <= count; i++) {
    const num = String(i).padStart(2, "0");
    list.push(`${basePath}/${prefix}-${num}.${ext}`);
  }
  return list;
}

const image_list = {
  weather: genMediaList("../images/weatherAPI", "weather", 4, "png"),
  pizza: genMediaList("../images/Pizza", "pizza", 10, "png"),
  wonder: genMediaList("../images/Wonderful", "wonder", 10, "png"),
  ecom: genMediaList("../images/ecom", "ecom", 5, "png"),
  tetris: genMediaList("../images/tetris", "tetris", 4, "png"),
  animate: genMediaList("../images/animate", "INSTAREMAKE2", 3, "mp4"),
  porest: genMediaList("../images/po-rest", "po-rest", 12, "png"),
  default: "",
};

const repoData = {
  weather: {
    url: "https://github.com/ericwijaya16/Check-Weather-Project",
    text: "Click here for the Weather Project Repository",
  },
  pizza: {
    url: "https://github.com/ericwijaya16/PizzaWebsite",
    text: "Click here for the Pizza Project Repository",
  },
  wonder: {
    url: "https://github.com/ericwijaya16/Wonderful-Journey",
    text: "Click here for the Wonderful Journey Project Repository",
  },
  ecom: {
    url: "https://github.com/ericwijaya16/amazon-ecom-website",
    text: "Click here for the Amazon E-Commerce Website Project Repository",
  },
  tetris: {
    url: "https://github.com/ericwijaya16/tetris-java-project",
    text: "Click here for the Tetris in Java Project Repository",
  },
  animate: {
    url: "",
    text: "",
  },
  porest: {
    url: "https://github.com/ericwijaya16/purchase-order-rest-api",
    text: "Click here for the Purchase Order Rest API Project Repository",
  },
};

// Load and display content based on the URL parameter
function loadContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const topic = urlParams.get("topic");

  const content = paragraphs[topic] || paragraphs["default"];
  const header = header_list[topic] || header_list["default"];
  const image = image_list[topic] || image_list["default"];

  const headerDiv = document.getElementById("portofolio-header");
  const contentDiv = document.getElementById("portofolio-content");
  const carouselInner = document.getElementById("carouselInner");
  const repoLink = document.getElementById("repo-link");

  if (contentDiv) {
    contentDiv.innerText = content;
  }

  if (headerDiv) {
    headerDiv.innerText = header;
  }

  // Loop through images/videos and create carousel items
  image.forEach((src, index) => {
    const div = document.createElement("div");
    div.className = "pad-right";
    div.classList.add("carousel-item");
    if (index === 0) div.classList.add("active");

    const ext = src.split(".").pop().toLowerCase();

    if (ext === "mp4") {
      const video = document.createElement("video");
      video.src = src;
      video.className = "d-block mx-auto";
      video.controls = true;
      video.loop = true;
      video.muted = true;
      video.autoplay = true;
      div.appendChild(video);
    } else {
      const link = document.createElement("a");
      link.href = src;
      link.setAttribute("data-lightbox", "portfolio");
      link.setAttribute("data-title", `Slide ${index + 1}`);

      const img = document.createElement("img");
      img.src = src;
      img.className = "d-block w-100 img-fluid";
      img.alt = `Slide ${index + 1}`;

      link.appendChild(img);
      div.appendChild(link);
    }

    carouselInner.appendChild(div);
  });

  if (repoData[topic]) {
    repoLink.href = repoData[topic].url;
    repoLink.textContent = repoData[topic].text;
  }
}

document.addEventListener("DOMContentLoaded", loadContent);
