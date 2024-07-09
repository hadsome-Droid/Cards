import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Auth } from '@/components/auth/auth'
// import { SignUp } from '@/components/auth/loginForm/signUp/signUp'
import DecksPage from '@/pages/decks/decks.page'

const publicRoutes: RouteObject[] = [
  {
    // element: <SignUp buttonName={'HEy'} onSignIn={() => {}} onSubmit={() => {}} />,
    element: <Auth />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
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
