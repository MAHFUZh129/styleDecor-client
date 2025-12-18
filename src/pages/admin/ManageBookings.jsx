import { useQuery } from '@tanstack/react-query'
import { TbCurrencyTaka } from 'react-icons/tb'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useState } from 'react'
import AssignDecoratorModal from '../../components/modal/AssignDecoratorModal'

const ManageBookings = () => {
    const axiosSecure = useAxiosSecure()
    const [selectedBooking, setSelectedBooking] = useState(null)

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['admin-bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/bookings')
            return res.data
        },
    })

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">
                Manage Bookings ({bookings.length})
            </h2>

            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="table table-zebra w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th>Serial No.</th>
                            <th>User</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Decorator</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={booking._id}>
                                <td>{index + 1}</td>

                                <td className="break-all">
                                    {booking.customer}
                                </td>

                                <td>{booking.name}</td>

                                <td className="flex items-center gap-1">
                                    <TbCurrencyTaka />
                                    {booking.price}
                                </td>

                                <td>
                                    <span
                                        className={`badge ${booking.transactionId
                                            ? 'badge-success'
                                            :'badge-error' 
                                            }`}
                                    >
                                        {booking.transactionId ? 'Paid' : 'Unpaid'}
                                    </span>
                                </td>

                                <td>
                                    <span className="text-md badge badge-outline font-semibold ">
                                        {booking.status || 'pending'}
                                    </span>
                                </td>

                                <td>
                                    {booking.decoratorName || (
                                        <span className="text-gray-400">Not Assigned</span>
                                    )}
                                </td>

                                <td>
                                    {
                                        booking.status === 'pending' ?(
                                            <button
                                                className="btn btn-xs btn-primary"
                                                
                                                onClick={() => setSelectedBooking(booking)}
                                            >
                                             Assign
                                            </button>
                                        ):'---'


                                    }

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             {/* Modal */}
            {selectedBooking && (
                <AssignDecoratorModal
                    booking={selectedBooking}
                    closeModal={() => setSelectedBooking(null)}
                    refetch={refetch}
                />
            )}
        </div>
    )
}

export default ManageBookings
