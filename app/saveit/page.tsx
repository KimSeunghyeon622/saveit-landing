"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Clock,
  CreditCard,
  Leaf,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Shield,
  Sparkles,
  Store,
  Wallet,
} from "lucide-react";

/**
 * Save it – Landing Page (Next.js App Router)
 * Design constraints (token-driven)
 * 1) Fonts <= 2
 * 2) Colors only from palette
 * 3) Shadow <= 2 levels
 * 4) Section vertical padding: 64/80/96 only (py-16/20/24)
 * 5) Card/Button radius unified
 * 6) One message per section
 */

const TOKENS = {
  meta: {
    reference: [
      "https://saaslandingpage.com/solidroad/",
      "https://saaslandingpage.com/aave/",
    ],
    product: "마감 재고(신선식품)를 동네 예약 픽업으로 판매하는 플랫폼",
    target: "성남 지역 반찬·정육·야채 등 신선식품 점주",
    tone: ["친근", "신뢰", "간결"],
  },
  typography: {
    font: {
      display: "Manrope",
      body: "IBM Plex Sans KR",
    },
    scale: {
      h1: { size: "clamp(34px, 4.2vw, 56px)", lineHeight: 1.05, weight: 750 },
      h2: { size: "clamp(24px, 2.6vw, 34px)", lineHeight: 1.15, weight: 700 },
      h3: { size: "18px", lineHeight: 1.25, weight: 650 },
      body: { size: "17px", lineHeight: 1.65, weight: 450 },
      caption: { size: "13px", lineHeight: 1.5, weight: 450 },
    },
  },
  color: {
    primary: "#00D563",
    neutral: {
      950: "#0D1220",
      800: "#1A1A2E",
      600: "#5B6478",
      200: "#E6E9EF",
    },
    accent: "#FFD56A",
    success: "#00D563",
    warning: "#FFB020",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    border: "rgba(13,18,32,0.10)",
  },
  spacing: { base: 8, scale: [8, 12, 16, 24, 32, 48, 64] },
  radius: { ui: 20 },
  shadow: {
    sm: "0 10px 28px rgba(0,0,0,0.06)",
    md: "0 16px 44px rgba(0,0,0,0.10)",
  },
  layout: { maxWidth: 1120 },
  component: {
    button: { height: 48, radius: 20, paddingX: 18, fontWeight: 650 },
    card: { radius: 20, padding: 20, border: "1px solid rgba(13,18,32,0.10)" },
  },
} as const;

const BRAND = {
  name: "Save it",
  city: "성남",
  start: "2월 중순",
  promo: "첫 1달 수수료 0%",
  feeAfterPromo: "프로모션 종료 후 수수료 10%",
  categories: "반찬 · 정육 · 야채 등 신선식품",
  phone: "01056367386",
  phoneDisplay: "010-5636-7386",
  googleFormView:
    "https://docs.google.com/forms/d/e/1FAIpQLSdxYX4iorhQGRW3J0gHF40KWQDuOUi0t6TywOvTaaRVIsDcHg/viewform?usp=header",
};

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

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
      "text-[#052013]" +
      " bg-[var(--c-primary)] hover:opacity-95 active:opacity-90" +
      " shadow-[var(--sh-sm)]",
    outline:
      "bg-[var(--c-surface)] text-[var(--c-ink)]" +
      " border border-[var(--c-border)] hover:bg-[rgba(13,18,32,0.03)]",
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
      className={cn(
        "rounded-[20px] bg-[var(--c-surface)] border border-[var(--c-border)]",
        className
      )}
      style={{ boxShadow: "var(--sh-sm)", ...style }}
    >
      {children}
    </div>
  );
}


