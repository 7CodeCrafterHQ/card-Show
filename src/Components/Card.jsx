import React from 'react'

const Card = () => {
  return (
    <>
     <div className='w-full h-screen bg-zinc-600' >
        <div className='px-3 py-4 flex gap-5  bg-zinc-400 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-lg' >
       
        <img className='w-26 h-32  ' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="" />
           <div className='flex flex-col gap-1'> 
            <strong>Alok Rathore</strong>
            <span>Web Developer</span>
            <p>Lorem ipsum dolor,  sit <br /> amet consectetur adipisicing <br /> elit. Pariatur nemo accusamus </p>
        </div>
        </div>
     </div>
  </>
  )
}

export default Card