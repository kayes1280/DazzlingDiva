import type { Route } from "./+types/home";
import Hero from "./hero.tsx";
import ThreePieceSection from "./piece.tsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Home Page" },
  ];
}

export default function Home() {
  return (

    <>
      <Hero />
      <ThreePieceSection />
    </>

  );
}