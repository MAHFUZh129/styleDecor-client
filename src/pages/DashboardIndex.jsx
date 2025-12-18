import LoadingSpinner from "../components/shared/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";


const DashboardIndex = () => {
  const { user } = useAuth();
  const  [role, isLoading]  = useRole();

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-lg text-center space-y-6">

        {/* Welcome */}
        <div>
          <h1 className="text-3xl font-bold text-primary">
            Welcome to StyleDecor Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Hello, <span className="font-semibold">{user?.displayName || "User"}</span>
          </p>
        </div>

       
        <hr />

        {/* Role  */}
        {role === "user" && (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">User Panel</h2>
            <p className="text-gray-600">
              From here you can manage your bookings, check payment history
              and update your profile information.
            </p>
          </div>
        )}

        {role === "decorator" && (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Decorator Panel</h2>
            <p className="text-gray-600">
              View your assigned decoration jobs, upcoming events and
              keep track of your work status.
            </p>
          </div>
        )}

        {role === "admin" && (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Admin Panel</h2>
            <p className="text-gray-600">
              Manage services, users, decorators and monitor all payments
              and bookings from one place.
            </p>
          </div>
        )}

        {/* footer */}
        <p className="text-sm text-gray-400">
          Use the sidebar to navigate through dashboard options.
        </p>
      </div>
    </div>
  );
};

export default DashboardIndex;
