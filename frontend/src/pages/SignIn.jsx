import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const SignIn = () => {
  const [formData, setFormData] = useState("");
  const {loading, error: errorMessage} = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!formData.email || !formData.password) {
      return dispatch(signInFailure('All fields are required'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if(data.success === false) {
        return dispatch(signInFailure(data.message));
      }
      
      if(res.ok) {
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
dispatch(signInFailure(error.message));

}
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>


      <div className='flex-1'>
      <Link to='/' className='font-bold dark:text-white text-4xl'>
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Zsolts</span> Blog</Link>
    <p className='text-sm mt-5'>You can sign up with your email and passord</p>
      </div>

      <div className='flex-1 md:ml-5'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>


            <div>
              <Label value="your email"></Label>
              <TextInput type='email' placeholder='name@company.com'  id='email'onChange={handleChange}/>

            </div>

            <div>
              <Label value="your password"></Label>
              <TextInput type='password' placeholder='*********'  id='password'onChange={handleChange}/>

            </div>

            <Button gradientDuoTone='purpleToPink' className='w-full' type='submit' disabled={loading} >{
              loading ? (<Spinner size='sm'><span className='pl-3'>Loading...</span></Spinner>) : 'Sign Ip'
              }</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>
              Dont have an account? <Link to='/sign-up' className='text-blue-500'>Sign Up</Link>
            </span>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">{errorMessage}</Alert>
          )}
      </div>

      </div>


    </div>
  )
}

export default SignIn