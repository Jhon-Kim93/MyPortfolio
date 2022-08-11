export default function ContactMe () {
  let isOpen = false
  const dropdownToggle = () => {
    isOpen = !isOpen
  }

  return (
    <div className="relative">
      <button onClick={dropdownToggle} className="relative z-10 hover:text-gray-900">Contact me</button>
      {/* <button onClick={isOpen = false} tabIndex="-1" className={`${isOpen ? "block" : "hidden"} fixed inset-0 h-full w-full bg-dark-600/50 cursor-default`}></button> */}
      <div id='dropdown' className={`${isOpen ? "block" : "hidden"} absolute right-0 py-2 w-48 mt-2 bg-white-300 dark:bg-slate-600 rounded-lg shadow-xl`}>
        <a href="https://open.kakao.com/o/sTrnONte" className="block pr-4 py-1 mr-5 hover:text-gray-900">kakao</a>
        <a
          href="https://vast-blouse-d8e.notion.site/FE-Developer-9809ac8996e84d9e9e86626239c102e2"
          className="block pr-4 py-1 mr-5 hover:text-gray-900"
        >notion</a>
        <a href="https://github.com/John-Kim93" className="block pr-4 py-1 mr-5 hover:text-gray-900">github</a>
        <a href="https://www.instagram.com/john_kim_9312/" className="block pr-4 py-1 mr-5 hover:text-gray-900">instagram</a>
      </div>
    </div>
  )
}