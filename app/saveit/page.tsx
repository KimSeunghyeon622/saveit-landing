
"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  CreditCard,
  Leaf,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Sparkles,
  Wallet,
} from "lucide-react";

/**
 * Save it Landing Page (Next.js App Router)
 * 목적:
 * 1) 고객 모집에 최적화된 카피와 구조
 * 2) 섹션 간소화 및 전환 동선 강화
 * 3) 입점 신청 / 무료 상담 CTA 강화
 */

const TOKENS = {
  typography: {
    font: { display: "Manrope", body: "IBM Plex Sans KR" },
    scale: {
      h1: { size: "clamp(30px, 3.6vw, 52px)", lineHeight: 1.08, weight: 750 },
      h2: { size: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.18, weight: 720 },
      h3: { size: "18px", lineHeight: 1.28, weight: 700 },
      body: { size: "16px", lineHeight: 1.65, weight: 450 },
      caption: { size: "13px", lineHeight: 1.5, weight: 450 },
    },
  },
  color: {
    primary: "#00D563",
    neutral: { 950: "#0D1220", 800: "#1A1A2E", 600: "#5B6478", 200: "#E6E9EF" },
    accent: "#FFD56A",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    border: "rgba(13,18,32,0.10)",
  },
  radius: { ui: 20 },
  shadow: {
    sm: "0 10px 28px rgba(0,0,0,0.06)",
    md: "0 16px 44px rgba(0,0,0,0.10)",
  },
  layout: { maxWidth: 1120 },
};

const BRAND = {
  name: "Save it",
  city: "강남",
  start: "1호 지역 론칭",
  promo: "입점 수수료 혜택",
  categories: "고기 · 야채 · 반찬 · 신선식품",
  phone: "01056367386",
  phoneDisplay: "010-5636-7386",
  googleFormView:
    "https://docs.google.com/forms/d/e/1FAIpQLSdxYX4iorhQGRW3J0gHF40KWQDuOUi0t6TywOvTaaRVIsDcHg/viewform",
};

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: EASE_OUT },
};

function cn(...xs: Array<string | undefined | false>) {
  return xs.filter(Boolean).join(" ");
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function svgDataUri(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const HERO_BG = svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00D563" stop-opacity="0.28" />
      <stop offset="45%" stop-color="#FFD56A" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.0" />
    </linearGradient>
    <radialGradient id="r1" cx="0.2" cy="0.1" r="0.6">
      <stop offset="0%" stop-color="#00D563" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="r2" cx="0.85" cy="0.2" r="0.5">
      <stop offset="0%" stop-color="#FFD56A" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="#F6FBF8" />
  <rect width="1600" height="900" fill="url(#g1)" />
  <circle cx="220" cy="160" r="220" fill="url(#r1)" />
  <circle cx="1300" cy="220" r="240" fill="url(#r2)" />
  <g opacity="0.25">
    <circle cx="420" cy="640" r="140" fill="#00D563" />
    <circle cx="1180" cy="620" r="160" fill="#FFD56A" />
  </g>
</svg>
`);
const STEP_IMAGES = [
  svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420">
  <rect width="640" height="420" fill="#F5F7FB" />
  <rect x="32" y="32" width="576" height="356" rx="28" fill="#FFFFFF" stroke="#DCE2EE" />
  <text x="64" y="120" font-size="36" font-family="Arial" fill="#0D1220">STEP 01</text>
  <rect x="64" y="160" width="260" height="18" rx="9" fill="#00D563" />
  <rect x="64" y="200" width="220" height="12" rx="6" fill="#D7DEE9" />
  <rect x="64" y="224" width="260" height="12" rx="6" fill="#D7DEE9" />
  <rect x="64" y="248" width="180" height="12" rx="6" fill="#D7DEE9" />
</svg>
`),
  svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420">
  <rect width="640" height="420" fill="#F5F7FB" />
  <rect x="32" y="32" width="576" height="356" rx="28" fill="#FFFFFF" stroke="#DCE2EE" />
  <text x="64" y="120" font-size="36" font-family="Arial" fill="#0D1220">STEP 02</text>
  <circle cx="520" cy="196" r="54" fill="#FFD56A" />
  <rect x="64" y="170" width="320" height="16" rx="8" fill="#00D563" />
  <rect x="64" y="210" width="260" height="12" rx="6" fill="#D7DEE9" />
  <rect x="64" y="234" width="220" height="12" rx="6" fill="#D7DEE9" />
</svg>
`),
  svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420">
  <rect width="640" height="420" fill="#F5F7FB" />
  <rect x="32" y="32" width="576" height="356" rx="28" fill="#FFFFFF" stroke="#DCE2EE" />
  <text x="64" y="120" font-size="36" font-family="Arial" fill="#0D1220">STEP 03</text>
  <rect x="64" y="170" width="420" height="16" rx="8" fill="#00D563" />
  <rect x="64" y="210" width="220" height="12" rx="6" fill="#D7DEE9" />
  <rect x="64" y="234" width="260" height="12" rx="6" fill="#D7DEE9" />
  <rect x="64" y="258" width="180" height="12" rx="6" fill="#D7DEE9" />
</svg>
`),
];

