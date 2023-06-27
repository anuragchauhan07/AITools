import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaAvianex, FaRegCopy, FaCodepen } from "react-icons/fa";
import {
  MdClear,
  MdDonutSmall,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import { createParser } from "eventsource-parser";
import Link from "next/link";

function ContentRewriter() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("English");
  const [response, setResponse] = useState("");

  const prompt = ` rewrite the following content in a more professional way :  ${content} in ${language} language `;

  const getResponse = async (e) => {
    e.preventDefault();
    setResponse("");
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

    const data = response.body;
    if (!data) {
      return;
    }

    const onParse = (event) => {
      if (event.type === "event") {
        const data = event.data;
        try {
          const text = JSON.parse(data).text ?? "";
          setResponse((prev) => prev + text);
        } catch (e) {
          console.error(e);
        }
      }
    };

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
    setLoading(false);
  };

  return (
    <div className="flex flex-col  bg-gray-200 min-h-screen">
      <Head>
        <title>Article Generator</title>
        <link rel="icon" href="/../../public/logo.png" />
      </Head>

      <header className="flex w-full  flex-col  gap-5 pt-4 sm:pt-8 px-4 sm:px-48 bg-white shadow-md ">
        <div className="flex items-end gap-2 justify-between flex-wrap">
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
            <p className="bg-orange-600 text-white px-2 text-sm items-center justify-center flex rounded uppercase  opacity-100 hover:opacity-70 transition duration-300 cursor-pointer">
              24 Credits
            </p>
            <Link href="">
              <p className="bg-purple-600 text-white px-2 text-sm items-center justify-center flex rounded uppercase  opacity-100 hover:opacity-70 transition duration-300 cursor-pointer">
                Doveloper
              </p>
            </Link>
          </div>
        </div>

        <div className="flex ">
          <button className="flex px-4 rounded-tl-md hover:opacity-70 transition duration-300 bg-orange-600 items-center gap-2  uppercase text-white py-2 sm:py-3">
            <FaCodepen className="text-xl" />
            Try It
          </button>
          <button className="flex bg-purple-600 hover:opacity-70 transition duration-300 rounded-tr-md items-center gap-2  uppercase text-white px-4 py-2 sm:py-3">
            <FaAvianex className="text-xl" />
            Demo
          </button>
        </div>
      </header>

      <main className="mb-20 flex flex-row gap-8 w-full flex-wrap  justify-center text-center px-4 mt-8 sm:mt-20">
        <div className="shadow-xl flex flex-col bg-white rounded-md p-4 w-full sm:w-[500px] ">
          <div className="flex gap-4 border-b items-center pb-2">
            <MdDonutSmall className="text-4xl text-violet-600" />
            <div className="flex flex-col items-start">
              <h2 className="text-md uppercase font-semibold">
                Content Rewriter
              </h2>
              <p className="text-xs text-gray-500 ">
                Enter Previous Content, Language you like
              </p>
            </div>
          </div>
          <div className="w-full  flex-1">
            <p className="font-semibold text-left mt-4 mb-2">Previous Content </p>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className=" rounded-md w-full border-gray-300  shadow-sm outline-none px-4 py-2 border overflow-hidden resize-none cursor-pointer text-sm  focus:border-black focus:ring-black transition"
              placeholder={"Enter URL or previous content"}
            />

            <p className="font-semibold text-left mt-4 mb-2">Language</p>

            <select
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
              className="shadow-none rounded cursor-pointer transition duration-300  border-gray-300 focus:border-black focus:ring-black w-full text-sm  outline-none"
            >
              <option className="p-4 ">English</option>
              <option className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <div className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                  Hindi
                </div>
              </option>
              <option>Chinese</option>
              <option className="rounded ">Japanese</option>
            </select>
          </div>

          <div className="flex sm:mt-10 mt-8 items-end justify-between">
            {!loading && (
              <button
                className="gradient1 hover:opacity-70 transition duration-300 w-40 rounded-sm text-white  uppercase px-4 py-2  left-0"
                onClick={(e) => getResponse(e)}
              >
                Generate &rarr;
              </button>
            )}
            {loading && (
              <button
                className="gradient1 hover:opacity-70 transition duration-300 w-32 rounded-md text-white  uppercase px-4 py-2  left-0"
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

        <div className=" flex flex-col shadow-xl  bg-white items-start rounded-md p-4 w-full sm:w-[400px]">
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{ duration: 2000 }}
          />
          <div className="flex gap-4 border-b items-center pb-2 w-full">
            <MdKeyboardDoubleArrowDown className="text-4xl bg-lime-600 text-white rounded-full pt-1" />
            <div className="flex flex-col items-start">
              <h2 className="text-md uppercase font-semibold">AI Response</h2>
              <p className="text-xs text-left text-gray-500 ">
                Your AI generated Article
              </p>
            </div>
          </div>
          <div className="w-full text-left mt-4 mb-2 text-sm flex-1">
            {response}
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(response);
              toast("Copied to clipboard");
            }}
            className=" bg-gray-500 p-2 rounded-full hover:opacity-70 transition duration-300"
          >
            <FaRegCopy className="text-sm text-white" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default ContentRewriter;
