import { useQuery } from '@tanstack/react-query'
import { FaUserCheck, FaUserSlash } from 'react-icons/fa'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'

const ManageDecorators = () => {
    const axiosSecure = useAxiosSecure()

    const { data: decorators = [], refetch } = useQuery({
        queryKey: ['decorators'],
        queryFn: async () => {
            const res = await axiosSecure.get('/decorators-all')
            return res.data
        }
    })

    const handleStatusChange = async (id, status) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You want to enable this decorator',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#16a34a',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Enable'
        })
        if (result.isConfirmed) {
            await axiosSecure.patch(`/admin/decorators/status/${id}`, {
                status
            })

            refetch()

            Swal.fire({
                title: 'Enabled!',
                text: 'Decorator is now available',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            })
        }
    }

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">
                Manage Decorators ({decorators.length})
            </h2>

            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="table table-zebra w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th>Serial No.</th>
                            <th>Decorator</th>
                            <th>Email</th>
                            <th>Specialties</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {decorators.map((decorator, index) => (
                            <tr key={decorator._id}>
                                <td>{index + 1}</td>

                                <td className="flex items-center gap-2">
                                    <img
                                        src={decorator.image}
                                        alt=""
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="font-medium">{decorator.name}</span>
                                </td>

                                <td className="text-xs break-all">
                                    {decorator.email}
                                </td>

                                <td className='text-black'>
                                    {decorator.specialties?.join(', ')}
                                </td>

                                <td>
                                    <span
                                        className={`badge badge-outline ${decorator.status === 'available'
                                                ? 'badge-success'
                                                : decorator.status === 'assigned'
                                                    ? 'badge-warning'
                                                    : 'badge-error'
                                            }`}
                                    >
                                        {decorator.status}
                                    </span>
                                </td>

                                <td className="flex gap-2">
                                    {decorator.status !== 'disabled' ? (
                                        <button
                                            onClick={() =>
                                                handleStatusChange(decorator._id, 'disabled')
                                            }
                                            className="btn btn-xs btn-error"
                                        >
                                            <FaUserSlash />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleStatusChange(decorator._id, 'available')
                                            }
                                            className="btn btn-xs btn-success"
                                        >
                                            <FaUserCheck />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageDecorators
