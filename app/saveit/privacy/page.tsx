"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-[#111827]">
      <div className="mx-auto w-full max-w-[840px] space-y-8">
        <header className="space-y-3">
          <div className="text-[12px] font-[700] tracking-[0.25em] text-[#00D563]">PRIVACY</div>
          <h1 className="text-[clamp(28px,3vw,38px)] font-[800]">개인정보처리방침</h1>
          <div className="text-[14px] text-[#6B7280]">시행일: 2026-02-07</div>
          <div className="text-[14px] text-[#6B7280]">개정일: 2026-02-07</div>
          <div className="text-[14px] text-[#6B7280]">운영주체: 비비(BB)컴퍼니</div>
          <div className="text-[14px] text-[#6B7280]">개인정보 보호책임자: 김민지</div>
          <div className="text-[14px] text-[#6B7280]">문의: bb_career@naver.com</div>
          <div className="text-[14px] text-[#6B7280]">
            주소: 경기도 성남시 분당구 정자동 7, 두산위브파빌리온 / 사업자등록번호: 350-33-01601
          </div>
        </header>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">1. 개인정보의 처리 목적</h2>
          <p>회사는 다음 목적을 위해 필요한 최소한의 개인정보를 처리합니다.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>고객/파트너 회원가입 및 본인 확인(필요한 경우)</li>
            <li>상품·매장 정보 제공, 예약(픽업) 중개, 알림 제공, 고객지원</li>
            <li>파트너 입점 심사 및 계약/구독/크레딧 관리, 세무·회계 처리</li>
            <li>부정이용 방지, 서비스 안정성 확보, 보안 로그 분석</li>
            <li>분쟁 대응 및 법령상 의무 이행</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">2. 처리하는 개인정보 항목</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>고객(필수): 휴대전화번호(예약 확인/픽업 안내 및 매장 전달), 닉네임, 예약/이용 내역, 고객문의 내용</li>
            <li>고객(자동수집): 기기 정보(모델/OS), 접속기록(로그), 서비스 이용기록, 접속 IP, 쿠키/광고식별자(선택 동의 또는 설정에 따라)</li>
            <li>파트너(필수): 상호, 사업자등록번호, 대표자명, 담당자명, 연락처, 이메일, 정산/세무에 필요한 정보(해당 시)</li>
            <li>매장정보: 주소, 영업시간, 업종/카테고리, 픽업 안내, 매장 사진(선택)</li>
            <li>위치정보(선택): “내 주변 매장/상품 찾기” 기능 이용 시 검색 시점에 한해 단말기 위치 활용</li>
          </ul>
          <p className="text-[13px] text-[#6B7280]">
            위치정보는 실시간 추적을 하지 않으며, 개인위치정보의 처리 및 확인자료 보관 등은 위치기반서비스 이용약관에 따릅니다.
          </p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">3. 개인정보의 처리 및 보유 기간</h2>
          <p>회사는 원칙적으로 개인정보 처리 목적 달성 시 지체 없이 파기합니다. 다만, 관련 법령에 따라 일정 기간 보관이 필요한 경우 해당 기간 보관합니다.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>계약 또는 청약철회 등에 관한 기록: 5년(전자상거래 등에서의 소비자보호에 관한 법률)</li>
            <li>대금결제 및 재화 등의 공급에 관한 기록: 5년(전자상거래법)</li>
            <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년(전자상거래법)</li>
            <li>표시·광고에 관한 기록: 6개월(전자상거래법)</li>
            <li>접속기록(IP 등): 3개월(통신비밀보호법)</li>
            <li>파트너 계약/입점 관련 서류: 계약 종료 후 1년(분쟁 대응 목적)</li>
            <li>위치정보 이용·제공사실 확인자료: 6개월 이상(위치정보법)</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">4. 개인정보의 제3자 제공</h2>
          <p>회사는 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>고객의 예약 이행을 위해 파트너에게 제공: 휴대전화번호, 예약 내역(상품/수량/픽업시간 등)</li>
            <li>법령에 근거한 요청이 있는 경우 또는 수사기관의 적법한 절차에 따른 요청이 있는 경우</li>
          </ul>
          <p className="text-[13px] text-[#6B7280]">
            제공받는 자(파트너)는 목적 범위 내에서만 이용하고, 목적 달성 후 지체 없이 파기하여야 합니다.
          </p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">5. 개인정보 처리위탁 및 국외이전</h2>
          <p>회사는 서비스 제공을 위해 개인정보 처리업무를 위탁하거나 국외이전을 할 수 있으며, 이 경우 관련 법령에 따라 위탁계약 체결 및 공개/고지합니다.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>예: Google LLC(구글폼/워크스페이스) – 입점 신청서 수집·저장·관리</li>
            <li>예: Supabase 등 클라우드/DB – 서비스 운영 데이터 저장 및 인증</li>
            <li>예: 분석도구(PostHog 등) – 서비스 이용 통계 및 품질 개선(최소 데이터·익명화 우선)</li>
          </ul>
          <p className="text-[13px] text-[#6B7280]">
            실제 수탁자/이전국가/보유기간/이전방법 등은 서비스 내 “수탁자 현황”에 최신으로 공개합니다.
          </p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">6. 정보주체의 권리 및 행사방법</h2>
          <p>정보주체는 개인정보 열람, 정정, 삭제, 처리정지, 동의철회 등을 요구할 수 있습니다.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>접수: bb_career@naver.com (본인 확인 후 지체 없이 조치)</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">7. 개인정보의 파기절차 및 방법</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>보유기간 경과 또는 처리목적 달성 시 지체 없이 파기</li>
            <li>전자적 파일: 복구 불가능한 방법으로 삭제</li>
            <li>종이 문서: 분쇄 또는 소각</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">8. 개인정보의 안전성 확보조치</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>접근권한 최소화 및 계정관리(권한 분리, MFA 적용 등)</li>
            <li>개인정보 전송·저장 암호화(가능한 범위)</li>
            <li>접속기록 보관 및 위변조 방지</li>
            <li>취약점 점검 및 보안 업데이트</li>
            <li>개인정보 처리자 교육 및 내부관리계획 수립</li>
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">9. 개인정보 보호책임자</h2>
          <p>개인정보 보호책임자: 김민지</p>
          <p>문의: bb_career@naver.com</p>
        </section>

        <section className="space-y-3 text-[15px] leading-[1.7] text-[#374151]">
          <h2 className="text-[18px] font-[800] text-[#111827]">10. 고지의무</h2>
          <p>본 개인정보처리방침은 2026-02-07부터 적용됩니다. 내용 추가·삭제·수정이 있을 경우 서비스 내 공지사항 등을 통해 사전 공지합니다.</p>
        </section>
      </div>
    </main>
  );
}
