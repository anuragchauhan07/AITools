import React from "react";
import Link from "next/link";
import { FaAccusoft } from "react-icons/fa";
import Image from "next/image";

function doveloper() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <header className="flex w-full justify-between  items-end py-8 px-56 bg-gray-200 shadow-md ">
      <div className="flex gap-4">
            <Image width={50} height={30} src="/../public/logo.png" />
            <div>
              <h2 className="text-xl uppercase font-semibold">Future Tools</h2>
              <p className="text-sm text-gray-500 ">
                Get you work done within seconds
              </p>
            </div>
          </div>
        <div className="flex gap-2">
          <p className="bg-cyan-500 text-white px-2 text-sm items-center justify-center flex rounded uppercase  opacity-100 hover:opacity-70 transition duration-300 cursor-pointer">
            All Tools
          </p>
        </div>
      </header>
      <div className="max-w-[1200px] mb-20">
        <div className="my-8">
          <h2 className=" text-2xl uppercase">Blogging</h2>
          <div className="w-24 mt-2 h-0.5 rounded bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-3 gap-6 justify-items-center place-items-center w-full">
          <Link href="../components/BusinessName">
            <div className="card  cursor-pointer relative px-6 py-2 bg-white after:shadow-xl  rounded-xl w-72  shadow-xl">
              <div className="gap-4 flex  justify-between items-center hover:scale-105 transition duration-300">
                <FaAccusoft c className="text-6xl" />
                <div className=" ">
                  <h2 className="uppercase font-semibold">
                  Blog Post Writer
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  Write blog articles in minutes with the most advanced AI writing assistant.
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
                  Content Rewriter
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  The smartest content rewriter ever. Rewrite blog articles or any type of content in seconds.
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
                  Blog Paragraph Writer
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  Write original and human-like paragraphs based on your blog subheading (h2, h3, h4,...).
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
                  Paragraph Generator
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  Generate paragraphs about any topic including a keyword and in a specific tone of voice.
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
                  Blog Section
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  Write a full blog section (few paragraphs) about a subheading of your article.
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
                  Blog Titles
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  Nobody wants to read boring blog titles, generate catchy blog titles with this tool.
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
                  Pros & Cons
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  Write the pros and cons of a product, service or website for your blog article.                  </p>
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
                  Blog Intros
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  Write an intro that will entice your visitors to read more about your article.                  </p>
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
                  Blog Conclusions                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  End your blog articles with an engaging conclusion paragraph.                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full mt-8 h-1 rounded gradient1"></div>
      </div>
      <div className="max-w-[1200px] mb-20">
        <div className="my-8">
          <h2 className=" text-3xl uppercase">Socail Media / ADS</h2>
          <div className="w-24 mt-2 h-0.5 rounded bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-3 gap-6 justify-items-center place-items-center w-full">
          <Link href="../components/BusinessName">
            <div className="card  cursor-pointer relative px-6 py-2 bg-white after:shadow-xl  rounded-xl w-72  shadow-xl">
              <div className="gap-4 flex  justify-between items-center hover:scale-105 transition duration-300">
                <FaAccusoft c className="text-6xl" />
                <div className=" ">
                  <h2 className="uppercase font-semibold lin">
                  Social Media Post 
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  Write a post for your business to be published on any social media platform.
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
                  Instagram Captions
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  Grab attention with catchy captions for your Instagram posts.
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
                  Instagram Hashtags Generator
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  Find the best hashtags to use for your Instagram posts.
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
                  Facebook Primary Text
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                  Write Facebook ads that engage your audience and deliver a high conversion rate.
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
