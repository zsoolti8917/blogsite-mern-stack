import React from 'react'
import { Navbar, TextInput, Button, Dropdown, Avatar, DropdownDivider } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon, FaSun} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice'
const Header = () => {
  const dispatch = useDispatch()
  const path = useLocation().pathname
  const { theme } = useSelector(state => state.theme)
  const { currentUser } = useSelector(state => state.user)
  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Zsolts</span> Blog</Link>
      <form action="">
        <TextInput 
        type='text'
        placeholder='Search...'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'
        />
      </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill onClick={() => dispatch(toggleTheme())}>
            {theme === 'light' ? <FaSun/> : <FaMoon/>}
          </Button>
          {currentUser ? (
            <Dropdown arrowIcon={false} inline label= {
              <Avatar alt='user' img={currentUser.profilePicture} rounded/>
            }>
              <Dropdown.Header>
                <span className='block text-sm'>@{currentUser.username}</span>
                <span className='block text-sm font-medium truncate'>{currentUser.email}</span>

              </Dropdown.Header>
              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item>
                  Profile
                </Dropdown.Item>
              </Link>
              <DropdownDivider />
              

                <Dropdown.Item>
                  Sign Out
                </Dropdown.Item>
            </Dropdown>
          ) : (
<Link to='/sign-in'>
<Button className='' gradientDuoTone='purpleToBlue'>
  Sign In
</Button>
</Link>
          )
          }
          
          <Navbar.Toggle className='w-12 h-10'/>

        </div>
        <Navbar.Collapse >
            <Navbar.Link active= {path === '/'} as={'div'}>
              <Link to='/'>
                Home
              </Link>
            </Navbar.Link>

            <Navbar.Link active= {path === '/about'} as={'div'}>

              <Link to='/about' >
                About
              </Link>
            </Navbar.Link>
            <Navbar.Link active= {path === '/projects'} as={'div'}>
              <Link to='/projects'>
                Projects
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
    </Navbar>
  )
}

export default Header