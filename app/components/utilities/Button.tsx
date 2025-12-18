"use agent"

import React, { forwardRef } from "react";
import Link from "next/link";
import clsx from "clsx";

export interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: string;
  rel?: string;
  prefetch?: boolean;
}

/**
 * Reusable Button component built on Next.js <Link>
 * - Accepts children
 * - Accepts className for styling
 * - Forwards ref (GSAP / animation hooks friendly)
 */
const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      href,
      children,
      className,
      onClick,
      target,
      rel,
      prefetch = true,
    },
    ref
  ) => {
    return (
      <Link
        href={href}
        prefetch={prefetch}
        ref={ref}
        onClick={onClick}
        target={target}
        rel={rel}
        className={clsx(
          "text-meta",
          className
        )}
      >
        {children}
      </Link>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;