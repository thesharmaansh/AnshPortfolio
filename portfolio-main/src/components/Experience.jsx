import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { experiences } from '../utils/constants';
import { textVariant } from '../utils/motion'
import Wrapper from "./Wrapper";
import { useInView } from "react-intersection-observer";
import "react-vertical-timeline-component/style.min.css";


const ExperienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0e1226",
        color: "#b2b2b2",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #0e1226" }}
      date={experience.date}
      dateClassName='text-[#b2b2b2] text-[14px] font-semibold'
      iconStyle={{ background: "#050816", border: "4px solid #ff740a", boxShadow: "none" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[85%] h-[85%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#ff740a] text-[24px] font-bold'>
          {experience.title}
        </h3>
        <p className='text-[#dddddd] text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className='text-[#b2b2b2]-100 sm:text-[12px] text-[10px] pl-1 tracking-wider text-justify'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Experience = () => {
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
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#ff740a">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Wrapper(Experience, "experience")