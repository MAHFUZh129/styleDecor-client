import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ServiceCard from './ServiceCard';
import LoadingSpinner from '../shared/LoadingSpinner';

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
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/*  Header */}
    
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Our <span className="text-primary">Decoration Packages</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore our professionally designed decoration services for
            homes and ceremonies.
          </p>
        </div>

        {/* Responsive Grid */}
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

      </div>
    </div>
  );
};

export default Services;
