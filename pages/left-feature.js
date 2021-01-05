export default function FeatureLeft() {
  return (
    <>

      <div className="flex flex-col items-center h-screen lg:flex-row">

          <div className="px-40 py-40 lg:w-1/2 md:w-full">
            <h1 className="py-5 font-sans text-4xl font-bold">Feature That is Amazing</h1>

            <p className="py-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas facere delectus accusantium sit harum pariatur earum nihil aliquam. Nobis deleniti quibusdam amet saepe consequatur harum corporis dolor voluptate itaque velit?</p>

            <a href="" className="px-5 py-3 text-black border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-200">Learn more</a>
          </div>

          <div className="flex h-full md:w-1/2 ">
              <div className="w-full h-full bg-no-repeat bg-cover bg-hero-image"></div>
          </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-300 via-transparent to-transparent"></div>
      <div className="absolute w-full -mt-10 text-4xl text-center text-black">
        <div className="w-5 h-10 mx-auto text-gray-900 bg-white rounded-full bg-opacity-30 animate-bounce">˙</div>
      </div>

      <div className="flex flex-col items-center h-screen lg:flex-row">

        <div className="px-40 py-40 lg:w-1/2 md:w-full">
          <h1 className="text-xl font-bold">One click, and one click only</h1>
          <p className="py-10"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>

          <ul className="list-disc list-inside">
            <li>Blaaaa</li>
            <li>Blaaaa</li>
            <li>Blaaaa</li>
            <li>Blaaaa</li>
          </ul>

        </div>

        <div className="h-full px-10 py-20 lg:w-1/2 md:w-full">
          <div className="w-full mt-40 bg-white border-2 border-black rounded-lg h-3/5"></div>
        </div>
      </div>

      <div className="flex flex-col items-center h-screen lg:flex-row">

        <div className="px-40 py-40 lg:w-1/2 md:w-full">
          <h1 className="text-4xl font-bold">Your Best Value Proposition</h1>
          <p className="py-10"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>

          <p className="italic text-gray-400 py-15">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat exercitationem suscipit assumenda.  </p>
            <div className="flex flex-row items-center">

              <div
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)" }}
                className="w-12 h-12 mt-5 bg-cover rounded-full">
              </div>
              <div>
                <p className="mx-2 mt-4 text-lg text-gray-600">Robert Zane, Product Manager</p>
              </div>

            </div>

        </div>

        <div className="h-full px-10 py-20 lg:w-1/2 md:w-full">
          <div className="absolute w-2/5 mx-20 bg-white h-1/2"></div>
          <div className="absolute w-2/5 mx-2 mt-20 bg-black h-1/2"></div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row">

        <div className="p-20 px-64 lg:w-1/2 md:w-full">
          <h1 className="text-4xl font-bold">Ready to get started? </h1>
          <h1 className="mt-2 text-4xl">Sign up or contact us </h1>
        </div>

        <div className="lg:w-1/2 md:w-full ">
          <div className="flex flex-row items-center">
            <a href="" className="px-10 py-3 mx-5 text-white bg-black border-2 border-black rounded-lg">Start free trial</a>
            <a href="" className="px-10 py-3 mx-5 border-2 border-black rounded-lg">Contact us</a>
          </div>
        </div>
      </div>


      <div className="flex flex-col py-8 bg-black lg:flex-row">

        <div className="mx-64 ">
          <h1 className="text-4xl font-bold text-white mt-1/2">BRAND.</h1>
          <p className="mt-3 text-white" >&copy; 2010 - 2020</p>
          <div className="flex mt-3 lg:flex-row">
            <a href="" className="text-white">Privacy</a>
            <div className="mx-2 text-white">-</div>
            <a href="" className="text-white">Terms</a>
          </div>
        </div>

        <div className="mx-16 ">

          <div className="flex mt-3 lg:flex-col">
              <p href="" className="mb-5 font-bold text-white">Company</p>
              <a href="" className="text-white">Career</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
          </div>

        </div>


        <div className="mx-16 ">

          <div className="flex mt-3 lg:flex-col">
              <p href="" className="mb-5 font-bold text-white">Features</p>
              <a href="" className="text-white">Career</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
          </div>

        </div>

        <div className="mx-16 ">

          <div className="flex mt-3 lg:flex-col">
              <p href="" className="mb-5 font-bold text-white">Resources</p>
              <a href="" className="text-white">Career</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
          </div>

        </div>

        <div className="mx-16 ">

          <div className="flex mt-3 lg:flex-col">
              <p href="" className="mb-5 font-bold text-white">Product</p>
              <a href="" className="text-white">Career</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
              <a href="" className="text-white">Investor</a>
          </div>

        </div>

      </div>

        <div className="flex flex-col py-8 bg-white">
          <div className="flex flex-row mx-64">
                <a href="" className="mx-auto text-black ">Product</a>
                <a href="" className="mx-auto text-black ">Features</a>
                <a href="" className="mx-auto text-black ">Resources</a>
                <a href="" className="mx-40 text-2xl font-bold text-black ">BRAND.</a>
                <a href="" className="mx-auto text-black ">About</a>
                <a href="" className="mx-auto text-black ">Blog</a>
                <a href="" className="mx-auto text-black ">Support</a>
          </div>
          <div className="mx-64 mt-5"><hr className="border-black border-1"/></div>
          <div className="flex flex-row mx-auto mt-10">
            <div className="w-10 h-10 mx-4 border-2 border-black rounded-full"></div>
            <div className="w-10 h-10 mx-4 border-2 border-black rounded-full"></div>
            <div className="w-10 h-10 mx-4 border-2 border-black rounded-full"></div>
            <div className="w-10 h-10 mx-4 border-2 border-black rounded-full"></div>
            <div className="w-10 h-10 mx-4 border-2 border-black rounded-full"></div>
          </div>
          <div className="mx-auto mt-5">
            <h5 className="text-gray-600">
              &copy; 2010 - 2020
            </h5>


          </div>
          <div className="flex mx-auto">
            <a href="" className="text-gray-600">Terms</a>
            <div className="mx-2 text-gray-600">-</div>
            <a href="" className="text-gray-600">Privacy</a>
          </div>
        </div>

    </>
  );
}
