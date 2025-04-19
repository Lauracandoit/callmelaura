import React from "react";
import { sortBlogs } from "@/src/utils/index";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full sm:mt-24 mt-24 mobile:mt-32 px-20 mobile:px-14 tablet:px-24 sm:px-10 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl md:text-4xl text-dark dark:text-light sm:text-center">
        Featured Posts
      </h2>

      <div className="grid grid-cols-2 tablet:grid-cols-1 grid-rows-2 gap-6  mt-10 sm:mt-16 ">
        <article className="laptop:col-span-1 tablet:col-span-2 mobile:col-span-2 sm:col-span-2 w-full h-full row-span-2 relative ">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="laptop:col-span-1 tablet:col-span-2 mobile:col-span-1 sm:col-span-2 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[0]} />
        </article>
        <article className="laptop:col-span-1 tablet:col-span-2 mobile:col-span-1 sm:col-span-2 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};
export default FeaturedPosts;
