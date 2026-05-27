import { Navbar } from "@/components/layout/Navbar";
import { Topbar } from "@/components/layout/Topbar";

export function Header() {
  return (
    <header className="relative z-50 bg-white">
      <Topbar />
      <Navbar />
      <button
        className="fixed right-0 top-[151px] z-50 hidden h-12 w-12 place-items-center bg-white text-slate-900 shadow-md lg:grid"
        aria-label="Theme settings"
      >
        <span className="text-xl">⚙</span>
      </button>
    </header>
  );
}
