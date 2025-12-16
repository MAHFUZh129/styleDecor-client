import { Link } from "react-router";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="
        relative min-h-[90vh] flex items-center overflow-hidden
        bg-gradient-to-br from-primary/10 via-white to-secondary/10
      "
    >
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Make Your Events
            <span className="block text-primary">
              Beautiful & Memorable
            </span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
            StyleDecor helps you book professional decoration services for
            weddings, parties, home events, and ceremonies. Choose your
            decorator, select date & time, and enjoy stress-free decorations.
          </p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Link
              to="/services"
              className="
                inline-block px-8 py-3 rounded-xl
                bg-gradient-to-r from-primary to-secondary
                text-white font-semibold
                hover:opacity-90 transition
              "
            >
              Book Decoration Service
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
          src="https://i.ibb.co.com/LdWCGL0F/download-75.jpg"
            alt="Decoration Service"
            className="w-full max-w-md drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
