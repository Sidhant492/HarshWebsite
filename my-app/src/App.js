import { useState, useEffect } from "react";

const quotes = {
  love: [
    {
      text: "In love senses ceases\nno stimulus is detected\nwhat remains is only you, nothing else.\nits the ultimate peace.",
    },
    {
      text: "Love is the miracle of understanding.",
    },
    {
      text: "Reality can't be sensed by any instrument\nIt can't be felt\nBut its there, its all, its infinite\nIts the only witness\nRemained untouched by anything\nIt only can be understood by using mind\nIt can be perceived by our mind\nLike you are seeing your image in a mirror\nIts present only in present\nIts the supreme reality\nIts yourself\nIts love\nIts om\nIts everything\nIts nothing but SPACE.",
    },
  ],
  best: [
    { text: "In love no clash can happen\nIn relation it will\nWe have to cope out with problems\nNot with relationship." },
    { text: "Love is seeing oneness in everything." },
    { text: "Be bearing to all bad extreme conditions\nBut don't be deserving of that condition." },
    { text: "Your health is the biggest asset you can have." },
    { text: "Root cause of all suffering\nIs assuming that you are your body." },
    { text: "The biggest problem is\nFinding solution of a problem which doesn't exist." },
    { text: "The king who don't know truth is the real beggar\nAnd the beggar who know the truth is the real king." },
    { text: "Spirituality doesn't give solution\nIt dissolves the questioner." },
    { text: "Motivation is necessary for that work\nWhich is forcefully imposed on us." },
    { text: "Love is qualitative not quantitative." },
    { text: "Even flower doesn't flourish if darkness is not sufficient\nHow can we flourish without darkness." },
    { text: "Its bad that makes sense of good\nIts sadness that makes sense of happiness\nIts dark that makes sense of light\nIts death that makes sense of life\nAnd hence its DUALITY that makes sense of OM….." },
    { text: "Desire words are for those\nwho don't have purpose." },
  ],
};

const NAV_LINKS = ["Home", "NEET", "Quotes", "Contact"];

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,8,20,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,215,100,0.13)" : "none",
        transition: "all 0.4s ease",
        padding: "0 5vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22,
          fontWeight: 700,
          color: "#f5d87a",
          letterSpacing: 2,
          cursor: "pointer",
        }}
        onClick={() => setActive("Home")}
      >
        HARSH GUPTA
      </span>
      <div style={{ display: "flex", gap: 32 }}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link)}
            style={{
              background: "none",
              border: "none",
              color: active === link ? "#f5d87a" : "rgba(255,255,255,0.65)",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 15,
              letterSpacing: 2,
              cursor: "pointer",
              textTransform: "uppercase",
              borderBottom: active === link ? "1px solid #f5d87a" : "1px solid transparent",
              paddingBottom: 2,
              transition: "all 0.2s",
            }}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Hero({ setActive }) {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 5vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(245,216,122,0.09) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 30% 80%, rgba(120,80,200,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "8%",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "rgba(245,216,122,0.06)",
          filter: "blur(30px)",
        }}
      />
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(13px, 1.5vw, 15px)",
          letterSpacing: 6,
          color: "#f5d87a",
          textTransform: "uppercase",
          marginBottom: 24,
          opacity: 0.85,
        }}
      >
        Welcome to
      </p>
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(52px, 9vw, 110px)",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.05,
          margin: "0 0 12px",
          letterSpacing: -1,
        }}
      >
        Harsh
        <br />
        <span style={{ color: "#f5d87a" }}>Gupta</span>
      </h1>
      <p
        style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "rgba(255,255,255,0.55)",
          maxWidth: 480,
          lineHeight: 1.7,
          margin: "16px auto 40px",
          fontStyle: "italic",
        }}
      >
        NEET Educator · Philosopher · Author of{" "}
        <span style={{ color: "#f5d87a" }}>Way To Self</span> (coming soon)
      </p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => setActive("NEET")}
          style={{
            background: "#f5d87a",
            color: "#0a0814",
            border: "none",
            padding: "14px 36px",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 2,
            transition: "opacity 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.opacity = 0.85)}
          onMouseOut={(e) => (e.target.style.opacity = 1)}
        >
          NEET Lectures
        </button>
        <button
          onClick={() => setActive("Quotes")}
          style={{
            background: "transparent",
            color: "#f5d87a",
            border: "1px solid rgba(245,216,122,0.5)",
            padding: "14px 36px",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 2,
            transition: "border-color 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.borderColor = "#f5d87a")}
          onMouseOut={(e) => (e.target.style.borderColor = "rgba(245,216,122,0.5)")}
        >
          Read Quotes
        </button>
      </div>

      {/* Decorative line */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.4,
        }}
      >
        <span style={{ color: "#fff", fontSize: 11, letterSpacing: 3, fontFamily: "sans-serif" }}>
          SCROLL
        </span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #f5d87a, transparent)" }} />
      </div>
    </section>
  );
}

function NEETSection() {
  return (
    <section style={{ padding: "100px 5vw", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: 5, color: "#f5d87a", fontSize: 13, textTransform: "uppercase", marginBottom: 16 }}>
        Education
      </p>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 6vw, 64px)",
          color: "#fff",
          fontWeight: 700,
          marginBottom: 24,
        }}
      >
        NEET Examination
      </h2>
      <div
        style={{
          width: 60,
          height: 2,
          background: "linear-gradient(to right, transparent, #f5d87a, transparent)",
          margin: "0 auto 40px",
        }}
      />
      <p
        style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: 19,
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.9,
          maxWidth: 600,
          margin: "0 auto 48px",
          fontStyle: "italic",
        }}
      >
        Free NEET lectures covering all important information, questions, and NCERT material required for NEET preparation.
      </p>
      <a
        href="https://youtube.com/channel/UCc_yF6jAp3Ihy7Eox6Yg9IQ"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          background: "#ff4444",
          color: "#fff",
          padding: "14px 36px",
          borderRadius: 2,
          textDecoration: "none",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: 2,
          transition: "opacity 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = 0.85)}
        onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
        </svg>
        Watch on YouTube
      </a>
    </section>
  );
}

