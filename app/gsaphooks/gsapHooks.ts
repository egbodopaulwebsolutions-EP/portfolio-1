// hooks/gsapHooks.ts
import { useLayoutEffect, useRef, useEffect, useState } from "react";
import gsap from "./gsapSetup";



/* ---------------------------------------------------
   SECTION FADE (matches your timeline)
   fade: autoAlpha 0 → 1
   y: 60 → 0
   scale: 0.96 → 1
   scrub: 0.6
----------------------------------------------------*/
export function useSectionFade() {
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0.9, y:100, scale: 0.66 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          overwrite: true,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

/* ---------------------------------------------------
   TEXT STAGGER (matches your staggerTl exactly)
   fade + y + blur
   stagger: 0.16
   scrub: true
----------------------------------------------------*/
export function useTextStagger(stagger = 0.16) {
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items: HTMLElement[] = Array.from(
      container.querySelectorAll(".gsap-text-item")
    );

    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 60, filter: "blur(2px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          stagger,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
          scrollTrigger: {
            trigger: container.closest(".gsap-service-section") ?? container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [stagger]);

  return ref;
}

/* ---------------------------------------------------
   MEDIA PARALLAX (video & image compatible)
   outer: y -20 → 20
   inner: y -40 → 40
   scrub: true
   (matches your working code)
----------------------------------------------------*/
export function useMediaParallax() {
  const containerRef = useRef<any>(null);
  const innerRef = useRef<any>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;

    if (!container || !inner) return;

    const triggerEl =
      container.closest(".gsap-service-section") ?? container;

    const ctx = gsap.context(() => {
      // outer slow movement
      gsap.fromTo(
        container,
        { y: "-20px" },
        {
          y: "20px",
          ease: "none",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // deep inner movement
      gsap.fromTo(
        inner,
        { y: "-40px" },
        {
          y: "40px",
          ease: "none",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return { containerRef, innerRef };
}

/* ---------------------------------------------------
   HOVER SCALE (matches your working pointerenter logic)
----------------------------------------------------*/
export function useHoverScale(scale = 1.03) {
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const enter = () =>
      gsap.to(el, {
        scale,
        duration: 0.6,
        ease: "power3.out",
        force3D: true,
      });

    const leave = () =>
      gsap.to(el, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        force3D: true,
      });

    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);

    return () => {
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
    };
  }, [scale]);

  return ref;
}

/* ---------------------------------------------------
   SCROLL PARALLAX (for AboutSection)
   - Y parallax: fromY → toY
   - fade in/out
   - works for ANY element (img, div, video)
----------------------------------------------------*/
export function useScrollParallax({
  fromY = 40,
  toY = -40,
  fade = true,
  fadeInStart = 0,
  fadeInEnd = 0.15,
  fadeOutStart = 0.85,
  fadeOutEnd = 1,
  scrub = true,
} = {}) {
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub,
        },
      });

      // Y movement
      tl.fromTo(
        el,
        { y: fromY },
        { y: toY, ease: "none" },
        0
      );

      // Fade in/out (matches Framer’s multi-keyframe fade)
      if (fade) {
        tl.fromTo(
          el,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: `${fadeInStart * 100}% bottom`,
              end: `${fadeInEnd * 100}% bottom`,
              scrub,
            },
          },
          0
        );

        tl.to(
          el,
          {
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: `${fadeOutStart * 100}% top`,
              end: `${fadeOutEnd * 100}% top`,
              scrub,
            },
          },
          0
        );
      }
    }, el);

    return () => ctx.revert();
  }, [fromY, toY, fade]);

  return ref;
}

/* ===========================================================================================
   HERO ANIMATION HOOKS (from your Home Hero)
   Converted from Framer Motion → GSAP, fully reusable.

   🔥 Included Hooks:
   - useSpotlight()       → radial gradient following cursor
   - useMagnetic()        → magnetic button hover warping
   - useCyclingWords()    → auto-rotating text array
   - useFloatingTilt()    → floating + 3D tilt mockup image

   ⚠️ DOES NOT INTERFERE WITH YOUR EXISTING HOOKS
   Aggressive comments included so you never get lost.
=========================================================================================== */

/* ----------------------------------------------------
   RADIAL SPOTLIGHT BACKGROUND (mouse-follow)
   - Returns a ref to attach to a full-screen DIV
   - GSAP handles the smoothing internally
----------------------------------------------------*/
export function useSpotlight() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Track mouse position
    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Animate CSS background position using GSAP
      gsap.to(el, {
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.12), transparent 70%)`,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return ref;
}

/* ----------------------------------------------------
   MAGNETIC BUTTON (GSAP version)
   - Attach the returned ref to ANY element
   - Creates magnetic pull based on cursor position
----------------------------------------------------*/
export function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength]);

  return ref;
}

/* ----------------------------------------------------
   CYCLING WORDS (GSAP version of AnimatePresence)
   - Pass an array of strings
   - Returns { ref, currentWord }
   - You animate opacity/y via GSAP for smooth swaps
----------------------------------------------------*/
export function useCyclingWords(
  words: string[],
  intervalMs = 2000
): { index: number; word: string } {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (!words.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [words, intervalMs]);

  return { index, word: words[index] };
}





/* ----------------------------------------------------
   FLOATING + 3D TILT MOCKUP (GSAP version)
   - Returns containerRef + innerRef
   - Container floats up/down
   - Inner rotates in X/Y on mouse move
----------------------------------------------------*/
export function useFloatingTilt({
  floatAmount = 8,
  floatDuration = 5,
  rotateStrength = 25,
} = {}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;

    if (!container || !inner) return;

    /* ---------------------------
       FLOAT ANIMATION (Y up/down)
    ----------------------------*/
    gsap.to(container, {
      y: -floatAmount,
      duration: floatDuration,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    /* ---------------------------
       3D TILT MOTION
    ----------------------------*/
    const move = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);

      gsap.to(inner, {
        rotateX: -offsetY / rotateStrength,
        rotateY: offsetX / rotateStrength,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(inner, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    container.addEventListener("mousemove", move);
    container.addEventListener("mouseleave", leave);

    return () => {
      container.removeEventListener("mousemove", move);
      container.removeEventListener("mouseleave", leave);
    };
  }, [floatAmount, floatDuration, rotateStrength]);

  return { containerRef, innerRef };
}

/* ===========================================================================================
   END HERO HOOKS
=========================================================================================== */


export function storyFixed(){
const scope = useRef(null);
useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>(".story-block");

      blocks.forEach((block) => {
        const title = block.querySelector(".story-img") as HTMLElement;
        const text = block.querySelector(".story-texts") as HTMLElement;

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

}