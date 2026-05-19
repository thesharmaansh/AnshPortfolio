import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import Wrapper from "./Wrapper";
import { useInView } from "react-intersection-observer";
import profile from "../assets/profile.png";


const About = () => {
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
          Overview
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Introduction
        </h2>

        <div className='flex items-center justify-center mt-10 mb-5'>
          <img
            src={profile}
            alt="profile"
            className='w-50 h-50 rounded-full border-4 border-[#f0740a]'
          />
        </div>
      </motion.div>

      <motion.p
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "exit"}
        variants={fadeIn("", "", 0.1, 2)}
        className='mt-4 text-[#dddddd] text-[17px]  
        leading-[30px] text-justify mx-auto max-w-4xl'
      >
        Hi, I'm Ansh Sharma, a backend developer with 3+ years of experience designing and scaling high-availability RESTful APIs using Django, DRF, FastAPI, and Flask. Expert in PostgreSQL, Redis, JWT/OAuth2, containerized deployments with CI/CD on AWS and Azure. Proven record of optimizing microservices and cloud-native architectures, implementing observability stacks, and leading Agile teams for on-time delivery. Strong background in event-driven systems, serverless computing, and real-time IoT data pipelines.
      </motion.p>

    </>
  )
}

export default Wrapper(About, "about")