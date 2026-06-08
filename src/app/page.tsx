import Image from "next/image";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gnewkirk/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0000-0002-1154-7787",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947-.947-.431-.947-.947.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.925-1.575 3.925-3.722 0-2.016-1.444-3.722-3.925-3.722h-2.297z" />
      </svg>
    ),
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=sI--g3gAAAAJ&hl=en",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
      </svg>
    ),
  },
];

const credentials = [
  { value: "PhD", label: "Molecular biology, UC Riverside" },
  { value: "US11186845B1", label: "Granted plant biotechnology patent" },
  { value: "Nature Nanotechnology", label: "Research in smart plant sensors" },
  { value: "30K+", label: "Science audience across public platforms" },
];

const focusAreas = [
  {
    title: "Biotech IP and due diligence",
    description:
      "Patent landscape analysis, technical diligence, and clear translation of molecular biology for investors, founders, and legal teams.",
  },
  {
    title: "Plant biotechnology",
    description:
      "CRISPR/Cas9, chloroplast delivery, nanotechnology-mediated transformation, genomics, and applied agricultural biotechnology.",
  },
  {
    title: "Scientific communication",
    description:
      "Live debates, public explainers, panels, and commentary that keep the science rigorous without hiding behind jargon.",
  },
  {
    title: "Civic science",
    description:
      "Science literacy, evidence-based policy, and nonprofit work through SAFE, Science and Freedom for Everyone.",
  },
];

const ventures = [
  {
    title: "Priori Intelligence",
    href: "https://prioriintelligence.com",
    description:
      "AI-accelerated biotech patent landscape analysis and scientific due diligence for investors, law firms, founders, and biotech teams.",
    tag: "Consulting",
  },
  {
    title: "@drgregshow",
    href: "https://drgregshow.com",
    description:
      "Science communication across TikTok, YouTube, and Instagram through live debates, explainers, and long-form public conversations.",
    tag: "Media",
  },
  {
    title: "SAFE",
    href: "https://scienceandfreedom.com",
    description:
      "Science and Freedom for Everyone, a civic science nonprofit focused on science literacy and evidence-based policy advocacy.",
    tag: "Nonprofit",
  },
];

