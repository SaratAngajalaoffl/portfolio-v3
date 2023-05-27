import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#C3688B]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As a software developer with two years of experience in the
            industry, I have a strong background in both full-stack and
            blockchain development. I am passionate about exploring and
            mastering new technologies, and I thrive in fast-paced environments.
          </p>
          <p className="py-2 text-gray-600">
            My career began with web development in 2020, where I managed the
            tech for multiple e-commerce websites for an IT solutions agency. In
            early 2021, I joined an EWA fintech company, where I gained valuable
            experience building robust financial infrastructure and integrating
            multiple financial solutions.
          </p>
          <p className="py-2 text-gray-600">
            Later in 2021, I transitioned to blockchain technology, which piqued
            my interest, and I was fortunate to join a blockchain firm as a
            founding member. Here, I had the opportunity to lead the development
            of blockchain-based solutions and assist with web and cloud
            requirements.
          </p>
          <p className="py-2 text-gray-600">
            My experience includes expertise in wallet technologies, L2
            cross-chain protocols, dynamic NFTs, and working with ERC20 tokens.
            I have also contributed to several opensource blockchain projects,
            helping them with their Web3 requirements.
          </p>
          <p className="py-2 text-gray-600">
            Going forward, my aim is to continue developing my skills and
            contribute to the growth of the blockchain ecosystem.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
