import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaAccusoft, FaRegCopy } from "react-icons/fa";
import {
  MdClear,
  MdDonutSmall,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import { createParser } from "eventsource-parser";
import Typewriter from "typewriter-effect";

function BusinessName() {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [generatedBios, setGeneratedBios] = useState("");
  const [demo, setDemo] = useState(true);
  const bioRef = useRef(null);

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prompt = `Generate 2  business names  for ${bio} business clearly labeled "1." and "2.". `;

  const generateBio = async (e) => {
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const onParse = (event) => {
      if (event.type === "event") {
        const data = event.data;
        try {
          const text = JSON.parse(data).text ?? "";
          setGeneratedBios((prev) => prev + text);
        } catch (e) {
          console.error(e);
        }
      }
    };

    // https://web.dev/streams/#the-getreader-and-read-methods
    const reader = data.getReader();
    const decoder = new TextDecoder();
    const parser = createParser(onParse);
    let done = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      parser.feed(chunkValue);
    }
    scrollToBios();
    setLoading(false);
  };

  return (
    <div className="flex flex-col  bg-gray-200 min-h-screen">
      <Head>
        <title>Twitter Bio Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full  flex-col  gap-5 pt-8 px-48 bg-white shadow-md ">
        <div className="flex items-end justify-between">
          <div className="flex gap-4">
            <FaAccusoft className="text-6xl" />
            <div>
              <h2 className="text-xl uppercase font-semibold">Future Tools</h2>
              <p className="text-sm text-gray-500 mt-1">
                It can generate catchy names for your business
              </p>
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
        </div>

        <div className="flex ">
          <button
            onClick={() => {
              setDemo(true);
            }}
            className="flex px-4 rounded-tl-md hover:opacity-70 transition duration-300 bg-orange-600 items-center gap-2 font-semibold uppercase text-white py-3"
          >
            <FaAccusoft className="text-xl" />
            Try It
          </button>
          <button
            onClick={() => {
              setDemo(false);
            }}
            className="flex bg-purple-600 hover:opacity-70 transition duration-300 rounded-tr-md items-center gap-2 font-semibold uppercase text-white px-4 py-3"
          >
            <FaAccusoft className="text-xl" />
            Demo
          </button>
        </div>
      </header>

      {demo ? (
        <main className="mb-20 flex flex-row gap-8 w-full flex-wrap  justify-center text-center px-4 mt-12 sm:mt-20">
          <div className="shadow-xl flex flex-col bg-white rounded-md p-4">
            <div className="flex gap-4 border-b items-center pb-2">
              <MdDonutSmall className="text-4xl text-violet-600" />
              <div className="flex flex-col items-start">
                <h2 className="text-xl uppercase font-semibold">
                  Future Tools
                </h2>
                <p className="text-sm text-gray-500 ">
                  It can generate catchy names for your business
                </p>
              </div>
            </div>
            <div className="min-w-[500px]">
              <p className="font-semibold text-left mt-4 mb-2">Title</p>
              <input
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className=" rounded-md w-full border-gray-300  shadow-sm outline-none px-4 py-2 border text-sm  cursor-pointer focus:border-black focus:ring-black transition"
                placeholder="Book Business "
              />
              <p className="font-semibold text-left mt-4 mb-2">Description</p>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                className=" rounded-md w-full border-gray-300  shadow-sm outline-none px-4 py-2 border overflow-hidden resize-none cursor-pointer text-sm  focus:border-black focus:ring-black transition"
                placeholder={
                  "e.g. Senior Developer Advocate @vercel. Tweeting about web development, AI, and React / Next.js. Writing nutlope.substack.com."
                }
              />

              <p className="font-semibold text-left mt-4 mb-2">Type</p>

              <select className="shadow-none rounded cursor-pointer transition duration-300  border-gray-300 focus:border-black focus:ring-black w-full text-sm  outline-none">
                <option className="p-4 ">Default</option>
                <option className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                  <div className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    Red
                  </div>
                </option>
                <option>Black</option>
                <option className="rounded ">Yellow</option>
              </select>
            </div>

            <div className="flex sm:mt-10 mt-8 items-end justify-between">
              {!loading && (
                <button
                  className="gradient1 hover:opacity-70 transition duration-300 w-32 rounded-sm text-white font-semibold uppercase px-4 py-2  left-0"
                  onClick={(e) => generateBio(e)}
                >
                  Generate &rarr;
                </button>
              )}
              {loading && (
                <button
                  className="gradient1 hover:opacity-70 transition duration-300 w-32 rounded-md text-white font-semibold uppercase px-4 py-2  left-0"
                  disabled
                >
                  Loading
                </button>
              )}

              <MdClear
                onClick={() => {
                  setBio("");
                }}
                className="bg-gray-500 text-white rounded-full text-3xl hover:opacity-70 transition duration-300 cursor-pointer p-1"
              />
            </div>
          </div>

          <div className=" flex flex-col shadow-xl  bg-white items-start rounded-md p-4 w-[400px]">
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{ duration: 2000 }}
            />
            <div className="flex gap-4 border-b items-center pb-2 ">
              <MdKeyboardDoubleArrowDown className="text-4xl bg-lime-600 text-white rounded-full pt-1" />
              <div className="flex flex-col items-start">
                <h2 className="text-xl uppercase font-semibold">
                  Future Tools
                </h2>
                <p className="text-sm text-gray-500 ">
                  It can generate catchy names for your business
                </p>
              </div>
            </div>
            <div className="w-full text-left mt-4 mb-2 text-sm flex-1">
              {generatedBios && (
                <>
                  <div className="flex flex-col gap-2">
                    {generatedBios
                      .substring(generatedBios.indexOf("1") + 3)
                      .split("2.")
                      .map((generatedBio) => {
                        return (
                          <div className="flex gap-2" key={generatedBio}>
                            <button
                              className=" bg-gray-500 p-1.5 rounded-full hover:opacity-70 transition duration-300"
                              onClick={() => {
                                navigator.clipboard.writeText(generatedBio);
                                toast("Copied to clipboard");
                              }}
                            >
                              <FaRegCopy className="text-xs text-white" />
                            </button>
                            <p>{generatedBio}</p>
                          </div>
                        );
                      })}
                  </div>
                </>
              )}
            </div>
            <button className=" bg-gray-500 p-2 rounded-full hover:opacity-70 transition duration-300">
              <FaRegCopy className="text-sm text-white" />
            </button>
          </div>
        </main>
      ) : (
        <main className="mb-20 flex flex-row gap-8 w-full flex-wrap  justify-center text-center px-4 mt-12 sm:mt-20">
          <div className="shadow-xl flex flex-col bg-white rounded-md p-4">
            <div className="flex gap-4 border-b items-center pb-2">
              <MdDonutSmall className="text-4xl text-violet-600" />
              <div className="flex flex-col items-start">
                <h2 className="text-xl uppercase font-semibold">
                  Future Tools Demo
                </h2>
                <p className="text-sm text-gray-500 ">
                  It can generate catchy names for your business
                </p>
              </div>
            </div>
            <div className="min-w-[500px]">
              <p className="font-semibold text-left mt-4 mb-2">Title</p>

              <div className=" text-left rounded-md w-full   shadow-sm outline-none px-4 py-2 border text-sm  cursor-pointer border-black  transition">
                <Typewriter
                  options={{
                    strings: ["Book Business "],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />

              </div>
              <p className="font-semibold text-left mt-4 mb-2">Description</p>
              <div className=" text-left h-24 rounded-md w-full   shadow-sm outline-none px-4 py-2 border text-sm  cursor-pointer border-black  transition">
                <Typewriter
                  options={{
                    strings: ["Book Business "],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </div>
              <p className="font-semibold text-left mt-4 mb-2">Type</p>

              <select className="shadow-none rounded cursor-pointer transition duration-300  border-gray-300 focus:border-black focus:ring-black w-full text-sm  outline-none">
                <option className="p-4 ">Default</option>
                <option className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                  <div className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    Red
                  </div>
                </option>
                <option>Black</option>
                <option className="rounded ">Yellow</option>
              </select>
            </div>

            <div className="flex sm:mt-10 mt-8 items-end justify-between">
              {!loading && (
                <button
                  className="gradient1 hover:opacity-70 transition duration-300 w-32 rounded-sm text-white font-semibold uppercase px-4 py-2  left-0"
                  onClick={(e) => generateBio(e)}
                >
                  Generate &rarr;
                </button>
              )}
              {loading && (
                <button
                  className="gradient1 hover:opacity-70 transition duration-300 w-32 rounded-md text-white font-semibold uppercase px-4 py-2  left-0"
                  disabled
                >
                  Loading
                </button>
              )}

              <MdClear
                onClick={() => {
                  setBio("");
                }}
                className="bg-gray-500 text-white rounded-full text-3xl hover:opacity-70 transition duration-300 cursor-pointer p-1"
              />
            </div>
          </div>

          <div className=" flex flex-col shadow-xl  bg-white items-start rounded-md p-4 w-[400px]">
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{ duration: 2000 }}
            />
            <div className="flex gap-4 border-b items-center pb-2 ">
              <MdKeyboardDoubleArrowDown className="text-4xl bg-lime-600 text-white rounded-full pt-1" />
              <div className="flex flex-col items-start">
                <h2 className="text-xl uppercase font-semibold">
                  Future Tools
                </h2>
                <p className="text-sm text-gray-500 ">
                  It can generate catchy names for your business
                </p>
              </div>
            </div>
            <div className="w-full text-left mt-4 mb-2 text-sm flex-1">
              {generatedBios && (
                <>
                  <div className="flex flex-col gap-2">
                    {generatedBios
                      .substring(generatedBios.indexOf("1") + 3)
                      .split("2.")
                      .map((generatedBio) => {
                        return (
                          <div className="flex gap-2" key={generatedBio}>
                            <button
                              className=" bg-gray-500 p-1.5 rounded-full hover:opacity-70 transition duration-300"
                              onClick={() => {
                                navigator.clipboard.writeText(generatedBio);
                                toast("Copied to clipboard");
                              }}
                            >
                              <FaRegCopy className="text-xs text-white" />
                            </button>
                            <p>{generatedBio}</p>
                          </div>
                        );
                      })}
                  </div>
                </>
              )}
            </div>
            <button className=" bg-gray-500 p-2 rounded-full hover:opacity-70 transition duration-300">
              <FaRegCopy className="text-sm text-white" />
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default BusinessName;
