import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const Waifu = ({ target }) => {
  return (
    <motion.li
      id={ target.slice(12,target.length-4) }
      className={"waifu flex justify-center items-center border-solid border-2 border-rose-900 dark:border-rose-600 rounded-full h-24 w-80 sm:h-80 sm:w-24"}
      whileHover={{
        scale: 1.2,
        filter: "brightness(1)",
        transition: { duration: 0.5 },
      }}
      style={{
        backgroundImage: `url(${target})`,
      }}
    ></motion.li>
  );
};

Waifu.propTypes = {
  target: PropTypes.string.isRequired,
};
