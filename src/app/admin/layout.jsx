// ✅ FILE: app/admin/layout.js
export default function AdminLayout({ children }) {
  return (
    <section className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      {children}
    </section>
  );
}
