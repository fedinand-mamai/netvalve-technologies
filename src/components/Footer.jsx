"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black/30 border-t border-white/10 mt-20 px-6 py-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            NetValve Technologies
          </h2>
          <p className="text-gray-400">
            Innovate, Integrate, Elevate. Building next-generation digital infrastructure solutions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#subsidiaries" className="hover:text-white">Subsidiaries</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">
            Email: info@netvalve.com <br />
            Phone: +254 797603096 <br />
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-xs">
        © {new Date().getFullYear()} NetValve Technologies. All rights reserved.
      </div>
    </footer>
  );
}