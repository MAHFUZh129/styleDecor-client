import { Navigate } from 'react-router'
import useRole from '../hooks/useRole'
import LoadingSpinner from '../components/shared/LoadingSpinner'

const DecoratorRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole()

  if (isRoleLoading) return <LoadingSpinner />
  if (role === 'decorator') return children
  return <Navigate to='/dashboard' replace='true' />
}

export default DecoratorRoute