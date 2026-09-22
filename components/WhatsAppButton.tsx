"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919391356077?text=Hello%20MVVR%20CON%20%26%20INTERIO%2C%20I%20would%20like%20to%20get%20a%20free%20interior%20design%20consultation%20and%20quote."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with MVVR Interiors on WhatsApp"
    >
      <div className="whatsapp-pulse" />
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">Chat with Interior Designer</span>
    </a>
  );
}
