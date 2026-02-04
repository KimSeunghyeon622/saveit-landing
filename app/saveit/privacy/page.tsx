"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-[#111827]">
      <div className="mx-auto w-full max-w-[840px] space-y-8">
        <header className="space-y-3">
          <div className="text-[12px] font-[700] tracking-[0.25em] text-[#00D563]">PRIVACY</div>
          <h1 className="text-[clamp(28px,3vw,38px)] font-[800]">개인정보처리방침</h1>
          <div className="text-[14px] text-[#6B7280]">시행일: 2026-02-04</div>
          <div className="text-[14px] text-[#6B7280]">개정일: 2026-02-04</div>
          <div className="text-[14px] text-[#6B7280]">운영주체: 비비(BB)컴퍼니</div>
          <div className="text-[14px] text-[#6B7280]">문의: bb_career@naver.com</div>
          <div className="text-[14px] text-[#6B7280]">
            주소: 경기도 성남시 분당구 정자동 7, 두산위브파빌리온 / 사업자등록번호: 350-33-01601
          </div>
        </header>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">1. 개인정보의 처리 목적</h2>
          <p>회사는 다음 목적을 위해 필요한 최소한의 개인정보를 처리합니다.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>파트너 가입/입점 심사 및 계약 관리</li>
            <li>상품·매장 정보 노출, 주문(예약) 관리, 알림 제공</li>
            <li>마일리지 충전·차감 내역 관리, 정산/세무/회계 처리</li>
            <li>고객/파트너 문의 및 분쟁 대응</li>
            <li>서비스 운영 및 보안(부정이용 방지, 로그 분석)</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">2. 처리하는 개인정보 항목</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>파트너 정보: 상호/사업자등록번호, 대표자명, 담당자명, 연락처, 이메일</li>
            <li>매장 정보: 주소, 영업시간, 업종/카테고리, 픽업 안내</li>
            <li>고객 응대/분쟁 처리에 필요한 최소 정보(문의 내용, 통화/메시지 기록의 일부 등)</li>
            <li>프로필 이미지, 소개 문구, 추가 연락수단(카카오/메신저 등)</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">3. 개인정보의 처리 및 보유 기간</h2>
          <p>원칙적으로 목적 달성 시 지체 없이 파기합니다. 다만, 아래는 최소 기간 보관합니다.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>파트너 계약/입점 관련: 계약 종료 후 1년</li>
            <li>플랫폼 이용 구매 기록: 3년</li>
            <li>고객/파트너 문의 기록: 1년</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">4. 개인정보의 제3자 제공</h2>
          <p>회사는 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 다만, 법령에 근거하거나 정보주체 동의가 있는 경우 제공할 수 있습니다.</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">5. 개인정보 처리위탁 및 국외이전</h2>
          <p>회사는 서비스 제공을 위해 개인정보 처리업무를 위탁할 수 있으며, 위탁 시 관련 법령에 따라 계약 및 공개/고지합니다.</p>
          <p>(예시) 구글폼/구글 워크스페이스를 통해 입점 신청을 받는 경우</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>수탁자(또는 이전받는 자): Google LLC 등</li>
            <li>위탁업무: 신청서 수집/저장/관리</li>
            <li>이전 국가/일시/방법/보관기간: 구글 서비스 정책 및 실제 설정에 따라 기재</li>
            <li>동의 거부 권리 및 불이익: 거부 시 입점 신청 접수 불가 등</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">6. 정보주체의 권리 및 행사 방법</h2>
          <p>파트너(정보주체)는 언제든지 개인정보 열람/정정/삭제/처리정지 요구를 할 수 있습니다.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>접수: 이메일(bb_career@naver.com)</li>
            <li>처리: 본인 확인 후 지체 없이 조치</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">7. 개인정보의 파기</h2>
          <p>보유기간 경과 또는 처리목적 달성 시 지체 없이 파기합니다.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>전자적 파일: 복구 불가능한 방법으로 삭제</li>
            <li>종이: 분쇄 또는 소각</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">8. 개인정보의 안전성 확보조치</h2>
          <p>회사는 개인정보 보호를 위해 다음 조치를 취합니다.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>접근권한 최소화 및 계정관리, 접속기록 보관</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">9. 권익침해 구제방법</h2>
          <p>개인정보 침해에 대한 신고/상담은 개인정보침해 신고센터 등 관계기관에 문의할 수 있습니다.</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">10. 개인정보 보호책임자</h2>
          <p>개인정보 보호책임자: 김민지</p>
          <p>문의: bb_career@naver.com</p>
        </section>
      </div>
    </main>
  );
}
