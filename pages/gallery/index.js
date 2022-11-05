import React, { useState } from "react";
import Image from "next/image";
import BsLogo from "../src/assets/messiBall.png";
import styles from "../../styles/Home.module.css";

export default function index() {
  // Prettier-ignore
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  return (
    <div className={styles.container}>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {Array(20)
          .fill(2)
          .map((i, index) => (
            <div
              onClick={() => setShowDetailsModal(true)}
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
                <div className="text-black font-bold text-lg mb-2">Messi</div>
                <div className="text-black font-bold text-sm mb-2">
                  No. {index + 1}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      <div
        className={`${
          !showDetailsModal && "hidden"
        } $ fixed z-10 inset-0 overflow-y-auto`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {showDetailsModal && (
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
          )}

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  sm:w-full w-2/3">
            <div
              style={{ backgroundColor: "#faf6e0" }}
              className=" sm:p-6 sm:pb-4"
            >
              <div
                onClick={() => setShowDetailsModal(false)}
                className="text-black absolute text-2xl font-black top-0  right-3"
              >
                X
              </div>
              <div className="sm:flex sm:items-start">
                <Image
                  //   loader={myLoader}
                  src={BsLogo}
                  alt="Picture of the author"
                  className="w-full sm:w-1/2"
                  style={{ backgroundColor: "black", borderRadius: 3 }}
                />
                <div className="px-4">
                  <h1 className="italic text-black">
                    Basement Sports World Cup Nft
                  </h1>
                  <h1 className="text-black italic">Name: Messi</h1>
                  <p className="text-xs text-black pb-2">
                    Collector: 0x6a693a682f8cfea669c3170814d875107cb3accb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
