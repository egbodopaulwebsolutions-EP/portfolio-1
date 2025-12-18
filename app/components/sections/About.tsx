"use client";

import Container from "../utilities/container";
import TripleRingImage from "../utilities/TriColorCircle";
import Underline from "../utilities/Underline";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative py-[var(--space-section)]">
      <Container size="narrow">
        <article className="space-y-24">
          {/* -------------------------------------------------
              HERO
          -------------------------------------------------- 
          <header className="space-y-6 text-center">
            <h1 className="text-display h1 tracking-tight">
              Your website isn’t the product.
              <br />
              <span className="text-[var(--color-secondary)]">
                It’s how people decide whether to trust you.
              </span>
            </h1>
          </header>*/}

          {/* -------------------------------------------------
              INTRO
          -------------------------------------------------- */}
          <section className="space-y-6 text-lead">
            <div className="flex flex-row justify-center items-center">
            <p>
              What’s always mattered more to me is how things connect, how ideas
              turn into systems, how structure creates clarity, and how small
              decisions affect real people on the other side of a screen.
            </p>
            <span className="block">
              <TripleRingImage src="/media/profile-egbodo-paul.png" alt="profile image" size={70}/>
              </span>
            </div>
            <p>
              Over time, I realized that most websites don’t struggle because of
              bad design or code. They struggle because the message isn’t clear
              or communicating to users.
            </p>

            <p>
              <Underline className="inline-block italic underline-cust">
                That’s where I do my best work.
              </Underline>
            </p>
          </section>

          {/* -------------------------------------------------
              HOW I WORK
          -------------------------------------------------- */}
          <section className="space-y-6">
            <h2 className="h3 text-display">How I work</h2>

            <p className="text-lead">
              I help businesses, startups, and professionals explain what they
              do in a way their customers can understand quickly and
              confidently — without pressure, gimmicks, or complexity.
            </p>

            <p className="text-lead">
              Before design or development, I focus on what the business
              actually offers, who it’s for, and what someone needs to feel
              confident moving forward.
            </p>

            <p className="text-lead">
              From there, design becomes intentional, structure starts to make
              sense, and development stays clean and maintainable.
            </p>
          </section>

          {/* -------------------------------------------------
              PHILOSOPHY
          -------------------------------------------------- */}
          <section className="space-y-6">
            <h2 className="h3 text-display">A simple philosophy</h2>

            <p className="text-lead">
              I don’t believe in treating people as numbers, clicks, or
              conversions. People spend hard-earned money when they understand
              something and trust it.
            </p>

            <p className="text-lead">
              That’s why my work prioritizes clarity over cleverness, calm over
              noise, and trust over pressure. When those things are in place,
              results tend to follow naturally.
            </p>
          </section>

          {/* -------------------------------------------------
              EXPERIENCE
          -------------------------------------------------- */}
          <section className="space-y-6">
            <h2 className="h3 text-display">Experience</h2>

            <p className="text-lead">
              I’ve worked on custom websites, Shopify stores and customizations,
              focused landing pages, and SEO-ready site structures built for
              long-term clarity.
            </p>

            <p className="text-lead">
              Some projects required learning on the way. Others required
              careful planning before touching code. In all of them, the
              responsibility was the same — build something stable,
              thoughtful, and respectful of the people using it.
            </p>
          </section>

          {/* -------------------------------------------------
              WHO I’M FOR
          -------------------------------------------------- */}
          <section className="space-y-6">
            <h2 className="h3 text-display">Who I’m for</h2>

            <p className="text-lead">
              I work best with founders and teams who care about their clients’
              experience, not just how the brand looks.
            </p>

            <ul className="list-disc list-inside marker:text-[var(--color-primary)] text-lead space-y-2">
              <li>You have something real to offer</li>
              <li>You want your website to feel credible and intentional</li>
              <li>You care about how people understand your business</li>
              <li>You value clarity</li>
            </ul>
          </section>

          {/* -------------------------------------------------
              NOT FOR
          -------------------------------------------------- */}
          <section className="space-y-6">
            <h2 className="h3 text-display">Who I’m probably not for</h2>

            <ul className="list-disc list-inside  marker:text-[var(--color-primary)] text-lead space-y-2">
              <li>You want the cheapest option above all else</li>
              <li>You want to copy competitors without thinking</li>
            </ul>
          </section>

          {/* -------------------------------------------------
              CLOSE
          -------------------------------------------------- */}

          <section className="">
                  <Container>
                    <blockquote
                      data-fade
                      className="mt-20 max-w-3xl border-l-4 border-[var(--color-secondary-support)] pl-6 italic text-lead"
                    >
                    I don’t claim to know everything. What I do bring is strong
              research and questioning skills, systems-level thinking, the
              ability to learn fast, and genuine care for building things that
              make sense.
                    </blockquote>
                  </Container>
                </section>

          {/* -------------------------------------------------
              CTA
          -------------------------------------------------- */}
          <footer className="pt-12 text-center">
            <Link href="/contact" className="btn-primary text-meta">
              Start a conversation
            </Link>
          </footer>
        </article>
      </Container>
    </main>
  );
}
