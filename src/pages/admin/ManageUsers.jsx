import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { FaUserShield, FaBan, FaTrash } from 'react-icons/fa'
import Swal from 'sweetalert2'

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure()

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/users')
      return res.data
    },
  })

  // change role
  const handleRole = async (id, role) => {
    const confirm = await Swal.fire({
      title: `Make ${role}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    })

    if (!confirm.isConfirmed) return

    await axiosSecure.patch(`/admin/users/role/${id}`, { role })
    refetch()
  }

  // block user
  const handleBlock = async (id, status) => {
    await axiosSecure.patch(`/admin/users/status/${id}`, { status })
    refetch()
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Manage Users ({users.length})
      </h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <span className="badge badge-outline capitalize">
                    {user.role}
                  </span>
                </td>

                <td>
                  <span
                    className={`badge ${
                      user.status === 'active'
                        ? 'badge-success'
                        : 'badge-error'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="flex gap-2">
                  <button
                    onClick={() => handleRole(user._id, 'admin')}
                    className="btn btn-xs btn-info"
                  >
                    <FaUserShield />
                  </button>

                  <button
                    onClick={() =>
                      handleBlock(
                        user._id,
                        user.status === 'active' ? 'blocked' : 'active'
                      )
                    }
                    className="btn btn-xs btn-warning"
                  >
                    <FaBan />
                  </button>

                  <button className="btn btn-xs btn-error">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageUsers
