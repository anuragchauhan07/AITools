import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { useSession, signIn, signOut } from "next-auth/react";
import emailjs from "@emailjs/browser";

import {
  FaInstagram,
  FaDelicious,
  FaCloudversify,
  FaBuffer,
  FaCloudsmith,
  FaInstalod,
  FaMicrosoft,
  FaUserAlt,
  FaSlackHash,
} from "react-icons/fa";
import {
  MdVoiceChat,
  MdArrowBack,
  MdOutlineMenu,
  MdMarkunreadMailbox,
  MdEmail,
  MdLogout,
  MdLogin
} from "react-icons/md";
import { ImInfinite } from "react-icons/im";
import { SiBuymeacoffee } from "react-icons/si";
import { motion } from "framer-motion";
import { RiOpenaiFill } from "react-icons/ri";
//import { loadStripe } from "@stripe/stripe-js";
//import axios from "axios";

const Home = () => {
  const [aichat, setAichat] = useState(true);
  const [nav, setNav] = useState(false);
  const [userBar, setUserBar] = useState(false);
  const { data, status } = useSession();

  /*

  const publishableKey = "pk_test_51HXL0JGSCC3XaWl11VrafoUmgJq8Gz8GvfL1a1uelcwhYnEhSpCNX17lX2dk2S5tPLKa3SGWSOpCzCjE9yPR7aqw00y9x6RO8u";
  const stripePromise = loadStripe(publishableKey);

  const item = [{name: "book"}, {price: 200}]

  const createCheckOutSession = async () => {

    const stripe = await stripePromise;
    console.log("Test")
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      item: item,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
*/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8e5lwyn",
        "template_tkk0zhq",
        form.current,
        "eP0b0AGGdJy9RCEnw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const toogleNav = () => {
    if (nav === true) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  const toogleUserBar = () => {
    if (userBar === true) {
      setUserBar(false);
    } else {
      setUserBar(true);
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Future Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed z-50 bg-white shadow-md w-full   flex justify-between items-center px-8 py-2">
        <div className="flex items-center gap-2 uppercase font-semibold">
          <Image alt="img" width={50} height={50} src="/../public/logo.png" />
          <h2 className="text-xl">Future Tools</h2>
        </div>

        <ul className="sm:flex gap-4 font-semibold text-sm hidden -ml-40">
          <Link href="./allTools">
            <li className="border-b border-white cursor-pointer hover:border-b-violet-700 transition duration-300">
              All Tools
            </li>
          </Link>
          <li>.</li>
          <Link href="./marketing">
            <li className="border-b border-white cursor-pointer hover:border-b-violet-700 transition duration-300">
              Marketting
            </li>
          </Link>
          <li>.</li>

          <Link href="./doveloper">
            <li className="border-b border-white cursor-pointer hover:border-b-violet-700 transition duration-300">
              Dovelopers
            </li>
          </Link>
          <li>.</li>
          <Link href="">
            <li className="border-b border-white cursor-pointer hover:border-b-violet-700 transition duration-300">
              About Creator
            </li>
          </Link>
        </ul>

        {status === "authenticated" ? (
          <div className="relative hidden sm:block">
            <div className="bg-black p-0.5 rounded-full flex items-center justify-center">
              <img
                alt="img"
                src={data.user.image}
                className="w-10 h-10 rounded-full"
                onClick={() => {
                  toogleUserBar();
                }}
              />
            </div>

            {userBar ? (
              <div className="absolute  right-0 top-16 bg-white rounded-md p-2 ">
                <p className="text-xs flex gap-2 items-center">
                  <MdEmail />
                  {data.user.email}
                </p>
                <p className="text-xs mt-2 gap-2 flex items-center">
                  <FaUserAlt /> {data.user.name}
                </p>

                <p className="text-xs mt-2 gap-2 flex items-center">
                  <FaSlackHash /> Tokens: <ImInfinite />
                </p>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className=" mt-10  flex gradient1 gap-2 items-center text-white rounded-md px-4 py-2 text-sm  hover:opacity-70 transition  duration-300"
                >
                  Logout <MdLogout />
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <button
            type="button"
            onClick={() => signIn()}
            className="hidden sm:block gradient1 text-white rounded-md px-4 py-2 text-sm  hover:opacity-70 transition  duration-300"
          >
            LogIn
          </button>
        )}

        <MdOutlineMenu
          className="text-3xl sm:hidden block"
          onClick={() => {
            toogleNav();
          }}
        />
        {nav ? (
          <ul className="flex shadow-md sm:hidden flex-col w-full gap-4  absolute left-0 p-10 bg-white top-16">
            <Link href="./allTools">
              <li className="border-b border-white cursor-pointer hover:border-b-violet-700 transition duration-300">
                All Tools
              </li>
            </Link>
            <Link href="./marketing">
              <li className="border-b border-white cursor-pointer hover:border-b-violet-700 transition duration-300">
                Marketting
              </li>
            </Link>
            <Link href="./doveloper">
              <li className="border-b border-white cursor-pointer hover:border-b-violet-700 transition duration-300">
                Dovelopers
              </li>
            </Link>
            <Link href="">
              <li className="border-b border-white cursor-pointer hover:border-b-violet-700 transition duration-300">
                About Creator
              </li>
            </Link>

            {status === "authenticated" ? (
              <div className="relative bg-gray-200 p-2 rounded-md">
                <div className="flex justify-between mb-2">
                  <img
                    alt="img"
                    src={data.user.image}
                    className="w-8 h-8 rounded-full"
                  />
                  <button
                    type="button"
                    onClick={() => signOut()}
                    className="  flex bg-black gap-2 items-center text-white rounded-md px-3 py-1 text-sm  hover:opacity-70 transition  duration-300"
                  >
                    Logout <MdLogout />
                  </button>
                </div>

                <div className="   rounded-md  ">
                  <p className="text-sm flex gap-2 items-center">
                    <MdEmail />
                    {data.user.email}
                  </p>
                  <p className="text-xs mt-2 gap-2 flex items-center">
                    <FaUserAlt /> {data.user.name}
                  </p>

                  <p className="text-xs mt-2 gap-2 flex items-center">
                    <FaSlackHash /> Tokens: <ImInfinite />
                  </p>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => signIn()}
                className=" w-28 flex bg-black gap-2 items-center text-white rounded-md px-3 py-1 text-sm  hover:opacity-70 transition  duration-300"
                >
                Log In <MdLogin/>
              </button>
            )}
          </ul>
        ) : null}
      </header>
      <div className="bg-black text-white min-h-screen w-full pt-28 sm:pt-40 flex flex-col items-center  mb-8 sm:mb-20">
        <div className="max-w-2xl text-center p-4">
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <h2 className="fontNue tracking-wider text-6xl font-semibold uppercase">
              Simplify,{" "}
              <span className="txtgradient border-b-2 ">Automate,</span> and
              Elevate Your Workflow
            </h2>

            <p className="text-sm font-semibold text-gray-500 mt-6">
              Discover the Cutting-Edge AI Tools and Technologies
              Revolutionizing Industries. Transform Your Operations and Stay
              Ahead of the Competition.
            </p>
            <h2 className="text-center items-center justify-center mt-8 text-gray-600/40 flex fontNue tracking-wider text-6xl font-semibold uppercase">
              CHAT GPT <RiOpenaiFill />
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-6  sm:-mt-52 mb-6 ">
        <div className="flex flex-col relative gradient2 items-center shadow-2xl w-60 h-60 rounded-lg p-4 text-center justify-center">
          <div className="text-3xl bg-white rounded-full p-3 ">
            <FaBuffer />
          </div>

          <h2 className="font-semibold text-xl mt-4 text-white">
            For Dovelopers
          </h2>
          <p className="text-xs text-gray-300">
            Explore AI Tools Tailored for Developers to Boost Productivity and
            Enhance Code Quality.
          </p>
          <Link
            href="./doveloper"
            className="hover:opacity-70 transition duration-300 text-transperant bg-white rounded-md px-4 py-2 font-semibold mt-4"
          >
            Check Tools
          </Link>
          <div className="absolute right-2 top-2 bg-white text-sm font-semibold rounded px-2 text-orange-600">
            PRO
          </div>
        </div>

        <div className="flex flex-col   items-center border shadow-xl transiton duration-300 hover:shadow-none bg-white w-60 h-60 rounded-lg p-4 text-center justify-center">
          <div className="text-3xl border-2 border-cyan-500 rounded-full p-3 ">
            <FaCloudversify />
          </div>
          <h2 className="font-semibold text-xl mt-4 ">Marketing</h2>
          <p className="text-xs  text-gray-500">
            Harness the Power of AI Tools to Drive Customer Acquisition,
            Retention, and Revenue Growth.
          </p>
          <Link
            href="./marketing"
            className="hover:opacity-70 transition duration-300 text-transperant gradient2 text-white rounded-md px-4 py-2 font-semibold mt-4"
          >
            Check Tools
          </Link>
        </div>

        <div className="flex flex-col   items-center border shadow-xl transiton duration-300 hover:shadow-none bg-white w-60 h-60 rounded-lg p-4 text-center justify-center">
          <div className="text-3xl  border-2 border-green-500 rounded-full p-3 ">
            <FaDelicious />
          </div>
          <h2 className="font-semibold text-xl mt-4 ">Blogging</h2>
          <p className="text-xs text-gray-500">
            Unlock New Levels of Productivity, Efficiency, and Scalability for
            your Blogs.
          </p>
          <Link
            href="./blogging"
            className="hover:opacity-70 transition duration-300 text-transperant gradient2 text-white rounded-md px-4 py-2 font-semibold mt-4"
          >
            Check Tools
          </Link>
        </div>
      </div>
      <div className="banner relative mx-4 sm:mx-20 bg-black min-h-screen my-8 sm:my-40 rounded-xl"></div>
      <div className="px-4 sm:px-20 py-12 bg-black">
        <h2 className="text-4xl uppercase text-white fontNue tracking-widest">
          Integrations
        </h2>
        <div className="w-32 h-1 mt-2 rounded-lg gradient1"></div>
        <div className="flex flex-wrap justify-between gap-2 my-6">
          <div className="flex items-center gap-4">
            <div className=" border-2 border-green-500 p-3 text-2xl text-white rounded-full">
              <FaCloudsmith />
            </div>
            <div>
              <h2 className="uppercase font-semibold text-white">Chatgpt 4</h2>
              <p className="text-sm text-gray-500">Open AI model based</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-cyan-500 p-3 text-2xl text-white rounded-full">
              <FaInstalod />
            </div>
            <div>
              <h2 className="uppercase font-semibold text-white">
                Time and Cost Savings
              </h2>
              <p className="text-sm text-gray-500">
                Eliminate manual work, increase efficiency{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 text-2xl text-white rounded-full">
              <FaMicrosoft />
            </div>
            <div>
              <h2 className="uppercase font-semibold text-white">Powerfull</h2>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div className="flex  sm:flex-row flex-col mt-4 flex-wrap gap-4">
          <div className="flex flex-[7]  flex-col gap-4 ">
            <div className="flex flex-col sm:flex-row text-white gap-4 gradient2 rounded-xl p-6">
              <div>
                <h2 className="uppercase font-semibold ">
                  Increased Efficiency and Productivity
                </h2>
                <p className="text-sm mt-2 text-gray-300">
                  AI tools automate repetitive tasks, allowing users to focus on
                  more strategic and creative work. By reducing manual effort
                  and accelerating processes, productivity can be significantly
                  enhanced.
                </p>
              </div>
              <Image
                width={100}
                alt="img"
                height={100}
                src="/../public/l1.png"
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col text-white sm:flex-row gap-4 gradient2 rounded-xl p-6">
              <div>
                <h2 className="uppercase font-semibold ">
                  Personalization and Customization
                </h2>
                <p className="text-sm mt-2 text-gray-300">
                  AI algorithms can learn from user behavior and preferences to
                  deliver personalized experiences. This could include
                  personalized recommendations, targeted marketing campaigns, or
                  customized user interfaces, improving user satisfaction and
                  engagement.
                </p>
              </div>
              <Image
                width={100}
                alt="img"
                height={100}
                src="/../public/l3.png"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-[3] flex-col text-white gradient1 rounded-xl p-6 gap-4">
            <Image
              width={200}
              alt="img"
              height={200}
              src="/../public/l2.png"
              className="rounded-md"
            />
            <div className="">
              <h2 className="uppercase font-semibold ">
                Improved Customer Experience
              </h2>
              <p className="text-sm mt-2 text-gray-300">
                Our AI-powered chatbots can provide 24/7 support, answer
                customer queries, and offer personalized assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner flex relative mx-4 sm:mx-20 bg-gray-900 min-h-screen my-10 sm:my-40 rounded-xl"></div>

      <div className="flex flex-wrap items-center mx-4 sm:mx-20 mb-20 gradient1 justify-between p-4 sm:px-12 sm:py-6 text-white rounded-xl">
        <div className="">
          <h2 className="uppercase font-semibold ">Monthly Newsletter</h2>
          <p className="text-sm mt-2 text-gray-200 max-w-xl">
            Stay in the loop with our monthly newsletter, packed with the latest
            updates, new features, exclusive offers, and exciting news.
          </p>
        </div>
        <form
          className="flex flex-row  sm:mt-0 w-full sm:w-[400px] mt-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="user_email"
            placeholder="Enter Email"
            className="flex-1 outline-none border-none text-black active:border-none rounded-tl-md rounded-bl-md"
          />
          <button
            type="submit"
            value="Send"
            className="flex-0 bg-black rounded-tr-md px-4  hover:opacity-70 transiton duration-300 rounded-br-md"
          >
            Submit
          </button>
        </form>
      </div>
      <footer className="px-4 sm:px-20">
        <div className="flex items-start gap-2  justify-between mb-4 flex-wrap">
          <div className="flex items-center gap-2 uppercase font-semibold ">
            <Image alt="img" width={40} height={40} src="/../public/logo.png" />
            <h2 className="text-xl">Future Tools</h2>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Resources</p>
              <Link
                href=""
                className="text-sm text-gray-600 hover:text-gray-900 transition duration-300"
              >
                <p>Marketting</p>
              </Link>
              <Link
                href=""
                className="text-sm text-gray-600 hover:text-gray-900 transition duration-300"
              >
                <p>Dovelopers</p>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Creator</p>
              <Link
                href="https://www.instagram.com/anurag_._chauhan/"
                className="text-sm text-gray-600 hover:text-gray-900 transition duration-300"
              >
                <p>Instagram</p>
              </Link>
              <Link
                href="https://www.buymeacoffee.com/anuragchauhan"
                className="text-sm text-gray-600 hover:text-gray-900 transition duration-300"
              >
                <p>Donate</p>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Legal Links</p>
              <Link
                href="../pages/privacypolicy"
                className="text-sm text-gray-600 hover:text-gray-900 transition duration-300"
              >
                <p>Privacy Policy</p>
              </Link>
              <Link
                href="../pages/terms"
                className="text-sm text-gray-600 hover:text-gray-900 transition duration-300"
              >
                <p>Terms</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-between border-t py-3 flex-wrap gap-2">
          <div className="text-gray-600 text-sm">
            © 2023 Future Tools™ . All Rights Reserved.
          </div>
          <div className="flex gap-8 ">
            <Link
              href="https://www.buymeacoffee.com/anuragchauhan"
              className="text-gray-600 text-2xl hover:text-gray-900 transition duration-300"
            >
              <SiBuymeacoffee />
            </Link>
            <Link
              href="https://www.instagram.com/anurag_._chauhan/"
              className="text-gray-600 text-2xl hover:text-gray-900 transition duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              href=""
              className="text-gray-600 text-2xl hover:text-gray-900 transition duration-300"
            >
              <MdMarkunreadMailbox />
            </Link>
          </div>
        </div>
      </footer>

      <div>
        <div
          onClick={() => {
            setAichat(false);
          }}
          className="fixed bg-black p-2 text-white text-2xl right-4 bottom-4 rounded-full"
        >
          <MdVoiceChat />
        </div>
        <div
          className={`flex flex-col bg-white w-[300px] transition h-screen right-0 bottom-0 fixed border shadow-xl z-[1000] ${
            aichat ? "hidden" : "block"
          }`}
        >
          <div className="p-3 border-b">
            <MdArrowBack
              onClick={() => {
                setAichat(true);
              }}
            />
          </div>
          <div className="flex-1 flex justify-center text-center items-center">
            <p>AI Chat will be avilable soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
