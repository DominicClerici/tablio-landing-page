import Link from "next/link"
import Arrow from "./svgs/Arrow"

const Footer = () => {
  return (
    <footer className="xs:px-8 bg-liveDemo px-4 pb-12 pt-6 sm:px-12 sm:pt-12 md:px-20 lg:px-28 xl:px-40">
      <div className="mx-auto grid max-w-screen-lg auto-rows-auto grid-cols-2 gap-2 sm:grid-cols-4">
        <div className="col-span-2 mb-4 flex items-center gap-1 text-lg text-black/80 sm:mb-0">
          Made with ❤️ by
          <a
            className="group flex items-center gap-1 font-semibold underline transition-colors duration-75 hover:text-teal-500"
            href="https://www.dominicclerici.com"
            target="_blank"
          >
            Dominic Clerici
            <Arrow />
          </a>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Pages</h2>
          <ul className="text-black/70">
            <Link className="hover:text-black" href="/">
              <li className="group flex items-center gap-1 transition-colors duration-75 hover:text-teal-500">
                Home <Arrow />
              </li>
            </Link>
            <Link className="hover:text-black" href="/privacy">
              <li className="group flex items-center gap-1 transition-colors duration-75 hover:text-teal-500">
                Privacy policy <Arrow />
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">More</h2>
          <ul className="text-black/70">
            <a className="hover:text-black" href="https://www.dominicclerici.com" target="_blank">
              <li className="group flex items-center gap-1 transition-colors duration-75 hover:text-teal-500">
                Portfolio <Arrow />
              </li>
            </a>
            <a className="">
              <li>More coming soon...</li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
