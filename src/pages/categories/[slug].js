import { useRouter } from "next/router";
import { allBlogs } from "@/.contentlayer/generated/index.mjs";
import React from "react";
import { slug } from "github-slugger";
import Categories from "@/src/components/Blogs/Blog/Categories";
import BlogLayoutThree from "@/src/components/Blogs/Blog/BlogLayoutThree";

const CategoriesPage = () => {
  const router = useRouter();
  const allCategories = ["all"];

  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (router.query.slug === "all") {
        return true;
      }
      return slugified === router.query.slug;
    });
  });
  return (
    <acticle className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-5xl  "> #{router.query.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowlegde
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={router.query.slug} />
      <div className="grid grid-cols-3 tablet:grid-cols-2 grid-rows-2 gap-16 mt-24 px-32">
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="col-span-1 mobile:col-span-3 tablet:col-span-1 sm:col-span-3 row-span-1 relative"
          >
            <BlogLayoutThree blog={blog} basePath="../" />{" "}
          </article>
        ))}
      </div>
    </acticle>
  );
};

export default CategoriesPage;
