import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { FaBan, FaTrash } from 'react-icons/fa'
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

  // change role from dropdown
  const handleRoleChange = async (id, newRole) => {
    const confirm = await Swal.fire({
      title: `Change role to "${newRole}"?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    })

    if (!confirm.isConfirmed) return

    await axiosSecure.patch(`/admin/users/role/${id}`, {
      role: newRole,
    })

    refetch()
    Swal.fire('Updated!', 'User role updated', 'success')
  }

  // block / unblock
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
              <th>#</th>
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
                <td className="break-all">{user.email}</td>

                {/* 🔽 ROLE DROPDOWN */}
                <td>
                  <select
                    className="select select-bordered select-sm"
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChange(user._id, e.target.value)
                    }
                  >
                    <option value="user">User</option>
                    <option value="decorator">Decorator</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>

                {/* STATUS */}
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

                {/* ACTIONS */}
                <td className="flex gap-2">
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
