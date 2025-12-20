
import { Navigate } from 'react-router'
import useRole from '../hooks/useRole'
import LoadingSpinner from '../components/shared/LoadingSpinner'

const AdminRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole()

  if (isRoleLoading) return <LoadingSpinner />
  if (role === 'admin') return children
  return <Navigate to='/dashboard' replace='true' />
}

export default AdminRoute