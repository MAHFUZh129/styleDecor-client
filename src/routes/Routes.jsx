import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'

import MainLayout from '../layouts/MainLayout'

import { createBrowserRouter } from 'react-router'
import ServicesPage from '../pages/ServicesPage'
import ServiceDetails from '../pages/ServiceDetails'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MyBookings from '../pages/user/MyBookings'
import PaymentHistory from '../pages/user/PaymentHistory'
import PaymentSuccess from '../pages/payment/PaymentSuccess'
import Profile from '../pages/Profile'
import DashboardIndex from '../pages/DashboardIndex'
import ManageBookings from '../pages/admin/ManageBookings'
import AdminDashboardOverveiw from '../pages/admin/AdminDashboardOverveiw'
import ManageDecorators from '../pages/admin/ManageDecorators'
import ManageServices from '../pages/admin/ManageServices'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
      {
        path: '/services/:id',
        element: <ServiceDetails />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/payment-success',
        element: <PaymentSuccess />,
      },

    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashboardIndex />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-bookings',
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: 'payment-history',
        element: (
          <PrivateRoute>
            <PaymentHistory/>
            
          </PrivateRoute>
        ),
      },
      
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-bookings',
        element: (
          <PrivateRoute>
            <ManageBookings />
          </PrivateRoute>
        ),
      },
      {
        path: 'overview',
        element: (
          <PrivateRoute>
            <AdminDashboardOverveiw />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-decorators',
        element: (
          <PrivateRoute>
            <ManageDecorators />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-services',
        element: (
          <PrivateRoute>
            <ManageServices />
          </PrivateRoute>
        ),
      },
      
    ],
  },
])
