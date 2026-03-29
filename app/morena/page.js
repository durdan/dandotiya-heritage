"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const SPOTS = [
  {
    id: "bateshwar",
    name: "बटेश्वर मंदिर समूह",
    nameEn: "Bateshwar Temple Complex",
    tagline: "भारत का भूला हुआ अंगकोर वाट",
    distance: "मुरैना से ~30 कि.मी.",
    era: "8वीं–10वीं शताब्दी",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Bateshwar_Temple_Complex_-_1.jpg",
    image2: "https://upload.wikimedia.org/wikipedia/commons/2/24/Bateshwar_Temples_%2816313836371%29.jpg",
    description: "लगभग 200 बलुआ पत्थर के हिन्दू मंदिरों का विशाल समूह, जो गुर्जर-प्रतिहार शैली में 8वीं से 10वीं शताब्दी के बीच निर्मित हुए। ये मंदिर शिव, विष्णु और शक्ति को समर्पित हैं और लगभग 25 एकड़ में फैले हैं।",
    descEn: "A sprawling complex of nearly 200 sandstone Hindu temples built in Gurjara-Pratihara style between 8th-10th century CE. Dedicated to Shiva, Vishnu, and Shakti, spread over 25 acres. ASI began restoration in 2005 — one of India's largest archaeological restoration projects.",
    facts: [
      { icon: "🏛️", text: "~200 मंदिर, 25 एकड़ में विस्तृत" },
      { icon: "🔨", text: "2005 से ASI द्वारा पुनर्स्थापन — 60+ मंदिर पुनर्निर्मित" },
      { icon: "📜", text: "गुर्जर-प्रतिहार राजाओं द्वारा निर्मित" },
    ],
  },
  {
    id: "chausath-yogini",
    name: "चौसठ योगिनी मंदिर",
    nameEn: "Chausath Yogini Temple, Mitawali",
    tagline: "भारतीय संसद भवन की प्रेरणा",
    distance: "मुरैना से ~40 कि.मी.",
    era: "11वीं शताब्दी",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Chausath_Yogini_Temple%2C_Mitaoli%2C_Morena_006.jpg",
    image2: "https://upload.wikimedia.org/wikipedia/commons/4/4b/The_outer_circle_of_Chausath_Yogini_Temple%2C_Every_shrine_has_a_Shiva_Linga_inside_it.JPG",
    description: "मिताओली गाँव की पहाड़ी पर स्थित यह गोलाकार मंदिर 64 योगिनियों को समर्पित है। कच्छपघात राजा देवपाल (1055-1075 ई.) द्वारा निर्मित, इसमें 64 छोटे कक्ष और केंद्र में खुला शिव मंदिर है। माना जाता है कि इसी की गोलाकार संरचना से नई दिल्ली के संसद भवन का डिज़ाइन प्रेरित हुआ।",
    descEn: "A circular 11th-century temple atop a hill in Mitaoli village, dedicated to 64 Yoginis. Built by Kachchhapaghata king Devapala (c. 1055-1075 CE), it has 64 small chambers around a central open-air Shiva shrine. Its circular colonnade design is widely believed to have inspired India's Parliament House.",
    facts: [
      { icon: "🔵", text: "170 फीट व्यास की गोलाकार संरचना" },
      { icon: "🏛️", text: "64 कक्ष, प्रत्येक में एक शिवलिंग" },
      { icon: "🇮🇳", text: "संसद भवन (1921-27) की डिज़ाइन प्रेरणा" },
    ],
  },
  {
    id: "kakanmath",
    name: "ककनमठ मंदिर",
    nameEn: "Kakanmath Temple, Sihoniya",
    tagline: "बिना किसी जोड़ के खड़ा — 1000 वर्षों से",
    distance: "मुरैना से ~25 कि.मी.",
    era: "11वीं शताब्दी",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Kakanmath_Temple%2C_Morena.jpg",
    image2: "https://upload.wikimedia.org/wikipedia/commons/5/59/Kakan_Math.jpg",
    description: "सिहोनिया में स्थित यह 11वीं शताब्दी का शिव मंदिर कच्छपघात शासक कीर्तिराज ने अपनी रानी ककनवती के लिए बनवाया था। इसकी सबसे अद्भुत विशेषता — विशाल पत्थर के खंड बिना किसी मसाले, चूने या सीमेंट के आपस में जुड़े हैं। मूल शिखर लगभग 100 फीट ऊँचा था।",
    descEn: "An 11th-century Shiva temple at Sihoniya, built by Kachchhapaghata ruler Kirttiraja for queen Kakanwati. Its most remarkable feature: massive stone blocks interlocked without any mortar, lime, or cement — a gravity-defying structure that has endured over 1,000 years. The original shikhara was approximately 100 feet tall.",
    facts: [
      { icon: "🪨", text: "शुष्क चिनाई — बिना मसाले/सीमेंट के निर्मित" },
      { icon: "📏", text: "मूल ऊँचाई ~100 फीट (शिखर)" },
      { icon: "👻", text: "स्थानीय किंवदंती — एक रात में अलौकिक शक्तियों ने बनाया" },
    ],
  },
  {
    id: "chambal",
    name: "राष्ट्रीय चम्बल अभयारण्य",
    nameEn: "National Chambal Sanctuary",
    tagline: "घड़ियालों और डॉल्फिन का आखिरी गढ़",
    distance: "मुरैना से ~20-30 कि.मी.",
    era: "1978 में स्थापित",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Big_Mama_National_Chambal_sanctuary_01.jpg",
    image2: "https://upload.wikimedia.org/wikipedia/commons/5/53/Chambal_river_near_Dhaulpur%2C_India.jpg",
    description: "5,400 वर्ग कि.मी. में फैला यह त्रि-राज्यीय अभयारण्य (मध्य प्रदेश, राजस्थान, उत्तर प्रदेश) चम्बल नदी के किनारे स्थित है। यहाँ विश्व की सबसे बड़ी जंगली घड़ियाल आबादी, लुप्तप्राय गंगा डॉल्फिन और 316+ पक्षी प्रजातियाँ पाई जाती हैं।",
    descEn: "A 5,400 sq km tri-state sanctuary along the Chambal River (MP, Rajasthan, UP). Home to the world's largest wild gharial population, endangered Ganges river dolphins, critically endangered red-crowned roof turtles, and 316+ bird species. Boat safaris available.",
    facts: [
      { icon: "🐊", text: "विश्व की सबसे बड़ी जंगली घड़ियाल आबादी" },
      { icon: "🐬", text: "लुप्तप्राय गंगा नदी डॉल्फिन" },
      { icon: "🦅", text: "316+ पक्षी प्रजातियाँ, नाव सफारी उपलब्ध" },
    ],
  },
  {
    id: "padawali",
    name: "पदावली मंदिर",
    nameEn: "Garhi Padavali Temple",
    tagline: "खजुराहो से दो शताब्दी पुरानी मूर्तिकला",
    distance: "मुरैना से ~35 कि.मी.",
    era: "8वीं–10वीं शताब्दी",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/0121621_Garhi_Padhavali_Shiva_temple_MP_002.jpg",
    image2: "https://upload.wikimedia.org/wikipedia/commons/d/df/0121621_Garhi_Padhavali_Shiva_temple_MP_010.jpg",
    description: "गढ़ी पदावली में 10वीं शताब्दी का शिव मंदिर मण्डप, 18वीं शताब्दी के गोहद के जाट राणाओं द्वारा बनाए गए किले के भीतर सुरक्षित है। इसकी नक्काशी अद्भुत है — रामायण, महाभारत, समुद्र मंथन, कृष्ण लीला और शिव तांडव के दृश्य उकेरे गए हैं। यहाँ की श्रृंगारिक मूर्तियाँ खजुराहो से लगभग दो शताब्दी पुरानी हैं।",
    descEn: "A 10th-century Shiva temple mandapa protected within an 18th-century fort built by Jat Ranas of Gohad. Its extraordinary carvings depict scenes from Ramayana, Mahabharata, Samudra Manthan, Krishna Leela, and Shiva's Tandava. Its erotic sculptures predate the famous Khajuraho temples by approximately two centuries.",
    facts: [
      { icon: "🏰", text: "18वीं सदी के किले के अंदर सुरक्षित प्राचीन मंदिर" },
      { icon: "🎨", text: "रामायण, महाभारत के दृश्यों की उत्कृष्ट नक्काशी" },
      { icon: "⏳", text: "खजुराहो से ~200 वर्ष प्राचीन श्रृंगारिक शिल्प" },
    ],
  },
  {
    id: "pahargarh",
    name: "पहाड़गढ़ गुफाएँ",
    nameEn: "Pahargarh Rock Shelters",
    tagline: "25,000 वर्ष पुराने शैल चित्र",
    distance: "मुरैना से ~58 कि.मी.",
    era: "प्रागैतिहासिक (~25,000 वर्ष)",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Chambal_river_near_Dhaulpur%2C_India.jpg",
    image2: null,
    description: "1979 में खोजी गई ये प्रागैतिहासिक शैलाश्रय 600+ शैल चित्रों का खज़ाना हैं। 'लिखीछज' नामक मुख्य शैलाश्रय 100+ फीट चौड़ा है। लाल और सफेद गेरू रंग से बने ये चित्र — नृत्य, शिकार, हाथी की सवारी, ढाल-हथियार लिए मानव आकृतियाँ दर्शाते हैं। यहाँ मिले शुतुरमुर्ग अंडे के छिलकों की रेडियोकार्बन तिथि ~25,000 वर्ष है।",
    descEn: "Prehistoric rock shelters discovered in 1979, containing 600+ documented paintings. The main shelter 'Likhichhaj' is over 100 feet wide. Red and white ochre paintings depict dancing, hunting, elephant riding, and armed human figures. Ostrich egg shells found here were radiocarbon dated to approximately 25,000 years ago.",
    facts: [
      { icon: "🎨", text: "600+ प्रागैतिहासिक शैल चित्र" },
      { icon: "🦴", text: "शुतुरमुर्ग अंडे — रेडियोकार्बन ~25,000 वर्ष" },
      { icon: "📐", text: "लिखीछज शैलाश्रय — 100+ फीट चौड़ा" },
    ],
  },
];

