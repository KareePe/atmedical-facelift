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

// เผยแพร่เป็น global เพื่อให้ไฟล์อื่นเรียกใช้ได้
window.esc = esc;
window.escBr = escBr;
window.escBreak = escBreak;
