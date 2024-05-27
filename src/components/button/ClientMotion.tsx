"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export type ClientMotionProps = PropsWithChildren & {
  ref?: React.ForwardedRef<HTMLButtonElement>;
};

const ClientMotion: React.FC<ClientMotionProps> = (props, ref) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      ref={ref}
      {...props}
    />
  );
};

export default ClientMotion;
