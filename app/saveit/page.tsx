"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
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
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0E2A33" />
      <stop offset="100%" stop-color="#1C3C39" />
    </linearGradient>
    <radialGradient id="glow" cx="0.15" cy="0.2" r="0.9">
      <stop offset="0%" stop-color="#2AD27F" stop-opacity="0.28" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="900" height="900" fill="url(#glow)" />
  <rect x="70" y="70" width="760" height="760" rx="54" fill="url(#bg)" />

  <!-- shop counter -->
  <rect x="150" y="520" width="600" height="160" rx="18" fill="#102B30" />
  <rect x="170" y="540" width="560" height="120" rx="16" fill="#15353A" />
  <rect x="170" y="500" width="560" height="50" rx="14" fill="#234A48" />

  <!-- banchan trays -->
  <g>
    <rect x="210" y="510" width="110" height="60" rx="10" fill="#2C5C5A" />
    <rect x="330" y="510" width="110" height="60" rx="10" fill="#2C5C5A" />
    <rect x="450" y="510" width="110" height="60" rx="10" fill="#2C5C5A" />
    <rect x="570" y="510" width="110" height="60" rx="10" fill="#2C5C5A" />
    <circle cx="265" cy="540" r="16" fill="#FF7A59" />
    <circle cx="385" cy="540" r="16" fill="#F6C453" />
    <circle cx="505" cy="540" r="16" fill="#66D27A" />
    <circle cx="625" cy="540" r="16" fill="#FFB14A" />
  </g>

  <!-- customer -->
  <circle cx="560" cy="350" r="40" fill="#FFD7B5" />
  <rect x="520" y="390" width="90" height="130" rx="24" fill="#4A8B73" />
  <rect x="500" y="420" width="40" height="90" rx="18" fill="#3A6F5E" />
  <rect x="600" y="410" width="40" height="100" rx="18" fill="#3A6F5E" />
  <rect x="610" y="360" width="28" height="50" rx="8" fill="#2E3A46" />
  <rect x="615" y="368" width="18" height="32" rx="4" fill="#0E1626" />

  <!-- pickup bag -->
  <rect x="265" y="420" width="110" height="120" rx="16" fill="#1FAE63" />
  <rect x="285" y="400" width="70" height="28" rx="12" fill="#1A8B50" />
  <rect x="290" y="430" width="60" height="12" rx="6" fill="#0E1626" opacity="0.35" />

  <!-- counter staff -->
  <circle cx="320" cy="350" r="36" fill="#FFD7B5" />
  <rect x="290" y="382" width="90" height="120" rx="22" fill="#2F6C5C" />

  <!-- ground shadow -->
  <ellipse cx="450" cy="700" rx="260" ry="40" fill="#0A1D22" opacity="0.7" />

  <!-- decorative bubbles -->
  <g fill="#FFFFFF" opacity="0.15">
    <circle cx="200" cy="180" r="42" />
    <circle cx="680" cy="220" r="26" />
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
  const [rollingRevenue, setRollingRevenue] = useState(500_000);
  const [rollingAov, setRollingAov] = useState(11_000);
  const [rollingNewCust, setRollingNewCust] = useState(30);
  const revenueRef = useRef(500_000);
  const aovRef = useRef(11_000);
  const newCustRef = useRef(30);
  const lastTimeRef = useRef<number | null>(null);
  useEffect(() => {
    const revMin = 500_000;
    const revMax = 3_000_000;
    const revRange = revMax - revMin;
    const revSpeed = 640_000; // 20% slower than previous 800,000

    const aovMin = 11_000;
    const aovMax = 35_000;
    const aovRange = aovMax - aovMin;
    const aovSpeed = 4_000; // slower, small numbers

    const newMin = 30;
    const newMax = 90;
    const newRange = newMax - newMin;
    const newSpeed = 8; // slower, small numbers

    let raf = 0;
    const tick = (time: number) => {
      const last = lastTimeRef.current ?? time;
      const dt = (time - last) / 1000;
      lastTimeRef.current = time;
      let nextRev = revenueRef.current + revSpeed * dt;
      if (nextRev > revMax) {
        nextRev = revMin + ((nextRev - revMax) % revRange);
      }
      revenueRef.current = nextRev;
      setRollingRevenue(Math.floor(nextRev));

      let nextAov = aovRef.current + aovSpeed * dt;
      if (nextAov > aovMax) {
        nextAov = aovMin + ((nextAov - aovMax) % aovRange);
      }
      aovRef.current = nextAov;
      setRollingAov(Math.floor(nextAov));

      let nextNew = newCustRef.current + newSpeed * dt;
      if (nextNew > newMax) {
        nextNew = newMin + ((nextNew - newMax) % newRange);
      }
      newCustRef.current = nextNew;
      setRollingNewCust(Math.floor(nextNew));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
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
              {
                label: "추가 기대 수익",
                value: (
                  <span className="tabular-nums tracking-[0.04em]">
                    {rollingRevenue.toLocaleString("ko-KR")}원
                  </span>
                ),
              },
              {
                label: "객단가 상승",
                value: (
                  <span className="tabular-nums tracking-[0.04em]">
                    {rollingAov.toLocaleString("ko-KR")}원
                  </span>
                ),
              },
              {
                label: "신규 고객 유입",
                value: (
                  <span className="tabular-nums tracking-[0.04em]">
                    월 {rollingNewCust.toLocaleString("ko-KR")}명
                  </span>
                ),
              },
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
              {
                title: "평균 객단가 증가",
                desc: "마감 할인으로 방문한 고객 중 ",
                highlight: "13,000원+",
                tone: "green",
                icon: <Wallet className="h-5 w-5" />,
                prefix: "약 40%",
                suffix: "가 추가 구매를 진행하며, 평균 추가 구매액은 ",
              },
              {
                title: "ESG·지구 살리기",
                desc: "음식물 낭비를 줄이고 지역사회와 함께 지속가능한 소비에 동참하세요. 매장의 선한 활동이 ",
                highlight: "브랜드 신뢰로 연결",
                tone: "orange",
                icon: <Leaf className="h-5 w-5" />,
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
                  {"prefix" in x && x.prefix ? (
                    <span className={x.tone === "green" ? "text-[#16A34A] font-[700]" : "text-[#F97316] font-[700]"}>
                      {x.prefix}
                    </span>
                  ) : null}
                  {"suffix" in x && x.suffix ? <span>{x.suffix}</span> : null}
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
              <p className="mt-3 text-[14px] text-[var(--c-muted)]">
                매우 간단한 조작으로, 스마트폰 하나면 충분합니다.
              </p>
            </motion.div>
            <div />
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
                note: "이용료 3개월 무료 제공중",
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
                {"note" in x && x.note ? (
                  <div className="mt-2 text-[12px] font-[700] text-[var(--c-accent)]">{x.note}</div>
                ) : null}
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
              {
                q: "스마트폰 사용이 익숙하지 않아도 가능한가요?",
                a: "네. 상품 등록은 3단계로 매우 간단하며, 처음 한 번만 익히면 이후에는 몇 번 터치로 끝납니다.",
              },
              {
                q: "직접 배달해야 하나요?",
                a: "아니요. 고객이 매장에 방문해 픽업하는 방식이라 배달 인력이나 추가 업무가 필요 없습니다.",
              },
              {
                q: "매장 운영 중 전화 응대가 어려운데 괜찮나요?",
                a: "주문과 변경은 앱 알림으로 처리되며, 필요한 경우에만 확인하시면 됩니다.",
              },
              {
                q: "반찬류도 판매할 수 있나요?",
                a: "네. 반찬, 도시락, 간편식 등 마감 전 판매 가능한 품목이라면 모두 가능합니다.",
              },
              {
                q: "상품 사진이 꼭 있어야 하나요?",
                a: "사진이 있으면 주문 전환율이 높지만, 기본 사진 없이도 텍스트로 등록할 수 있습니다.",
              },
              {
                q: "가격은 제가 정하나요?",
                a: "네. 매장 상황에 맞춰 직접 할인율과 가격을 설정하실 수 있습니다.",
              },
              {
                q: "하루에 몇 개까지 등록해야 하나요?",
                a: "정해진 수량은 없습니다. 남는 재고가 있을 때만 원하는 만큼 등록하시면 됩니다.",
              },
              {
                q: "고객이 환불을 요청하면 어떻게 되나요?",
                a: "기본 정책에 따라 처리되며, 분쟁은 운영팀이 중재합니다.",
              },
              {
                q: "매장 노출은 어떻게 늘어나나요?",
                a: "활성 등록, 빠른 응대, 좋은 후기 등이 누적되면 노출 우선순위가 올라갑니다.",
              },
              {
                q: "직원들에게 맡겨도 되나요?",
                a: "네. 직원 계정으로 등록 및 처리할 수 있어 사장님이 직접 하지 않아도 됩니다.",
              },
              {
                q: "가입 및 시작 비용이 있나요?",
                a: "현재는 입점비, 이용료, 광고비, 수수료 없이 시작할 수 있습니다.",
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
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
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

              <Card className="border-transparent p-7 h-full flex flex-col" style={{ boxShadow: TOKENS.shadow.sm }}>
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
                <div className="mt-auto pt-4 text-center text-[13px] font-[700] text-[var(--c-muted)] max-w-[260px] mx-auto">
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
                href="/saveit/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[14px] font-[700] text-[var(--c-ink)] transition-colors hover:text-[var(--c-accent)]"
              >
                이용약관
              </a>
              <a
                href="/saveit/privacy"
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
