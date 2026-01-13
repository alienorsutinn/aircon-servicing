import { Star, CheckCircle } from "lucide-react";

const REVIEWS = [
    {
        id: 1,
        author: "Mohamed H.",
        location: "Petaling Jaya",
        rating: 5,
        date: "2 days ago",
        text: "Used the checker to get a baseline. Technician quoted exactly within range. Very helpful tool for first-time homeowners!",
    },
    {
        id: 2,
        author: "Sarah Tan",
        location: "Kajang",
        rating: 5,
        date: "1 week ago",
        text: "Clean, professional, and honest. Knowing the market rate gave me confidence during the booking process. Highly recommended.",
    },
    {
        id: 3,
        author: "Wei Leong",
        location: "Subang Jaya",
        rating: 5,
        date: "3 days ago",
        text: "Saved me from an overcharged chemical wash. The prices listed here are very accurate to what I was quoted in Subang.",
    }
];

export default function ReviewsSection() {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
                <div key={review.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-premium flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                    <div>
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-sm text-slate-700 italic leading-relaxed mb-6 block">
                            "{review.text}"
                        </p>
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                            {review.author[0]}
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5">
                                <span className="font-bold text-slate-900 text-sm">{review.author}</span>
                                <CheckCircle className="w-3 h-3 text-blue-500" />
                            </div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                {review.location} • {review.date}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
