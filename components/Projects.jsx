import React from "react";
import leditImg from "../public/assets/projects/ledit.png";
import wnwaImg from "../public/assets/projects/wnwa.png";
import reentrancyImg from "../public/assets/projects/reentrancy.png";
import javascriptImg from "../public/assets/projects/javascript.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#C3688B]">
          Projects / Articles
        </p>
        <h2 className="py-4">What I&apos;ve Built/Written</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="L'edit"
            backgroundImg={leditImg}
            projectUrl="https://ledit-client.vercel.app"
            tech="Next JS, Express"
          />
          <ProjectItem
            title="WNWA NFT"
            backgroundImg={wnwaImg}
            projectUrl="https://wnwa.io"
            tech="NextJS, Solidity"
          />
          <ProjectItem
            title="Reentrancy Attack"
            backgroundImg={reentrancyImg}
            projectUrl="https://medium.com/@saratangajala/understanding-the-re-entrancy-attack-and-how-you-can-secure-your-contracts-from-it-1c89a7b0e31d"
            tech="Solidity Theory"
          />
          <ProjectItem
            title="Asynchronous Computation"
            backgroundImg={javascriptImg}
            projectUrl="https://medium.com/@saratangajala/understanding-javascripts-runtime-ac339b33f9d5"
            tech="Javascript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