export default function MorenaPage() {
  const [lang, setLang] = useState("hi");
  const [activeSpot, setActiveSpot] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("vis");
        });
      },
      { threshold: 0.02, rootMargin: "0px 0px 50px 0px" }
    );
    document.querySelectorAll(".tour-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="tour-page">
      {/* NAV */}
      <nav className="tour-nav">
        <Link href="/" className="tour-nav-back">
          <span className="tour-back-arrow">{"\u2190"}</span>
          <span>{lang === "hi" ? "मुख्य पोर्टल" : "Main Portal"}</span>
        </Link>
        <div className="tour-nav-brand">
          <span className="tour-nav-om">{"\u0950"}</span>
          <span>{lang === "hi" ? "मुरैना पर्यटन" : "Morena Tourism"}</span>
        </div>
        <button
          className="tour-lang-btn"
          onClick={() => setLang(lang === "hi" ? "en" : "hi")}
        >
          {lang === "hi" ? "EN" : "हिं"}
        </button>
      </nav>

      {/* HERO */}
      <header className="tour-hero" ref={heroRef}>
        <div className="tour-hero-overlay" />
        <div className="tour-hero-content">
          <span className="tour-hero-badge">
            {lang === "hi" ? "मध्य प्रदेश" : "Madhya Pradesh"}
          </span>
          <h1 className="tour-hero-title">
            {lang === "hi" ? "मुरैना" : "Morena"}
          </h1>
          <p className="tour-hero-sub">
            {lang === "hi"
              ? "प्राचीन मंदिर \u00B7 प्रागैतिहासिक गुफाएँ \u00B7 चम्बल का जंगल"
              : "Ancient Temples \u00B7 Prehistoric Caves \u00B7 Chambal Wilderness"}
          </p>
          <p className="tour-hero-desc">
            {lang === "hi"
              ? "गुर्जर-प्रतिहार साम्राज्य की राजधानी \u2014 जहाँ 1,000 वर्ष पुराने मंदिर, संसद भवन की प्रेरणा और 25,000 वर्ष पुराने शैल चित्र एक साथ मिलते हैं"
              : "Capital of the Gurjara-Pratihara Empire \u2014 where 1,000-year-old temples, the inspiration for India's Parliament, and 25,000-year-old rock art converge"}
          </p>
          <div className="tour-hero-stats">
            <div className="tour-stat">
              <span className="tour-stat-num">6</span>
              <span className="tour-stat-lbl">{lang === "hi" ? "प्रमुख स्थल" : "Key Sites"}</span>
            </div>
            <div className="tour-stat">
              <span className="tour-stat-num">25,000+</span>
              <span className="tour-stat-lbl">{lang === "hi" ? "वर्ष इतिहास" : "Years of History"}</span>
            </div>
            <div className="tour-stat">
              <span className="tour-stat-num">200+</span>
              <span className="tour-stat-lbl">{lang === "hi" ? "प्राचीन मंदिर" : "Ancient Temples"}</span>
            </div>
          </div>
        </div>
        <div className="tour-hero-scroll">
          <span>{lang === "hi" ? "नीचे स्क्रॉल करें" : "Scroll Down"}</span>
          <span className="tour-scroll-arrow">{"\u2193"}</span>
        </div>
      </header>

      {/* MAP OVERVIEW */}
      <section className="tour-map-section tour-reveal">
        <div className="tour-map-grid">
          {SPOTS.map((spot, i) => (
            <a
              key={spot.id}
              href={`#${spot.id}`}
              className="tour-map-card tour-reveal"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="tour-map-img-wrap">
                <img src={spot.image} alt={spot.nameEn} className="tour-map-img" loading="lazy" />
                <span className="tour-map-era">{spot.era}</span>
              </div>
              <div className="tour-map-info">
                <h3 className="tour-map-name">{lang === "hi" ? spot.name : spot.nameEn}</h3>
                <p className="tour-map-tag">{lang === "hi" ? spot.tagline : spot.descEn?.slice(0, 60) + "..."}</p>
                <span className="tour-map-dist">{spot.distance}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* DETAILED SPOTS */}
      {SPOTS.map((spot, i) => (
        <section
          key={spot.id}
          id={spot.id}
          className={`tour-spot ${i % 2 === 0 ? "tour-spot-left" : "tour-spot-right"} tour-reveal`}
        >
          <div className="tour-spot-images">
            <div className="tour-spot-img-main">
              <img src={spot.image} alt={spot.nameEn} loading="lazy" />
            </div>
            {spot.image2 && (
              <div className="tour-spot-img-sec">
                <img src={spot.image2} alt={`${spot.nameEn} - 2`} loading="lazy" />
              </div>
            )}
          </div>
          <div className="tour-spot-content">
            <span className="tour-spot-era">{spot.era}</span>
            <h2 className="tour-spot-name">{lang === "hi" ? spot.name : spot.nameEn}</h2>
            <p className="tour-spot-tagline">{lang === "hi" ? spot.tagline : spot.descEn?.slice(0, 80)}</p>
            <div className="tour-spot-divider" />
            <p className="tour-spot-desc">
              {lang === "hi" ? spot.description : spot.descEn}
            </p>
            <div className="tour-spot-facts">
              {spot.facts.map((f, fi) => (
                <div key={fi} className="tour-fact">
                  <span className="tour-fact-icon">{f.icon}</span>
                  <span className="tour-fact-text">{f.text}</span>
                </div>
              ))}
            </div>
            <div className="tour-spot-meta">
              <span className="tour-spot-dist">{"\uD83D\uDCCD"} {spot.distance}</span>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="tour-cta tour-reveal">
        <h2 className="tour-cta-title">
          {lang === "hi" ? "मुरैना की विरासत — दंडोतिया की विरासत" : "Morena's Heritage — Dandotiya Heritage"}
        </h2>
        <p className="tour-cta-sub">
          {lang === "hi"
            ? "ये स्थल हमारे पूर्वजों की भूमि के गवाह हैं। चम्बल की घाटी से लेकर प्रतिहार मंदिरों तक — यही वह धरती है जहाँ दंडोतिया वंश ने अपनी जड़ें जमाईं।"
            : "These sites bear witness to the land of our ancestors. From the Chambal valley to the Pratihara temples \u2014 this is the land where the Dandotiya lineage took root."}
        </p>
        <Link href="/" className="tour-cta-btn">
          {lang === "hi" ? "\u2190 दंडोतिया पोर्टल पर लौटें" : "\u2190 Return to Dandotiya Portal"}
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="tour-footer">
        <p>
          {lang === "hi"
            ? "छवियाँ: विकिमीडिया कॉमन्स (CC BY-SA) \u00B7 स्रोत: ASI, MP Tourism, Wikipedia"
            : "Images: Wikimedia Commons (CC BY-SA) \u00B7 Sources: ASI, MP Tourism, Wikipedia"}
        </p>
      </footer>
    </div>
  );
}
