import React from 'react'
import {
  MdEvent,
  MdDesignServices,
  MdPeople,
  MdTipsAndUpdates,
} from 'react-icons/md'
import { TbCurrencyTaka } from 'react-icons/tb'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

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

const AdminDashboardOverveiw = () => {
  const axiosSecure = useAxiosSecure()

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/stats')
      return res.data
    },
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading dashboard...</p>
  }

  // Chart friendly data
  const overviewData = [
    { name: 'Bookings', value: stats.totalBookings || 0 },
    { name: 'Services', value: stats.totalServices || 0 },
    { name: 'Decorators', value: stats.totalDecorators || 0 },
  ]

  const revenueData = [
    { name: 'Total Revenue', amount: stats.totalRevenue || 0 },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-primary">
          Welcome, Admin
        </h2>
        <p className="text-gray-600 mt-1">
          Here’s a quick overview of StyleDecor activities
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <MdEvent className="text-4xl text-primary" />
          <div>
            <p className="text-gray-500 text-sm">Total Bookings</p>
            <h3 className="text-2xl font-bold">
              {stats.totalBookings || 0}
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <MdDesignServices className="text-4xl text-secondary" />
          <div>
            <p className="text-gray-500 text-sm">Total Services</p>
            <h3 className="text-2xl font-bold">
              {stats.totalServices || 0}
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <MdPeople className="text-4xl text-emerald-500" />
          <div>
            <p className="text-gray-500 text-sm">Decorators</p>
            <h3 className="text-2xl font-bold">
              {stats.totalDecorators || 0}
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <TbCurrencyTaka className="text-4xl text-yellow-500" />
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h3 className="text-2xl flex items-center font-bold">
              <TbCurrencyTaka />
              {stats.totalRevenue || 0}
            </h3>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* bar chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Platform Overview
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={overviewData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#ec4899" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* line chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Revenue Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
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
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Resource Distribution
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={overviewData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {overviewData.map((_, index) => (
                <Cell
                  key={index}
                  fill={['#ec4899', '#6366f1', '#22c55e'][index]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Tip */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="flex items-center text-blue-700 text-sm">
          <MdTipsAndUpdates className="text-xl mr-2 text-amber-600" />
          Tip: Assign decorators only after payment is confirmed to ensure smooth service delivery.
        </p>
      </div>
    </div>
  )
}

export default AdminDashboardOverveiw
