import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8 space-y-8">
      <nav className="flex gap-4 text-blue-600">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/works">Works</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <section>
        <h1 className="text-4xl font-bold">Welcome to Our Inquiry Website</h1>
        <p className="mt-4 text-lg">We provide the best solutions for your needs.</p>
      </section>
    </main>
  );
}

// import InquiryForm from "@/components/InquiryForm";
// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <main className="p-8 space-y-8">
//       <nav className="flex gap-4 text-blue-600">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#works">Works</a>
//         <a href="#services">Services</a>
//         <a href="#contact">Contact</a>
//       </nav>
//       <section id="home" className="pt-24">
//         <h1 className="text-4xl font-bold">Welcome to Our Inquiry Website</h1>
//         <p className="mt-4 text-lg">We provide the best solutions for your needs.</p>
//       </section>
//       <section id="about" className="pt-24">
//         <h1 className="text-3xl font-bold mb-4">About Us</h1>
//         <p className="text-lg">We are a company committed to delivering excellent digital services and customer satisfaction.</p>
//       </section>
//       <section id="works" className="pt-24">
//         <h1 className="text-3xl font-bold mb-4">Our Works</h1>
//         <p className="text-lg">Check out some of our past projects and client success stories.</p>
//       </section>
//       <section id="services" className="pt-24">
//         <h1 className="text-3xl font-bold mb-4">Our Services</h1>
//         <ul className="list-disc pl-6 text-lg space-y-2">
//           <li>Web Development</li>
//           <li>UI/UX Design</li>
//           <li>Mobile Applications</li>
//           <li>SEO and Digital Marketing</li>
//         </ul>
//       </section>
//       <section id="contact" className="pt-24">
//         <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
//         <InquiryForm />
//       </section>
//     </main>
//   );
// }
