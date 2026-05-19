import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { projects } from '../utils/constants'
import github from "../assets/github.png";
import { fadeIn, textVariant } from '../utils/motion'
import Wrapper from "./Wrapper";
import Tilt from 'react-parallax-tilt'
import { useInView } from "react-intersection-observer";


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "exit"}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45, scale: 1, speed: 450
        }}
        className="bg-[#0e1226] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full 
              flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain'
              />

            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[#ff740a] font-bold text-[24px]'>
            {name}
          </h3>
          <p className='mt-2 text-[#b2b2b2] text-[14px] min-h-[120px] text-justify'>
            {description}
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p key={`tag-${index}`} className={`text-[14px] text-[#ff740a]`}>
              #{tag}
            </p>
          ))}
        </div>

      </Tilt>

    </motion.div>
  )
}

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "exit"}
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          MY WORK
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}

      </div>
    </>
  )
}

export default Wrapper(Projects, "projects")