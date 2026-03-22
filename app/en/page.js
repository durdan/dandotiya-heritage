import Navbar from "../components/Navbar";
import Mandala from "../components/Mandala";
import Particles from "../components/Particles";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Dandotiya — Family Heritage Portal",
  description:
    "Heritage portal of the Dandotiya family. Bhrigu Vansh, Yajur Veda, Madhyandini Shakha.",
};

const enLinks = [
  { href: "#identity", label: "Identity" },
  { href: "#bhrigu", label: "Bhrigu" },
  { href: "#origin", label: "Origin" },
  { href: "#dwarka", label: "Dwarka" },
  { href: "#deities", label: "Deities" },
  { href: "#lineage", label: "Timeline" },
  { href: "#geography", label: "Sacred Sites" },
];

export default function EnglishPage() {
  const fontTitle = "var(--font-cinzel), 'Cinzel Decorative', serif";
  const fontBody = "var(--font-cormorant), 'Cormorant Garamond', serif";
  const fontHindi = "var(--font-noto), 'Noto Sans Devanagari', sans-serif";

  return (
    <div
      className="page-enter"
      style={{
        fontFamily:
          "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
      }}
    >
      <Navbar lang="en" links={enLinks} />
      <ScrollReveal />

      {/* ══════════════ HERO ══════════════ */}
      <section className="hero en-hero" id="home">
        <Mandala />
        <Particles />

        <div className="h-eye" style={{ fontFamily: fontHindi }}>
          ॥ श्री गणेशाय नमः ॥
        </div>

        <h1 className="h-title" style={{ fontFamily: fontTitle }}>
          Dandotiya
        </h1>

        <div className="h-sub" style={{ fontFamily: fontTitle }}>
          Family Heritage Portal
        </div>

        <div className="h-div">
          <span className="h-line" />
          <span className="h-om" style={{ fontFamily: fontHindi }}>
            ॐ
          </span>
          <span className="h-line" />
        </div>

        <div className="h-tag" style={{ fontFamily: fontBody }}>
          Bhrigu Vansh · Yajur Veda · Madhyandini Shakha
          <br />
          <em>A name spoken into eternity by Lord Krishna himself</em>
        </div>

        <div className="scroll-ind">
          <span style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "3px" }}>
            Scroll
          </span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* ══════════════ CORE IDENTITY ══════════════ */}
      <section className="sec-pad bg-p" id="identity">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
            Who We Are
          </span>
          <h2 className="sec-ttl" style={{ fontFamily: fontTitle }}>
            Core Identity
          </h2>
          <div className="sec-rule" />
        </div>

        <div className="id-grid">
          <div className="id-card reveal d1">
            <span className="ic-icon">🕉️</span>
            <span className="ic-lbl" style={{ fontFamily: fontTitle }}>Varna</span>
            <span className="ic-val" style={{ fontFamily: fontBody }}>Brahmin</span>
            <span className="ic-note">
              The priestly &amp; scholarly class, keepers of Vedic knowledge and sacred tradition
            </span>
          </div>

          <div className="id-card reveal d2">
            <span className="ic-icon">🔥</span>
            <span className="ic-lbl" style={{ fontFamily: fontTitle }}>Gotra</span>
            <span className="ic-val" style={{ fontFamily: fontBody }}>Bhrigu</span>
            <span className="ic-dev" style={{ fontFamily: fontHindi }}>भृगु</span>
            <span className="ic-note">
              Descended from the Saptarishi Maharishi Bhrigu, mind-born son of Lord Brahma
            </span>
          </div>

          <div className="id-card reveal d3">
            <span className="ic-icon">⚡</span>
            <span className="ic-lbl" style={{ fontFamily: fontTitle }}>Vansh</span>
            <span className="ic-val" style={{ fontFamily: fontBody }}>Bhrigu Vanshi</span>
            <span className="ic-note">
              {"The Bhargava lineage — one of the eight foundational gotra clans of the Vedic tradition"}
            </span>
          </div>

          <div className="id-card reveal d4">
            <span className="ic-icon">📜</span>
            <span className="ic-lbl" style={{ fontFamily: fontTitle }}>Shakha</span>
            <span className="ic-val" style={{ fontFamily: fontBody }}>Madhyandini</span>
            <span className="ic-note">
              {"Branch of Shukla Yajurveda — contains 40 adhyayas, 1,975 mantras including the Isavasyopanishad"}
            </span>
          </div>

          <div className="id-card reveal d5">
            <span className="ic-icon">🕯️</span>
            <span className="ic-lbl" style={{ fontFamily: fontTitle }}>Veda</span>
            <span className="ic-val" style={{ fontFamily: fontBody }}>Yajur Veda</span>
            <span className="ic-note">
              {"The Veda of sacred action — governs yajna procedures, samskara rites, and all sacred ceremonies"}
            </span>
          </div>

          <div className="id-card reveal d6">
            <span className="ic-icon">🏘️</span>
            <span className="ic-lbl" style={{ fontFamily: fontTitle }}>Community Reach</span>
            <span className="ic-val" style={{ fontFamily: fontBody }}>28 Villages</span>
            <span className="ic-note">
              {"The Dandotiya community's ancestral presence spans approximately 28 villages in the region"}
            </span>
          </div>
        </div>

        <div className="lore-box reveal">
          <div className="lore-ttl" style={{ fontFamily: fontTitle }}>
            {"॥ The Gotra System — What It Means ॥"}
          </div>
          <p className="lore-p" style={{ fontFamily: fontBody }}>
            {"A gotra is more than a surname — it is an unbroken patrilineal chain reaching back thousands of years to one of the founding Vedic sages. To say \"our gotra is Bhrigu\" means our male lineage descends from Maharishi Bhrigu himself. In Vedic ritual, one declares this ancestry as proof of spiritual fitness: \"I am a descendant of worthy ancestors, a fit person to perform this sacred act.\" Marriage within the same gotra is forbidden — those who share a gotra are considered brother and sister, descendants of the same ancient father."}
          </p>
        </div>
      </section>

      {/* ══════════════ MAHARISHI BHRIGU ══════════════ */}
      <section className="sec-pad bg-p2" id="bhrigu">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
            Our Ancestral Rishi
          </span>
          <h2 className="sec-ttl" style={{ fontFamily: fontTitle }}>
            Maharishi Bhrigu
          </h2>
          <div className="sec-rule" />
        </div>

        <div className="bhrigu-grid">
          <div className="bhrigu-portrait reveal">
            <span className="bp-icon">🌟</span>
            <div className="bp-name" style={{ fontFamily: fontTitle }}>
              Maharishi Bhrigu
            </div>
            <div className="bp-dev" style={{ fontFamily: fontHindi }}>
              महर्षि भृगु
            </div>
            <div className="bp-role" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
              Saptarishi · Prajapati · Father of Hindu Astrology
            </div>
          </div>

          <div className="bhrigu-facts">
            <div className="bf-item reveal d1">
              <span className="bf-lbl" style={{ fontFamily: fontTitle }}>Origin</span>
              <span className="bf-txt" style={{ fontFamily: fontBody }}>
                {"A Manasaputra — mind-born son of Lord Brahma, created from the divine skin (tvak) of Brahma during the act of creation. One of the ten Prajapatis entrusted with assisting the creation of the universe."}
              </span>
            </div>

            <div className="bf-item reveal d2">
              <span className="bf-lbl" style={{ fontFamily: fontTitle }}>In the Bhagavad Gita</span>
              <span className="bf-txt" style={{ fontFamily: fontBody }}>
                {"Lord Krishna himself declares in the Gita (10.25): \"Among sages, Bhrigu is the representative of My divine opulence.\" — the highest honour a sage can receive from God himself."}
              </span>
            </div>

            <div className="bf-item reveal d3">
              <span className="bf-lbl" style={{ fontFamily: fontTitle }}>The Test of the Trimurti</span>
              <span className="bf-txt" style={{ fontFamily: fontBody }}>
                {"Bhrigu was chosen by sages to test Brahma, Shiva, and Vishnu to determine who is supreme. After all tests, Vishnu's extraordinary humility — pressing the sage's feet after being kicked — led Bhrigu to declare Vishnu the greatest of the Trinity."}
              </span>
            </div>

            <div className="bf-item reveal d4">
              <span className="bf-lbl" style={{ fontFamily: fontTitle }}>Bhrigu Samhita</span>
              <span className="bf-txt" style={{ fontFamily: fontBody }}>
                {"Bhrigu authored the Bhrigu Samhita — the first treatise on predictive astrology, said to contain over 500,000 birth chart horoscopes. This is the foundation of Vedic jyotisha, still consulted by practitioners today."}
              </span>
            </div>

            <div className="bf-item reveal d5">
              <span className="bf-lbl" style={{ fontFamily: fontTitle }}>Divine Family Tree</span>
              <span className="bf-txt" style={{ fontFamily: fontBody }}>
                {"His daughter Lakshmi married Lord Vishnu (why she is called Bhargavi — daughter of Bhrigu). His son Shukracharya became the guru of the asuras. His descendant Jamadagni fathered Parashurama, the sixth avatar of Vishnu."}
              </span>
            </div>

            <div className="bf-item reveal d6">
              <span className="bf-lbl" style={{ fontFamily: fontTitle }}>Our Connection</span>
              <span className="bf-txt" style={{ fontFamily: fontBody }}>
                {"The Dandotiya family traces its unbroken male lineage to this same Bhrigu — the sage who shaped Vedic law, fathered Lakshmi, and whose line produced Parashurama. Every Dandotiya carries this cosmic ancestry."}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ ORIGIN STORY ══════════════ */}
      <section className="sec-pad bg-p" id="origin">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
            The Legend
          </span>
          <h2 className="sec-ttl" style={{ fontFamily: fontTitle }}>
            Origin of the Dandotiya Name
          </h2>
          <div className="sec-rule" />
        </div>

        <div className="story-flow reveal">
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontTitle }}>I</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontTitle }}>The Doneriya Brahmins</div>
              <p className="sf-txt" style={{ fontFamily: fontBody }}>Before the name Dandotiya existed, this family was known as the Doneriya Brahmins — rooted in Donergarh, within the Bhrigu Vansh, faithfully following the Madhyandini Shakha of Shukla Yajurveda. Their spiritual practice had been unbroken for generations.</p>
            </div>
          </div>
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontTitle }}>II</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontTitle }}>Kishandas ji — The Devotee</div>
              <p className="sf-txt" style={{ fontFamily: fontBody }}>From this lineage arose Kishandas ji, born approximately in Samvat 1310 (≈ 1253 CE). He was no ordinary seeker. He undertook decades of intense tapasya — austerities so deep they set him apart from ordinary Brahmin life. His heart had one destination: the divine presence of Lord Krishna.</p>
              <span className="sf-tag" style={{ fontFamily: fontBody, fontStyle: "italic" }}>Samvat 1310 — Birth of Kishandas ji</span>
            </div>
          </div>
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontTitle }}>III</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontTitle }}>The Journey to Dwarka</div>
              <p className="sf-txt" style={{ fontFamily: fontBody }}>{"Kishandas ji's path led him to Dwarka — the legendary city on India's western coast built by Lord Krishna himself. Modern archaeology has confirmed that a city did indeed exist here and was submerged beneath the Arabian Sea around 1500 BCE. The Mahabharata records: on the day Krishna departed this world, Dwarka was consumed by the ocean. For Kishandas ji, this was not myth — it was a living truth."}</p>
            </div>
          </div>
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontTitle }}>IV</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontTitle }}>The Hidden Truth</div>
              <p className="sf-txt" style={{ fontFamily: fontBody }}>{"At Dwarka, Kishandas ji was told something that would test every boundary of his faith: the true Dwarka does not lie on land. It rests beneath the ocean's waves — just as the scriptures and the ocean's own memory confirm. Only a soul of absolute surrender could enter and return."}</p>
            </div>
          </div>
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontTitle }}>V</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontTitle }}>{"The Ocean's Gift"}</div>
              <p className="sf-txt" style={{ fontFamily: fontBody }}>With total faith, Kishandas ji walked into the sea. He did not drown. He transcended. In those sacred depths — in the divine city that Vishwakarma himself had built, with its 900,000 crystal palaces and emerald-studded walls — he came face to face with the eternal presence of Lord Shri Krishna.</p>
            </div>
          </div>
        </div>

        <div className="divine-q reveal">
          <span className="dq-attr" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "4px" }}>
            — Lord Shri Krishna, addressing Kishandas ji in the sacred depths of Dwarka —
          </span>
          <div className="dq-text" style={{ fontFamily: fontTitle, letterSpacing: "3px" }}>
            {'"Come, Dandotiya"'}
          </div>
          <p className="dq-sub" style={{ fontFamily: fontBody, fontStyle: "italic" }}>
            In that single utterance, a title was born. Not inherited. Not chosen. Bestowed by the Lord himself upon a soul who had earned it through complete devotion. From that moment, the lineage was transformed forever.
          </p>
        </div>

        <div className="story-flow reveal">
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontTitle }}>VI</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontTitle }}>A New Name — A Sacred Title</div>
              <p className="sf-txt" style={{ fontFamily: fontBody }}>Dandotiya is not merely a surname. It is a padavi — a divine title — spoken by Krishna himself. The lineage progression: Doneriya → Kishandas ji → Dandotiya. Every member of this family today carries a name that originated not in a government registry or a village custom, but in the mouth of God.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ DWARKA ══════════════ */}
      <section className="sec-pad bg-p2" id="dwarka">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
            Sacred Context
          </span>
          <h2 className="sec-ttl" style={{ fontFamily: fontTitle }}>
            The City Beneath the Sea
          </h2>
          <div className="sec-rule" />
        </div>

        <div className="dwarka-cols">
          <div className="dw-card reveal d1">
            <span className="dw-icon">🌊</span>
            <div className="dw-ttl" style={{ fontFamily: fontTitle }}>
              {"Dwarka — City of Krishna"}
            </div>
            <div className="dw-txt" style={{ fontFamily: fontBody }}>
              {"Dwarka (Sanskrit: \"Gateway to Heaven\") was built by Lord Krishna on India's western coast in Gujarat after he moved his clan from Mathura. Divine architect Vishwakarma designed it with 900,000 crystal palaces, emerald walls, and boulevards lined with jewelled trees. The Bhagavata Purana describes it as so magnificent that even the gods were envious."}
            </div>
            <div className="dw-fact" style={{ fontFamily: fontBody }}>
              {"\"Dwaraka boasted 900,000 royal palaces, all constructed with crystal and silver, splendorously decorated with huge emeralds.\" — Bhagavata Purana"}
            </div>
          </div>

          <div className="dw-card reveal d2">
            <span className="dw-icon">🔱</span>
            <div className="dw-ttl" style={{ fontFamily: fontTitle }}>
              The Submersion
            </div>
            <div className="dw-txt" style={{ fontFamily: fontBody }}>
              {"The Mahabharata records that on the very day Lord Krishna departed from this world, Dwarka was reclaimed by the ocean — exactly as prophesied. The Kali Yuga began at that moment. The true Dwarka is therefore not on land — it is beneath the sea, exactly as Kishandas ji was told when he arrived at the shore."}
            </div>
            <div className="dw-fact" style={{ fontFamily: fontBody }}>
              {"Archaeology confirms: Marine excavations (1983–1990) by India's National Institute of Oceanography uncovered submerged structures, stone anchors, fortification walls and dressed stone blocks off the coast of modern Dwarka — dated to approximately 1500 BCE."}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ VEDIC IDENTITY ══════════════ */}
      <section className="sec-pad bg-p" id="vedic">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
            Spiritual Framework
          </span>
          <h2 className="sec-ttl" style={{ fontFamily: fontTitle }}>
            Vedic Identity in Depth
          </h2>
          <div className="sec-rule" />
        </div>

        <div className="vedic-grid">
          <div className="vc reveal d1">
            <span className="vc-icon">📖</span>
            <div className="vc-ttl" style={{ fontFamily: fontTitle }}>Yajur Veda</div>
            <div className="vc-main" style={{ fontFamily: fontBody }}>The Veda of Sacred Action</div>
            <div className="vc-sub" style={{ fontFamily: fontBody }}>
              {"The second of the four Vedas. Where Rig Veda gives hymns and Sama Veda gives melody, Yajur Veda gives the precise instructions for performing yagnas — sacrificial rites. Every fire ceremony, every samskara, every major ritual in a Brahmin's life is governed by Yajur Veda."}
            </div>
          </div>

          <div className="vc reveal d2">
            <span className="vc-icon">🌅</span>
            <div className="vc-ttl" style={{ fontFamily: fontTitle }}>Madhyandini Shakha</div>
            <div className="vc-main" style={{ fontFamily: fontBody }}>Branch of Shukla Yajurveda</div>
            <div className="vc-sub" style={{ fontFamily: fontBody }}>
              {"One of only two surviving branches of Shukla (White) Yajurveda. Contains 40 adhyayas and 1,975 mantras — including the Isavasyopanishad (40th adhyaya), one of the principal Upanishads. Today prevalent in Uttar Pradesh, Madhya Pradesh, Rajasthan, Maharashtra, and Nepal."}
            </div>
          </div>

          <div className="vc reveal d3">
            <span className="vc-icon">🧵</span>
            <div className="vc-ttl" style={{ fontFamily: fontTitle }}>Pravara System</div>
            <div className="vc-main" style={{ fontFamily: fontBody }}>The Three Ancestral Rishis</div>
            <div className="vc-sub" style={{ fontFamily: fontBody }}>
              {"Every Brahmin's full identity includes their pravara — the 3 or 5 most eminent rishis of their gotra lineage, named during the sacred thread ceremony. For the Bhrigu gotra, this chain traces through Bhrigu, Chyavana, Apnuvana, Aurva, and Jamadagni."}
            </div>
          </div>

          <div className="vc reveal d4">
            <span className="vc-icon">⚖️</span>
            <div className="vc-ttl" style={{ fontFamily: fontTitle }}>Bhargava Lineage</div>
            <div className="vc-main" style={{ fontFamily: fontBody }}>The Bhrigu-Born Clan</div>
            <div className="vc-sub" style={{ fontFamily: fontBody }}>
              {"The Bhargavas (descendants of Bhrigu) were the traditional purohitas of the Haihaya dynasty kings. The lineage produced Shukracharya (guru of the asuras), Jamadagni, Parashurama (Vishnu avatar), and the great sage Dadhichi. Being Bhrigu Vanshi is to share ancestry with the most powerful sages in Hindu lore."}
            </div>
          </div>

          <div className="vc reveal d5">
            <span className="vc-icon">🔗</span>
            <div className="vc-ttl" style={{ fontFamily: fontTitle }}>Gotra Rules</div>
            <div className="vc-main" style={{ fontFamily: fontBody }}>The Living Law</div>
            <div className="vc-sub" style={{ fontFamily: fontBody }}>
              {"Dandotiyas with Bhrigu gotra cannot marry someone also of the Bhrigu gotra — they are considered brother and sister. Furthermore, since Bhrigu and Angirasa share common Pravara rishis, those gotras cannot intermarry either. This has functioned as a genetic and spiritual safeguard for thousands of years."}
            </div>
          </div>

          <div className="vc reveal d6">
            <span className="vc-icon">📿</span>
            <div className="vc-ttl" style={{ fontFamily: fontTitle }}>Upanayana</div>
            <div className="vc-main" style={{ fontFamily: fontBody }}>Sacred Thread Ceremony</div>
            <div className="vc-sub" style={{ fontFamily: fontBody }}>
              {"When tying the sacred thread (yajnopavita), a Dandotiya boy formally declares his gotra, pravara, shakha, and sutra — announcing his full Vedic identity to the world. This is the moment the ancient chain is renewed. Each new generation becomes a living link between Maharishi Bhrigu and the future."}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ DEITIES ══════════════ */}
      <section className="sec-pad bg-p2" id="deities">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
            Our Sacred Protectors
          </span>
          <h2 className="sec-ttl" style={{ fontFamily: fontTitle }}>
            Kul Devi &amp; Ishta Devta
          </h2>
          <div className="sec-rule" />
        </div>

        <div className="det-grid">
          <div className="det-card reveal d1">
            <span className="det-icon">🌸</span>
            <span className="det-role" style={{ fontFamily: fontTitle }}>Kul Devi — Primary</span>
            <div className="det-name" style={{ fontFamily: fontTitle }}>Katyayani Devi</div>
            <div className="det-dev" style={{ fontFamily: fontHindi }}>कात्यायनी देवी</div>
            <div className="det-desc" style={{ fontFamily: fontBody }}>
              The sixth form of Maa Durga, first mentioned in the Taittiriya Aranyaka of Yajurveda. Born from the combined divine anger of all the gods to slay Mahishasura. She rides a lion and wields the Chandrahasa sword. The Bhagavata Purana records that the Gopis of Vrindavana worshipped Katyayani Devi to receive Krishna as their husband — a deeply Krishnaite connection that mirrors the Dandotiya family&#39;s own divine bond with Lord Krishna. She grants Dharma, Artha, Kama, and Moksha to her devotees.
            </div>
          </div>

          <div className="det-card reveal d2">
            <span className="det-icon">🪷</span>
            <span className="det-role" style={{ fontFamily: fontTitle }}>Kul Devi — Second</span>
            <div className="det-name" style={{ fontFamily: fontTitle }}>Vaishnavi Devi</div>
            <div className="det-dev" style={{ fontFamily: fontHindi }}>वैष्णवी देवी</div>
            <div className="det-desc" style={{ fontFamily: fontBody }}>
              One of the Matrikas — the divine mother goddesses — Vaishnavi is the Shakti of Lord Vishnu himself. She carries his weapons and attributes: the Sudarshana Chakra, conch, mace, and lotus. As a Kul Devi of the Dandotiya family, Vaishnavi Devi forms a perfect pair with Katyayani — representing both the fierce protective Shakti and the sustaining grace of Vaishnava tradition.
            </div>
          </div>

          <div className="det-card reveal d3">
            <span className="det-icon">🏹</span>
            <span className="det-role" style={{ fontFamily: fontTitle }}>Ishta Devta — Personal Deity</span>
            <div className="det-name" style={{ fontFamily: fontTitle }}>Shri Raghunath Bhagwan</div>
            <div className="det-dev" style={{ fontFamily: fontHindi }}>श्री रघुनाथ भगवान</div>
            <div className="det-desc" style={{ fontFamily: fontBody }}>
              Raghunath — the Lord of the Raghu dynasty — is a name for Lord Rama, the seventh avatar of Vishnu, the embodiment of dharma and ideal kingship. The Dandotiya family&#39;s devotion to both Rama (via Raghunath) and Krishna (the divine encounter at Dwarka) reflects a complete Vaishnava spiritual identity — the two most beloved incarnations of Vishnu are both present in this family&#39;s sacred world.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TIMELINE ══════════════ */}
      <section className="sec-pad bg-p" id="lineage">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
            Through the Ages
          </span>
          <h2 className="sec-ttl" style={{ fontFamily: fontTitle }}>
            Historical Timeline
          </h2>
          <div className="sec-rule" />
        </div>

        <div className="tl-wrap">
          <div className="tl-item reveal">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
                Ancient Era
              </span>
              <div className="tl-evt" style={{ fontFamily: fontTitle }}>
                Doneriya Brahmin Origins
              </div>
              <div className="tl-desc" style={{ fontFamily: fontBody }}>
                {"The family exists as Doneriya Brahmins in Donergarh — Bhrigu gotra, Yajur Veda, Madhyandini Shakha. Faithful keepers of the Vedic tradition for generations."}
              </div>
            </div>
          </div>

          <div className="tl-item reveal d2">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
                {"Samvat 1310 · ≈ 1253 CE"}
              </span>
              <div className="tl-evt" style={{ fontFamily: fontTitle }}>
                Birth of Kishandas ji
              </div>
              <div className="tl-desc" style={{ fontFamily: fontBody }}>
                {"The man who would transform the family's name into a divine title is born into the Doneriya lineage. His extraordinary spiritual destiny is already written."}
              </div>
            </div>
          </div>

          <div className="tl-item reveal d1">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
                Decades of Devotion
              </span>
              <div className="tl-evt" style={{ fontFamily: fontTitle }}>
                The Great Tapasya
              </div>
              <div className="tl-desc" style={{ fontFamily: fontBody }}>
                {"Kishandas ji undertakes years of intense spiritual discipline — fasting, meditation, pilgrimage. His journey takes him across the sacred geography of India toward Dwarka."}
              </div>
            </div>
          </div>

          <div className="tl-item reveal d2">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
                The Dwarka Period
              </span>
              <div className="tl-evt" style={{ fontFamily: fontTitle }}>
                Divine Encounter in the Sea
              </div>
              <div className="tl-desc" style={{ fontFamily: fontBody }}>
                {"Kishandas ji walks into the ocean at Dwarka with absolute faith. In the submerged sacred city, he meets Lord Krishna. The Lord addresses him: \"Come, Dandotiya.\" A title is born."}
              </div>
            </div>
          </div>

          <div className="tl-item reveal d1">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
                Post-Encounter
              </span>
              <div className="tl-evt" style={{ fontFamily: fontTitle }}>
                The Lineage Transforms
              </div>
              <div className="tl-desc" style={{ fontFamily: fontBody }}>
                {"Doneriya → Dandotiya. The family carries its new divine title. Migration follows the path Donergarh → Kishanpura → Badokhar, spreading across approximately 28 villages."}
              </div>
            </div>
          </div>

          <div className="tl-item reveal d2">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
                {"Samvat 1527 · ≈ 1470 CE"}
              </span>
              <div className="tl-evt" style={{ fontFamily: fontTitle }}>
                Sati of Sujan Devi
              </div>
              <div className="tl-desc" style={{ fontFamily: fontBody }}>
                A profound moment of sacrifice recorded in family chronicles: the Sati event of Jeevandas and Sujan Devi. An act of devotion so significant it was preserved across centuries of oral history.
              </div>
            </div>
          </div>

          <div className="tl-item reveal d1">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
                Ancestral Settlement
              </span>
              <div className="tl-evt" style={{ fontFamily: fontTitle }}>
                {"Badokhar — Heart of the Community"}
              </div>
              <div className="tl-desc" style={{ fontFamily: fontBody }}>
                {"Badokhar is established as the central ancestral settlement — the spiritual and cultural anchor of the Dandotiya community across the region."}
              </div>
            </div>
          </div>

          <div className="tl-item reveal d2">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
                {"Today · Present Day"}
              </span>
              <div className="tl-evt" style={{ fontFamily: fontTitle }}>
                A Living Heritage
              </div>
              <div className="tl-desc" style={{ fontFamily: fontBody }}>
                {"The Dandotiya family continues — carriers of a name given by Krishna, a lineage traced to Maharishi Bhrigu, and a Vedic tradition stretching back thousands of years to the dawn of civilisation."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ SACRED GEOGRAPHY ══════════════ */}
      <section className="sec-pad bg-p2" id="geography">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
            Pilgrimage &amp; Purpose
          </span>
          <h2 className="sec-ttl" style={{ fontFamily: fontTitle }}>
            Sacred Geography
          </h2>
          <div className="sec-rule" />
        </div>

        <div className="geo-grid">
          <div className="geo-card reveal d1">
            <span className="geo-icon">🏔️</span>
            <div className="geo-name" style={{ fontFamily: fontTitle }}>Haridwar</div>
            <div className="geo-desc" style={{ fontFamily: fontBody }}>
              {"Gateway to the Gods — where the Ganga descends from the Himalayas to the plains. One of four sacred cities of the Kumbh Mela, visited by pilgrims for millennia."}
            </div>
          </div>

          <div className="geo-card reveal d2">
            <span className="geo-icon">⛰️</span>
            <div className="geo-name" style={{ fontFamily: fontTitle }}>Badrinath</div>
            <div className="geo-desc" style={{ fontFamily: fontBody }}>
              {"Sacred abode of Lord Vishnu at 10,000+ feet in the Himalayas. One of the Char Dham and the Panch Kedar. Lord Vishnu — ancestor of the Dandotiya's Kul Devis — resides here eternally."}
            </div>
          </div>

          <div className="geo-card reveal d3">
            <span className="geo-icon">🏰</span>
            <div className="geo-name" style={{ fontFamily: fontTitle }}>Lohagarh</div>
            <div className="geo-desc" style={{ fontFamily: fontBody }}>
              {"Ancient iron fortress with deep ties to the community's spiritual roots. A place of historical and martial significance woven into the family's geographic memory."}
            </div>
          </div>

          <div className="geo-card reveal d4">
            <span className="geo-icon">🌊</span>
            <div className="geo-name" style={{ fontFamily: fontTitle }}>Dwarka</div>
            <div className="geo-desc" style={{ fontFamily: fontBody }}>
              {"The holiest site in the Dandotiya heritage. Where Kishandas ji entered the ocean and emerged with a name given by Krishna. One of India's Sapta Puri — seven most sacred cities. The Dwarkadhish Temple is among the Char Dham."}
            </div>
          </div>

          <div className="geo-card reveal d5">
            <span className="geo-icon">🌺</span>
            <div className="geo-name" style={{ fontFamily: fontTitle }}>Kolhapur</div>
            <div className="geo-desc" style={{ fontFamily: fontBody }}>
              {"Sacred seat of Mahalakshmi — who, as Bhargavi, is the daughter of Bhrigu Rishi himself. Her temple at Kolhapur is one of the 51 Shakti Peethas. The Dandotiya family's own ancestor is the grandfather of the goddess."}
            </div>
          </div>

          <div className="geo-card reveal d6">
            <span className="geo-icon">🎵</span>
            <div className="geo-name" style={{ fontFamily: fontTitle }}>Yamuna / Mathura</div>
            <div className="geo-desc" style={{ fontFamily: fontBody }}>
              {"Birthplace of Lord Krishna. Where the Gopis worshipped Katyayani Devi — the Dandotiya family's own Kul Devi — to receive Krishna as their husband. A profound spiritual loop connecting deity, devotee, and place."}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ MIGRATION ══════════════ */}
      <section className="sec-pad bg-p" id="migration">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
            The Journey
          </span>
          <h2 className="sec-ttl" style={{ fontFamily: fontTitle }}>
            Ancestral Migration Path
          </h2>
          <div className="sec-rule" />
        </div>

        <div className="mig-flow reveal">
          <div className="mig-node">
            <div className="mig-circle">🏛️</div>
            <div className="mig-name" style={{ fontFamily: fontTitle }}>Donergarh</div>
            <div className="mig-sub" style={{ fontFamily: fontBody }}>{"Origin · Doneriya Brahmin roots"}</div>
          </div>

          <div className="mig-arr">
            <div className="mig-line" />
            <span className="mig-pt">{"›"}</span>
            <div className="mig-line" />
          </div>

          <div className="mig-node">
            <div className="mig-circle">🌿</div>
            <div className="mig-name" style={{ fontFamily: fontTitle }}>Kishanpura</div>
            <div className="mig-sub" style={{ fontFamily: fontBody }}>Named in honour of Kishandas ji</div>
          </div>

          <div className="mig-arr">
            <div className="mig-line" />
            <span className="mig-pt">{"›"}</span>
            <div className="mig-line" />
          </div>

          <div className="mig-node">
            <div className="mig-circle">🏡</div>
            <div className="mig-name" style={{ fontFamily: fontTitle }}>Badokhar</div>
            <div className="mig-sub" style={{ fontFamily: fontBody }}>Central ancestral settlement</div>
          </div>
        </div>
      </section>

      {/* ══════════════ OUTRO ══════════════ */}
      <section className="outro" id="legacy">
        <div className="outro-lines reveal">
          <span className="ol" style={{ fontFamily: fontBody }}>Every family has a story...</span>
          <span className="ol hi" style={{ fontFamily: fontTitle }}>This is the story of the Dandotiya family.</span>
          <br />
          <span className="ol" style={{ fontFamily: fontBody }}>{"Rooted in the lineage of Maharishi Bhrigu —"}</span>
          <span className="ol" style={{ fontFamily: fontBody }}>one of the seven great sages, mind-born son of Brahma,</span>
          <span className="ol" style={{ fontFamily: fontBody }}>declared by Krishna himself as his divine representative among the rishis.</span>
          <br />
          <span className="ol" style={{ fontFamily: fontBody }}>Guided by Katyayani Devi, Vaishnavi Devi,</span>
          <span className="ol" style={{ fontFamily: fontBody }}>and Shri Raghunath Bhagwan.</span>
          <br />
          <span className="ol" style={{ fontFamily: fontBody }}>Kishandas ji walked the path of devotion for decades.</span>
          <span className="ol" style={{ fontFamily: fontBody }}>He reached Dwarka. He entered the sea.</span>
          <span className="ol" style={{ fontFamily: fontBody }}>He walked into the submerged golden city that Vishwakarma built for God.</span>
          <br />
          <span className="ol" style={{ fontFamily: fontBody }}>There, he met Lord Krishna.</span>
          <br />
          <span className="ol hr" style={{ fontFamily: fontBody }}>The Lord said:</span>
          <span className="ol hi" style={{ fontFamily: fontTitle }}>{'"Come, Dandotiya"'}</span>
          <br />
          <span className="ol" style={{ fontFamily: fontBody }}>From that moment, a name was born.</span>
          <span className="ol hi" style={{ fontFamily: fontTitle }}>A legacy was created.</span>
        </div>

        <div className="outro-seal reveal">
          <span className="outro-om" style={{ fontFamily: fontHindi }}>ॐ</span>
          <span className="outro-line" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
            {"Bhrigu Vansh · Dandotiya Kul · Since Samvat 1310"}
          </span>
        </div>
      </section>

      {/* ══════════════ FOOTNOTES ══════════════ */}
      <section className="fn-wrap">
        <div className="fn-title" style={{ fontFamily: fontTitle, textTransform: "uppercase", letterSpacing: "2px" }}>
          {"॥ Research Notes — Sources & Context ॥"}
        </div>

        <div className="fn-grid">
          <div className="fn-card reveal d1">
            <span className="fn-head" style={{ fontFamily: fontTitle }}>Bhrigu &amp; the Bhagavad Gita</span>
            <div className="fn-body" style={{ fontFamily: fontBody }}>
              {"Lord Krishna's declaration in Gita 10.25 — \"among sages, Bhrigu is my divine opulence\" — gives the Dandotiya gotra a direct scriptural connection to Krishna himself, beyond even the Dwarka story."}
            </div>
          </div>

          <div className="fn-card reveal d2">
            <span className="fn-head" style={{ fontFamily: fontTitle }}>Dwarka Archaeology</span>
            <div className="fn-body" style={{ fontFamily: fontBody }}>
              {"Marine excavations by India's National Institute of Oceanography (1983–1990) found submerged structures, stone anchors, and fortification walls off Dwarka's coast — confirming the ancient city's historical basis. S.R. Rao dated evidence to approx. 1500 BCE."}
            </div>
          </div>

          <div className="fn-card reveal d3">
            <span className="fn-head" style={{ fontFamily: fontTitle }}>Katyayani &amp; Yajurveda</span>
            <div className="fn-body" style={{ fontFamily: fontBody }}>
              {"Katyayani Devi is first mentioned in the Taittiriya Aranyaka of the Yajurveda — the same Vedic tradition the Dandotiya family follows. The Bhagavata Purana records Gopis worshipping her for Krishna's love, directly linking her to the Dandotiya's divine story."}
            </div>
          </div>

          <div className="fn-card reveal d4">
            <span className="fn-head" style={{ fontFamily: fontTitle }}>Madhyandini Shakha</span>
            <div className="fn-body" style={{ fontFamily: fontBody }}>
              {"One of only two surviving branches of Shukla Yajurveda. Today prevalent in Rajasthan, UP, MP, Maharashtra, and Nepal. Contains the Isavasyopanishad (40th adhyaya) — one of the most important Upanishads in the Vedanta tradition."}
            </div>
          </div>

          <div className="fn-card reveal d5">
            <span className="fn-head" style={{ fontFamily: fontTitle }}>Samvat Conversion</span>
            <div className="fn-body" style={{ fontFamily: fontBody }}>
              {"Vikram Samvat runs approximately 57 years ahead of the Gregorian calendar. Samvat 1310 ≈ 1253 CE (birth of Kishandas ji). Samvat 1527 ≈ 1470 CE (Sati of Sujan Devi). These place the family's formative events in India's medieval period."}
            </div>
          </div>

          <div className="fn-card reveal d6">
            <span className="fn-head" style={{ fontFamily: fontTitle }}>Bhargava &amp; Lakshmi</span>
            <div className="fn-body" style={{ fontFamily: fontBody }}>
              {"Being Bhrigu Vanshi means the Dandotiya family shares ancestry with Lakshmi herself (Bhargavi — daughter of Bhrigu). She married Vishnu. Shukracharya, Parashurama, and Jamadagni are all family members in the cosmic sense."}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer>
        <span className="ft-brand" style={{ fontFamily: fontTitle }}>
          Dandotiya Heritage Portal
        </span>
        <span className="ft-note" style={{ fontFamily: fontBody }}>
          Based on family records, oral history, and Vedic scholarly research
        </span>
      </footer>
    </div>
  );
}
