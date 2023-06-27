import React from "react";
import Link from "next/link";
import { FaAccusoft } from "react-icons/fa";

function doveloper() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <header className="flex w-full justify-between  items-end py-8 px-56 bg-gray-200 shadow-md ">
        <div className="flex gap-4">
          <FaAccusoft className="text-6xl" />
          <div>
            <h2 className="text-xl uppercase font-semibold">Future Tools</h2>
            <p className="text-sm text-gray-500 mt-1" >It can generate catchy names for your business</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="bg-orange-600 text-white px-2 text-sm items-center justify-center flex rounded uppercase font-semibold opacity-100 hover:opacity-70 transition duration-300 cursor-pointer">
            24 Credits
          </p>
          <p className="bg-purple-600 text-white px-2 text-sm items-center justify-center flex rounded uppercase font-semibold opacity-100 hover:opacity-70 transition duration-300 cursor-pointer">
            Doveloper
          </p>
        </div>
      </header>
      <div className="max-w-[1200px]">
        <div className="my-8">
          <h2 className=" text-3xl uppercase">Programming</h2>
          <div className="w-24 mt-2 h-0.5 rounded bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-3 gap-6 justify-items-center place-items-center w-full">
          <Link href="../components/BusinessName">
            <div className="card  cursor-pointer relative px-6 py-2 bg-white after:shadow-xl  rounded-xl w-72  shadow-xl">
              <div className="gap-4 flex  justify-between items-center hover:scale-105 transition duration-300">
                <FaAccusoft c className="text-6xl" />
                <div className=" ">
                  <h2 className="uppercase font-semibold lin">
                    Name Generator
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    It can generate catchy names for your business
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="../components/BusinessName">
            <div className="card  cursor-pointer relative px-6 py-2 bg-white after:shadow-xl  rounded-xl w-72  shadow-xl">
              <div className="gap-4 flex  justify-between items-center hover:scale-105 transition duration-300">
                <FaAccusoft c className="text-6xl" />
                <div className=" ">
                  <h2 className="uppercase font-semibold lin">
                    Name Generator
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    It can generate catchy names for your business
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="../components/BusinessName">
            <div className="card  cursor-pointer relative px-6 py-2 bg-white after:shadow-xl  rounded-xl w-72  shadow-xl">
              <div className="gap-4 flex  justify-between items-center hover:scale-105 transition duration-300">
                <FaAccusoft c className="text-6xl" />
                <div className=" ">
                  <h2 className="uppercase font-semibold lin">
                    Name Generator
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    It can generate catchy names for your business
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="../components/BusinessName">
            <div className="card  cursor-pointer relative px-6 py-2 bg-white after:shadow-xl  rounded-xl w-72  shadow-xl">
              <div className="gap-4 flex  justify-between items-center hover:scale-105 transition duration-300">
                <FaAccusoft c className="text-6xl" />
                <div className=" ">
                  <h2 className="uppercase font-semibold lin">
                    Name Generator
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    It can generate catchy names for your business
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="../components/BusinessName">
            <div className="card  cursor-pointer relative px-6 py-2 bg-white after:shadow-xl  rounded-xl w-72  shadow-xl">
              <div className="gap-4 flex  justify-between items-center hover:scale-105 transition duration-300">
                <FaAccusoft c className="text-6xl" />
                <div className=" ">
                  <h2 className="uppercase font-semibold lin">
                    Name Generator
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    It can generate catchy names for your business
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="../components/BusinessName">
            <div className="card  cursor-pointer relative px-6 py-2 bg-white after:shadow-xl  rounded-xl w-72  shadow-xl">
              <div className="gap-4 flex  justify-between items-center hover:scale-105 transition duration-300">
                <FaAccusoft c className="text-6xl" />
                <div className=" ">
                  <h2 className="uppercase font-semibold lin">
                    Name Generator
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    It can generate catchy names for your business
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full mt-8 h-1 rounded gradient1"></div>
      </div>
      
    </div>
  );
}

export default doveloper;
