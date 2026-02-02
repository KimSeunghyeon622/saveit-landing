"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock,
  CreditCard,
  Leaf,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Shield,
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
      `}</style>

      {/* Background accents */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(0,213,99,0.18), rgba(255,255,255,0))" }} />
      <div className="pointer-events-none absolute right-[-120px] top-[280px] -z-10 h-[380px] w-[380px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,213,106,0.22), rgba(255,255,255,0))" }} />

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
            <button className="hover:text-[var(--c-ink)]" onClick={() => scrollToId("how")}>
              운영 방식
            </button>
            <button className="hover:text-[var(--c-ink)]" onClick={() => scrollToId("proof")}>
              신뢰 요소
            </button>
            <button className="hover:text-[var(--c-ink)]" onClick={() => scrollToId("pricing")}>
              가격 정책
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
      <section className="py-20">
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
              소비기한 임박 상품,
              <br className="hidden sm:block" />
              버리지 말고 예약 판매로 매출을 만드세요.
            </h1>

            <p className="max-w-[46ch]" style={{ color: "var(--c-muted)" }}>
              Save it은 소비기한이 가까운 신선 식품을 저렴하게 판매할 수 있도록 돕는 판매중개
              플랫폼입니다. 고객은 예약하고, 매장은 준비만 하면 됩니다.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: <Package className="h-4 w-4" />, t: "등록 1분", d: "상품/가격 입력만" },
                { icon: <MessageCircle className="h-4 w-4" />, t: "예약 알림", d: "고객 자동 안내" },
                { icon: <Clock className="h-4 w-4" />, t: "판매만 집중", d: "정산은 자동 처리" },
              ].map((x, i) => (
                <Card key={i} className="p-5" style={{ boxShadow: "none" }}>
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
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <Card className="p-6" style={{ boxShadow: "var(--sh-md)" } as any}>
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

      {/* HOW (3 steps) */}
      <section id="how" className="py-20">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="flex items-end justify-between gap-6">
            <div>
              <h2
                style={{
                  fontSize: TOKENS.typography.scale.h2.size,
                  lineHeight: TOKENS.typography.scale.h2.lineHeight,
                  fontWeight: TOKENS.typography.scale.h2.weight as any,
                  color: "var(--c-ink-strong)",
                }}
              >
                운영은 단 3단계입니다.
              </h2>
              <p className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                복잡한 기능 없이 필요한 것만 담았습니다.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Pill tone="neutral">매장 결제</Pill>
              <Pill tone="green">예약 판매</Pill>
            </div>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { n: "01", icon: <Package className="h-4 w-4" />, t: "오늘 상품 등록", d: "수량/가격/마감만 입력" },
              { n: "02", icon: <MessageCircle className="h-4 w-4" />, t: "예약 알림 확인", d: "예약 발생 시 자동 안내" },
              { n: "03", icon: <CreditCard className="h-4 w-4" />, t: "판매 후 매장 결제", d: "정산·수수료는 자동 처리" },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 * i }}>
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-[13px] font-[650]" style={{ color: "var(--c-muted)" }}>
                      {s.n}
                    </div>
                    <div className="grid h-9 w-9 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)", color: "var(--c-ink-strong)" }}>
                      {s.icon}
                    </div>
                  </div>
                  <div className="mt-3 text-[15px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                    {s.t}
                  </div>
                  <div className="mt-1 text-[13px]" style={{ color: "var(--c-muted)" }}>
                    {s.d}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / SAFETY */}
      <section id="proof" className="py-20" style={{ background: "rgba(13,18,32,0.03)" }}>
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div>
              <h2
                style={{
                  fontSize: TOKENS.typography.scale.h2.size,
                  lineHeight: TOKENS.typography.scale.h2.lineHeight,
                  fontWeight: TOKENS.typography.scale.h2.weight as any,
                  color: "var(--c-ink-strong)",
                }}
              >
                신뢰 요소로 불안함을 줄였습니다.
              </h2>
              <p className="mt-3 max-w-[46ch]" style={{ color: "var(--c-muted)" }}>
                운영 부담을 줄이고, 가격/정산/고객 대응을 더 투명하게 관리합니다.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { icon: <Shield className="h-4 w-4" />, t: "정산 스트레스 최소화", d: "정산/수수료 정책은 투명하게 공개 (내용 입력)" },
                { icon: <Wallet className="h-4 w-4" />, t: "수수료 자동 처리", d: "판매 금액 기준 자동 정산 (내용 입력)" },
                { icon: <Check className="h-4 w-4" />, t: "운영은 간단하게", d: "등록-예약-판매 3단계, 불필요한 기능 제거" },
              ].map((x, i) => (
                <Card key={i} className="p-6" style={{ boxShadow: "none" }}>
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

      {/* PRICING */}
      <section id="pricing" className="py-20">
        <div className="mx-auto grid gap-6 px-4 md:grid-cols-[1.15fr_0.85fr] md:items-start" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp}>
            <h2
              style={{
                fontSize: TOKENS.typography.scale.h2.size,
                lineHeight: TOKENS.typography.scale.h2.lineHeight,
                fontWeight: TOKENS.typography.scale.h2.weight as any,
                color: "var(--c-ink-strong)",
              }}
            >
              가격 정책은 투명하게 안내합니다.
            </h2>
            <p className="mt-3 max-w-[54ch]" style={{ color: "var(--c-muted)" }}>
              매장 결제 방식을 유지하고, 수수료는 자동으로 정산됩니다. (정책 내용 입력)
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                { icon: <CreditCard className="h-4 w-4" />, t: "매장 결제", d: "기존 결제 방식 유지" },
                { icon: <Wallet className="h-4 w-4" />, t: "자동 정산", d: "판매 기준 자동 처리" },
                { icon: <BadgeCheck className="h-4 w-4" />, t: "입점 혜택", d: BRAND.promo },
              ].map((x, i) => (
                <Card key={i} className="p-5" style={{ boxShadow: "none" }}>
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

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <Card className="p-6" style={{ boxShadow: "var(--sh-md)" } as any}>
              <div className="text-[13px]" style={{ color: "var(--c-muted)" }}>
                한줄 요약
              </div>
              <div className="mt-2 text-[18px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>
                남는 재고를 매출로 바꾸는 가장 쉬운 방법
              </div>
              <div className="mt-5 grid gap-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                {[
                  "등록은 1분, 운영은 간단하게",
                  "고객은 예약, 매장은 준비만",
                  "지역 운영: 신청 후 안내",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4" style={{ color: "var(--c-primary)" }} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                <Button variant="primary" onClick={() => scrollToId("apply")}>
                  입점 신청하기 <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={openCall}>
                  무료 상담받기 <Phone className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20" style={{ background: "rgba(13,18,32,0.03)" }}>
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
                { q: "신청하면 바로 입점 가능한가요?", a: "지역/업종 기준을 확인한 뒤 순차 안내됩니다. (내용 입력)" },
                { q: "결제는 어디에서 진행되나요?", a: "고객은 매장에서 결제합니다. 기존 방식 그대로 운영됩니다." },
                { q: "운영이 복잡하지는 않나요?", a: "등록-예약 확인-판매 3단계로 간단합니다." },
                { q: "수수료는 어떻게 정산되나요?", a: "판매 기준 자동 정산됩니다. (정책 내용 입력)" },
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
      <section id="apply" className="py-20">
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
              {BRAND.city} 지역 입점 신청하기
            </h2>
            <p className="mt-3 max-w-[54ch]" style={{ color: "var(--c-muted)" }}>
              가장 빠른 방법은 신청폼 작성입니다. 필요하시면 무료 상담으로도 안내드립니다.
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

              <div className="mt-5 rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4" style={{ boxShadow: "none" }}>
                <div className="flex items-center gap-2 text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>
                  <MessageCircle className="h-4 w-4" style={{ color: "var(--c-primary)" }} />
                  연락처
                </div>
                <div className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                  전화:{" "}
                  <a className="font-[700] underline" href={`tel:${BRAND.phone}`}>
                    {BRAND.phoneDisplay}
                  </a>
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
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("how")}>
                운영 방식
              </button>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("proof")}>
                신뢰 요소
              </button>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("pricing")}>
                가격 정책
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
