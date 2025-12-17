import { useQuery } from '@tanstack/react-query'
import useAuth from '../../hooks/useAuth'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import LoadingSpinner from '../../components/shared/LoadingSpinner'
import BookingTable from '../../components/Table/BookingTable'

const MyBookings = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const result = await axiosSecure(`/my-bookings`)
            return result.data
        },
    })
    // console.log(bookings)

    if (isLoading) return <LoadingSpinner />
    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-primary  text-left text-sm uppercase font-semibold'
                                        >
                                            Image
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-primary  text-left text-sm uppercase font-semibold'
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-primary  text-left text-sm uppercase font-semibold'
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-primary  text-left text-sm uppercase font-semibold'
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-primary  text-left text-sm uppercase font-semibold'
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-primary  text-left text-sm uppercase font-semibold'
                                        >
                                            Status
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-primary  text-left text-sm uppercase font-semibold'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map(booking => (
                                        <BookingTable key={booking._id} booking={booking} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBookings