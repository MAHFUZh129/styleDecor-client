import { FaStar } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const {
    name,
    _id,
    price,
    image,
    shortDescription,
    rating,
    serviceMode = [],
  } = service;

  return (
    <div className="group bg-base-100 rounded-3xl overflow-hidden
      shadow-md hover:shadow-2xl transition-all duration-300
      hover:-translate-y-2 border border-base-200">

      {/* image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-56 w-full object-cover
            transition-transform duration-500 group-hover:scale-110"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* price */}
        <span className="absolute flex items-center top-4 right-4 bg-primary text-primary-content
          px-4 py-1 text-sm font-bold rounded-full shadow-lg">
          <TbCurrencyTaka size={18} />
 {price}
        </span>
      </div>

      {/* content */}
      <div className="p-6 space-y-4">

        {/* title */}
        <h3 className="text-xl font-extrabold text-base-content leading-tight">
          {name}
        </h3>

        {/* rating & modes */}
        <div className="flex items-center justify-between">
          {/* rating */}
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold text-base-content">
              {rating}
            </span>
          </div>

          {/* service modes */}
          <div className="flex gap-2 flex-wrap">
            {serviceMode.map((mode, index) => (
              <span
                key={index}
                className="text-xs font-semibold px-3 py-1 rounded-full
                  bg-primary/10 text-primary">
                {mode}
              </span>
            ))}
          </div>
        </div>

        {/* description */}
        <p className="text-md text-gray-700 line-clamp-3">
          {shortDescription}
        </p>

        {/* cta */}
        <Link to={`/services/${_id}`} className="block">
          <button
            className="w-full py-3 rounded-2xl font-bold text-sm
              bg-gradient-to-r from-primary to-secondary
              text-white shadow-lg shadow-primary/30
              hover:shadow-primary/50 transition-all
              group-hover:-translate-y-0.5">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
