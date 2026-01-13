import { SERVICES } from "../data/services";
import { Info } from "lucide-react";

export default function PricingTable() {
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left bg-white text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-4 font-bold text-gray-900 w-1/4">Service</th>
                        <th className="px-6 py-4 font-bold text-gray-900 w-1/3">Description</th>
                        <th className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">Est. Price Range</th>
                        <th className="px-6 py-4 font-bold text-gray-900 hidden md:table-cell">Notes</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {SERVICES.map((service) => (
                        <tr key={service.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-6 py-4 align-top">
                                <div className="font-semibold text-gray-900">{service.name}</div>
                                <div className="text-xs text-gray-500 mt-1 md:hidden">{service.unit}</div>
                            </td>
                            <td className="px-6 py-4 align-top text-gray-600 leading-relaxed">
                                {service.description}
                                {/* Mobile Notes */}
                                <div className="mt-3 md:hidden">
                                    <ul className="space-y-1">
                                        {service.notes.map((note, i) => (
                                            <li key={i} className="flex items-start text-xs text-slate-500">
                                                <span className="mr-1.5">•</span> {note}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-top">
                                <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-bold whitespace-nowrap mb-1">
                                    RM {service.minPrice} - {service.maxPrice}
                                </div>
                                <div className="text-xs text-gray-500 hidden md:block">{service.unit}</div>
                            </td>
                            <td className="px-6 py-4 align-top hidden md:table-cell">
                                <ul className="space-y-1.5">
                                    {service.notes.map((note, i) => (
                                        <li key={i} className="flex items-start text-xs text-gray-500">
                                            <Info className="w-3 h-3 text-blue-400 mr-1.5 flex-shrink-0 mt-0.5" />
                                            <span>{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
