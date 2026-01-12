import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ServiceCard from "../components/home/services/ServiceCard";
import LoadingSkeleton from "../components/shared/LoadingScheleton";

import { FaSearch } from "react-icons/fa";

const ServicesPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/services-all`
      );
      return res.data;
    },
  });

  if (isLoading) return <LoadingSkeleton />;

  const filteredServices = services.filter(service => {
    const matchName = service.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || service.category === category;

    const matchMin =
      minPrice === "" || service.price >= Number(minPrice);

    const matchMax =
      maxPrice === "" || service.price <= Number(maxPrice);

    return matchName && matchCategory && matchMin && matchMax;
  });

  return (
    <section className="relative py-10 overflow-hidden bg-gradient-to-br from-secondary/30 via-primary/20 to-pink-500
">
      
      {/* premium glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-primary/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-secondary/70 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Decoration Services
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Browse premium decoration services tailored for weddings,
            parties, and special events.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-14 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl border border-white/40 p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-2">
            <FaSearch className="text-primary p-" size={22} />


            <input
            type="text"
            placeholder="Search Services....."
            className="input input-bordered w-full focus:border-primary"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          </div>
          

          <select
            className="select select-bordered w-full focus:border-primary"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
            <option value="Home">Home</option>
          </select>

          <input
            type="number"
            placeholder="Min Budget"
            className="input input-bordered w-full focus:border-primary"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Budget"
            className="input input-bordered w-full focus:border-primary"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
          />
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No services found matching your criteria.
          </p>
        ) : (
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {filteredServices.map(service => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesPage;
