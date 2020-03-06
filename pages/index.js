import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

class IndexPage extends Component {
    static  getInitialProps(context) {
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve({
                    appname : "My Super App"
                })
            },1000)
        })
    }
    render() {
        return (
            <div>
                Index Page {this.props.appname}
                <Link href="/auth"><a>Auth</a></Link>
                <button onClick={() => { Router.push("/auth") }}>Move to Auth</button>
            </div>
        )
    }
}
export default IndexPage