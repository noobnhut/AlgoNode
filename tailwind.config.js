/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: "#4B5563", // Màu xám chủ đạo
        secondary: "#10B981", // Màu xanh lá nhấn
        accent: "#F59E0B", // Màu vàng tạo điểm nhấn
        background: "#F3F4F6", // Màu nền sáng
        text: "#1F2937", // Màu chữ tối
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
