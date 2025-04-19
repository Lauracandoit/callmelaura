import React from "react";
import { slug } from "github-slugger";
import Category from "./Category";

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-18 ">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${slug(cat)}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
