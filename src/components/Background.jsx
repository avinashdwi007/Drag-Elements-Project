import React from 'react'

const Background = () => {
  return (
    <>
      <div className=' fixed z-[2] w-full h-screen bg-zinc-800'>
          <div className='w-full py-10 absolute top-[5%] flex justify-center text-zinc-600 text-xl font-lighter'>Documents</div>
          <h1 className='absolute text-[25vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter font-normal  text-zinc-900 '>Docs.</h1>
      </div>
      </>
  )
}

export default Background
