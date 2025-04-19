import { sortBlogs } from "@/src/utils/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";
import Tag from "../Elements/Tag";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[2];
  const blogSlug = slug(blog._raw.flattenedPath);
  console.log({
    imagePath: blog.image.filePath,
  });

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-5 relative h-[60vh] sm:items-center sm:h-[85vh] sm:mx-10 laptop:mx-20 tablet:mx-20 mobile:mx-14 ">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            "
        />
        <Image
          src={blog.image.filePath.replace("../public", ".")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl"
          sizes="100vw"
          priority
        />

        <div className="w-full sm:p-6 mobile:p-8 tablet:p-12 laptop:p-16 flex flex-col items-start sm:items-center justify-center z-0 text-light">
          <Tag href={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
          <Link href={`/blogs/${blog._raw.flattenedPath}`} className="mt-6">
            <h1 className="font-bold capitalize sm:text-lg mobile:text-2xl tablet:text-3xl laptop:text-4xl  ">
              <span
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 sm:text-2xl sm:flex sm:text-center "
              >
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="sm:inline-block mt-4 sm:text-base mobile:text-lg tablet:text-xl laptop:text-2xl font-in sm:text-center sm:text-light/70 ">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
