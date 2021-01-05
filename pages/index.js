import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import '../styles/Home.module.css'

export default function Home() {
  return (
    <>

      <Nav />

      <div className="flex flex-col items-center lg:flex-row">

          <div className="px-10 py-20 mx-auto lg:px-40 lg:py-40 lg:w-1/2">
              <h1 className="text-4xl font-bold text-center lg:text-left">Your Best Value Propotition</h1>

              <p className="my-10 text-center lg:my-5 lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptates placeat, recusandae aliquid, suscipit alias cum soluta, consequuntur earum explicabo minima!</p>

              <div className="mx-auto mt-10 text-center lg:text-left">
                <a href="" className="px-8 py-3 text-white bg-black border-2 border-black rounded-lg place-self-center">Start free trial</a>
              </div>


          </div>

          <div className="w-screen px-10 mx-auto lg:w-1/2 lg:px-40 lg:py-40">
            <svg viewBox="0 0 670 480" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="669" height="479" rx="3.5" fill="white" stroke="black"/>
              <circle cx="22" cy="22" r="5.5" stroke="black"/>
              <circle cx="46" cy="22" r="5.5" stroke="black"/>
              <circle cx="70" cy="22" r="5.5" stroke="black"/>
            </svg>
          </div>
      </div>

    </>
  )
}
