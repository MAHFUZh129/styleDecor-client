import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { TbCurrencyTaka } from 'react-icons/tb';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ['payments', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    }
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">

      {/* Header */}
      <div className="mb-6 p-5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white">
        <h2 className="text-xl md:text-2xl font-bold">
          Payment History
        </h2>
        <p className="text-sm opacity-90 mt-1">
          Total Payments: {payments.length}
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full min-w-[700px]">
          <thead className="bg-gray-100 uppercase text-md md:text-primary">
            <tr>
              <th>Serial No.</th>
              <th>Service / Package</th>
              <th>Amount</th>
              <th>Paid Time</th>
              <th>Transaction Id</th>
            </tr>
          </thead>

          <tbody className="text-sm md:text-base">
            {payments.map((payment, index) => (
              <tr key={payment._id} className="hover">
                <td className="font-medium">{index + 1}</td>

                <td className="font-semibold">
                  {payment.name}
                </td>

                <td className="flex items-center gap-1 font-bold text-gray-600">
                  <TbCurrencyTaka />
                  {payment.price}
                </td>

                <td className="text-gray-600">
                  {payment.paidAt}
                </td>

                <td className="text-md break-all text-gray-700 max-w-[220px]">
                  {payment.transactionId}
                </td>
              </tr>
            ))}

            {payments.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-lg italic py-10 text-gray-600">
                  No payment history found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default PaymentHistory;
