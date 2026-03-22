import { defineConfig } from "tinacms";

const heroFields = [
  { type: "string", name: "invocation", label: "Invocation" },
  { type: "string", name: "title", label: "Title" },
  { type: "string", name: "subtitle", label: "Subtitle" },
  { type: "rich-text", name: "tagline", label: "Tagline" },
  { type: "string", name: "scrollLabel", label: "Scroll Label" },
];

const identityFields = [
  { type: "string", name: "sectionLabel", label: "Section Label" },
  { type: "string", name: "sectionTitle", label: "Section Title" },
  {
    type: "object",
    name: "cards",
    label: "Cards",
    list: true,
    fields: [
      { type: "string", name: "icon", label: "Icon" },
      { type: "string", name: "label", label: "Label" },
      { type: "string", name: "value", label: "Value" },
      { type: "string", name: "note", label: "Note" },
    ],
  },
  { type: "string", name: "loreTitle", label: "Lore Title" },
  { type: "string", name: "loreText", label: "Lore Text", ui: { component: "textarea" } },
];

const bhriguFields = [
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
    type: "object",
    name: "facts",
    label: "Facts",
    list: true,
    fields: [
      { type: "string", name: "label", label: "Label" },
      { type: "string", name: "text", label: "Text" },
    ],
  },
];

const originFields = [
  { type: "string", name: "sectionLabel", label: "Section Label" },
  { type: "string", name: "sectionTitle", label: "Section Title" },
  {
    type: "object",
    name: "steps",
    label: "Steps",
    list: true,
    fields: [
      { type: "number", name: "number", label: "Number" },
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
      { type: "string", name: "tag", label: "Tag" },
    ],
  },
  {
    type: "object",
    name: "divineQuote",
    label: "Divine Quote",
    fields: [
      { type: "string", name: "attribution", label: "Attribution" },
      { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
      { type: "string", name: "subtext", label: "Subtext" },
    ],
  },
  {
    type: "object",
    name: "finalStep",
    label: "Final Step",
    fields: [
      { type: "number", name: "number", label: "Number" },
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
    ],
  },
];

const dwarkaFields = [
  { type: "string", name: "sectionLabel", label: "Section Label" },
  { type: "string", name: "sectionTitle", label: "Section Title" },
  {
    type: "object",
    name: "cards",
    label: "Cards",
    list: true,
    fields: [
      { type: "string", name: "icon", label: "Icon" },
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
      { type: "string", name: "fact", label: "Fact" },
    ],
  },
];

const vedicFields = [
  { type: "string", name: "sectionLabel", label: "Section Label" },
  { type: "string", name: "sectionTitle", label: "Section Title" },
  {
    type: "object",
    name: "cards",
    label: "Cards",
    list: true,
    fields: [
      { type: "string", name: "icon", label: "Icon" },
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "main", label: "Main" },
      { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
    ],
  },
];

const deitiesFields = [
  { type: "string", name: "sectionLabel", label: "Section Label" },
  { type: "string", name: "sectionTitle", label: "Section Title" },
  {
    type: "object",
    name: "cards",
    label: "Cards",
    list: true,
    fields: [
      { type: "string", name: "icon", label: "Icon" },
      { type: "string", name: "role", label: "Role" },
      { type: "string", name: "name", label: "Name" },
      { type: "string", name: "devName", label: "Dev Name" },
      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    ],
  },
];

const timelineFields = [
  { type: "string", name: "sectionLabel", label: "Section Label" },
  { type: "string", name: "sectionTitle", label: "Section Title" },
  {
    type: "object",
    name: "events",
    label: "Events",
    list: true,
    fields: [
      { type: "string", name: "era", label: "Era" },
      { type: "string", name: "event", label: "Event" },
      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    ],
  },
];

const geographyFields = [
  { type: "string", name: "sectionLabel", label: "Section Label" },
  { type: "string", name: "sectionTitle", label: "Section Title" },
  {
    type: "object",
    name: "sites",
    label: "Sites",
    list: true,
    fields: [
      { type: "string", name: "icon", label: "Icon" },
      { type: "string", name: "name", label: "Name" },
      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    ],
  },
];

const migrationFields = [
  { type: "string", name: "sectionLabel", label: "Section Label" },
  { type: "string", name: "sectionTitle", label: "Section Title" },
  {
    type: "object",
    name: "nodes",
    label: "Nodes",
    list: true,
    fields: [
      { type: "string", name: "icon", label: "Icon" },
      { type: "string", name: "name", label: "Name" },
      { type: "string", name: "subtitle", label: "Subtitle" },
    ],
  },
];

const outroFields = [
  {
    type: "object",
    name: "lines",
    label: "Lines",
    list: true,
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
];

const footnotesFields = [
  { type: "string", name: "title", label: "Title" },
  {
    type: "object",
    name: "cards",
    label: "Cards",
    list: true,
    fields: [
      { type: "string", name: "heading", label: "Heading" },
      { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
    ],
  },
];

const footerFields = [
  { type: "string", name: "brand", label: "Brand" },
  { type: "string", name: "note", label: "Note" },
];

export default defineConfig({
  branch: "main",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "",
    },
  },
  schema: {
    collections: [
      {
        name: "portal",
        label: "Portal",
        path: "content/portal",
        format: "json",
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: heroFields,
          },
          {
            type: "object",
            name: "identity",
            label: "Core Identity",
            fields: identityFields,
          },
          {
            type: "object",
            name: "bhrigu",
            label: "Maharishi Bhrigu",
            fields: bhriguFields,
          },
          {
            type: "object",
            name: "origin",
            label: "Origin Story",
            fields: originFields,
          },
          {
            type: "object",
            name: "dwarka",
            label: "Dwarka",
            fields: dwarkaFields,
          },
          {
            type: "object",
            name: "vedic",
            label: "Vedic Identity",
            fields: vedicFields,
          },
          {
            type: "object",
            name: "deities",
            label: "Deities",
            fields: deitiesFields,
          },
          {
            type: "object",
            name: "timeline",
            label: "Timeline",
            fields: timelineFields,
          },
          {
            type: "object",
            name: "geography",
            label: "Sacred Geography",
            fields: geographyFields,
          },
          {
            type: "object",
            name: "migration",
            label: "Migration",
            fields: migrationFields,
          },
          {
            type: "object",
            name: "outro",
            label: "Outro",
            fields: outroFields,
          },
          {
            type: "object",
            name: "footnotes",
            label: "Footnotes",
            fields: footnotesFields,
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: footerFields,
          },
        ],
      },
    ],
  },
});
