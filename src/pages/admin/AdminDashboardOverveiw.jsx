import React from 'react';
import { MdEvent, MdDesignServices, MdPeople, MdTipsAndUpdates } from 'react-icons/md'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { TbCurrencyTaka } from 'react-icons/tb';


const AdminDashboardOverveiw = () => {
   const axiosSecure = useAxiosSecure()

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/stats')
      return res.data
    },
  })

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
        
        {/* Total Bookings */}
        <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <MdEvent className="text-4xl text-primary" />
          <div>
            <p className="text-gray-500 text-sm">Total Bookings</p>
            <h3 className="text-2xl font-bold">
              {stats.totalBookings || 0}
            </h3>
          </div>
        </div>

        {/* Total Services */}
        <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <MdDesignServices className="text-4xl text-secondary" />
          <div>
            <p className="text-gray-500 text-sm">Total Services</p>
            <h3 className="text-2xl font-bold">
              {stats.totalServices || 0}
            </h3>
          </div>
        </div>

        {/* Total Decorators */}
        <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <MdPeople className="text-4xl text-emerald-500" />
          <div>
            <p className="text-gray-500 text-sm">Decorators</p>
            <h3 className="text-2xl font-bold">
              {stats.totalDecorators || 0}
            </h3>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <TbCurrencyTaka className="text-4xl text-yellow-500" />
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h3 className="text-2xl flex items-center font-bold">
             <TbCurrencyTaka/> {stats.totalRevenue || 0}
            </h3>
          </div>
        </div>

      </div>

      {/* Quick Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="flex items-center text-blue-700 text-sm">
         <MdTipsAndUpdates className="text-xl mr-2 text-amber-600"/>  Tip: Assign decorators only after payment is confirmed to ensure smooth service delivery.
        </p>
      </div>
    </div>
  )
};

export default AdminDashboardOverveiw;