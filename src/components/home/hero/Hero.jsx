import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiCheckCircle } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative h-[65vh] min-h-[500px]  bg-gradient-to-br from-primary/10 via-white to-secondary/10 flex items-center overflow-hidden bg-slate-50">
      {/* decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            {/* small badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
            >
              <FiCheckCircle />  Trusted by 1.7k+ People
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1]">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Moments</span> Into Memories
            </h1>

            <p className="text-base md:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Book elite decorators for weddings and parties. 
              Elevate your atmosphere with one click.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/services"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-1 active:scale-95"
              >
                Book a Decorator
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
             
            </div>
          </motion.div>

          {/* right content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* floating card detail */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-1/4 z-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <FiCheckCircle size={20} />
                </div>
                <div>
                  <p className="text-[14px] text-secondary font-bold uppercase">Verified</p>
                  <p className="text-md font-bold text-primary">Top-Rated Decorators</p>
                </div>
              </div>
            </motion.div>

            {/* main image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2.5rem] rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src="https://i.ibb.co.com/LdWCGL0F/download-75.jpg"
                alt="Decoration"
                className="relative w-full max-w-sm h-[400px] object-cover rounded-[2rem] shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>

      
    </div>
  );
};

export default Hero;