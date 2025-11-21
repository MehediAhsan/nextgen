"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaGithub,
  FaPlay,
  FaCode,
  FaRocket,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 fixed w-full backdrop-blur border-b border-gray-800 z-50">
        <h1 className="text-2xl font-bold">NextGen</h1>

        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#components" className="hover:text-white transition">
            Components
          </a>
          <a href="#docs" className="hover:text-white transition">
            Docs
          </a>
        </div>

        <div className="hidden md:block">
          <a
            href="https://github.com"
            className="px-5 py-2 bg-gray-800 text-white rounded-xl shadow text-sm flex items-center gap-2 hover:bg-gray-700 transition"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-gray-800 shadow-lg px-6 py-6 flex flex-col gap-4 text-lg z-40">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#components" className="hover:text-white transition">
            Components
          </a>
          <a href="#docs" className="hover:text-white transition">
            Docs
          </a>
          <a
            href="https://github.com"
            className="flex items-center gap-2 mt-2 hover:text-white"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      )}

      <section className="px-6 md:px-12 pt-36 pb-28 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Build Faster with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            NextGen UI
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
          A modern open-source React & Next.js component library powered by
          Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/components"
            className="px-7 py-3 bg-white text-gray-900 rounded-xl shadow hover:opacity-80 transition flex items-center gap-2"
          >
            <FaPlay /> Explore
          </Link>
          <a
            href="https://github.com"
            className="px-7 py-3 border border-gray-600 rounded-xl shadow hover:bg-gray-700 transition flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-gray-800" id="features">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Why Developers Choose NextGen
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl shadow-sm border border-gray-700 hover:shadow-md transition bg-gray-900">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Modular & Reusable
            </h3>
            <p className="text-gray-400">
              Every component is crafted to be flexible and customizable.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-sm border border-gray-700 hover:shadow-md transition bg-gray-900">
            <FaCode className="text-4xl mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Clean Codebase
            </h3>
            <p className="text-gray-400">
              Simple, readable and scalable component architecture.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-sm border border-gray-700 hover:shadow-md transition bg-gray-900">
            <FaRocket className="text-4xl mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Production-Ready
            </h3>
            <p className="text-gray-400">
              Accessible, responsive, and performance-optimized UI blocks.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20" id="components">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Try Out Components
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Buttons", "Cards", "Navigation", "Forms", "Modals", "Tables"].map(
            (item) => (
              <div
                key={item}
                className="p-6 bg-gray-900 rounded-2xl shadow border border-gray-700 hover:shadow-xl transition cursor-pointer group"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                  {item}
                </h3>
                <p className="text-gray-400">
                  Fully responsive {item.toLowerCase()} with modern design.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section
        className="px-6 md:px-12 py-24 bg-gray-900 text-white text-center"
        id="docs"
      >
        <h2 className="text-4xl font-bold mb-6">Start Building Today</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Join thousands of developers using NextGen to build beautiful,
          scalable applications.
        </p>
        <a
          href="https://github.com"
          className="px-8 py-4 bg-white text-gray-900 rounded-xl shadow font-semibold inline-flex items-center gap-2"
        >
          <FaGithub /> Visit GitHub
        </a>
      </section>

      <footer className="px-6 md:px-12 py-8 bg-gray-800 border-t border-gray-700 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} NextGen UI — Open Source & Community
          Driven
        </p>
      </footer>
    </main>
  );
}
