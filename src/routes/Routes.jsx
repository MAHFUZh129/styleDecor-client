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
import ManageUsers from '../pages/admin/ManageUsers'
import DecoratorDashboardOverveiw from '../pages/decorator/DecoratorDashboardOverveiw'
import MyAssignedProjects from '../pages/decorator/MyAssignedProjects'
import EarningsSummary from '../pages/decorator/EarningsSummary'
import AdminRoute from './AdminRoute'
import DecoratorRoute from './DecoratorRoute'

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
            <AdminRoute>
              <ManageBookings />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'overview',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminDashboardOverveiw />
            </AdminRoute>
            
          </PrivateRoute>
        ),
      },
      {
        path: 'decorator-overview',
        element: (
          <PrivateRoute>
            <DecoratorRoute>
              <DecoratorDashboardOverveiw />
            </DecoratorRoute>
            
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-decorators',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageDecorators />
            </AdminRoute>
            
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-services',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageServices />
            </AdminRoute>
            
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
            
          </PrivateRoute>
        ),
      },
      {
        path: 'my-projects',
        element: (
          <PrivateRoute>
            <DecoratorRoute>
              <MyAssignedProjects />
            </DecoratorRoute>
            
          </PrivateRoute>
        ),
      },
      {
        path: 'earnigs',
        element: (
          <PrivateRoute>
            <EarningsSummary/>
          </PrivateRoute>
        ),
      },
      
    ],
  },
])
