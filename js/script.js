// ---------- Data ----------
const WORK = [
  {
    title: "Graphic Designer | Creative Director Portfolio",
    tag: "Portfolio",
    size: "big",
    url: "https://www.behance.net/gallery/249515163/Graphic-Designer-Creative-Director-Portfolio",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1a52b0249515163.6a09a955bcc2f.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/32f656249515163.6a09a955c3362.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/53510c249515163.6a09a955bbfca.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4fe2f6249515163.6a09a955c1a8d.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/932ce2249515163.6a09a955c8655.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6f7170249515163.6a09a955c2cd3.jpg"
    ]
  },
  {
    title: "Branding and Packaging",
    tag: "Branding",
    size: "wide",
    url: "https://www.behance.net/gallery/247478975/Branding-and-Packaging",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/43fdaf247478975.69dc553b03c41.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0c4965247478975.69dc553b0362f.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2ba03e247478975.69dc553b074be.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d9ee90247478975.69dc553b063d6.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ccfe13247478975.69dc553b041d9.jpg"
    ]
  },
  {
    title: "Marketing Agency UI/UX Design",
    tag: "UI/UX",
    size: "normal",
    url: "https://www.behance.net/gallery/247858167/Marketing-Agency-UIUX-Design",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/99f258247858167.69e4bac7ae62d.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b7e7a7247858167.69e4bac7aecb2.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/acf546247858167.69eaf548d3966.jpg"
    ]
  },
  {
    title: "Luxury Brands Email Design",
    tag: "Email Design",
    size: "normal",
    url: "https://www.behance.net/gallery/249283525/Luxury-Brands-Email-design",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4f4adc249283525.6a0452bfebb07.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/6dd0d5249283525.6a0452bfec298.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/70fc34249283525.6a0452bfecac1.jpg"
    ]
  },
  {
    title: "Game UI Design",
    tag: "UI/UX",
    size: "tall",
    url: "https://www.behance.net/gallery/237266299/Game-UI-Design",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/868195237266299.68fd009ae5915.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9d9798237266299.68fd009ae600a.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0f44dd237266299.68fd009ae6cef.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/c0669b237266299.68fd009ae655d.jpg"
    ]
  },
  {
    title: "Web Page Design",
    tag: "Web Design",
    size: "normal",
    url: "https://www.behance.net/gallery/237269583/Web-page-Design",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/42c639237269583.68fd120b4019e.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/314ced237269583.68fd120b3f11f.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/22a85c237269583.68fd120b3f89d.jpg"
    ]
  },
  {
    title: "UI/UX Design",
    tag: "UI/UX",
    size: "wide",
    url: "https://www.behance.net/gallery/208916223/UI-UX-design",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7347cf208916223.66f66d9845889.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/735f23208916223.66f66d9844cfa.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c76046208916223.66f66d984515c.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/aee3b5208916223.66f66d9844373.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/b35df9208916223.66f66d984486f.png"
    ]
  },
  {
    title: "Packaging Design",
    tag: "Packaging",
    size: "normal",
    url: "https://www.behance.net/gallery/207217599/Packaging-Design",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/6e02c3207217599.66d994846bbb2.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/149065207217599.66d994846c6e0.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/8320b5207217599.66d994846c172.jpg"
    ]
  },
  {
    title: "Logo Design",
    tag: "Branding",
    size: "normal",
    url: "https://www.behance.net/gallery/208917065/Logo-Design",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/656182208917065.66f670cf2d535.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4f9030208917065.66f670cf2dac5.jpg"
    ]
  },
  {
    title: "Packaging Design — Vol. 2",
    tag: "Packaging",
    size: "normal",
    url: "https://www.behance.net/gallery/206682025/Packaging-design",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/f09938206682025.66d066748f7e5.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/31aea7206682025.66d066748fcbc.png"
    ]
  },
  {
    title: "Web Pages",
    tag: "Web Design",
    size: "normal",
    url: "https://www.behance.net/gallery/207578931/web-pages",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/871eb0207578931.66e02eeb0a7c6.jpg"
    ]
  },
  {
    title: "Mockup",
    tag: "Branding",
    size: "normal",
    url: "https://www.behance.net/gallery/206684067/Mockup",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ccccf3206684067.66d06c6e967eb.jpg"
    ]
  }
];

const EXPERIENCE = [
  {
    role: "Senior Designer",
    company: "Hello World Technologies",
    url: "https://helloworldtech.com/",
    points: [
      "Designed brand systems — logos, color palettes, typography and mockups — for multiple brands.",
      "Built and optimized Shopify &amp; WordPress stores with product pages, UX improvements and CRO recommendations.",
      "Created high-converting ad creatives for Instagram, Facebook and TikTok."
    ]
  },
  {
    role: "Creative Project Manager (Design Lead)",
    company: "Revotech Learning",
    url: "https://revotechlearning.com/",
    points: [
      "Ran product design sprints, built wireframes &amp; prototypes, and collaborated closely with developers.",
      "Improved usability by applying design thinking and user-centered design methods."
    ]
  },
  {
    role: "Senior User Interface Designer",
    company: "Codesinc",
    url: "https://www.codes-inc.com/",
    points: [
      "Focused on UI/UX and graphic design for interface projects and social media design.",
      "Designed engaging social media graphics and promotional posts supporting brand identity."
    ]
  },
  {
    role: "Project Manager &amp; Graphic Designer",
    company: "Digital Falconz",
    url: "https://digitalfalconz.ca/",
    points: [
      "Managed the overall social media appearance and visual identity for the company and its clients.",
      "Designed branding materials, logos and marketing visuals that strengthened brand recognition."
    ]
  },
  {
    role: "Senior Graphic Designer",
    company: "UPcom Solutions",
    url: "https://upcommsolutions.com/",
    points: [
      "Created social posts, website designs and marketing visuals for the company's clients.",
      "Contributed to video editing and promotional media to boost online presence."
    ]
  },
  {
    role: "Graphic Designer",
    company: "The Digify Agency",
    url: "https://www.linkedin.com/company/the-digify-agency/",
    points: [
      "Produced high-engagement Instagram Reels by blending traditional design software with AI tools.",
      "Delivered brand-consistent projects under tight deadlines in a fast-paced creative team."
    ]
  }
];

