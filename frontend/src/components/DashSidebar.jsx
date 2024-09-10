import React from 'react'
import { Sidebar } from 'flowbite-react'
import { HiArrowSmRight, HiUser } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const DashSidebar = () => {
    const location = useLocation()
    const [tab, setTab] = useState('')

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search)
        const tabFromUrl = urlParams.get('tab')
        setTab(tabFromUrl)
      }, [location])

  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'> 
                <Sidebar.Item active icon={HiUser} label={"user"} labelColor="dark">Profile</Sidebar.Item>
                </Link>
                <Link> 

                <Sidebar.Item active icon={HiArrowSmRight}  className='cursor-pointer'>Profile</Sidebar.Item>
                </Link>

            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar