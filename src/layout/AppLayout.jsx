import { Outlet, ScrollRestoration } from "react-router-dom";

import { MobileNav } from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Footer from "./Footer";
import ScrollToTopButton from "../ui/ScrollToTopButton";

function AppLayout() {
  return (
    <div className="text-primary bg-primary flex min-h-screen flex-col overflow-hidden">
      <ScrollRestoration />
      <ScrollToTopButton />
      <div className="sm:hidden">
        <MobileNav />
      </div>
      <div className="hidden sm:inline">
        <DesktopNav />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
