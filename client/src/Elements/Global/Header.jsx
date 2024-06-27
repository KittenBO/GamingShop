import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { PiMoney } from "react-icons/pi";
import { FaShoppingCart, FaHandshake } from 'react-icons/fa';
import CurrencyInput from 'react-currency-input-field';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToChat = () => {


    if (location.pathname === '/') {
      // Если мы находимся на странице Home, то просто прокручиваем к элементу #chatHome
      const chatElement = document.getElementById('chatHome');
      if (chatElement) {
        chatElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Если мы находимся на другой странице, то сначала переходим на страницу Home,
      // а затем прокручиваем к элементу #chatHome
      navigate('/');
      setTimeout(() => {
        const chatElement = document.getElementById('chatHome');
        if (chatElement) {
          chatElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Задержка в 500 мс, чтобы дать время на переход на страницу Home
    }
  };



  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="w-full">
        <ul className="flex justify-between w-full pl-3 pt-3 pr-5">
          <li className="w-1/3 flex items-center">
            <a className="flex items-center" href="/">
              <img className="w-1/5 pr-3" src="logo.svg" alt="" />
              <h1 className="text-3xl font-semibold font-serif">ИгроваяЛавка</h1>
            </a>
          </li>
          <li className="flex items-center"><a href="/Games">Все игры</a></li>
          <li className="flex items-center"><a href="/Example">Мини-Игры</a></li>
          <li className="flex items-center"><a href="/Example">Форум</a></li>
          <li className="flex items-center">
            <a onClick={scrollToChat}>Чат</a>
          </li>
          <li className="relative flex items-center">
            <button
              className="bg-primary px-4 py-2 rounded-md text-white"
              onClick={toggleMenu}
            >
              Личный кабинет
            </button>
            {isOpen && (
              <ul className="absolute text-sm -mt-4 bg-grayBack top-full right-0 shadow-md rounded-md p-4 w-60">
                <li className="flex items-center">
                  <a href="/Login">
                    <CgProfile className='inline-block mx-1' />
                    Профиль
                  </a>
                </li>
                <li className="border-t border-grayProfile my-1"></li>
                <li className="flex items-center">
                  <a href="/Finance">
                    <PiMoney className='inline-block mx-1' />
                    <span>Баланс</span><span className='font-medium mx-2'>24 руб.</span>
                  </a>
                  <button
                    className="bg-primary px-2 py-1 text-xs rounded text-white"
                    onClick={toggleModal}
                  >
                    Пополнить
                  </button>
                </li>
                <li className="border-t border-grayProfile my-1"></li>
                <li className="flex items-center">
                  <a href="/">
                    <FaShoppingCart className='inline-block mx-1' />
                    Ваши покупки
                  </a>
                </li>
                <li className="border-t border-grayProfile my-1"></li>
                <li className="flex items-center">
                  <a href="/">
                    <FaHandshake className='inline-block mx-1' />
                    Состоявшиеся продажи
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-black">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6 mt-8 text-center">
              <img className="mx-auto w-1/4" src="logo.svg" alt="" />
              <h1 className="text-3xl font-semibold font-serif">ИгроваяЛавка</h1>
            </div>
            <form>
              <label htmlFor="amount" className="block mb-2">
                Сумма:
              </label>
              <CurrencyInput
                id="amount"
                name="amount"
                className="border rounded px-3 py-2 mb-4 w-full"
                placeholder="Введите сумму"
                decimalSeparator=","
                groupSeparator=" "
                suffix=" руб."
                allowNegativeValue={false}
                onValueChange={(value) => console.log(value)}
                style={{
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  MozAppearance: 'textfield',
                }}
              />
              <div className="flex justify-end">
                <button
                  className="bg-primary px-4 py-2 rounded-md text-white mr-2"
                  onClick={toggleModal}
                >
                  Пополнить
                </button>
                <button
                  className="bg-gray-300 px-4 py-2 rounded-md text-gray-600"
                  onClick={toggleModal}
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
