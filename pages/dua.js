import Nav from '../components/Nav'

export default function Dua() {

  return  (
    <>

      <Nav />

      <div className="flex flex-col items-center">


        <div className="w-full px-10 py-10 lg:py-40 lg:px-40">

          <h1 className="text-4xl font-bold text-center">Your Best Value Propotition</h1>

          <p className="my-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptates placeat, recusandae aliquid, suscipit alias cum soluta, consequuntur earum explicabo minima!</p>

          <div className="mt-10 text-center">
            <a href="" className="px-5 py-3 text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-200">Start free trial</a>
          </div>

        </div>

          <div className="w-full px-10 py-10 lg:w-1/2">

          <svg viewBox="0 0 670 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="669" height="479" rx="3.5" fill="white" stroke="black"/>
            <circle cx="22" cy="22" r="5.5" stroke="black"/>
            <circle cx="46" cy="22" r="5.5" stroke="black"/>
            <circle cx="70" cy="22" r="5.5" stroke="black"/>
          </svg>
        </div>


      </div>
    </>
  );
}
