"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Leaf,
  MessageCircle,
  Package,
  Store,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

const TOKENS = {
  color: {
    primary: "#00D563",
    accent: "#FF8A3D",
    kakao: "#FEE500",
    ink: "#111827",
    muted: "#6B7280",
    border: "#E6EAF0",
    bg: "#FFFFFF",
    surface: "#F7F9FC",
    dark: "#0E1626",
  },
  layout: { maxWidth: 1120 },
  shadow: {
    sm: "0 8px 24px rgba(15, 23, 42, 0.08)",
    md: "0 22px 60px rgba(15, 23, 42, 0.12)",
  },
  radius: { lg: 28 },
};

const BRAND = {
  name: "세이브잇",
  phone: "01056367386",
};

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: EASE_OUT },
};

function cn(...xs: Array<string | undefined | false>) {
  return xs.filter(Boolean).join(" ");
}

function svgDataUri(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const HERO_IMAGE = svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0E2A33" />
      <stop offset="100%" stop-color="#1B3B3A" />
    </linearGradient>
    <radialGradient id="g2" cx="0.2" cy="0.2" r="0.9">
      <stop offset="0%" stop-color="#28D37E" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="900" height="900" fill="url(#g2)" />
  <rect x="80" y="90" width="740" height="720" rx="56" fill="url(#g1)" />
  <ellipse cx="450" cy="600" rx="260" ry="60" fill="#0A1D22" />
  <g>
    <ellipse cx="320" cy="500" rx="150" ry="90" fill="#6ED36A" />
    <ellipse cx="520" cy="490" rx="160" ry="100" fill="#F25050" />
    <ellipse cx="450" cy="430" rx="90" ry="60" fill="#FFC85A" />
  </g>
  <g fill="#FFFFFF" opacity="0.18">
    <circle cx="180" cy="170" r="48" />
    <circle cx="720" cy="210" r="28" />
  </g>
</svg>
`);

function Button({
  variant = "primary",
  className,
  onClick,
  href,
  children,
}: {
  variant?: "primary" | "outline" | "kakao";
  className?: string;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 select-none whitespace-nowrap rounded-full text-[15px] font-[700] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(15,23,42,0.12)] active:translate-y-0 active:shadow-[0_6px_14px_rgba(15,23,42,0.1)]";
  const styles: Record<typeof variant, string> = {
    primary: "h-12 px-6 text-white bg-[var(--c-primary)] hover:brightness-95",
    outline:
      "h-12 px-6 border border-[var(--c-border)] text-[var(--c-ink)] bg-white hover:bg-[rgba(15,23,42,0.03)]",
    kakao: "h-12 px-6 text-[#3C1E1E] bg-[var(--c-kakao)] hover:brightness-95",
  };
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cn(base, styles[variant], className)}
      >
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cn(base, styles[variant], className)}>
      {children}
    </button>
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
      className={cn("min-w-0 rounded-[24px] border border-[var(--c-border)] bg-white", className)}
      style={style}
    >
      {children}
    </div>
  );
}

export default function SaveItLanding() {
  const MAX = TOKENS.layout.maxWidth;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const cssVars = useMemo(
    () =>
      ({
        "--c-primary": TOKENS.color.primary,
        "--c-accent": TOKENS.color.accent,
        "--c-kakao": TOKENS.color.kakao,
        "--c-ink": TOKENS.color.ink,
        "--c-muted": TOKENS.color.muted,
        "--c-border": TOKENS.color.border,
        "--c-bg": TOKENS.color.bg,
        "--c-surface": TOKENS.color.surface,
        "--c-dark": TOKENS.color.dark,
      }) as React.CSSProperties,
    []
  );

  return (
    <div style={cssVars} className="relative min-h-screen overflow-x-hidden bg-[var(--c-bg)] text-[var(--c-ink)]">
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css');
        html, body {
          font-family: Pretendard Variable, Pretendard, ui-sans-serif, system-ui;
          word-break: keep-all;
          overflow-wrap: break-word;
          overflow-x: hidden;
        }
        h1, h2, h3 { font-family: Pretendard Variable, Pretendard, ui-sans-serif; }
        img { max-width: 100%; height: auto; display: block; }
      `}</style>

      {/* HERO */}
      <section id="hero" className="pt-16 pb-8 md:pt-20">
        <div className="mx-auto grid gap-10 px-4 md:grid-cols-[1.05fr_0.95fr] md:items-center" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E9FBEF] px-4 py-2 text-[13px] font-[600] text-[#1B7A45]">
              <span className="h-2 w-2 rounded-full bg-[var(--c-primary)]" />
              100% 무료로 이용해보세요 !
            </div>

            <h1 className="text-[clamp(34px,3.9vw,56px)] font-[800] leading-[1.12] text-[var(--c-ink)]">
              우리 매장의 재고 음식,
              <br />
              <span className="text-[var(--c-accent)]">새로운 수익</span>이 됩니다
            </h1>

            <p className="max-w-[48ch] text-[16px] text-[var(--c-muted)]">
              마감 전 신선한 상품을 지역 고객에게 합리적인 가격으로 제안하세요. 재고 부담은 줄고,
              매장 홍보 효과는 높아집니다.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdxYX4iorhQGRW3J0gHF40KWQDuOUi0t6TywOvTaaRVIsDcHg/viewform"
              >
                바로 신청하기 <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="kakao" href="https://open.kakao.com/o/gb2ZqRei">
                카카오 상담하기
              </Button>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <div className="rounded-[30px] bg-white p-4" style={{ boxShadow: TOKENS.shadow.md }}>
              <div className="overflow-hidden rounded-[26px] bg-[#0F2C32]">
                <img src={HERO_IMAGE} alt="hero" className="h-[340px] w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto px-4 pt-8" style={{ maxWidth: MAX }}>
          <div className="grid gap-4 rounded-[22px] border border-[var(--c-border)] bg-[var(--c-surface)] px-6 py-5 md:grid-cols-3">
            {[
              { label: "누적 파트너 수익", value: "45.2억+" },
              { label: "절감된 탄소 배출량", value: "12,400kg" },
              { label: "재방문 고객 비율", value: "78.5%" },
            ].map((x, i) => (
              <div key={x.label} className={cn("text-center", i < 2 && "md:border-r md:border-[var(--c-border)]")}>
                <div className="text-[12px] text-[var(--c-muted)]">{x.label}</div>
                <div className="mt-1 text-[22px] font-[800]">{x.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-16">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="text-center">
            <div className="text-[12px] font-[700] tracking-[0.25em] text-[var(--c-primary)]">BENEFITS</div>
            <h2 className="mt-3 text-[clamp(24px,3vw,36px)] font-[800]">마감/재고 할인 서비스, 왜 필요할까요?</h2>
            <p className="mt-3 text-[14px] text-[var(--c-muted)]">
              식재료 낭비를 줄이는 가치 있는 활동이 동시에 매장 운영의 효율성을 극대화합니다.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "재고 손실 최소화",
                desc: "정성껏 만든 음식을 버리지 마세요. 당일 판매되지 않은 신선한 상품을 지역 고객에게 빠르게 연결하여 폐기 비용을 ",
                highlight: "수익으로 전환",
                tone: "green",
                icon: <TrendingUp className="h-5 w-5" />,
              },
              {
                title: "신규 고객 확보",
                desc: "마감 할인으로 매장을 처음 방문한 고객이 단골이 됩니다. 오프라인 방문 유도를 통해 매장의 다른 상품까지 알릴 수 있는 ",
                highlight: "훌륭한 마케팅 수단",
                tone: "orange",
                icon: <Users className="h-5 w-5" />,
              },
            ].map((x) => (
              <Card key={x.title} className="border-transparent p-8" style={{ boxShadow: TOKENS.shadow.sm }}>
                <div
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-[18px]",
                    x.tone === "green" && "bg-[#E9FBEF] text-[#15A34A]",
                    x.tone === "orange" && "bg-[#FFF1E7] text-[#F97316]"
                  )}
                >
                  {x.icon}
                </div>
                <h3 className="mt-6 text-[20px] font-[800]">{x.title}</h3>
                <p className="mt-3 text-[14px] text-[var(--c-muted)]">
                  {x.desc}
                  <span className={x.tone === "green" ? "text-[#16A34A] font-[700]" : "text-[#F97316] font-[700]"}>
                    {x.highlight}
                  </span>
                  입니다.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="py-16">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <motion.div {...fadeUp}>
              <div className="text-[12px] font-[700] tracking-[0.25em] text-[var(--c-accent)]">HOW IT WORKS</div>
              <h2 className="mt-3 text-[clamp(26px,3.2vw,38px)] font-[800]">3단계로 끝나는 판매 프로세스</h2>
            </motion.div>
            <motion.div {...fadeUp} className="text-[14px] text-[var(--c-muted)]">
              매우 간단한 조작으로, 스마트폰 하나면 충분합니다.
            </motion.div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "상품 등록",
                desc: "매일 남는 수량을 간편하게 입력하세요. 제품과 가격, 수량만 설정하면 즉시 노출됩니다.",
                icon: <Package className="h-5 w-5" />,
              },
              {
                step: "02",
                title: "고객 주문",
                desc: "주변의 고객이 앱을 통해 주문하고 결제합니다. 사장님은 제품만 준비해 주세요.",
                icon: <Users className="h-5 w-5" />,
              },
              {
                step: "03",
                title: "픽업 완료",
                desc: "고객이 매장에 직접 방문하여 픽업합니다. 새로운 단골 고객을 만들어 보세요.",
                icon: <Store className="h-5 w-5" />,
              },
            ].map((x) => (
              <Card key={x.step} className="relative border-transparent p-7" style={{ boxShadow: TOKENS.shadow.sm }}>
                <div className="absolute left-6 top-4 text-[56px] font-[800] text-[#EFF2F7]">{x.step}</div>
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-[18px] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.08)]">
                  {x.icon}
                </div>
                <h3 className="relative z-10 mt-6 text-[18px] font-[800]">{x.title}</h3>
                <p className="relative z-10 mt-3 text-[14px] text-[var(--c-muted)]">{x.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OWNER FIRST */}
      <section id="owner" className="py-16">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp}>
            <div className="text-[12px] font-[700] tracking-[0.25em] text-[var(--c-primary)]">OWNER FIRST</div>
            <h2 className="mt-3 text-[clamp(24px,3vw,36px)] font-[800]">
              오직 사장님 관점에서,
              <br className="hidden sm:block" />
              사장님 편의를 최대한 높였습니다
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              {
                title: "일일 정산",
                desc: "판매 금액에 대한 정산 기간 없이, 당일 정산이 가능합니다.",
                icon: <Wallet className="h-5 w-5" />,
                tone: "#E9FBEF",
              },
              {
                title: "판매 편의",
                desc: "20초면 간단하게 상품 등록이 가능합니다.",
                icon: <Store className="h-5 w-5" />,
                tone: "#EEF6FF",
              },
              {
                title: "저렴한 비용",
                desc: "광고/입점/판매 수수료 없이, 소정의 플랫폼 이용료면 충분합니다.",
                icon: <TrendingUp className="h-5 w-5" />,
                tone: "#FFF4E8",
              },
              {
                title: "추가 고객",
                desc: "새로운 고객을 확보하여 지속적인 추가 매출을 높일 수 있습니다.",
                icon: <Users className="h-5 w-5" />,
                tone: "#F6EDFF",
              },
            ].map((x) => (
              <div key={x.title} className="rounded-[24px] border border-transparent p-6" style={{ background: x.tone }}>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/80">
                  {x.icon}
                </div>
                <div className="mt-5 text-[16px] font-[800]">{x.title}</div>
                <p className="mt-2 text-[13px] text-[var(--c-muted)]">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER STORY */}
      <section id="story" className="py-16">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <div className="rounded-[32px] bg-[linear-gradient(120deg,#0B1224,#0E2026,#0C2B33)] p-10 text-white md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <div className="text-[14px] font-[700] text-[var(--c-primary)]">Partner Story</div>
                <h3 className="mt-4 text-[clamp(26px,3vw,36px)] font-[800] leading-[1.25]">
                  "마감 시간마다 버려지던
                  <br />
                  반찬들이 이제 효자 상품이
                  <br />
                  되었어요. 환경도 지키고
                  <br />
                  수익도 나니 일석이조죠."
                </h3>
                <div className="mt-6 flex items-center gap-3 text-[14px] text-white/70">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                    <Leaf className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-[700] text-white">김내현 대표</div>
                    <div>OOO 반찬 전문점</div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { label: "월 평균 수익", value: "+80만 원", labelTone: "text-[var(--c-primary)]" },
                  { label: "폐기율 감소", value: "45%", labelTone: "text-[var(--c-accent)]" },
                ].map((x) => (
                  <div key={x.label} className="rounded-[22px] border border-white/10 bg-white/5 p-6">
                    <div className={cn("text-[13px]", x.labelTone)}>{x.label}</div>
                    <div className="mt-2 text-[24px] font-[800] text-white">{x.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <motion.div {...fadeUp} className="text-center">
            <div className="text-[12px] font-[700] tracking-[0.25em] text-[var(--c-primary)]">FAQ</div>
            <h2 className="mt-3 text-[clamp(24px,3vw,36px)] font-[800]">자주 묻는 질문</h2>
          </motion.div>
          <div className="mx-auto mt-10 grid max-w-[760px] gap-4">
            {[
              {
                q: "고객이 제 시간에 안 오면 어떡하나요?",
                a: "노쇼 발생 시 자동으로 재노출되며, 매장 설정에 따라 즉시 판매 전환이나 다음 시간대 예약을 받을 수 있어요.",
              },
              {
                q: "예약을 취소하면 어떻게 되나요?",
                a: "취소 알림이 즉시 전달되고, 동일 상품은 다음 고객에게 자동으로 노출됩니다.",
              },
              {
                q: "정산은 언제 되나요?",
                a: "주문 완료 기준으로 일일 정산되며, 영업일 기준 1~2일 내 입금됩니다.",
              },
            ].map((item, i) => (
              <Card key={item.q} className="border-transparent" style={{ boxShadow: TOKENS.shadow.sm }}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <div className="text-[15px] font-[700]">{item.q}</div>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-[var(--c-muted)] transition-transform duration-200",
                      openFaq === i && "rotate-180"
                    )}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[14px] text-[var(--c-muted)]">{item.a}</div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="py-16">
        <div className="mx-auto px-4" style={{ maxWidth: MAX }}>
          <div className="rounded-[32px] bg-[var(--c-surface)] p-8 md:p-12" style={{ boxShadow: TOKENS.shadow.sm }}>
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <div className="text-[12px] font-[700] tracking-[0.25em] text-[var(--c-primary)]">START NOW</div>
                <h2 className="mt-3 text-[clamp(26px,3.2vw,38px)] font-[800] leading-[1.2]">
                  지금 무료로 입점하고, 
                  <br />
                  추가 매출을 만드세요
                </h2>
                <div className="mt-6 grid gap-3 text-[14px] text-[var(--c-ink)]">
                  {[
                    "입점비 0원 · 이용료 0원",
                    "광고비 0원 · 수수료 0원",
                  ].map((x) => (
                    <div key={x} className="flex items-center gap-2 font-[700]">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--c-primary)] text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {x}
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-[20px] border border-[var(--c-border)] bg-white px-5 py-4">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-[14px] border border-[var(--c-border)] bg-[var(--c-surface)]">
                      <span className="text-[12px] text-[var(--c-muted)]">QR</span>
                    </div>
                    <div>
                      <div className="text-[14px] font-[700]">앱 다운로드</div>
                      <div className="text-[12px] text-[var(--c-muted)]">QR 코드를 스캔하여 파트너 앱을 설치하세요</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-transparent p-7" style={{ boxShadow: TOKENS.shadow.sm }}>
                <div className="text-center text-[16px] font-[800]">입점 신청하기</div>
                <div className="mt-6 grid gap-3">
                  <Button
                    variant="primary"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdxYX4iorhQGRW3J0gHF40KWQDuOUi0t6TywOvTaaRVIsDcHg/viewform"
                  >
                    지금 바로 입점 신청하기
                  </Button>
                  <Button variant="kakao" href="https://open.kakao.com/o/gb2ZqRei">
                    <MessageCircle className="h-4 w-4" />
                    카카오톡 상담하기
                  </Button>
                </div>
                <div className="mt-4 text-center text-[11px] text-[var(--c-muted)]">
                  신청 완료 후 담당자가 24시간 이내에 연락드립니다.
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--c-border)] bg-white">
        <div className="mx-auto px-4 py-12" style={{ maxWidth: MAX }}>
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div className="space-y-3 text-[13px] text-[var(--c-muted)]">
              <a
                href="/saveit"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[14px] font-[700] text-[var(--c-ink)] transition-colors hover:text-[var(--c-accent)]"
              >
                이용약관
              </a>
              <a
                href="/saveit"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[14px] font-[700] text-[var(--c-ink)] transition-colors hover:text-[var(--c-accent)]"
              >
                개인정보처리방침
              </a>
            </div>

            <div className="space-y-3 text-[13px] text-[var(--c-muted)]">
              <div>상호명: 비비(BB)컴퍼니</div>
              <div>대표자: 김민지</div>
              <div>사업자번호: 350-33-01601</div>
              <div>주소: 경기도 성남시 분당구 정자동 7, 두산위브파빌리온</div>
              <div>이메일: bb_career@naver.com</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
