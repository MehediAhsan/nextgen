// app/components/page.jsx
"use client";
import Accordion from "@/components/mehedi/Accordion";
import { useState } from "react";
import { FaExpand } from "react-icons/fa";

const categories = [
  "Article",
  "Avatar",
  "Banner",
  "Blog",
  "Breadcrumb",
  "Button",
  "Call to action",
  "Card",
  "Carousel",
  "Contact",
  "Error",
  "Faq",
  "Feature",
  "Footer",
  "Form",
  "Gallery",
  "Header",
  "Hero",
  "Input",
  "Loading",
  "Login",
  "Modal",
  "News",
  "Pagination",
  "Pricing",
  "Profile",
  "Review",
  "Shopping cart",
  "Sidebar",
  "Skeleton loader",
  "Slider",
  "Snackbar",
  "Stats",
  "Steps",
  "Table",
  "Tabs",
  "Team",
  "Testimonial",
  "Timeline",
  "Toggle",
  "Weather",
];

const ComponentMap = [
  {
    category: "Accordion",
    preview: <Accordion />,
  },
];

export default function ComponentsPage() {
  const [selected, setSelected] = useState(ComponentMap[0].category);
  const [selectedComponent, setSelectedComponent] = useState(
    ComponentMap[0].preview
  );
  const [tab, setTab] = useState("preview");
  const [search, setSearch] = useState("");

  const filteredCategories = ComponentMap?.filter((c) =>
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  const sampleCode = {
    preview: (
      <div className="p-6 bg-gray-800 text-white rounded-xl">
        <h2 className="text-xl font-semibold mb-1">
          Sample {selected} Component
        </h2>
        <p className="text-gray-300 text-sm">This is a placeholder preview.</p>
      </div>
    ),
    jsx: `export const Example = () => {\n  return (\n    <div className=\"p-6 bg-gray-800 text-white rounded-xl\">\n      <h2 className=\"text-xl font-semibold mb-1\">Sample ${selected} Component</h2>\n      <p className=\"text-gray-300 text-sm\">This is a placeholder preview.</p>\n    </div>\n  );\n}`,
  };

  return (
    <main className="min-h-screen px-6 md:px-12 py-14 bg-[#0d1117] text-white">
      <h1 className="text-5xl font-bold mb-2">Components</h1>
      <p className="text-gray-400 mb-10">{ComponentMap.length} components</p>

      <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="Filter categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 bg-[#161b22] border border-gray-700 rounded-lg text-sm w-64 focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-3 mb-16">
        {filteredCategories.map((cat) => (
          <button
            key={cat.category}
            onClick={() => {
              setSelected(cat.category);
              setSelectedComponent(cat.preview);
            }}
            className={`px-4 py-2 rounded-lg border text-sm transition
              ${
                selected === cat.category
                  ? "border-purple-400 bg-purple-400/10"
                  : "border-gray-700 bg-[#1b1f24] hover:bg-[#22272e]"
              }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <h2 className="text-3xl font-semibold text-center mb-6">
        {selected} components
      </h2>

      <div className="bg-[#1b1f24] rounded-t-xl border border-gray-700 overflow-hidden">
        <div className="flex gap-6 px-6 py-4 border-b border-gray-700 text-sm">
          {["preview", "html", "jsx"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`${
                tab === t
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}

          <button className="ml-auto text-gray-400 hover:text-white text-lg">
            <FaExpand />
          </button>
        </div>

        <div className="p-6 min-h-[300px]">
          {tab === "preview" && selectedComponent}

          {tab === "jsx" && (
            <pre className="whitespace-pre-wrap text-sm text-gray-200">
              {sampleCode.jsx}
            </pre>
          )}
        </div>
      </div>
    </main>
  );
}
