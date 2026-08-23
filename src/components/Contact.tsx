"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone").max(20).regex(/^[0-9+\s()-]+$/, "Phone can contain digits, spaces and +()-"),
  subject: z.string().min(1, "Subject is required"),
  productName: z.string().optional().or(z.literal("")),
  message: z.string().min(1, "Message is required"),
});
type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", productName: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          productName: data.productName || "",
          message: data.message,
        }),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(body.message || `Server returned ${res.status}`);
      }

      reset();
      router.push("/thank-you");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Network error";
      alert(`Failed to send inquiry: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-[#FB923C]">Touch</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Ready to discuss your cable tray and raceway requirements? Contact our expert team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <input {...register("name")} placeholder="Name" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#045AA2] focus:border-transparent outline-none" />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input {...register("email")} type="email" placeholder="your@email.com" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#045AA2] focus:border-transparent outline-none" />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input {...register("phone")} placeholder="+91 " className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#045AA2] focus:border-transparent outline-none" />
                    {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Product / Service (optional)</label>
                    <input {...register("productName")} placeholder="Product Name (optional)" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#045AA2] focus:border-transparent outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <input {...register("subject")} placeholder="What can we help you with?" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#045AA2] focus:border-transparent outline-none" />
                  {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea {...register("message")} placeholder="Tell us about your requirements..." className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#045AA2] focus:border-transparent outline-none min-h-32" />
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-[#045AA2] hover:bg-[#034a85] text-white rounded-lg font-medium transition-colors disabled:opacity-50">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-[#EF7F1A] mr-2" />
                <h4 className="font-bold">Phone</h4>
              </div>
              <p className="text-lg font-semibold">+91-7836870201</p>
              <p className="text-gray-500 text-sm">Mon-Sat 10:00 AM - 7:00 PM</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 text-[#EF7F1A] mr-2" />
                <h4 className="font-bold">Email</h4>
              </div>
              <p className="text-lg font-semibold">sales@jpelectricalcontrols.com</p>
              <p className="text-gray-500 text-sm">We&apos;ll respond within 24 hours</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 text-[#EF7F1A] mr-2" />
                <h4 className="font-bold">Location</h4>
              </div>
              <p className="font-semibold">JP Electrical & Controls</p>
              <p className="text-gray-500 text-sm">J-80, Site-C, Surajpur Industrial Area, Greater Noida (U.P.) India</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 text-[#EF7F1A] mr-2" />
                <h4 className="font-bold">Business Hours</h4>
              </div>
              <div className="flex justify-between text-sm">
                <span>Monday - Saturday</span>
                <span className="text-gray-500">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Sunday</span>
                <span className="text-gray-500">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
