import React, { useState } from "react";
import Image from "next/image";
import BsLogo from "../src/assets/logoSemiWhite.png";
import styles from "../../styles/Home.module.css";

function index() {
  return (
    <div className={styles.mindPlanContainer}>
      <div className="w-full h-full  flex">
        <Image
          //   loader={myLoader}
          src={BsLogo}
          alt="Picture of the author"
          width={500}
          height={500}
          style={{ margin: "auto", objectFit: "contain", marginTop: 20 }}
        />
        <div className="flex px-1">
          <div className=" absolute w-1/2 h-full left-0">
            <div className="h-1/2 ">
              <div className={styles.planCard11}>
                {/* <div className="p-3 overflow-auto opacity-50 text-slate-100 italic text-ellipsis ">
                  <p>
                    Basement Sports is going to drop 32,000 unique nfts for
                    Country & Player (1,000 for each of the World Cup qualifying
                    teams) on Day 1 of the 2022 World Cup, November 20th. Choose
                    yours and showcase these unique audio-visual designs on your
                    social media, and also use them in actual gameplay within
                    the free Basement Sports App. There has never been a soccer
                    fan club experience like this. By owning a country #NFT, you
                    will also get exclusive access to soccer content,
                    merchandise and VIP experiences that no other NFT offer!
                  </p>
                </div> */}
              </div>
            </div>
            <div className="h-1/2 ">
              <div className={styles.planCard1}>
                {/* <div className="p-3 opacity-50 text-slate-100 italic text-ellipsis overflow-auto">
                  In May 2020, we brought this concept to the world,
                  implementing a phased roll-out that started with America’s
                  Pastime, Baseball. Soccer and Hockey were quick to follow, and
                  Basketball is next up!
                </div>
                <div className="pl-3 text-xl">May 2020</div>
                <div className="pl-3 opacity-50 text-slate-100 italic text-ellipsis overflow-auto">
                  Basement Baseball entered the market with its iOS and Android
                  Apps.
                </div>

                <div className="pl-3 pt-3 text-xl">Summer 2020</div>
                <div className="pl-3 opacity-50 text-slate-100 italic text-ellipsis overflow-auto">
                  Basement Baseball Starter Kit made available for purchase.
                </div>

                <div className="pl-3 pt-3 text-xl">November 2021</div>
                <div className="pl-3 opacity-50 text-slate-100 italic text-ellipsis overflow-auto">
                  the 2-in-1 Soccer/Hockey Starter Kit hits the market.
                </div> */}
              </div>
            </div>
          </div>

          <div className="absolute w-1/2 h-full right-0">
            <div className="h-1/2 ">
              <div className={styles.planCard22}>
                {/* <div className="p-3 opacity-50 text-slate-100 italic text-ellipsis overflow-auto">
                  This is a 40 year Vision, of a little kid, who is now a big
                  kid – and has finally put all of the pieces together to bring
                  to life for others what made his childhood magical.
                </div> */}
              </div>
            </div>
            <div className="h-1/2 ">
              <div className={styles.planCard2}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default index;
