import { FaRegStar, FaUsers, FaPalette, FaClock, FaCrown, FaHandshake, FaLeaf, FaHeadset } from "react-icons/fa";

const features = [
  {
    title: "Premium Quality Decor",
    desc: "We use high-quality materials and elegant designs for every event.",
    icon: <FaCrown />,
  },
  {
    title: "Experienced Decor Experts",
    desc: "Our professional decorators bring years of real-world experience.",
    icon: <FaUsers />,
  },
  {
    title: "Customized Themes",
    desc: "Every decoration is tailored to match your vision and style.",
    icon: <FaPalette />,
  },
  {
    title: "On-Time Execution",
    desc: "We ensure timely setup and flawless event execution.",
    icon: <FaClock />,
  },
  {
    title: "Trusted by Clients",
    desc: "Hundreds of satisfied clients trust StyleDecor for their events.",
    icon: <FaHandshake />,
  },
  {
    title: "Eco-Friendly Decor",
    desc: "Sustainable materials for a greener celebration.",
    icon: <FaLeaf />,
  },
  {
    title: "Luxury Finishing",
    desc: "Attention to detail that delivers a premium finish.",
    icon: <FaRegStar />,
  },
  {
    title: "24/7 Support",
    desc: "Dedicated support before, during, and after your event.",
    icon: <FaHeadset />,
  },
];

const WhyChooseStyleDecor = () => {
  return (
    <section className="relative py-10 bg-amber-100
 overflow-hidden">

      {/* glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-base-content">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">StyleDecor</span>
          </h2>
          <p className="mt-4 text-md md:text-purple-600 text-base-content/70">
            We don’t just decorate spaces — we create unforgettable experiences.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl
                bg-base-100 border border-base-200
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-3"
            >
              {/* icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl
                bg-gradient-to-br from-primary to-secondary
                text-white text-2xl
                flex items-center justify-center
                shadow-md">
                {item.icon}
              </div>

              {/* content */}
              <h3 className="text-lg font-bold text-base-content mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-base-content/70 leading-relaxed">
                {item.desc}
              </p>

              {/* hover accent */}
              <span className="absolute bottom-0 left-0 h-1 w-0
                bg-gradient-to-r from-primary to-secondary
                group-hover:w-full transition-all duration-300 rounded-b-3xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseStyleDecor;
