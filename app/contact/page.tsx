"use client";

import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import ScrollToTop from "@/Components/ScrollToTop";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <main className="min-h-screen relative">
        <Navbar />

        <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-600/20 via-purple-600/10 to-transparent blur-3xl" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

        <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Get In <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
              Have a project idea, opportunity, or just want to connect? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold">Let's Connect</h2>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new opportunities, internships,
                collaborations, or innovative ideas.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">📧</div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:nisant54321@gmail.com" className="text-white hover:text-blue-400">
                      nisant54321@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">💻</div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a href="https://github.com/Vikash-Kumar-fullstack" target="_blank" className="text-white hover:text-blue-400">
                      Vikash-Kumar-fullstack
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">🔗</div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/vikash-kumar-fullstack/" target="_blank" className="text-white hover:text-blue-400">
                      vikash-kumar-fullstack
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full p-4 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className="text-green-400 text-center mt-4">
                    Message sent successfully!
                  </p>
                )}

                {error && (
                  <p className="text-red-400 text-center mt-4">
                    {error}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </section>

        <ScrollToTop />
      </main>
    </>
  );
}