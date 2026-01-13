import { SERVICES } from "../data/services";
import ServicePageLayout from "../components/ServicePageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Plumbing Service Cost Checker Malaysia (Klang Valley)",
    description: "Check typical market rates for plumbing repairs, leak fixes, water heater services, and pipe installations in KL and Selangor. Transparent pricing for homeowners.",
};

export default function PlumbingSEOPage() {
    const category = SERVICES.find((s) => s.id === "plumbing");

    if (!category) {
        return <div>Service not found</div>;
    }

    return <ServicePageLayout category={category} />;
}
