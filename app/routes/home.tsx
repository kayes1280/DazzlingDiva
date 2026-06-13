import type { Route } from "./+types/home";
import Hero from "./hero";
import NewArrivals from "./newarrivals";
import ThreePieceSection from "./piece";

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