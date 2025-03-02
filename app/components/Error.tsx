import { useSearchParams } from 'next/navigation';
import React from 'react'
import { CgDanger } from 'react-icons/cg'

export default function Error({title,description}:{title:string,description:string}) {
  const query = useSearchParams();
  const search = query.get('search')
  console.log(query)

  return (  
    <div className='w-max h-[50vh] flex items-center shadow-sm rounded-lg shadow-gray-200 justify-center'>
        <div className='py-8 w-80 px-8 text-center flex flex-col items-center justify-center rounded-lg bg-cardinal/1 space-y-6 flex flex-col'>
        <div className="p-2 rounded-md bg-cardinal/20 text-4xl text-cardinal">
            <CgDanger />
        </div>
        <p className='block-heading !text-xl'>
          {search ? `No results for \'${search}\' in collection` : title}
        </p>
        <p className=''>
          {
            search ? `Kindly verify name of the book and search once more. If not come back later!` : description
          }
        </p>
        </div>
    </div>
  )
}
