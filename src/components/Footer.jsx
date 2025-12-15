import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand & Contact */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Style<span className="text-primary">Decor</span>
            
          </h2>
          <p className="mb-6 text-gray-400">
            Elevating homes & ceremonies with elegant, modern decoration
            services and seamless booking experiences.
          </p>

          <div className="space-y-3">
            <p className="flex items-center gap-3 hover:text-white transition">
              <FaMapMarkerAlt className="text-primary" />
              Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-3 hover:text-white transition">
              <FaPhoneAlt className="text-primary" />
              +880 1234-567890
            </p>
            <p className="flex items-center gap-3 hover:text-white transition">
              <FaEnvelope className="text-primary" />
              support@styledecor.com
            </p>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Business Hours
          </h3>

          <div className="space-y-3 text-gray-400">
            <p className="flex items-center gap-3">
              <FaClock className="text-primary" />
              Sat – Thu: 10:00 AM – 8:00 PM
            </p>
            <p className="flex items-center gap-3">
              <FaClock className="text-primary" />
              Friday: Closed
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Stay Connected
          </h3>

          <div className="flex gap-5">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">StyleDecor</span>.  
       All rights reserved. | Design & Decor Solutions

      </div>
    </footer>
  );
};

export default Footer;
