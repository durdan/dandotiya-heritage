import Navbar from "./Navbar";
import Mandala from "./Mandala";
import Particles from "./Particles";
import ScrollReveal from "./ScrollReveal";
import FamilyTree from "./FamilyTree";

const NAV_LINKS = {
  hi: [
    { href: "#identity", label: "परिचय" },
    { href: "#bhrigu", label: "भृगु वंश" },
    { href: "#origin", label: "उत्पत्ति" },
    { href: "#dwarka", label: "द्वारका" },
    { href: "#deities", label: "देवी-देवता" },
    { href: "#lineage", label: "इतिहास" },
    { href: "#geography", label: "तीर्थ स्थल" },
    { href: "#tree-section", label: "वंश वृक्ष" },
  ],
  en: [
    { href: "#identity", label: "Identity" },
    { href: "#bhrigu", label: "Bhrigu" },
    { href: "#origin", label: "Origin" },
    { href: "#dwarka", label: "Dwarka" },
    { href: "#deities", label: "Deities" },
    { href: "#lineage", label: "Timeline" },
    { href: "#geography", label: "Geography" },
    { href: "#tree-section", label: "Family Tree" },
  ],
};

// Indices in the outro lines array after which a <br/> is inserted
const OUTRO_BREAK_AFTER = new Set([1, 4, 6, 9, 10, 12]);
// Index of the "hr" styled line in the outro
const OUTRO_HR_INDEX = 11;

function parseTagline(tagline) {
  if (typeof tagline === "string") {
    return tagline;
  }
  // Rich-text object from TinaCMS — extract text from children
  if (tagline && tagline.children) {
    return tagline.children
      .map((child) => {
        if (child.children) {
          return child.children.map((c) => c.text || "").join("");
        }
        return child.text || "";
      })
      .join("\n");
  }
  return "";
}

function CustomSections({ sections, position, fontUI, fontBody, bgClass }) {
  if (!sections || !sections.length) return null;
  const matching = sections.filter((s) => s.position === position);
  if (!matching.length) return null;
  return matching.map((sec, i) => (
    <section
      key={`custom-${position}-${i}`}
      className={`sec-pad ${bgClass || "bg-p"}`}
      id={`custom-${sec.sectionTitle?.replace(/\s+/g, "-").toLowerCase() || i}`}
    >
      <div className="sec-hdr reveal">
        {sec.sectionLabel && (
          <span className="sec-lbl" style={{ fontFamily: fontUI }}>{sec.sectionLabel}</span>
        )}
        <h2 className="sec-ttl" style={{ fontFamily: fontUI }}>{sec.sectionTitle}</h2>
        <div className="sec-rule" />
      </div>
      <div className="lore-box reveal" style={{ maxWidth: 800, margin: "0 auto" }}>
        {(sec.content || "").split("\n\n").map((para, j) => (
          <p key={j} className="lore-p" style={{ fontFamily: fontBody, marginBottom: 16 }}>
            {para}
          </p>
        ))}
      </div>
    </section>
  ));
}

