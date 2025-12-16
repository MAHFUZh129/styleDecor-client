import { FaStar } from "react-icons/fa";

const DecoratorCard = ({ decorator }) => {
  const { name, image, rating, specialties } = decorator;

  return (
    <div className="
      relative
      bg-white/80 backdrop-blur-xl
      border border-white/40
      rounded-3xl
      shadow-lg
      hover:shadow-2xl
      transition-all duration-300
      p-6
      hover:-translate-y-2
    ">
      {/* Glow */}
      <div className="
        absolute -top-10 -right-10
        w-32 h-32
        bg-primary/20
        rounded-full blur-3xl
      " />

      {/* Profile Image */}
      <div className="relative flex justify-center">
        <img
          src={image}
          alt={name}
          className="
            w-24 h-24
            rounded-full
            object-cover
            border-4 border-primary/30
            shadow-md
          "
        />

        {/* Rating Badge */}
        <div className="
          absolute -bottom-2 right-1/2 translate-x-1/2
          bg-white px-3 py-1
          rounded-full
          shadow-md
          flex items-center gap-1
          text-yellow-500 text-sm font-semibold
        ">
          <FaStar />
          {rating}
        </div>
      </div>

      {/* Info */}
      <div className="text-center mt-8">
        <h3 className="text-lg font-bold tracking-wide">
          {name}
        </h3>
      </div>

      {/* Specialties */}
      <div className="
        flex flex-wrap justify-center gap-2 mt-4
      ">
        {specialties.map((item, index) => (
          <span
            key={index}
            className="
              text-xs font-medium
              bg-gradient-to-r from-primary/20 to-secondary/20
              text-primary
              px-3 py-1
              rounded-full
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button className="
        mt-6 w-full
        py-2 rounded-xl
        bg-gradient-to-r from-primary to-secondary
        text-white text-sm font-semibold
        hover:opacity-90 transition
      ">
        View Profile
      </button>
    </div>
  );
};

export default DecoratorCard;
