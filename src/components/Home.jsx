import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useHistory } from 'react-router-dom'; // Assuming you are using React Router
import Typewriter from 'typewriter-effect';

const Home = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // Navigate to "kelas work"
    history.push('work'); // Replace '/kelas-work' with the actual path you want to navigate to
  };

  return (
    <div name="home" className="w-full h-screen bg-gradient-to-l from-[#020617] to-[#0a37a1]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* ... (your existing code) */}
        <div>
          <button
            onClick={handleButtonClick}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
          >
            My Project
            <span className="group-hover:translate-x-1 duration-300">
              {" "}
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
