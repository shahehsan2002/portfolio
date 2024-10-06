
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {

  const [hasCopied, setHasCopied] = useState();
  const handleCopy = () => {
    navigator.clipboard.writeText("shahehsan2002@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* First Grid Item */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div className="mt-4">
              <p className="grid-headtext text-xl font-bold">Hey, I'm Ehsan!</p>
              <p className="grid-subtext text-gray-600 mt-2">
                With over a year of experience, I combine creativity and code to craft stunning digital experiences. My journey in web development revolves around bringing imagination to life in the form of dynamic 3D websites.
              </p>
            </div>
          </div>
        </div>

        {/* Second Grid Item */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid22.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">What I Do Best</p>
              <p className="grid-subtext">
                I specialize in building scalable, efficient applications with JavaScript and TypeScript, leveraging the powerful ecosystems of React and Next.js to deliver interactive and responsive interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Third Grid Item */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center ">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                Bridging Worlds with Code
              </p>
              <p className="grid-subtext">
                While I’m based in Bangladesh, my work knows no borders. I’ve collaborated with clients across the globe, delivering top-notch remote services, no matter the time zone.
              </p>
              <Button
                name="Get in touch"
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>

        {/* Fourth Grid Item */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid 3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Fuelled by a Passion for Problem Solving</p>
              <p className="grid-subtext">
                Coding is not just a skill—it’s my playground. I thrive on solving problems, whether they’re simple or complex, turning challenges into innovative solutions that drive results.
              </p>
            </div>
          </div>
        </div>

        {/* Fifth Grid Item */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top "
            />
            <div className="space-y-2">
              <p className="grid-headtext text-center">Let’s Collaborate</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  shahehsan2002@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
