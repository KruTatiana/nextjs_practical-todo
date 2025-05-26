import { ToDo } from './task/toDo';
import { Done } from './task/done';
import { AddSection } from './add-section/AddSection';


export const Body = () => {

  return (
    <>
      <AddSection />
      <div className='flex flex-col w-2/4 p-4 border-2 border-violet-400 rounded-lg'>
        <ToDo/>
        <Done />
      </div>
    </>
  )
}