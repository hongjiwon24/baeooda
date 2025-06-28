import { homeCourses } from './homeCourses';

const dummyCourses = [

  // [IT·디지털]
    
    // 프로그래밍
   {
    id: 1,
    title: '왕초보를 위한 HTML/CSS 기초 마스터',
    mainCategory: 'IT·디지털',
    subCategory: '프로그래밍',
    level: '입문',
    duration: '60일',
    discount: '25%',
    price: '₩89,000',
    originalPrice: '₩119,000',
    image: '/course/course_it_01.jpg',
    detailImage: '/course/course_it_01_2.jpg',
    desc: 'HTML과 CSS의 기본 개념을 쉽고 빠르게 마스터할 수 있는 강의',
    author: '미듬',
    tag: ['HTML', 'CSS'],
    info: { level: '초급', day: '35일' },
    options: {
    '1년 수강': { originalPrice: '₩150,000', price: '₩89,000' },
    '무제한 수강': { originalPrice: '₩180,000', price: '₩120,000' },
    }
  },
  {
    id: 2,
    title: 'Javascript 완전 정복 - ES6+까지',
    mainCategory: 'IT·디지털',
    subCategory: '프로그래밍',
    level: '초급',
    duration: '75일',
    discount: '20%',
    price: '₩96,000',
    originalPrice: '₩120,000',
    image: '/course/course_it_02.jpg',
    detailImage: '/course/course_it_02_2.jpg',
    desc: 'JavaScript 기초부터 ES6+ 최신 문법까지 단계별로 배워보는 실전 강의.',
    author: '미듬',
    tag: ['JavaScript', '자바스크립트'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩160,000', price: '₩96,000' },
      '무제한 수강': { originalPrice: '₩190,000', price: '₩135,000' },
    }
  },
  {
    id: 3,
    title: 'Figma로 UX/UI 디자인 실무 배우기',
    mainCategory: 'IT·디지털',
    subCategory: '디자인/3D',
    level: '초급',
    duration: '60일',
    discount: '30%',
    price: '₩77,000',
    originalPrice: '₩110,000',
    image: '/course/course_it_09.jpg',
    detailImage: '/course/course_it_09_2.jpg',
    desc: 'Figma를 활용한 UX/UI 디자인 실무 프로젝트를 통해 실력을 쌓아보자',
    author: '서하늘',
    tag: ['피그마', 'UX/UI', '디자인'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩140,000', price: '₩77,000' },
      '무제한 수강': { originalPrice: '₩170,000', price: '₩110,000' },
    }
  },
  {
    id: 4,
    title: 'Figma로 UX/UI 디자인 실무 배우기',
    mainCategory: 'IT·디지털',
    subCategory: '디자인/3D',
    level: '초급',
    duration: '60일',
    discount: '30%',
    price: '₩77,000',
    originalPrice: '₩110,000',
    image: '/course/course_it_09.jpg',
    detailImage: '/course/course_it_09_2.jpg',
    desc: 'Figma를 활용한 UX/UI 디자인 실무 프로젝트를 통해 실력을 쌓아보자.',
    author: '서하늘',
    tag: ['피그마', 'UX/UI', '디자인'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩140,000', price: '₩77,000' },
      '무제한 수강': { originalPrice: '₩170,000', price: '₩110,000' },
    }
  },
  {
    id: 5,
    title: '영상 편집 기초부터 프리미어 프로 마스터',
    mainCategory: 'IT·디지털',
    subCategory: '사진/영상',
    level: '초급',
    duration: '70일',
    discount: '28%',
    price: '₩94,000',
    originalPrice: '₩130,000',
    image: '/course/course_it_07.jpg',
    detailImage: '/course/course_it_07_2.jpg',
    desc: '프리미어 프로를 이용한 영상 편집 기초부터 실전까지 한 번에 마스터.',
    author: '이하린',
    tag: ['프리미어프로', '영상편집'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩155,000', price: '₩94,000' },
      '무제한 수강': { originalPrice: '₩190,000', price: '₩130,000' },
    }
  },
  {
    id: 6,
    title: '영상 편집 기초부터 프리미어 프로 마스터',
    mainCategory: 'IT·디지털',
    subCategory: '사진/영상',
    level: '초급',
    duration: '70일',
    discount: '28%',
    price: '₩94,000',
    originalPrice: '₩130,000',
    image: '/course/course_it_07.jpg',
    detailImage: '/course/course_it_07_2.jpg',
    desc: '프리미어 프로를 이용한 영상 편집 기초부터 실전까지 한 번에 마스터.',
    author: '이하린',
    tag: ['프리미어프로', '영상편집'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩145,000', price: '₩94,000' },
      '무제한 수강': { originalPrice: '₩185,000', price: '₩130,000' },
    }
  },
  {
    id: 7,
    title: 'AI 시대를 위한 GPT 기초와 실습',
    mainCategory: 'IT·디지털',
    subCategory: 'AI·인공지능',
    level: '입문',
    duration: '90일',
    discount: '40%',
    price: '₩78,000',
    originalPrice: '₩130,000',
    image: '/course/course_it_08.jpg',
    detailImage: '/course/course_it_08_2.jpg',
    desc: 'GPT와 챗지피티의 기본 원리부터 실습까지 실전 활용법 배우기.',
    author: '김성은',
    tag: ['AI', 'GPT', '챗지피티'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩160,000', price: '₩78,000' },
      '무제한 수강': { originalPrice: '₩190,000', price: '₩135,000' },
    }
  },
  {
    id: 8,
    title: 'AI 시대를 위한 GPT 기초와 실습',
    mainCategory: 'IT·디지털',
    subCategory: 'AI·인공지능',
    level: '입문',
    duration: '90일',
    discount: '40%',
    price: '₩78,000',
    originalPrice: '₩130,000',
    image: '/course/course_it_08.jpg',
    detailImage: '/course/course_it_08_2.jpg',
    desc: 'GPT와 챗지피티의 기본 원리부터 실습까지 실전 활용법을 배우기',
    author: '김성은',
    tag: ['AI', 'GPT', '챗지피티'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩160,000', price: '₩78,000' },
      '무제한 수강': { originalPrice: '₩190,000', price: '₩135,000' },
    }
  },

  // [비즈니스·경제]

    // 마케팅 입문
  {
    id: 9,
    title: '처음 시작하는 마케팅 입문',
    mainCategory: '비즈니스·경제',
    subCategory: '마케팅 입문',
    level: '입문',
    duration: '60일',
    discount: '20%',
    price: '₩76,000',
    originalPrice: '₩95,000',
    image: '/course/course_bn_01.jpg',
    detailImage: '/course/course_bn_01_2.jpg',
    desc: '마케팅의 기본 개념부터 실습까지 처음 시작하는 분들을 위한 강의',
    author: '이은지',
    tag: ['마케팅', 'SNS'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩110,000', price: '₩76,000' },
      '무제한 수강': { originalPrice: '₩140,000', price: '₩105,000' }
    }
  },
  {
    id: 10,
    title: '처음 시작하는 마케팅 입문',
    mainCategory: '비즈니스·경제',
    subCategory: '마케팅 입문',
    level: '입문',
    duration: '60일',
    discount: '20%',
    price: '₩76,000',
    originalPrice: '₩95,000',
    image: '/course/course_bn_01.jpg',
    detailImage: '/course/course_bn_01_2.jpg',
    desc: '마케팅의 기본 개념부터 실습까지 처음 시작하는 분들을 위한 강의',
    author: '이은지',
    tag: ['마케팅', 'SNS'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩110,000', price: '₩76,000' },
      '무제한 수강': { originalPrice: '₩140,000', price: '₩105,000' }
    }
  },
  {
    id: 11,
    title: '성장하는 기업의 경영 전략',
    mainCategory: '비즈니스·경제',
    subCategory: '경영 전략',
    level: '중급',
    duration: '70일',
    discount: '25%',
    price: '₩90,000',
    originalPrice: '₩120,000',
    image: '/course/course_bn_02.jpg',
    detailImage: '/course/course_bn_02_2.jpg',
    desc: '기업의 성장 전략과 비즈니스 모델 수립에 필요한 실전 전략 강의.',
    author: '김태경',
    tag: ['경영', 'CEO'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩130,000', price: '₩90,000' },
      '무제한 수강': { originalPrice: '₩160,000', price: '₩120,000' }
    }
  },
  {
    id: 12,
    title: '성장하는 기업의 경영 전략',
    mainCategory: '비즈니스·경제',
    subCategory: '경영 전략',
    level: '중급',
    duration: '70일',
    discount: '25%',
    price: '₩90,000',
    originalPrice: '₩120,000',
    image: '/course/course_bn_02.jpg',
    detailImage: '/course/course_bn_02_2.jpg',
    desc: '기업의 성장 전략과 비즈니스 모델 수립에 필요한 실전 전략 강의.',
    author: '김태경',
    tag: ['경영', 'CEO'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩130,000', price: '₩90,000' },
      '무제한 수강': { originalPrice: '₩160,000', price: '₩120,000' }
    }
  },
  {
    id: 13,
    title: '한 번에 이해하는 파이낸스 기초',
    mainCategory: '비즈니스·경제',
    subCategory: '파이낸스 기초',
    level: '입문',
    duration: '50일',
    discount: '30%',
    price: '₩63,000',
    originalPrice: '₩90,000',
    image: '/course/course_bn_02.jpg',
    detailImage: '/course/course_bn_02_2.jpg',
    desc: '재무제표와 자산 관리의 기본을 배울 수 있는 파이낸스 입문 강의',
    author: '신다혜',
    tag: ['파이낸스'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩100,000', price: '₩63,000' },
      '무제한 수강': { originalPrice: '₩130,000', price: '₩95,000' }
    }
  },
  {
    id: 14,
    title: '한 번에 이해하는 파이낸스 기초',
    mainCategory: '비즈니스·경제',
    subCategory: '파이낸스 기초',
    level: '입문',
    duration: '50일',
    discount: '30%',
    price: '₩63,000',
    originalPrice: '₩90,000',
    image: '/course/course_bn_02.jpg',
    detailImage: '/course/course_bn_02_2.jpg',
    desc: '재무제표와 자산 관리의 기본을 배울 수 있는 파이낸스 입문 강의',
    author: '신다혜',
    tag: ['파이낸스'],
    info: { level: '초급', day: '35일' },
     options: {
      '1년 수강': { originalPrice: '₩100,000', price: '₩63,000' },
      '무제한 수강': { originalPrice: '₩130,000', price: '₩95,000' }
    }
  },
  {
    id: 15,
    title: '창업 전략: 아이디어부터 비즈니스 모델까지',
    mainCategory: '비즈니스·경제',
    subCategory: '창업 전략',
    level: '고급',
    duration: '90일',
    discount: '35%',
    price: '₩117,000',
    originalPrice: '₩180,000',
    image: '/course/course_bn_04.jpg',
    detailImage: '/course/course_bn_04_2.jpg',
    desc: '창업 아이디어 발굴부터 수익 모델 설계까지 전 과정을 다루는 실전 강의.',
    author: '배도현',
    tag: ['창업', '아이디어'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩180,000', price: '₩117,000' },
      '무제한 수강': { originalPrice: '₩220,000', price: '₩150,000' }
    }
  },
  {
    id: 16,
    title: '창업 전략: 아이디어부터 비즈니스 모델까지',
    mainCategory: '비즈니스·경제',
    subCategory: '창업 전략',
    level: '고급',
    duration: '90일',
    discount: '35%',
    price: '₩117,000',
    originalPrice: '₩180,000',
    image: '/course/course_bn_04.jpg',
    detailImage: '/course/course_bn_04_2.jpg',
    desc: '창업 아이디어 발굴부터 수익 모델 설계까지 전 과정을 다루는 실전 강의.',
    author: '배도현',
    tag: ['창업', '아이디어'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩180,000', price: '₩117,000' },
      '무제한 수강': { originalPrice: '₩220,000', price: '₩150,000' }
    }
  },
  // [생활·실무]
  {
    id: 17,
    title: '쉽게 따라하는 컴퓨터 활용능력',
    mainCategory: '생활·실무',
    subCategory: '컴퓨터 활용능력',
    level: '초급',
    duration: '60일',
    discount: '20%',
    price: '₩68,000',
    originalPrice: '₩85,000',
    image: '/course/course_life_01.jpg',
    detailImage: '/course/course_life_01_2.jpg',
    author: '최예진',
    tag: ['컴퓨터', '컴퓨터활용'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩85,000', price: '₩68,000' },
      '무제한 수강': { originalPrice: '₩110,000', price: '₩89,000' }
    }
  },
  {
    id: 18,
    title: '쉽게 따라하는 컴퓨터 활용능력',
    mainCategory: '생활·실무',
    subCategory: '컴퓨터 활용능력',
    level: '초급',
    duration: '60일',
    discount: '20%',
    price: '₩68,000',
    originalPrice: '₩85,000',
    image: '/course/course_life_01.jpg',
    detailImage: '/course/course_life_01_2.jpg',
    author: '최예진',
    tag: ['컴퓨터', '컴퓨터활용'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩85,000', price: '₩68,000' },
      '무제한 수강': { originalPrice: '₩110,000', price: '₩89,000' }
    }
  },
    // 자격증 준비
  {
    id: 19,
    title: '한 달 만에 국가공인 자격증 따기',
    mainCategory: '생활·실무',
    subCategory: '자격증 준비',
    level: '입문',
    duration: '30일',
    discount: '25%',
    price: '₩45,000',
    originalPrice: '₩60,000',
    image: '/course/course_life_01.jpg',
    detailImage: '/course/course_life_01_2.jpg',
    author: '홍재호',
    tag: ['자격증', '국가공인자격증'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩60,000', price: '₩45,000' },
      '무제한 수강': { originalPrice: '₩80,000', price: '₩59,000' }
    }
  },
  {
    id: 20,
    title: '한 달 만에 국가공인 자격증 따기',
    mainCategory: '생활·실무',
    subCategory: '자격증 준비',
    level: '입문',
    duration: '30일',
    discount: '25%',
    price: '₩45,000',
    originalPrice: '₩60,000',
    image: '/course/course_life_01.jpg',
    detailImage: '/course/course_life_01_2.jpg',
    author: '홍재호',
    tag: ['자격증', '국가공인자격증'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩60,000', price: '₩45,000' },
      '무제한 수강': { originalPrice: '₩80,000', price: '₩59,000' }
    }
 
  },
    // 실무 문서 작성법
  {
    id: 21,
    title: '실무에 바로 쓰는 문서 작성법',
    mainCategory: '생활·실무',
    subCategory: '실무 문서 작성법',
    level: '중급',
    duration: '40일',
    discount: '30%',
    price: '₩56,000',
    originalPrice: '₩80,000',
    image: '/course/course_life_01.jpg',
    detailImage: '/course/course_life_01_2.jpg',
    author: '장윤서',
    tag: ['문서작성', '실무'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩80,000', price: '₩56,000' },
      '무제한 수강': { originalPrice: '₩110,000', price: '₩85,000' }
    }

  },
  {
    id: 22,
    title: '실무에 바로 쓰는 문서 작성법',
    mainCategory: '생활·실무',
    subCategory: '실무 문서 작성법',
    level: '중급',
    duration: '40일',
    discount: '30%',
    price: '₩56,000',
    originalPrice: '₩80,000',
    image: '/course/course_life_01.jpg',
    detailImage: '/course/course_life_01_2.jpg',
    author: '장윤서',
    tag: ['문서작성', '실무'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩80,000', price: '₩56,000' },
      '무제한 수강': { originalPrice: '₩105,000', price: '₩78,000' }
    }

  },
    // 업무 자동화
  {
    id: 23,
    title: '엑셀과 구글 스프레드시트 업무 자동화',
    mainCategory: '생활·실무',
    subCategory: '업무 자동화',
    level: '초급',
    duration: '45일',
    discount: '32%',
    price: '₩61,000',
    originalPrice: '₩90,000',
    image: '/course/course_life_01.jpg',
    detailImage: '/course/course_life_01_2.jpg',
    author: '권도윤',
    tag: ['엑셀', '구글',],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩90,000', price: '₩61,000' },
      '무제한 수강': { originalPrice: '₩120,000', price: '₩84,000' }
    }

  },
  {
    id: 24,
    title: '엑셀과 구글 스프레드시트 업무 자동화',
    mainCategory: '생활·실무',
    subCategory: '업무 자동화',
    level: '초급',
    duration: '45일',
    discount: '32%',
    price: '₩61,000',
    originalPrice: '₩90,000',
    image: '/course/course_life_01.jpg',
    detailImage: '/course/course_life_01_2.jpg',
    author: '권도윤',
    tag: ['엑셀', '구글',],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩90,000', price: '₩61,000' },
      '무제한 수강': { originalPrice: '₩120,000', price: '₩84,000' }
    }

  },

  // [예술·교양]
    // 글쓰기
  {
    id: 25,
    title: '마음을 움직이는 글쓰기',
    mainCategory: '예술·교양',
    subCategory: '글쓰기',
    level: '중급',
    duration: '50일',
    discount: '30%',
    price: '₩63,000',
    originalPrice: '₩90,000',
    image: '/course/course_art_01.jpg',
    detailImage: '/course/course_art_01_2.jpg',
    author: '하정우',
    tag: ['글쓰기', '작문'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩90,000', price: '₩63,000' },
      '무제한 수강': { originalPrice: '₩115,000', price: '₩81,000' }
    }
  },
  {
    id: 26,
    title: '마음을 움직이는 글쓰기',
    mainCategory: '예술·교양',
    subCategory: '글쓰기',
    level: '중급',
    duration: '50일',
    discount: '30%',
    price: '₩63,000',
    originalPrice: '₩90,000',
    image: '/course/course_art_01.jpg',
    detailImage: '/course/course_art_01_2.jpg',
    author: '하정우',
    tag: ['글쓰기', '작문'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩90,000', price: '₩63,000' },
      '무제한 수강': { originalPrice: '₩115,000', price: '₩81,000' }
    }

  },
    // 캘리그라피
  {
    id: 27,
    title: '감성 가득 캘리그라피 클래스',
    mainCategory: '예술·교양',
    subCategory: '캘리그라피',
    level: '입문',
    duration: '30일',
    discount: '25%',
    price: '₩45,000',
    originalPrice: '₩60,000',
    image: '/course/course_art_01.jpg',
    detailImage: '/course/course_art_01_2.jpg',
    author: '문유정',
    tag: ['캘리그라피', '글씨'],
    info: { level: '초급', day: '35일' },
    options: {
      '1년 수강': { originalPrice: '₩60,000', price: '₩45,000' },
      '무제한 수강': { originalPrice: '₩85,000', price: '₩62,000' }
    }

  },
  {
    id: 28,
    title: '감성 가득 캘리그라피 클래스',
    mainCategory: '예술·교양',
    subCategory: '캘리그라피',
    level: '입문',
    duration: '30일',
    discount: '25%',
    price: '₩45,000',
    originalPrice: '₩60,000',
    image: '/course/course_art_01.jpg',
    detailImage: '/course/course_art_01_2.jpg',
    author: '문유정',
    tag: ['캘리그라피', '글씨'],
    info: { level: '초급', day: '35일' },
     options: {
      '1년 수강': { originalPrice: '₩60,000', price: '₩45,000' },
      '무제한 수강': { originalPrice: '₩85,000', price: '₩62,000' }
    }

  },
    // 음악
  {
    id: 29,
    title: '작곡가와 함께하는 음악 기초 이론',
    mainCategory: '예술·교양',
    subCategory: '음악',
    level: '초급',
    duration: '40일',
    discount: '20%',
    price: '₩56,000',
    originalPrice: '₩70,000',
    image: '/course/course_art_01.jpg',
    detailImage: '/course/course_art_01_2.jpg',
    author: '이건우',
    tag: ['음악', '작곡'],
    info: { level: '초급', day: '35일' },
     options: {
      '1년 수강': { originalPrice: '₩70,000', price: '₩56,000' },
      '무제한 수강': { originalPrice: '₩95,000', price: '₩73,000' }
    }

  },
  {
    id: 30,
    title: '작곡가와 함께하는 음악 기초 이론',
    mainCategory: '예술·교양',
    subCategory: '음악',
    level: '초급',
    duration: '40일',
    discount: '20%',
    price: '₩56,000',
    originalPrice: '₩70,000',
    image: '/course/course_art_01.jpg',
    detailImage: '/course/course_art_01_2.jpg',
    author: '이건우',
    tag: ['음악', '작곡'],
    info: { level: '초급', day: '35일' },
     options: {
      '1년 수강': { originalPrice: '₩70,000', price: '₩56,000' },
      '무제한 수강': { originalPrice: '₩95,000', price: '₩73,000' }
    }

  },
    // 타로/사주
  {
    id: 31,
    title: '실전 타로 & 사주 리딩 입문',
    mainCategory: '예술·교양',
    subCategory: '타로/사주',
    level: '입문',
    duration: '60일',
    discount: '35%',
    price: '₩58,000',
    originalPrice: '₩89,000',
    image: '/course/course_art_01.jpg',
    detailImage: '/course/course_art_01_2.jpg',
    author: '윤아름',
    tag: ['타로', '사주'],
    info: { level: '초급', day: '35일' },
     options: {
      '1년 수강': { originalPrice: '₩89,000', price: '₩58,000' },
      '무제한 수강': { originalPrice: '₩120,000', price: '₩82,000' }
    }

  },
  {
    id: 32,
    title: '실전 타로 & 사주 리딩 입문',
    mainCategory: '예술·교양',
    subCategory: '타로/사주',
    level: '입문',
    duration: '60일',
    discount: '35%',
    price: '₩58,000',
    originalPrice: '₩89,000',
    image: '/course/course_art_01.jpg',
    detailImage: '/course/course_art_01_2.jpg',
    author: '윤아름',
    tag: ['타로', '사주'],
    info: { level: '초급', day: '35일' },
     options: {
      '1년 수강': { originalPrice: '₩89,000', price: '₩58,000' },
      '무제한 수강': { originalPrice: '₩119,000', price: '₩82,000' }
    }

  },
];


const allCourse = [
  ...homeCourses,
  ...dummyCourses,
];

export { dummyCourses, allCourse as allCourses };