export const slideLeft = {
  exit: {
    x: "-100%",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const slideRight = {
  hidden: {
    opacity: 1,
    x: "100%",
  },
  show: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 1,
    y: "-100%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
