"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

// const mdxComponents = {
//   Image,
// };

const mdxComponents = {
  Image: ({ src, alt, ...props }) => {
    // Manually adjust the image path if needed
    const adjustedSrc = src.replace(/^\/blogs\//, "./blogs/");

    return <Image src={adjustedSrc} alt={alt} {...props} />;
  },
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className="laptop:col-span-8 tablet:col-span-8 mobile:col-span-12 sm:col-span-12  font-in text-dark dark:text-light prose prose-lg max-w-max prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent dark:prose-blockquote:bg-accentDark/80 ">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
