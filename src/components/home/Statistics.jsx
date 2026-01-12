import { FaSmile, FaBriefcase, FaUsers, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  {
    value: "1,200+",
    label: "Happy Clients",
    icon: <FaSmile />,
  },
  {
    value: "850+",
    label: "Events Completed",
    icon: <FaBriefcase />,
  },
  {
    value: "150+",
    label: "Expert Decorators",
    icon: <FaUsers />,
  },
  {
    value: "12+",
    label: "Years of Experience",
    icon: <FaAward />,
  },
];

const Statistics = () => {
  return (
    <section className="py-20 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Numbers that reflect our dedication, creativity, and trust.
          </p>
        </div>

        {/* stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center
              border border-gray-200
              hover:shadow-md transition"
            >
              {/* icon */}
              <div className="w-12 h-12 mx-auto mb-4
                bg-primary/10 text-primary text-xl
                rounded-full flex items-center justify-center">
                {item.icon}
              </div>

              {/* number */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                {item.value}
              </h3>

              {/* label */}
              <p className="mt-1 text-sm text-gray-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Statistics;
