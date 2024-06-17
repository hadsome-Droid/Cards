import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { SignUp } from '@/components/auth/loginForm/signUp/signUp'
import { Decks } from '@/pages/decks/decks'

const publicRoutes: RouteObject[] = [
  {
    element: <SignUp buttonName={'HEy'} onSignIn={() => {}} onSubmit={() => {}} />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
  {
    element: <h1>404</h1>,
    path: '*',
  },
])

export function Router() {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
