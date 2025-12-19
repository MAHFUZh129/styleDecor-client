import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import useAuth from '../../hooks/useAuth'
import { TbCurrencyTaka } from 'react-icons/tb'

const MyAssignedProjects = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const { data: projects = [], refetch } = useQuery({
    queryKey: ['decorator-projects', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/decorator/projects?email=${user.email}`
      )
      return res.data
    },
  })

  const handleStatusUpdate = async (id, status) => {
    await axiosSecure.patch(`/decorator/projects/status/${id}`, { status })
    refetch()
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        My Assigned Projects ({projects.length})
      </h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table table-zebra w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>Serial No.</th>
              <th>Service</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project, i) => (
              <tr key={project._id}>
                <td>{i + 1}</td>

                <td>{project.name}</td>

                <td>{project.category}</td>

                <td className="flex items-center gap-1">
                  <TbCurrencyTaka />
                  {project.price}
                </td>

                <td>
                  <span
                    className={`badge font-semibold ${
                      project.status === 'assigned'
                        ? 'badge-warning'
                        : project.status === 'ongoing'
                        ? 'badge-info'
                        : 'badge-success'
                    }`}
                  >
                    {project.status}
                  </span>
                </td>

                <td>
                  {project.status === 'assigned' && (
                    <button
                      onClick={() =>
                        handleStatusUpdate(project._id, 'ongoing')
                      }
                      className="btn btn-xs btn-info"
                    >
                      Start Work
                    </button>
                  )}

                  {project.status === 'ongoing' && (
                    <button
                      onClick={() =>
                        handleStatusUpdate(project._id, 'completed')
                      }
                      className="btn btn-xs btn-success"
                    >
                      Mark Complete
                    </button>
                  )}

                  {project.status === 'completed' && (
                    <span className="text-gray-400 text-sm">Done</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {projects.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            No projects assigned yet.
          </p>
        )}
      </div>
    </div>
  )
}

export default MyAssignedProjects
