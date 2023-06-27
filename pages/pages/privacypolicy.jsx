import React from "react";
import Image from "next/image";
import Link from "next/link";
import {FaBattleNet} from "react-icons/fa"

function PrivacyPolicy() {
  return (
    <div>
      <header className="bg-white px-4 py-2 flex justify-between items-center shadow-md fixed w-full">
        <Link href="/">
          <div className="flex items-center gap-2 uppercase font-semibold">
            <Image alt="img" width={40} height={40} src="/../public/logo.png" />
            <h2 className="text-xl">Future Tools</h2>
          </div>
        </Link>
        <Link
          href="/"
          className=" gradient1 text-white rounded-md px-4 py-2 text-sm  hover:opacity-70 transition  duration-300"
        >
          Back Home
        </Link>
      </header>
      <div className=" flex flex-col p-4 sm:p-20 gap-2 pt-16">
        <h2 className="flex items-center gap-2 text-xl font-semibold underline ">
          <FaBattleNet/> Privacy Policy for Future Tools :
        </h2>
        <span className="text-sm my-4">
          This Privacy Policy outlines how personal information is collected,
          used, and protected when you use the AI Tools website ("Future
          Tools"). By accessing or using the Website, you consent to the
          collection, use, and disclosure of your personal information as
          described in this Policy.
        </span>
        <ul className=" flex flex-col  gap-3 sm:ml-4">
          <li>
            <p className="font-semibold">1. AInformation Collection</p>
            <div className="sm:ml-4">
              <span className="text-sm ">
                a. Personal Information: We may collect personal information,
                such as your name, email address, and contact details when you
                voluntarily provide it to us through the Website.
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 2. Use of Information</p>
            <div className="sm:ml-4">
              <span className="text-sm ">
                <ul>
                  <li>
                    a. We use the collected personal information to provide you
                    with access to the AI tools and related services offered on
                    the Website.
                  </li>
                  <li>
                    b. We may use your personal information to communicate with
                    you, respond to your inquiries, and provide customer
                    support.
                  </li>
                  <li>
                    c. We may use non-personal information for analytical
                    purposes, to improve the Website, and to enhance user
                    experience.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold">
              {" "}
              3. Cookies and Tracking Technologies
            </p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    a. We use cookies and similar tracking technologies to
                    enhance your experience on the Website and collect
                    information about how you use it.
                  </li>
                  <li>
                    b. You may choose to disable or manage cookies through your
                    browser settings. However, please note that certain features
                    of the Website may not function properly without cookies.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 4. Data Security</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    a. We take reasonable measures to protect your personal
                    information from unauthorized access, disclosure,
                    alteration, or destruction.
                  </li>
                  <li>
                    b. However, please be aware that no method of transmission
                    over the internet or electronic storage is completely
                    secure, and we cannot guarantee absolute security of your
                    data.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 5. Third-Party Disclosure</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    a. We may share your personal information with trusted
                    third-party service providers who assist us in operating the
                    Website and delivering the services. These third parties are
                    required to maintain the confidentiality and security of
                    your information.
                  </li>
                  <li>
                    b. We may also disclose your personal information when
                    required by law or in response to a valid legal request.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 6. Links to Third-Party Websites</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    The Website may contain links to third-party websites. We
                    are not responsible for the privacy practices or content of
                    such websites. We encourage you to review the privacy
                    policies of those websites before providing any personal
                    information.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 7. Children's Privacy</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    The Website is not intended for children under the age of
                    13. We do not knowingly collect or solicit personal
                    information from children. If you are a parent or guardian
                    and believe that your child has provided us with personal
                    information, please contact us, and we will take steps to
                    remove that information from our records.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 7. Changes to the Privacy Policy</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    We may update this Privacy Policy from time to time. Any
                    changes will be posted on this page with a revised "Last
                    Updated" date. We encourage you to review this Policy
                    periodically to stay informed about how we collect, use, and
                    protect your information.
                  </li>
                </ul>
              </span>
            </div>
          </li>

          <span className="font-semibold mt-8">
            By using the Website, you signify your acceptance of this Privacy
            Policy.
          </span>
        </ul>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
