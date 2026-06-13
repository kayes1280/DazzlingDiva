import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <div className="main-layout min-h-screen overflow-x-hidden bg-[#F2F4F8]">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
}
