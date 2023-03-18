import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import TypeScript from "../public/assets/skills/typescript.png";
import ReactImg from "../public/assets/skills/react.png";
import Ethereum from "../public/assets/skills/ethereum.png";
import Solidity from "../public/assets/skills/solidity.svg";
import Flutter from "../public/assets/skills/flutter.png";
import Hardhat from "../public/assets/skills/hardhat.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Polygon from "../public/assets/skills/polygon.png";
import Solana from "../public/assets/skills/solana.png";

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Skills
                </p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Html}
                                    width="64px"
                                    height="64px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Css}
                                    width="64px"
                                    height="64px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Javascript}
                                    width="64px"
                                    height="64px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={TypeScript}
                                    width="64px"
                                    height="64px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TypeScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={ReactImg}
                                    width="64px"
                                    height="64px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={NextJS}
                                    width="64px"
                                    height="64px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NextJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Flutter}
                                    width="64px"
                                    height="64px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Flutter</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Solidity}
                                    width="64px"
                                    height="64px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Solidity</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Hardhat}
                                    width="64px"
                                    height="56px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Hardhat</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Ethereum}
                                    width="64px"
                                    height="64px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Ethereum</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Polygon}
                                    width="64px"
                                    height="64px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Polygon</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Solana}
                                    width="64px"
                                    height="64px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Solana</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
