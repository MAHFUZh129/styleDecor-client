import { useState } from 'react'
import DeleteModal from '../modal/DeleteModal'
import { TbCurrencyTaka } from 'react-icons/tb'
import ViewDecoratorModal from '../modal/ViewDecoratorModal'


const BookingTable = ({ booking, refetch }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isViewOpen, setIsViewOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }

  const closeViewModal = () => {
    setIsViewOpen(false)
  }

  const { image, name, category, price, quantity, status } = booking

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
        </div>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{category}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 items-center flex'><TbCurrencyTaka />   {price} </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{quantity}</p>
      </td>
      <td className='px-5 py-5 border-b  border-gray-200 font-semibold bg-white text-sm'>
        <p className='text-secondary/90'>{status}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

        {
          status === 'pending'  ? (<button
            onClick={() => setIsOpen(true)}
            className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight'
          >
            <span className='absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full'></span>
            <span className='relative cursor-pointer'>Cancel</span>
          </button>) :(<button
            onClick={() => setIsViewOpen(true)}
            className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight'
          >
            <span className='absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full'></span>
            <span className='relative cursor-pointer'>Veiw
            </span>
          </button>)
        }
        
        <DeleteModal booking={booking} refetch={refetch} isOpen={isOpen} closeModal={closeModal} />
        <ViewDecoratorModal
          booking={booking}
          isOpen={isViewOpen}
          closeModal={closeViewModal}
        />
      </td>
    </tr>
  )
}

export default BookingTable