// ✅ FILE: app/services/page.tsx
export default function ServicesPage() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>Mobile Applications</li>
          <li>SEO and Digital Marketing</li>
        </ul>
      </main>
    );
  }