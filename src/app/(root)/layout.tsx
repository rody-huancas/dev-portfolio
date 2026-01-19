import Header from '@/components/common/Header'
import React from 'react'

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>
    </>
  )
}

export default AppLayout