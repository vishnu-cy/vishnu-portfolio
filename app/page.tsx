"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

const focusAreas = [
  "AI Security",
  "Vulnerability Analysis",
  "Autonomous Systems",
  "Ethical Hacking",
  "Secure ML",
  "Zero-Knowledge Proofs",
];

const systemLayers = [
  "Sensing",
  "Embedded Computation",
  "AI Perception",
  "Communication",
  "Control",
  "Physical Actuation",
];

function getProjectTools(project: any): string[] {
  return project.tools ?? project.technologies ?? project.skills ?? [];
}

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/90 to-slate-950" />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pb-20 pt-24 sm:px-10 lg:px-16 lg:pb-28 lg:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
              Cybersecurity × AI Portfolio
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building secure intelligent systems through cyber research and AI
              security.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I’m Vishnu Sureshkumar Rajalekshmi, a Security Researcher and Ethical Hacker with a MSc in Cybersecurity and AI from the
              University of Sheffield. I
              work on vulnerability analysis, AI security, cyber-physical
              systems, and defensive research for intelligent technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                View Projects
              </Link>

              <Link
                href="/writeups"
                className="rounded-full border border-cyan-300/40 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:-translate-y-0.5 hover:bg-cyan-300/10"
              >
                Read Write-ups
              </Link>

              <Link
                href="/cv"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                View CV
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 backdrop-blur"
                >
                  {area}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-slate-950/80 p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              

              <Image
                src="/profile.jpeg"
                alt={`${profile.name} profile photo`}
                width={500}
                height={650}
                priority
                className="h-[440px] w-full rounded-[1.5rem] object-cover saturate-125 contrast-110"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/85 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                  MSc Cybersecurity & AI
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  University of Sheffield . Sept 2026
                </p>
              </div>
            </div>

      

            
          </motion.div>
        </div>
      </section>

      {/* System Map Section */}
      <!-- <section className="relative px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Research Direction
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Securing AI-enabled systems across the full stack.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-400">
              My portfolio connects practical cybersecurity with AI security and
              cyber-physical system defence, focusing on how attacks move across
              sensors, software, models, communication, and physical control.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {systemLayers.map((layer, index) => (
              <motion.div
                key={layer}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
                  0{index + 1}
                </div>

                <h3 className="text-sm font-semibold text-white">{layer}</h3>

                <div className="mt-4 h-1 rounded-full bg-slate-800">
                  <div className="h-1 rounded-full bg-cyan-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> -->

      {/* Featured Projects */}
      <section className="relative px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Case Files
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Featured cybersecurity and AI projects.
              </h2>
            </div>

            <Link
              href="/projects"
              className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              View all projects →
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const projectTools = getProjectTools(project);

              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-300">
                      Case 0{index + 1}
                    </span>

                    <span className="text-xs text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {projectTools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    Open case file →
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 backdrop-blur md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Portfolio Mission
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Turning academic cybersecurity work into practical, visible
                proof.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                This portfolio documents my progress through technical case
                studies, research summaries, write-ups, and practical security
                projects. The goal is to show not only what I have studied, but
                how I think, analyse, communicate, and build.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                href="/contact"
                className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Contact Me
              </Link>

              <Link
                href="/research"
                className="rounded-full border border-cyan-300/40 px-6 py-3 text-center text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
              >
                View Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
