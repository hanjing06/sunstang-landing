import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Western Sunstang Solar Car Project",
    short_name: "Sunstang",
    description:
      "Western Engineering's student-led solar car project.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f4f5",
    theme_color: "#4f278c",
    icons: [
      {
        src: "/icon.png",
        sizes: "330x330",
        type: "image/png",
      },
    ],
  };
}
