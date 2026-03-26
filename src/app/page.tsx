import Image from "next/image";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gnewkirk/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0000-0002-1154-7787",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947-.947-.431-.947-.947.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.925-1.575 3.925-3.722 0-2.016-1.444-3.722-3.925-3.722h-2.297z"/>
      </svg>
    ),
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=sI--g3gAAAAJ&hl=en",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
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
    title: "DNA delivery by high aspect ratio nanomaterials to algal chloroplasts",
    type: "Publication",
    citation: "Environmental Science: Nano, 10(10), 2890–2903",
    year: "2023",
    href: "https://doi.org/10.1039/d3en00018d",
    pdf: null,
  },
  {
    title: "Nanotechnology Approaches for Arabidopsis and Chlamydomonas Chloroplast Bioengineering",
    type: "PhD Dissertation",
    citation: "University of California, Riverside",
    year: "2023",
    href: "https://scholar.google.com/citations?user=sI--g3gAAAAJ",
    pdf: null,
  },
  {
    title: "Chloroplast targeting peptides and conjugates and compositions thereof",
    type: "U.S. Patent Application",
    citation: "US Patent App. 18/070,288",
    year: "2023",
    href: "https://patents.google.com/patent/US20230183756A1",
    pdf: null,
  },
  {
    title: "Targeted carbon nanostructures for chemical and gene delivery to plant chloroplasts",
    type: "Publication",
    citation: "ACS Nano, 16(8), 12156–12173",
    year: "2022",
    href: "https://doi.org/10.1021/acsnano.2c05522",
    pdf: null,
  },
  {
    title: "Nanotechnology approaches for chloroplast biotechnology advancements",
    type: "Publication",
    citation: "Frontiers in Plant Science, 12, 691295",
    year: "2021",
    href: "https://doi.org/10.3389/fpls.2021.691295",
    pdf: "https://www.frontiersin.org/articles/10.3389/fpls.2021.691295/pdf",
  },
  {
    title: "Compositions comprising a nanoparticle, a molecular basket comprising cyclodextrin, and a chloroplast-targeting peptide",
    type: "U.S. Patent",
    citation: "US Patent 11,186,845",
    year: "2021",
    href: "https://patents.google.com/patent/US11186845B1",
    pdf: null,
  },
  {
    title: "Nanoparticle-mediated genetic engineering of plants",
    type: "Publication",
    citation: "Molecular Plant, 12(8), 1037–1040",
    year: "2019",
    href: "https://doi.org/10.1016/j.molp.2019.06.010",
    pdf: "https://www.cell.com/action/showPdf?pii=S1674-2052%2819%2930231-X",
  },
  {
    title: "Nanobiotechnology approaches for engineering smart plant sensors",
    type: "Publication",
    citation: "Nature Nanotechnology, 14(6), 541–553",
    year: "2019",
    href: "https://doi.org/10.1038/s41565-019-0470-6",
    pdf: null,
  },
  {
    title: "Catalytic scavenging of plant reactive oxygen species in vivo by anionic cerium oxide nanoparticles",
    type: "Publication",
    citation: "Journal of Visualized Experiments (JoVE), 58373",
    year: "2018",
    href: "https://doi.org/10.3791/58373",
    pdf: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6231912/pdf",
  },
  {
    title: "A 2018 Ballot Measure Analysis for Voters: The CA Water Bond and its Impact on Scientific Research",
    type: "Publication",
    citation: "Journal of Science Policy and Governance, 13",
    year: "2018",
    href: "https://scholar.google.com/citations?user=sI--g3gAAAAJ",
    pdf: null,
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
              <div key={p.title} className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-medium tracking-wider uppercase text-[var(--color-accent)]">
                      {p.type}
                    </span>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="text-lg font-medium mt-1 hover:text-[var(--color-accent)] transition-colors">
                        {p.title}
                      </h3>
                    </a>
                    <p className="text-[var(--color-muted)] text-sm mt-1">
                      {p.citation}
                      {p.year && ` (${p.year})`}
                    </p>
                    <div className="flex gap-3 mt-3">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View
                      </a>
                      {p.pdf && (
                        <a
                          href={p.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors font-medium"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="border-b border-[var(--color-surface-light)]/30 mt-6" />
              </div>
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
