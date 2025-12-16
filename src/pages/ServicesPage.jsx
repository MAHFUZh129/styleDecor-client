import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ServiceCard from "../components/home/services/ServiceCard";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const ServicesPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/services`);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

//   filter
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Decoration Services</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Browse, search and filter decoration services that fit your needs.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-5 rounded-2xl shadow mb-10 grid gap-4
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {/* Search */}
          <input
            type="text"
            placeholder="Search service name"
            className="input input-bordered w-full"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          {/* Category */}
          <select
            className="select select-bordered w-full"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
            <option value="Home">Home</option>
          </select>
          {/* Min Budget */}
          <input
            type="number"
            placeholder="Min Budget"
            className="input input-bordered w-full"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
          />

          {/* Max Budget */}
          <input
            type="number"
            placeholder="Max Budget"
            className="input input-bordered w-full"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
          />
        </div>
        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <p className="text-center text-gray-500">
            No services found
          </p>
        ) : (
          <div className="grid gap-8
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map(service => (
              <ServiceCard
                key={service._id}
                service={service}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesPage;
