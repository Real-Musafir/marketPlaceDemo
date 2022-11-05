import React from "react";
import Image from "next/image";
import BsLogo from "../src/assets/messiBall.png";
import styles from "../../styles/Home.module.css";

export default function index() {
  const arr = [];
  return (
    <div className={styles.container}>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {Array(20)
          .fill(2)
          .map((i, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg  h-1/1.5 w-1/2 sm:w-2/3 hover:bg-slate-200"
            >
              <Image
                //   loader={myLoader}
                src={BsLogo}
                alt="Picture of the author"
                className="w-full"
                style={{ backgroundColor: "black", borderRadius: 3 }}
              />
              <div className="px-3 py-2 text-center">
                <div className="font-bold text-lg mb-2">Messi</div>
                <div className="font-bold text-sm mb-2">No. {index + 1}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
