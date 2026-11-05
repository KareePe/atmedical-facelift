// ===== Header scroll =====
// ย่อ header ตอนเลื่อนหน้าลง
// ตั้ง data-scrolled บน <header> แล้วให้คลาส data-[scrolled=true]:* จัดการหน้าตาเอง
(function () {
  const header = document.querySelector("header");
  if (!header) return;

  const THRESHOLD = 24; // เลื่อนเกินกี่ px ถึงเริ่มย่อ
  let ticking = false;

  function update() {
    header.dataset.scrolled = String(window.scrollY > THRESHOLD);
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );

  update(); // เผื่อโหลดหน้ามาแล้วอยู่กลางหน้า (refresh / anchor link)
})();
