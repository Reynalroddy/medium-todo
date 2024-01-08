import React from 'react'
import { createTask } from '@/utils/actions'
const Input = () => {
  return (
    <form  action={createTask}>
        <div className=''>
        <input  className='text-black border-black border-2 py-2 w-[300px]' placeholder='add task' name='content'/>
   <button type='submit' className='bg-black text-white rounded-md px-5 py-2 mx-3'>Add</button>
        </div>
   
    </form>
  )
}

export default Input