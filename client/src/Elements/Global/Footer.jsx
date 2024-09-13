import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";



export default function Header() {

    return (
      <>
      <footer className="w-full bg-back">
        <ul className="flex flex-col xs:flex-row justify-between w-full pl-6 pr-5 py-10 text-center">
          <li className="w-2/3 flex items-center">
            <a className="flex items-center" href="/">
              <h1 className="text-base xs:text-xl sm:text-3xl font-semibold font-serif">ИгроваяЛавка</h1>
            </a>
          </li>
          <li className="flex justify-end xs:items-center text-xs sm:text-sm font-medium"><a href="/Example">Политика конфиденциальности</a></li>
          <li className="flex justify-end xs:items-center text-xs sm:text-sm font-medium py-3 xs:py-0"><a href="/Example">Написать в поддержку</a></li>
          <li className="flex justify-end xs:items-center text-xs sm:text-sm font-medium"><a href="/Example">Связь с разработчиками</a></li>
        </ul>
        <ul className="flex pl-6 pr-5 py-3 text-center">
          <li className="flex items-center"><a href="/"><FaFacebook /></a></li>
          <li className="flex items-center px-5"><a href="/"><FaSquareInstagram /></a></li>
          <li className="flex items-center"><a href="/"><FaSquareXTwitter /></a></li>
        </ul>
      </footer>
      </>
    );
}