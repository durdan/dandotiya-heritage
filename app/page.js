import Navbar from "./components/Navbar";
import Mandala from "./components/Mandala";
import Particles from "./components/Particles";
import ScrollReveal from "./components/ScrollReveal";
import FamilyTree from "./components/FamilyTree";

const hiLinks = [
  { href: "#identity", label: "परिचय" },
  { href: "#bhrigu", label: "भृगु वंश" },
  { href: "#origin", label: "उत्पत्ति" },
  { href: "#dwarka", label: "द्वारका" },
  { href: "#deities", label: "देवी-देवता" },
  { href: "#lineage", label: "इतिहास" },
  { href: "#geography", label: "तीर्थ स्थल" },
  { href: "#tree-section", label: "वंश वृक्ष" },
];

export default function Home() {
  const fontHi = "var(--font-tiro), 'Tiro Devanagari Hindi', serif";
  const fontHiUI = "var(--font-noto), 'Noto Sans Devanagari', sans-serif";
  const fontEn = "var(--font-cinzel), 'Cinzel Decorative', serif";

  return (
    <div className="page-enter" style={{ fontFamily: fontHi }}>
      <ScrollReveal />
      <Navbar lang="hi" links={hiLinks} />

      {/* ══════ HERO ══════ */}
      <section className="hero" id="home">
        <Mandala />
        <Particles />
        <div className="h-eye" style={{ fontFamily: fontHiUI }}>
          ॥ श्री गणेशाय नमः ॥
        </div>
        <h1 className="h-title" style={{ fontFamily: fontHiUI }}>
          दंडोतिया
        </h1>
        <div className="h-sub" style={{ fontFamily: fontHiUI }}>
          पारिवारिक विरासत पोर्टल
        </div>
        <div className="h-div">
          <span className="h-line" />
          <span className="h-om">ॐ</span>
          <span className="h-line" />
        </div>
        <div className="h-tag" style={{ fontFamily: fontHiUI }}>
          भृगु वंश · यजुर्वेद · माध्यंदिनी शाखा
          <br />
          एक नाम जो स्वयं श्रीकृष्ण ने दिया — सनातन काल के लिए
        </div>
        <div className="scroll-ind" style={{ fontFamily: fontHiUI }}>
          <span>नीचे स्क्रॉल करें</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* ══════ CORE IDENTITY — मूल परिचय ══════ */}
      <section className="sec-pad bg-p" id="identity">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontHiUI }}>हम कौन हैं</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontHiUI }}>मूल परिचय</h2>
          <div className="sec-rule" />
        </div>

        <div className="id-grid">
          <div className="id-card reveal d1">
            <span className="ic-icon">🕉️</span>
            <span className="ic-lbl" style={{ fontFamily: fontHiUI }}>वर्ण</span>
            <span className="ic-val" style={{ fontFamily: fontHiUI }}>ब्राह्मण</span>
            <span className="ic-note" style={{ fontFamily: fontHi }}>वैदिक ज्ञान और पवित्र परंपरा के रक्षक — पौरोहित्य एवं विद्वता का वर्ण</span>
          </div>
          <div className="id-card reveal d2">
            <span className="ic-icon">🔥</span>
            <span className="ic-lbl" style={{ fontFamily: fontHiUI }}>गोत्र</span>
            <span className="ic-val" style={{ fontFamily: fontHiUI }}>भृगु</span>
            <span className="ic-note" style={{ fontFamily: fontHi }}>सप्तर्षि महर्षि भृगु के वंशज — जो स्वयं ब्रह्मा जी के मानसपुत्र थे</span>
          </div>
          <div className="id-card reveal d3">
            <span className="ic-icon">⚡</span>
            <span className="ic-lbl" style={{ fontFamily: fontHiUI }}>वंश</span>
            <span className="ic-val" style={{ fontFamily: fontHiUI }}>भृगु वंशी</span>
            <span className="ic-note" style={{ fontFamily: fontHi }}>भार्गव वंश — वैदिक परंपरा के आठ मूल गोत्र कुलों में से एक</span>
          </div>
          <div className="id-card reveal d4">
            <span className="ic-icon">📜</span>
            <span className="ic-lbl" style={{ fontFamily: fontHiUI }}>शाखा</span>
            <span className="ic-val" style={{ fontFamily: fontHiUI }}>माध्यंदिनी</span>
            <span className="ic-note" style={{ fontFamily: fontHi }}>शुक्ल यजुर्वेद की शाखा — ४० अध्याय, १,९७५ मंत्र, ईशावास्योपनिषद सहित</span>
          </div>
          <div className="id-card reveal d5">
            <span className="ic-icon">🕯️</span>
            <span className="ic-lbl" style={{ fontFamily: fontHiUI }}>वेद</span>
            <span className="ic-val" style={{ fontFamily: fontHiUI }}>यजुर्वेद</span>
            <span className="ic-note" style={{ fontFamily: fontHi }}>कर्मकांड का वेद — यज्ञ विधि, संस्कार और पवित्र अनुष्ठानों का आधार</span>
          </div>
          <div className="id-card reveal d6">
            <span className="ic-icon">🏘️</span>
            <span className="ic-lbl" style={{ fontFamily: fontHiUI }}>समाज विस्तार</span>
            <span className="ic-val" style={{ fontFamily: fontHiUI }}>२८ गाँव</span>
            <span className="ic-note" style={{ fontFamily: fontHi }}>दंडोतिया समाज का विस्तार लगभग २८ ग्रामों में है</span>
          </div>
        </div>

        <div className="lore-box reveal">
          <div className="lore-ttl" style={{ fontFamily: fontHiUI }}>॥ गोत्र व्यवस्था — इसका अर्थ क्या है ॥</div>
          <p className="lore-p" style={{ fontFamily: fontHi }}>
            गोत्र केवल एक उपनाम नहीं है — यह हजारों वर्षों की अटूट पितृ-परंपरा है जो वैदिक ऋषि तक जाती है। &quot;हमारा गोत्र भृगु है&quot; — इसका अर्थ है कि हमारी पुरुष-परंपरा स्वयं महर्षि भृगु से जुड़ी है। वैदिक कर्मकांड में मनुष्य इसी परंपरा को अपनी आध्यात्मिक योग्यता का प्रमाण मानकर उद्घोषित करता है। समान गोत्र में विवाह वर्जित है — एक ही गोत्र के लोग भाई-बहन माने जाते हैं, क्योंकि वे एक ही पितामह के वंशज हैं।
          </p>
        </div>
      </section>

      {/* ══════ MAHARISHI BHRIGU — महर्षि भृगु ══════ */}
      <section className="sec-pad bg-p2" id="bhrigu">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontHiUI }}>हमारे पूर्वज ऋषि</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontHiUI }}>महर्षि भृगु</h2>
          <div className="sec-rule" />
        </div>

        <div className="bhrigu-grid">
          <div className="bhrigu-portrait reveal">
            <span className="bp-icon">🌟</span>
            <div className="bp-name" style={{ fontFamily: fontHiUI }}>महर्षि भृगु</div>
            <div style={{ fontFamily: fontHiUI, fontSize: '16px', color: 'var(--saffron)', opacity: 0.75, marginBottom: '14px' }}>महर्षि भृगु</div>
            <div className="bp-role" style={{ fontFamily: fontHiUI }}>सप्तर्षि · प्रजापति · हिन्दू ज्योतिष के जनक</div>
          </div>
          <div className="bhrigu-facts">
            <div className="bf-item reveal d1">
              <span className="bf-lbl" style={{ fontFamily: fontHiUI }}>उत्पत्ति</span>
              <p className="bf-txt" style={{ fontFamily: fontHi }}>
                महर्षि भृगु ब्रह्मा जी के मानसपुत्र हैं — सृष्टि के समय ब्रह्मा की त्वचा (त्वक्) से उत्पन्न हुए। वे दस प्रजापतियों में से एक हैं जिन्हें सृष्टि के कार्य में सहायता के लिए नियुक्त किया गया था।
              </p>
            </div>
            <div className="bf-item reveal d2">
              <span className="bf-lbl" style={{ fontFamily: fontHiUI }}>भगवद्गीता में</span>
              <p className="bf-txt" style={{ fontFamily: fontHi }}>
                श्रीकृष्ण स्वयं भगवद्गीता (१०.२५) में कहते हैं: &quot;महर्षीणां भृगुरहम्&quot; — &quot;ऋषियों में मैं भृगु हूँ।&quot; यह किसी ऋषि को मिलने वाला सर्वोच्च सम्मान है।
              </p>
            </div>
            <div className="bf-item reveal d3">
              <span className="bf-lbl" style={{ fontFamily: fontHiUI }}>त्रिमूर्ति परीक्षण</span>
              <p className="bf-txt" style={{ fontFamily: fontHi }}>
                महर्षि भृगु को ऋषि-समाज ने ब्रह्मा, शिव और विष्णु — तीनों की परीक्षा लेने भेजा। विष्णु जी की असीम विनम्रता — ऋषि के चरण-प्रहार के बाद उनके पैर दबाना — ने भृगु को घोषणा करने पर विवश किया कि विष्णु ही त्रिदेवों में श्रेष्ठ हैं।
              </p>
            </div>
            <div className="bf-item reveal d4">
              <span className="bf-lbl" style={{ fontFamily: fontHiUI }}>भृगु संहिता</span>
              <p className="bf-txt" style={{ fontFamily: fontHi }}>
                महर्षि भृगु ने भृगु संहिता की रचना की — ज्योतिष का प्रथम ग्रंथ, जिसमें ५,००,००० से अधिक जन्मपत्रिकाएँ संकलित हैं। यही वैदिक ज्योतिष का आधार है, जो आज भी प्रचलित है।
              </p>
            </div>
            <div className="bf-item reveal d5">
              <span className="bf-lbl" style={{ fontFamily: fontHiUI }}>दिव्य परिवार</span>
              <p className="bf-txt" style={{ fontFamily: fontHi }}>
                इनकी पुत्री लक्ष्मी जी ने भगवान विष्णु से विवाह किया (इसीलिए उन्हें भार्गवी कहते हैं)। पुत्र शुक्राचार्य असुरों के गुरु बने। वंशज जमदग्नि के पुत्र परशुराम, विष्णु के छठे अवतार हुए।
              </p>
            </div>
            <div className="bf-item reveal d6">
              <span className="bf-lbl" style={{ fontFamily: fontHiUI }}>हमारा संबंध</span>
              <p className="bf-txt" style={{ fontFamily: fontHi }}>
                दंडोतिया परिवार की अटूट पितृ-परंपरा इसी भृगु तक जाती है — वही भृगु जिन्होंने वैदिक विधि की नींव रखी, लक्ष्मी को जन्म दिया, और जिनके वंश में परशुराम हुए। प्रत्येक दंडोतिया यह ब्रह्मांडीय वंशावली लिए चलता है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ ORIGIN STORY — उत्पत्ति ══════ */}
      <section className="sec-pad bg-p" id="origin">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontHiUI }}>ऐतिहासिक कथा</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontHiUI }}>दंडोतिया नाम की उत्पत्ति</h2>
          <div className="sec-rule" />
        </div>

        <div className="story-flow reveal">
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontHiUI }}>१</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontHiUI }}>डोनेरिया ब्राह्मण</div>
              <p className="sf-txt">दंडोतिया नाम से पहले यह परिवार डोनेरिया ब्राह्मणों के नाम से जाना जाता था — डोनेरगढ़ में, भृगु वंश में, माध्यंदिनी शाखा के शुक्ल यजुर्वेद के अनुयायी। उनकी आध्यात्मिक साधना पीढ़ी-दर-पीढ़ी अटूट रही।</p>
            </div>
          </div>
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontHiUI }}>२</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontHiUI }}>किशनदास जी — महान भक्त</div>
              <p className="sf-txt">इसी वंश में किशनदास जी का जन्म हुआ — लगभग संवत १३१० (ईसवी ≈ १२५३) में। वे साधारण साधक नहीं थे। उन्होंने दशकों तक गहन तपस्या की — ऐसी अखंड आराधना जो उन्हें सामान्य ब्राह्मण जीवन से पृथक करती थी। उनका हृदय एक ही लक्ष्य को जानता था: श्रीकृष्ण के दिव्य दर्शन।</p>
              <span className="sf-tag" style={{ fontFamily: fontHiUI }}>संवत १३१० — किशनदास जी का जन्म</span>
            </div>
          </div>
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontHiUI }}>३</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontHiUI }}>द्वारका की यात्रा</div>
              <p className="sf-txt">किशनदास जी की यात्रा उन्हें द्वारका ले गई — गुजरात के पश्चिमी तट पर स्थित वह पुण्य नगरी जो स्वयं श्रीकृष्ण ने बसाई थी। आधुनिक पुरातत्व ने प्रमाणित किया है कि यह नगरी अरब सागर में लगभग १५०० ईसा पूर्व डूब गई थी। महाभारत में वर्णन है: जिस दिन कृष्ण ने देह त्यागी, उसी दिन द्वारका समुद्र में समा गई।</p>
            </div>
          </div>
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontHiUI }}>४</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontHiUI }}>छिपा हुआ सत्य</div>
              <p className="sf-txt">द्वारका में किशनदास जी को बताया गया — जो उनकी श्रद्धा की अंतिम परीक्षा थी: &quot;असली द्वारका भूमि पर नहीं है। वह समुद्र की गहराई में है।&quot; केवल पूर्ण शरणागति वाली आत्मा ही वहाँ प्रवेश कर सकती है और लौट सकती है।</p>
            </div>
          </div>
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontHiUI }}>५</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontHiUI }}>समुद्र का वरदान</div>
              <p className="sf-txt">पूर्ण विश्वास के साथ किशनदास जी सागर में उतर गए। वे डूबे नहीं — वे उस दिव्य अवस्था में पहुँचे। उन गहराइयों में — विश्वकर्मा द्वारा निर्मित उस नगरी में, जहाँ ९,००,००० स्फटिक महल और पन्ने की दीवारें थीं — उन्हें साक्षात श्रीकृष्ण के दर्शन हुए।</p>
            </div>
          </div>
        </div>

        <div className="divine-q reveal">
          <span className="dq-attr" style={{ fontFamily: fontHiUI }}>— भगवान श्रीकृष्ण का उद्गार, द्वारका की पवित्र गहराइयों में किशनदास जी को सम्बोधित करते हुए —</span>
          <div className="dq-text" style={{ fontFamily: fontHiUI }}>&quot;आओ, दंडोतिया&quot;</div>
          <p className="dq-sub">उस एक उद्गार से एक पदवी का जन्म हुआ। न विरासत में मिली, न स्वयं चुनी गई। स्वयं प्रभु ने उस आत्मा को यह नाम दिया जिसने पूर्ण भक्ति से इसे अर्जित किया था। उस क्षण से यह वंश सदा के लिए बदल गया।</p>
        </div>

        <div className="story-flow reveal">
          <div className="sf-step">
            <div className="sf-num" style={{ fontFamily: fontHiUI }}>६</div>
            <div>
              <div className="sf-ttl" style={{ fontFamily: fontHiUI }}>नया नाम — एक पवित्र पदवी</div>
              <p className="sf-txt">दंडोतिया केवल एक उपनाम नहीं है। यह एक पदवी है — एक दिव्य उपाधि — जो स्वयं श्रीकृष्ण ने उच्चारित की। वंश-क्रम: डोनेरिया → किशनदास जी → दंडोतिया। आज इस परिवार का प्रत्येक सदस्य वह नाम धारण करता है जो किसी सरकारी रजिस्टर या ग्रामीण परंपरा से नहीं, बल्कि ईश्वर के मुख से उत्पन्न हुआ।</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ DWARKA — द्वारका ══════ */}
      <section className="sec-pad bg-p2" id="dwarka">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontHiUI }}>पवित्र संदर्भ</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontHiUI }}>समुद्र में डूबी नगरी</h2>
          <div className="sec-rule" />
        </div>

        <div className="dwarka-cols">
          <div className="dw-card reveal d1">
            <span className="dw-icon">🌊</span>
            <div className="dw-ttl" style={{ fontFamily: fontHiUI }}>द्वारका — कृष्ण की नगरी</div>
            <p className="dw-txt" style={{ fontFamily: fontHi }}>
              द्वारका (संस्कृत: &quot;स्वर्ग का द्वार&quot;) — भगवान कृष्ण ने मथुरा से अपने कुल को सुरक्षित करने के लिए गुजरात के पश्चिमी तट पर यह नगरी बसाई। दिव्य शिल्पी विश्वकर्मा ने ९,००,०००  स्फटिक और रजत महलों, पन्ने की दीवारों और रत्न-जड़ित वृक्षों से इसे सजाया। भागवत पुराण कहता है — यह नगरी देखकर देवता भी ईर्ष्यालु हो जाते थे।
            </p>
            <div className="dw-fact" style={{ fontFamily: fontHi }}>
              &quot;द्वारका में ९,००,०००  राजमहल थे — स्फटिक और रजत से निर्मित, विशाल पन्नों से सुसज्जित।&quot; — भागवत पुराण
            </div>
          </div>
          <div className="dw-card reveal d2">
            <span className="dw-icon">🔱</span>
            <div className="dw-ttl" style={{ fontFamily: fontHiUI }}>समुद्र-समाधान</div>
            <p className="dw-txt" style={{ fontFamily: fontHi }}>
              महाभारत में वर्णन है: जिस दिन भगवान कृष्ण ने देह त्यागी, उसी दिन द्वारका सागर में समा गई — ठीक वैसे जैसा भविष्यवाणी थी। उसी क्षण कलियुग का आरंभ हुआ। सच्ची द्वारका भूमि पर नहीं है — वह समुद्र के भीतर है, ठीक वैसे जैसा किशनदास जी को बताया गया था।
            </p>
            <div className="dw-fact" style={{ fontFamily: fontHi }}>
              पुरातत्व प्रमाण: भारत के राष्ट्रीय समुद्र विज्ञान संस्थान द्वारा १९८३–१९९० में समुद्री उत्खनन में डूबी हुई संरचनाएँ, पत्थर के लंगर, किलेबंदी की दीवारें — लगभग १५०० ईसा पूर्व की प्रमाणित।
            </div>
          </div>
        </div>
      </section>

      {/* ══════ VEDIC IDENTITY — वैदिक परिचय ══════ */}
      <section className="sec-pad bg-p" id="vedic">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontHiUI }}>आध्यात्मिक ढाँचा</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontHiUI }}>वैदिक परिचय — गहन दृष्टि</h2>
          <div className="sec-rule" />
        </div>

        <div className="vedic-grid">
          <div className="vc reveal d1">
            <span className="vc-icon">📖</span>
            <div className="vc-ttl" style={{ fontFamily: fontHiUI }}>यजुर्वेद</div>
            <div className="vc-main" style={{ fontFamily: fontHiUI }}>पवित्र कर्म का वेद</div>
            <p className="vc-sub" style={{ fontFamily: fontHi }}>
              चार वेदों में से दूसरा। ऋग्वेद में स्तुतियाँ और सामवेद में धुनें हैं — यजुर्वेद में यज्ञ की विधियाँ हैं। ब्राह्मण के जीवन का प्रत्येक संस्कार, अग्नि-यज्ञ और अनुष्ठान यजुर्वेद पर आधारित है।
            </p>
          </div>
          <div className="vc reveal d2">
            <span className="vc-icon">🌅</span>
            <div className="vc-ttl" style={{ fontFamily: fontHiUI }}>माध्यंदिनी शाखा</div>
            <div className="vc-main" style={{ fontFamily: fontHiUI }}>शुक्ल यजुर्वेद की शाखा</div>
            <p className="vc-sub" style={{ fontFamily: fontHi }}>
              शुक्ल यजुर्वेद की केवल दो जीवित शाखाओं में से एक। ४० अध्याय, १,९७५ मंत्र — जिसमें ईशावास्योपनिषद (४०वाँ अध्याय) सम्मिलित है। आज उत्तर प्रदेश, मध्य प्रदेश, राजस्थान, महाराष्ट्र और नेपाल में प्रचलित।
            </p>
          </div>
          <div className="vc reveal d3">
            <span className="vc-icon">🧵</span>
            <div className="vc-ttl" style={{ fontFamily: fontHiUI }}>प्रवर व्यवस्था</div>
            <div className="vc-main" style={{ fontFamily: fontHiUI }}>तीन पूर्वज ऋषि</div>
            <p className="vc-sub" style={{ fontFamily: fontHi }}>
              प्रत्येक ब्राह्मण की पूर्ण पहचान में प्रवर — ३ या ५ श्रेष्ठ ऋषियों की नामावली — सम्मिलित होती है, जो यज्ञोपवीत धारण के समय उच्चारित की जाती है। भृगु गोत्र के लिए यह क्रम है: भृगु, च्यवन, आप्नवान, और्व, जमदग्नि।
            </p>
          </div>
          <div className="vc reveal d4">
            <span className="vc-icon">⚖️</span>
            <div className="vc-ttl" style={{ fontFamily: fontHiUI }}>भार्गव वंश</div>
            <div className="vc-main" style={{ fontFamily: fontHiUI }}>भृगु के वंशज</div>
            <p className="vc-sub" style={{ fontFamily: fontHi }}>
              भार्गव (भृगु के वंशज) हैहय वंश के राजाओं के परंपरागत पुरोहित थे। इस वंश ने शुक्राचार्य (असुरों के गुरु), जमदग्नि, परशुराम (विष्णु अवतार) और महर्षि दधीचि जैसे महान विभूतियों को जन्म दिया।
            </p>
          </div>
          <div className="vc reveal d5">
            <span className="vc-icon">🔗</span>
            <div className="vc-ttl" style={{ fontFamily: fontHiUI }}>गोत्र नियम</div>
            <div className="vc-main" style={{ fontFamily: fontHiUI }}>जीवित विधान</div>
            <p className="vc-sub" style={{ fontFamily: fontHi }}>
              भृगु गोत्र के दंडोतिया किसी अन्य भृगु गोत्री से विवाह नहीं कर सकते — वे भाई-बहन माने जाते हैं। इसके अतिरिक्त, भृगु और अंगिरस गोत्र के समान प्रवर ऋषि होने से उनमें भी विवाह वर्जित है।
            </p>
          </div>
          <div className="vc reveal d6">
            <span className="vc-icon">📿</span>
            <div className="vc-ttl" style={{ fontFamily: fontHiUI }}>उपनयन संस्कार</div>
            <div className="vc-main" style={{ fontFamily: fontHiUI }}>यज्ञोपवीत</div>
            <p className="vc-sub" style={{ fontFamily: fontHi }}>
              यज्ञोपवीत धारण के समय एक दंडोतिया बालक अपना गोत्र, प्रवर, शाखा और सूत्र उद्घोषित करता है। यही वह क्षण है जब यह प्राचीन श्रृंखला नवीनीकृत होती है। प्रत्येक नई पीढ़ी महर्षि भृगु और भविष्य के बीच एक जीवित कड़ी बन जाती है।
            </p>
          </div>
        </div>
      </section>

      {/* ══════ DEITIES — देवी-देवता ══════ */}
      <section className="sec-pad bg-p2" id="deities">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontHiUI }}>हमारे पवित्र रक्षक</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontHiUI }}>कुल देवी एवं इष्ट देवता</h2>
          <div className="sec-rule" />
        </div>

        <div className="det-grid">
          <div className="det-card reveal d1">
            <span className="det-icon">🌸</span>
            <span className="det-role" style={{ fontFamily: fontHiUI }}>कुल देवी — प्रमुख</span>
            <div className="det-name" style={{ fontFamily: fontHiUI }}>कात्यायनी देवी</div>
            <div className="det-dev" style={{ fontFamily: fontHiUI }}>कात्यायनी देवी</div>
            <p className="det-desc" style={{ fontFamily: fontHi }}>
              नव-दुर्गा का छठा स्वरूप — यजुर्वेद के तैत्तिरीय आरण्यक में सर्वप्रथम उल्लेख। महिषासुर का वध करने के लिए समस्त देवों के क्रोध से उत्पन्न। सिंहवाहिनी, चंद्रहास खड्गधारिणी। भागवत पुराण में वर्णन: वृंदावन की गोपियों ने कात्यायनी देवी की आराधना की — श्रीकृष्ण को पति रूप में पाने के लिए। यही वह दिव्य संबंध है जो दंडोतिया परिवार की द्वारका-कथा से जुड़ता है। वे धर्म, अर्थ, काम और मोक्ष — चारों पुरुषार्थ प्रदान करती हैं।
            </p>
          </div>
          <div className="det-card reveal d2">
            <span className="det-icon">🪷</span>
            <span className="det-role" style={{ fontFamily: fontHiUI }}>कुल देवी — द्वितीय</span>
            <div className="det-name" style={{ fontFamily: fontHiUI }}>वैष्णवी देवी</div>
            <div className="det-dev" style={{ fontFamily: fontHiUI }}>वैष्णवी देवी</div>
            <p className="det-desc" style={{ fontFamily: fontHi }}>
              दंडोतिया परिवार की दूसरी कुल देवी। मातृकाओं में से एक — स्वयं भगवान विष्णु की शक्ति। वे सुदर्शन चक्र, शंख, गदा और कमल धारण करती हैं। कात्यायनी देवी के साथ उनकी युगल उपस्थिति — एक ओर शक्ति की रक्षा-भावना, दूसरी ओर वैष्णव परंपरा की करुणा — दोनों का संगम इस परिवार की आस्था में है।
            </p>
          </div>
          <div className="det-card reveal d3">
            <span className="det-icon">🏹</span>
            <span className="det-role" style={{ fontFamily: fontHiUI }}>इष्ट देवता</span>
            <div className="det-name" style={{ fontFamily: fontHiUI }}>श्री रघुनाथ भगवान</div>
            <div className="det-dev" style={{ fontFamily: fontHiUI }}>श्री रघुनाथ भगवान</div>
            <p className="det-desc" style={{ fontFamily: fontHi }}>
              दंडोतिया परिवार के इष्ट देवता। रघुनाथ — रघु कुल के स्वामी — भगवान राम का एक नाम है, विष्णु के सातवें अवतार, धर्म और आदर्श राजत्व के प्रतीक। राम (रघुनाथ के रूप में) और कृष्ण (द्वारका के दिव्य प्रसंग में) — दोनों के प्रति यह भक्ति एक परिपूर्ण वैष्णव आत्मिक परिचय को प्रकट करती है।
            </p>
          </div>
        </div>
      </section>

      {/* ══════ TIMELINE — ऐतिहासिक कालक्रम ══════ */}
      <section className="sec-pad bg-p" id="lineage">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontHiUI }}>युगों से युगों तक</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontHiUI }}>ऐतिहासिक कालक्रम</h2>
          <div className="sec-rule" />
        </div>

        <div className="tl-wrap">
          <div className="tl-item reveal">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontHiUI }}>प्राचीन काल</span>
              <div className="tl-evt" style={{ fontFamily: fontHiUI }}>डोनेरिया ब्राह्मणों की उत्पत्ति</div>
              <p className="tl-desc" style={{ fontFamily: fontHi }}>
                परिवार डोनेरगढ़ में डोनेरिया ब्राह्मणों के रूप में विद्यमान — भृगु गोत्र, यजुर्वेद, माध्यंदिनी शाखा। वैदिक परंपरा के पीढ़ी-दर-पीढ़ी निष्ठावान पालक।
              </p>
            </div>
          </div>

          <div className="tl-item reveal d2">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontHiUI }}>संवत १३१० · ≈ १२५३ ई.</span>
              <div className="tl-evt" style={{ fontFamily: fontHiUI }}>किशनदास जी का जन्म</div>
              <p className="tl-desc" style={{ fontFamily: fontHi }}>
                वह व्यक्ति जो परिवार के नाम को एक दिव्य पदवी में रूपांतरित करेगा, डोनेरिया वंश में जन्म लेता है।
              </p>
            </div>
          </div>

          <div className="tl-item reveal d1">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontHiUI }}>दशकों की साधना</span>
              <div className="tl-evt" style={{ fontFamily: fontHiUI }}>महान तपस्या</div>
              <p className="tl-desc" style={{ fontFamily: fontHi }}>
                किशनदास जी वर्षों तक गहन आध्यात्मिक अनुशासन — उपवास, ध्यान, तीर्थयात्रा — में लीन रहते हैं। उनकी यात्रा उन्हें भारत के पवित्र मार्गों पर होते हुए द्वारका की ओर ले जाती है।
              </p>
            </div>
          </div>

          <div className="tl-item reveal d2">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontHiUI }}>द्वारका काल</span>
              <div className="tl-evt" style={{ fontFamily: fontHiUI }}>सागर में दिव्य दर्शन</div>
              <p className="tl-desc" style={{ fontFamily: fontHi }}>
                किशनदास जी पूर्ण विश्वास के साथ द्वारका के सागर में उतरते हैं। डूबी हुई पवित्र नगरी में वे श्रीकृष्ण से मिलते हैं। प्रभु ने कहा: &quot;आओ, दंडोतिया।&quot; एक पदवी का जन्म।
              </p>
            </div>
          </div>

          <div className="tl-item reveal d1">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontHiUI }}>दिव्य दर्शन के पश्चात्</span>
              <div className="tl-evt" style={{ fontFamily: fontHiUI }}>वंश का रूपांतरण</div>
              <p className="tl-desc" style={{ fontFamily: fontHi }}>
                डोनेरिया → दंडोतिया। परिवार अपनी नई दिव्य पदवी लेकर चलता है। पलायन पथ: डोनेरगढ़ → किशनपुरा → बदोखर — लगभग २८ गाँवों में विस्तार।
              </p>
            </div>
          </div>

          <div className="tl-item reveal d2">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontHiUI }}>संवत १५२७ · ≈ १४७० ई.</span>
              <div className="tl-evt" style={{ fontFamily: fontHiUI }}>सुजान देवी का सती-प्रसंग</div>
              <p className="tl-desc" style={{ fontFamily: fontHi }}>
                पारिवारिक अभिलेखों में वर्णित एक गहन बलिदान का क्षण: जीवनदास और सुजान देवी का सती-प्रसंग। इतनी महत्त्वपूर्ण घटना कि मौखिक परंपरा में शताब्दियों तक संरक्षित रही।
              </p>
            </div>
          </div>

          <div className="tl-item reveal d1">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontHiUI }}>पैतृक बसावट</span>
              <div className="tl-evt" style={{ fontFamily: fontHiUI }}>बदोखर — समाज का केन्द्र</div>
              <p className="tl-desc" style={{ fontFamily: fontHi }}>
                बदोखर दंडोतिया समाज का केन्द्रीय पैतृक ग्राम बनता है — आध्यात्मिक और सांस्कृतिक आधारस्तंभ।
              </p>
            </div>
          </div>

          <div className="tl-item reveal d2">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-era" style={{ fontFamily: fontHiUI }}>आज · वर्तमान</span>
              <div className="tl-evt" style={{ fontFamily: fontHiUI }}>जीवित विरासत</div>
              <p className="tl-desc" style={{ fontFamily: fontHi }}>
                दंडोतिया परिवार आज भी जीवित है — कृष्ण द्वारा दी गई पदवी के वाहक, महर्षि भृगु तक जाने वाले वंश के संरक्षक, और सभ्यता के प्रारंभ से चली आ रही वैदिक परंपरा के अनुयायी।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ SACRED GEOGRAPHY — पवित्र भूगोल ══════ */}
      <section className="sec-pad bg-p" id="geography">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontHiUI }}>तीर्थयात्रा और प्रयोजन</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontHiUI }}>पवित्र भूगोल</h2>
          <div className="sec-rule" />
        </div>

        <div className="geo-grid">
          <div className="geo-card reveal d1">
            <span className="geo-icon">🏔️</span>
            <div className="geo-name" style={{ fontFamily: fontHiUI }}>हरिद्वार</div>
            <p className="geo-desc" style={{ fontFamily: fontHi }}>
              देवताओं का द्वार — जहाँ गंगा हिमालय से मैदानों में उतरती है। कुंभ मेला के चार पवित्र नगरों में से एक।
            </p>
          </div>
          <div className="geo-card reveal d2">
            <span className="geo-icon">⛰️</span>
            <div className="geo-name" style={{ fontFamily: fontHiUI }}>बद्रीनाथ</div>
            <p className="geo-desc" style={{ fontFamily: fontHi }}>
              हिमालय में १०,०००+ फुट की ऊँचाई पर भगवान विष्णु का पवित्र धाम। चार धाम और पंच केदार में से एक।
            </p>
          </div>
          <div className="geo-card reveal d3">
            <span className="geo-icon">🏰</span>
            <div className="geo-name" style={{ fontFamily: fontHiUI }}>लोहागढ़</div>
            <p className="geo-desc" style={{ fontFamily: fontHi }}>
              प्राचीन लोह-दुर्ग — समाज की आध्यात्मिक जड़ों से गहराई से जुड़ा। पारिवारिक स्मृति में ऐतिहासिक और आध्यात्मिक महत्त्व का स्थान।
            </p>
          </div>
          <div className="geo-card reveal d4">
            <span className="geo-icon">🌊</span>
            <div className="geo-name" style={{ fontFamily: fontHiUI }}>द्वारका</div>
            <p className="geo-desc" style={{ fontFamily: fontHi }}>
              दंडोतिया विरासत का सबसे पवित्र स्थान। जहाँ किशनदास जी सागर में उतरे और कृष्ण द्वारा प्रदत्त नाम लेकर लौटे। सप्त पुरियों में से एक, चार धामों में से एक।
            </p>
          </div>
          <div className="geo-card reveal d5">
            <span className="geo-icon">🌺</span>
            <div className="geo-name" style={{ fontFamily: fontHiUI }}>कोल्हापुर</div>
            <p className="geo-desc" style={{ fontFamily: fontHi }}>
              महालक्ष्मी का पवित्र आसन — जो भार्गवी हैं, स्वयं भृगु ऋषि की पुत्री। कोल्हापुर का मंदिर ५१ शक्तिपीठों में से एक है।
            </p>
          </div>
          <div className="geo-card reveal d6">
            <span className="geo-icon">🎵</span>
            <div className="geo-name" style={{ fontFamily: fontHiUI }}>यमुना / मथुरा</div>
            <p className="geo-desc" style={{ fontFamily: fontHi }}>
              भगवान कृष्ण की जन्मभूमि। जहाँ गोपियों ने कात्यायनी देवी — दंडोतिया परिवार की कुल देवी — की आराधना कृष्ण को पति रूप में पाने के लिए की। एक गहरा आध्यात्मिक वृत्त।
            </p>
          </div>
        </div>
      </section>

      {/* ══════ MIGRATION — पैतृक पलायन पथ ══════ */}
      <section className="sec-pad bg-p2" id="migration">
        <div className="sec-hdr reveal">
          <span className="sec-lbl" style={{ fontFamily: fontHiUI }}>यात्रा-पथ</span>
          <h2 className="sec-ttl" style={{ fontFamily: fontHiUI }}>पैतृक पलायन पथ</h2>
          <div className="sec-rule" />
        </div>

        <div className="mig-flow reveal">
          <div className="mig-node">
            <div className="mig-circle">🏛️</div>
            <div className="mig-name" style={{ fontFamily: fontHiUI }}>डोनेरगढ़</div>
            <div className="mig-sub" style={{ fontFamily: fontHi }}>उद्गम स्थान · डोनेरिया ब्राह्मण</div>
          </div>
          <div className="mig-arr">
            <span className="mig-line" />
            <span className="mig-pt">›</span>
          </div>
          <div className="mig-node">
            <div className="mig-circle">🌿</div>
            <div className="mig-name" style={{ fontFamily: fontHiUI }}>किशनपुरा</div>
            <div className="mig-sub" style={{ fontFamily: fontHi }}>किशनदास जी के सम्मान में नामित</div>
          </div>
          <div className="mig-arr">
            <span className="mig-line" />
            <span className="mig-pt">›</span>
          </div>
          <div className="mig-node">
            <div className="mig-circle">🏡</div>
            <div className="mig-name" style={{ fontFamily: fontHiUI }}>बदोखर</div>
            <div className="mig-sub" style={{ fontFamily: fontHi }}>केन्द्रीय पैतृक ग्राम</div>
          </div>
        </div>
      </section>

      {/* ══════ FAMILY TREE ══════ */}
      <FamilyTree />

      {/* ══════ OUTRO ══════ */}
      <section className="outro" id="legacy">
        <div className="outro-lines reveal">
          <span className="ol" style={{ fontFamily: fontHi }}>हर परिवार की एक कहानी होती है...</span>
          <span className="ol hi" style={{ fontFamily: fontHiUI }}>यह है दंडोतिया परिवार की कहानी।</span>
          <br />
          <span className="ol" style={{ fontFamily: fontHi }}>महर्षि भृगु के वंश में जड़ें —</span>
          <span className="ol" style={{ fontFamily: fontHi }}>सात महान सप्तर्षियों में से एक, ब्रह्मा के मानसपुत्र,</span>
          <span className="ol" style={{ fontFamily: fontHi }}>जिन्हें श्रीकृष्ण ने स्वयं ऋषियों में अपना प्रतिनिधि कहा।</span>
          <br />
          <span className="ol" style={{ fontFamily: fontHi }}>कात्यायनी देवी, वैष्णवी देवी,</span>
          <span className="ol" style={{ fontFamily: fontHi }}>और श्री रघुनाथ भगवान के संरक्षण में।</span>
          <br />
          <span className="ol" style={{ fontFamily: fontHi }}>किशनदास जी ने दशकों तक भक्ति का पथ चला।</span>
          <span className="ol" style={{ fontFamily: fontHi }}>वे द्वारका पहुँचे। सागर में उतरे।</span>
          <span className="ol" style={{ fontFamily: fontHi }}>उस डूबी हुई स्वर्णनगरी में जो विश्वकर्मा ने ईश्वर के लिए बनाई थी।</span>
          <br />
          <span className="ol" style={{ fontFamily: fontHi }}>वहाँ उन्हें श्रीकृष्ण के दर्शन हुए।</span>
          <br />
          <span className="ol hr" style={{ fontFamily: fontHi }}>प्रभु ने कहा:</span>
          <span className="ol hi" style={{ fontFamily: fontHiUI }}>&quot;आओ, दंडोतिया&quot;</span>
          <br />
          <span className="ol" style={{ fontFamily: fontHi }}>उस क्षण से एक नाम का जन्म हुआ।</span>
          <span className="ol hi" style={{ fontFamily: fontHiUI }}>एक विरासत की नींव पड़ी।</span>
        </div>
        <div className="outro-seal reveal">
          <span className="outro-om">ॐ</span>
          <span className="outro-line" style={{ fontFamily: fontHiUI }}>
            भृगु वंश · दंडोतिया कुल · संवत १३१० से
          </span>
        </div>
      </section>

      {/* ══════ FOOTNOTES ══════ */}
      <section className="fn-wrap">
        <div className="fn-title" style={{ fontFamily: fontHiUI }}>॥ शोध टिप्पणियाँ — स्रोत एवं संदर्भ ॥</div>
        <div className="fn-grid">
          <div className="fn-card reveal d1">
            <span className="fn-head" style={{ fontFamily: fontHiUI }}>भृगु एवं भगवद्गीता</span>
            <p className="fn-body" style={{ fontFamily: fontHi }}>
              गीता १०.२५ में श्रीकृष्ण की घोषणा — &quot;ऋषियों में मैं भृगु हूँ&quot; — दंडोतिया गोत्र को कृष्ण से सीधा शास्त्रीय संबंध देती है, द्वारका-प्रसंग से भी परे।
            </p>
          </div>
          <div className="fn-card reveal d2">
            <span className="fn-head" style={{ fontFamily: fontHiUI }}>द्वारका पुरातत्व</span>
            <p className="fn-body" style={{ fontFamily: fontHi }}>
              भारत के राष्ट्रीय समुद्र विज्ञान संस्थान की समुद्री खुदाई (१९८३–१९९०) में द्वारका तट के पास डूबी संरचनाएँ, पत्थर के लंगर, किलेबंदी की दीवारें मिलीं — एस. आर. राव ने इन्हें लगभग १५०० ईसा पूर्व का बताया।
            </p>
          </div>
          <div className="fn-card reveal d3">
            <span className="fn-head" style={{ fontFamily: fontHiUI }}>कात्यायनी एवं यजुर्वेद</span>
            <p className="fn-body" style={{ fontFamily: fontHi }}>
              कात्यायनी देवी का पहला उल्लेख यजुर्वेद के तैत्तिरीय आरण्यक में मिलता है — वही वैदिक परंपरा जो दंडोतिया परिवार की है। भागवत पुराण में गोपियों की कात्यायनी पूजा का वर्णन इस परिवार की द्वारका-कथा से जोड़ता है।
            </p>
          </div>
          <div className="fn-card reveal d4">
            <span className="fn-head" style={{ fontFamily: fontHiUI }}>माध्यंदिनी शाखा</span>
            <p className="fn-body" style={{ fontFamily: fontHi }}>
              शुक्ल यजुर्वेद की दो जीवित शाखाओं में से एक। आज राजस्थान, उ. प्र., म. प्र., महाराष्ट्र और नेपाल में प्रचलित। ईशावास्योपनिषद (४०वाँ अध्याय) — वेदांत परंपरा के सर्वाधिक महत्त्वपूर्ण उपनिषदों में से एक।
            </p>
          </div>
          <div className="fn-card reveal d5">
            <span className="fn-head" style={{ fontFamily: fontHiUI }}>संवत परिवर्तन</span>
            <p className="fn-body" style={{ fontFamily: fontHi }}>
              विक्रम संवत ईसवी सन् से लगभग ५७ वर्ष आगे चलता है। संवत १३१० ≈ १२५३ ई. (किशनदास जी का जन्म)। संवत १५२७ ≈ १४७० ई. (सुजान देवी का सती-प्रसंग)। ये घटनाएँ भारत के मध्यकाल में घटित हुईं।
            </p>
          </div>
          <div className="fn-card reveal d6">
            <span className="fn-head" style={{ fontFamily: fontHiUI }}>भार्गव एवं लक्ष्मी</span>
            <p className="fn-body" style={{ fontFamily: fontHi }}>
              भृगु वंशी होने का अर्थ है — दंडोतिया परिवार स्वयं लक्ष्मी जी से वंशीय संबंध रखता है (भार्गवी — भृगु की पुत्री)। उन्होंने विष्णु से विवाह किया। शुक्राचार्य, परशुराम और जमदग्नि — सभी इसी वंश के हैं।
            </p>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer>
        <span className="ft-brand" style={{ fontFamily: fontHiUI }}>
          दंडोतिया विरासत पोर्टल
        </span>
        <span className="ft-note" style={{ fontFamily: fontHiUI }}>
          पारिवारिक अभिलेखों, मौखिक परंपरा और वैदिक शोध पर आधारित
        </span>
      </footer>
    </div>
  );
}
