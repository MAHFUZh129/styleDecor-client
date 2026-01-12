import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

const BookEventCTA = () => {
  return (
    <section className="relative py-10 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 overflow-hidden">

      {/* soft ambient glow */}
      <div className="absolute -top-40 left-10 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-10 w-[380px] h-[380px] bg-secondary/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-10 ">
        <div className="rounded-3xl border border-base-200 bg-white shadow-2xl p-10 md:p-16">

          {/* content */}
          <div className="max-w-3xl mx-auto text-center space-y-6">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-base-content leading-tight">
              Let’s Turn Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Special Moments Into Timeless Memories</span>  
           
            </h2>

            <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
              At <span className="font-semibold">StyleDecor</span>, we believe every celebration deserves a
              unique story. Whether it’s a wedding, birthday, corporate event, or an
              intimate home gathering — our expert decorators craft elegant atmospheres
              that reflect your personality, vision, and emotions.
            </p>

            <p className="text-sm md:text-base text-base-content/60">
              From concept design to flawless execution, we handle every detail so you
              can relax and enjoy your moment — beautifully styled, professionally managed,
              and perfectly on time.
            </p>

            {/* CTA */}
            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3
                  px-10 py-4 rounded-2xl font-bold text-white
                  bg-gradient-to-r from-primary to-secondary
                  shadow-lg shadow-primary/30
                  hover:shadow-primary/50 transition-all
                  active:scale-95"
              >
                Explore Our Services
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center
                  px-10 py-4 rounded-2xl font-bold
                  border border-base-300 text-base-content
                  hover:bg-base-200 transition"
              >
                Talk to an Expert
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookEventCTA;
