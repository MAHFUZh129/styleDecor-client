import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const ServiceModal = ({ close, service, refetch }) => {
  const axiosSecure = useAxiosSecure()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    const data = {
      name: form.name.value,
      image: form.image.value,
      category: form.category.value,
      price: parseInt(form.price.value),
    }

    if (service) {
      await axiosSecure.patch(`/admin/services/${service._id}`, data)
      Swal.fire('Updated!', '', 'success')
    } else {
      await axiosSecure.post('/admin/services', data)
      Swal.fire('Added!', '', 'success')
    }

    refetch()
    close()
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">
          {service ? 'Edit Service' : 'Add Service'}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            defaultValue={service?.name}
            placeholder="Service Name"
            className="input input-bordered w-full"
            required
          />

          <input
            name="image"
            defaultValue={service?.image}
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />

          <input
            name="category"
            defaultValue={service?.category}
            placeholder="Category"
            className="input input-bordered w-full"
            required
          />

          <input
            name="price"
            type="number"
            defaultValue={service?.price}
            placeholder="Price"
            className="input input-bordered w-full"
            required
          />

          <div className="flex justify-end gap-2">
            <button type="button" onClick={close} className="btn btn-sm">
              Cancel
            </button>
            <button className="btn btn-sm btn-primary">
              {service ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ServiceModal
