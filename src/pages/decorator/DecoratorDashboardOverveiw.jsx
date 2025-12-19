import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import useAuth from '../../hooks/useAuth'
import { MdEvent, MdDoneAll, MdPendingActions } from 'react-icons/md'
import { TbCurrencyTaka } from 'react-icons/tb'

const DecoratorDashboardOverveiw = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const { data: stats = {} } = useQuery({
    queryKey: ['decorator-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/decorator/stats')
      return res.data
    },
  })

  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome, <span className="text-primary">{user?.displayName}</span>
        </h1>
        <p className="text-gray-600 mt-1">
          Here’s an overview of your assigned projects and earnings
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Assigned */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <MdEvent className="text-4xl text-blue-500" />
          <div>
            <p className="text-gray-500 text-sm">Assigned Projects</p>
            <h3 className="text-2xl font-bold">
              {stats.assigned || 0}
            </h3>
          </div>
        </div>

        {/* Ongoing */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <MdPendingActions className="text-4xl text-amber-500" />
          <div>
            <p className="text-gray-500 text-sm">Ongoing</p>
            <h3 className="text-2xl font-bold">
              {stats.ongoing || 0}
            </h3>
          </div>
        </div>

        {/* Completed */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <MdDoneAll className="text-4xl text-green-600" />
          <div>
            <p className="text-gray-500 text-sm">Completed</p>
            <h3 className="text-2xl font-bold">
              {stats.completed || 0}
            </h3>
          </div>
        </div>

        {/* Earnings */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <TbCurrencyTaka className="text-4xl text-emerald-600" />
          <div>
            <p className="text-gray-500 text-sm">Total Earnings</p>
            <h3 className="text-2xl font-bold flex items-center">
              {stats.earnings || 0}
            </h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DecoratorDashboardOverveiw
