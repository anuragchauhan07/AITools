import React from "react";
import Image from "next/image";
import Link from "next/link";

function Terms() {
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
          <FaBattleNet /> Terms and Conditions for FutureTools :
        </h2>
        <span className="text-sm my-4">
          These Terms and Conditions govern the use of the AI Tools website
          ("Future Tools"). Please read this Agreement carefully before
          accessing or using the Website. By accessing or using the Website, you
          agree to be bound by these Terms and Conditions. If you do not agree
          with any part of these terms, you must not access or use the Website.
        </span>
        <ul className=" flex flex-col  gap-3 sm:ml-4">
          <li>
            <p className="font-semibold">1. Acceptance of Terms</p>
            <div className="sm:ml-4">
              <span className="text-sm ">
                By accessing or using the Website, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and
                Conditions, as well as any additional guidelines, rules, or
                policies posted on the Website.
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 2. Use of the Website</p>
            <div className="sm:ml-4">
              <span className="text-sm ">
                <ul>
                  <li>
                    a. The Website provides access to AI tools and related
                    information. You may use the Website for lawful purposes
                    only.
                  </li>
                  <li>
                    b. You agree not to use the Website in any way that may
                    interfere with its normal operation, or infringe upon the
                    rights of other users or third parties.
                  </li>
                  <li>
                    c. You are solely responsible for any content you upload,
                    transmit, or share through the Website.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 3. Intellectual Property</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    a. The Website and its contents, including but not limited
                    to text, graphics, images, logos, trademarks, and software,
                    are the property of the Website owner or its licensors and
                    are protected by applicable intellectual property laws.
                  </li>
                  <li>
                    b. You may not modify, reproduce, distribute, display, or
                    create derivative works of any part of the Website without
                    the prior written consent of the Website owner.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 4. Privacy Policy</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    a. The Website collects and processes personal information
                    in accordance with its Privacy Policy. By using the Website,
                    you consent to the collection and processing of your
                    personal information as described in the Privacy Policy.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 5. Third-Party Links and Content</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    a. The Website may contain links to third-party websites or
                    resources. These links are provided for your convenience,
                    and the inclusion of any link does not imply endorsement by
                    the Website owner.
                  </li>
                  <li>
                    b. The Website owner is not responsible for the availability
                    or accuracy of any third-party content accessed through the
                    Website. You acknowledge and agree that your use of any
                    third-party content is at your own risk.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 6. Disclaimer of Warranties</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    a. The Website and its content are provided on an "as is"
                    and "as available" basis. The Website owner makes no
                    warranties, express or implied, regarding the Website's
                    operation, accuracy, or availability.
                  </li>
                  <li>
                    b. The Website owner does not warrant that the Website will
                    be free from viruses, malware, or other harmful components.
                    You are responsible for implementing appropriate security
                    measures to protect your own devices.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 7. Limitation of Liability</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    a. To the maximum extent permitted by law, the Website owner
                    shall not be liable for any direct, indirect, incidental,
                    consequential, or special damages arising out of or in any
                    way connected with the use of or inability to use the
                    Website.
                  </li>
                  <li>
                    b. The Website owner's total liability, whether in contract,
                    tort, or otherwise, shall not exceed the amount paid by you,
                    if any, for accessing the Website.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 7. Limitation of Liability</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    a. To the maximum extent permitted by law, the Website owner
                    shall not be liable for any direct, indirect, incidental,
                    consequential, or special damages arising out of or in any
                    way connected with the use of or inability to use the
                    Website.
                  </li>
                  <li>
                    b. The Website owner's total liability, whether in contract,
                    tort, or otherwise, shall not exceed the amount paid by you,
                    if any, for accessing the Website.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 8. Modification and Termination</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                <ul>
                  <li>
                    a. The Website owner reserves the right to modify or
                    terminate the Website, in whole or in part, at any time
                    without prior notice.
                  </li>
                  <li>
                    b. The Website owner may also modify these Terms and
                    Conditions at any time by posting the updated version on the
                    Website. Your continued use of the Website after any such
                    changes constitutes your acceptance of the modified terms.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 9. Governing Law and Jurisdiction</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                This Agreement shall be governed by and construed in accordance
                with the laws of the jurisdiction where the Website owner is
                located. Any legal actions or proceedings arising out of or
                relating to this Agreement shall be brought exclusively in the
                competent courts of that jurisdiction.
              </span>
            </div>
          </li>
          <li>
            <p className="font-semibold"> 10. Entire Agreement</p>
            <div className="sm:ml-4">
              <span className="text-sm">
                This Agreement constitutes the entire agreement between you and
                the Website owner regarding the use of the Website and
                supersedes any prior or contemporaneous understandings or
                agreements.
              </span>
            </div>
          </li>
          <span className="font-semibold mt-8">
            By accessing or using the Website, you acknowledge that you have
            read, understood, and agree to be bound by these Terms and
            Conditions.
          </span>
        </ul>
      </div>
    </div>
  );
}

export default Terms;
