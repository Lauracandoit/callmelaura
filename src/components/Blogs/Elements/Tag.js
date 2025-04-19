import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";

const Tag = ({ name, ...props }) => {
  const tagSlug = slug(name);

  return (
    <Link
      href={`/categories/${tagSlug}`}
      className={cx(
        "inline-block py-2 sm:py-3 px-6 sm:px-10  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;

