import React from "react";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent successfully!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container px-5 py-10 mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold">
              Let's Connect
            </span>
          </div>
          <h1 className="sm:text-5xl text-4xl font-bold mb-4 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Interested in working together? Let's discuss your project!
          </p>
        </div>

        <div className="group relative animate-slide-up">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>

          <form
            netlify
            name="test"
            onSubmit={handleSubmit}
            className="relative p-8 md:p-12 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-3xl"
          >
            <div className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-slate-900/50 rounded-xl border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-base outline-none text-white py-3 px-4 transition-all duration-200"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-slate-900/50 rounded-xl border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-base outline-none text-white py-3 px-4 transition-all duration-200"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full bg-slate-900/50 rounded-xl border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-base outline-none text-white py-3 px-4 resize-none transition-all duration-200"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <SocialLinks />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
