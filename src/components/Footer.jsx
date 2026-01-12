import { Link2 } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand & Contact */}
        <div>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl rotate-3 group-hover:rotate-12  transition-transform duration-300 flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-white font-black text-2xl italic">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-black  tracking-tighter bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] hover:bg-right transition-all duration-500 bg-clip-text text-transparent italic">
                Style
              </span>
              <span className="text-3xl font-black italic text-primary">Decor</span>
            </div>
          </Link>
          
          <p className="mb-6 mt-4 text-gray-400">
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
        {/* links*/}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>
           <div className="space-y-3 text-gray-400">
            <Link to={'/'} className="flex items-center hover:text-primary  gap-3">
              Home 
            </Link>
            <Link to={'/services'} className="flex items-center hover:text-primary  gap-3">
              Services
            </Link>
            <Link to={'/about'} className="flex items-center hover:text-primary  gap-3">
              About Us
            </Link>
            <Link to={'/contact'} className="flex items-center hover:text-primary  gap-3">
              Contact
            </Link>
            <p className="flex items-center hover:text-primary  gap-3">
              
              FAQ
            </p>
          </div>
          
        </div>
        {/* working hours */}
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
