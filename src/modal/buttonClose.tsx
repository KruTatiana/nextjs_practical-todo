type ButtonCloseProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ButtonClose = ({setModal}:ButtonCloseProps) => {
  return (
    <button onClick={()=>setModal(false)} className="mr-2.5 px-4 py-1.5 border-none rounded-full bg-violet-950 text-white text-sm">Close</button>
  )
}