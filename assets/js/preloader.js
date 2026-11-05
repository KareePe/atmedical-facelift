// ===== Preloader =====
// ซ่อน preloader หลังหน้าเว็บ (รวมรูปภาพ) โหลดเสร็จสมบูรณ์
(function () {
  const el = document.getElementById("preloader");
  if (!el) return;

  function hide() {
    el.classList.add("opacity-0", "pointer-events-none");
    el.addEventListener("transitionend", () => el.remove(), { once: true });
    // เผื่อ transitionend ไม่ยิง (เช่น motion-reduce ปิด transition ไว้)
    setTimeout(() => el.remove(), 600);
  }

  if (document.readyState === "complete") {
    hide();
  } else {
    window.addEventListener("load", hide);
  }
})();
