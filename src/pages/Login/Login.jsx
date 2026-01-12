import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import useAuth from '../../hooks/useAuth'
import { FcGoogle } from 'react-icons/fc'
import { TbFidgetSpinner } from 'react-icons/tb'
import LoadingSpinner from '../../components/shared/LoadingSpinner'
import { saveOrUpdateUser } from '../../../utils'
import { FaCheckCircle } from 'react-icons/fa'

const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from =  location.state || '/'

  if (loading) return <LoadingSpinner />
  if (user) return <Navigate to={from} replace={true} />
  

  // form submit handler
  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    try {
      //User Login
     const {user} =await signIn(email, password)
       await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      })


      navigate(from, { replace: true })
      toast.success('Login Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
    const {user} = await signInWithGoogle()

       await saveOrUpdateUser({
              name: user?.displayName,
              email: user?.email,
              image: user?.photoURL,
            })
      

      navigate(from, { replace: true })
      toast.success('Login Successful')
    } catch (err) {
      console.log(err)
      setLoading(false)
      toast.error(err?.message)
    }
  }
  return (
  <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-200">

    {/* left side */}
    <div className="hidden lg:flex flex-col justify-center px-16 text-gray-800 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529634897479-77f8b7c1acc1')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Design Your <br />
          <span className="text-primary">Dream Events</span>
        </h1>

        <p className="text-lg text-gray-700 max-w-md mb-8">
          From luxury weddings to elegant celebrations, Style Decor turns your
          moments into unforgettable experiences.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className='flex gap-2 items-center'> <FaCheckCircle className="text-primary" /> Premium Wedding Decoration</li>
          <li className='flex gap-2 items-center'> <FaCheckCircle className="text-primary" /> Birthday & Engagement Setup</li>
          <li className='flex gap-2 items-center'> <FaCheckCircle className="text-primary" /> Corporate & Cultural Events</li>
          <li className='flex gap-2 items-center'> <FaCheckCircle className="text-primary" /> Custom Floral & Stage Design</li>
        </ul>
      </div>
    </div>

    {/* right-login */}
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8">

        {/* header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-secondary mb-2">
            Welcome Back 
          </h2>
          <p className="text-gray-500 text-sm">
            Login to manage your bookings & decorations
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-primary/40 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-primary/40 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:scale-[1.02] hover:shadow-lg transition flex justify-center"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin text-xl" />
            ) : (
              "Login "
            )}
          </button>
        </form>

        {/* extra actions */}
        <div className="flex justify-between mt-4 text-sm">
          <button className="text-gray-500 hover:text-primary">
            Forgot password?
          </button>
        </div>

        {/* divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* google */}
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 cursor-pointer hover:bg-gray-100 transition"
        >
          <FcGoogle size={26} />
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </div>

        {/* footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          New to Style Decor?{" "}
          <Link
            to="/signup"
            state={from}
            className="text-primary font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  </div>
)

}

export default Login
