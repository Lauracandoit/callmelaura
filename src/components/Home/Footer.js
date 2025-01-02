import React from 'react'
import { useForm } from "react-hook-form";
import {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon} from './Icons'

import {motion} from "framer-motion"
import Layout from './Layout'
import Link from 'next/link'


const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: {errors }, 

  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className='mt-10 mx-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col npm install react-hook-form
    items-center text-light dark:text-dark z-20'>
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:!text-2xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Feel free to reach out if you  have any questions! 
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>

        <div className="flex items-center mt-8">
        <a
          href="#"          
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedInIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="#"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="#"
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="#"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full mt-16 tablet:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row tablet:flex-col items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>

        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a href="https://devdreaming.com" className="underline" target="_blank">
            Wendy
          </a>
        </div>
      </div>
      </footer>
  )
}

export default Footer
