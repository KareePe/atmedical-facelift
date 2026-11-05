// ===== Real Case Story =====
// แก้ไข/เพิ่มคลิปได้ที่ object นี้ที่เดียว
// TODO: ใส่ลิงก์คลิปจริงใน video — ระหว่างยังว่าง ปุ่มเล่นจะพาไป LINE ของคลินิก
const STORY_FALLBACK_URL = "https://lin.ee/sHKwZrG";

const STORY_SETS = {
  baby: [
    { image: "assets/img/story-1.webp", video: "assets/vdo/real-case-story/1.mp4", alt: "คลิปรีวิว Baby Face Lift เคสที่ 1" },
    { image: "assets/img/story-2.webp", video: "assets/vdo/real-case-story/2.mp4", alt: "คลิปรีวิว Baby Face Lift เคสที่ 2" },
    { image: "assets/img/story-3.webp", video: "assets/vdo/real-case-story/3.mp4", alt: "คลิปรีวิว Baby Face Lift เคสที่ 3" },
    { image: "assets/img/story-4.webp", video: "assets/vdo/real-case-story/4.mp4", alt: "คลิปรีวิว Baby Face Lift เคสที่ 4" },
    { image: "assets/img/story-5.webp", video: "assets/vdo/real-case-story/5.mp4", alt: "คลิปรีวิว Baby Face Lift เคสที่ 5" },
    { image: "assets/img/story-6.webp", video: "assets/vdo/real-case-story/6.mp4", alt: "คลิปรีวิว Baby Face Lift เคสที่ 6" },
  ],
  facelift: [
    { image: "assets/img/review-1.webp", video: "assets/vdo/1.mp4", alt: "คลิปรีวิวดึงหน้า เคสที่ 1" },
    { image: "assets/img/review-2.webp", video: "assets/vdo/2.mp4", alt: "คลิปรีวิวดึงหน้า เคสที่ 2" },
    { image: "assets/img/review-3.webp", video: "assets/vdo/3.mp4", alt: "คลิปรีวิวดึงหน้า เคสที่ 3" },
    { image: "assets/img/review-4.webp", video: "assets/vdo/4.mp4", alt: "คลิปรีวิวดึงหน้า เคสที่ 4" },
  ],
};

(function () {
  document.querySelectorAll(".story-list").forEach((root) => {
    const items = STORY_SETS[root.dataset.set] || [];

    root.innerHTML = `
      <div class="relative max-w-[min(285px,calc(100%_-_68px))] md:max-w-[614px] xl:max-w-none mx-auto">
        <div class="absolute z-10 top-1/2 -translate-y-1/2 -left-[41px] xl:-left-[80px] min-[1400px]:-left-[108px]">
          <button type="button" aria-label="คลิปก่อนหน้า" class="icon-arrow story-prev">
            <img src="assets/img/icons/arrow-left.svg" alt="" class="-scale-x-100" />
          </button>
        </div>
        <div class="swiper story-swiper">
          <div class="swiper-wrapper">
            ${items
              .map(
                (item) => `
              <div class="swiper-slide">
                <a href="${esc(item.video || STORY_FALLBACK_URL)}" target="_blank" rel="noopener" aria-label="${esc(item.alt)}" class="relative block" ${item.video ? `data-video="${esc(item.video)}"` : ""}>
                  <img src="${esc(item.image)}" alt="${esc(item.alt)}" loading="lazy" class="w-full aspect-[340/605] object-cover rounded-[25px]" />
                  <img src="assets/img/icons/play.svg" alt="" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58px] h-[58px] xl:w-[70px] xl:h-[70px]" />
                </a>
              </div>`,
              )
              .join("")}
          </div>
        </div>
        <div class="absolute z-10 top-1/2 -translate-y-1/2 -right-[41px] xl:-right-[80px] min-[1400px]:-right-[108px]">
          <button type="button" aria-label="คลิปถัดไป" class="icon-arrow story-next">
            <img src="assets/img/icons/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="dots swiper-pagination story-dots mt-[20px] ${root.dataset.set === "facelift" ? "xl:!hidden" : ""}"></div>`;
  });
})();

// ===== Video modal =====
// คลิปในเครื่อง (.mp4) เล่นด้วย <video>, ลิงก์ Google Drive เล่นผ่าน iframe /preview
(function () {
  const modal = document.createElement("div");
  modal.className = "video-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "เล่นคลิปรีวิว");
  modal.innerHTML = `
    <button type="button" class="video-modal__close" aria-label="ปิด">&times;</button>
    <div class="video-modal__box"></div>`;
  document.body.appendChild(modal);

  const box = modal.querySelector(".video-modal__box");
  const closeBtn = modal.querySelector(".video-modal__close");
  let lastTrigger = null;

  const driveId = (url) => (url.match(/drive\.google\.com\/file\/d\/([^/?#]+)/) || [])[1];

  function open(url, trigger) {
    const id = driveId(url);
    if (id) {
      box.innerHTML = `<iframe src="https://drive.google.com/file/d/${esc(id)}/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    } else {
      box.innerHTML = `<video src="${esc(url)}" controls autoplay playsinline preload="metadata"></video>`;
    }
    lastTrigger = trigger;
    modal.dataset.open = "true";
    document.body.classList.add("video-modal-open");
    closeBtn.focus();
  }

  function close() {
    if (modal.dataset.open !== "true") return;
    modal.dataset.open = "false";
    document.body.classList.remove("video-modal-open");
    box.innerHTML = ""; // หยุดเล่นและคืนหน่วยความจำ
    if (lastTrigger) lastTrigger.focus();
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".story-list a[data-video]");
    if (!trigger) return;
    e.preventDefault();
    open(trigger.dataset.video, trigger);
  });

  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
