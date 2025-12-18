"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "../../gsaphooks/gsapSetup";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type workDone = {
  title: string;
  image: string;
  description: string;
  achievement: string;
};

type Props = {
  items: workDone[]; // 👈 receiving an array
};

export default function CS_Milestones({ items }: Props) {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>(".story-block");

      blocks.forEach((block) => {
        const title = block.querySelector(".story-title") as HTMLElement;
        const text = block.querySelector(".story-text") as HTMLElement;

        gsap.fromTo(
          title,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          text,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={scope} className="w-full relative bg-white">

      {/* SECTION HEADER */}
      <div className="max-w-5xl mx-auto text-center px-6 py-[var(--space-section)] pb-16">
        <p className="text-[var(--gray-600)] text-xl font-(family-name:--font-jetbrains) tracking-tight">
          Milestones Acheived
        </p>



        <div className="mt-10 w-full h-[2px] bg-gradient-to-r 
                        from-transparent via-[var(--color-primary)] to-transparent"></div>
      </div>

      {/* STORY BLOCKS For Case study page */}
      {items.map((sec, i) => (
        <div
          key={i}
          className="story-block min-h-screen py-32 px-6 md:px-24 flex flex-col md:flex-row gap-20 relative"
        >

          {/* BIG BACKGROUND NUMBER */}
          <div className="absolute inset-0 flex items-start pointer-events-none select-none">
            <span className="text-[22vw] md:text-[14vw] font-black text-green-100 leading-none
              opacity-50 pl-4 md:pl-12">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="md:w-1/2 relative z-10">
            <h3 className="story-title sticky top-32 text-5xl md:text-7xl font-extrabold 
              bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-600">

              <img className="max-h-[50vh]" src={sec.image} alt="test" />
            </h3>
          </div>

          <div className="story-text md:w-1/2 flex flex-col gap-10 text-xl leading-relaxed relative z-10">
            <h2 className="h2">{sec.title}</h2>
            <p className="text-neutral-700 p">{sec.description}</p>
            <p className="text-neutral-700 p">{sec.achievement}</p>
          </div>

        </div>
      ))}
    </section>
  );
}
