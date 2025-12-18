"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

export default function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 12 });
  const springY = useSpring(y, { stiffness: 150, damping: 12 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.35);
    y.set(offsetY * 0.35);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY }}
      className=" inline-block"
    >
      <Link href={href}>
      {children}
      </Link>
    </motion.span>
  );
}
