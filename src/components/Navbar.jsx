import { NavLink, Link } from "react-router";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { MdAccountCircle, MdDashboard, MdLogin, MdPersonAddAlt } from "react-icons/md";
import { FiLogOut, FiChevronDown, FiPhoneCall } from "react-icons/fi";
import useAuth from "../hooks/useAuth";
import { GiFlowerPot } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";


const Navbar = () => {
  const { user, logOut } = useAuth();

  const navLinkClass = ({ isActive }) =>
    `relative flex items-center gap-1.5  px-2 py-1.5 rounded-md transition-all duration-300 group ${
      isActive ? " bg-primary  text-white font-semibold" : "text-black hover:text-primary"
    }`;

  return (
    <div className="sticky top-0 z-50 w-full bg-blue-50 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8 h-20" >
        
        {/*logo and mobile links*/}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-primary/10 transition-colors">
              <FaBars className="text-xl text-gray-700" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 p-4 shadow-2xl bg-white rounded-2xl w-64 border border-gray-100 animate-in fade-in slide-in-from-top-2"
            >
              <li className="menu-title text-gray-700 uppercase  tracking-widest">Navigation</li>
              <li ><NavLink className='font-semibold text-[14px] ' to="/"><IoHomeOutline /> Home</NavLink></li>
              <li><NavLink className='font-semibold text-[14px] ' to="/services"><GiFlowerPot /> Services</NavLink></li>
              <li><NavLink className='font-semibold text-[14px] ' to="/about"><AiOutlineInfoCircle /> About</NavLink></li>
              <li><NavLink className='font-semibold text-[14px] ' to="/contact"><FiPhoneCall /> Contact</NavLink></li>
              {user && (
                <>
                  <div className="divider my-1"></div>
                  <li><NavLink className='font-semibold text-[14px] ' to="/dashboard"><MdDashboard /> Dashboard</NavLink></li>
                </>
              )}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl rotate-3 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-white font-black text-2xl italic">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] hover:bg-right transition-all duration-500 bg-clip-text text-transparent italic">
                Style
              </span>
              <span className="text-3xl font-black italic text-gray-800">Decor</span>
            </div>
          </Link>
        </div>

        {/* desktop links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3 font-semibold  text-[15px]">
            <li>
              <NavLink to="/" className={navLinkClass}>
              <IoHomeOutline size={18} />
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClass}>
              <GiFlowerPot size={18} />

                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
              <AiOutlineInfoCircle size={18} />
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}><FiPhoneCall size={18} />
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
            {user &&<li>
              <NavLink to="/dashboard" className={navLinkClass}><MdDashboard size={18} />
                Dashboard
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>}
          </ul>
        </div>

        {/* login/signup */}
        <div className="navbar-end gap-3">
          {!user ? (
            <div className=" flex items-center gap-3">
             
              
              <Link
                to="/signup"
                className="btn btn-secondary  btn-sm md:btn-md rounded-full px-3 shadow-lg shadow-primary/25 border-none hover:scale-105 active:scale-95 transition-all"
              ><MdLogin size={18} />
              
               Sign In
              </Link>
              <Link
                to="/signup"
                className="btn btn-primary btn-sm md:btn-md rounded-full px-3 shadow-lg shadow-primary/25 border-none hover:scale-105 active:scale-95 transition-all"
              > <MdPersonAddAlt  size={18} />
               Sign Up
              </Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="flex items-center gap-2 cursor-pointer p-1.5 pr-3 hover:bg-gray-100 rounded-full transition-all border border-transparent hover:border-gray-200">
                <div className="relative">
                  {user.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt="profile"
                      className="w-9 h-9 rounded-full object-cover border-2 border-primary ring-2 ring-primary/10"
                    />
                  ) : (
                    <FaUserCircle className="text-3xl text-gray-400" />
                  )}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <FiChevronDown className="text-gray-500 hidden sm:block" />
              </label>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-4 p-3 shadow-2xl bg-white rounded-2xl w-56 border border-gray-100 animate-in fade-in zoom-in-95"
              >
                <div className="px-4 py-3 border-b border-gray-50 mb-2">
                  <p className="text-[14px] flex items-center gap-2 text-gray-800 border-b-2 border-dotted pb-2 font-semibold uppercase tracking-wider"><MdAccountCircle className="text-secondary" size={22} />
 Account</p>
                  <p className="text-sm font-bold text-gray-800 mt-2 truncate ">{user?.displayName || "User"}</p>
                </div>

                <li>
                  <Link to="/dashboard" className="flex items-center gap-3  hover:bg-primary/5 active:bg-primary/10">
                    <MdDashboard className="text-xl text-primary" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                </li>

                <li>
                  <button
                    onClick={logOut}
                    className="flex items-center gap-3 py-2.5 mt-1 text-red-500 hover:bg-red-50 active:bg-red-100 transition-colors"
                  >
                    <FiLogOut className="text-xl" />
                    <span className="font-medium">Logout</span>
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