import React, { useEffect } from 'react'
import { useAuth } from '@/hooks/auth'

import { useRouter } from 'next/router'

import Footer from './Footer'
import Navbar from './Navbar'

const Main = ({ children }) => {
  const router = useRouter()
  const { user } = useAuth({ middleware: 'guest' })

  return (
    <div className="container mx-auto">
      {router.pathname !== '/auth/login' &&
        router.pathname !== '/auth/register' && <Navbar users={user} />}
      <div className="mx-auto bg-[#F5F5F5] rounded-md">{children}</div>
      {router.pathname !== '/auth/login' &&
        router.pathname !== '/auth/register' && <Footer />}
    </div>
  )
}

export { Main }
