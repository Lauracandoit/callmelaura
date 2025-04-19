import { useRouter } from "next/router";
import { allBlogs } from "@/.contentlayer/generated/index.mjs";
import Tag from "../../components/Blogs/Elements/Tag";
import Image from "next/image";
import BlogDetails from "../../components/Blogs/Blog/BlogDetails";
import { slug } from "github-slugger";
import RenderMdx from "../../components/Blogs/Blog/RenderMdx";

export default function BlogPage() {
  const router = useRouter();
  const blog = allBlogs.find(
    blog => blog._raw.flattenedPath === router.query.slug
  );

  if (!blog) {
    // Handle case where blog is not found or router.query.slug is undefined
    return <p>Blog not found</p>;
  }

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${slug(blog.tags[0])}`}
            className="px-6 text-sm py-2"
          />
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal relative w-5/6">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60" />
        <Image
          src={blog.image.filePath.replace("../public", "../")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center "
        />
      </div>
      <BlogDetails blog={blog} slug={slug} />
      <div className="grid grid-cols-12 gap-16 tablet:gap-12 mobile:gap-10 sm:gap-5  mt-8 px-10 text-dark dark:text-light ">
        <div className="laptop:col-span-4 tablet:col-span-4 mobile:col-span-12 sm:col-span-12 ">
          <details
            className="border-[1px] border-solid border-dark dark:border-light rounded-lg p-4 sticky top-6 max-h-[90vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              {" "}
              Table of Content
            </summary>
            <ul className="mt-4 font-in text-base">
              {blog.toc.map((heading) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 dark:border-light/40
                    data-[level=three]:pl-4 flex items-center justify-start"
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-dark dark:bg-light mr-2 ">
                          {" "}
                          &nbsp;{" "}
                        </span>
                      ) : null}
                      <span className="hover:underline dark:text-light">
                        {" "}
                        {heading.text}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <RenderMdx blog={blog} />
      </div>
    </article>
  );
}
