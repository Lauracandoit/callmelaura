import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Image from "next/image";
import msq from "@/public/images/msq.png";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  img,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%]  mx-auto flex flex-col items-center justify-between dark:text-light mobile:w-[80%] "
    >
      <div className="flex items-center justify-between w-full">
        <div className="">
          <LiIcon reference={ref} />
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className=""
          >
            <h3 className="capitalize font-bold text-2xl mobile:text-xl sm:text-lg">
              {position}&nbsp;
              <a
                href={companyLink}
                target="_blank"
                className="text-primary  dark:text-primaryDark capitalize"
              >
                @{company}
              </a>
            </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm">
              {time} | {address}
            </span>
            <p className="font-medium w-full sm:text-sm whitespace-pre-line">
              {work.split('\n').map((line, index) => (
                <span key={index}>
                 {line.trim()}
                 <br />
                 </span>
        ))}
            </p>
          </motion.div>
        </div>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="laptop:my-[100px] tablet:my-[40px] mobile:my-[30px]  text-dark sm:mt-[20px]">
      <h2 className="font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light tablet:text-6xl mobile:text-5xl sm:text-4xl sm:mb-10 sm:mt-20">
        Experience
      </h2>

      <div
        ref={ref}
        className=" mx-auto relative laptop:w-[90%] tablet:!w-full mobile:!w-full sm:!w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light mobile:w-[4px] sm:w-[2px] tablet:left-[28px] mobile:left-[35px] sm:left-[20px] "
        >
          {" "}
        </motion.div>

        <ul className="w-full flex flex-col items-start justify-between ml-4 mobile:ml-2 sm:!ml-5 ">
        <Details
            position="Salesforce Admin/ Developer"
            company="Upp Techonology"
            companyLink="https://www.upp-technology.com/"
            time="2024-Present"
            address="Hanoi, Vietnam"
            work={`- Collaborated with stakeholders to gather and analyze business requirements for Salesforce enhancements.
              - Conducted requirements and interviews with end users to define business needs.
              - Proposed scalable Salesforce solutions based on best practices, aligning with business goals.
              - Created SRS (Software Requirement Specification) and BRD (Business Requirement Document) documentation.
              - Writing test cases and performing system/UAT testing.
              - Prepared user guidance and training materials, and conducted knowledge transfer sessions for end-users and support staff.`}
          />

          <Details
            position="Customer Support Team Lead"
            company="MSQ"
            companyLink="https://www.msb.com.vn/"
            time="2021-Present"
            address="Sacramento, CA"
            work=" As a customer support team lead for SPOTIFY, I responsed for support our team member working on their tasks, as well as mine. I do QA, answer request support from team member and response for the engagement of the team, attendence of team members and also  Support for my manager to annouce the new update"
          />

          <Details
            position="Customer Relationship Specialist"
            company="MSB"
            companyLink="https://www.msb.com.vn/"
            time="2020-2021"
            address="Ha Noi, Vietnam"
            work="Selling multiple bank service. Installing multiple Social Media channels to grow the reach and service of our branch. Providing customer support via phone, emails and sms. Make sure branch reaches the highest satisfaction from customer "
          />

          <Details
            position="Customer Relationship Specialist"
            company="Manulife Vietnam"
            companyLink="https://www.manulife.com.vn/"
            time="2020-2021"
            address="Ha Noi, Viet Nam"
            work=" I sold insurance plan and organised multiples events in the company.  "
          />

          <Details
            position="Customer Relationship Specialist"
            company="B-RISE"
            companyLink="www.google.com"
            time="2019-2020"
            address="Ha noi, Viet Nam"
            work=" Making the marketing plan, working directly with clients and the team who responsed for each part of the project"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
