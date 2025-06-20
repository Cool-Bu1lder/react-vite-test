import { Outlet } from 'react-router'

import './AuthLayout.css'

function AuthLayout() {
  return (
    <>
      <main className="form-signup w-100 m-auto">
        <Outlet />
      </main>
    </>
  )
}

export default AuthLayout
