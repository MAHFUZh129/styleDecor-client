const ServiceCard = ({ service }) => {
  const { name, price, image, description } = service;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">
          {description}
        </p>
        <p className="text-primary font-bold mt-2">
          ৳{price}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
