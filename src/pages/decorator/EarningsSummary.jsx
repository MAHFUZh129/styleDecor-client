import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import useAuth from '../../hooks/useAuth'
import { TbCurrencyTaka } from 'react-icons/tb'
import LoadingSpinner from '../../components/shared/LoadingSpinner'

const EarningsSummary = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const { data, isLoading } = useQuery({
    queryKey: ['decorator-earnings', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get('/decorator/earnings')
      return res.data
    },
  })

  if (isLoading) return <LoadingSpinner />

  const { totalDecoratorEarn, totalCompleted, earnings } = data
// console.log(earnings)
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Earnings Summary</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Total Earnings (70%)</p>
          <h3 className="text-2xl font-bold flex items-center gap-1 text-green-600">
            <TbCurrencyTaka />
            {totalDecoratorEarn.toFixed(2)}
          </h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Completed Jobs</p>
          <h3 className="text-2xl font-bold">
            {totalCompleted}
          </h3>
        </div>
      </div>

      {/*  Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table table-zebra w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th>Serial No.</th>
              <th>Service</th>
              <th>Total Price</th>
              <th>Your Earnings (70%)</th>
            </tr>
          </thead>

          <tbody>
            {earnings.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.serviceName}</td>

                <td className="flex items-center gap-1">
                  <TbCurrencyTaka />
                  {item.price}
                </td>

                <td className="text-green-600 font-semibold  gap-1">
                  {/* <TbCurrencyTaka /> */}
                  {item.decoratorEarn.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {earnings.length === 0 && (
          <p className="text-center py-6 text-gray-500">
            No completed projects yet.
          </p>
        )}
      </div>
    </div>
  )
}

export default EarningsSummary
