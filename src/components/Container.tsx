import React from 'react'

type props = {
  children: React.ReactNode
}

export const Container = ({ children }: props) => {
  return <div className="max-w-screen-sm mx-auto md:border-2 h-min-screen">{children}</div>
}

export default Container
