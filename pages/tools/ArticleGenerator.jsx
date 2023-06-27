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
import ThreeDotsWave from "../components/loading";
import { motion } from "framer-motion";

function ArticleGenerator() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [keywords, setKeywords] = useState("");
  const [language, setLanguage] = useState("English");
  const [response, setResponse] = useState("");

  const prompt = ` generate an article on the topic ${title} making tips with keywords ${keywords} in ${language} `;

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
        <link rel="icon" href="/../public/logo.png" />
      </Head>

      <header className="flex w-full  flex-col  gap-5 pt-4 sm:pt-8 px-4 sm:px-48 bg-white shadow-md ">
        <div className="flex items-end gap-2 justify-between flex-wrap">
          <Link href="/" className="flex gap-4">
            <Image width={50} height={30} src="/../public/logo.png" />
            <div>
              <h2 className="text-xl uppercase font-semibold">Future Tools</h2>
              <p className="text-sm text-gray-500 ">
                Get you work done within seconds
              </p>
            </div>
          </Link>
          <div className="flex gap-2">
            <Link href="">
              <p className="bg-cyan-500 text-white px-2 text-sm items-center justify-center flex rounded uppercase  opacity-100 hover:opacity-70 transition duration-300 cursor-pointer">
                Blogging
              </p>
            </Link>
          </div>
        </div>

        <div className="flex ">
          <button className="flex px-4 rounded-tl-md hover:opacity-70 transition duration-300 bg-blue-500 items-center gap-2  uppercase text-white py-2 sm:py-3">
            <FaCodepen className="text-xl" />
            Try It
          </button>
          <button className="flex relative bg-green-500 hover:opacity-70 transition duration-300 rounded-tr-md items-center gap-2  uppercase text-white px-4 py-2 sm:py-3">
            <FaAvianex className="text-xl" />
            Demo
            <p className="absolute text-xs -right-10 -top-1 bg-orange-700 rounded-sm px-1">
              Available Soon
            </p>
          </button>
        </div>
      </header>

      <main className="mb-20 flex flex-row gap-8 w-full flex-wrap  justify-center text-center px-4 mt-8 sm:mt-20">
        <div className="shadow-xl flex flex-col bg-white rounded-md p-4 w-full sm:w-[500px] ">
          <div className="flex gap-4 border-b items-center pb-2">
            <MdDonutSmall className="text-4xl text-blue-500" />
            <div className="flex flex-col items-start">
              <h2 className="text-md uppercase font-semibold">
                Article Generator
              </h2>
              <p className="text-xs text-gray-500 ">
                Enter Title, Keywords, Language you like
              </p>
            </div>
          </div>
          <div className="w-full  flex-1">
            <p className="font-semibold text-left mt-4 mb-2">Title</p>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" rounded-md w-full border-gray-300  shadow-sm outline-none px-4 py-2 border text-sm  cursor-pointer focus:border-black focus:ring-black transition"
              placeholder="e.g. Money Making Tips "
            />
            <p className="font-semibold text-left mt-4 mb-2">Keywords </p>
            <input
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              rows={4}
              className=" rounded-md w-full border-gray-300  shadow-sm outline-none px-4 py-2 border overflow-hidden resize-none cursor-pointer text-sm  focus:border-black focus:ring-black transition"
              placeholder={"e.g. AI automation, Dropshipping, SMMA"}
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
                disabled={title == "" || keywords == ""}
                className="gradient1 hover:opacity-70 transition duration-300 w-40 rounded-sm text-white  uppercase px-4 py-2  left-0"
                onClick={(e) => getResponse(e)}
              >
                Generate &rarr;
              </button>
            )}
            {loading && (
              <div className="h-10">
                <motion.button
                  disabled={title == "" || keywords == ""}
                  transition={{ repeat: Infinity, duration: 1 }}
                  initial={{ width: 100, height: 4 }}
                  animate={{ width: 150, height: 4 }}
                  className="gradient1   rounded  left-0"
                ></motion.button>
              </div>
            )}

            <button
              onClick={() => {
                setTitle("");
                setKeywords("");
              }}
              className=" bg-gray-500 p-1.5 rounded-full hover:opacity-70 transition duration-300"
            >
              <MdClear className="text-xs text-white" />
            </button>
          </div>
        </div>

        <div className=" flex flex-col shadow-xl  bg-white items-start rounded-md p-4 w-full sm:w-[400px]">
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{ duration: 2000 }}
          />
          <div className="flex gap-4 border-b items-center pb-2 w-full">
            <MdKeyboardDoubleArrowDown className="text-4xl bg-green-500 text-white rounded-full " />
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
            disabled={response == ""}
            className=" bg-gray-500 p-1.5 rounded-full hover:opacity-70 transition duration-300"
          >
            <FaRegCopy className="text-xs text-white" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default ArticleGenerator;
