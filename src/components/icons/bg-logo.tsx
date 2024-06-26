"use client";
import { SVGProps } from "react";
import { motion } from "framer-motion";

export const BgLogo = (props: SVGProps<SVGSVGElement>) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={210}
    height={187}
    fill="none"
    viewBox="0 0 210 187"
    style={{ width: "100%", height: "100%" }}
    initial={{ rotate: 360, scale: 0 }}
    animate={{ rotate: 0, scale: 1 }}
    className={props.className}
    aria-hidden="true"
    transition={{ ease: "backOut", duration: 1, delay: 1 }}
  >
    <path
      fill="url(#a)"
      d="M58.505 86.885c-2.701 4.64-9.406 4.638-12.103-.005L6.11 17.516C3.398 12.849 6.765 7 12.162 7h80.665c5.4 0 8.766 5.854 6.05 10.521L58.504 86.885Z"
    />
    <path
      fill="url(#b)"
      d="M163.283 86.504c-2.717 4.613-9.394 4.597-12.083-.028l-40.07-68.93c-2.716-4.673.665-10.533 6.071-10.522l80.586.157c5.408.01 8.758 5.888 6.012 10.55l-40.516 68.773Z"
    />
    <path
      fill="url(#c)"
      d="M111.184 176.357c-2.68 4.633-9.356 4.667-12.083.061l-40.63-68.629c-2.754-4.652.58-10.537 5.985-10.567l80.585-.443c5.408-.03 8.806 5.823 6.098 10.504l-39.955 69.074Z"
    />
    <path
      stroke="url(#d)"
      strokeDasharray="238 238"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M103.907 8.926 54.1 95.626a1 1 0 0 0 .867 1.498h100.739a1 1 0 0 0 .862-1.506l-50.932-86.7a1 1 0 0 0-1.729.008Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={105}
        y1={52.145}
        y2={52.145}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1263FF" />
        <stop offset={1} stopColor="#FF4040" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={209.88}
        x2={104.881}
        y1={52.046}
        y2={51.752}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4E47FF" />
        <stop offset={1} stopColor="#992B2B" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={105.246}
        x2={104.751}
        y1={186.711}
        y2={97.001}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4E47FF" />
        <stop offset={1} stopColor="#992B2B" />
      </linearGradient>
      <radialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 119.731 -139.118 0 105.346 64.682)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE714" />
        <stop offset={1} stopColor="#FF15E8" />
      </radialGradient>
    </defs>
  </motion.svg>
);
