import { FaRing, FaBirthdayCake, FaBuilding, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const styles = [
  {
    title: "Luxury Wedding",
    desc: "Elegant floral arrangements and royal stage designs.",
    icon: <FaRing />,
    color: "bg-rose-50 text-rose-500",
  },
  {
    title: "Birthday Party",
    desc: "Fun, colorful themes for all ages and celebrations.",
    icon: <FaBirthdayCake />,
    color: "bg-purple-50 text-purple-500",
  },
  {
    title: "Corporate Event",
    desc: "Professional, modern setups for business events.",
    icon: <FaBuilding />,
    color: "bg-sky-50 text-sky-500",
  },
  {
    title: "Home & Festive",
    desc: "Beautiful home styling for festivals and occasions.",
    icon: <FaHome />,
    color: "bg-emerald-50 text-emerald-500",
  },
];

const SignatureDecorStyles = () => {
  return (
    <section className="relative py-10 bg-base-200 overflow-hidden">
      {/* Subtle  */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Signature Styles</span> 
          </h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-purple-800 font-medium">
            Discover decor styles crafted with creativity and elegance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {styles.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
              
              {/* learn More */}
              <div className="mt-6 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore Style <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDecorStyles;