"use client";

import { useState } from "react";
import { X, MessageSquare, CheckCircle2 } from "lucide-react";

interface ReferralModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName: string;
}

export default function ReferralModal({ isOpen, onClose, serviceName }: ReferralModalProps) {
    const [contact, setContact] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!contact.trim()) return;

        // Simulate intent validation (no DB)
        setTimeout(() => {
            setIsSubmitted(true);
        }, 600);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {!isSubmitted ? (
                    <>
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Connect with a Pro</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We&apos;re currently vetting the best local technicians in Klang Valley. 
                                Leave your contact and we&apos;ll notify you when we have a verified match.
                            </p>
                            
                            <a 
                                href={`https://wa.me/60176710965?text=${encodeURIComponent(`Hi! I'm interested in ${serviceName.toLowerCase()} servicing. Can you recommend a technician?`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#25D366] hover:bg-[#22c35e] text-white font-black text-lg py-4 rounded-xl shadow-lg shadow-green-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 mb-8"
                            >
                                <MessageSquare className="w-6 h-6" />
                                Chat on WhatsApp Now
                            </a>

                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-100"></div>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold text-gray-400">
                                    <span className="bg-white px-2">Or leave your number</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="contact" className="sr-only">WhatsApp Number</label>
                                <input
                                    type="text"
                                    id="contact"
                                    placeholder="Your WhatsApp Number (e.g. 012-3456789)"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400 font-medium"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                Get Notified
                            </button>
                        </form>
                        <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest font-bold">
                            Free service for homeowners
                        </p>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6 animate-in zoom-in duration-300">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                        <p className="text-slate-600 mb-8">
                            We'll reach out to {contact} as soon as we have a certified technician ready for your request.
                        </p>
                        <button
                            onClick={onClose}
                            className="w-full bg-gray-100 hover:bg-gray-200 text-slate-800 font-semibold py-3 rounded-xl transition-colors"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
