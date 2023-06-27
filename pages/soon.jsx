import React from "react";
import Link from "next/link";

function Soon() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card relative bg-black rounded-lg text-white p-12 text-center">
        <h2
          className="fontBlock text-4xl mb-2"
        >
          Sorry!
        </h2>
        <p>This feature will be added soon.</p>
        <div className="mt-6">
          <Link
            href="./"
            className="gradient1 text-white rounded-md px-4 py-2 text-md  hover:opacity-70 transition  duration-300"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Soon;
