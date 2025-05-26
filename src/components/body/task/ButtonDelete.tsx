import Image from 'next/image'

type ButtonDeleteTaskProps = {
  onClick:()=>void
}

export const ButtonDelete = ({onClick}:ButtonDeleteTaskProps) => {
  return (
    <button className='justify-self-end' onClick={onClick}>
      <Image src={'./delete.svg'} width={24} height={24} alt='Delete' />
    </button>
  )
}