import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
const indexPage =() =>{
    return (
        <div>
            Index Page
            <Link href="/auth"><a>Auth</a></Link>
            <button onClick={() => { Router.push("/auth") }}>Move to Auth</button>
        </div>
    )
}

export default indexPage