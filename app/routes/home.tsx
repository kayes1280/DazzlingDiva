import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Home Page" },
  ];
}

export default function Home() {
  return (
    <h1>Home</h1>
  );
}