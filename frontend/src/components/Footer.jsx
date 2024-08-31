import React from 'react'
import {Footer} from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'
const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1 '>
                <div className='mb-6 mt-5'>
                <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Zsolts</span> Blog</Link>
                </div>
                <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="/" target='_blank' rel='noopener noreferrer'>
                            100 JS Projects
                        </Footer.Link>
                        <Footer.Link href="/" target='_blank' rel='noopener noreferrer'>
                            100 Python
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow Us'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="/" target='_blank' rel='noopener noreferrer'>
                            GitHub
                        </Footer.Link>
                        <Footer.Link href="/" target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Legal'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="/" target='_blank' rel='noopener noreferrer'>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="/" target='_blank' rel='noopener noreferrer'>
                            Terms And Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="Zsolts's blog" year={new Date().getFullYear()}/>
            
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                <Footer.Icon href='#' icon={BsFacebook}/>
                <Footer.Icon href='#' icon={BsInstagram}/>
                <Footer.Icon href='#' icon={BsLinkedin}/>
                <Footer.Icon href='#' icon={BsTwitter}/>

            </div>
            </div>
        </div>
    </Footer>
      
  )
}

export default FooterCom