import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DecoratorCard from "./DecoratorCard";
import LoadingSpinner from "../../shared/LoadingSpinner";

const TopDecorators = () => {
  const { data: decorators = [], isLoading } = useQuery({
    queryKey: ["topDecorators"],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/top-decorators`
      );
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="
      relative overflow-hidden py-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50
    ">
      {/* Background  */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Top Decorators
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Discover our highly rated professionals who specialize in
            transforming homes and events into stunning experiences.
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
          {decorators.map(decorator => (
            <DecoratorCard
              key={decorator._id}
              decorator={decorator}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDecorators;
