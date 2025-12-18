"use agent"

import React, { forwardRef } from "react";
import clsx from "clsx";

export interface UnderlineProps {
  ref?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;

}


const Underline = forwardRef<HTMLSpanElement, UnderlineProps>(
  (
    {
      children,
      className,
      onClick,
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        onClick={onClick}
        className={clsx(
          "block relative",
          className
        )}
      >
        {children}
      </span>
    );
  }
);

Underline.displayName = "Underline";

export default Underline;