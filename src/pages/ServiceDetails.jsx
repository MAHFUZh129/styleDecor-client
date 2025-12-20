import { Link, useLocation, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import useAuth from '../hooks/useAuth';
import BookingModal from '../components/modal/BookingModal';
import { Star } from 'lucide-react';
import { TbCurrencyTaka } from 'react-icons/tb';


const ServiceDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [openModal, setOpenModal] = useState(false);
const location = useLocation()

    const { data: service, isLoading } = useQuery({
        queryKey: ['service', id],
        queryFn: async () => {
            const res = await axios(
                `${import.meta.env.VITE_API_URL}/services/${id}`
            );
            return res.data;

        },

    });

    const closeModal = () => {
        setOpenModal(false)
    }

    // console.log(service)
    if (isLoading) return <LoadingSpinner />

    const { shortDescription, description, name, image, duration, rating, serviceMode, price, category, gallery } = service


    return (
        <div>
            <section className="bg-gradient-to-br from-emerald-100 via-white to-blue-200 min-h-screen py-16">
                <div className="max-w-7xl mx-auto px-4">

                    {/* HERO */}
                    <div className="grid lg:grid-cols-2 gap-10 mb-16 items-center">
                        <img
                            src={image}
                            alt={name}
                            className="rounded-3xl shadow-2xl w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover"
                        />

                        <div className="space-y-6">
                            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                                {category}
                            </span>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                                {name}
                            </h1>

                            <p className="text-amber-600 text-md">
                                {shortDescription}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <Star className="text-yellow-400 fill-amber-500" />
                                <span className="font-semibold">{rating}</span>
                                <span className="text-gray-500">(Customer Rating)</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center text-3xl font-bold text-primary">
                              <TbCurrencyTaka /> {price}
                            </div>

                            {/* CTA */}
                            {user ? (
                                <button
                                    onClick={() => setOpenModal(true)}
                                    className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:scale-105 transition"
                                >
                                    Book Now
                                </button>
                            ) : (
                               <Link state={location.pathname} to='/login'
                                    className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:scale-105 transition"
                                >
                                    Book Now
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* DETAILS GRID */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">

                        <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Service Description</h2>
                            <p className="text-amber-700 leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-lg space-y-4">
                            <h3 className="text-xl font-bold">Service Info</h3>

                            <div>
                                <p className="font-semibold">Duration</p>
                                <p className="text-gray-600">{duration}</p>
                            </div>

                            <div>
                                <p className="font-semibold">Service Mode</p>
                                <div className="flex gap-2 mt-1">
                                    {serviceMode?.map(mode =>
                                        <span
                                            key={mode}
                                            className="px-3 py-1 text-md rounded-full bg-sky-500/10 font-semibold text-secondary"
                                        >
                                            {mode}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GALLERY */}
                    {gallery?.length > 0 && (
                        <div className="mb-20">
                            <h2 className="text-3xl font-extrabold text-center mb-10">
                                Decoration Gallery
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {gallery.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt="Gallery"
                                        className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-500 h-64 w-full object-cover"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Booking Modal */}
                {openModal && (
                    <BookingModal
                        openModal={openModal}
                        service={service}
                        closeModal={closeModal}
                    />
                )}
            </section>
        </div>
    );
};

export default ServiceDetails;
