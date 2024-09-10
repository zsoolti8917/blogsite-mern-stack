import React from 'react'
import {useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'
import DashProfile from '../components/DashProfile'
import DashSidebar from '../components/DashSidebar'
const Dashboard = () => {
  const location = useLocation()
  const [tab, setTab] = useState('')

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    setTab(tabFromUrl)
  }, [location])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        <DashSidebar />
      </div>

      <div>
        {tab === 'profile' && <DashProfile />}
      </div>
    </div>
  )
}

export default Dashboard