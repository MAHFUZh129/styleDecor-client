import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'
import ServiceModal from '../../components/modal/ServiceModal'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { TbCurrencyTaka } from 'react-icons/tb'

const ManageServices = () => {
  const axiosSecure = useAxiosSecure()
  const [open, setOpen] = useState(false)
  const [editService, setEditService] = useState(null)

  const { data: services = [], refetch } = useQuery({
    queryKey: ['admin-services'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/services')
      return res.data
    }
  })

  
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Delete service?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete'
    })

    if (result.isConfirmed) {
      await axiosSecure.delete(`/admin/services/${id}`)
      refetch()
      Swal.fire('Deleted!', '', 'success')
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Services</h2>

        <button
          onClick={() => {
            setEditService(null)
            setOpen(true)
          }}
          className="btn btn-sm btn-primary"
        >
          <FaPlus /> Add New Service
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service, index) => (
              <tr key={service._id}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={service.image}
                    className="w-12 h-12 rounded"
                  />
                </td>

                <td>{service.name}</td>
                <td>{service.category}</td>
                <td ><TbCurrencyTaka /> {service.price}</td>

                <td className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditService(service)
                      setOpen(true)
                    }}
                    className="btn btn-xs btn-info"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-xs btn-error"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <ServiceModal
          close={() => setOpen(false)}
          service={editService}
          refetch={refetch}
        />
      )}
    </div>
  )
}

export default ManageServices
