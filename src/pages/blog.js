import React from "react";
import { allBlogs } from "@/.contentlayer/generated/index.mjs";
import HomeCoverSection from "@/src/components/Blogs/BlogHome/BlogHomeCoverSection";
import FeaturedPosts from "@/src/components/Blogs/BlogHome/FeaturedPosts";
import RecentPosts from "@/src/components/Blogs/BlogHome/RecentPosts";

const blog = () => {
  console.log(allBlogs);
  return (
    <main>
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} /> 
    </main>
  );
};

export default blog;
