import { NavLink, Link } from "react-router";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-gray-700 hover:text-primary transition";

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">

        {/* mobile screen */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              <FaBars className="text-xl" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-white rounded-lg w-52 text-sm"
            >
              <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
              <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
              <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
              <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>

              {user && (
                <li>
                  <NavLink to="/dashboard" className="flex items-center gap-2">
                    <MdDashboard />
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Style
            </span>
            <span className="text-gray-900">Decor</span>
          </Link>
        </div>


        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 font-medium text-base">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>

            {user && (
              <li>
                <NavLink to="/dashboard" className={navLinkClass}>
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* login */}
        <div className="navbar-end gap-2">
          {!user ? (
            <>
            <Link
              to="/login"
              className="btn btn-primary btn-sm sm:btn-md rounded-full"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-secondary  btn-sm sm:btn-md rounded-full"
            >
              Sign Up
            </Link>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                {user.photoURL ? (
                  <img
                    src={user?.photoURL}
                    alt="profile"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-primary"
                  />
                ) : (
                  <FaUserCircle className="text-2xl sm:text-3xl text-primary" />
                )}
              </label>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 p-3 shadow-lg bg-white rounded-lg w-48 text-sm"
              >
                <li className="font-semibold text-center">
                  {user?.displayName || "User"}
                </li>

                <li>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <MdDashboard className="text-primary" />
                    Dashboard
                  </Link>
                </li>

                <li>
                  <button
                    onClick={logOut}
                    className="flex items-center gap-2 text-red-500"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
