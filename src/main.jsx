import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Braces, ChevronDown,
  Cloud, CodeXml, CreditCard, Database, GitFork, GraduationCap, HeartPulse,
  Landmark, Layers3, BriefcaseBusiness, Mail, Menu, X,
} from 'lucide-react'
import { experience, profile, projects, skills } from './content'
import './styles.css'

const navigation = [
  ['About', 'about'], ['Work', 'projects'], ['Experience', 'experience'],
  ['Skills', 'skills'],
]

const projectIcons = { landmark: Landmark, heart: HeartPulse, card: CreditCard }

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="wrap header-inner" onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false)
          document.getElementById('menu-toggle')?.focus()
        }
      }}>
        <a className="brand" href="#home" aria-label="Raghavender Manchireddy, home">
          <span className="brand-icon"><CodeXml size={21} /></span><span>Raghavender<span className="brand-last"> Manchireddy</span></span>
        </a>
        <button id="menu-toggle" className="menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav id="site-nav" className={open ? 'nav is-open' : 'nav'} aria-label="Main navigation">
          {navigation.map(([label, id]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="header-contact" href="#contact" onClick={() => setOpen(false)}>Get in touch <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  )
}

function StackDiagram() {
  const layers = [
    [Layers3, 'Interface', 'Angular · React'],
    [Braces, 'Application', 'C# · ASP.NET Core'],
    [Cloud, 'Infrastructure', 'Azure · Kubernetes'],
    [Database, 'Data & events', 'SQL Server · Service Bus'],
  ]
  return (
    <figure className="diagram">
      <figcaption><span className="diagram-dot" /> Full-stack architecture</figcaption>
      <div className="diagram-flow">
        {layers.map(([Icon, label, tech]) => (
          <div className="diagram-row" key={label}>
            <span className="diagram-icon"><Icon size={20} aria-hidden="true" /></span>
            <span><strong>{label}</strong><small>{tech}</small></span>
          </div>
        ))}
      </div>
    </figure>
  )
}

function Hero() {
  return (
    <section id="home" className="wrap hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow role"><span />{profile.title}</p>
        <h1 id="hero-title">Raghavender Reddy <em>Manchireddy</em></h1>
        <p className="hero-description">I modernize legacy .NET applications and build cloud systems for government, healthcare, and financial services.</p>
        <div className="actions">
          <a className="button primary" href="#projects">Explore my work <ArrowDownRight size={18} /></a>
          <a className="button secondary" href="#contact">Contact me <ArrowUpRight size={17} /></a>
        </div>
      </div>
      <StackDiagram />
      <div className="hero-foot">
        <span><strong>12+</strong> years in software delivery</span>
        <span><strong>5</strong> enterprise client engagements</span>
        <a href="#about" aria-label="Continue to About"><ArrowDown size={19} /></a>
      </div>
    </section>
  )
}

function SectionHeading({ label, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </div>
  )
}

function ProjectCard({ project }) {
  const Icon = projectIcons[project.icon]
  return (
    <article className="project-card">
      <div className="project-icon"><Icon size={25} aria-hidden="true" /></div>
      <p className="eyebrow project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul className="tags" aria-label="Technologies">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
      <details>
        <summary>Project details <ChevronDown size={17} aria-hidden="true" /></summary>
        <p>{project.detail}</p>
        <p className="outcome">{project.outcome}</p>
      </details>
    </article>
  )
}

function Experience() {
  return (
    <section className="wrap section split" id="experience">
      <SectionHeading label="Experience" title="Client engagements">Enterprise delivery across government, healthcare, financial services, and telecom.</SectionHeading>
      <ol className="timeline">
        {experience.map(({ client, role, dates, location, summary, highlights }) => (
          <li key={client}>
            <p className="eyebrow timeline-date">{dates} <span>· {location}</span></p>
            <h3>{client}</h3>
            <p className="timeline-role">{role}</p>
            <p>{summary}</p>
            <ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap section contact-inner">
        <SectionHeading label="Contact" title="Let’s connect">Reach out about senior .NET engineering roles, Azure modernization, or enterprise integrations.</SectionHeading>
        <div className="contact-links">
          {[
            [Mail, 'Email', 'mailto:' + profile.email, profile.email],
            [BriefcaseBusiness, 'LinkedIn', profile.linkedin],
            [GitFork, 'GitHub', profile.github],
          ].map(([Icon, label, href, detail]) => (
            <a key={label} href={href}>
              <Icon size={20} aria-hidden="true" /><span><strong>{label}</strong>{detail && <small>{detail}</small>}</span><ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <section className="wrap section split about" id="about">
          <SectionHeading label="About me" title="Enterprise .NET engineering" />
          <div className="about-copy">
            <p>I’m a senior full stack .NET developer with 12+ years of experience, from requirements and architecture through implementation, automated testing, deployment, and production support.</p>
            <p>My work spans ASP.NET Core microservices, responsive Angular and React applications, and event-driven Azure systems. I apply Clean Architecture and SOLID principles to keep these systems maintainable, and mentor developers through code reviews and pair programming.</p>
          </div>
        </section>
        <section id="projects" className="work-band">
          <div className="wrap section">
            <SectionHeading label="Selected work" title="Enterprise projects">Three client engagements spanning financial automation, healthcare interoperability, and merchant payments.</SectionHeading>
            <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
          </div>
        </section>
        <Experience />
        <section id="skills" className="work-band">
          <div className="wrap section">
            <SectionHeading label="Technical skills" title="Technology stack" />
            <div className="skills-grid">
              {skills.map(([category, items]) => (
                <article key={category} className="skill-card">
                  <h3>{category}</h3>
                  <ul className="tags">{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="wrap section split" id="education">
          <SectionHeading label="Education" title="Academic background" />
          <article className="education-card"><GraduationCap size={28} aria-hidden="true" /><div><h3>Bachelor of Technology in Computer Science</h3><p>GITAM Deemed University</p></div></article>
        </section>
        <Contact />
      </main>
      <footer className="wrap footer">
        <span>{profile.name}</span><a href="#home">Back to top <ArrowRight size={15} aria-hidden="true" /></a>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