const SKILLS = [
  "Brand Identity", "Logo Design", "Packaging Design", "Typography",
  "Wireframing &amp; Prototyping", "User Flows", "Design Systems",
  "Shopify", "WordPress", "CRO", "Social Media Design",
  "Ad Creatives (Meta / TikTok)", "Instagram Reels", "Adobe Photoshop",
  "Adobe Illustrator", "AI-Assisted Design", "Video Editing", "Creative Direction"
];

const CLIENTS = [
  { name: "Zephare", cat: "Skincare Brand", url: "https://www.instagram.com/zephare_official/" },
  { name: "MMD Store", cat: "Clothing Brand", url: "https://mmdstore.ch/" },
  { name: "Munasib Dam", cat: "Online Store", url: "https://www.instagram.com/munasibdam.pk/" },
  { name: "Affirma Distributors", cat: "Ecommerce", url: "https://www.instagram.com/affirma_distributors/" },
  { name: "Paradise", cat: "Shopify Store", url: "https://newparadisestore.com/" },
  { name: "Nene Solutions", cat: "Online Store", url: "https://www.instagram.com/nenesolutions/" },
  { name: "Grove Café", cat: "Coffee Shop", url: "https://www.instagram.com/thegrovecafee/" },
  { name: "Falmes", cat: "Restaurant", url: "https://www.instagram.com/flamesburgersandgrill/" },
  { name: "Sphere", cat: "Restaurant", url: "https://www.instagram.com/thespherebayside" },
  { name: "Buza Chicken", cat: "Restaurant", url: "https://www.instagram.com/buzachicken/" }
];

// ---------- Render ----------
function renderBento() {
  const grid = document.getElementById("bento-grid");
  grid.innerHTML = WORK.map((w, i) => `
    <div class="bento-item size-${w.size} reveal" data-index="${i}" data-hover>
      <img class="bento-img img-a" src="${w.images[0]}" alt="${w.title}" loading="lazy">
      <img class="bento-img img-b" src="${w.images[1] || w.images[0]}" alt="" loading="lazy">
      <div class="bento-overlay">
        <span class="work-tag">${w.tag}</span>
        <span class="bento-title">${w.title}</span>
        ${w.images.length > 1 ? `<span class="bento-count">${w.images.length} images →</span>` : `<span class="bento-count">View case study →</span>`}
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".bento-item").forEach(el => {
    el.addEventListener("click", () => openLightbox(WORK[Number(el.dataset.index)]));
  });
}

function renderTimeline() {
  document.getElementById("timeline").innerHTML = EXPERIENCE.map(e => `
    <div class="tl-item reveal">
      <div class="tl-role-col">
        <span class="tl-role">${e.role}</span>
        <a class="tl-company" href="${e.url}" target="_blank" rel="noopener noreferrer" data-hover>${e.company} ↗</a>
      </div>
      <div class="tl-body">${e.points.map(p => `<p>${p}</p>`).join("")}</div>
    </div>
  `).join("");
}

function renderSkills() {
  document.getElementById("skills-tags").innerHTML =
    SKILLS.map(s => `<span class="skill-tag">${s}</span>`).join("");
}

function renderClients() {
  document.getElementById("clients-grid").innerHTML = CLIENTS.map(c => `
    <a class="client-card reveal" href="${c.url}" target="_blank" rel="noopener noreferrer" data-hover>
      <span class="client-name">${c.name}</span>
      <span class="client-cat">${c.cat}</span>
      <span class="client-link">Visit →</span>
    </a>
  `).join("");
}

function renderMarquee() {
  const names = CLIENTS.map(c => c.name);
  const doubled = [...names, ...names];
  document.getElementById("marquee-track").innerHTML =
    doubled.map(n => `<span class="marquee-item">${n}</span>`).join("");
}

// ---------- Lightbox ----------
function openLightbox(item) {
  document.getElementById("lightbox-images").innerHTML =
    item.images.map(src => `<img src="${src}" alt="${item.title}">`).join("");
  document.getElementById("lightbox-tag").textContent = item.tag;
  document.getElementById("lightbox-title").textContent = item.title;
  document.getElementById("lightbox-link").href = item.url;
  const box = document.getElementById("lightbox");
  box.classList.add("open");
  box.querySelector(".lightbox-inner").scrollTop = 0;
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

// ---------- Cursor ----------
function initCursor() {
  const dot = document.getElementById("cursor-dot");
  window.addEventListener("mousemove", e => {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.classList.add("active");
  });
  document.addEventListener("mouseleave", () => dot.classList.remove("active"));
  document.querySelectorAll("[data-hover]").forEach(el => {
    el.addEventListener("mouseenter", () => dot.classList.add("hovering"));
    el.addEventListener("mouseleave", () => dot.classList.remove("hovering"));
  });
}

// ---------- Scroll reveal ----------
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
}

// ---------- Nav ----------
function initNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40));
  const toggle = document.getElementById("nav-toggle");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

// ---------- Init ----------
document.getElementById("year").textContent = new Date().getFullYear();
renderBento();
renderTimeline();
renderSkills();
renderClients();
renderMarquee();
initNav();

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

initCursor();
initReveal();
