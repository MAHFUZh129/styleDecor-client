import { Link, NavLink, Outlet } from "react-router";
import { MdDashboard, MdEvent, MdLogout, MdOutlinePayment } from "react-icons/md";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { user, logOut } = useAuth();
  const [role] = useRole()
  console.log(role)

  const isActive = ({ isActive }) =>
  `flex items-center gap-3 rounded-md 
   ${isActive ? "bg-secondary/90 text-white" : "hover:bg-primary/10"}`


  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold text-primary">StyleDecor</h2>
          <p className="text-sm text-gray-500">Dashboard</p>
          <Link className="flex text-lg text-amber-700 font-bold mt-2 pl-2 hover:bg-primary/10 items-center gap-2" to='/'>
          <FaHome />
          Home
          </Link>
          
        </div>

        <nav className="p-2 space-y-1">
          {
            role==='user' &&<>
            <NavLink to="my-bookings"
           className={isActive}
           >
            <div  className='flex font-semibold items-center gap-3 p-3 rounded-lg'>
              <MdEvent />
              My Bookings
            </div>
          </NavLink>
          <NavLink to="payment-history"
           className={isActive}
           >
            <div  className='flex font-semibold items-center gap-3 p-3 rounded-lg' >
              <MdOutlinePayment />
              Payment History
            </div>
          </NavLink>
            </>

          }
          
          
          <NavLink to="profile"
           className={isActive}
           >
            <div  className='flex font-semibold items-center gap-3 p-3 rounded-lg' >
              <CgProfile />
              My Profile
            </div>
          </NavLink>

          <button
            onClick={logOut}
            className="w-full text-left"
          >
            <div className="flex font-semibold items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-100">
              <MdLogout />
              Logout
            </div>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Topbar */}
        <div className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>

          <div className="flex items-center gap-2">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <FaUserCircle className="text-2xl text-primary" />
            )}
            <span className="text-sm font-medium">
              {user?.displayName || "User"}
            </span>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
