import { SERVICES } from "../data/services";
import ServicePageLayout from "../components/ServicePageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Electrical Service Cost Checker Malaysia (Klang Valley)",
    description: "Check typical market rates for power trips, socket replacements, lighting installations, and wiring checks in KL and Selangor. Professional electrical cost transparency.",
};

export default function ElectricalSEOPage() {
    const category = SERVICES.find((s) => s.id === "electrical");

    if (!category) {
        return <div>Service not found</div>;
    }

    return <ServicePageLayout category={category} />;
}
