import { Link } from "react-router";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Top Wedding Decoration Trends in 2025",
    category: "Wedding",
    date: "Jan 12, 2025",
    image: "https://i.ibb.co/jV9XnVg/wedding-decor.jpg",
    excerpt: "Explore modern floral stages, pastel palettes, and luxury lighting ideas for weddings.",
  },
  {
    id: 2,
    title: "Birthday Party Decoration Ideas for All Ages",
    category: "Birthday",
    date: "Jan 22, 2025",
    image: "https://i.ibb.co/6szzZyJ/birthday-decor.jpg",
    excerpt: "Fun, colorful, and creative birthday decoration themes for kids and adults.",
  },
  {
    id: 3,
    title: "Corporate Event Decor That Builds Brand Image",
    category: "Corporate",
    date: "Feb 01, 2025",
    image: "https://i.ibb.co/xFfQpwm/corporate-decor.jpg",
    excerpt: "Professional setups designed to elevate brand presence and corporate identity.",
  },
  {
    id: 4,
    title: "Simple Home Decor Ideas for Festivals",
    category: "Home Decor",
    date: "Feb 10, 2025",
    image: "https://i.ibb.co/n7xFv0g/home-decor.jpg",
    excerpt: "Minimal yet elegant decoration ideas to beautify your home during festivals.",
  },
  {
    id: 5,
    title: "How to Choose the Right Decor Theme",
    category: "Event Tips",
    date: "Feb 18, 2025",
    image: "https://i.ibb.co/ZH7Rzzk/event-decor.jpg",
    excerpt: "Learn how to pick decor themes based on venue, budget, and event type.",
  },
  {
    id: 6,
    title: "Outdoor Event Decoration: What You Should Know",
    category: "Outdoor",
    date: "Feb 26, 2025",
    image: "https://i.ibb.co/7p0L6Kp/outdoor-decor.jpg",
    excerpt: "Tips and ideas for weather-friendly outdoor decoration planning.",
  },
  {
    id: 7,
    title: "Floral Decoration Ideas That Never Go Out of Style",
    category: "Floral",
    date: "Mar 04, 2025",
    image: "https://i.ibb.co/svQ5X6H/floral-decor.jpg",
    excerpt: "Timeless floral decoration styles suitable for weddings and events.",
  },
  {
    id: 8,
    title: "Lighting Ideas to Transform Your Event Space",
    category: "Lighting",
    date: "Mar 12, 2025",
    image: "https://i.ibb.co/yfXLkzB/event-lighting.jpg",
    excerpt: "Use ambient, fairy, and spotlight lighting to create magical experiences.",
  },
  {
    id: 9,
    title: "Budget-Friendly Decor Ideas That Look Premium",
    category: "Budget",
    date: "Mar 20, 2025",
    image: "https://i.ibb.co/QD3J4Yw/budget-decor.jpg",
    excerpt: "Affordable decoration ideas that deliver a premium look without overspending.",
  },
];

const BlogPage = () => {
  return (
    <div className="relative py-14 bg-gradient-to-br from-purple-300 via-secondary/30 to-primary overflow-hidden">

      {/* subtle background accents */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            StyleDecor <span className="text-primary">Blog</span>
          </h1>
          <p className="mt-4 text-blue-900 text-md md:text-base">
            Insights, inspiration, and expert tips to make your events unforgettable.
          </p>
        </div>

        {/* blog cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden
              border border-gray-200 shadow-sm
              hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-primary text-white
                  text-xs px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <FaCalendarAlt />
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2
                  text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogPage;
