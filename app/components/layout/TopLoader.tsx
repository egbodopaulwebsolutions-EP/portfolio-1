"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // First load + refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // initial load illusion

    return () => clearTimeout(timer);
  }, []);

  // Route changes
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 z-[9999999] h-[2px] w-full pointer-events-none">
      <div
        className={`
          h-full bg-indigo-500
          transition-all duration-300 ease-out
          ${loading ? "w-[90%] opacity-100" : "w-full opacity-0"}
        `}
      />
    </div>
  );
}
