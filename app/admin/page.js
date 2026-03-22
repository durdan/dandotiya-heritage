"use client";

import { useState, useEffect, useCallback } from "react";

/* ─── Schema definition (mirrors tina/config.js) ─── */

const SCHEMA = {
  hero: {
    label: "Hero",
    fields: [
      { type: "string", name: "invocation", label: "Invocation" },
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "subtitle", label: "Subtitle" },
      { type: "string", name: "scrollLabel", label: "Scroll Label" },
      // tagline is rich-text stored as object — we skip editing it in this simple CMS
    ],
  },
  identity: {
    label: "Core Identity",
    fields: [
      { type: "string", name: "sectionLabel", label: "Section Label" },
      { type: "string", name: "sectionTitle", label: "Section Title" },
      {
        type: "array",
        name: "cards",
        label: "Cards",
        fields: [
          { type: "string", name: "icon", label: "Icon" },
          { type: "string", name: "label", label: "Label" },
          { type: "string", name: "value", label: "Value" },
          { type: "textarea", name: "note", label: "Note" },
        ],
      },
      { type: "string", name: "loreTitle", label: "Lore Title" },
      { type: "textarea", name: "loreText", label: "Lore Text" },
    ],
  },
  bhrigu: {
    label: "Maharishi Bhrigu",
    fields: [
      { type: "string", name: "sectionLabel", label: "Section Label" },
      { type: "string", name: "sectionTitle", label: "Section Title" },
      {
        type: "object",
        name: "portrait",
        label: "Portrait",
        fields: [
          { type: "string", name: "icon", label: "Icon" },
          { type: "string", name: "name", label: "Name" },
          { type: "string", name: "devName", label: "Dev Name" },
          { type: "string", name: "role", label: "Role" },
        ],
      },
      {
        type: "array",
        name: "facts",
        label: "Facts",
        fields: [
          { type: "string", name: "label", label: "Label" },
          { type: "textarea", name: "text", label: "Text" },
        ],
      },
    ],
  },
  origin: {
    label: "Origin Story",
    fields: [
      { type: "string", name: "sectionLabel", label: "Section Label" },
      { type: "string", name: "sectionTitle", label: "Section Title" },
      {
        type: "array",
        name: "steps",
        label: "Steps",
        fields: [
          { type: "number", name: "number", label: "Number" },
          { type: "string", name: "title", label: "Title" },
          { type: "textarea", name: "text", label: "Text" },
          { type: "string", name: "tag", label: "Tag" },
        ],
      },
      {
        type: "object",
        name: "divineQuote",
        label: "Divine Quote",
        fields: [
          { type: "string", name: "attribution", label: "Attribution" },
          { type: "textarea", name: "quote", label: "Quote" },
          { type: "textarea", name: "subtext", label: "Subtext" },
        ],
      },
      {
        type: "object",
        name: "finalStep",
        label: "Final Step",
        fields: [
          { type: "number", name: "number", label: "Number" },
          { type: "string", name: "title", label: "Title" },
          { type: "textarea", name: "text", label: "Text" },
        ],
      },
    ],
  },
  dwarka: {
    label: "Dwarka",
    fields: [
      { type: "string", name: "sectionLabel", label: "Section Label" },
      { type: "string", name: "sectionTitle", label: "Section Title" },
      {
        type: "array",
        name: "cards",
        label: "Cards",
        fields: [
          { type: "string", name: "icon", label: "Icon" },
          { type: "string", name: "title", label: "Title" },
          { type: "textarea", name: "text", label: "Text" },
          { type: "textarea", name: "fact", label: "Fact" },
        ],
      },
    ],
  },
  vedic: {
    label: "Vedic Identity",
    fields: [
      { type: "string", name: "sectionLabel", label: "Section Label" },
      { type: "string", name: "sectionTitle", label: "Section Title" },
      {
        type: "array",
        name: "cards",
        label: "Cards",
        fields: [
          { type: "string", name: "icon", label: "Icon" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "main", label: "Main" },
          { type: "textarea", name: "text", label: "Text" },
        ],
      },
    ],
  },
  deities: {
    label: "Deities",
    fields: [
      { type: "string", name: "sectionLabel", label: "Section Label" },
      { type: "string", name: "sectionTitle", label: "Section Title" },
      {
        type: "array",
        name: "cards",
        label: "Cards",
        fields: [
          { type: "string", name: "icon", label: "Icon" },
          { type: "string", name: "role", label: "Role" },
          { type: "string", name: "name", label: "Name" },
          { type: "string", name: "devName", label: "Dev Name" },
          { type: "textarea", name: "description", label: "Description" },
        ],
      },
    ],
  },
  timeline: {
    label: "Timeline",
    fields: [
      { type: "string", name: "sectionLabel", label: "Section Label" },
      { type: "string", name: "sectionTitle", label: "Section Title" },
      {
        type: "array",
        name: "events",
        label: "Events",
        fields: [
          { type: "string", name: "era", label: "Era" },
          { type: "string", name: "event", label: "Event" },
          { type: "textarea", name: "description", label: "Description" },
        ],
      },
    ],
  },
  geography: {
    label: "Sacred Geography",
    fields: [
      { type: "string", name: "sectionLabel", label: "Section Label" },
      { type: "string", name: "sectionTitle", label: "Section Title" },
      {
        type: "array",
        name: "sites",
        label: "Sites",
        fields: [
          { type: "string", name: "icon", label: "Icon" },
          { type: "string", name: "name", label: "Name" },
          { type: "textarea", name: "description", label: "Description" },
        ],
      },
    ],
  },
  migration: {
    label: "Migration",
    fields: [
      { type: "string", name: "sectionLabel", label: "Section Label" },
      { type: "string", name: "sectionTitle", label: "Section Title" },
      {
        type: "array",
        name: "nodes",
        label: "Nodes",
        fields: [
          { type: "string", name: "icon", label: "Icon" },
          { type: "string", name: "name", label: "Name" },
          { type: "string", name: "subtitle", label: "Subtitle" },
        ],
      },
    ],
  },
  outro: {
    label: "Outro",
    fields: [
      {
        type: "array",
        name: "lines",
        label: "Lines",
        fields: [
          { type: "string", name: "text", label: "Text" },
          { type: "boolean", name: "highlight", label: "Highlight" },
        ],
      },
      {
        type: "object",
        name: "seal",
        label: "Seal",
        fields: [
          { type: "string", name: "om", label: "Om" },
          { type: "string", name: "text", label: "Text" },
        ],
      },
    ],
  },
  footnotes: {
    label: "Footnotes",
    fields: [
      { type: "string", name: "title", label: "Title" },
      {
        type: "array",
        name: "cards",
        label: "Cards",
        fields: [
          { type: "string", name: "heading", label: "Heading" },
          { type: "textarea", name: "body", label: "Body" },
        ],
      },
    ],
  },
  footer: {
    label: "Footer",
    fields: [
      { type: "string", name: "brand", label: "Brand" },
      { type: "textarea", name: "note", label: "Note" },
    ],
  },
};

const SECTION_KEYS = Object.keys(SCHEMA);

/* ─── Styles ─── */

const colors = {
  bg: "#F5EDD8",
  bgDark: "#EDE3C8",
  text: "#1A0F00",
  textMuted: "#3D2800",
  accent: "#C45C00",
  accentHover: "#E87820",
  border: "rgba(196,92,0,0.2)",
  white: "#FFFEF9",
  danger: "#B91C1C",
  success: "#166534",
};

const S = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: colors.bg,
    color: colors.text,
  },
  sidebar: {
    width: 240,
    minWidth: 240,
    background: colors.bgDark,
    borderRight: `1px solid ${colors.border}`,
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    overflowY: "auto",
    zIndex: 10,
  },
  sidebarHeader: {
    padding: "20px 16px 12px",
    borderBottom: `1px solid ${colors.border}`,
  },
  sidebarTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: colors.accent,
    margin: 0,
  },
  sidebarSubtitle: {
    fontSize: 11,
    color: colors.textMuted,
    margin: "4px 0 0",
  },
  navItem: (active) => ({
    display: "block",
    width: "100%",
    padding: "10px 16px",
    border: "none",
    background: active ? colors.accent : "transparent",
    color: active ? colors.white : colors.textMuted,
    textAlign: "left",
    fontSize: 14,
    cursor: "pointer",
    borderLeft: active ? `3px solid ${colors.accentHover}` : "3px solid transparent",
    fontWeight: active ? 600 : 400,
  }),
  main: {
    marginLeft: 240,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    borderBottom: `1px solid ${colors.border}`,
    background: colors.white,
    position: "sticky",
    top: 0,
    zIndex: 5,
    flexWrap: "wrap",
    gap: 8,
  },
  langTab: (active) => ({
    padding: "6px 16px",
    border: `1px solid ${colors.border}`,
    background: active ? colors.accent : "transparent",
    color: active ? colors.white : colors.textMuted,
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 13,
    fontWeight: active ? 600 : 400,
  }),
  saveBtn: {
    padding: "8px 24px",
    background: colors.accent,
    color: colors.white,
    border: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  editor: {
    padding: 24,
    maxWidth: 900,
    width: "100%",
    flex: 1,
  },
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: colors.textMuted,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },
  input: {
    width: "100%",
    padding: "8px 10px",
    border: `1px solid ${colors.border}`,
    borderRadius: 4,
    fontSize: 14,
    background: colors.white,
    color: colors.text,
    boxSizing: "border-box",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "8px 10px",
    border: `1px solid ${colors.border}`,
    borderRadius: 4,
    fontSize: 14,
    background: colors.white,
    color: colors.text,
    boxSizing: "border-box",
    minHeight: 100,
    resize: "vertical",
    outline: "none",
    fontFamily: "inherit",
  },
  checkbox: {
    marginRight: 8,
    accentColor: colors.accent,
  },
  fieldset: {
    border: `1px solid ${colors.border}`,
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
    background: colors.white,
  },
  legend: {
    fontSize: 13,
    fontWeight: 600,
    color: colors.accent,
    padding: "0 6px",
  },
  arrayCard: {
    border: `1px solid ${colors.border}`,
    borderRadius: 6,
    marginBottom: 12,
    background: colors.white,
    overflow: "hidden",
  },
  arrayCardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 14px",
    cursor: "pointer",
    background: colors.bgDark,
    borderBottom: `1px solid ${colors.border}`,
  },
  arrayCardBody: {
    padding: 14,
  },
  removeBtn: {
    padding: "4px 10px",
    background: colors.danger,
    color: "#fff",
    border: "none",
    borderRadius: 3,
    fontSize: 12,
    cursor: "pointer",
  },
  addBtn: {
    padding: "6px 16px",
    background: "transparent",
    color: colors.accent,
    border: `1px dashed ${colors.accent}`,
    borderRadius: 4,
    fontSize: 13,
    cursor: "pointer",
    fontWeight: 600,
  },
  toast: (type) => ({
    position: "fixed",
    bottom: 24,
    right: 24,
    padding: "12px 24px",
    borderRadius: 6,
    color: "#fff",
    background: type === "success" ? colors.success : colors.danger,
    fontSize: 14,
    fontWeight: 600,
    zIndex: 100,
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  }),
  authOverlay: {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: colors.bg,
    zIndex: 1000,
  },
  authBox: {
    background: colors.white,
    border: `1px solid ${colors.border}`,
    borderRadius: 8,
    padding: 32,
    width: 340,
    textAlign: "center",
  },
  previewLink: {
    fontSize: 13,
    color: colors.accent,
    textDecoration: "underline",
    cursor: "pointer",
  },
};

