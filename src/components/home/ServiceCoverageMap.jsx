import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// service areas
const serviceAreas = [
  {
    id: 1,
    name: "Dhaka City",
    position: [23.8103, 90.4125],
    coverage: "Full decoration services",
  },
  {
    id: 2,
    name: "Gazipur",
    position: [23.9999, 90.4203],
    coverage: "On-site & ceremony decoration",
  },
  {
    id: 3,
    name: "Narayanganj",
    position: [23.6238, 90.5000],
    coverage: "Event & party decoration",
  },
  {
    id: 4,
    name: "Kushtia",
    position: [23.9088, 89.1220],
    coverage: "Ceremony & party decoration",
  },
  {
    id: 5,
    name: "Rajshahi",
    position: [24.3745, 88.6042],
    coverage: "Wedding & event decoration",
  },
  {
    id: 6,
    name: "Barishal",
    position: [22.7010, 90.3535],
    coverage: "On-site decoration services",
  },
  {
    id: 7,
    name: "Meherpur",
    position: [23.8052, 88.6724],
    coverage: "Special event decoration",
  }
];

const ServiceCoverageMap = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-emerald-100 via-white to-blue-200">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Service Coverage
            </span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            StyleDecor proudly delivers professional decoration services across
            multiple locations in Bangladesh.
          </p>
        </div>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden shadow-2xl h-[420px] md:h-[520px]">
          <MapContainer
            center={[23.8103, 90.4125]}
            zoom={9}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {serviceAreas.map(area => (
              <Marker key={area.id} position={area.position}>
                <Popup>
                  <h3 className="font-bold text-lg">{area.name}</h3>
                  <p className="text-sm text-gray-600">{area.coverage}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {serviceAreas.map(area => (
            <div
              key={area.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-primary">{area.name}</h3>
              <p className="mt-2 text-gray-600">{area.coverage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCoverageMap;
