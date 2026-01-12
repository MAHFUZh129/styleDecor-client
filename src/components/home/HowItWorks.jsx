import { FaSearch, FaCalendarCheck, FaPaintRoller, FaSmile } from "react-icons/fa";

const steps = [
  {
    step: "01",
    title: "Browse Services",
    desc: "Explore premium decoration services that match your event.",
    icon: <FaSearch />,
  },
  {
    step: "02",
    title: "Book Your Decor",
    desc: "Choose a package, set your date, and confirm instantly.",
    icon: <FaCalendarCheck />,
  },
  {
    step: "03",
    title: "We Decorate",
    desc: "Our expert team transforms your venue beautifully.",
    icon: <FaPaintRoller />,
  },
  {
    step: "04",
    title: "Enjoy the Event",
    desc: "Relax and enjoy unforgettable moments with your guests.",
    icon: <FaSmile />,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative  py-10 bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#ededed] text-white overflow-hidden">

      {/* premium glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px]
          bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px]
          bg-secondary/15 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
         
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-base-content">
            How <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">StyleDecor Works</span> 
          </h2>
          
          <p className="text-md mt-3 text-purple-600">
            From booking to celebration — we handle everything seamlessly.
          </p>
           <p className="text-md mt-5 font-bold tracking-widest text-primary uppercase">
            4 Simple Process
          </p>
        </div>

        {/* steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl
                bg-base-100 border border-base-200
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-3"
            >
              {/* step number */}
              <span className="absolute top-5 right-6 text-4xl  font-black
                text-primary/80">
                {item.step}
              </span>

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
                bg-gradient-to-r from-primary  to-secondary
                group-hover:w-full transition-all duration-300 rounded-b-3xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