function QuoteCard({ text, index }) {
  const lines = text.split("\n");
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(245,216,122,0.12)",
        borderRadius: 4,
        padding: "36px 40px",
        position: "relative",
        transition: "border-color 0.3s, transform 0.3s",
        cursor: "default",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = "rgba(245,216,122,0.35)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = "rgba(245,216,122,0.12)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 16,
          left: 24,
          fontSize: 52,
          color: "rgba(245,216,122,0.15)",
          fontFamily: "Georgia, serif",
          lineHeight: 1,
        }}
      >
        "
      </span>
      <div style={{ paddingTop: 12 }}>
        {lines.map((line, i) => (
          <p
            key={i}
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.85,
              margin: "0 0 4px",
              fontStyle: "italic",
            }}
          >
            {line}
          </p>
        ))}
      </div>
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 12,
          color: "#f5d87a",
          letterSpacing: 4,
          textTransform: "uppercase",
          marginTop: 20,
          marginBottom: 0,
        }}
      >
        — Harsh Gupta
      </p>
    </div>
  );
}

function QuotesSection() {
  const [tab, setTab] = useState("love");
  return (
    <section style={{ padding: "100px 5vw" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: 5, color: "#f5d87a", fontSize: 13, textTransform: "uppercase", marginBottom: 16, textAlign: "center" }}>
          Wisdom
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 6vw, 64px)",
            color: "#fff",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Quotes
        </h2>
        <p style={{ fontFamily: "'EB Garamond', serif", color: "rgba(255,255,255,0.45)", textAlign: "center", fontSize: 16, fontStyle: "italic", marginBottom: 48 }}>
          From spirituality to daily life wisdom · Book <em>Way To Self</em> coming soon on Amazon
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 56 }}>
          {["love", "best"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                background: tab === t ? "#f5d87a" : "transparent",
                color: tab === t ? "#0a0814" : "rgba(255,255,255,0.55)",
                border: "1px solid",
                borderColor: tab === t ? "#f5d87a" : "rgba(255,255,255,0.2)",
                padding: "10px 28px",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 14,
                letterSpacing: 3,
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 2,
                fontWeight: tab === t ? 700 : 400,
                transition: "all 0.2s",
              }}
            >
              {t === "love" ? "On Love" : "Best Of All"}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {quotes[tab].map((q, i) => (
            <QuoteCard key={i} text={q.text} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section style={{ padding: "100px 5vw", textAlign: "center" }}>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: 5, color: "#f5d87a", fontSize: 13, textTransform: "uppercase", marginBottom: 16 }}>
        Get In Touch
      </p>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 6vw, 64px)",
          color: "#fff",
          fontWeight: 700,
          marginBottom: 24,
        }}
      >
        Contact
      </h2>
      <div style={{ width: 60, height: 2, background: "linear-gradient(to right, transparent, #f5d87a, transparent)", margin: "0 auto 48px" }} />
      <a
        href="https://harshguptaenterprises.wordpress.com/contact/"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          background: "transparent",
          color: "#f5d87a",
          border: "1px solid rgba(245,216,122,0.5)",
          padding: "16px 48px",
          borderRadius: 2,
          textDecoration: "none",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: 4,
          textTransform: "uppercase",
          transition: "all 0.2s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "rgba(245,216,122,0.08)";
          e.currentTarget.style.borderColor = "#f5d87a";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "rgba(245,216,122,0.5)";
        }}
      >
        Send a Message
      </a>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=EB+Garamond:ital,wght@0,400;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0a0814; color: #fff; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0814; }
        ::-webkit-scrollbar-thumb { background: rgba(245,216,122,0.3); border-radius: 2px; }
      `}</style>

      <div style={{ background: "#0a0814", minHeight: "100vh" }}>
        <Navbar active={active} setActive={setActive} />

        {active === "Home" && (
          <>
            <Hero setActive={setActive} />
            <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(245,216,122,0.15), transparent)", margin: "0 5vw" }} />
            <NEETSection />
            <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(245,216,122,0.15), transparent)", margin: "0 5vw" }} />
            <QuotesSection />
            <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(245,216,122,0.15), transparent)", margin: "0 5vw" }} />
            <ContactSection />
          </>
        )}
        {active === "NEET" && <NEETSection />}
        {active === "Quotes" && <QuotesSection />}
        {active === "Contact" && <ContactSection />}

        <footer
          style={{
            textAlign: "center",
            padding: "32px 5vw",
            borderTop: "1px solid rgba(245,216,122,0.08)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: 2,
          }}
        >
          © {new Date().getFullYear()} HARSH GUPTA ENTERPRISES · ALL RIGHTS RESERVED
        </footer>
      </div>
    </>
  );
}
