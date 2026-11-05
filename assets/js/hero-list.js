// ===== Hero points =====
// แก้ไข/เพิ่มจุดเด่นใน hero ได้ที่ array นี้ที่เดียว
const HERO_POINTS = [
  "ยกกระชับลึกถึงชั้น SMAS ช่วยพยุงโครงสร้าง^ใบหน้าในระดับลึก",
  "ใช้เทคนิคยาชาเฉพาะที่ ไม่ต้องวางยาสลบ ^ลดความกังวล",
  "ประหยัดเวลาในการทำหัตถการและฟื้นตัวได้เร็วขึ้น",
  "บวมช้ำน้อยลง ด้วยการวางแผนและดูแล^อย่างละเอียดโดยแพทย์",
];

(function () {
  const list = document.querySelector(".hero-points");
  if (!list) return;

  list.innerHTML = HERO_POINTS.map(
    (text) => `
    <li class="flex items-center gap-[14px] xl:gap-[16px]">
      <img src="assets/img/icons/check.svg" alt="" class="shrink-0 w-[26px] h-[26px] m-[3px] xl:m-[3px]" />
      <span class="text-ink-muted text-[22px] leading-[22px] xl:text-[30px] xl:leading-[32px]">${escBreak(text)}</span>
    </li>`,
  ).join("");
})();
