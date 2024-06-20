import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Home from  "../../Pages/Home.jsx";
import Example from "../../Pages/Example.jsx";



export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


    return (
      <>
      <header className="w-full">
        <ul className="flex justify-between w-full pl-3 pr-5">
          <li className="w-1/3 flex items-center">
            <a className="flex items-center" href="/">
              <img src="logo.svg" alt="" />
              <h1 className="text-3xl font-semibold font-serif">ИгроваяЛавка</h1>
            </a>
          </li>
          <li className="flex items-center"><a href="/Example">Все игры</a></li>
          <li className="flex items-center"><a href="/Example">Мини-Игры</a></li>
          <li className="flex items-center"><a href="/Example">Форум</a></li>
          <li className="flex items-center"><a href="/Example">Чат</a></li>
          <li className="relative flex items-center">
            <button
              className="bg-primary px-4 py-2 rounded-md text-white"
              onClick={toggleMenu}
            >
              Личный кабинет
            </button>
            {isOpen && (
              <ul className="absolute top-full right-0 shadow-md rounded-md p-4 w-60">
                <li className="flex items-center"><a href="/"><img className="w-5 inline-block mx-1" src="icon-profile.svg" alt="" />Профиль</a></li>
                <li className="flex items-center"><a href="/"><img className="w-5 inline-block mx-1" src="icon-profile.svg" alt="" />Баланс</a></li>
                <li className="flex items-center"><a href="/"><img className="w-5 inline-block mx-1" src="icon-profile.svg" alt="" />Ваши покупки</a></li>
                <li className="flex items-center"><a href="/"><img className="w-5 inline-block mx-1" src="icon-profile.svg" alt="" />Состоявшиеся продажи</a></li>
              </ul>
            )}
          </li>
        </ul>
      </header>
        <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Example' element={<Example />}/>
        </Routes>
        </Router>
      </>
    );
}