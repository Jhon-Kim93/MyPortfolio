import Link from "next/link";

export default function HomeIntroduce() {
  return(
    <>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        안녕하세요. 프론트엔드 개발자 김종현입니다!
        <br className="lg:inline-block"/>
        제 포트폴리오를 소개합니다!
      </h1>
      <p className="mb-8 leading-relaxed">간단 이력 소개</p>
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