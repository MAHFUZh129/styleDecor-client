import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ServiceCoverageMap = () => {
  const coverageAreas = [
    { name: "Dhaka City", position: [23.8103, 90.4125] },
    { name: "Gazipur", position: [23.9999, 90.4203] },
    { name: "Narayanganj", position: [23.6238, 90.5] },
    { name: "Chattogram", position: [22.3569, 91.7832] },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-primary/5">

      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Service <span className="text-primary">Coverage Areas</span>
        </h2>
        <p className="text-gray-600 mt-3">
          We provide professional decoration services across major cities.
        </p>
      </div>

      {/* Full Width Map */}
      <div className="w-full h-[450px]">
        <MapContainer
          center={[23.8103, 90.4125]}
          zoom={7}
          scrollWheelZoom={false}
        //   className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {coverageAreas.map((area, index) => (
            <Marker key={index} position={area.position}>
              <Popup>
                <strong>{area.name}</strong>
                <br />
                Decoration services available
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

    </section>
  );
};

export default ServiceCoverageMap;
