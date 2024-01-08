"use server"
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';



export const getAllTasks = async () => {
    return await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  };

export const createTask = async (formData:FormData) => {
  const content = formData.get('content');
try {
    if (content !== null && typeof content === 'string') {
        // Task.parse({ content });
        await prisma.task.create({
          data: {
            content,
          },
        });
        revalidatePath('/');
        return { message: 'success' };
      } else {
        // Handle the case when content is null or not a string
        console.error('Invalid content:', content);
        return { message: 'error' };
      }
} catch (error) {
    console.error(error);
    return { message: 'error' };
}
};



export const deleteTask = async (formData:FormData) => {
    const id = formData.get('id');
// console.log('id',id)
    try {
        if (id !== null && typeof id === 'string') {
            await prisma.task.delete({
                where: { id },
              });
            revalidatePath('/');
            return { message: 'success' };
            // dont redirect in try-catchh
          } else {
            console.error('Invalid id:', id);
            return { message: 'error' };
           
          }
    } catch (error) {
        console.error(error);
        return { message: 'error' };
    }
  };

  export const editTask = async (formData:FormData) => {
    const id = formData.get('id');
    const content = formData.get('content');
    const completed = formData.get('completed');
    if (id !== null && typeof id === 'string' && content !== null && typeof content === 'string'){
    await prisma.task.update({
      where: {
        id:id,
      },
      data: {
        content,
        completed: completed === 'on' ? true : false,
      },
    });
    redirect('/');
  }
  else {
    // Handle the case when content is null or not a string
    console.error('Invalid id:', id);
  }

  }

  export const getTask = async (id:string) => {
    return prisma.task.findUnique({
      where: {
        id:id,
      },
    });
  };