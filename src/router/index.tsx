import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loadable from './Loadable'

import Layout from '@/features/views/Layout'
import ErrorPage from './ErrorPage'
const Dashboard = Loadable(lazy(() => import('@/features/views/dashboard')))
const ErrorMonitor = Loadable(
  lazy(() => import('@/features/views/errorMonitor'))
)
const PickerDelay = Loadable(lazy(() => import('@/features/views/pickerDelay')))
const DispatchDelay = Loadable(
  lazy(() => import('@/features/views/dispatchDelay'))
)

export default function ThemeRoutes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: '/errorMonitor',
          element: <ErrorMonitor />
        },
        {
          path: '/pickerDelay',
          element: <PickerDelay />
        },
        {
          path: '/dispatchDelay',
          element: <DispatchDelay />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
