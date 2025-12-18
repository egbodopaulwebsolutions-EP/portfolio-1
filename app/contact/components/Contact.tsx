"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-[var(--space-section)] bg-[#0c0c0c] text-white overflow-hidden"
    >
      {/* Soft center glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

      {/* Cinematic vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_160px_rgba(0,0,0,0.85)]"></div>

      <div className="container max-w-3xl mx-auto relative">
        <div className="p-10 md:p-14 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10">

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Ready to build something people trust?
          </h2>

          <p className="text-neutral-300 mt-4 text-lg md:text-xl leading-relaxed">
            Share your idea. I’ll turn it into a clear, high-converting experience
            your customers instantly understand.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              className="px-6 py-3 rounded-xl bg-white text-black font-medium shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-neutral-200 transition-all"
              href="#contact"
            >
              Start a project
            </a>

            <a
              className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all"
              href="#work"
            >
              See work
            </a>
          </div>

          {/* Contact form */}
          <form className="mt-10 grid gap-5 text-left">

            <input
              className="p-4 rounded-xl bg-white/5 border border-white/10 placeholder-neutral-400 
              focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all"
              placeholder="Your name"
            />

            <input
              className="p-4 rounded-xl bg-white/5 border border-white/10 placeholder-neutral-400 
              focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all"
              placeholder="Email"
            />

            <textarea
              className="p-4 rounded-xl h-36 bg-white/5 border border-white/10 placeholder-neutral-400 
              focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all"
              placeholder="Tell me about your project"
            />

            <button
              type="submit"
              className="mt-2 w-full py-4 rounded-xl font-medium bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:bg-neutral-200 transition-all text-lg"
            >
              Send message
            </button>
          </form>
        </div>

        <p className="text-center text-neutral-400 mt-6">
          Prefer email?{" "}
          <span className="text-neutral-100">you@domain.com</span>
        </p>
      </div>
    </section>
  );
}
