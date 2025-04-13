// ✅ FILE: app/contact/page.tsx
import InquiryForm from "@/components/InquiryForm";

export default function ContactPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <InquiryForm />
    </main>
  );
}
