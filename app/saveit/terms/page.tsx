"use client";

import React from "react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-[#111827]">
      <div className="mx-auto w-full max-w-[840px] space-y-8">
        <header className="space-y-3">
          <div className="text-[12px] font-[700] tracking-[0.25em] text-[#00D563]">TERMS</div>
          <h1 className="text-[clamp(28px,3vw,38px)] font-[800]">서비스 이용약관</h1>
          <div className="text-[14px] text-[#6B7280]">시행일: 2026-02-07</div>
          <div className="text-[14px] text-[#6B7280]">운영주체: 비비(BB)컴퍼니</div>
          <div className="text-[14px] text-[#6B7280]">사업자등록번호: 350-33-01601</div>
          <div className="text-[14px] text-[#6B7280]">주소: 경기도 성남시 분당구 정자동 7, 두산위브파빌리온</div>
          <div className="text-[14px] text-[#6B7280]">문의: bb_career@naver.com</div>
        </header>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제1조(목적)</h2>
          <p>본 약관은 비비(BB)컴퍼니(이하 “회사”)가 운영하는 오늘득템 플랫폼(이하 “서비스”)의 이용과 관련하여 회사와 이용자(고객 및 파트너) 간 권리·의무 및 책임사항, 이용조건과 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제2조(정의)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>“서비스”란 회사가 운영하는 모바일 애플리케이션/웹을 통해 제공하는 상품정보 노출, 예약(픽업) 중개, 알림, 내역관리 등 일체의 기능을 말합니다.</li>
            <li>“고객”이란 서비스에서 상품을 확인하고 예약한 후 파트너 매장에서 결제 및 픽업하는 이용자를 말합니다.</li>
            <li>“파트너”란 서비스에 매장 및 상품(재고/땡기 상품 포함)을 등록·노출하고 고객에게 현장판매(결제 수령 포함) 및 픽업을 제공하는 사업자를 말합니다.</li>
            <li>“예약”이란 고객이 서비스에서 특정 상품의 픽업을 위해 수량·시간 등을 선택하고, 서비스가 이를 파트너에게 전달하여 픽업 의사를 확인하는 절차를 말합니다.</li>
            <li>“이용료/크레딧”이란 파트너가 서비스 이용권(노출, 예약 중개, 관리 기능 등)에 대한 대가로 회사에 지급하는 금액 또는 선납 크레딧을 말합니다(제10조).</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제3조(서비스의 성격 및 거래당사자)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>회사는 파트너가 제공하는 상품의 정보를 노출하고 예약을 중개하는 정보통신서비스 제공자(플랫폼 운영자)이며, 고객과 파트너 간 매매계약의 당사자가 아닙니다.</li>
            <li>상품의 제조·보관·품질·표시(원산지/알레르겐/유통기한 등)·재고관리·판매 및 현장결제의 수령과 영수증/세금계산서 발급 등은 파트너의 책임과 권한으로 합니다.</li>
            <li>고객-파트너 간 분쟁이 발생하는 경우 회사는 거래당사자가 아닌 범위에서 합리적으로 협조할 수 있으나, 법령 또는 본 약관에서 별도로 정한 경우를 제외하고 상품 자체에 대한 책임을 부담하지 않습니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제4조(약관의 효력 및 변경)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>본 약관은 서비스 화면에 게시하거나 기타 방법으로 공지하고, 고객 또는 파트너가 이에 동의함으로써 효력이 발생합니다.</li>
            <li>회사는 관련 법령을 위배하지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 적용일자 및 개정 사유를 명시하여 서비스 내 공지사항 등으로 사전 고지합니다.</li>
            <li>이용자가 변경약관에 동의하지 않는 경우 이용계약을 해지(탈퇴)할 수 있으며, 고지한 효력발생일 이후에도 서비스를 계속 이용하는 경우 변경약관에 동의한 것으로 봅니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제5조(이용계약의 체결 및 계정 관리)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>고객의 이용계약은 회원가입 또는 비회원 이용(가능한 범위에서) 절차에 따라 성립합니다. 회사는 운영정책에 따라 일부 기능을 회원에게만 제공할 수 있습니다.</li>
            <li>만 14세 미만은 회원가입 및 서비스 이용이 제한됩니다(법정대리인 동의 절차를 제공하지 않는 방식으로 운영하는 경우).</li>
            <li>이용자는 계정정보를 최신·정확하게 유지하여야 하며, 제3자에게 계정을 양도·대여하거나 공유할 수 없습니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제6조(서비스 제공 및 중단)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>서비스는 원칙적으로 연중무휴 24시간 제공하되, 시스템 점검, 장애, 통신사고, 천재지변, 기타 불가피한 사유가 있는 경우 전부 또는 일부가 제한·중단될 수 있습니다.</li>
            <li>회사는 서비스 개선 또는 정책 변경에 따라 서비스 내용의 전부 또는 일부를 변경할 수 있으며, 중요 변경은 사전에 고지합니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제7조(예약, 품절, 취소 및 노쇼)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>예약의 성립, 확정, 취소 가능 시간, 노쇼 처리 기준(패널티 등)은 서비스 내 ‘운영정책’에서 정하며, 정책은 약관의 일부로 봅니다.</li>
            <li>파트너는 예약 확정 이후 고객이 지정한 픽업시간 내 제공이 가능하도록 재고를 확보하고, 품절 또는 제공 불가가 예상되는 경우 지체 없이 고객에게 통지하고 예약을 취소·조정하여야 합니다.</li>
            <li>고객은 예약 후 정해진 시간 내 방문하여 픽업·결제를 완료해야 하며, 사전 통지 없이 반복적으로 노쇼하는 경우 회사는 서비스 이용을 제한할 수 있습니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제8조(결제, 영수증 및 환불)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>고객의 결제는 원칙적으로 파트너 매장에서 파트너에게 직접 이루어집니다. 회사는 고객 결제를 수령하거나, 결제대금을 보관·정산·환불하는 역할을 수행하지 않습니다.</li>
            <li>상품의 하자, 누락, 변심(가능한 범위), 위생·표시 문제 등으로 인한 환불·교환·손해배상은 원칙적으로 파트너가 관계 법령 및 자체 정책에 따라 처리합니다.</li>
            <li>회사는 분쟁 조정, 연락 전달 등 합리적 범위에서 협조할 수 있으며, 파트너의 위법·부당행위가 의심되는 경우 노출 제한, 이용정지, 계약해지 등 조치를 취할 수 있습니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제9조(파트너의 의무 및 제재)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>파트너는 상품정보(가격, 수량, 픽업 가능 시간, 구성, 유통기한/소비기한, 보관방법, 원산지 및 알레르겐 등 법정표시사항)를 정확히 기재하고 최신 상태로 유지해야 합니다.</li>
            <li>파트너는 식품위생, 표시·광고, 전자상거래 소비자보호, 개인정보보호 등 관련 법령을 준수해야 하며, 위반으로 발생하는 모든 책임(민·형사 및 행정상 책임)은 파트너에게 있습니다.</li>
            <li>파트너는 고객의 연락처 등 개인정보를 예약 처리 및 고객응대 목적 범위에서만 이용하고, 목적 달성 후 지체 없이 파기하며, 제3자 제공·광고활용을 금지합니다.</li>
            <li>허위재고 등록, 반복적 품절·미제공, 부정리뷰, 고객 기만, 불법 상품 판매 등이 확인되는 경우 회사는 노출 제한, 이용정지, 계약해지, 손해배상 청구 등 조치를 취할 수 있습니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제10조(파트너 이용료, 구독 플랜 및 크레딧)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>이용료의 성격: 회사는 파트너에게 상품 노출, 예약 중개, 관리 기능 등 “플랫폼 이용권” 제공의 대가로 구독 플랜에 따른 이용료를 부과합니다. 이용료는 파트너의 실제 판매금액, 매출, 현장결제 결과와 직접 연동되지 않습니다.</li>
            <li>결제 방식: 이용료는 월 단위 등 회사가 정한 주기에 따라 선불로 결제되며, 플랜별 가격/기능/이용 한도는 서비스 화면 또는 별도 정책으로 공지합니다.</li>
            <li>크레딧(선납): 파트너는 선택적으로 크레딧을 선납할 수 있으며, 크레딧은 서비스 내에서 회사가 고지한 기준에 따라 차감됩니다.</li>
            <li>잔액 부족 시 조치: 잔액 부족 시 상품 노출 제한, 신규 등록 제한, 예약 중개 기능 제한 등을 할 수 있습니다.</li>
            <li>환불 원칙 및 예외: 크레딧은 서비스 이용대가의 선납 성격으로 원칙적으로 현금 환불되지 않습니다. 다만 회사 귀책 또는 법령상 환불 의무 등 예외는 허용될 수 있습니다.</li>
            <li>세금 처리: 회사는 관련 법령에 따라 이용료 등에 대한 증빙(현금영수증/세금계산서 등)을 발급할 수 있습니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제11조(게시물 및 지식재산권)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>이용자가 서비스에 게시하는 리뷰, 댓글, 이미지 등(이하 “게시물”)의 저작권은 원칙적으로 게시자에게 귀속됩니다.</li>
            <li>이용자는 회사에게 서비스 운영·홍보에 필요한 범위에서 게시물을 무상으로 이용할 수 있는 비독점적 권리를 부여합니다.</li>
            <li>명예훼손, 비방, 개인정보 노출, 불법광고, 저작권 침해 등 위법하거나 운영정책에 위반되는 게시물은 사전 통지 없이 삭제·차단될 수 있습니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제12조(이용제한, 해지, 손해배상)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>회사는 이용자의 약관 위반, 불법·부정 이용, 보안 위협, 반복적 고객 피해 유발 등이 확인되는 경우 서비스 이용을 제한하거나 이용계약을 해지할 수 있습니다(긴급한 경우 사후 통지 가능).</li>
            <li>이용자는 언제든지 서비스 내 절차에 따라 이용계약을 해지(탈퇴)할 수 있습니다.</li>
            <li>이용자의 귀책으로 회사에 손해가 발생한 경우 회사는 손해배상을 청구할 수 있습니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제13조(면책)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>회사는 파트너와 고객 간 거래의 당사자가 아니므로, 상품의 안전성/적법성/품질/재고/위생 및 파트너의 법령 위반에 대해 책임을 부담하지 않습니다. 다만 회사의 고의 또는 중대한 과실로 이용자에게 손해가 발생한 경우에는 관련 법령에 따릅니다.</li>
            <li>회사는 천재지변, 통신장애, 제3자 서비스 장애 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다.</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제14조(준거법 및 관할)</h2>
          <p>본 약관은 대한민국 법률을 준거법으로 하며, 서비스 이용과 관련하여 분쟁이 발생한 경우 민사소송법에 따른 관할 법원에 제기합니다.</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">제15조(회사 정보)</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>상호: 비비(BB)컴퍼니</li>
            <li>대표자: 김민지</li>
            <li>사업자등록번호: 350-33-01601</li>
            <li>주소: 경기도 성남시 분당구 정자동 7, 두산위브파빌리온</li>
            <li>문의: bb_career@naver.com</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
