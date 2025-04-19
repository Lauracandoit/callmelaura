import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group inline-block overflow-hidden relative rounded-xl laptop:h-[40vh] ">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-0
            "
      />
      <Image
        src={blog.image.filePath.replace("../public", ".")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="sm:aspect-square w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all duration-300 "
      />

      <div className="absolute bottom-0 mt-2 p-4 xs:p-6 sm:p-10 z-20 ">
        <Tag
          href={`/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          className="px-6 text-3xl sm:py-2 py-1 sm:px-3 !border  "
        />
        <Link href={`/blogs/${blog._raw.flattenedPath}`} className="mt-6">
          <h2 className="font-bold capitalize text-lg xs:text-base sm:text-lg md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 sm:text-lg"
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
