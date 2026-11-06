// ===== Program cards =====
// แก้ไขข้อมูลแต่ละโปรแกรมได้ที่ array นี้ที่เดียว
// media.type: "gallery" = สไลด์รูปพร้อม thumbnail / "strips" = รูป before-after เรียงลงมา
// mediaSide: ฝั่งที่วางรูปบน desktop
const NOTE_BASE = ["ไม่รวมค่าตรวจร่างกาย", "ไม่รวมค่ายากลับบ้าน"];

const PROGRAM_ITEMS = [
  {
    id: "baby",
    padding: "pt-[57px] pb-[81px] xl:pt-[102px] xl:pb-[111px]",
    background: "bg-program-first",
    wave: true,
    title: "โปรแกรมใหม่ล่าสุด",
    bar: "BABY FACE LIFT",
    barLarge: true,
    subtitle: "ดูแลส่วนหน้าแก้ม และใต้ตา",
    details: [
      { label: "ช่วยเรื่องอะไร", items: ["ถุงใต้ตา", "หน้าแก้มเริ่มตก", "ใบหน้าดูโทรมหรือดูเหนื่อยล้า"] },
      { label: "เหมาะกับ", items: ["ผู้ที่มีปัญหาใต้ตาและหน้าแก้มร่วมกัน", "ผู้ที่ต้องการดูแลใต้ตาและยกหน้าแก้มในครั้งเดียว"] },
      { label: "จุดเด่น", items: ["รวม 3 การดูแลไว้ในโปรแกรมเดียว", "ช่วยดูแลปัญหาถุงใต้ตา", "ช่วยยกหน้าแก้มและแก้มส้ม", "ช่วยลดลุคโทรมและเหนื่อยล้า"] },
    ],
    prices: {
      technique: "เทคนิคยาชา",
      promo: "99,000",
      review: "69,000",
    },
    media: {
      type: "gallery",
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `assets/img/baby-${n}.webp`),
    },
    mediaSide: "right",
    notes: ["กรณีเข้ารับหัตถการแบบดมยาสลบ สามารถรับบริการได้ที่สำนักงานใหญ่ โรงพยาบาลตากรุงเทพ เพชรเกษม 70", ...NOTE_BASE],
    benefits: ["ใต้ตาดูสมดุลขึ้น", "หน้าแก้มและแก้มส้มดูยกและได้รูป", "ภาพรวมใบหน้าดูสดใสขึ้น", "ช่วยลดลุคเหนื่อยล้าของใบหน้า"],
  },
  {
    id: "double",
    padding: "pt-[48px] pb-[77px] xl:pt-[95px] xl:pb-[172px]",
    background: "bg-double",
    title: "ศัลยกรรมดึงหน้า",
    bar: "โปรแกรม Double Face Lock",
    subtitle: "ดูแลส่วนหน้าผาก ช่วงแก้ม ร่องน้ำหมาก และกรอบหน้า",
    details: [
      { label: "เหมาะกับ", text: "ผู้ที่มีแก้มหย่อนคล้อย ร่องแก้มชัด กรอบหน้าไม่กระชับ หรือเริ่มมีความหย่อนคล้อยหลายบริเวณร่วมกัน" },
      { label: "จุดเด่น", text: "ช่วยยกและจัดตำแหน่งเนื้อเยื่อในหลายจุดของใบหน้า พร้อมกัน เพื่อให้สัดส่วนโดยรวมดูสมดุลและเป็นธรรมชาติ" },
    ],
    media: {
      type: "gallery",
      images: ["assets/img/double-1.webp", "assets/img/double-2.webp", "assets/img/double-3.webp", "assets/img/double-4.webp"],
    },
    mediaSide: "left",
    notes: NOTE_BASE,
  },
  {
    id: "upper",
    padding: "pt-[53px] pb-[45px] xl:pt-[79px] xl:pb-[79px]",
    background: "bg-program-pale",
    title: "ดึงหน้าส่วนบน",
    bar: "โปรแกรม Upper Face Lift",
    subtitle: "ดูแลส่วนหน้าผาก ช่วงเหนือคิ้ว",
    details: [
      { label: "ช่วยเรื่องอะไร", items: ["หน้าผากเริ่มหย่อนคล้อย", "ช่วงคิ้วดูตกหรือดูหนัก", "ใบหน้าส่วนบนดูไม่กระชับ"] },
      { label: "เหมาะกับ", items: ["ผู้ที่ต้องการดูแลใบหน้าส่วนบนโดยเฉพาะ", "ผู้ที่ต้องการให้ภาพรวมใบหน้าดูสดใสขึ้น"] },
      { label: "จุดเด่น", items: ["เน้นยกกระชับบริเวณหน้าผากและช่วงเหนือคิ้ว", "ช่วยให้ใบหน้าส่วนบนดูเปิดมากขึ้น"] },
    ],
    media: {
      type: "strips",
      ratio: "aspect-[470/173]",
      radius: "rounded-[16px] xl:rounded-[30px]",
      gap: "gap-[10px]",
      images: ["assets/img/upper-1.webp", "assets/img/upper-2.webp", "assets/img/upper-3.webp"],
    },
    mediaSide: "right",
    notes: NOTE_BASE,
  },
  {
    id: "temple",
    padding: "pt-[53px] pb-[49px] xl:pt-[92px] xl:pb-[84px]",
    background: "bg-temple",
    title: "ดึงหน้าส่วนขมับ",
    bar: "โปรแกรม Baby Eye Lift",
    subtitle: "ดูแลส่วนขมับ หางตา และหางคิ้ว",
    details: [
      { label: "ช่วยเรื่องอะไร", items: ["ขมับและช่วงข้างตาเริ่มหย่อน", "หางตาและหางคิ้วดูตกหรือดูหนัก"] },
      { label: "เหมาะกับ", text: "ผู้ที่มีความหย่อนคล้อยบริเวณขมับและช่วงหางตา หรือรู้สึกว่าบริเวณรอบดวงตาดูเหนื่อยล้าไม่สดใส" },
      { label: "จุดเด่น", items: ["เน้นยกกระชับบริเวณ ขมับ หางตา และหางคิ้ว", "ช่วยให้ช่วงด้านข้างของใบหน้าดูยกและได้สัดส่วนมากขึ้น", "ช่วยให้บริเวณรอบดวงตาดูเปิดและสดใสขึ้น"] },
    ],
    media: {
      type: "strips",
      ratio: "aspect-[535/116]",
      radius: "rounded-[12px] xl:rounded-[20px]",
      gap: "gap-[8px] xl:gap-[15px]",
      images: ["assets/img/temple-1.webp", "assets/img/temple-2.webp", "assets/img/temple-3.webp", "assets/img/temple-4.webp"],
    },
    mediaSide: "left",
    notes: NOTE_BASE,
  },
  {
    id: "mid",
    padding: "pt-[60px] pb-[51px] xl:pt-[84px] xl:pb-[101px]",
    background: "bg-mid",
    title: "ดึงหน้าส่วนกลาง",
    bar: "โปรแกรม Mid Face Lift",
    subtitle: "ดูแลส่วนขมับ หางตา หางคิ้ว ร่องแก้ม<br />ใบหน้าช่วงกลาง และแก้มห้อยย้อย",
    details: [
      { label: "ช่วยเรื่องอะไร", items: ["หน้าแก้ม ร่องแก้ม", "ช่วงกลางใบหน้าดูหย่อน", "ใบหน้าดูเหนื่อยล้า"] },
      { label: "เหมาะกับ", items: ["ผู้ที่มีหางตาหรือหางคิ้วตก บริเวณขมับเริ่มหย่อนคล้อย", "ผู้ที่มีปัญหาแก้มตกหรือแก้มส้มเริ่มหย่อน", "ผู้ที่มีร่องแก้มเด่นชัดขึ้น"] },
      { label: "จุดเด่น", items: ["เน้นยกแนวด้านข้างของใบหน้าส่วนกลาง ช่วยปรับมิติ บริเวณหางตาและขมับ และหน้าแก้ม", "ช่วยดูแลบริเวณร่องแก้ม", "ช่วยเสริมมิติของใบหน้าช่วงกลาง"] },
    ],
    media: {
      type: "strips",
      ratio: "aspect-[470/137]",
      radius: "rounded-[16px] xl:rounded-[30px]",
      gap: "gap-[8px] xl:gap-[15px]",
      images: ["assets/img/mid-1.webp", "assets/img/mid-2.webp", "assets/img/mid-3.webp"],
    },
    mediaSide: "right",
    notes: NOTE_BASE,
  },
  {
    id: "lower",
    padding: "pt-[62px] pb-[56px] xl:pt-[96px] xl:pb-[87px]",
    background: "bg-program-pale",
    title: "ดึงหน้าส่วนล่าง",
    bar: "โปรแกรม Lower Face Lift",
    subtitle: "ดูแลส่วนแก้มล่าง ร่องน้ำหมาก และกรอบหน้า",
    details: [
      { label: "ช่วยเรื่องอะไร", items: ["แก้มล่างเริ่มหย่อน", "ร่องน้ำหมากดูชัด", "มีความหย่อนคล้อยบริเวณแนวกราม"] },
      { label: "เหมาะกับ", text: "ผู้มีปัญหาความหย่อนคล้อยบริเวณใบหน้าส่วนล่าง โดยเฉพาะแก้มล่าง ร่องน้ำหมาก แนวกราม และกรอบหน้า ต้องการปรับให้ใบหน้าส่วนล่างดูยกและได้รูปมากขึ้น" },
      { label: "จุดเด่น", items: ["เน้นยกกระชับบริเวณแก้มล่าง", "ช่วยดูแลร่องน้ำหมากให้ดูนุ่มนวลขึ้น", "ช่วยปรับแนวกรามและกรอบหน้าให้ดูได้รูปมากขึ้น", "ช่วยให้ใบหน้าส่วนล่างดูสมดุลกับช่วงกลางใบหน้า"] },
    ],
    media: {
      type: "strips",
      ratio: "aspect-[535/156]",
      radius: "rounded-[16px] xl:rounded-[30px]",
      gap: "gap-[8px] xl:gap-[15px]",
      images: ["assets/img/lower-1.webp", "assets/img/lower-2.webp", "assets/img/lower-3.webp"],
    },
    mediaSide: "left",
    notes: NOTE_BASE,
  },
];

