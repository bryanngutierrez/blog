import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600 text-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold ">BGSolve</h2>
          <p className="text-white text-sm">
            ¡Soluciones de ingenieria que impulsan tu negocio!
          </p>
        </div>

        {/* Links Sections */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-gray-900 text-sm">
            <li><a href="/services/webdesign" className="hover:text-white transition">Diseño de software</a></li>
            <li><a href="/services/energy" className="hover:text-white transition">Diseños solares</a></li>
            <li><a href="/services/repair" className="hover:text-white transition">Reparacion de equipos</a></li>
            <li><a href="/services/segurity" className="hover:text-white transition">Seguridad y Domotica</a></li>
            <li><a href="/services/iluminationandsound" className="hover:text-white transition">Iluminacion y sonido</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-900 text-sm">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Example: Replace with React Icons if needed 
            <a href="#" className="text-gray-700 hover:text-white">FB</a>
            <a href="#" className="text-gray-700 hover:text-white">TW</a>*/}
            <a href="https://www.instagram.com/bgsolve?igsh=YnZvdzVpazlzczV6&utm_source=qr" className="text-gray-700 hover:text-white">IG</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-gray-900 text-sm">
        <p>&copy; {new Date().getFullYear()} BGSolve all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;