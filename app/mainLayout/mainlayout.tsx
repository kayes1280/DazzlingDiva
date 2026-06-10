import { Outlet } from "react-router";
import Navbar from "./navbar.tsx";
import Footer from "./footer.tsx";

export default function MainLayout() {
  return (
    <div className="main-layout">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
}