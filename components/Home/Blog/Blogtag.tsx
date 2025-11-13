import React from 'react'

function Blogtag({ name }: { name: string }) {
    return (
        <div className='px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full'>
            {name}
        </div>
    )
}

export default Blogtag
