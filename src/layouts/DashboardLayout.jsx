import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashbar from '../components/Dashbar'
import { Outlet } from 'react-router'


const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
        <Sidebar/>
        <div className="ml-60 flex flex-col gap-y-4 w-full">
            <Dashbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout;