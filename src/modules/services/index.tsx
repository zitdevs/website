"use client";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/icons/dynamic";
import { Button } from "@/components/button/Button";

export const Services = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Innovative Solutions
          <span className="text-slate-400"> for a Digital World</span>
        </h2>
        <Button>Learn more</Button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-6 lg:col-span-5">
          <CardTitle>
            <span className="flex items-center gap-2 justify-center">
              Software Development <DynamicIcon name="code" aria-hidden />
            </span>
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-secondary to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50 text-sm">
              We create custom software to meet your business needs, handling
              the entire development lifecycle from consultation to deployment.
              Our agile approach ensures flexibility, rapid iterations, and
              continuous improvement.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-6 lg:col-span-7">
          <CardTitle>
            <span className="flex items-center gap-2 justify-center">
              Web Development <DynamicIcon name="globe" aria-hidden />
            </span>
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-primary to-slate-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50 text-sm">
              We create responsive websites, develop robust e-commerce
              platforms, and implement powerful CMS solutions for easy,
              non-technical content management.
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-6 lg:col-span-7">
          <CardTitle>
            <span className="flex items-center gap-2 justify-center">
              Mobile App Development
              <DynamicIcon name="tablet-smartphone" aria-hidden />
            </span>
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50 text-sm">
              We develop high-performance iOS and Android apps with user-centric
              designs and seamless system integration. We also provide ongoing
              maintenance and support to ensure smooth operation.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-6 lg:col-span-5">
          <CardTitle>
            <span className="flex items-center gap-2 justify-center">
              Consulting and Strategy
              <DynamicIcon name="brain" aria-hidden />
            </span>
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-fuchsia-600 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50 text-sm">
              We provide strategic technology consulting, project management
              services, and innovation workshops to help you make informed
              decisions, complete projects efficiently, and drive growth and
              innovation.
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

export type BounceCardProps = {
  className?: string;
  children: React.ReactNode;
};

const BounceCard: React.FC<BounceCardProps> = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
