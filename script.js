// script.js
const sidebar = document.querySelector(".sidebar");

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");

  // Check and apply the saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
  const image = document.getElementById("Self-Image");
  if (document.body.classList.contains("dark-mode")) {
    image.setAttribute("src", "src/images/self.jpeg");
  } else {
    image.setAttribute("src", "src/images/self.jpeg");
  }

  // Toggle theme on button click
  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const a1 = document.getElementById("dark-icon");
    const a2 = document.getElementById("light-icon");
    a1.classList.toggle("hidden");
    a2.classList.toggle("hidden");

    const image = document.getElementById("Self-Image");
    image.setAttribute(
      "src",
      !document.body.classList.contains("dark-mode")
        ? "src/images/self.jpeg"
        : "src/images/self.jpeg"
    );

    // Save the current theme to localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
});

const openSidebarBtn = document.getElementById("tg-button");
function toggleNav() {
  const a1 = document.getElementById("cross-option");
  const a2 = document.getElementById("list-option");
  sidebar.classList.toggle("sidebar--open");
  a1.classList.toggle("hidden");
  a2.classList.toggle("hidden");
}

document.addEventListener("click", (event) => {
  if (
    sidebar.classList.contains("sidebar--open") &&
    !sidebar.contains(event.target) &&
    !openSidebarBtn.contains(event.target)
  ) {
    toggleNav();
  }
});

// Variables to store touch positions
let touchStartX = 0;
let touchEndX = 0;

// Detect touch start
document.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

// Detect touch end
document.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe();
});

// Handle swipe gesture
function handleSwipe() {
  if (
    touchEndX - touchStartX > 100 &&
    !sidebar.classList.contains("sidebar--open")
  ) {
    // Swiped right
    toggleNav();
  } else if (
    touchStartX - touchEndX > 100 &&
    sidebar.classList.contains("sidebar--open")
  ) {
    // Swiped left (optional if you want to close the sidebar with swipe left)
    toggleNav();
  }
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".sidebar a");

  function updateActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Initial check in case the page is loaded with a section already in view
});

document.addEventListener("DOMContentLoaded", (event) => {
  const sections = document.querySelectorAll(".section");
  let currentSectionIndex = 0;

  document.getElementById("scroll-up").addEventListener("click", () => {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    }
  });

  document.getElementById("scroll-down").addEventListener("click", () => {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    }
  });
});

function togglePro() {
  const pro = document.getElementById("more-pro");
  const probtn = document.getElementsByClassName("load-more-pro")[0]; // Assuming there's only one button with this class

  pro.classList.toggle("hidden");

  if (pro.classList.contains("hidden")) {
    probtn.textContent = "Show More";
  } else {
    probtn.textContent = "Show Less";
  }
}

const skills = [
  // Programming Languages
  "C",
  "C++",

  // Web Development
  "HTML",
  "CSS",
  "JavaScript",
  "Responsive Web Design",

  // Databases
  "SQL",

  // Development Tools
  "Git",
  "GitHub",

  // Soft Skills
  "Communication Skills",
  "Presentation Skills",
  "Team Collaboration",
  "Problem Solving",
];

for (i = 0; i < skills.length; i++) {
  var allSkills = "<span>" + skills[i] + "</span>";
  div = document.getElementById("skills-list");
  div.innerHTML += allSkills;
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    mailToLink(); // Call the function to handle email sending
  });

function mailToLink() {
  // Get form values
  var name = encodeURIComponent(
    document.querySelector('input[name="name"]').value
  );
  var email = encodeURIComponent(
    document.querySelector('input[name="email"]').value
  );
  var message = encodeURIComponent(
    document.querySelector('textarea[name="message"]').value
  );

  // Create the mailto link
  var mailtoLink = `mailto:coolaiba24@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  // Open the mailto link
  window.location.href = mailtoLink;
}
