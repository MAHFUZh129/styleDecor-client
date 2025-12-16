import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const {
    name,
    price,
    image,
    shortDescription,
    rating,
    serviceMode = [],
  } = service;

  return (
    <div
      className="
        group bg-white rounded-2xl overflow-hidden
        shadow-md hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
            h-52 w-full object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
        />

        {/* Price Badge */}
        <span
          className="
            absolute top-4 right-4
            bg-primary text-white
            px-4 py-1 text-sm font-semibold
            rounded-full shadow
          "
        >
          ৳{price}
        </span>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-bold leading-snug">
          {name}
        </h3>

        {/* Rating + Service Mode */}
        <div className="flex items-center justify-between text-md">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="font-medium text-gray-700">
              {rating}
            </span>
          </div>

          {/* Service Mode */}
          <div className="flex gap-1 flex-wrap">
            {serviceMode.map((mode, index) => (
              <span
                key={index}
                className="
                  text-[13px] font-semibold px-2 py-0.5
                  rounded-full
                  bg-primary/10 text-primary
                "
              >
                {mode}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-amber-700 text-md line-clamp-3">
          {shortDescription}
        </p>

        {/* Button */}
        <button
          className="
            mt-2 w-full py-2 rounded-xl
            bg-gradient-to-r from-primary to-secondary
            text-white text-sm font-semibold
            hover:opacity-90 transition
          "
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
