// Portfolio page: bento grid data + rendering + lightbox.

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
    el.addEventListener("mouseenter", () => document.dispatchEvent(new Event("mouseover")));
  });

  initReveal();
}

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

renderBento();
document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
