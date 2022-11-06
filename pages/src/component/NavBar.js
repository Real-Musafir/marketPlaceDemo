import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import BsLogo from "../assets/logoSemiWhite.png";
import styles from "../../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

// for brand icons
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { pathname } = useRouter();

  return (
    <div>
      <Head>
        <title>Basement Sports</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav style={{ backgroundColor: "#faf6e0" }} className="w-full">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image
                  //   loader={myLoader}
                  src={BsLogo}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                  style={{ backgroundColor: "black", borderRadius: 3 }}
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 bg-gray-800 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className={styles.navBarText}>
                  <Link
                    className={`italic hover:text-gray-900 ${
                      pathname === "/" ? "text-red-500" : null
                    }`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className={styles.navBarText}>
                  <Link
                    className={`italic hover:text-gray-900 ${
                      pathname === "/gallery" ? "text-red-500" : null
                    }`}
                    href="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
                <li className={styles.navBarText}>
                  <Link
                    className={`italic hover:text-gray-900 ${
                      pathname === "/mindplan" ? "text-red-500" : null
                    }`}
                    href="/mindplan"
                  >
                    Mind Plan
                  </Link>
                </li>
                <li className={styles.navBarText}>
                  <Link
                    className={`italic hover:text-gray-900 ${
                      pathname === "/about" ? "text-red-500" : null
                    }`}
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>

                <li className={styles.navBarText}>
                  <Link href="https://twitter.com/_BasementSports?t=EiQC32SI3YwQ7BqIGqWcmA&s=31">
                    <FontAwesomeIcon icon={faTwitter} color="gray" />
                  </Link>
                </li>

                <li className={styles.navBarText}>
                  <Link href="https://www.youtube.com/channel/UC-1Pco3PIWOawKrYLIM3inw">
                    <FontAwesomeIcon icon={faYoutube} color="gray" />
                  </Link>
                </li>
                <li className={styles.navBarText}>
                  <Link href="https://www.facebook.com/basementsportsapp">
                    <FontAwesomeIcon icon={faFacebook} color="gray" />
                  </Link>
                </li>

                <li className={styles.navBarText}>
                  <Link href="https://www.instagram.com/accounts/login/?next=%2F_basementsports%2F">
                    <FontAwesomeIcon icon={faInstagram} color="gray" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
