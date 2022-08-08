import Link from "next/link";

export default function HomeIntroduce() {
  return(
    <>
      <h1 className="title-font sm:text-4xl text-3xl my-4 font-medium text-gray-900">
        풋내기 FE Developer 김종현의
        <br className="lg:inline-block"/>
        포트폴리오에 오신 것을 환영합니다!
      </h1>
      <div className="mb-8 leading-relaxed">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1 inline" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg> 
        <span>대학교 : 13.03 ~ 17.02</span>
        <p>한국외대 LD학부 사회과학 전공 졸업</p>
        <p>한국외대 미디어커뮤니케이션학부 방송영상 이중전공 졸업</p>
        <br className="lg:inline-block"/>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <span>군복무 : 18.06 ~ 21.05</span>
        <p>대한민국 공군 장교(중위) 전역</p>
        <br className="lg:inline-block"/>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg> 교육 : 21.07 ~ 22.06
        <p>삼성청년소프트웨어아카데미(SSAFY) 비전공자반 수료</p>
        <p>2개의 웹 프로젝트 / 1개의 모바일 프로젝트 완료</p>
        <br className="lg:inline-block"/>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>경력 : 22.08 ~ 현재</span>
        <p>FE Developer in Moglet</p>
      </div>
      <div className="flex justify-center">
        <Link href='/projects'>
          <a className="btn-project">
            프로젝트 보러가기
          </a>
        </Link>
      </div>

    </>
  )
}