import Link from "next/link";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/writeups", label: "Write-ups" },
  { href: "/skills", label: "Skills" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-cyber-bg/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-white">
          <span className="grid h-9 w-9 place-items-center border border-cyber-cyan/40 bg-cyber-cyan/10 text-cyber-cyan shadow-glow transition group-hover:rotate-6">V</span>
          <span>Vishnu<span className="text-cyber-cyan">//AISEC</span></span>
        </Link>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-cyber-cyan">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
