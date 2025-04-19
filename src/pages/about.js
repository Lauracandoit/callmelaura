import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import codinggirl from "../../public/images/codinggirl.png";
import Skills from "@/src/components/Home/Skills";
import Layout from "@/src/components/Home/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Education from "@/src/components/Home/Education";
import Experience from "@/src/components/Home/Experience";
import TransitionEffect from "@/src/components/Home/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}> </span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title> CallmeLaura | About Page </title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <div className="grid w-full grid-cols-8 gap-4 laptop:gap-16 py-0">
            <div className=" col-span-8 flex flex-col items-start justify-start order-2 py-10 laptop:py-0 laptop:col-span-3 laptop:order-1 sm:col-span-8 sm:py-6 mobile:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography{" "}
              </h2>
              <p className=" text-dark font-medium dark:text-light ">
                {" "}
                Hello! I am Laura — a Salesforce professional with a passion for optimizing business processes and delivering user-centric digital solutions. With hands-on experience as a Salesforce Admin, Business Analyst, and Consultant, I specialize in designing scalable, efficient Salesforce implementations that align with business goals and enhance user experience.
              </p>

              <p className=" text-dark font-medium dark:text-light mt-5 mb-5">
              My background also includes leadership as a Customer Support Team Lead for a global streaming platform, where I developed a deep understanding of customer behavior, team dynamics, and operational efficiency. This dual perspective — both technical and customer-focused — enables me to bridge the gap between business needs and technology solutions.
              </p>
              
              <p className=" text-dark font-medium dark:text-light">
                {" "}
                Whether Im gathering and analyzing requirements, customizing Salesforce to solve real-world challenges, or training end users and supporting adoption, I bring a collaborative mindset and a strong focus on delivering value.{" "}
              </p>


              <p className=" text-dark font-medium dark:text-light mt-5 mb-5">
                {" "}
                What drives me is the opportunity to turn complex challenges into streamlined systems that empower users and support strategic growth. Im committed to continuous learning and staying current with Salesforce best practices and innovations — and Im always excited to connect with professionals who share the same drive for impact and improvement.{" "}
              </p>


              <p className=" text-dark font-medium dark:text-light">
                {" "}
                If youre looking for someone who blends Salesforce expertise, business analysis skills, and a proactive, people-first approach — Id love to connect and explore how I can support your next initiative.
              {" "}
              </p>
            </div>

            <div className="col-span-8 order-1 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light laptop:order-2 laptop:col-span-3 sm:col-span-8 mobile:col-span-8">
              <div className="absolute top-2 -right-3 -z-10 w-[102%] h-[101%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={codinggirl}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl  "
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="laptop:col-span-2 flex laptop:flex-col laptop:items-end justify-between dark:text-light tablet:!col-span-8 flex-row items-center order-3 sm:flex-row py-10 laptop:py-0 sm:col-span-8 sm:py-6  mobile:col-span-8">
              <div className="flex flex-col laptop:items-end justify-center text-dark dark:text-light items-center ml-2 ">
                <span className="inline-block text-7xl font-bold tablet:text-6xl sm:!text-xl mobile:text-3xl">
                  <AnimatedNumbers value={100} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 laptop:text-center tablet:text-lg mobile:text-base sm:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col laptop:items-end justify-center text-dark dark:text-light items-center ml-2 ">
                <span className="inline-block text-7xl font-bold tablet:text-6xl sm:!text-xl mobile:text-3xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 laptop:text-center tablet:text-lg mobile:text-base sm:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col laptop:items-end justify-center text-dark dark:text-light items-center ml-2 ">
                <span className="inline-block text-7xl font-bold tablet:text-6xl sm:!text-xl mobile:text-3xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 laptop:text-center tablet:text-lg mobile:text-base sm:text-sm">
                  years of experience
                </h2>
              </div>

            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
