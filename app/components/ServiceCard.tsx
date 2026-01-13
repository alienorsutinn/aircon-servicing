"use client";

import Link from "next/link";
import { ArrowRight, Wind, Droplets, Zap } from "lucide-react";
import { ServiceCategory } from "../types";

const icons: { [key: string]: any } = {
    Wind,
    Droplets,
    Zap,
};

interface ServiceCardProps {
    category: ServiceCategory;
}

export default function ServiceCard({ category }: ServiceCardProps) {
    const Icon = icons[category.icon] || Wind;

    // Tailwind dynamic classes need to be full strings for the compiler
    const colorClasses: { [key: string]: string } = {
        blue: "hover:border-blue-500/50 hover:shadow-blue-500/10 bg-blue-500/5 text-blue-600",
        emerald: "hover:border-emerald-500/50 hover:shadow-emerald-500/10 bg-emerald-500/5 text-emerald-600",
        amber: "hover:border-amber-500/50 hover:shadow-amber-500/10 bg-amber-500/5 text-amber-600",
    };

    return (
        <Link
            href={category.slug}
            className={`group block p-8 rounded-[2rem] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 shadow-sm ${colorClasses[category.color]?.split(' ').slice(0, 2).join(' ')}`}
        >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500 ${colorClasses[category.color]?.split(' ').slice(2).join(' ')}`}>
                <Icon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-slate-800 transition-colors">
                {category.title}
            </h3>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                Klang Valley Rates
            </div>

            <p className="text-slate-500 font-medium leading-relaxed mb-8">
                {category.description}
            </p>

            <div className={`inline-flex items-center gap-2 font-black uppercase tracking-widest text-xs ${colorClasses[category.color]?.split(' ').slice(3).join(' ')}`}>
                Check Costs <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </div>
        </Link>
    );
}