function Pill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "green" | "amber" }) {
  const cls =
    tone === "green"
      ? "bg-[rgba(0,213,99,0.14)] text-[var(--c-ink)]"
      : tone === "amber"
      ? "bg-[rgba(255,213,106,0.30)] text-[var(--c-ink)]"
      : "bg-[rgba(13,18,32,0.06)] text-[var(--c-ink)]";
  return <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-[13px]", cls)}>{children}</span>;
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
    <div style={cssVars} className="min-h-screen bg-[var(--c-bg)] text-[var(--c-ink)]">
      {/* Fonts (2 only) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;750&family=IBM+Plex+Sans+KR:wght@400;500;600;700&display=swap');
        html, body { font-family: ${TOKENS.typography.font.body}, ui-sans-serif, system-ui; font-size: ${TOKENS.typography.scale.body.size}; line-height: ${TOKENS.typography.scale.body.lineHeight}; }
        h1, h2, h3 { font-family: ${TOKENS.typography.font.display}, ${TOKENS.typography.font.body}, ui-sans-serif; }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-[var(--c-border)] bg-[rgba(250,250,250,0.78)] backdrop-blur">
        <div className="mx-auto flex items-center justify-between px-4 py-3" style={{ maxWidth: MAX }}>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)" }}>
              <Leaf className="h-5 w-5" style={{ color: "var(--c-primary)" }} />
            </div>
            <div className="leading-tight">
              <div className="text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>
                {BRAND.name}
              </div>
              <div className="text-[13px]" style={{ color: "var(--c-muted)" }}>
                마감 재고 · 예약 픽업
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[14px] md:flex" style={{ color: "var(--c-muted)" }}>
            <button className="hover:text-[var(--c-ink)]" onClick={() => scrollToId("how")}>운영 방식</button>
            <button className="hover:text-[var(--c-ink)]" onClick={() => scrollToId("proof")}>신뢰/안심</button>
            <button className="hover:text-[var(--c-ink)]" onClick={() => scrollToId("pricing")}>수수료</button>
            <button className="hover:text-[var(--c-ink)]" onClick={() => scrollToId("faq")}>FAQ</button>
            <Button variant="primary" onClick={() => scrollToId("apply")}>입점 신청 <ArrowRight className="h-4 w-4" /></Button>
          </nav>

          <div className="md:hidden">
            <Button variant="primary" onClick={() => scrollToId("apply")}>신청</Button>
          </div>
        </div>
      </header>

      {/* HERO (message: 가치 제안) */}
      <section className="py-20">
        <div className="mx-auto grid gap-10 px-4 md:grid-cols-2 md:items-center" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone="green"><MapPin className="h-3.5 w-3.5" /> {BRAND.city} 시범 운영 · {BRAND.start}</Pill>
              <Pill tone="amber"><Sparkles className="h-3.5 w-3.5" /> {BRAND.promo}</Pill>
            </div>

            <h1 style={{ fontSize: TOKENS.typography.scale.h1.size, lineHeight: TOKENS.typography.scale.h1.lineHeight, fontWeight: TOKENS.typography.scale.h1.weight as any }} className="tracking-tight">
              오늘 남은 신선식품,
              <span className="block">버리지 말고</span>
              <span className="block">
                <span className="rounded-[20px] px-2 py-1" style={{ background: "rgba(0,213,99,0.14)", color: "var(--c-ink-strong)" }}>
                  동네 예약 픽업
                </span>
                으로 판매하세요.
              </span>
            </h1>

            <p className="text-[17px]" style={{ color: "var(--c-muted)" }}>
              <b style={{ color: "var(--c-ink)" }}>현장결제</b> 그대로 운영하고, 마감 재고만 할인로 예약받아 픽업하게 해요.
              수수료는 <b style={{ color: "var(--c-ink)" }}>점주용 수수료 예치금(마일리지)</b>에서 판매 건마다 자동 처리돼
              <b style={{ color: "var(--c-ink)" }}>정산 기다림이 없어요</b>.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" onClick={() => scrollToId("apply")}>입점 신청하기 <ArrowRight className="h-4 w-4" /></Button>
              <Button variant="outline" onClick={openCall}><Phone className="h-4 w-4" /> 전화로 먼저 물어보기</Button>
              <Button variant="ghost" onClick={() => scrollToId("how")}>운영 방식 보기 <ChevronRight className="h-4 w-4" /></Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[13px]" style={{ color: "var(--c-muted)" }}>
              <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4" style={{ color: "var(--c-primary)" }} /> 점주 보호 기준</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" style={{ color: "var(--c-primary)" }} /> 등록은 1분, 걱정은 줄이기</span>
              <span className="inline-flex items-center gap-2"><Store className="h-4 w-4" style={{ color: "var(--c-primary)" }} /> {BRAND.categories}</span>
            </div>
          </motion.div>

          {/* Right: Example card */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <Card className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[13px]" style={{ color: "var(--c-muted)" }}>오늘 올릴 상품 예시</div>
                  <div className="mt-2 text-[18px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>집반찬 2종 묶음 (마감)</div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Pill tone="green">18:30–19:30 픽업</Pill>
                    <Pill tone="neutral">수량 6</Pill>
                    <Pill tone="neutral">현장결제</Pill>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] line-through" style={{ color: "var(--c-muted)" }}>12,000원</div>
                  <div className="mt-1 text-[28px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>7,900원</div>
                  <div className="mt-1 text-[13px]" style={{ color: "var(--c-muted)" }}>할인 예약 픽업</div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: <Package className="h-4 w-4" />, t: "폐기 줄이고 매출 만들기", d: "남는 재고를 판매로 전환" },
                  { icon: <MessageCircle className="h-4 w-4" />, t: "예약 알림으로 간단", d: "예약되면 확인 알림" },
                  { icon: <Wallet className="h-4 w-4" />, t: "정산 기다림 없음", d: "판매 건마다 자동 처리" },
                  { icon: <Shield className="h-4 w-4" />, t: "점주 보호 기준", d: "분쟁/클레임 기준 안내" },
                ].map((x, i) => (
                  <div key={i} className="rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4" style={{ boxShadow: "none" }}>
                    <div className="flex items-center gap-2">
                      <div className="grid h-9 w-9 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)", color: "var(--c-ink-strong)" }}>
                        {x.icon}
                      </div>
                      <div className="text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>{x.t}</div>
                    </div>
                    <div className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>{x.d}</div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF (message: 신뢰/시범운영 맥락) */}
      <section id="proof" className="py-16">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="grid gap-4 md:grid-cols-3">
            {[{
              icon: <BadgeCheck className="h-5 w-5" />,
              t: "성남 시범 운영 모집",
              d: "현장 피드백을 반영해 운영 기준을 빠르게 다듬어요.",
            }, {
              icon: <Sparkles className="h-5 w-5" />,
              t: "부담 없이 테스트",
              d: "첫 1달 수수료 0%로 가볍게 시작해요.",
            }, {
              icon: <Phone className="h-5 w-5" />,
              t: "전화로 바로 안내",
              d: "폼이 불편하면 전화로 먼저 물어보셔도 돼요.",
            }].map((c, i) => (
              <Card key={i} className="p-6">
                <div className="grid h-11 w-11 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)", color: "var(--c-ink-strong)" }}>
                  {c.icon}
                </div>
                <div className="mt-4" style={{ fontSize: TOKENS.typography.scale.h3.size, lineHeight: TOKENS.typography.scale.h3.lineHeight, fontWeight: TOKENS.typography.scale.h3.weight as any, color: "var(--c-ink-strong)" }}>
                  {c.t}
                </div>
                <p className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>{c.d}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEM (message: 기존 방법의 번거로움/손실) */}
      <section className="py-20" style={{ background: "rgba(13,18,32,0.03)" }}>
        <div className="mx-auto grid gap-6 px-4 md:grid-cols-2 md:items-center" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize: TOKENS.typography.scale.h2.size, lineHeight: TOKENS.typography.scale.h2.lineHeight, fontWeight: TOKENS.typography.scale.h2.weight as any }}>
              마감 재고는 ‘일’이 되고, 결국 ‘폐기’가 됩니다.
            </h2>
            <p className="mt-3 text-[17px]" style={{ color: "var(--c-muted)" }}>
              할인 판매를 하고 싶어도, 손님 연락·예약 관리·정산 걱정 때문에 꾸준히 하기 어렵죠.
            </p>
            <div className="mt-6 space-y-3">
              {["버릴수록 손해가 쌓임", "카톡/전화 예약은 관리가 번거로움", "정산/수수료 구조가 복잡하면 피로해짐"].map((t, i) => (
                <div key={i} className="flex items-start gap-3 rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4" style={{ boxShadow: "none" }}>
                  <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-[20px]" style={{ background: "rgba(255,213,106,0.30)", color: "var(--c-ink-strong)" }}>
                    <Check className="h-4 w-4" />
                  </div>
                  <div className="text-[15px]" style={{ color: "var(--c-ink)" }}>{t}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <Card className="p-6" style={{ boxShadow: "var(--sh-md)" } as any}>
              <div className="text-[13px]" style={{ color: "var(--c-muted)" }}>대안 대비</div>
              <div className="mt-2 text-[18px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>Save it은 ‘운영 부담’부터 줄여요</div>
              <div className="mt-5 grid gap-3">
                {[{
                  t: "카톡/전화",
                  d: "예약/노쇼/리마인드가 매번 수작업",
                }, {
                  t: "엑셀",
                  d: "정리되지만 ‘손님 유입/예약’이 없음",
                }, {
                  t: "복잡한 기존앱",
                  d: "정산/정책이 어렵거나, 운영이 무거움",
                }].map((x, i) => (
                  <div key={i} className="rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4" style={{ boxShadow: "none" }}>
                    <div className="text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>{x.t}</div>
                    <div className="mt-1 text-[13px]" style={{ color: "var(--c-muted)" }}>{x.d}</div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* HOW (message: 흐름을 한 번에 이해) */}
      <section id="how" className="py-20">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="flex items-end justify-between gap-6">
            <div>
              <h2 style={{ fontSize: TOKENS.typography.scale.h2.size, lineHeight: TOKENS.typography.scale.h2.lineHeight, fontWeight: TOKENS.typography.scale.h2.weight as any }}>
                운영 방식은 딱 4단계예요.
              </h2>
              <p className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>복잡한 기능 설명 대신, 실제 흐름만 보여드려요.</p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Pill tone="neutral">현장결제</Pill>
              <Pill tone="green">예약 픽업</Pill>
            </div>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              { n: "01", icon: <Package className="h-4 w-4" />, t: "오늘 상품 등록", d: "수량·가격·픽업시간만" },
              { n: "02", icon: <MessageCircle className="h-4 w-4" />, t: "예약 알림", d: "예약되면 확인 알림" },
              { n: "03", icon: <CreditCard className="h-4 w-4" />, t: "현장 픽업/결제", d: "평소 결제 방식 그대로" },
              { n: "04", icon: <Wallet className="h-4 w-4" />, t: "자동 처리", d: "판매 건마다 예치금 차감" },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 * i }}>
                <Card className="p-5" style={{ boxShadow: "var(--sh-sm)" }}>
                  <div className="flex items-center justify-between">
                    <div className="text-[13px] font-[650]" style={{ color: "var(--c-muted)" }}>{s.n}</div>
                    <div className="grid h-9 w-9 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)", color: "var(--c-ink-strong)" }}>
                      {s.icon}
                    </div>
                  </div>
                  <div className="mt-3 text-[15px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>{s.t}</div>
                  <div className="mt-1 text-[13px]" style={{ color: "var(--c-muted)" }}>{s.d}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES (message: 점주 핵심 이득 4개) */}
      <section className="py-20" style={{ background: "rgba(13,18,32,0.03)" }}>
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize: TOKENS.typography.scale.h2.size, lineHeight: TOKENS.typography.scale.h2.lineHeight, fontWeight: TOKENS.typography.scale.h2.weight as any }}>
              점주 입장에서 ‘편해지는 지점’만 남겼어요.
            </h2>
            <p className="mt-3 text-[17px]" style={{ color: "var(--c-muted)" }}>
              기능이 많아 보이는 서비스보다, 매일 운영되는 흐름이 중요하니까요.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }} className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { icon: <CreditCard className="h-5 w-5" />, t: "결제는 그대로", d: "현장결제로 매장 동선이 바뀌지 않아요." },
              { icon: <Clock className="h-5 w-5" />, t: "정산 기다림 없음", d: "예치금(마일리지)에서 판매 건마다 자동 처리." },
              { icon: <Shield className="h-5 w-5" />, t: "점주 보호 기준", d: "노쇼/취소/클레임은 운영 기준으로 안내합니다." },
              { icon: <Store className="h-5 w-5" />, t: "동네 신규 고객", d: "가까운 손님이 ‘예약’하고 ‘픽업’해요." },
            ].map((x, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)", color: "var(--c-ink-strong)" }}>
                    {x.icon}
                  </div>
                  <div>
                    <div className="text-[15px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>{x.t}</div>
                    <div className="mt-1 text-[13px]" style={{ color: "var(--c-muted)" }}>{x.d}</div>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* USE CASES (message: 업종별 적용) */}
      <section className="py-16">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="grid gap-6 md:grid-cols-3 md:items-start">
            <div className="md:col-span-1">
              <h2 style={{ fontSize: TOKENS.typography.scale.h2.size, lineHeight: TOKENS.typography.scale.h2.lineHeight, fontWeight: TOKENS.typography.scale.h2.weight as any }}>
                업종별로 ‘남는 품목’이 달라도 괜찮아요.
              </h2>
              <p className="mt-3 text-[17px]" style={{ color: "var(--c-muted)" }}>
                오늘 남는 품목을 묶음/단품으로 올리고, 픽업 시간만 정하면 됩니다.
              </p>
            </div>

            <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
              {[
                { t: "반찬", d: "세트/2~3종 묶음으로 마감 정리" },
                { t: "정육", d: "당일 손질분/특가로 빠르게 회전" },
                { t: "야채/청과", d: "흠집/소포장으로 가성비 구성" },
                { t: "기타 신선", d: "당일 생산/당일 소진 중심" },
              ].map((x, i) => (
                <Card key={i} className="p-6">
                  <div className="text-[15px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>{x.t}</div>
                  <div className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>{x.d}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING/CTA (message: 조건을 투명하게) */}
      <section id="pricing" className="py-20" style={{ background: "rgba(13,18,32,0.03)" }}>
        <div className="mx-auto grid gap-6 px-4 md:grid-cols-[1.15fr_0.85fr] md:items-start" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize: TOKENS.typography.scale.h2.size, lineHeight: TOKENS.typography.scale.h2.lineHeight, fontWeight: TOKENS.typography.scale.h2.weight as any }}>
              결제는 현장 그대로, 수수료는 자동 처리.
            </h2>
            <p className="mt-3 text-[17px]" style={{ color: "var(--c-muted)" }}>
              점주님이 예치금(마일리지)을 보유해두면 판매 건마다 수수료가 자동 처리돼요.
              복잡한 정산 주기를 기다릴 필요가 없습니다.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                { icon: <CreditCard className="h-4 w-4" />, t: "현장결제", d: "평소 방식 그대로" },
                { icon: <Wallet className="h-4 w-4" />, t: "자동 처리", d: "판매 건마다 차감" },
                { icon: <Clock className="h-4 w-4" />, t: "정산 없음", d: "기다림 없이 깔끔" },
              ].map((x, i) => (
                <div key={i} className="rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4" style={{ boxShadow: "none" }}>
                  <div className="grid h-9 w-9 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)", color: "var(--c-ink-strong)" }}>{x.icon}</div>
                  <div className="mt-2 text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>{x.t}</div>
                  <div className="mt-1 text-[13px]" style={{ color: "var(--c-muted)" }}>{x.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3 text-[14px]" style={{ boxShadow: "none" }}>
              <Sparkles className="h-4 w-4" style={{ color: "var(--c-accent)" }} />
              <span>
                <b style={{ color: "var(--c-ink-strong)" }}>{BRAND.promo}</b> · {BRAND.feeAfterPromo}
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" onClick={() => scrollToId("apply")}>입점 신청하기 <ArrowRight className="h-4 w-4" /></Button>
              <Button variant="outline" onClick={openCall}><Phone className="h-4 w-4" /> 전화 문의</Button>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <Card className="p-6" style={{ boxShadow: "var(--sh-md)" } as any}>
              <div className="text-[18px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>예치금 차감 예시</div>
              <div className="mt-4 rounded-[20px] p-4" style={{ background: "rgba(0,213,99,0.14)" }}>
                <div className="text-[13px]" style={{ color: "var(--c-muted)" }}>판매 1건 발생</div>
                <div className="mt-1 text-[15px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>
                  판매금액 10,000원 → 수수료 10% 만큼 예치금(마일리지) 차감
                </div>
                <div className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                  * 프로모션 종료 후 수수료율은 10%입니다.
                </div>
              </div>

              <div className="mt-4 rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4" style={{ boxShadow: "none" }}>
                <div className="flex items-center gap-2 text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>
                  <Shield className="h-4 w-4" style={{ color: "var(--c-primary)" }} />
                  점주 보호 기준
                </div>
                <div className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                  노쇼/취소/클레임은 운영 기준에 따라 처리하며, 기본 방향은 점주 보호입니다.
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ (message: 불안을 빠르게 해소) */}
      <section id="faq" className="py-20">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize: TOKENS.typography.scale.h2.size, lineHeight: TOKENS.typography.scale.h2.lineHeight, fontWeight: TOKENS.typography.scale.h2.weight as any }}>
              사장님들이 가장 많이 물어보는 것
            </h2>
            <p className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>불안한 지점은 미리 투명하게 안내드릴게요.</p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }} className="mt-6 grid gap-4">
            {[{
              q: "손님이 안 오면요? (노쇼)",
              a: "노쇼를 줄이기 위한 운영 기준을 적용하고, 이슈 발생 시 점주 보호 방향으로 대응합니다.",
            }, {
              q: "환불/취소 때문에 골치 아플까봐 걱정돼요.",
              a: "취소/환불 기준을 미리 안내하고, 분쟁이 생기면 운영팀이 기준에 따라 처리합니다.",
            }, {
              q: "현장결제면 계산이 복잡해지지 않나요?",
              a: "평소 결제 방식 그대로 운영하시면 됩니다. Save it은 예약/픽업 관리에 집중해요.",
            }, {
              q: "리뷰가 부담돼요.",
              a: "리뷰에는 답글로 소통할 수 있어요. 문제 상황은 운영 기준에 따라 안내드립니다.",
            }, {
              q: "앱이 꼭 필요한가요?",
              a: "앱은 개발 중이며, 시범 운영 기간에도 불편 없이 이용할 수 있도록 안내드려요.",
            }].map((it, idx) => (
              <details key={idx} className="group rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-5" style={{ boxShadow: "none" }}>
                <summary className="cursor-pointer list-none select-none">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-[15px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>{it.q}</div>
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" style={{ color: "var(--c-muted)" }} />
                  </div>
                </summary>
                <div className="mt-3 text-[13px]" style={{ color: "var(--c-muted)" }}>{it.a}</div>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* APPLY (message: 다음 액션 단순화) */}
      <section id="apply" className="py-24">
        <div className="mx-auto grid gap-6 px-4 md:grid-cols-[1fr_1fr] md:items-start" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize: TOKENS.typography.scale.h2.size, lineHeight: TOKENS.typography.scale.h2.lineHeight, fontWeight: TOKENS.typography.scale.h2.weight as any }}>
              {BRAND.city} 시범 운영 매장 신청하기
            </h2>
            <p className="mt-3 text-[17px]" style={{ color: "var(--c-muted)" }}>
              가장 빠른 방법은 구글폼 신청이에요. 폼이 불편하면 전화로도 안내드릴게요.
            </p>

            <div className="mt-6 grid gap-3">
              {[{
                icon: <MapPin className="h-4 w-4" />,
                t: "지역",
                d: `${BRAND.city} 중심 (시범 운영)`,
              }, {
                icon: <Leaf className="h-4 w-4" />,
                t: "업종",
                d: BRAND.categories,
              }, {
                icon: <Sparkles className="h-4 w-4" />,
                t: "프로모션",
                d: BRAND.promo,
              }].map((x, i) => (
                <div key={i} className="flex items-center gap-3 rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4" style={{ boxShadow: "none" }}>
                  <div className="grid h-10 w-10 place-items-center rounded-[20px]" style={{ background: "rgba(0,213,99,0.14)", color: "var(--c-ink-strong)" }}>
                    {x.icon}
                  </div>
                  <div>
                    <div className="text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>{x.t}</div>
                    <div className="text-[13px]" style={{ color: "var(--c-muted)" }}>{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <Card className="p-6" style={{ boxShadow: "var(--sh-md)" } as any}>
              <div className="text-[18px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>입점 신청</div>
              <p className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                ‘신청하기’를 누르면 구글폼이 새 창으로 열립니다.
              </p>

              <div className="mt-5 grid gap-3">
                <Button variant="primary" onClick={openApply}>
                  신청하고 안내받기 <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={openCall}>
                  전화로 문의하기 <Phone className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-5 rounded-[20px] border border-[var(--c-border)] bg-[var(--c-surface)] p-4" style={{ boxShadow: "none" }}>
                <div className="flex items-center gap-2 text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>
                  <MessageCircle className="h-4 w-4" style={{ color: "var(--c-primary)" }} />
                  문의
                </div>
                <div className="mt-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
                  전화: <a className="font-[700] underline" href={`tel:${BRAND.phone}`}>{BRAND.phoneDisplay}</a>
                </div>
                {submitted ? (
                  <div className="mt-3 rounded-[20px] p-3 text-[13px]" style={{ background: "rgba(0,213,99,0.14)", color: "var(--c-ink)" }}>
                    구글폼 창이 열렸어요. 작성 후 제출해 주세요.
                  </div>
                ) : null}
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
                <div className="text-[14px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>{BRAND.name}</div>
              </div>
              <div className="text-[13px]" style={{ color: "var(--c-muted)" }}>{BRAND.city} 시범 운영 · 마감 재고를 동네 예약 픽업으로</div>
            </div>

            <div className="grid gap-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
              <div className="text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>안내</div>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("how")}>운영 방식</button>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("proof")}>신뢰/안심</button>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("pricing")}>수수료</button>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("faq")}>FAQ</button>
              <button className="text-left hover:text-[var(--c-ink)]" onClick={() => scrollToId("apply")}>입점 신청</button>
            </div>

            <div className="grid gap-2 text-[13px]" style={{ color: "var(--c-muted)" }}>
              <div className="text-[14px] font-[700]" style={{ color: "var(--c-ink-strong)" }}>문의</div>
              <div>
                전화: <a className="font-[700] underline" href={`tel:${BRAND.phone}`}>{BRAND.phoneDisplay}</a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-[13px]" style={{ color: "var(--c-muted)" }}>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
        </div>
      </footer>

      {/* Sticky CTA (mobile) */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="pointer-events-auto mx-auto px-4 pb-4" style={{ maxWidth: MAX }}>
          <div className="rounded-[20px] border border-[var(--c-border)] bg-[rgba(255,255,255,0.92)] p-3 backdrop-blur" style={{ boxShadow: "var(--sh-md)" }}>
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="truncate text-[14px] font-[750]" style={{ color: "var(--c-ink-strong)" }}>{BRAND.promo} · {BRAND.city} 시범 운영</div>
                <div className="truncate text-[13px]" style={{ color: "var(--c-muted)" }}>현장결제 · 정산 없음 · 점주 보호 기준</div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Button variant="outline" onClick={openCall}>전화</Button>
                <Button variant="primary" onClick={() => scrollToId("apply")}>신청 <ArrowRight className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 md:h-0" />
    </div>
  );
}
