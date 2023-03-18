import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
    return (
        <>
            <Head>
                <title>Sarat Angajala | Resume</title>
                <meta
                    name="description"
                    content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
                />
                <link rel="icon" href="/fav.png" />
            </Head>

            <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
                <h2 className="text-center">Resume</h2>
                <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
                    <h2 className="text-center">Sarat Angajala</h2>
                    <div className="flex">
                        <a
                            href="https://www.linkedin.com/in/saratangajala/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedinIn
                                size={20}
                                style={{ marginRight: "1rem" }}
                            />
                        </a>
                        <a
                            href="https://github.com/SaratAngajalaoffl"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub
                                size={20}
                                style={{ marginRight: "1rem" }}
                            />
                        </a>
                    </div>
                </div>
                <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
                    <div className="hidden sm:block">
                        <p>
                            Infrastructure Design<span className="px-1">|</span>{" "}
                            Software Development <span className="px-1">|</span>{" "}
                            Problem Solving
                        </p>
                    </div>
                    <div className="block sm:hidden">
                        <p>Infrastructure Design</p>
                        <p className="py-2">Software Development</p>
                        <p>Complex Problem Solving</p>
                    </div>
                </div>
                <p>
                    I am a software developer with 2 years of experience in the
                    industry. I have worked as a full-stack developer and later
                    transitioned to a blockchain developer. As a founding member
                    of a blockchain firm, I led the development of
                    blockchain-based solutions and also assisted with web and
                    cloud requirements. I am a quick learner and have a passion
                    for learning new technologies. My experience includes
                    full-stack development, blockchain development, and cloud
                    infrastructure. My aim is to continue developing my skills
                    and contribute to the growth of the blockchain ecosystem.
                </p>

                {/* Skills */}
                <div className="text-center py-4">
                    <h5 className="text-center underline text-[18px] py-2">
                        Skills
                    </h5>
                    <p className="py-2">
                        <span className="font-bold">Technical Skills</span>
                        <span className="px-2">|</span> HTML
                        <span className="px-2">|</span>CSS
                        <span className="px-2">|</span>Javascript
                        <span className="px-2">|</span>Typescript
                        <span className="px-2">|</span>React
                        <span className="px-2">|</span>Next JS
                        <span className="px-2">|</span>SQL
                        <span className="px-2">|</span>NoSQL
                        <span className="px-2">|</span>Express
                        <span className="px-2">|</span>Flutter
                        <span className="px-2">|</span> Solidity
                        <span className="px-2">|</span> Hardhat
                        <span className="px-2">|</span> GoLang
                        <span className="px-2">|</span> AWS
                        <span className="px-2">|</span> Docker
                    </p>
                </div>

                <h5 className="text-center underline text-[18px] py-4">
                    Professional Experience
                </h5>
                {/* Experience */}
                <div className="py-6">
                    <p className="italic">
                        <span className="font-bold italic">Sensho</span>
                        <span className="px-2">|</span>Remote, Dubai
                    </p>
                    <p className="py-1 italic">
                        Blockchain - Fullstack Developer / Founding Member (2022
                        - Current)
                    </p>
                    <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
                        <li>
                            Designed and built a decentralised, easy to use QR
                            based crypto wallet.
                        </li>
                        <li>
                            Worked on integrating third party crypto libraries
                            from chainlink, crossmint and revise.
                        </li>
                        <li>
                            Orchestrated tech for high profile art & fashion
                            shows by enabling users to mint NFTs by just
                            scanning a QR code.
                        </li>
                        <li>
                            Successfully delivered on software development
                            contracts generating over $1 Million in revenue.
                        </li>
                    </ul>
                </div>

                {/* Personal Experience */}
                <div className="py-6">
                    <p className="italic">
                        <span className="font-bold italic">Haasyl</span>
                        <span className="px-2">|</span>Mumbai, IN
                    </p>
                    <p className="py-1 italic">
                        Fullstack Developer (2020 - 2022)
                    </p>
                    <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
                        <li>
                            Designed and built a micro loan platform that allows
                            early salary access and disbursed over 20Lac in two
                            months.
                        </li>
                        <li>
                            Integrated third party services like a payment
                            gateway, eKYC, BBPS, and NBFC for loan registration.
                        </li>
                    </ul>
                </div>

                {/*  */}
                <h5 className="text-center underline text-[18px] py-4">
                    Other Projects
                </h5>

                {/* Experience */}
                <div className="py-6">
                    <p className="italic">
                        <span className="font-bold">Skyee</span>
                        <span className="px-2">|</span> A decentralised video
                        sharing platform backed by the SKYEE token.
                    </p>
                    <p className="py-1 italic">Solidity, NextJS, Blockchain</p>
                </div>
                <div className="py-6">
                    <p className="italic">
                        <span className="font-bold">Cryptobase</span>
                        <span className="px-2">|</span> A Backend As A Service(BAAS) product tailored for web3 applications. 
                    </p>
                    <p className="py-1 italic">Golang</p>
                </div>
            </div>
        </>
    );
};

export default resume;
