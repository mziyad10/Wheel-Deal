import React, { useEffect } from 'react'
import NavbarOwner from '../../src/components/owner/NavbarOwner'
import Sidebar from '../../src/components/owner/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../src/context/useAppContext'

const Layout = () => {
  const {isOwner, navigate} = useAppContext()

  useEffect(()=>{
    if(!isOwner){
      navigate('/')
    }
  },[isOwner])
  return (
    <div className='flex flex-col'>
      <NavbarOwner/>
      <div className="flex">
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
