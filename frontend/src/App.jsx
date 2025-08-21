import React from 'react'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'

const App = () => {
  return (
   <div className='flex items-center justify-center h-screen'>
     <div className='flex items-center text-center mx-auto flex-col gap-5  border-gray-500  border-2 p-5 '>
      <h1 className='text-2xl text-center'>Login page</h1>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
     </div>
   </div>
  )
}

export default App