export default function PortalPage({ content, lang }) {
  const isHi = lang === "hi";

  const fontHi = "var(--font-tiro), 'Tiro Devanagari Hindi', serif";
  const fontHiUI = "var(--font-noto), 'Noto Sans Devanagari', sans-serif";
  const fontEn = "var(--font-cinzel), 'Cinzel Decorative', serif";
  const fontCormorant = "var(--font-cormorant), 'Cormorant Garamond', serif";

  // Select fonts based on language
  const fontBody = isHi ? fontHi : fontCormorant;
  const fontUI = isHi ? fontHiUI : fontEn;

  const links = NAV_LINKS[lang] || NAV_LINKS.en;
  const cs = content.customSections || [];
  const csProps = { sections: cs, fontUI, fontBody };

  const taglineStr = parseTagline(content.hero.tagline);
  const taglineLines = taglineStr.split("\n");

  return (
    <div className="page-enter" style={{ fontFamily: fontBody }}>
      <ScrollReveal />
      <Navbar lang={lang} links={links} />

      {/* ══════ HERO ══════ */}
      <section className="hero" id="home">
        <div className="hero-text">
          <Mandala />
          <Particles />
          <div className="h-eye" style={{ fontFamily: fontUI }}>
            {content.hero.invocation}
          </div>
          <h1 className="h-title" style={{ fontFamily: fontUI }}>
            {content.hero.title}
          </h1>
          <div className="h-sub" style={{ fontFamily: fontUI }}>
            {content.hero.subtitle}
          </div>
          <div className="h-div">
            <span className="h-line" />
            <span className="h-om">ॐ</span>
            <span className="h-line" />
          </div>
          <div className="h-tag" style={{ fontFamily: fontUI }}>
            {taglineLines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-banner">
          <img src="/hero-bg.png" alt={lang === 'hi' ? 'भृगु वंश परिवार वृक्ष' : 'Bhrigu Vansh Family Tree'} />
        </div>
      </section>

      {/* ══════ CORE IDENTITY ══════ */}
      <section className="sec-pad bg-p" id="identity">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontUI }}>{content.identity.sectionLabel}</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontUI }}>{content.identity.sectionTitle}</h2>
          <div className="sec-rule" />
        </div>

        <div className="id-grid">
          {content.identity.cards.map((card, i) => (
            <div key={i} className={`id-card reveal d${i + 1}`}>
              <span className="ic-icon">{card.icon}</span>
              <span className="ic-lbl" style={{ fontFamily: fontUI }}>{card.label}</span>
              <span className="ic-val" style={{ fontFamily: fontUI }}>{card.value}</span>
              <span className="ic-note" style={{ fontFamily: fontBody }}>{card.note}</span>
            </div>
          ))}
        </div>

        <div className="lore-box reveal">
          <div className="lore-ttl" style={{ fontFamily: fontUI }}>{content.identity.loreTitle}</div>
          <p className="lore-p" style={{ fontFamily: fontBody }}>
            {content.identity.loreText}
          </p>
        </div>
      </section>
      <CustomSections {...csProps} position="after-identity" bgClass="bg-p2" />

      {/* ══════ MAHARISHI BHRIGU ══════ */}
      <section className="sec-pad bg-p2" id="bhrigu">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontUI }}>{content.bhrigu.sectionLabel}</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontUI }}>{content.bhrigu.sectionTitle}</h2>
          <div className="sec-rule" />
        </div>

        <div className="bhrigu-grid">
          <div className="bhrigu-portrait reveal">
            <span className="bp-icon">{content.bhrigu.portrait.icon}</span>
            <div className="bp-name" style={{ fontFamily: fontUI }}>{content.bhrigu.portrait.name}</div>
            <div style={{ fontFamily: fontUI, fontSize: '16px', color: 'var(--saffron)', opacity: 0.75, marginBottom: '14px' }}>{content.bhrigu.portrait.devName}</div>
            <div className="bp-role" style={{ fontFamily: fontUI }}>{content.bhrigu.portrait.role}</div>
          </div>
          <div className="bhrigu-facts">
            {content.bhrigu.facts.map((fact, i) => (
              <div key={i} className={`bf-item reveal d${i + 1}`}>
                <span className="bf-lbl" style={{ fontFamily: fontUI }}>{fact.label}</span>
                <p className="bf-txt" style={{ fontFamily: fontBody }}>
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CustomSections {...csProps} position="after-bhrigu" bgClass="bg-p" />

      {/* ══════ ORIGIN STORY ══════ */}
      <section className="sec-pad bg-p" id="origin">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontUI }}>{content.origin.sectionLabel}</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontUI }}>{content.origin.sectionTitle}</h2>
          <div className="sec-rule" />
        </div>

        <div className="story-flow reveal">
          {content.origin.steps.map((step, i) => (
            <div key={i} className="sf-step">
              <div className="sf-num" style={{ fontFamily: fontUI }}>{isHi ? toDevanagariNumeral(step.number) : step.number}</div>
              <div>
                <div className="sf-ttl" style={{ fontFamily: fontUI }}>{step.title}</div>
                <p className="sf-txt">{step.text}</p>
                {step.tag && (
                  <span className="sf-tag" style={{ fontFamily: fontUI }}>{step.tag}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="divine-q reveal">
          <span className="dq-attr" style={{ fontFamily: fontUI }}>{content.origin.divineQuote.attribution}</span>
          <div className="dq-text" style={{ fontFamily: fontUI }}>{content.origin.divineQuote.quote}</div>
          <p className="dq-sub">{content.origin.divineQuote.subtext}</p>
        </div>

        <div className="story-flow reveal">
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontUI }}>{isHi ? toDevanagariNumeral(content.origin.finalStep.number) : content.origin.finalStep.number}</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontUI }}>{content.origin.finalStep.title}</div>
              <p className="sf-txt">{content.origin.finalStep.text}</p>
            </div>
          </div>
        </div>
      </section>
      <CustomSections {...csProps} position="after-origin" bgClass="bg-p2" />

      {/* ══════ DWARKA ══════ */}
      <section className="sec-pad bg-p2" id="dwarka">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontUI }}>{content.dwarka.sectionLabel}</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontUI }}>{content.dwarka.sectionTitle}</h2>
          <div className="sec-rule" />
        </div>

        <div className="dwarka-cols">
          {content.dwarka.cards.map((card, i) => (
            <div key={i} className={`dw-card reveal d${i + 1}`}>
              <span className="dw-icon">{card.icon}</span>
              <div className="dw-ttl" style={{ fontFamily: fontUI }}>{card.title}</div>
              <p className="dw-txt" style={{ fontFamily: fontBody }}>
                {card.text}
              </p>
              {card.fact && (
                <div className="dw-fact" style={{ fontFamily: fontBody }}>
                  {card.fact}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <CustomSections {...csProps} position="after-dwarka" bgClass="bg-p" />

      {/* ══════ VEDIC IDENTITY ══════ */}
      <section className="sec-pad bg-p" id="vedic">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontUI }}>{content.vedic.sectionLabel}</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontUI }}>{content.vedic.sectionTitle}</h2>
          <div className="sec-rule" />
        </div>

        <div className="vedic-grid">
          {content.vedic.cards.map((card, i) => (
            <div key={i} className={`vc reveal d${i + 1}`}>
              <span className="vc-icon">{card.icon}</span>
              <div className="vc-ttl" style={{ fontFamily: fontUI }}>{card.title}</div>
              <div className="vc-main" style={{ fontFamily: fontUI }}>{card.main}</div>
              <p className="vc-sub" style={{ fontFamily: fontBody }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <CustomSections {...csProps} position="after-vedic" bgClass="bg-p2" />

      {/* ══════ DEITIES ══════ */}
      <section className="sec-pad bg-p2" id="deities">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontUI }}>{content.deities.sectionLabel}</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontUI }}>{content.deities.sectionTitle}</h2>
          <div className="sec-rule" />
        </div>

        <div className="det-grid">
          {content.deities.cards.map((card, i) => (
            <div key={i} className={`det-card reveal d${i + 1}`}>
              <span className="det-icon">{card.icon}</span>
              <span className="det-role" style={{ fontFamily: fontUI }}>{card.role}</span>
              <div className="det-name" style={{ fontFamily: fontUI }}>{card.name}</div>
              <div className="det-dev" style={{ fontFamily: fontUI }}>{card.devName}</div>
              <p className="det-desc" style={{ fontFamily: fontBody }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <CustomSections {...csProps} position="after-deities" bgClass="bg-p" />

      {/* ══════ TIMELINE ══════ */}
      <section className="sec-pad bg-p" id="lineage">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontUI }}>{content.timeline.sectionLabel}</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontUI }}>{content.timeline.sectionTitle}</h2>
          <div className="sec-rule" />
        </div>

        <div className="tl-wrap">
          {content.timeline.events.map((evt, i) => (
            <div key={i} className={`tl-item reveal${i > 0 ? ` d${(i % 2) + 1}` : ''}`}>
              <div className="tl-dot" />
              <div className="tl-card">
                <span className="tl-era" style={{ fontFamily: fontUI }}>{evt.era}</span>
                <div className="tl-evt" style={{ fontFamily: fontUI }}>{evt.event}</div>
                <p className="tl-desc" style={{ fontFamily: fontBody }}>
                  {evt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CustomSections {...csProps} position="after-timeline" bgClass="bg-p" />

      {/* ══════ SACRED GEOGRAPHY ══════ */}
      <section className="sec-pad bg-p" id="geography">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontUI }}>{content.geography.sectionLabel}</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontUI }}>{content.geography.sectionTitle}</h2>
          <div className="sec-rule" />
        </div>

        <div className="geo-grid">
          {content.geography.sites.map((site, i) => (
            <div key={i} className={`geo-card reveal d${i + 1}`}>
              <span className="geo-icon">{site.icon}</span>
              <div className="geo-name" style={{ fontFamily: fontUI }}>{site.name}</div>
              <p className="geo-desc" style={{ fontFamily: fontBody }}>
                {site.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <CustomSections {...csProps} position="after-geography" bgClass="bg-p2" />

      {/* ══════ MIGRATION ══════ */}
      <section className="sec-pad bg-p2" id="migration">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontUI }}>{content.migration.sectionLabel}</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontUI }}>{content.migration.sectionTitle}</h2>
          <div className="sec-rule" />
        </div>

        <div className="mig-flow reveal">
          {content.migration.nodes.map((node, i) => {
            const items = [];
            if (i > 0) {
              items.push(
                <div key={`arr-${i}`} className="mig-arr">
                  <span className="mig-line" />
                  <span className="mig-pt">{'\u203a'}</span>
                </div>
              );
            }
            items.push(
              <div key={`node-${i}`} className="mig-node">
                <div className="mig-circle">{node.icon}</div>
                <div className="mig-name" style={{ fontFamily: fontUI }}>{node.name}</div>
                <div className="mig-sub" style={{ fontFamily: fontBody }}>{node.subtitle}</div>
              </div>
            );
            return items;
          })}
        </div>
      </section>
      <CustomSections {...csProps} position="after-migration" bgClass="bg-p" />

      {/* ══════ FAMILY TREE ══════ */}
      <FamilyTree />
      <CustomSections {...csProps} position="after-tree" bgClass="bg-p" />
      <CustomSections {...csProps} position="before-outro" bgClass="bg-p2" />

      {/* ══════ OUTRO ══════ */}
      <section className="outro" id="legacy">
        <div className="outro-lines reveal">
          {content.outro.lines.map((line, i) => {
            const items = [];
            items.push(
              <span
                key={`ol-${i}`}
                className={`ol${line.highlight ? ' hi' : ''}${i === OUTRO_HR_INDEX ? ' hr' : ''}`}
                style={{ fontFamily: line.highlight ? fontUI : fontBody }}
              >
                {line.text}
              </span>
            );
            if (OUTRO_BREAK_AFTER.has(i)) {
              items.push(<br key={`br-${i}`} />);
            }
            return items;
          })}
        </div>
        <div className="outro-seal reveal">
          <span className="outro-om">{content.outro.seal.om}</span>
          <span className="outro-line" style={{ fontFamily: fontUI }}>
            {content.outro.seal.text}
          </span>
        </div>
      </section>

      {/* ══════ FOOTNOTES ══════ */}
      <section className="fn-wrap">
        <div className="fn-title" style={{ fontFamily: fontUI }}>{content.footnotes.title}</div>
        <div className="fn-grid">
          {content.footnotes.cards.map((card, i) => (
            <div key={i} className={`fn-card reveal d${i + 1}`}>
              <span className="fn-head" style={{ fontFamily: fontUI }}>{card.heading}</span>
              <p className="fn-body" style={{ fontFamily: fontBody }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer>
        <span className="ft-brand" style={{ fontFamily: fontUI }}>
          {content.footer.brand}
        </span>
        <span className="ft-note" style={{ fontFamily: fontUI }}>
          {content.footer.note}
        </span>
      </footer>
    </div>
  );
}

function toDevanagariNumeral(num) {
  const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return String(num).replace(/\d/g, (d) => devanagariDigits[parseInt(d)]);
}
