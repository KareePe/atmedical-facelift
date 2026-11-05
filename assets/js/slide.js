// ===== Slides (Swiper) =====
// ต้องโหลดหลัง program-list.js และ story-list.js เพราะสไลด์ถูกเรนเดอร์จาก 2 ไฟล์นั้น
(function () {
  if (typeof Swiper === "undefined") return;

  // แกลเลอรีในการ์ดโปรแกรม: 1 รูปต่อครั้ง พร้อม thumbnail กดเปลี่ยนรูป
  document.querySelectorAll(".case-gallery").forEach((root) => {
    const swiper = new Swiper(root.querySelector(".case-swiper"), {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        prevEl: root.querySelector(".case-prev"),
        nextEl: root.querySelector(".case-next"),
      },
      pagination: {
        el: root.querySelector(".case-dots"),
        clickable: true,
      },
    });

    // thumbnail แสดง 3 รูปถัดจากรูปหลักเสมอ (วนกลับต้นเมื่อถึงรูปสุดท้าย)
    const thumbs = [...root.querySelectorAll(".case-thumb")];
    const images = [...root.querySelectorAll(".swiper-slide img")].map((img) => img.getAttribute("src"));

    const syncThumbs = () => {
      thumbs.forEach((thumb, i) => {
        const index = (swiper.activeIndex + i + 1) % images.length;
        thumb.dataset.slide = index;
        thumb.querySelector("img").src = images[index];
      });
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => swiper.slideTo(Number(thumb.dataset.slide)));
    });
    swiper.on("slideChange", syncThumbs);
  });

  // Real Case Story: ถ้าจำนวนคลิปไม่เกินจำนวนที่โชว์ Swiper จะซ่อนลูกศรและจุดให้เอง (watchOverflow)
  document.querySelectorAll(".story-list").forEach((root) => {
    new Swiper(root.querySelector(".story-swiper"), {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        prevEl: root.querySelector(".story-prev"),
        nextEl: root.querySelector(".story-next"),
      },
      pagination: {
        el: root.querySelector(".story-dots"),
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 44 },
        1280: { slidesPerView: 3, spaceBetween: 44 },
      },
    });
  });
})();
