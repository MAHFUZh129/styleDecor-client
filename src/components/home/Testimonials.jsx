import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Wedding Client",
    review:
      "StyleDecor transformed our wedding venue into a dream. Every detail was elegant and perfectly executed.",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
  },
  {
    name: "Tanvir Hasan",
    role: "Corporate Event",
    review:
      "Professional, punctual, and creative. The decor impressed all our guests and clients.",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "Birthday Party",
    review:
      "Absolutely loved the theme and color combination. It felt premium and personal.",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-teal-100 via-black to-primary/20 text-white overflow-hidden">

      {/* glow */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            What Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="mt-3 text-white/70">
            Real experiences from people who trusted StyleDecor.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-6
                bg-white/10 backdrop-blur-xl
                border border-white/20
                shadow-xl hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-2"
            >
              {/* stars */}
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* review */}
              <p className="text-sm leading-relaxed text-white/80 mb-6">
                “{item.review}”
              </p>

              {/* user */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-xs text-white/60">{item.role}</p>
                </div>
              </div>

              {/* hover glow */}
              <div className="absolute inset-0 rounded-3xl
                bg-gradient-to-r from-primary/20 to-secondary/20
                opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
