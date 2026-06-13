import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <div className="main-layout">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
}