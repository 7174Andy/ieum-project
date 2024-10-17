import localFont from "next/font/local";

export const gmarket = localFont({
  src: [
    {
      path: "../assets/fonts/GmarketSansTTFMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/GmarketSansTTFBold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/GmarketSansTTFLight.ttf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-gmarket",
});
