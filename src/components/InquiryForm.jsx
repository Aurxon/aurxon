'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/success");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        name="name" 
        onChange={handleChange} 
        value={form.name} 
        placeholder="Name" 
        className="w-full p-2 border rounded" 
        required 
      />
      <input 
        name="email" 
        type="email" 
        onChange={handleChange} 
        value={form.email} 
        placeholder="Email" 
        className="w-full p-2 border rounded" 
        required 
      />
      <input 
        name="phone" 
        onChange={handleChange} 
        value={form.phone} 
        placeholder="Phone" 
        className="w-full p-2 border rounded" 
        required 
      />
      <textarea 
        name="message" 
        onChange={handleChange} 
        value={form.message} 
        placeholder="Message" 
        className="w-full p-2 border rounded" 
        required 
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
