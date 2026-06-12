import type { Route } from "./+types/home";
import ThreePieceSection from "./piece";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Home Page" },
  ];
}

export default function Home() {
  return (
    <>
      <ThreePieceSection />
    </>
  );
}