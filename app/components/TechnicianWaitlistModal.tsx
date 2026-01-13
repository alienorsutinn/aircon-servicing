"use client";

import { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";

interface TechnicianWaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TechnicianWaitlistModal({ isOpen, onClose }: TechnicianWaitlistModalProps) {
    const [contact, setContact] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!contact.trim()) return;

        // Simulate API call
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
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                                <Send className="w-6 h-6 ml-1" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We’re currently onboarding trusted technicians in Klang Valley.
                                Leave your WhatsApp to get notified when recommendations open.
                            </p>
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
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400 font-medium"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                Notify Me
                            </button>
                        </form>
                        <p className="text-center text-xs text-gray-400 mt-4">
                            We respect your privacy. No spam.
                        </p>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6 animate-in zoom-in duration-300">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                        <p className="text-slate-600 mb-8">
                            We'll notify {contact} as soon as we have recommended technicians in your area.
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
