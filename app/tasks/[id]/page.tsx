import { editTask, getTask } from '@/utils/actions'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async({ params }:any) => {
    const task = await getTask(params.id)
    if(!task){
redirect('/');
    }
  return (
    <div className='text-center'>
    <h1>Edit Task App</h1>
    <form action={editTask}>
            <input name='id' value={task?.id} hidden readOnly/>
            <input  className='text-black border-black border-2 py-2 w-[300px]' name='content'   required
        defaultValue={task?.content}/>
            <select  name='completed' required>
                <option value={'on'}>completed</option>
                <option value={''}>not completed</option>
            </select>
            <button type='submit' className='block mx-auto bg-black px-4 my-2 text-white'>edit</button>
        </form>
    </div>
  )
}

export default page