const publications = [
  {
    title: "DNA delivery by high aspect ratio nanomaterials to algal chloroplasts",
    type: "Publication",
    citation: "Environmental Science: Nano, 10(10), 2890-2903",
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
    citation: "ACS Nano, 16(8), 12156-12173",
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
    citation: "Molecular Plant, 12(8), 1037-1040",
    year: "2019",
    href: "https://doi.org/10.1016/j.molp.2019.06.010",
    pdf: "https://www.cell.com/action/showPdf?pii=S1674-2052%2819%2930231-X",
  },
  {
    title: "Nanobiotechnology approaches for engineering smart plant sensors",
    type: "Publication",
    citation: "Nature Nanotechnology, 14(6), 541-553",
    year: "2019",
    href: "https://doi.org/10.1038/s41565-019-0470-6",
    pdf: "/pdfs/Newkirk_2019_NatureNanotechnology_SmartPlantSensors.pdf",
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gregory M. Newkirk",
  honorificSuffix: "PhD",
  url: "https://gregnewkirk.com",
  image: "https://gregnewkirk.com/images/greg-newkirk-expert.jpg",
  jobTitle: "Molecular biologist and biotech IP consultant",
  alumniOf: "University of California, Riverside",
  knowsAbout: [
    "Molecular biology",
    "CRISPR/Cas9",
    "Plant biotechnology",
    "Biotech patent strategy",
    "Science communication",
  ],
  sameAs: [
    "https://www.linkedin.com/in/gnewkirk/",
    "https://orcid.org/0000-0002-1154-7787",
    "https://scholar.google.com/citations?user=sI--g3gAAAAJ&hl=en",
    "https://drgregshow.com",
    "https://prioriintelligence.com",
  ],
};

function ExternalLinkIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[var(--color-ink)]/92 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="text-sm font-semibold">
            Gregory M. Newkirk
          </a>
          <div className="flex items-center gap-4 text-sm text-white/78 sm:hidden">
            <a href="#research" className="transition-colors hover:text-white">
              Research
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/78 sm:flex">
            <a href="#focus" className="transition-colors hover:text-white">
              Focus
            </a>
            <a href="#ventures" className="transition-colors hover:text-white">
              Ventures
            </a>
            <a href="#research" className="transition-colors hover:text-white">
              Research
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[82svh] overflow-hidden bg-[var(--color-ink)] text-white">
        <Image
          src="/images/greg-newkirk-expert.jpg"
          alt="Gregory M. Newkirk in a professional portrait"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[34%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,18,32,0.70)_0%,rgba(11,18,32,0.54)_42%,rgba(11,18,32,0.20)_70%,rgba(11,18,32,0.12)_100%)]" />
        <div className="relative mx-auto flex min-h-[82svh] max-w-6xl items-center px-5 pb-10 pt-24 sm:px-8 lg:justify-end">
          <div className="max-w-2xl lg:w-[56%]">
            <p className="mb-5 text-sm font-semibold uppercase text-white/75">
              Molecular biology | biotech IP | science communication
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Molecular biology for patent strategy, due diligence, and public science.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/82">
              I help people make high-stakes biotechnology decisions: what the
              science says, what the patent record supports, and how to explain it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:greg@prioriintelligence.com"
                className="inline-flex min-h-11 items-center rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-strong)]"
              >
                Work with me
              </a>
              <a
                href="#research"
                className="inline-flex min-h-11 items-center rounded-lg border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                View research record
              </a>
            </div>
            <div className="mt-8 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-white">
        <div className="mx-auto grid max-w-6xl gap-px bg-[var(--color-line)] px-px sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item) => (
            <div key={item.value} className="bg-white px-5 py-6 sm:px-8">
              <p className="text-xl font-semibold text-[var(--color-ink)]">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="focus" className="bg-[var(--color-background)] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
              Professional brand
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl">
              A scientist trained at the bench, now translating biotechnology for
              strategy, law, and public trust.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--color-body)]">
            <p>
              I am a molecular biologist with deep expertise in CRISPR/Cas9 gene
              editing, nanotechnology-mediated delivery systems, and plant genomics.
              My PhD work focused on targeted genome modification, with publications
              in <em>Nature Nanotechnology</em> and <em>ACS Nano</em>, and I am a
              co-inventor on U.S. Patent 11,186,845 covering plant transformation
              methods.
            </p>
            <p>
              Today I run{" "}
              <a
                href="https://prioriintelligence.com"
                className="font-semibold text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-strong)]"
              >
                Priori Intelligence
              </a>
              , a consulting firm that provides AI-accelerated biotech patent
              landscape analysis and scientific due diligence. I am also preparing
              for the patent bar and pursuing a JD with an intellectual property
              focus, connecting bench science to the legal frameworks that protect it.
            </p>
            <p>
              I also publish as{" "}
              <a
                href="https://drgregshow.com"
                className="font-semibold text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-strong)]"
              >
                @drgregshow
              </a>
              , reaching millions through science debates, explainers, and public
              conversations. Through{" "}
              <a
                href="https://scienceandfreedom.com"
                className="font-semibold text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-strong)]"
              >
                SAFE
              </a>
              , I work on civic engagement through science literacy and evidence-based
              policy advocacy.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-px bg-[var(--color-line)] px-px sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <article key={area.title} className="bg-[var(--color-background)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-ink)]">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="ventures" className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
                Ventures
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
                The current professional surface.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[var(--color-muted)]">
              Consulting, public science, and civic science are separate lanes, but
              they share the same standard: evidence first, clear translation, and
              claims that can be checked.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ventures.map((venture) => (
              <a
                key={venture.title}
                href={venture.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-[var(--color-line)] bg-white p-6 transition-colors hover:border-[var(--color-accent)]"
              >
                <span className="text-xs font-semibold uppercase text-[var(--color-accent)]">
                  {venture.tag}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
                  {venture.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                  {venture.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="bg-[var(--color-background)] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
              Research and patents
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl">
              Peer-reviewed work in plant nanobiotechnology and chloroplast delivery.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
              Selected publications, patent records, and primary links for the
              technical foundation behind the consulting and public science work.
            </p>
          </div>
          <div className="space-y-6">
            {publications.map((publication) => (
              <article key={publication.title} className="border-b border-[var(--color-line)] pb-6">
                <p className="text-xs font-semibold uppercase text-[var(--color-accent)]">
                  {publication.type} | {publication.year}
                </p>
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-2 inline-flex gap-2"
                >
                  <h3 className="text-lg font-semibold leading-7 text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
                    {publication.title}
                  </h3>
                  <span className="mt-1 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                    <ExternalLinkIcon />
                  </span>
                </a>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {publication.citation}
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-strong)]"
                  >
                    <ExternalLinkIcon />
                    View
                  </a>
                  {publication.pdf && (
                    <a
                      href={publication.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-strong)]"
                    >
                      <DownloadIcon />
                      PDF
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[var(--color-ink)] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[var(--color-accent-light)]">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              For consulting, expert commentary, panels, podcasts, and speaking.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              Topics include gene editing, CRISPR, biotech IP, plant biotechnology,
              science communication, science policy, and civic science.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a
              href="mailto:greg@prioriintelligence.com"
              className="inline-flex min-h-11 items-center rounded-lg bg-[var(--color-accent-light)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-white"
            >
              greg@prioriintelligence.com
            </a>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-white/65 transition-colors hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Gregory M. Newkirk</p>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://prioriintelligence.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              Priori Intelligence
            </a>
            <a
              href="https://drgregshow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              @drgregshow
            </a>
            <a
              href="https://scienceandfreedom.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              SAFE
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
