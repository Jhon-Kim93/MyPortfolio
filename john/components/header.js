import Link from 'next/link'
import Image from 'next/image'
import DarkModeBtn from './dark_mode_btn'

export default function Header() {
  let isOpen = false
  const dropdownToggle = () => {
    isOpen = !isOpen
  }

  return(
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href='/'>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image
                src='/profile.jpg'
                alt='profile doggie'
                width={50}
                height={50}
              />
              <span className="ml-3 text-3xl font-bold">John's Portfolio</span>
            </a>
          </Link>
          <nav className="relative md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">home</a>
            </Link>
            <Link href="/projects">
              <a className="mr-5 hover:text-gray-900">projects</a>
            </Link>
            <button onClick={isOpen = false} tabIndex="-1" className={`display:${isOpen ? "inline" : "none"} fixed inset-0 h-full w-full bg-dark-600/50 cursor-default`}></button>
            <div onClick={dropdownToggle} className="relative z-10 hover:text-gray-900">Contact me</div>
            <div id='dropdown' className={`display:${isOpen ? "inline" : "none"} absolute right-0 py-2 w-48 mt-2 bg-white-300 dark:bg-slate-600 rounded-lg shadow-xl`}>
              <a href="https://open.kakao.com/o/sTrnONte" className="block px-4 py-1 mr-5 hover:text-gray-900">kakao | </a>
              <a
                href="https://vast-blouse-d8e.notion.site/FE-Developer-9809ac8996e84d9e9e86626239c102e2"
                className="block px-4 py-1 mr-5 hover:text-gray-900"
              >notion | </a>
              <a href="https://github.com/John-Kim93" className="block px-4 py-1 mr-5 hover:text-gray-900">github | </a>
              <a href="https://www.instagram.com/john_kim_9312/" className="block px-4 py-1 mr-5 hover:text-gray-900">instagram</a>
            </div>
          </nav>
          <DarkModeBtn/>
        </div>
      </header>
    </>
  )
}