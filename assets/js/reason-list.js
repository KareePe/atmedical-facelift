// ===== Reasons =====
// แก้ไข/เพิ่มเหตุผลได้ที่ array นี้ที่เดียว
const REASON_ITEMS = [
  {
    icon: "assets/img/icons/reason-1.svg",
    iconClass: "w-[28px] h-[28px] xl:w-[43px] xl:h-[43px]",
    title: "วางแผนโดยแพทย์ตาม^ปัญหาของแต่ละบุคคล",
    detail: "แพทย์ประเมินโครงสร้างใบหน้า ออกแบบทิศทางการยกและตำแหน่ง|แผลเฉพาะเคส ไม่ใช่โปรแกรมสำเร็จรูปแบบเดียวกันทุกคน",
  },
  {
    icon: "assets/img/icons/reason-2.svg",
    iconClass: "w-[28px] h-[28px] xl:w-[40px] xl:h-[40px]",
    title: "มีเคสจริงให้ศึกษาก่อนตัดสินใจ",
    detail: "ขอชมเคสที่มีลักษณะปัญหาใกล้เคียงกับคุณได้ทางไลน์ ก่อนนัดเข้าปรึกษา",
  },
  {
    icon: "assets/img/icons/reason-3.svg",
    iconClass: "w-[34px] h-[34px] xl:w-[46px] xl:h-[46px]",
    title: "มีทีมดูแลก่อนและหลังเข้ารับบริการ",
    detail: "นัดติดตามผลตามแผนการรักษา พร้อมช่องทางสอบถาม|อาการระหว่างพักฟื้น",
  },
  {
    icon: "assets/img/icons/reason-4.svg",
    iconClass: "w-[36px] h-[36px] xl:w-[46px] xl:h-[46px]",
    title: "10 สาขาทั่วประเทศ ^ติดตามผลได้ใกล้บ้าน",
    detail: "ไม่ต้องเดินทางกลับกรุงเทพทุกครั้งที่ถึงนัด",
  },
];

(function () {
  const list = document.querySelector(".reason-list");
  if (!list) return;

  list.innerHTML = REASON_ITEMS.map(
    (item) => `
    <div class="bg-[#fefbff] shadow-soft rounded-[20px] flex items-center gap-[13px] px-[15px] xl:px-[20px] py-[15px]">
      <div class="shrink-0 w-[48px] h-[48px] xl:w-[70px] xl:h-[70px] rounded-[16px] xl:rounded-[24px] bg-gradient-to-b from-[#b069d6] to-[#8750a4] flex items-center justify-center">
        <img src="${esc(item.icon)}" alt="" class="${item.iconClass}" />
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="font-normal text-plum-dark text-[24px] leading-[27px] xl:text-[30px] xl:leading-[40px]">${escBreak(item.title)}</h3>
        <p class="text-ink-muted text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px]">${escBreak(item.detail)}</p>
      </div>
    </div>`,
  ).join("");
})();
