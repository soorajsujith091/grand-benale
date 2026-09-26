import { createFileRoute } from "@tanstack/react-router";
import { CareerPage } from "@/components/hotel/CareerPage";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers | Hotel Grand Benale" },
      { name: "description", content: "Join the team at Hotel Grand Benale. We are looking for passionate individuals to deliver exceptional hospitality." },
    ],
  }),
  component: CareerPage,
});
