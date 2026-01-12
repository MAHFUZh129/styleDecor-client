import { Link, useLocation, useNavigate } from 'react-router'
import { FaUser, FaEnvelope, FaLock, FaImage, FaCheckCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import useAuth from '../../hooks/useAuth'
import { toast } from 'react-hot-toast'
import { TbFidgetSpinner } from 'react-icons/tb'
import { useForm } from "react-hook-form"

import { imageUpload, saveOrUpdateUser } from '../../../utils'

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state || '/'

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  // console.log(errors)
  const onSubmit = async(data) => {
    const {email,password,image,name} =data
    const imgFile = image[0]

    
    try {
       const imgURL=await imageUpload(imgFile)
      // User Registration
       await createUser(email, password)

       await saveOrUpdateUser({ name, email, image: imgURL })
     
      // Save username & profile photo
      await updateUserProfile(name,imgURL) 
        
      

      navigate(from, { replace: true })
      toast.success('Signup Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }

  }

  //  Google Signin
  const handleGoogleSignIn = async () => {
    try {
      // using google
      const { user } = await signInWithGoogle()

      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      })


      navigate(from, { replace: true })
      toast.success('Signup Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }
  return (
  <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-200">

    {/* left  */}
    <div className="hidden lg:flex flex-col justify-center px-16 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 text-gray-800">
        <h1 className="text-5xl font-extrabold mb-6">
          Join <span className="text-primary">Style Decor</span>
        </h1>

        <p className="text-lg text-secondary mb-8 max-w-md">
          Create your account to plan premium weddings, birthdays and elegant
          events with professional decoration services.
        </p>

        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-primary" />
            Wedding Decoration Services
          </li>
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-primary" />
            Birthday & Engagement Events
          </li>
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-primary" />
            Corporate & Cultural Programs
          </li>
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-primary" />
            Customized Theme Design
          </li>
        </ul>
      </div>
    </div>

    {/* right */}
    <div className="flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8">

        {/* header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-secondary mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 text-sm">
            Sign up to continue with Style Decor
          </p>
        </div>

        {/* formM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-600">Full Name</label>
            <div className="relative mt-1">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Your full name"
                className="w-full pl-10 px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-primary/40 outline-none"
                {...register("name", {
                  required: true,
                  maxLength: { value: 20, message: "Max 20 characters" },
                })}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Profile Image
            </label>
            <div className="relative mt-1">
              <FaImage className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="file"
                accept="image/*"
                {...register("image")}
                className="w-full pl-10 py-3 text-sm bg-gray-100 border border-dashed border-primary rounded-xl cursor-pointer"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <div className="relative mt-1">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-primary/40 outline-none"
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <div className="relative mt-1">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-primary/40 outline-none"
                {...register("password", { required: true })}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:scale-[1.02] hover:shadow-lg transition flex justify-center"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin text-xl" />
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google */}
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 cursor-pointer hover:bg-gray-100 transition"
        >
          <FcGoogle size={26} />
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
)


}

export default SignUp
