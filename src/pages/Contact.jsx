import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-100 via-white to-blue-200 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact <span className="text-primary">StyleDecor</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Have a question, need a custom decoration, or want to book a service?
            We’d love to hear from you.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <InfoItem
                icon={<Phone />}
                title="Phone"
                value="+880 1234 567 890"
              />

              <InfoItem
                icon={<Mail />}
                title="Email"
                value="support@styledecor.com"
              />

              <InfoItem
                icon={<MapPin />}
                title="Location"
                value="Dhaka, Bangladesh"
              />
            </div>

            {/* MAP (Optional Placeholder) */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-64 flex items-center justify-center text-gray-500">
              Google Map Coming Soon
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full"
                  required
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  flex items-center justify-center gap-2
                  px-8 py-3
                  rounded-full
                  bg-gradient-to-r from-primary to-secondary
                  text-white
                  font-semibold
                  hover:scale-105
                  transition
                  shadow-lg
                "
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, title, value }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
      {icon}
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

export default Contact;
