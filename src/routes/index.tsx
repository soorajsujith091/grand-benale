import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/hotel/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotel Grand Benale | Your Home of Comfort in Kannur" },
      { name: "description", content: "Experience warm Malabar hospitality, elegant rooms, and fine dining at Hotel Grand Benale in Kannur, Kerala." },
      { property: "og:title", content: "Hotel Grand Benale | Your Home of Comfort in Kannur" },
      { property: "og:description", content: "Discover elegant rooms, fine dining, and heartfelt hospitality in the heart of Kannur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
