import React from 'react'

const Layout = ({children, className =''}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 sm:p-10 laptop:p-16 mobile:p-14 tablet:p-20 ${className}`}>
        {children}
    </div>
  )
}

export default Layout
