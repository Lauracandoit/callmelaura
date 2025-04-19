// import { cx } from "@/src/utils";
// import Link from "next/link";
// import React from "react";

// const Category = ({ link = "#", name, active, ...props }) => {
//   return (
//     <Link
//       href={link}
//       className={cx(
//         "inline-block py-2 sm:py-3 px-6 sm:px-10  rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",
//         props.className, 
//         active ? "bg-dark text-light" : "bg-light text-dark"
//       )}
//     >
//       {name}
//     </Link>
//   );
// };

// export default Category;

import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 dark:border-light sm:py-3 px-6 sm:px-10 rounded-full font-semibold border-2 border-solid border-dark hover:scale-105 transition-all ease duration-200 text-sm sm:text-base m-2",
        props.className, 
        active ? " bg-dark text-light " : "bg-light text-dark"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;

