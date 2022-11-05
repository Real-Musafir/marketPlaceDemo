import NavBar from "./component/NavBar";
import styles from "../../styles/Home.module.css";
import BsLogo from "./assets/logoSemiWhite.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />

      <div className="flex mt-10">
        <h1 className="md:text-9xl sm:text-7xl text-6xl  hover:text-purple-300 font-black italic hover:not-italic">
          B
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl   hover:text-purple-300 font-black italic hover:not-italic">
          A
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl   hover:text-purple-300 font-black italic hover:not-italic">
          S
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl   hover:text-purple-300 font-black italic hover:not-italic">
          E
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl  hover:text-purple-300 font-black italic hover:not-italic">
          M
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl  hover:text-purple-300 font-black italic hover:not-italic">
          E
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl  hover:text-purple-300 font-black italic hover:not-italic">
          N
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl  hover:text-purple-300 font-black italic hover:not-italic">
          T
        </h1>
      </div>

      <div className="flex absolute  right-0">
        <h1 className="md:text-9xl sm:text-7xl text-6xl  hover:text-purple-300 font-black italic hover:not-italic">
          S
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl   hover:text-purple-300 font-black italic hover:not-italic">
          P
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl   hover:text-purple-300 font-black italic hover:not-italic">
          O
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl   hover:text-purple-300 font-black italic hover:not-italic">
          R
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl  hover:text-purple-300 font-black italic hover:not-italic">
          T
        </h1>
        <h1 className="md:text-9xl sm:text-7xl text-6xl  hover:text-purple-300 font-black italic hover:not-italic">
          S
        </h1>
      </div>
    </div>
  );
}