/* ─── Helpers ─── */

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function getItemSummary(item, fields) {
  for (const f of fields) {
    if (["name", "title", "label", "heading", "event", "era", "text"].includes(f.name)) {
      const val = item[f.name];
      if (val && typeof val === "string") return val.slice(0, 60);
    }
  }
  return "(item)";
}

function makeEmptyItem(fields) {
  const item = {};
  for (const f of fields) {
    if (f.type === "boolean") item[f.name] = false;
    else if (f.type === "number") item[f.name] = 0;
    else item[f.name] = "";
  }
  return item;
}

/* ─── Field Renderers ─── */

function StringField({ label, value, onChange }) {
  return (
    <div style={S.fieldGroup}>
      <label style={S.label}>{label}</label>
      <input
        style={S.input}
        type="text"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function TextareaField({ label, value, onChange }) {
  return (
    <div style={S.fieldGroup}>
      <label style={S.label}>{label}</label>
      <textarea
        style={S.textarea}
        rows={4}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function NumberField({ label, value, onChange }) {
  return (
    <div style={S.fieldGroup}>
      <label style={S.label}>{label}</label>
      <input
        style={S.input}
        type="number"
        value={value ?? 0}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

function BooleanField({ label, value, onChange }) {
  return (
    <div style={{ ...S.fieldGroup, display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        style={S.checkbox}
        checked={!!value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label style={{ ...S.label, margin: 0, textTransform: "none", fontSize: 14 }}>{label}</label>
    </div>
  );
}

function renderField(fieldDef, value, onChange) {
  const { type, label } = fieldDef;
  switch (type) {
    case "string":
      return <StringField key={fieldDef.name} label={label} value={value} onChange={onChange} />;
    case "textarea":
      return <TextareaField key={fieldDef.name} label={label} value={value} onChange={onChange} />;
    case "number":
      return <NumberField key={fieldDef.name} label={label} value={value} onChange={onChange} />;
    case "boolean":
      return <BooleanField key={fieldDef.name} label={label} value={value} onChange={onChange} />;
    default:
      return null;
  }
}

function ObjectFieldset({ label, fields, data, onChange }) {
  const obj = data || {};
  return (
    <fieldset style={S.fieldset}>
      <legend style={S.legend}>{label}</legend>
      {fields.map((f) =>
        renderField(f, obj[f.name], (val) => {
          const next = { ...obj, [f.name]: val };
          onChange(next);
        })
      )}
    </fieldset>
  );
}

function ArrayEditor({ label, fields, items, onChange }) {
  const arr = items || [];
  const [collapsed, setCollapsed] = useState(() => arr.map(() => true));

  useEffect(() => {
    setCollapsed((prev) => {
      if (prev.length === arr.length) return prev;
      return arr.map((_, i) => (i < prev.length ? prev[i] : true));
    });
  }, [arr.length]);

  const toggle = (i) => {
    setCollapsed((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const updateItem = (index, field, val) => {
    const next = deepClone(arr);
    next[index][field] = val;
    onChange(next);
  };

  const removeItem = (index) => {
    const next = arr.filter((_, i) => i !== index);
    onChange(next);
  };

  const addItem = () => {
    const next = [...deepClone(arr), makeEmptyItem(fields)];
    onChange(next);
    setCollapsed((prev) => [...prev, false]);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ ...S.label, fontSize: 14, marginBottom: 8 }}>{label}</label>
      {arr.map((item, i) => (
        <div key={i} style={S.arrayCard}>
          <div style={S.arrayCardHeader} onClick={() => toggle(i)}>
            <span style={{ fontSize: 13, fontWeight: 600, color: colors.textMuted }}>
              {collapsed[i] ? "\u25B6" : "\u25BC"} #{i + 1} — {getItemSummary(item, fields)}
            </span>
            <button
              style={S.removeBtn}
              onClick={(e) => {
                e.stopPropagation();
                removeItem(i);
              }}
            >
              Remove
            </button>
          </div>
          {!collapsed[i] && (
            <div style={S.arrayCardBody}>
              {fields.map((f) =>
                renderField(f, item[f.name], (val) => updateItem(i, f.name, val))
              )}
            </div>
          )}
        </div>
      ))}
      <button style={S.addBtn} onClick={addItem}>
        + Add Item
      </button>
    </div>
  );
}

/* ─── Section Editor ─── */

function SectionEditor({ sectionKey, schema, data, setData }) {
  if (!data || !schema) return null;

  const sectionData = data[sectionKey] || {};

  const updateField = useCallback(
    (fieldName, value) => {
      setData((prev) => ({
        ...prev,
        [sectionKey]: {
          ...prev[sectionKey],
          [fieldName]: value,
        },
      }));
    },
    [sectionKey, setData]
  );

  return (
    <div>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: colors.accent, marginBottom: 20 }}>
        {schema.label}
      </h2>
      {schema.fields.map((field) => {
        if (field.type === "array") {
          return (
            <ArrayEditor
              key={field.name}
              label={field.label}
              fields={field.fields}
              items={sectionData[field.name]}
              onChange={(val) => updateField(field.name, val)}
            />
          );
        }
        if (field.type === "object") {
          return (
            <ObjectFieldset
              key={field.name}
              label={field.label}
              fields={field.fields}
              data={sectionData[field.name]}
              onChange={(val) => updateField(field.name, val)}
            />
          );
        }
        return renderField(field, sectionData[field.name], (val) =>
          updateField(field.name, val)
        );
      })}
    </div>
  );
}

/* ─── Main Admin Page ─── */

const PASSWORD = "dandotiya2024";
const AUTH_KEY = "dandotiya_admin_auth";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);

  const [lang, setLang] = useState("hi");
  const [data, setData] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // Check stored auth
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(AUTH_KEY);
      if (stored === PASSWORD) setAuthed(true);
    }
  }, []);

  const handleLogin = () => {
    if (pwInput === PASSWORD) {
      localStorage.setItem(AUTH_KEY, pwInput);
      setAuthed(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setPwInput("");
  };

  // Fetch content
  const fetchContent = useCallback(async (language) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/content?lang=${language}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      setData(json);
    } catch (err) {
      showToast("error", "Failed to load content");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed) fetchContent(lang);
  }, [authed, lang, fetchContent]);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSave = async () => {
    if (!data) return;
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, content: data }),
      });
      if (!res.ok) throw new Error("Failed to save");
      showToast("success", "Saved successfully! / सहेजा गया!");
    } catch (err) {
      showToast("error", "Failed to save / सहेजने में त्रुटि");
    }
  };

  const handleLangSwitch = (newLang) => {
    if (newLang !== lang) {
      setLang(newLang);
      setActiveSection("hero");
    }
  };

  /* ─── Auth Gate ─── */
  if (!authed) {
    return (
      <div style={S.authOverlay}>
        <div style={S.authBox}>
          <h1 style={{ fontSize: 20, color: colors.accent, marginBottom: 4 }}>
            दंडोतिया विरासत
          </h1>
          <p style={{ fontSize: 13, color: colors.textMuted, marginBottom: 20 }}>
            Admin access required
          </p>
          <input
            style={{ ...S.input, marginBottom: 12, textAlign: "center" }}
            type="password"
            placeholder="Password"
            value={pwInput}
            onChange={(e) => {
              setPwInput(e.target.value);
              setPwError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          {pwError && (
            <p style={{ color: colors.danger, fontSize: 13, margin: "0 0 12px" }}>
              Incorrect password
            </p>
          )}
          <button style={{ ...S.saveBtn, width: "100%" }} onClick={handleLogin}>
            Enter
          </button>
        </div>
      </div>
    );
  }

  /* ─── Main Layout ─── */
  return (
    <div style={S.page}>
      {/* Sidebar */}
      <aside style={S.sidebar}>
        <div style={S.sidebarHeader}>
          <p style={S.sidebarTitle}>दंडोतिया विरासत</p>
          <p style={S.sidebarSubtitle}>संपादक / Editor</p>
        </div>
        <nav>
          {SECTION_KEYS.map((key) => (
            <button
              key={key}
              style={S.navItem(activeSection === key)}
              onClick={() => setActiveSection(key)}
            >
              {SCHEMA[key].label}
            </button>
          ))}
        </nav>
        <div style={{ padding: "16px", borderTop: `1px solid ${colors.border}` }}>
          <button
            style={{ ...S.removeBtn, width: "100%", background: colors.textMuted, fontSize: 12 }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main area */}
      <main style={S.main}>
        {/* Top bar */}
        <div style={S.topBar}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button style={S.langTab(lang === "hi")} onClick={() => handleLangSwitch("hi")}>
              हिन्दी (Hindi)
            </button>
            <button style={S.langTab(lang === "en")} onClick={() => handleLangSwitch("en")}>
              English
            </button>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a
              style={S.previewLink}
              href={lang === "en" ? "/en" : "/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview site
            </a>
            <button style={S.saveBtn} onClick={handleSave}>
              Save / सहेजें
            </button>
          </div>
        </div>

        {/* Editor */}
        <div style={S.editor}>
          {loading && <p style={{ color: colors.textMuted }}>Loading...</p>}
          {!loading && data && (
            <SectionEditor
              sectionKey={activeSection}
              schema={SCHEMA[activeSection]}
              data={data}
              setData={setData}
            />
          )}
        </div>
      </main>

      {/* Toast */}
      {toast && <div style={S.toast(toast.type)}>{toast.message}</div>}
    </div>
  );
}
