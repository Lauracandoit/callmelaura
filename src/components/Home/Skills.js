import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light tablet:py-2 tablet:px-4 sm:text-sm mobile:py-1.5 mobile:px-3 sm:bg-transparent sm:dark:bg-transparent  sm:text-dark sm:dark:text-light sm:font-bold'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl laptop:mt-64 w-full text-center text-dark dark:text-light tablet:mt-32 tablet:text-6xl sm:text-5xl sm:mb-10 sm:mt-20">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark laptop:h-[80vh] mobile:h-[60vh] sm:h-[50vh] laptop:bg-circularLightLg tablet:dark:bg-circularDarkLg mobile:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm sm:mx-3">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light tablet:p-6 mobile:p-4 sm:text-xs sm:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="25vw" y="20vw" />
        <Skill name="Javascript" x="30vw" y="3vw" />
        <Skill name="ReactJS" x="0vw" y="15vw" />
        <Skill name="NextJs" x="10vw" y="5vw" />
        <Skill name="Rest API" x="10vw" y="-18vw" />
        <Skill name="CSS" x="20vw" y="-10vw" />
        <Skill name="Jquery" x="-15vw" y="-20vw" />
        <Skill name="Problem Solving" x="-29vw" y="-8vw" />
        <Skill name="QA" x="-15vw" y="5vw" />
        <Skill name="Organization Skills" x="-20vw" y="20vw" />
      </div>
    </>
  );
};

export default Skills;
