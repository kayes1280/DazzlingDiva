import type { Route } from "./+types/home";
import Hero from "./hero.tsx";
import NewArrivals from "./newarrivals.tsx";
import ThreePieceSection from "./piece.tsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dazzling Diva" },
    { name: "description", content: "Home Page" },
  ];
}

export default function Home() {
  return (

    
    <>
      <Hero />
      <NewArrivals />
      <ThreePieceSection />
    </>
  );
}