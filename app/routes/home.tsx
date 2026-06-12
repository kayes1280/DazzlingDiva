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
<<<<<<< HEAD
    
=======
    <>
      <ThreePieceSection />
    </>
>>>>>>> e87335c4a9b13198e01f8079fa703f484bddec3f
  );
}