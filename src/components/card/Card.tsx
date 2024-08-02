import * as React from "react";

import { cn } from "@/lib/utils";

const Card: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ref,
  ...props
}) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-[#2B2B2B]/5 bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
);

const CardHeader: React.FC<React.ComponentPropsWithRef<"div">> = (
  { className, ...props },
  ref,
) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
);
const CardTitle: React.FC<React.ComponentPropsWithRef<"div">> = (
  { className, ...props },
  ref,
) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
);

const CardDescription: React.FC<React.ComponentPropsWithRef<"div">> = (
  { className, ...props },
  ref,
) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);

const CardContent: React.FC<React.ComponentPropsWithRef<"div">> = (
  { className, ...props },
  ref,
) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;

const CardFooter: React.FC<React.ComponentPropsWithRef<"div">> = (
  { className, ...props },
  ref,
) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
