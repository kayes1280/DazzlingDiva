import type { Route } from "./+types/home";
import CategorySection from "./cateGory";
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
      <CategorySection />
      <NewArrivals />
      <ThreePieceSection />
    </>
  );
}
