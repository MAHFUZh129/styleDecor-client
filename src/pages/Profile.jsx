import useAuth from "../hooks/useAuth"
import useRole from "../hooks/useRole"

const Profile = () => {
    const { user } = useAuth()
    const [role, isRoleLoading] = useRole()
    
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
                <img
                    alt='cover photo'
                    src='https://i.ibb.co.com/G42ZLSk0/images-45.jpg'
                    className='w-full mb-4 rounded-t-lg h-56'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={user?.photoURL}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                        />
                    </a>

                    <p className='p-1 px-4 text-md font-semibold text-white bg-secondary rounded-full'>
                        {role}
                    </p>
                    <p className='mt-2 text-xl font-medium text-gray-800 '>
                        User Id: {user?.uid}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-gray-600 '>
                                    {user?.displayName}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-gray-600 '>{user?.email}</span>
                            </p>

                            <div>
                                <button className='bg-primary  px-8 py-1 rounded-md text-white cursor-pointer hover:bg-primary/90 block mb-1'>
                                    Update Profile
                                </button>
                                <button className='bg-primary px-6 py-1 rounded-md text-white cursor-pointer hover:bg-primary/90'>
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile