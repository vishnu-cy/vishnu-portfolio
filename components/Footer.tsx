import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.</p>
        <p>Cybersecurity · AI Security · Secure Systems</p>
      </div>
    </footer>
  );
}