(function () {
  const arrow = (side, cls) => `
    <button type="button" aria-label="${side === "left" ? "รูปก่อนหน้า" : "รูปถัดไป"}" class="icon-arrow ${cls}">
      <img src="assets/img/icons/arrow-${side}.svg" alt="" class="${side === "left" ? "-scale-x-100" : ""}" />
    </button>`;

  const detail = (d) =>
    d.items
      ? `<div>
          <p class="font-medium">${esc(d.label)}:</p>
          <ul class="list-disc pl-[26px] xl:pl-[42px] marker:text-[13px] xl:marker:text-[16px]">
            ${d.items.map((item) => `<li class="font-light">${esc(item)}</li>`).join("")}
          </ul>
        </div>`
      : `<p><span class="font-medium block xl:inline">${esc(d.label)}:</span> <span class="font-light">${esc(d.text)}</span></p>`;

  const priceBox = (label, value, tone) => `
    <div class="price-box ${tone} flex-1 xl:flex-none rounded-[15px] flex flex-col items-center justify-center min-w-0 px-[6px] xl:px-[24px] py-[15px] xl:py-[16px]">
      <p class="font-bold italic text-[#e8c3fc] text-[18px] leading-[13px] xl:text-[22px] xl:leading-[23px]">${esc(label)}</p>
      <p class="font-bold text-white whitespace-nowrap text-[28px] leading-[32px] xl:text-[40px] xl:leading-[40px]">
        <span class="text-[42px] xl:text-[60px]">${esc(value)}</span> บาท
      </p>
    </div>`;

  const prices = (p) =>
    p
      ? `<div class="w-full flex flex-col items-center gap-[3px] xl:gap-[8px]">
          <p class="font-medium text-plum-dark text-[24px] leading-[27px] xl:text-[28px] xl:leading-[40px]">${esc(p.technique)}</p>
          <div class="w-full xl:w-auto flex gap-[5px] xl:gap-[8px]">
            ${priceBox("ราคาโปรโมชัน", p.promo, "bg-plum-dark")}
            ${priceBox("ราคารีวิว", p.review, "bg-plum-soft")}
          </div>
        </div>`
      : "";

  const gallery = (item) => `
    <div class="case-gallery w-full flex flex-col items-center gap-[11px] xl:gap-[22px]">
      <div class="relative w-full">
        <div class="swiper case-swiper mx-[14px] w-[calc(100%_-_28px)]">
          <div class="swiper-wrapper">
            ${item.media.images
              .map(
                (src, i) => `
              <div class="swiper-slide">
                <img src="${esc(src)}" ${srcsetAttr(src, "(min-width: 1280px) 507px, 275px")} alt="ภาพก่อนและหลังทำ ${esc(item.bar)} เคสที่ ${i + 1}" loading="lazy" class="w-full aspect-[507/456] object-cover rounded-[18px] xl:rounded-[30px]" />
              </div>`,
              )
              .join("")}
          </div>
        </div>
        <div class="absolute z-10 inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none [&>*]:pointer-events-auto">
          ${arrow("left", "case-prev")}
          ${arrow("right", "case-next")}
        </div>
      </div>
      <div class="w-[calc(100%_-_28px)] xl:w-[560px] shrink-0 grid grid-cols-3 gap-[6px] xl:gap-[13px]">
        ${item.media.images
          .slice(1, 4)
          .map(
            (src, i) => `
          <button type="button" data-slide="${i + 1}" aria-label="ดูเคสที่ ${i + 2}" class="case-thumb">
            <img src="${esc(src)}" ${srcsetAttr(src, "(min-width: 1280px) 178px, 30vw")} alt="" loading="lazy" class="w-full aspect-[178/160] object-cover rounded-[10px] xl:rounded-[18px]" />
          </button>`,
          )
          .join("")}
      </div>
      <div class="dots swiper-pagination case-dots"></div>
    </div>`;

  const strips = (item) => `
    <div class="w-full flex flex-col ${item.media.gap}">
      ${item.media.images
        .map(
          (src, i) => `
        <img src="${esc(src)}" ${srcsetAttr(src, "(min-width: 1280px) 507px, 275px")} alt="ภาพก่อนและหลังทำ ${esc(item.bar)} เคสที่ ${i + 1}" loading="lazy" class="w-full ${item.media.ratio} object-cover ${item.media.radius}" />`,
        )
        .join("")}
    </div>`;

  const notes = (item) => `
    <div class="w-full text-ink-muted text-[15px] leading-[16px] xl:text-[20px] xl:leading-[22px] ${item.mediaSide === "right" ? "xl:text-right" : ""}">
      <p class="font-bold">หมายเหตุ</p>
      <ul class="list-disc list-inside marker:text-[12px]">
        ${item.notes.map((note) => `<li>${esc(note)}</li>`).join("")}
      </ul>
    </div>`;

  const benefits = (item) =>
    item.benefits
      ? `<ul class="flex flex-col xl:flex-row xl:justify-center gap-[3px] xl:gap-[30px] w-full max-w-[342px] xl:max-w-none">
          ${item.benefits
            .map(
              (text) => `
            <li class="flex items-center gap-[14px] xl:gap-[16px]">
              <img src="assets/img/icons/check.svg" alt="" class="shrink-0 w-[26px] h-[26px] m-[3px]" />
              <span class="text-ink-muted whitespace-nowrap text-[22px] leading-[22px] xl:text-[30px] xl:leading-[32px]">${esc(text)}</span>
            </li>`,
            )
            .join("")}
        </ul>`
      : "";

  const card = (item) => `
    <section id="program-${esc(item.id)}" class="${item.background} relative overflow-hidden ${item.padding}" aria-labelledby="program-${esc(item.id)}-title">
      ${item.wave ? '<div aria-hidden="true" class="bg-wave absolute left-1/2 -translate-x-1/2 bottom-[10%] w-full max-w-[1290px] aspect-[2/1]"></div>' : ""}
      <div class="relative mx-auto w-full max-w-[1241px] px-[24px] xl:px-[16px] flex flex-col items-center gap-[20px] xl:gap-[53px]">
        <div data-aos="fade-up" class="w-full max-w-[342px] xl:max-w-[1209px] rounded-[24px] xl:rounded-[40px] bg-gradient-to-b from-white to-[#f5f5f5] shadow-card px-[6px] xl:px-[60px] py-[30px]">
          <div class="flex flex-col ${item.mediaSide === "left" ? "xl:flex-row-reverse" : "xl:flex-row"} items-center justify-center gap-[25px] xl:gap-[52px] xl:w-[1117px]">
            <div class="w-full xl:w-[530px] flex flex-col items-center gap-[10px] xl:gap-[24px]">
              <div class="w-full flex flex-col items-center gap-[8px] xl:gap-[13px]">
                <h2 id="program-${esc(item.id)}-title" class="program-title font-bold text-plum-dark text-center whitespace-nowrap px-[45px] py-[3px] xl:px-[60px] xl:py-[6px] text-[33px] leading-[40px] xl:text-[55px] xl:leading-[50px]">${esc(item.title)}</h2>
                <p class="program-bar rounded-[10px] w-full max-w-[312px] ${item.barLarge ? "xl:max-w-[468px] xl:text-[61px]" : "xl:max-w-[444px] xl:text-[45px]"} h-[46px] xl:h-[66px] flex items-center justify-center font-bold text-white text-center whitespace-nowrap text-[34px] leading-[22px] xl:leading-[30px]">${esc(item.bar)}</p>
                <p class="font-medium text-plum-dark text-center text-[20px] leading-[23px] xl:text-[32px] xl:leading-[34px]">${escBr(item.subtitle)}</p>
              </div>
              <div class="w-full max-w-[304px] xl:max-w-[486px] flex flex-col gap-[10px] text-ink-muted text-[19.5px] leading-[20px] xl:text-[28px] xl:leading-[30px]">
                ${item.details.map(detail).join("")}
              </div>
              ${prices(item.prices)}
            </div>
            <div class="w-full max-w-[303px] xl:max-w-none xl:w-[535px] flex flex-col items-center gap-[25px] xl:gap-[22px]">
              ${item.media.type === "gallery" ? gallery(item) : strips(item)}
              ${notes(item)}
            </div>
          </div>
        </div>
        ${benefits(item)}
        <div class="flex flex-col xl:flex-row items-center justify-center gap-[20px]">
          <a href="https://lin.ee/sHKwZrG" target="_blank" rel="noopener" class="btn btn-plum">
            <img src="assets/img/icons/line-w.svg" alt="" class="btn-icon-line" />
            ขอรายละเอียดค่าบริการเฉพาะเคส
          </a>
          <a href="tel:0928893872" class="btn btn-silver">
            <img src="assets/img/icons/phone-p.svg" alt="" class="btn-icon-phone" />
            092-889-3872
          </a>
        </div>
      </div>
    </section>`;

  const first = document.getElementById("program-baby-mount");
  const rest = document.getElementById("program-list-mount");
  if (first) first.innerHTML = card(PROGRAM_ITEMS[0]);
  if (rest) rest.innerHTML = PROGRAM_ITEMS.slice(1).map(card).join("");
})();
