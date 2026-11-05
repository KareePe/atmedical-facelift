/**
 * Tailwind CSS configuration — AT Medical Facelift landing page
 * Breakpoint หลักคือ xl (1280px): ต่ำกว่านี้ใช้เลย์เอาต์ mobile จาก Figma,
 * ตั้งแต่ 1280px ขึ้นไปใช้เลย์เอาต์ desktop 1440
 */
module.exports = {
  content: ["./index.html", "./404.html", "./assets/js/**/*.js"],

  theme: {
    extend: {
      colors: {
        plum: { DEFAULT: "#491251", dark: "#382c59", mid: "#5a2665", soft: "#773a80" },
        lilac: { DEFAULT: "#e8c3fc", soft: "#f3eaf8", pale: "#f8eaff" },
        accent: "#903bc8",
        ink: { DEFAULT: "#303030", muted: "#666666" },
      },

      fontFamily: {
        sans: ["DB Helvethaica X", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      boxShadow: {
        card: "12px 12px 32px rgba(56, 44, 89, 0.06)",
        soft: "-2px 5px 11px rgba(112, 92, 167, 0.4)",
        button: "2px 4px 10px rgba(0, 0, 0, 0.1)",
        price: "12px 12px 32px rgba(0, 0, 0, 0.1)",
      },
    },
  },

  plugins: [],
};
