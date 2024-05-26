"use client";

import { motion } from "framer-motion";
import { PropsWithChildren, forwardRef } from "react";

export type ClientMotionProps = PropsWithChildren;

const ClientMotion = forwardRef<HTMLButtonElement, ClientMotionProps>(
  (props, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        ref={ref}
        {...props}
      />
    );
  }
);

ClientMotion.displayName = "ClientMotion";

export default ClientMotion;
