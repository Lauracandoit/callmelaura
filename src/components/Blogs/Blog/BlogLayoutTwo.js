import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";
import { format } from "date-fns";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 tablet:gap-8 items-center text-dark laptop:h-[18vh] ">
      <Link
        href={blog.url}
        className="col-span-6 tablet:col-span-7 mobile:col-span-12 h-full rounded-xl overflow-hidden sm:col-span-12 "
      >
        <Image
          src={blog.image.filePath.replace("../public", ".")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square tablet:aspect-[3/2] w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 "
        />
      </Link>

      <div className="col-span-6 tablet:col-span-5 mobile:col-span-12 w-full sm:col-span-12 ">
        <span className="inline-block w-full uppercase text-accent dark:text-accentDark font-semibold sm:text-sm">
          {blog.tags[0]}
        </span>
        <Link
          href={`/blogs/${blog._raw.flattenedPath}`}
          className="inline-block my-1"
        >
          <h2 className="font-semibold capitalize sm:text-lg dark:text-light">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
