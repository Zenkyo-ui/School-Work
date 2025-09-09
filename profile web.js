// Accordion
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("open");
  });
});

// Carousel Guru
const track = document.querySelector(".guru-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

nextBtn.addEventListener("click", () => {
  index = Math.min(index + 1, track.children.length - 1);
  track.style.transform = `translateX(-${index * 220}px)`;
});

prevBtn.addEventListener("click", () => {
  index = Math.max(index - 1, 0);
  track.style.transform = `translateX(-${index * 220}px)`;
});

// Dot Navigation + Back to Top
const dots = document.querySelectorAll(".dot");
const sections = document.querySelectorAll("section");
const backToTopBtn = document.getElementById("backToTop");

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    sections[i].scrollIntoView({behavior:"smooth"});
  });
});

window.addEventListener("scroll", () => {
  let current = 0;
  sections.forEach((sec,i) => {
    if (pageYOffset >= sec.offsetTop - sec.clientHeight/3) current = i;
  });
  dots.forEach(dot => dot.classList.remove("active"));
  dots[current].classList.add("active");

  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({top:0, behavior:"smooth"});
});


// Handle PPDB button click
function handlePPDBClick() {
  alert("Redirecting to PPDB registration page...")
  // You can replace this with actual navigation logic
  // window.location.href = '/ppdb';
}

// Handle smooth scrolling for internal links
document.addEventListener("DOMContentLoaded", () => {
  // Add click handlers for navigation links
  const navLinks = document.querySelectorAll(".link-item")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // If it's an internal link (starts with #), handle smooth scrolling
      const href = this.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  // Add hover effects for social media links
  const socialLinks = document.querySelectorAll(".social-link")

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)"
    })

    link.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })

  // Handle contact info clicks
  const emailLink = document.querySelector(".contact-item:first-child")
  const phoneLink = document.querySelector(".contact-item:last-child")

  if (emailLink) {
    emailLink.addEventListener("click", () => {
      window.location.href = "mailto:unityadikasoreang@gmail.com"
    })
    emailLink.style.cursor = "pointer"
  }

  if (phoneLink) {
    phoneLink.addEventListener("click", () => {
      window.location.href = "tel:08112228128"
    })
    phoneLink.style.cursor = "pointer"
  }

  // Add loading animation for map
  const mapContainer = document.querySelector(".map-container")
  const mapIframe = document.querySelector(".map-iframe")

  if (mapIframe) {
    mapIframe.addEventListener("load", () => {
      mapContainer.classList.add("map-loaded")
    })
  }

  // Handle window resize for responsive adjustments
  let resizeTimer
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      // Adjust map height on mobile if needed
      adjustMapHeight()
    }, 250)
  })

  // Initial map height adjustment
  adjustMapHeight()
})

// Function to adjust map height based on screen size
function adjustMapHeight() {
  const mapSection = document.querySelector(".map-section")
  const schoolInfo = document.querySelector(".school-info")

  if (window.innerWidth >= 640 && mapSection && schoolInfo) {
    // On larger screens, match the height of school info section
    const schoolInfoHeight = schoolInfo.offsetHeight
    mapSection.style.minHeight = Math.max(300, schoolInfoHeight) + "px"
  } else if (mapSection) {
    // On mobile, use fixed height
    mapSection.style.minHeight = "300px"
  }
}

// Add intersection observer for animations (optional)
if ("IntersectionObserver" in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observe footer sections for animation
  const footerSections = document.querySelectorAll(".cta-section, .main-footer, .copyright-section")
  footerSections.forEach((section) => {
    observer.observe(section)
  })
}

// Add CSS animation classes
const style = document.createElement("style")
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .map-loaded {
        opacity: 1;
        transition: opacity 0.3s ease;
    }
`
document.head.appendChild(style)// === Improved Dot Navigation ===
const dotBtns = document.querySelectorAll(".dot-btn");

dotBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");

    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.querySelector(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// Update dot aktif saat scroll
window.addEventListener("scroll", () => {
  const sections = [
    document.querySelector("#accordion"),
    document.querySelector("#profil-guru"),
    document.querySelector("#fasilitas"),
  ];

  let currentIndex = 0;
  sections.forEach((sec, i) => {
    if (window.scrollY >= sec.offsetTop - window.innerHeight / 3) {
      currentIndex = i;
    }
  });

  dotBtns.forEach((btn, i) => btn.classList.remove("active"));
  if (dotBtns[currentIndex]) dotBtns[currentIndex].classList.add("active");
});


