/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {

  // ── 메인 (히어로) ──
  groom: {
    name: "이상윤",
    father: "이한칠",
    mother: "한숙자",
    fatherDeceased: true,
    motherDeceased: false
  },

  bride: {
    name: "정윤희",
    father: "정희영",
    mother: "박하순",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-13",
    time: "11:30",
    venue: "PJ호텔 웨딩홀 1층 뮤즈홀",
    hall: "1층 뮤즈홀",
    address: "서울 중구 마른내로 71 (02-2280-7070)",                                                                                                                                                                                                                                                                                                                   
    tel: "02-2280-7070",
    mapLinks: {
      kakao: "https://place.map.kakao.com/26887653",
      naver: "https://naver.me/5ne4f3BA"
    }
  },

  location: {
    // 교통 안내
    bussubway: "🚇 지하철\n3, 4호선 충무로역 8번 출구에서 도보 5분\n2, 5호선 을지로4가역 10번 출구에서 도보 5분\n\n🚌 버스\n을지로 4가 방면: 100, 105, 152, 202, 261, 604, 7011\n퇴계로 방면: 104, 105, 140, 463, 421, 507, 604, 7011\n\n🚐 셔틀버스\n예식 1시간 전부터 10~15분 간격으로 왕복 운행\n3, 4호선 충무로역 8번 출구 앞\n2, 5호선 을지로4가역 9번 출구 GS25 편의점 골목",
    parking: "🅿️ 을지트윈타워 주차장 지하 5-6층\n서울특별시 중구 을지로 170\n2시간 무료, 이후 10분당 1,000원",

    meal: "- 식사는 예식 30분 전부터 3층 연회장에서\n뷔페로 즐기실 수 있습니다.\n- 호텔 2층 커피라운지에서 예식 전후\n하객들을 위한 무료 커피가 제공됩니다.",

    // 복사용 주소 2개
    venueAddress: "서울특별시 중구 마른내로 71 PJ호텔 웨딩홀",
    parkingAddress: "서울특별시 중구 을지로 170 을지트윈타워"
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n서툴지만 진심으로 서로를 아끼며\n함께 웃고, 기대고, 이해하는 법을 배웠습니다.\n\n앞으로의 날들도 손을 맞잡고\n사랑과 믿음으로 채워가려 합니다.\n\n그 첫걸음을 내딛는 자리에\n소중한 분들을 모시고 기쁨을 나누고 싶습니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "",
    content: ""
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이상윤", bank: "신한은행", number: "110-599-452780" }
    ],
    bride: [
      { role: "신부", name: "정윤희", bank: "카카오뱅크", number: "3333-14-8533151" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이상윤 ♥ 정윤희 결혼합니다",
    description: "2026년 9월 13일, 소중한 분들을 초대합니다."
  }
};
