import { useState } from 'react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');

  function handleTabClick(tab) {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="w-3/5 mx-auto mt-10">
        <ul className="flex justify-between text-xl list-none">
          <li
            className={`items-center cursor-pointer ${
              activeTab === 'profile' ? 'font-bold' : ''
            }`}
            onClick={() => handleTabClick('profile')}
          >
            Профиль
          </li>
          <li className="border-r-2 px-4"></li>
          <li
            className={`items-center cursor-pointer ${
              activeTab === 'settings' ? 'font-bold' : ''
            }`}
            onClick={() => handleTabClick('settings')}
          >
            Настройки
          </li>
          <li className="border-r-2 px-4"></li>
          <li
            className={`items-center cursor-pointer ${
              activeTab === 'myProducts' ? 'font-bold' : ''
            }`}
            onClick={() => handleTabClick('myProducts')}
          >
            Мои товары
          </li>
          <li className="border-r-2 px-4"></li>
          <li
            className={`items-center cursor-pointer ${
              activeTab === 'reviews' ? 'font-bold' : ''
            }`}
            onClick={() => handleTabClick('reviews')}
          >
            Отзывы
          </li>
        </ul>
        <div className="w-full bg-back rounded my-28 flex items-center">
          <div className="w-2/3 pl-7 py-14 text-xl list-none">
            {activeTab === 'profile' && (
              <>
                <li><span className="font-semibold">Имя </span><span>Ванька</span></li>
                <li className="border-t-4 border-grayProfile my-6 mr-24"></li>
                <li><span className="font-semibold">Ник </span><span>IvanZolo2004</span></li>
                <li className="border-t-4 border-grayProfile my-6 mr-24"></li>
                <li><span className="font-semibold">E-mail </span><span>ivanzolo2004@yandex.ru</span></li>
                <li className="border-t-4 border-grayProfile my-6 mr-24"></li>
                <li><span className="font-semibold">Номер телефона </span><span>+7(800)555-35-35</span></li>
              </>
            )}
            {activeTab === 'settings' && (
              <li className="text-2xl font-bold">Настройки</li>
            )}
            {activeTab === 'myProducts' && (
              <li className="text-2xl font-bold">Мои товары</li>
            )}
            {activeTab === 'reviews' && (
              <li className="text-2xl font-bold">Отзывы</li>
            )}
          </div>
          <div className="w-1/3 flex justify-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt=""
              className="w-2/3 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
