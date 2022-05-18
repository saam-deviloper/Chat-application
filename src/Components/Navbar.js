import React from 'react'

export default function Navbar({logOutHandler}) {
  return (
    <div className='w-100 bg-gray-100  shaddow  flex flex-row px-5 justify-between' style={{height:'60px'}}>
            <h1 className='text-muted font-bold text-lg  my-auto '>TeleGaram</h1>
            <button onClick={logOutHandler} className='btn-lg bg-red-500 hover:bg-red-600 rounded px-1 my-auto shadow'>Logout</button>
    </div>
  )
}