const QR_PLACEHOLDER = svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">
  <rect width="320" height="320" fill="#FFFFFF" stroke="#DCE2EE" />
  <rect x="24" y="24" width="80" height="80" fill="#0D1220" />
  <rect x="216" y="24" width="80" height="80" fill="#0D1220" />
  <rect x="24" y="216" width="80" height="80" fill="#0D1220" />
  <rect x="52" y="52" width="24" height="24" fill="#FFFFFF" />
  <rect x="244" y="52" width="24" height="24" fill="#FFFFFF" />
  <rect x="52" y="244" width="24" height="24" fill="#FFFFFF" />
  <g fill="#0D1220">
    <rect x="140" y="64" width="24" height="24" />
    <rect x="168" y="92" width="24" height="24" />
    <rect x="124" y="120" width="24" height="24" />
    <rect x="196" y="132" width="24" height="24" />
    <rect x="156" y="164" width="24" height="24" />
    <rect x="104" y="168" width="24" height="24" />
    <rect x="188" y="188" width="24" height="24" />
    <rect x="132" y="208" width="24" height="24" />
  </g>
  <text x="160" y="300" font-size="20" text-anchor="middle" font-family="Arial" fill="#5B6478">APP QR</text>
</svg>
`);

const PROOF_METRICS = [
  { label: "입점 대기", value: "000+", note: "(예정)" },
  { label: "누적 예약", value: "000,000+", note: "(예정)" },
  { label: "재방문율", value: "00%", note: "(예정)" },
];

const LOGO_CHIPS = ["프리미엄 베이커리", "정육점", "반찬가게", "샐러드", "디저트", "로컬마켓", "푸드마켓", "도시락"];

const TESTIMONIALS = [
  {
    name: "동네 정육점",
    role: "육류",
    quote: "마감 재고가 매출로 바뀌니, 폐기 걱정이 크게 줄었어요.",
  },
  {
    name: "프리미엄 베이커리",
    role: "베이커리",
    quote: "예약 판매 덕분에 당일 생산·당일 판매 원칙을 지킬 수 있었습니다.",
  },
  {
    name: "반찬 공방",
    role: "반찬",
    quote: "등록이 간단해서 직원 교육 부담이 확 줄었어요.",
  },
];
function Button({
  variant = "primary",
  className,
  onClick,
  type,
  children,
  href,
  target,
}: {
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children: React.ReactNode;
  href?: string;
  target?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 select-none whitespace-nowrap" +
    " h-12 px-[18px] rounded-[20px] text-[15px] font-[650]";

  const styles: Record<typeof variant, string> = {
    primary:
      "text-[#052013] bg-[var(--c-primary)] hover:opacity-95 active:opacity-90 shadow-[var(--sh-sm)]",
    outline:
      "bg-[var(--c-surface)] text-[var(--c-ink)] border border-[var(--c-border)] hover:bg-[rgba(13,18,32,0.03)]",
    ghost:
      "bg-transparent text-[var(--c-muted)] hover:text-[var(--c-ink)] hover:bg-[rgba(13,18,32,0.03)]",
  };

  const Comp: any = href ? "a" : "button";

  return (
    <Comp
      type={href ? undefined : type ?? "button"}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={cn(base, styles[variant], className)}
    >
      {children}
    </Comp>
  );
}

function Card({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("rounded-[20px] bg-[var(--c-surface)] border border-[var(--c-border)]", className)}
      style={{ boxShadow: "var(--sh-sm)", ...style }}
    >
      {children}
    </div>
  );
}

function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "green" | "amber";
}) {
  const cls =
    tone === "green"
      ? "bg-[rgba(0,213,99,0.14)] text-[var(--c-ink)]"
      : tone === "amber"
      ? "bg-[rgba(255,213,106,0.30)] text-[var(--c-ink)]"
      : "bg-[rgba(13,18,32,0.06)] text-[var(--c-ink)]";
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-[13px]", cls)}>
      {children}
    </span>
  );
}

export default function SaveItLandingTokenized() {
  const [submitted, setSubmitted] = useState(false);

  const openApply = () => {
    window.open(BRAND.googleFormView, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => scrollToId("apply"), 50);
  };

  const openCall = () => window.open(`tel:${BRAND.phone}`, "_self");

  const MAX = TOKENS.layout.maxWidth;

  const cssVars = useMemo(
    () =>
      ({
        "--c-primary": TOKENS.color.primary,
        "--c-ink": TOKENS.color.neutral[800],
        "--c-ink-strong": TOKENS.color.neutral[950],
        "--c-muted": TOKENS.color.neutral[600],
        "--c-bg": TOKENS.color.background,
        "--c-surface": TOKENS.color.surface,
        "--c-border": TOKENS.color.border,
        "--c-accent": TOKENS.color.accent,
        "--sh-sm": TOKENS.shadow.sm,
        "--sh-md": TOKENS.shadow.md,
      }) as React.CSSProperties,
    []
  );

  return (
    <div style={cssVars} className="relative min-h-screen bg-[var(--c-bg)] text-[var(--c-ink)]">
      {/* Fonts (2 only) + Korean wrapping fix */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;750&family=IBM+Plex+Sans+KR:wght@400;500;600;700&display=swap');
        html, body {
          font-family: ${TOKENS.typography.font.body}, ui-sans-serif, system-ui;
          font-size: ${TOKENS.typography.scale.body.size};
          line-height: ${TOKENS.typography.scale.body.lineHeight};
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        h1, h2, h3 { font-family: ${TOKENS.typography.font.display}, ${TOKENS.typography.font.body}, ui-sans-serif; }
        .float-slow { animation: floatY 10s ease-in-out infinite; }
        .float-medium { animation: floatY 7s ease-in-out infinite; }
        .float-fast { animation: floatY 5s ease-in-out infinite; }
        .spin-slow { animation: spin 28s linear infinite; }
        .glow-ring { box-shadow: 0 0 0 1px rgba(0,213,99,0.15), 0 18px 48px rgba(0,213,99,0.18); }
        .shine {
          background: linear-gradient(120deg, rgba(255,255,255,0.0), rgba(255,255,255,0.6), rgba(255,255,255,0.0));
          background-size: 200% 100%;
          animation: shine 6s ease-in-out infinite;
        }
        .marquee {
          display: inline-flex;
          gap: 16px;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        @keyframes floatY {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-180px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[rgba(0,213,99,0.18)] blur-3xl" />
        <div className="absolute right-[-140px] top-[120px] h-[320px] w-[320px] rounded-full bg-[rgba(255,213,106,0.22)] blur-3xl" />
        <div className="absolute left-[10%] top-[35%] h-[220px] w-[220px] rounded-full bg-[rgba(0,213,99,0.12)] blur-3xl" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-[var(--c-border)] bg-[rgba(250,250,250,0.78)] backdrop-blur">
        <div className="mx-auto flex items-center justify-between px-4 py-3" style={{ maxWidth: MAX }}>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)" }}>
              <Leaf className="h-5 w-5" style={{ color: "var(--c-primary)" }} />
            </div>
            <div className="leading-tight">
              <div className="text-[14px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                {BRAND.name}
              </div>
              <div className="text-[13px]" style={{ color: "var(--c-muted)" }}>
                소비기한 임박 상품 · 예약 판매
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[14px] md:flex" style={{ color: "var(--c-muted)" }}>
            <button className="hover:text-[var(--c-ink)]" onClick={() => scrollToId("process")}>
              이용 방법
            </button>
            <button className="hover:text-[var(--c-ink)]" onClick={() => scrollToId("proof")}>
              신뢰
            </button>
            <button className="hover:text-[var(--c-ink)]" onClick={() => scrollToId("benefits")}>
              입점 메리트
            </button>
            <button className="hover:text-[var(--c-ink)]" onClick={() => scrollToId("faq")}>
              FAQ
            </button>
            <Button variant="primary" onClick={() => scrollToId("apply")}>
              입점 신청 <ArrowRight className="h-4 w-4" />
            </Button>
          </nav>

          <div className="md:hidden">
            <Button variant="primary" onClick={() => scrollToId("apply")}>
              신청
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative overflow-hidden py-20"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.78)), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-[220px] w-[220px] rounded-full border border-[rgba(0,213,99,0.25)] opacity-60 spin-slow" />
          <div className="absolute right-10 top-6 h-[140px] w-[140px] rounded-full border border-[rgba(255,213,106,0.35)] opacity-70 spin-slow" />
          <div className="absolute right-[-80px] bottom-[-40px] h-[220px] w-[220px] rounded-full bg-[rgba(0,213,99,0.16)] blur-3xl" />
        </div>
        <div className="mx-auto grid gap-10 px-4 md:grid-cols-2 md:items-center" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone="green">
                <MapPin className="h-3.5 w-3.5" /> {BRAND.city} 지역 · {BRAND.start}
              </Pill>
              <Pill tone="amber">
                <Sparkles className="h-3.5 w-3.5" /> {BRAND.promo}
              </Pill>
            </div>

            <h1
              style={{
                fontSize: TOKENS.typography.scale.h1.size,
                lineHeight: TOKENS.typography.scale.h1.lineHeight,
                fontWeight: TOKENS.typography.scale.h1.weight as any,
                color: "var(--c-ink-strong)",
              }}
            >
              열심히 준비한 음식,
              <br className="hidden sm:block" />
              제 값 받고 파세요
            </h1>

            <div className="space-y-2 text-[17px]" style={{ color: "var(--c-ink-strong)" }}>
              <p>음식 재고, 폐기 걱정은 이제 그만</p>
              <p>매출도 높이고, 지구도 지킬 수 있어요!</p>
            </div>

            <p className="max-w-[46ch]" style={{ color: "var(--c-muted)" }}>
              Save it은 소비기한이 가까운 신선 식품을 저렴하게 판매할 수 있도록 돕는 판매중개
              플랫폼입니다. 고객은 예약하고, 매장은 준비만 하면 됩니다.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" onClick={() => scrollToId("apply")}>
                입점 신청하기 <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={openCall}>
                무료 상담 <Phone className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-[13px]" style={{ color: "var(--c-muted)" }}>
              취급 품목: {BRAND.categories}
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="relative">
            <div className="pointer-events-none absolute -left-10 -top-8 h-24 w-24 rounded-full bg-[rgba(255,213,106,0.35)] blur-2xl" />
            <div className="pointer-events-none absolute -right-12 top-16 h-24 w-24 rounded-full bg-[rgba(0,213,99,0.28)] blur-2xl" />
            <motion.div
              className="pointer-events-none absolute -top-10 right-6 rounded-[18px] border border-[var(--c-border)] bg-[rgba(255,255,255,0.9)] px-4 py-3 text-[12px] font-[700]"
              style={{ boxShadow: "var(--sh-sm)", color: "var(--c-ink-strong)" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              오늘 남은 재고, 바로 판매
            </motion.div>
            <motion.div
              className="pointer-events-none absolute -bottom-8 left-4 rounded-[18px] border border-[var(--c-border)] bg-[rgba(255,255,255,0.9)] px-4 py-3 text-[12px] font-[700]"
              style={{ boxShadow: "var(--sh-sm)", color: "var(--c-ink-strong)" }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              매출 + 환경, 동시에
            </motion.div>
            <Card className="relative overflow-hidden p-6" style={{ boxShadow: "var(--sh-md)" } as any}>
              <div className="pointer-events-none absolute inset-0 opacity-30 shine" />
              <div className="text-[18px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                입점 신청
              </div>
              <p className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                간단한 폼 작성으로 빠르게 상담을 진행합니다.
              </p>

              <div className="mt-5 grid gap-3">
                <Button variant="primary" onClick={openApply}>
                  입점 신청하고 안내받기 <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={openCall}>
                  무료 상담받기 <Phone className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-5 rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4" style={{ boxShadow: "none" }}>
                <div className="flex items-center gap-2 text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>
                  <BadgeCheck className="h-4 w-4" style={{ color: "var(--c-primary)" }} />
                  지역 운영 안내
                </div>
                <div className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                  {BRAND.city} 중심으로 먼저 시작합니다. 신청 후 1~2영업일 내 연락드립니다.
                </div>

                {submitted ? (
                  <div className="mt-3 rounded-[20px] p-3 text-[13px]" style={{ background: "rgba(0,213,99,0.14)", color: "var(--c-ink)" }}>
                    안내 링크가 열렸어요. 작성 후 제출해 주세요.
                  </div>
                ) : null}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20">
        <div className="mx-auto grid gap-8 px-4 md:grid-cols-[0.95fr_1.05fr] md:items-center" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp}>
            <h2
              style={{
                fontSize: TOKENS.typography.scale.h2.size,
                lineHeight: TOKENS.typography.scale.h2.lineHeight,
                fontWeight: TOKENS.typography.scale.h2.weight as any,
                color: "var(--c-ink-strong)",
              }}
            >
              앱에 재고 제품을 등록만하면, 영업준비 끝!
            </h2>
            <p className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
              복잡하지 않아요. 1분이면 충분합니다.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                { icon: <Package className="h-4 w-4" />, t: "1분 등록", d: "상품/가격/마감만 입력" },
                { icon: <MessageCircle className="h-4 w-4" />, t: "자동 알림", d: "고객에게 즉시 예약 안내" },
                { icon: <Clock className="h-4 w-4" />, t: "운영 간소화", d: "판매와 픽업만 집중" },
              ].map((x, i) => (
                <Card key={i} className="p-5 transition-transform duration-300 hover:-translate-y-1" style={{ boxShadow: "none" }}>
                  <div className="flex items-center gap-2 text-[14px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                    <span className="grid h-8 w-8 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)" }}>
                      {x.icon}
                    </span>
                    {x.t}
                  </div>
                  <div className="mt-1 text-[13px]" style={{ color: "var(--c-muted)" }}>
                    {x.d}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "등록",
                desc: "오늘의 재고를 입력",
              },
              {
                title: "예약",
                desc: "알림을 받은 고객이 예약",
              },
              {
                title: "판매",
                desc: "매장 결제로 간단 마감",
              },
            ].map((step, i) => (
              <motion.div key={step.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 * i }}>
                <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <img src={STEP_IMAGES[i]} alt={`Process step ${i + 1}`} className="h-[180px] w-full object-cover" />
                  <div className="p-4">
                    <div className="text-[15px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                      {`${i + 1}. ${step.title}`}
                    </div>
                    <div className="mt-1 text-[13px]" style={{ color: "var(--c-muted)" }}>
                      {step.desc}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="py-20">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                style={{
                  fontSize: TOKENS.typography.scale.h2.size,
                  lineHeight: TOKENS.typography.scale.h2.lineHeight,
                  fontWeight: TOKENS.typography.scale.h2.weight as any,
                  color: "var(--c-ink-strong)",
                }}
              >
                신뢰가 있어야, 입점이 쉬워집니다.
              </h2>
              <p className="mt-2 max-w-[52ch] text-[13px]" style={{ color: "var(--c-muted)" }}>
                매출과 환경을 동시에 잡는 운영 흐름을 수치와 후기 형태로 제시합니다. (수치/로고는 추후 업데이트)
              </p>
            </div>
            <Button variant="outline" onClick={() => scrollToId("apply")}>
              입점 신청하기 <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PROOF_METRICS.map((metric) => (
              <Card key={metric.label} className="relative overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-0 opacity-30 shine" />
                <div className="text-[13px] font-[650]" style={{ color: "var(--c-muted)" }}>
                  {metric.label}
                </div>
                <div className="mt-2 text-[26px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                  {metric.value}
                </div>
                <div className="text-[12px]" style={{ color: "var(--c-muted)" }}>
                  {metric.note}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-5">
            <div className="marquee">
              {[...LOGO_CHIPS, ...LOGO_CHIPS].map((chip, idx) => (
                <div key={`${chip}-${idx}`} className="rounded-full border border-[var(--c-border)] bg-white px-4 py-2 text-[12px] font-[650] text-[var(--c-ink)]">
                  {chip}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="p-6 transition-transform duration-300 hover:-translate-y-1" style={{ boxShadow: "none" }}>
                <div className="text-[14px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                  “{t.quote}”
                </div>
                <div className="mt-4 text-[12px]" style={{ color: "var(--c-muted)" }}>
                  {t.name} · {t.role}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-20" style={{ background: "rgba(13,18,32,0.03)" }}>
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-[1fr_1.15fr] md:items-start">
            <div>
              <h2
                style={{
                  fontSize: TOKENS.typography.scale.h2.size,
                  lineHeight: TOKENS.typography.scale.h2.lineHeight,
                  fontWeight: TOKENS.typography.scale.h2.weight as any,
                  color: "var(--c-ink-strong)",
                }}
              >
                다양한 자영업 경험들을 바탕으로
                <br className="hidden sm:block" />
                오직 업주 입장에서 편의성을 최대로 높였어요
              </h2>
              <p className="mt-3 max-w-[46ch]" style={{ color: "var(--c-muted)" }}>
                운영자의 고민을 줄이고, 매출과 회전율을 높이기 위한 기능만 담았습니다.
              </p>

              <div className="mt-6 grid gap-3">
                {["현금흐름 안정", "운영 간소화", "고객 확장"].map((t) => (
                  <Pill key={t} tone="green">
                    {t}
                  </Pill>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: <Wallet className="h-4 w-4" />,
                  t: "일일 정산",
                  d: "판매하신 금액을 모아두고 월단위로 정산하지 않아요. 판매 즉시 정산되어 현금 유동성 걱정이 없어요!",
                },
                {
                  icon: <MessageCircle className="h-4 w-4" />,
                  t: "판매 편의",
                  d: "소비자는 내 가게 모든 제품, 혹은 특정 제품에 즉시 알람을 받고 구매 예약을 신청할 수 있어요!",
                },
                {
                  icon: <CreditCard className="h-4 w-4" />,
                  t: "저렴한 비용",
                  d: "판매 금액에 대한 수수료 외, 가입비 / 입점료 / 홍보비 등 추가 지출이 없어요.",
                },
                {
                  icon: <Sparkles className="h-4 w-4" />,
                  t: "추가 고객",
                  d: "홍보는 자연스럽게, 신규 고객 전환과 외부 고객 유입을 돕습니다.",
                },
              ].map((x, i) => (
                <Card key={i} className="p-6 transition-transform duration-300 hover:-translate-y-1" style={{ boxShadow: "none" }}>
                  <div className="flex items-center gap-2 text-[15px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                    <span className="grid h-9 w-9 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)" }}>
                      {x.icon}
                    </span>
                    {x.t}
                  </div>
                  <div className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                    {x.d}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <h2
                style={{
                  fontSize: TOKENS.typography.scale.h2.size,
                  lineHeight: TOKENS.typography.scale.h2.lineHeight,
                  fontWeight: TOKENS.typography.scale.h2.weight as any,
                  color: "var(--c-ink-strong)",
                }}
              >
                자주 묻는 질문
              </h2>
              <p className="mt-3 max-w-[46ch]" style={{ color: "var(--c-muted)" }}>
                상세한 내용은 상담에서 안내드립니다.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                { q: "고객이 제 시간에 안오면?", a: "지연 도착 기준과 처리 방식은 정책에 따라 안내드립니다. (내용 입력)" },
                { q: "고객 예약 취소?", a: "취소 정책과 페널티는 사전 안내됩니다. (내용 입력)" },
                { q: "판매량 제한 있는지?", a: "업장 상황에 맞게 유동적으로 설정할 수 있어요. (내용 입력)" },
                { q: "이용금액?", a: "수수료 및 정산 방식은 안내자료로 제공됩니다. (내용 입력)" },
                { q: "더 궁금하면요? (카톡 채널 QR)", a: "카카오톡 채널로 문의하시면 빠르게 답변드려요. (QR 교체 예정)" },
              ].map((x, i) => (
                <Card key={i} className="p-5" style={{ boxShadow: "none" }}>
                  <div className="text-[15px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                    {x.q}
                  </div>
                  <div className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                    {x.a}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="py-20" style={{ background: "rgba(13,18,32,0.03)" }}>
        <div className="mx-auto grid gap-6 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-start" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp}>
            <h2
              style={{
                fontSize: TOKENS.typography.scale.h2.size,
                lineHeight: TOKENS.typography.scale.h2.lineHeight,
                fontWeight: TOKENS.typography.scale.h2.weight as any,
                color: "var(--c-ink-strong)",
              }}
            >
              1분만에 입점하기
            </h2>
            <p className="mt-3 max-w-[54ch]" style={{ color: "var(--c-muted)" }}>
              앱 설치 후 바로 신청 가능합니다. QR을 스캔해 주세요.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                { icon: <MapPin className="h-4 w-4" />, t: "지역", d: `${BRAND.city} 중심 (순차 확대)` },
                { icon: <Leaf className="h-4 w-4" />, t: "업종", d: BRAND.categories },
                { icon: <Sparkles className="h-4 w-4" />, t: "혜택", d: BRAND.promo },
              ].map((x, i) => (
                <div key={i} className="flex items-center gap-3 rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4" style={{ boxShadow: "none" }}>
                  <div className="grid h-10 w-10 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)", color: "var(--c-ink-strong)" }}>
                    {x.icon}
                  </div>
                  <div>
                    <div className="text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>
                      {x.t}
                    </div>
                    <div className="text-[13px]" style={{ color: "var(--c-muted)" }}>
                      {x.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <Card className="p-6" style={{ boxShadow: "var(--sh-md)" } as any}>
              <div className="text-[18px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                입점 신청 / 무료 상담
              </div>
              <p className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                아래 버튼 중 편한 방법으로 진행하세요.
              </p>

              <div className="mt-5 grid gap-3">
                <Button variant="primary" onClick={openApply}>
                  입점 신청하기 <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={openCall}>
                  무료 상담받기 <Phone className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4 glow-ring" style={{ boxShadow: "none" }}>
                  <div className="flex items-center gap-2 text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>
                    <Package className="h-4 w-4" style={{ color: "var(--c-primary)" }} />
                    앱다운 QR
                  </div>
                  <img src={QR_PLACEHOLDER} alt="App QR" className="mt-3 h-[180px] w-[180px]" />
                </div>

                <div className="rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4" style={{ boxShadow: "none" }}>
                  <div className="flex items-center gap-2 text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>
                    <MessageCircle className="h-4 w-4" style={{ color: "var(--c-primary)" }} />
                    컨택 포인트
                  </div>
                  <div className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                    메일: hello@saveit.co (수정 예정)
                  </div>
                  <div className="mt-1 text-[13px]" style={{ color: "var(--c-muted)" }}>
                    문자: {BRAND.phoneDisplay} (수정 예정)
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--c-border)] bg-[var(--c-surface)]">
        <div className="mx-auto px-4 py-12" style={{ maxWidth: MAX }}>
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)" }}>
                  <Leaf className="h-4 w-4" style={{ color: "var(--c-primary)" }} />
                </div>
                <div className="text-[14px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                  {BRAND.name}
                </div>
              </div>
              <div className="text-[13px]" style={{ color: "var(--c-muted)" }}>
                {BRAND.city} 지역 소비기한 임박 상품 예약 판매 플랫폼
              </div>
            </div>

            <div className="grid gap-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
              <div className="text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>
                안내
              </div>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("process")}>
                이용 방법
              </button>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("proof")}>
                신뢰
              </button>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("benefits")}>
                입점 메리트
              </button>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("faq")}>
                FAQ
              </button>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("apply")}>
                입점 신청
              </button>
            </div>

            <div className="grid gap-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
              <div className="text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>
                문의
              </div>
              <div>
                전화:{" "}
                <a className="font-[700] underline" href={`tel:${BRAND.phone}`}>
                  {BRAND.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-[13px]" style={{ color: "var(--c-muted)" }}>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky CTA (mobile) */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="pointer-events-auto mx-auto px-4 pb-4" style={{ maxWidth: MAX }}>
          <div className="rounded-[20px] border border-[var(--c-border)] bg-[rgba(255,255,255,0.92)] p-3 backdrop-blur" style={{ boxShadow: "var(--sh-md)" }}>
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="truncate text-[14px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                  {BRAND.promo} · {BRAND.city} 지역 입점
                </div>
                <div className="truncate text-[13px]" style={{ color: "var(--c-muted)" }}>
                  등록 1분 · 예약 판매 · 매장 결제
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Button variant="outline" onClick={openCall}>
                  상담
                </Button>
                <Button variant="primary" onClick={() => scrollToId("apply")}>
                  신청 <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 md:h-0" />
    </div>
  );
}
