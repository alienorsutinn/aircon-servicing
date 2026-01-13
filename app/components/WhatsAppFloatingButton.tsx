"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButton() {
    const phoneNumber = "60176710965";
    const message = encodeURIComponent("Hi! I'm on ServiceCostChecker and I'd like to consult on a technician for my home. Can you help?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-3"
            aria-label="Chat on WhatsApp"
        >
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
                Chat with an Expert
            </span>
            <MessageCircle className="w-8 h-8 fill-current" />
        </a>
    );
}
