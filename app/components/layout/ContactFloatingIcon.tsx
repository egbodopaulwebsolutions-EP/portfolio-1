"use client";

import { useState } from "react";
import {
  MessageCircle,
  X,
  Phone,
} from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
  onClick={() => setOpen(true)}
  aria-label="Contact"
  className="fixed bottom-6 left-6 z-50 h-14 w-14 cursor-pointer rounded-full p-[3px] shadow-lg transition hover:scale-105"
  style={{
    background:
      "conic-gradient(var(--color-secondary) 0deg 120deg, var(--color-primary) 120deg 240deg, var(--color-accent) 240deg 360deg)",
  }}
>
  <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[var(--color-accent)]">
    <MessageCircle size={22} />
  </span>
</button>


      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end  backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          {/* Modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="mb-24 mr-6 w-64 box bg-white p-4 shadow-xl animate-in fade-in zoom-in"
          >
            <header className="mb-3 flex items-center justify-between">
              <h4 className="text-displat h5 font-medium text-neutral-900">
                Contact me
              </h4>
              <button onClick={() => setOpen(false)}>
                <X size={16} />
              </button>
            </header>

            <ul className="space-y-2">
              <ContactItem
                href="https://wa.me/639671825359"
                label="WhatsApp"
                icon="/images/whatsapp-icon.svg"
              />
              <ContactItem
                href="https://m.me/egbodopaulwebsolutions"
                label="Messenger"
                icon="/images/messenger.svg"
              />
              <ContactItem
                href="viber://chat?number=639154588891"
                label="Viber"
                icon="/images/viber-icon.svg"
              />
              <ContactItem
                href="tel:+639671825359"
                label="Text/Call"
                icon={<Phone size={18} />}
              />
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

import { ReactNode } from "react";

function ContactItem({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string | ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center  gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
    >
      {typeof icon === "string" ? (
        <img src={icon} alt={label} className="h-5 w-5" />
      ) : (
        icon
      )}
      <span className="text-contact">{label}</span>
    </a>
  );
}
