import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aditya Dhar Dwivedi Portfolio",
    short_name: "Aditya Portfolio",
    description: "A static MERN stack portfolio for Aditya Dhar Dwivedi.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f3ede3",
    theme_color: "#0b0c10",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
