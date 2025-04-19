import React from "react";
import { sortBlogs } from "@/src/utils/index";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-20 mobile:px-14 sm:px-10 flex flex-col items-center justify-center ">
      <div className="flex w-full justify-between sm:flex-col sm:text-center ">
        <h2 className="inline-block font-bold capitalize text-4xl text-dark dark:text-light sm:text-3xl  ">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent underline underline-offset-2 text-lg"
        >
          view all
        </Link>
      </div>
      <div className="grid grid-cols-3 mobile:grid-cols-1 sm:grid-cols-1 grid-rows-3 laptop:gap-16 tablet:gap-x-10 gap-y-16 tablet:mt-10 laptop:mt-14 sm:mt-10 mobile:mt-10 ">
        {sortedBlogs.slice(5, 11).map((blog, index) => {
          return (
            <aritcle key={index} className="col-span-1 row-span-1 relative ">
              <BlogLayoutThree blog={blog} basePath="." />
            </aritcle>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
