import type { Contact as ContactInfo } from "@/lib/api";

export default function Footer({
  name,
  contact,
}: {
  name: string;
  contact: ContactInfo;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-white py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-stone-500">
          © {year} {name}. Built with Next.js & Express.
        </p>
        <div className="flex gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 transition hover:text-brand-700"
          >
            GitHub
          </a>
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 transition hover:text-brand-700"
            >
              LinkedIn
            </a>
          )}
          <a
            href={`mailto:${contact.email}`}
            className="text-sm text-stone-500 transition hover:text-brand-700"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
