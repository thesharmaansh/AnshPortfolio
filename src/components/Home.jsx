import React from 'react'
import { styles } from "../styles";
import { ReactTyped } from "react-typed";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";


const Home = () => {
  return (
    <section className="mx-auto pt-32 sm:pb-30 w-full">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-start items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 text-[#ff740a]'>
            <FaCircle className="text-[#ff740a] w-5 h-5" />
          </div>
          <div className='w-1 sm:h-80 h-80 orange-gradient -mt-1' />
        </div>

        <div className='flex flex-col justify-start items-start'>
          <h1 className={`${styles.heroHeadText} text-[#b2b2b2] pt-13 inline-block min-w-[300px]`}>
            Hi, I'm &nbsp;
            <span className="inline-block min-w-[140px]">
              <ReactTyped
                strings={[
                  "Ansh",
                  "Backend Developer",
                  "Coder",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
                className="text-[#ff740a]"
              />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-5 text-[#b2b2b2]-100 text-justify mx-auto`}>
            A backend developer passionate about building scalable, high-availability systems and solving real-world problems efficiently.
          </p>
          <br />
          <div className='mt-5'>
            <ul className='flex gap-4 items-center'>
              <li onClick={() => window.open("https://www.linkedin.com/in/ansh-sharma08/", "_blank")}>
                <FaLinkedin className='text-4xl hover:text-[#ff740a] cursor-pointer' />
              </li>
              <li onClick={() => window.location.href = "mailto:anshji08@gmail.com"}>
                <BiLogoGmail className='text-4xl hover:text-[#ff740a] cursor-pointer' />
              </li>
              <li>
                <button
                  onClick={() => window.open("https://drive.google.com/file/d/1CG_EEN_3Edv9hq26JhhE3FRu1Tg6E1Np/view?usp=sharing", "_blank")}
                  className='flex gap-2 items-center 
                  text-1.5xl cursor-pointer border-2 
                  px-3 py-1 rounded-lg
                  hover:bg-[#ff740a] hover:text-[#050816]'
                >
                  <FaDownload />
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home