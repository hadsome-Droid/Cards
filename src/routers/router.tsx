import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { Auth } from '@/components/auth/auth'
// import { SignUp } from '@/components/auth/loginForm/signUp/signUp'
import DecksPage from '@/pages/decks/decks.page'
import { useAuthMeQuery } from '@/services/auth/auth.service'

const publicRoutes: RouteObject[] = [
  {
    // element: <SignUp buttonName={'HEy'} onSignIn={() => {}} onSubmit={() => {}} />,
    element: <Auth />,
    path: ROUTES.login,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: ROUTES.base,
  },
]

export const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
  {
    element: <h1>404</h1>,
    path: ROUTES.rest,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data } = useAuthMeQuery()

  const isAuthenticated = !!data && !('success' in data)

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.login} />
}
