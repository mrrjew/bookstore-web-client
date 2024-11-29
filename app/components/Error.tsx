import React from 'react'
import { CgDanger } from 'react-icons/cg'

export default function Error({title,description}:{title:string,description:string}) {
  return (
    <div className='w-full h-[50vh] flex items-center justify-center'>
        <div className='py-8 w-80 px-8 text-center flex flex-col items-center justify-center rounded-lg bg-cardinal/1 space-y-6 flex flex-col'>
        <div className="p-2 rounded-md bg-cardinal/20 text-4xl text-cardinal">
            <CgDanger />
        </div>
        <p className='block-heading !text-xl'>{title}</p>
        <p className=''>{description}</p>
        </div>
    </div>
  )
}
