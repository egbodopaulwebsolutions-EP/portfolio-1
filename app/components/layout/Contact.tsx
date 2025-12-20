"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { COUNTRIES } from "@/app/data/countries";

/* -------------------------------------------------
   Country Select (Searchable, Flat, Flagged)
--------------------------------------------------*/
function CountrySelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return COUNTRIES.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const selected = COUNTRIES.find((c) => c.iso === value);

  return (
    <div className="relative w-1/3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-full items-center justify-between rounded-xs border border-neutral-300 bg-white px-2 text-sm focus:border-blue-600 focus:outline-none"
      >
        {selected ? (
          <span className="flex items-center gap-2 truncate">
            <img
              src={`https://flagcdn.com/w20/${selected.iso.toLowerCase()}.png`}
              alt={selected.name}
              className="h-3.5 w-5 object-cover"
            />
            <span>{selected.code}</span>
          </span>
        ) : (
          <span className="text-neutral-400">Select</span>
        )}
        <span className="text-neutral-400">▾</span>
      </button>

      {open && (
        <div className="absolute z-20 mt-1 max-h-64 w-full overflow-hidden rounded-xs border border-neutral-200 bg-white shadow">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search country"
            className="w-full border-b border-neutral-200 px-2 py-1 text-sm focus:outline-none"
          />

          <ul className="max-h-52 overflow-auto">
            {filtered.map((c) => (
              <li
                key={c.iso}
                onClick={() => {
                  onChange(c.iso);
                  setOpen(false);
                  setQuery("");
                }}
                className="flex cursor-pointer items-center gap-2 px-2 py-1 text-sm hover:bg-neutral-100"
              >
                <img
                  src={`https://flagcdn.com/w20/${c.iso.toLowerCase()}.png`}
                  alt={c.name}
                  className="h-3.5 w-5 object-cover"
                />
                <span className="flex-1 truncate">{c.name}</span>
                <span className="text-neutral-500">{c.code}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------
   Main — Contact Form (With Web3Forms)
--------------------------------------------------*/
export default function ContactPage() {
  const [step, setStep] = useState<"form" | "confirmation">("form");
  const [countryISO, setCountryISO] = useState("US");
  const [loading, setLoading] = useState(false);

  /* Auto-detect country */
  useEffect(() => {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    const region = locale.split("-")[1];
    if (!region) return;

    const match = COUNTRIES.find((c) => c.iso === region);
    if (match) setCountryISO(match.iso);
  }, []);

  const selectedCountry = COUNTRIES.find((c) => c.iso === countryISO);

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (!selectedCountry) return;

  setLoading(true);

  const formData = new FormData(e.currentTarget);

  const payload = {
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY="4ce5a4ba-e822-4d7a-94fb-2c5874054289"!,
    subject: "New Project Inquiry",
    from_name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    phone: `${selectedCountry.code} ${String(formData.get("phone") || "")}`,
    business: String(formData.get("business") || ""),
    message: String(formData.get("message") || ""),
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      setStep("confirmation");
    } else {
      console.error(data);
    }
  } finally {
    setLoading(false);
  }
}


  if (step === "confirmation") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
        <section className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg text-center">
          <h2 className="text-2xl font-normal text-neutral-900">
            Thanks for reaching out
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            I’ve received your message and will get back to you shortly.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="w-full max-w-md bg-white box px-16">
        <header className="mb-6 flex flex-row justify-between pt-4 text-right ">
          <div className="mb-4">
            <Image
              src="/egbodo-paul-logo-2.png"
              alt="Logo"
              width={16}
              height={16}
            />
          </div>

          <div className="text-right">
          <p className="mt-1 italic text-sm text-neutral-600 underline-cust relative w-fit text-right">
            Tell me about your business
          </p>
          </div>
        </header>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <input
              name="name"
              required
              placeholder="First name"
              className="w-1/2 rounded-xs border border-[var(--color-primary)] px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
            />
            <input
              name="business"
              placeholder="Business name (optional)"
              className="w-1/2 rounded-xs border border-[var(--color-secondary)] px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
            />
          </div>

          <input
            name="email"
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xs border border-[var(--color-primary)] px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
          />

          <div className="flex gap-3">
            <CountrySelect value={countryISO} onChange={setCountryISO} />

            <input
              name="phone"
              required
              placeholder="Phone number"
              className="w-2/3 rounded-xs border border-[var(--color-secondary)] px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
            />
          </div>

          <textarea
            name="message"
            rows={4}
            placeholder="Tell me a little about your business (optional)"
            className="w-full resize-none rounded-xs border border-[var(--color-primary)] px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
          />

          <div className="mt-6 flex justify-end">
            <button
              disabled={loading}
              className="rounded-md btn-primary px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Sending…" : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
