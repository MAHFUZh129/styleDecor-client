import { Sparkles, Heart, MapPin, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-100 via-white to-blue-200 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-primary">StyleDecor</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Turning your special moments into beautiful memories through
            creative, elegant, and personalized decoration services.
          </p>
        </div>

        {/* WHO  */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img
            src="https://i.ibb.co.com/LdWCGL0F/download-75.jpg"
            alt="StyleDecor Team"
            className="rounded-3xl shadow-xl w-full h- object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>StyleDecor</strong> is a modern decoration service company
              dedicated to creating stunning environments for homes, ceremonies,
              and special occasions. From intimate celebrations to grand events,
              we focus on details that matter.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team blends creativity, quality materials, and professional
              execution to ensure every event feels unique, joyful, and
              unforgettable.
            </p>
          </div>
        </div>

        {/* /* MISSION  */}
        <div className="grid sm:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To deliver elegant and affordable decoration services that bring
              happiness, beauty, and comfort to every celebration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become a trusted and leading decoration brand known for
              creativity, reliability, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose StyleDecor?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature 
            
              icon={<Sparkles />}
              title="Creative Designs"
              desc="Unique themes and modern decoration concepts."
            />
            <Feature
              icon={<Heart />}
              title="Customer Focused"
              desc="Your satisfaction is our top priority."
            />
            <Feature
              icon={<MapPin />}
              title="On-site & Studio"
              desc="Flexible service modes for your convenience."
            />
            <Feature
              icon={<Users />}
              title="Professional Team"
              desc="Experienced decorators and planners."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Let’s Decorate Your Next Event
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our decoration services and book your perfect setup today.
          </p>

          <a
            href="/services"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Explore Services
          </a>
        </div>

      </div>
    </section>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md text-center">
    <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
      {icon}
    </div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default About;
