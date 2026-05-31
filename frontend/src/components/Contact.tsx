"use client";

import { useState } from "react";
import type { Contact as ContactInfo } from "@/lib/api";
import { submitContactForm } from "@/lib/api";

export default function Contact({ contact }: { contact: ContactInfo }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await submitContactForm(form);
      if (result.success) {
        setStatus("success");
        setFeedback(result.message);
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(result.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setFeedback("Unable to send message. Please try again later.");
    }
  }

  const socialLinks = [
    { label: "Email", href: `mailto:${contact.email}`, value: contact.email },
    { label: "Phone", href: `tel:${contact.phone}`, value: contact.phone },
    ...(contact.linkedin
      ? [{ label: "LinkedIn", href: contact.linkedin, value: "LinkedIn Profile" }]
      : []),
    { label: "GitHub", href: contact.github, value: "GitHub Profile" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Have a question or want to collaborate? Send me a message.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="surface-card p-8">
            <h3 className="font-display text-xl font-bold text-stone-900">Get in touch</h3>
            <p className="mt-2 text-stone-500">
              I&apos;m open to internships, collaborations, and learning opportunities.
            </p>

            <ul className="mt-8 space-y-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-stone-600 transition hover:text-brand-700"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-brand-700 transition group-hover:bg-brand-100">
                      {link.label[0]}
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-stone-400">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium">{link.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="surface-card p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder-stone-400 outline-none transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder-stone-400 outline-none transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-stone-700">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder-stone-400 outline-none transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Your message..."
                />
              </div>

              {status === "success" && (
                <p className="rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-700">
                  {feedback}
                </p>
              )}
              {status === "error" && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                  {feedback}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
