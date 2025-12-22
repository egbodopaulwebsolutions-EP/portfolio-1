"use client";

import Image from "next/image";
import Container from "../utilities/container";

export default function BrandsSection() {
  return (
    <section className="bg-white pt-[var(--space-section-sm)] border-t border-neutral-100">
      <Container center={true} >
        <p className="text-xs text-center uppercase tracking-[0.2em] text-neutral-500 mb-6">
          Trusted by founders and growing brands
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-4 opacity-80">
          {[
            "/brands-trust/logo1.png",
            "/brands-trust/logo2.png",
            "/brands-trust/logo3.png",
            "/brands-trust/logo4.png",
            "/brands-trust/logo5.png",
          ].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt=""
              width={120}
              height={40}
              className="h-5 md:h-8 w-auto transition-opacity"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
