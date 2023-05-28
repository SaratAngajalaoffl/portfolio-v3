import Image from "next/image";
import React from "react";
import projectImg from "../public/assets/projects/wnwa.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const unmutex = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">We Never Walk Alone: Football Nation</h2>
          <h3>
            A dynamic NFT collection project as part of 2022 FIFA World Cup.
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            2493 Dynamic-NFT&apos;s that are official digital replica&apos;s of
            Diego Maradona&apos;s &quot;Goal of the Century&quot; jersey, which
            was auctioned for $9m. Each Dynamic NFT represents a tier, country
            and player from the world cup, tracking their performance and
            memorialising the world cup on chain. Additionally, these NFT&apos;s
            are founding membership cards of We Never Walk Alone Football
            Nation, the world&apos;s first Football Network State.
          </p>
          <a href="https://wnwa.io" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Solidity
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default unmutex;
