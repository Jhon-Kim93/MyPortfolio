import Link from 'next/link'
import Image from 'next/image'
import DarkModeBtn from './dark_mode_btn'
import ContactMe from './contact_me'

export default function Header() {

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
            <ContactMe className="ml-4"/> 
          </nav>
          <DarkModeBtn/>
        </div>
      </header>
    </>
  )
}