import type { Metadata } from "next";

const summaryCards = [
  {
    title: "적용 서비스",
    body: "오늘득템 앱 및 웹 서비스",
  },
  {
    title: "운영 주체",
    body: "비비(BB)컴퍼니",
  },
  {
    title: "문의",
    body: "bb_career@naver.com",
  },
  {
    title: "시행일",
    body: "2026-02-07",
  },
];

const collectionItems = [
  "고객(필수): 휴대전화번호, 닉네임, 예약 및 이용 내역, 고객문의 내용",
  "고객(자동수집): 기기 정보(모델, OS), 접속기록, 서비스 이용기록, 접속 IP, 쿠키 또는 광고식별자(선택 동의 또는 설정에 따라)",
  "파트너(필수): 상호, 사업자등록번호, 대표자명, 담당자명, 연락처, 이메일, 정산 및 세무에 필요한 정보",
  "매장정보: 주소, 영업시간, 업종 또는 카테고리, 픽업 안내, 매장 사진(선택)",
  "위치정보(선택): 내 주변 매장 및 상품 찾기 기능 사용 시 검색 시점의 단말기 위치",
];

const retentionItems = [
  "계약 또는 청약철회 등에 관한 기록: 5년",
  "대금결제 및 재화 등의 공급에 관한 기록: 5년",
  "소비자의 불만 또는 분쟁처리에 관한 기록: 3년",
  "표시 및 광고에 관한 기록: 6개월",
  "접속기록(IP 등): 3개월",
  "파트너 계약 및 입점 관련 서류: 계약 종료 후 1년",
  "위치정보 이용 및 제공사실 확인자료: 6개월 이상",
];

const securityItems = [
  "접근권한 최소화 및 계정관리(권한 분리, MFA 적용 등)",
  "개인정보 전송 및 저장 암호화(가능한 범위)",
  "접속기록 보관 및 위변조 방지",
  "취약점 점검 및 보안 업데이트",
  "개인정보 처리자 교육 및 내부관리계획 수립",
];

const sections = [
  {
    title: "1. 개인정보의 처리 목적",
    paragraphs: [
      "비비(BB)컴퍼니는 오늘득템 서비스 제공을 위해 필요한 최소한의 개인정보를 처리합니다.",
      "처리 목적은 회원가입 및 본인 확인, 상품 및 매장 정보 제공, 예약(픽업) 중개, 알림 제공, 고객지원, 파트너 입점 심사 및 계약 관리, 구독 및 크레딧 관리, 세무 및 회계 처리, 부정이용 방지, 서비스 안정성 확보, 보안 로그 분석, 분쟁 대응 및 법령상 의무 이행입니다.",
    ],
  },
  {
    title: "2. 처리하는 개인정보 항목",
    paragraphs: [
      "서비스 유형에 따라 아래와 같은 정보를 수집 및 이용합니다.",
    ],
    list: collectionItems,
  },
  {
    title: "3. 개인정보의 처리 및 보유 기간",
    paragraphs: [
      "회사는 원칙적으로 개인정보 처리 목적 달성 시 지체 없이 파기합니다. 다만 관련 법령에 따라 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관합니다.",
    ],
    list: retentionItems,
  },
  {
    title: "4. 개인정보의 제3자 제공",
    paragraphs: [
      "회사는 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 다만 다음의 경우에는 예외로 합니다.",
      "고객의 예약 이행을 위해 파트너에게 휴대전화번호와 예약 내역(상품, 수량, 픽업시간 등)을 제공할 수 있으며, 법령에 근거한 요청이나 수사기관의 적법한 절차에 따른 요청이 있는 경우 제공할 수 있습니다.",
      "개인정보를 제공받는 파트너는 예약 이행 목적 범위 내에서만 이용해야 하며, 목적 달성 후 지체 없이 파기해야 합니다.",
    ],
  },
  {
    title: "5. 개인정보 처리위탁 및 국외이전",
    paragraphs: [
      "회사는 서비스 제공을 위해 개인정보 처리업무를 위탁하거나 국외이전을 할 수 있으며, 이 경우 관련 법령에 따라 위탁계약 체결 및 공개 또는 고지를 진행합니다.",
      "예를 들어 Google LLC(구글폼, 워크스페이스)는 입점 신청서 수집, 저장, 관리에 사용될 수 있고, Supabase 등 클라우드 또는 데이터베이스 서비스는 운영 데이터 저장과 인증에 사용될 수 있으며, 분석 도구는 서비스 이용 통계와 품질 개선에 사용될 수 있습니다.",
      "실제 수탁자, 이전 국가, 보유기간, 이전 방법 등 최신 정보는 서비스 내 고지 또는 별도 안내를 통해 공개합니다.",
    ],
  },
  {
    title: "6. 정보주체의 권리 및 행사방법",
    paragraphs: [
      "정보주체는 개인정보 열람, 정정, 삭제, 처리정지, 동의철회 등을 요구할 수 있습니다.",
      "권리 행사는 아래 문의처를 통해 접수할 수 있으며, 본인 확인 후 지체 없이 조치합니다.",
    ],
  },
  {
    title: "7. 개인정보의 파기절차 및 방법",
    paragraphs: [
      "보유기간 경과 또는 처리 목적 달성 시 지체 없이 파기합니다.",
      "전자적 파일은 복구가 불가능한 방법으로 삭제하고, 종이 문서는 분쇄 또는 소각합니다.",
    ],
  },
  {
    title: "8. 개인정보의 안전성 확보조치",
    paragraphs: [
      "회사는 개인정보보호법 등 관련 법령에 따라 아래와 같은 안전성 확보조치를 시행합니다.",
    ],
    list: securityItems,
  },
  {
    title: "9. 개인정보 보호책임자 및 문의",
    paragraphs: [
      "개인정보 보호책임자: 김민지",
      "문의 이메일: bb_career@naver.com",
      "주소: 경기도 성남시 분당구 정자동 7, 두산위브파빌리온",
      "사업자등록번호: 350-33-01601",
    ],
  },
  {
    title: "10. 고지의무",
    paragraphs: [
      "본 개인정보처리방침은 2026-02-07부터 적용됩니다.",
      "내용 추가, 삭제, 수정이 있을 경우 서비스 내 공지사항 또는 본 페이지를 통해 사전 공지합니다.",
    ],
  },
];

