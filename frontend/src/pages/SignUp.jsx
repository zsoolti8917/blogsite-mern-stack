import React from 'react'
import { Link } from 'react-router-dom'
import { Label, TextInput, Button } from 'flowbite-react'
const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>


      <div className='flex-1'>
      <Link to='/' className='font-bold dark:text-white text-4xl'>
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Zsolts</span> Blog</Link>
    <p className='text-sm mt-5'>This is a demo project. You can sign up with your email and passord or with google</p>
      </div>

      <div className='flex-1 md:ml-5'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value="your username"></Label>
              <TextInput type='text' placeholder='Username'  id='username'/>

            </div>

            <div>
              <Label value="your email"></Label>
              <TextInput type='text' placeholder='name@company.com'  id='email'/>

            </div>

            <div>
              <Label value="your password"></Label>
              <TextInput type='text' placeholder='Password'  id='password'/>

            </div>

            <Button gradientDuoTone='purpleToPink' className='w-full' type='submit'>Sign Up</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>
              Have an account? <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
            </span>
          </div>
      </div>

      </div>


    </div>
  )
}

export default SignUp