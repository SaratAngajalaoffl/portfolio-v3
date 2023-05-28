import React from "react";
import unmutexImage from "../public/assets/projects/unmutex.png";
import haasylImg from "../public/assets/projects/haasyl.png";
import wnwaImg from "../public/assets/projects/wnwa.png";
import augmintImg from "../public/assets/projects/augmint.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#C3688B]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Augmint"
            backgroundImg={augmintImg}
            projectUrl="/augmint"
            tech="Crypto Wallet"
          />
          <ProjectItem
            title="WNWA NFT"
            backgroundImg={wnwaImg}
            projectUrl="/wnwa"
            tech="Dynamic NFTs"
          />
          <ProjectItem
            title="Haasyl"
            backgroundImg={haasylImg}
            projectUrl="/haasyl"
            tech="Fintech Application"
          />
          <ProjectItem
            title="Unmutex"
            backgroundImg={unmutexImage}
            projectUrl="/unmutex"
            tech="A live event discovery platform"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
