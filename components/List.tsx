import React from 'react'
import { getAllTasks ,deleteTask, getTask} from '@/utils/actions'
import Modal from 'react-modal';
import Link from 'next/link';


const Delete=({id}:any)=>{

return (
    <form action={deleteTask}>
        <input name='id' value={id} hidden readOnly/>
<button  >delete</button>
    </form>
   
)
}


const List = async() => {
const tasks = await getAllTasks();
if(tasks.length <1){
return (
    <span>No task.</span>
)
}
  return (
    <>
    {
        tasks.map((task:any,i:any)=>{
           return  <div className='flex gap-3 justify-center' key={i}>
            <span className={task.completed?'line-through':''}>{task.content}</span>
            <Delete id={task.id}/>
             <Link href={`/tasks/${task.id}`} id={task.id}>edit</Link>
             </div>
        }
        )
    }
    </>
  )
}

export default List