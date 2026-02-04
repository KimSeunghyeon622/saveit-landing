"use client";

import React from "react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-[#111827]">
      <div className="mx-auto w-full max-w-[840px] space-y-8">
        <header className="space-y-3">
          <div className="text-[12px] font-[700] tracking-[0.25em] text-[#00D563]">TERMS</div>
          <h1 className="text-[clamp(28px,3vw,38px)] font-[800]">이용약관</h1>
          <div className="text-[14px] text-[#6B7280]">시행일: 2026-02-04</div>
          <div className="text-[14px] text-[#6B7280]">운영주체: 비비(BB)컴퍼니</div>
        </header>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">1. 목적</h2>
          <p>
            본 약관은 회사가 제공하는 플랫폼(이하 “서비스”) 이용에 관한 권리·의무 및 책임을 규정합니다.
          </p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">2. 용어 정의</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>“파트너”는 서비스를 통해 상품을 등록·노출하고 고객에게 픽업 판매를 제공하는 사업자를 말합니다.</li>
            <li>“고객”은 서비스에서 상품을 확인하고 예약 후 매장에서 결제/픽업하는 이용자를 말합니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">3. 서비스의 성격(중개/책임 범위)</h2>
          <p>
            회사는 파트너의 상품을 노출·예약·알림·내역 관리하는 플랫폼을 제공하며, 상품의 제조/품질/표시/재고/판매는 파트너 책임입니다.
          </p>
          <p>고객과의 매매계약 당사자 및 현장 결제의 수령자는 원칙적으로 파트너입니다.</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">4. 서비스 내용</h2>
          <p>상품/재고 등록, 예약 관리, 픽업 알림, 고객 문의(댓글/답글) 등</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">5. 파트너의 의무</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>상품 정보(가격/수량/픽업시간/원산지·알레르겐 등 필요한 표시)를 정확히 기재하고 최신 상태로 유지해야 합니다.</li>
            <li>예약 수량만큼 상품을 확보하고, 고객에게 안내한 품질/구성대로 제공해야 합니다.</li>
            <li>식품 위생·표시 등 관련 법령을 준수해야 하며, 위반으로 인한 책임은 파트너에게 있습니다.</li>
            <li>부정행위(허위재고, 반복적 노쇼 유도, 리뷰 조작 등)를 금지합니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">6. 이용료 및 결제 구조</h2>
          <p className="font-[700] text-[#111827]">이용료의 성격</p>
          <p>
            회사는 본 서비스의 이용에 대하여, 파트너가 선택한 구독 플랜에 따라 플랫폼 이용에 대한 대가(이하 “이용료”)를
            부과합니다. 본 이용료는 회사가 제공하는 상품 노출, 예약 중개, 관리 기능 등 서비스 이용 권한에 대한 대가이며,
            파트너의 실제 판매 금액, 매출, 결제 결과와는 무관합니다.
          </p>
          <p className="font-[700] text-[#111827]">구독 플랜 및 이용료 결제</p>
          <p>
            파트너는 회사가 정한 구독 플랜 중 하나를 선택하여 이용할 수 있으며, 각 플랜별 이용료, 제공 기능, 이용 한도 등은
            서비스 화면 또는 별도 정책을 통해 안내됩니다. 이용료는 월 단위 또는 회사가 정한 주기에 따라 선불로 결제됩니다.
          </p>
          <p className="font-[700] text-[#111827]">플랫폼 이용 크레딧</p>
          <p>
            파트너는 서비스 이용을 위하여 회사가 정한 방식에 따라 플랫폼 이용 크레딧을 선납할 수 있습니다. 이용 크레딧은 본
            서비스 내에서 제공되는 예약 중개 기능, 상품 등록 및 노출 등 서비스 이용 시 회사가 정한 기준에 따라 차감되며,
            상품의 판매 금액, 결제 금액 또는 매출 규모와 연동되지 않습니다.
          </p>
          <p className="font-[700] text-[#111827]">크레딧 잔액 부족 시 조치</p>
          <p>
            플랫폼 이용 크레딧의 잔액이 부족한 경우, 회사는 서비스의 안정적 운영을 위하여 다음 각 호의 조치를 취할 수 있습니다.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>상품 노출의 제한</li>
            <li>신규 상품 등록 또는 예약 중개 기능의 제한</li>
            <li>기타 서비스 이용 범위의 합리적 제한</li>
          </ul>
          <p className="font-[700] text-[#111827]">이용 크레딧의 환불 및 정산</p>
          <p>플랫폼 이용 크레딧은 서비스 이용 대가의 선납 성격으로 제공되며, 원칙적으로 현금 환불되지 않습니다.</p>
          <p className="font-[700] text-[#111827]">전자결제 및 정산에 대한 비관여</p>
          <p>
            본 서비스는 파트너와 소비자 간의 거래를 직접 중개하는 플랫폼으로서, 소비자와 파트너 간의 결제, 정산, 환불 등
            금전 거래에는 관여하지 않습니다. 회사가 수취하는 이용료 및 플랫폼 이용 크레딧은 파트너의 실제 판매 행위 또는 결제
            결과에 대한 수수료가 아닙니다.
          </p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">7. 예약 취소/노쇼/클레임</h2>
          <p>예약 취소 및 노쇼 처리 기준은 서비스 내 정책에 따릅니다.</p>
          <p>
            품질/누락/위생 등 상품 클레임은 원칙적으로 파트너가 1차 처리합니다. 회사는 플랫폼 운영자로서 분쟁 조정에 협조할 수
            있습니다.
          </p>
          <p>파트너 귀책으로 반복 민원이 발생할 경우, 회사는 노출 제한 또는 계약 해지를 할 수 있습니다.</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">8. 게시물(리뷰/답글) 운영</h2>
          <p>파트너는 고객 리뷰에 답글을 작성할 수 있습니다.</p>
          <p>명예훼손/개인정보 노출/비방/불법홍보 등은 금지되며, 위반 시 회사는 게시물 삭제 및 이용 제한을 할 수 있습니다.</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">9. 서비스 이용 제한 및 계약 해지</h2>
          <p>
            회사는 다음 사유 발생 시 사전 통지 후(긴급 시 사후 통지) 서비스 이용을 제한/중지/해지할 수 있습니다.
          </p>
          <p>허위 정보 등록, 반복적 고객 피해 유발, 법령 위반, 결제/마일리지 부정, 보안 위협 등</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">10. 면책 및 책임 제한</h2>
          <p>회사는 불가항력(천재지변/통신장애 등)으로 인한 서비스 중단에 책임을 지지 않습니다.</p>
          <p>파트너와 고객 간 분쟁에서 회사는 거래당사자가 아닌 범위에서 합리적 협조를 제공합니다.</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">11. 약관 및 정책 변경</h2>
          <p>회사는 법령을 위배하지 않는 범위에서 약관/정책을 변경할 수 있으며, 변경 사항은 사전 공지합니다.</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">12. 준거법 및 분쟁 해결</h2>
          <p>본 약관은 대한민국 법령을 준거로 하며, 분쟁은 회사 주소지 관할 법원을 전속 관할로 합니다.</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">13. 문의</h2>
          <p>문의: bb_career@naver.com</p>
        </section>
      </div>
    </main>
  );
}