export const metadata: Metadata = {
  title: "오늘득템 개인정보처리방침",
  description:
    "오늘득템 서비스의 개인정보 수집 항목, 이용 목적, 보관 기간, 제3자 제공, 위탁 처리, 파기 절차 및 문의처를 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#F7FDF9_0%,#FFFFFF_18%,#FFFFFF_100%)] px-6 py-12 text-[#111827]">
      <div className="mx-auto w-full max-w-[920px] space-y-8">
        <header className="overflow-hidden rounded-[28px] border border-[#DCEFE4] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="bg-[linear-gradient(135deg,#00D563_0%,#00B85A_45%,#0F172A_100%)] px-6 py-8 text-white md:px-8">
            <div className="text-[12px] font-[800] tracking-[0.28em] text-white/80">PRIVACY POLICY</div>
            <h1 className="mt-3 text-[clamp(28px,3vw,42px)] font-[900] leading-[1.15]">오늘득템 개인정보처리방침</h1>
            <p className="mt-3 max-w-[58ch] text-[14px] leading-[1.7] text-white/88">
              이 페이지는 로그인 없이 열람 가능한 공개 문서입니다. 오늘득템 앱 및 웹 서비스에서 수집하는 개인정보의 항목,
              이용 목적, 보관 기간, 파기 방법, 문의처를 안내합니다.
            </p>
          </div>

          <div className="grid gap-4 px-6 py-6 md:grid-cols-4 md:px-8">
            {summaryCards.map((card) => (
              <div key={card.title} className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-4">
                <div className="text-[12px] font-[700] tracking-[0.18em] text-[#00B85A]">{card.title}</div>
                <div className="mt-2 text-[14px] font-[700] text-[#111827]">{card.body}</div>
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
            <div className="text-[12px] font-[800] tracking-[0.24em] text-[#00B85A]">회사 정보</div>
            <div className="mt-3 text-[15px] font-[700] text-[#111827]">비비(BB)컴퍼니</div>
            <p className="mt-2 text-[14px] leading-[1.7] text-[#4B5563]">
              대표자: 김민지
              <br />
              사업자등록번호: 350-33-01601
            </p>
          </div>

          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
            <div className="text-[12px] font-[800] tracking-[0.24em] text-[#00B85A]">문의처</div>
            <a
              href="mailto:bb_career@naver.com"
              className="mt-3 block text-[15px] font-[700] text-[#111827] underline decoration-[#00D563] underline-offset-4"
            >
              bb_career@naver.com
            </a>
            <p className="mt-2 text-[14px] leading-[1.7] text-[#4B5563]">개인정보 열람, 정정, 삭제, 처리정지, 동의철회 요청 접수</p>
          </div>

          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
            <div className="text-[12px] font-[800] tracking-[0.24em] text-[#00B85A]">보관 및 파기</div>
            <p className="mt-3 text-[14px] leading-[1.7] text-[#4B5563]">
              목적 달성 시 지체 없이 파기하며, 전자적 파일은 복구 불가능한 방식으로 삭제하고 종이 문서는 분쇄 또는 소각합니다.
            </p>
          </div>
        </section>

        <div className="space-y-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[26px] border border-[#E5E7EB] bg-white px-6 py-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] md:px-8"
            >
              <h2 className="text-[20px] font-[900] leading-[1.35] text-[#111827]">{section.title}</h2>
              <div className="mt-4 space-y-3 text-[15px] leading-[1.8] text-[#374151]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.list ? (
                <ul className="mt-4 space-y-3 border-l-2 border-[#D1FAE5] pl-4 text-[15px] leading-[1.8] text-[#374151]">
                  {section.list.map((item) => (
                    <li key={item} className="list-none">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <footer className="rounded-[24px] border border-[#E5E7EB] bg-[#0F172A] px-6 py-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] md:px-8">
          <div className="text-[13px] font-[800] tracking-[0.24em] text-[#86EFAC]">NOTICE</div>
          <p className="mt-3 text-[14px] leading-[1.8] text-white/88">
            본 페이지는 앱스토어, 플레이스토어, 랜딩페이지, 고객문의 응대 시 공통으로 안내할 수 있는 공개용 개인정보처리방침 URL입니다.
            스토어 등록 시에는 현재 배포 중인 Vercel 도메인 뒤에 <span className="font-[800]">/saveit/privacy</span> 경로를 사용하면 됩니다.
          </p>
        </footer>
      </div>
    </main>
  );
}
