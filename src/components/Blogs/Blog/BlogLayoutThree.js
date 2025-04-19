import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const BlogLayoutThree = ({ blog, basePath = "."  }) => {
  return (
    <div className=" group flex flex-col items-center  text-dark">
      <Link href={blog.url} className=" h-full rounded-xl overflow-hidden">
        <Image
          src={blog.image.filePath.replace("../public", basePath)}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent font-semibold text-sm">
          {blog.tags[0]}
        </span>
        <Link href={`/blogs/${blog._raw.flattenedPath}`} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-lg laptop:text-xl dark:text-light">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 
                    dark:to-accentDark/50 bg-[length:0px_6px]
                    group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
        <span className="dark:text-light/50 capitalize font-semibold text-base text-dark/80">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
