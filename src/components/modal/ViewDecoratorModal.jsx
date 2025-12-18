import { MdEmail, MdBadge } from 'react-icons/md'
import { FaUserTie } from 'react-icons/fa'

const ViewDecoratorModal = ({ booking,isOpen, closeModal }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative">
         {/* Header */}
        <h3 className="text-2xl font-bold text-center mb-6 text-primary">
          Assigned Decorator
        </h3>

        {/* Body */}
        <div className="space-y-4">

          {/* Name */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <FaUserTie className="text-2xl text-primary" />
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-semibold">
                {booking.decoratorName || 'N/A'}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <MdEmail className="text-2xl text-primary" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-sm break-all">
                {booking.decoratorEmail || 'N/A'}
              </p>
            </div>
          </div>

          {/* Decorator ID */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <MdBadge className="text-2xl text-primary" />
            <div>
              <p className="text-sm text-gray-500">Decorator ID</p>
              <p className="font-mono text-xs">
                {booking.decoratorId || 'N/A'}
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="text-center mt-4">
            <span className="badge badge-success badge-lg">
              Assigned
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-right mt-6">
          <button
            onClick={closeModal}
            className="btn btn-sm btn-outline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewDecoratorModal
