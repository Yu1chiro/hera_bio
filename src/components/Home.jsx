import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-l from-[#020617] to-[#0a37a1]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white text-lg">Hello my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
          Hera
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Canva designer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Junior Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Japanese Education Student")
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-white text-lg py-4 leading-8">
        I'm junior web developer and Japanese language education student, let's be friends.🖐️
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold">
            My Project{" "}
            <span className="group-hover:translate-x-1 duration-300">
              {" "}
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;