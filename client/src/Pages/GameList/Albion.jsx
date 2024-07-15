import { useState } from 'react';

import GoldGameList from '../../Elements/GameList/GoldGameList';
import SilverGameList from '../../Elements/GameList/SilverGameList';
import AccountGameList from '../../Elements/GameList/AccountGameList';
import ServiceGameList from '../../Elements/GameList/ServiceGameList';

const goldAds = [
  {
    id: 1,
    text: 'Продам голду в альбионе, дешево, самое дешевое предложение на рынке, покупайте не пожалеете. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    username: 'JohnDoe2007',
    rating: 4.8,
    price: 49,
  },
  {
    id: 2,
    text: 'Продам голду в альбионе, дешево, самое дешевое предложение на рынке, покупайте не пожалеете. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    username: 'MarySmith333',
    rating: 5,
    price: 70,
  },
];

const silverAds = [
  {
    id: 1,
    text: 'Продам серебро в альбионе, дешево, самое дешевое предложение на рынке, покупайте не пожалеете. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    username: 'JohnSmith2208',
    rating: 5,
    price: 29,
  },
  {
    id: 2,
    text: 'Продам серебро в альбионе, дешево, самое дешевое предложение на рынке, покупайте не пожалеете. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    username: 'SarahJohnson1448',
    rating: 2,
    price: 45,
  },
];

const accountAds = [
  {
    id: 1,
    text: 'Продаю аккаунт. 1 LVL полный фрш. Цена бомба. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    username: 'MichaelWilson',
    rating: 3.5,
    price: 450,
  },
  {
    id: 2,
    text: 'Продаю аккаунт. 10 LVL полный фрш. Цена бомба. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    username: 'EmilyDavis',
    rating: 1.5,
    price: 350,
  },
];

const serviceAds = [
  {
    id: 1,
    text: 'Почищю акк от ненужного мусора а так же выставлю настройки как у симпла, нагиб жесткий без смс и регистрации Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    username: 'JamesThompson',
    rating: 2,
    price: 10,
  },
  {
    id: 2,
    text: 'Почищю акк от ненужного мусора а так же выставлю настройки как у симпла, нагиб жесткий без смс и регистрации Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    username: 'SophiaRobinson',
    rating: 4,
    price: 5,
  },
];

export default function Albion() {
  const [activeTab, setActiveTab] = useState('gold');

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <>
      <div className='container mx-auto mt-24'>
        <h1 className='text-7xl text-center font-bold text-primary pb-6'>Albion</h1>
        <hr className='w-4/5 mx-auto my-5 border-b-4 border-primary' />
        <ul className="flex justify-between list-none w-4/5 mx-auto">
          <li
            className={`items-center cursor-pointer p-6 rounded-md ${
              activeTab === 'gold' ? 'bg-back' : ''
            }`}
            onClick={() => handleTabClick('gold')}
          >
            <img src="GameList/gold-icon.svg" alt="Gold" />
          </li>
          <li
            className={`items-center cursor-pointer p-6 rounded-md ${
              activeTab === 'silver' ? 'bg-back' : ''
            }`}
            onClick={() => handleTabClick('silver')}
          >
            <img src="GameList/silver-icon.svg" alt="Silver" />
          </li>
          <li
            className={`items-center cursor-pointer p-6 rounded-md ${
              activeTab === 'account' ? 'bg-back' : ''
            }`}
            onClick={() => handleTabClick('account')}
          >
            <img src="GameList/account-icon.svg" alt="Account" />
          </li>
          <li
            className={`items-center cursor-pointer p-6 rounded-md ${
              activeTab === 'service' ? 'bg-back' : ''
            }`}
            onClick={() => handleTabClick('service')}
          >
            <img src="GameList/service-icon.svg" alt="Service" />
          </li>
        </ul>
        <div className='flex justify-end'>
          <a href="/CreateAdd" className="bg-primary px-8 py-2 text-lg my-6 rounded-md text-white">Создать</a>
        </div>
        {activeTab === 'gold' && <GoldGameList goldAds={goldAds} />}
        {activeTab === 'silver' && <SilverGameList silverAds={silverAds} />}
        {activeTab === 'account' && <AccountGameList accountAds={accountAds} />}
        {activeTab === 'service' && <ServiceGameList serviceAds={serviceAds} />}
      </div>
    </>
  );
}
