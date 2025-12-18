import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'

const AssignDecoratorModal = ({ booking, closeModal, refetch }) => {
    const axiosSecure = useAxiosSecure()

    const { data: decorators = [] } = useQuery({
        queryKey: ['decorators'],
        queryFn: async () => {
            const res = await axiosSecure.get('/decorators')
            return res.data
        },
    })

    const handleAssign = async (decorator) => {
        await axiosSecure.patch(`/admin/assign-decorator/${booking._id}`, {
            decoratorId: decorator._id,
            decoratorName: decorator.name,
            decoratorEmail: decorator.email,
        })

        refetch()
        closeModal()
        Swal.fire({
            title: 'Assigned',
            text: `${decorator?.name} is assigned for decoration`,
            icon: 'success',
            timer: 2500,
            showConfirmButton: false
        })
    }

    return (
        <div className="fixed inset-0  bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-3xl p-6">
                <h3 className="text-xl font-bold mb-4">
                    Assign Decorator
                </h3>

                <div className="overflow-x-auto">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>

                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {decorators.map(decorator => (
                                <tr key={decorator._id}>
                                    <td>
                                        <img
                                            src={decorator.image}
                                            alt=""
                                            className="w-10 h-10 rounded-full"
                                        />
                                    </td>
                                    <td>{decorator.name}</td>
                                    <td className="text-sm">{decorator.email}</td>

                                    <td>
                                        <button

                                            onClick={() => handleAssign(decorator)}
                                            className="btn btn-xs btn-primary"
                                        >
                                            Assign
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-right mt-4">
                    <button
                        onClick={closeModal}
                        className="btn btn-sm btn-outline"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AssignDecoratorModal
