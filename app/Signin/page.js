import React from 'react'

const signin = () => {
  return (
    <div className="  bg-gradient-to-bl from-gray-900 to-emerald-800 py-32">
      <div className="container mx-auto ">
        <div className=" flex  flex-col lg:flex-row md:w-9/12 sm:w-10/12 lg:w-8/12 bg-white mx-auto rounded-xl shadow-2xl overflow-hidden ">
            <div className=" w-full lg:w-1/2  flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover"style={{ backgroundImage: 'url(/tree.jpg)' }}  >
                <h2 className="text-white text-4xl mb-5">Welcome</h2>
                <div>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus harum distinctio sint eos eum at molestias sunt repellendus asperiores nemo, ullam adipisci numquam?

                </p>
            </div>
            </div>
            <div className=" w-full lg:w-1/2   py-16 px-12 ">
                <h3 className="text-4xl mb-4 underline font-bold text-black">Registration Form</h3>
                <p className="mb-4 text-2xl text-black font-semibold">
                    Create your Account . It's Free and only take a minute.
                </p>
                <form>
                    <div className="grid grid-cols-2 gap-5">
                        <input type="text" name="name" placeholder="Firstname" className=" border-gray-500 py-2 px-4 border-4 text-2xl rounded-md " required />
                        <input type="text" name="surname" placeholder="Lastname" className=" border-gray-500 py-2 px-4 border-4 text-2xl rounded-md" required />
                    </div>
                    <div className="mt-5">
                        <input type="email" name="email" placeholder="Enter your Email" className=" border-gray-500 py-2 px-4 border-4 w-full text-2xl rounded-md" required />
                    </div>
                    <div className="mt-5">
                        <input type="password" name="password" placeholder="Enter password" className=" border-gray-500 py-2 px-4 border-4 w-full text-2xl rounded-md" required />
                    </div>
                    <div className="mt-5">
                     <input type="number" name="phone" placeholder="Enter Phone Number" className="border-gray-500 py-2 px-4 border-4 w-full text-2xl rounded-md" required />
                    </div>
                    <div className="mt-5">
                        <input type="text" name="address" placeholder="Enter Address" className=" border-gray-500 py-4 px-4 w-full border-4 text-2xl rounded-md" required />
                    </div>
                    <div className="mt-5">
                        <button className="bg-gradient-to-r from-green-700 to-slate-900 text-black w-full rounded-md font-semibold py-4 text-xl hover:font-bold shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  hover:shadow-lg">Register Now</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default signin

