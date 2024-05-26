import { motion } from "framer-motion";

export type BounceCardProps = {
  className?: string;
  children: React.ReactNode;
};

export const BounceCard: React.FC<BounceCardProps> = ({
  className,
  children,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};
