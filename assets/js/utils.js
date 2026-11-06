// ===== Utilities =====
// ฟังก์ชันช่วยที่ใช้ร่วมกันทุกไฟล์ (ต้องโหลดไฟล์นี้ก่อนไฟล์ render อื่นๆ)

// กัน HTML แปลกปลอมจากข้อมูล (ใช้ร่วมกันทั้ง branch list และ Q&A)
const esc = (str) =>
  String(str).replace(
    /[&<>"']/g,
    (ch) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[ch],
  );

// escape ปกติ แต่ยอมให้ <br> ขึ้นบรรทัดใหม่ได้
const escBr = (str) => esc(str).replace(/&lt;br\s*\/?&gt;/gi, "<br />");

// escape ปกติ แล้วแปลง ^ เป็นขึ้นบรรทัดเฉพาะ mobile และ | เป็นขึ้นบรรทัดเฉพาะ desktop
const escBreak = (str) =>
  esc(str)
    .replace(/\^/g, '<br class="hidden min-[380px]:inline xl:hidden" />')
    .replace(/\|/g, '<br class="hidden xl:inline" />');

// รูปที่มีไฟล์ย่อขนาดไว้ (ชื่อไฟล์ <ชื่อ>-<กว้าง>.webp) — สร้างใหม่เมื่อเปลี่ยนรูปต้นฉบับ
// key = path รูปต้นฉบับ, value = [ความกว้างไฟล์ย่อ, ความกว้างต้นฉบับ]
const RESPONSIVE_IMAGES = {
  "assets/img/baby-1.webp": [560, 1014],
  "assets/img/baby-2.webp": [560, 1014],
  "assets/img/baby-3.webp": [560, 1014],
  "assets/img/baby-4.webp": [560, 1014],
  "assets/img/story-1.webp": [500, 680],
  "assets/img/story-2.webp": [500, 680],
  "assets/img/story-3.webp": [500, 680],
};

// คืน attribute srcset + sizes ให้เบราว์เซอร์เลือกไฟล์ขนาดพอดีจอ (รูปที่ไม่มีไฟล์ย่อ คืนค่าว่าง)
const srcsetAttr = (src, sizes) => {
  const widths = RESPONSIVE_IMAGES[src];
  if (!widths) return "";
  const [small, full] = widths;
  const smallSrc = src.replace(/\.webp$/, `-${small}.webp`);
  return `srcset="${esc(smallSrc)} ${small}w, ${esc(src)} ${full}w" sizes="${esc(sizes)}"`;
};

// เผยแพร่เป็น global เพื่อให้ไฟล์อื่นเรียกใช้ได้
window.esc = esc;
window.escBr = escBr;
window.escBreak = escBreak;
window.srcsetAttr = srcsetAttr;
