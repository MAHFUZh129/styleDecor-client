import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ServiceCard from './ServiceCard';
import LoadingSpinner from '../../shared/LoadingSpinner';
import { Link } from 'react-router';

const Services = () => {
  const { data: services = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/services`
      );
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="
      relative overflow-hidden
      py-20
      bg-gradient-to-br from-emerald-100 via-white to-blue-300
    ">
      {/* Glow effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Our{" "}
            <span className="
              bg-gradient-to-r from-primary to-secondary
              bg-clip-text text-transparent
            ">
              Decoration Packages
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Explore our professionally designed decoration services
            crafted for homes, ceremonies, and special occasions.
          </p>
        </div>

        {/* Grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">
          {services.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
        {/* View All  */}
        <div className="text-center mt-14">
          <Link
            to="/services"
            className="
      inline-block
      px-8 py-3
      rounded-full
      font-semibold
      text-white
      bg-gradient-to-r from-primary to-secondary
      hover:scale-105
      transition-transform duration-300
      shadow-lg
    "
          >
            View All Services
          </Link>
        </div>

      </div>


    </div>
  );
};

export default Services;
