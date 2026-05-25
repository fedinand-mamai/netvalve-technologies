import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Subsidiaries from "@/components/Subsidiaries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071120] text-white relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Subsidiaries />
        <Footer />
      </div>

    </main>
  );
}