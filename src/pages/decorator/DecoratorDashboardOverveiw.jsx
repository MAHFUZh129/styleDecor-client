import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import useAuth from '../../hooks/useAuth'
import {
  MdEvent,
  MdDoneAll,
  MdPendingActions,
  MdTipsAndUpdates,
} from 'react-icons/md'
import { TbCurrencyTaka } from 'react-icons/tb'

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const DecoratorDashboardOverveiw = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ['decorator-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/decorator/stats')
      return res.data
    },
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading dashboard...</p>
  }

  // Chart Data
  const workStatusData = [
    { name: 'Assigned', value: stats.assigned || 0 },
    { name: 'Ongoing', value: stats.ongoing || 0 },
    { name: 'Completed', value: stats.completedBookings || 0 },
  ]

  const earningsData = [
    { name: 'Total Earnings', amount: stats.earnings || 0 },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold">
          Welcome, <span className="text-primary">{user?.displayName}</span>
        </h1>
        <p className="text-gray-600 mt-1">
          Here’s an overview of your assigned projects and earnings
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <MdEvent className="text-4xl text-blue-500" />
          <div>
            <p className="text-gray-500 text-sm">Assigned Projects</p>
            <h3 className="text-2xl font-bold">
              {stats.assigned || 0}
            </h3>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <MdPendingActions className="text-4xl text-amber-500" />
          <div>
            <p className="text-gray-500 text-sm">Ongoing</p>
            <h3 className="text-2xl font-bold">
              {stats.ongoing || 0}
            </h3>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <MdDoneAll className="text-4xl text-green-600" />
          <div>
            <p className="text-gray-500 text-sm">Completed</p>
            <h3 className="text-2xl font-bold">
              {stats.completedBookings || 0}
            </h3>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <TbCurrencyTaka className="text-4xl text-emerald-600" />
          <div>
            <p className="text-gray-500 text-sm">Total Earnings</p>
            <h3 className="text-2xl font-bold flex items-center">
              <TbCurrencyTaka />
              {stats.earnings || 0}
            </h3>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Work Status Overview
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={workStatusData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Earnings Summary
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={earningsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Project Distribution
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={workStatusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
            >
              {workStatusData.map((_, index) => (
                <Cell
                  key={index}
                  fill={['#3b82f6', '#f59e0b', '#22c55e'][index]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Tip */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <p className="flex items-center text-indigo-700 text-sm">
          <MdTipsAndUpdates className="text-xl mr-2 text-indigo-600" />
          Tip: Keep project status updated regularly to receive timely payments.
        </p>
      </div>
    </div>
  )
}

export default DecoratorDashboardOverveiw
