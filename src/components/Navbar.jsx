import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 fixed top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="NetValve Logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold text-white">
          NetValve
        </span>
      </div>

      <div className="hidden md:flex gap-8 text-gray-300">
        <a href="#home" className="hover:text-white">Home</a>
        <a href="#services" className="hover:text-white">Services</a>
        <a href="#subsidiaries" className="hover:text-white">Subsidiaries</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl">
        Get Started
      </button>
    </nav>
  );
}