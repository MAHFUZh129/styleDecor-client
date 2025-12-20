import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { FaPlus, FaUserCheck, FaUserSlash } from 'react-icons/fa'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'

const ManageDecorators = () => {
  const axiosSecure = useAxiosSecure()
  const [openModal, setOpenModal] = useState(false)
  const [loading, setLoading] = useState(false)

  // 🔹 Get all decorators
  const { data: decorators = [], refetch } = useQuery({
    queryKey: ['decorators'],
    queryFn: async () => {
      const res = await axiosSecure.get('/decorators-all')
      return res.data
    },
  })

  // 🔹 Enable / Disable decorator
  const handleStatusChange = async (id, status) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `You want to ${status === 'disabled' ? 'disable' : 'enable'} this decorator`,
      confirmButtonText:
        status === 'disabled' ? 'Yes, Disable' : 'Yes, Enable',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#d33',
    })

    if (result.isConfirmed) {
      await axiosSecure.patch(`/admin/decorators/status/${id}`, { status })
      refetch()

      Swal.fire({
        title: 'Success!',
        text: `Decorator is now ${status}`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      })
    }
  }

  
  const handleAddDecorator = async (e) => {
    e.preventDefault()
    setLoading(true)

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const image = form.image.value
    const specialties = form.specialties.value
      .split(',')
      .map((s) => s.trim())

    const decoratorData = {
      name,
      email,
      image,
      specialties,
      status: 'available',
    }

    try {
      await axiosSecure.post('/admin/decorators', decoratorData)

      Swal.fire({
        title: 'Decorator Added!',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      })

      refetch()
      setOpenModal(false)
      form.reset()
    } catch (error) {
      Swal.fire('Error', 'Decorator already exists', 'error')
    }

    setLoading(false)
  }

  return (
    <div className="w-full">
      {/*  Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Manage Decorators ({decorators.length})
        </h2>

        <button
          onClick={() => setOpenModal(true)}
          className="btn btn-sm btn-success"
        >
         <FaPlus /> Add Decorator
        </button>
      </div>

      {/*  Table */}
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

                <td className="text-xs break-all">{decorator.email}</td>

                <td>{decorator.specialties?.join(', ')}</td>

                <td>
                  <span
                    className={`badge badge-outline ${
                      decorator.status === 'available'
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

      {/*  Add Decorator */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Add New Decorator</h3>

            <form onSubmit={handleAddDecorator} className="space-y-3">
              <input
                name="name"
                placeholder="Decorator Name"
                required
                className="input input-bordered w-full"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="input input-bordered w-full"
              />

              <input
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />

              <input
                name="specialties"
                placeholder="Specialties (comma separated)"
                className="input input-bordered w-full"
              />

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="btn btn-sm"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-sm btn-success"
                >
                  {loading ? 'Adding...' : 'Add Decorator'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageDecorators
