import Image from "next/image";

const socials = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@drgregshow",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@drgregshow",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/drgregshow",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gregnewkirk",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/drgregshow",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const ventures = [
  {
    title: "Priori Intelligence",
    href: "https://prioriintelligence.com",
    description:
      "AI-accelerated biotech patent landscape analysis and scientific due diligence. Helping investors, law firms, and biotech companies navigate complex IP landscapes.",
    tag: "Consulting",
  },
  {
    title: "@drgregshow",
    href: "https://drgregshow.com",
    description:
      "Science communication across TikTok, YouTube, and Instagram. Live debates, explainers, and making molecular biology accessible. 5.8M+ views, 30K+ followers.",
    tag: "Media",
  },
  {
    title: "SAFE",
    href: "https://scienceandfreedom.com",
    description:
      "Science and Freedom for Everyone. A 501(c)(3)/501(c)(4) nonprofit dedicated to civic engagement through science literacy and evidence-based policy advocacy.",
    tag: "Nonprofit",
  },
];

const publications = [
  {
    title: "Plant transformation methods and compositions",
    type: "U.S. Patent",
    citation: "US Patent 11,186,845 B1",
    year: "2021",
    href: "https://patents.google.com/patent/US11186845B1",
  },
  {
    title:
      "Targeted delivery of CRISPR-Cas9 ribonucleoprotein complexes using lipid nanoparticles",
    type: "Publication",
    citation: "Nature Nanotechnology",
    year: "",
    href: "#",
  },
  {
    title:
      "Gold nanoparticle-mediated delivery of molecular cargo for biological applications",
    type: "Publication",
    citation: "ACS Nano",
    year: "",
    href: "#",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-surface-light)]/30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-sm tracking-wide">GMN</span>
          <div className="flex gap-6 text-sm text-[var(--color-muted)]">
            <a href="#about" className="hover:text-[var(--color-foreground)] transition-colors">
              About
            </a>
            <a href="#ventures" className="hover:text-[var(--color-foreground)] transition-colors">
              Ventures
            </a>
            <a href="#research" className="hover:text-[var(--color-foreground)] transition-colors">
              Research
            </a>
            <a href="#contact" className="hover:text-[var(--color-foreground)] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-[var(--color-surface-light)]">
              <Image
                src="/headshot-placeholder.svg"
                alt="Dr. Gregory M. Newkirk"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Dr. Gregory M. Newkirk
            <span className="text-[var(--color-accent)]">,</span> PhD
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-muted)] mb-8">
            Molecular biologist. Science communicator. Founder.
          </p>
          <div className="flex justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors p-2"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-8">
            About
          </h2>
          <div className="space-y-5 text-[var(--color-muted)] leading-relaxed text-lg">
            <p>
              I&apos;m a molecular biologist with deep expertise in CRISPR/Cas9 gene
              editing, nanotechnology-mediated delivery systems, and plant genomics.
              I earned my PhD developing novel approaches to targeted genome
              modification, with publications in{" "}
              <em>Nature Nanotechnology</em> and <em>ACS Nano</em>, and I&apos;m a
              co-inventor on U.S. Patent 11,186,845 covering plant transformation
              methods. My research career included work at BASF and Cibus, where I
              applied precision gene editing at agricultural scale.
            </p>
            <p>
              Today I run{" "}
              <a
                href="https://prioriintelligence.com"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors underline underline-offset-4"
              >
                Priori Intelligence
              </a>
              , a consulting firm that provides AI-accelerated biotech patent
              landscape analysis and scientific due diligence for investors, law
              firms, and biotech companies. I&apos;m also preparing for the patent
              bar and pursuing a JD with an intellectual property focus — bridging
              the gap between bench science and the legal frameworks that protect it.
            </p>
            <p>
              Outside the lab and the courtroom, I&apos;m{" "}
              <a
                href="https://drgregshow.com"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors underline underline-offset-4"
              >
                @drgregshow
              </a>{" "}
              — a science communicator reaching millions across TikTok, YouTube, and
              Instagram through live debates, explainers, and unfiltered
              conversations about science. I founded{" "}
              <a
                href="https://scienceandfreedom.com"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors underline underline-offset-4"
              >
                SAFE (Science and Freedom for Everyone)
              </a>
              , a nonprofit dedicated to civic engagement through science literacy.
              Based in San Diego, CA.
            </p>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="py-24 px-6 bg-[var(--color-surface)]/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-12 text-center">
            Ventures
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((v) => (
              <a
                key={v.title}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[var(--color-surface)] border border-[var(--color-surface-light)]/50 rounded-xl p-6 hover:border-[var(--color-accent)]/50 transition-all"
              >
                <span className="inline-block text-xs font-medium tracking-wider uppercase text-[var(--color-accent)] mb-3">
                  {v.tag}
                </span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {v.title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {v.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section id="research" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-12">
            Research &amp; Publications
          </h2>
          <div className="space-y-8">
            {publications.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-medium tracking-wider uppercase text-[var(--color-accent)]">
                      {p.type}
                    </span>
                    <h3 className="text-lg font-medium mt-1 group-hover:text-[var(--color-accent)] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[var(--color-muted)] text-sm mt-1">
                      {p.citation}
                      {p.year && ` (${p.year})`}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors mt-2 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <div className="border-b border-[var(--color-surface-light)]/30 mt-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Speaking */}
      <section id="contact" className="py-24 px-6 bg-[var(--color-surface)]/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-8">
            Media &amp; Speaking
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-4 leading-relaxed">
            Available for podcasts, panels, expert commentary, and speaking
            engagements.
          </p>
          <p className="text-[var(--color-muted)] mb-8">
            Topics: gene editing &amp; CRISPR, biotech IP, science communication,
            science policy &amp; civic engagement.
          </p>
          <a
            href="mailto:greg@prioriintelligence.com"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-[var(--color-background)] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Get in Touch
          </a>
          <p className="text-sm text-[var(--color-muted)] mt-4">
            greg@prioriintelligence.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--color-surface-light)]/30">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-sm text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()} Gregory M. Newkirk
          </div>
          <div className="flex gap-6 text-sm text-[var(--color-muted)]">
            <a
              href="https://prioriintelligence.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-foreground)] transition-colors"
            >
              Priori Intelligence
            </a>
            <a
              href="https://drgregshow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-foreground)] transition-colors"
            >
              @drgregshow
            </a>
            <a
              href="https://scienceandfreedom.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-foreground)] transition-colors"
            >
              SAFE
            </a>
          </div>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
