'use client';
import { useEffect, useState } from "react";

export default function InquiryList() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    fetch("/api/inquiry")
      .then((res) => res.json())
      .then((data) => setInquiries(data));
  }, []);

  return (
    <div className="space-y-4">
      {inquiries.map((inq, idx) => (
        <div key={idx} className="border p-4 rounded shadow">
          <p><strong>Name:</strong> {inq.name}</p>
          <p><strong>Email:</strong> {inq.email}</p>
          <p><strong>Phone:</strong> {inq.phone}</p>
          <p><strong>Message:</strong> {inq.message}</p>
        </div>
      ))}
    </div>
  );
}
