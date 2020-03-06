import React from 'react'
import Link from 'next/link'
const errorPage =() =>{
    return (
        <div>
            Some error occured!
            Go back  <Link href="/"><a>Click Here</a></Link>
        </div>
    )
}

export default errorPage