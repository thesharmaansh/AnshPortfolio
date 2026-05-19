import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import Wrapper from "./Wrapper";
import { useInView } from "react-intersection-observer";
import Tilt from 'react-parallax-tilt'
import { skills } from '../utils/constants'


const SkillCard = ({ index, name, icon }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "exit"}
      variants={fadeIn("", "", index * 0.06, 0.1)}
    >
      <Tilt
        options={{
          max: 45, scale: 1, speed: 450
        }}
        className="bg-[#0e1226] rounded-xl sm:w-[140px] w-full h-full"
      >
        <div className='flex flex-col justify-center items-center w-[140px] h-full'>
          <img
            src={icon}
            alt={name}
            className='w-[120px] h-[120px] p-2 object-cover rounded-xl'
          />

          <h3 className='text-[#dddddd] py-3 font-semibold text-[14px]'>
            {name}
          </h3>
        </div>
      </Tilt>

    </motion.div>
  )
}

const Skills = () => {
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
          What i know
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-5 justify-center'>
        {skills.map((skill, index) => (
          <SkillCard
            key={`skill-${index}`}
            index={index}
            {...skill}
          />
        ))}
      </div>

    </>
  )
}

export default Wrapper(Skills, 'skills')