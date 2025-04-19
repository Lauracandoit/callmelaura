import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-24 h-16 sm:w-20 sm:h-12 bg-dark text-light flex items-center justify-center rounded-full text-2xl sm:text-xl text-bold border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        {" "}
        Laura{" "}
      </MotionLink>
    </div>
  );
};

export default Logo;
