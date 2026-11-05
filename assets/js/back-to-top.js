// ===== Back to top =====
// แสดงปุ่มก็ต่อเมื่อเลื่อนผ่าน section hero (#home) ไปแล้ว
(function () {
  const btn = document.getElementById("back-to-top");
  const hero = document.getElementById("home");
  if (!btn || !hero) return;

  let ticking = false;

  function update() {
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    btn.dataset.visible = String(window.scrollY > heroBottom);
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

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  update(); // เผื่อโหลดหน้ามาแล้วอยู่กลางหน้า (refresh / anchor link)
})();
