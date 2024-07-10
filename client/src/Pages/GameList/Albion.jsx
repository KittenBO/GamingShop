import { useState } from 'react';

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
          <a href="/Example" className="bg-primary px-8 py-2 text-lg my-6 rounded-md text-white">Создать</a>
        </div>
        {activeTab === 'gold' && (
          <div className="w-full my-6">
            {goldAds.map((ad) => (
              <div key={ad.id} className="flex items-center border-b-2 border-grayProfile py-5">
                <div className="w-2/3 pl-5">
                  <p className="text-xl">{ad.text}</p>
                </div>
                <div className="w-1/6 flex flex-col items-center">

                <img src={ad.avatar} alt={ad.username} className="w-16 h-16 rounded-full" />
                  <p className="text-sm">{ad.username}</p>
                  <div className="flex items-center">
                    {[...Array(Math.floor(ad.rating))].map((_, index) => (
                      <img key={index} src="GameList/star-icon.svg" alt="Star" className="w-5 h-5" />
                    ))}
                    {ad.rating % 1 !== 0 && (
                      <img src="GameList/half-star-icon.svg" alt="Half Star" className="w-5 h-5" />
                    )}
                  </div>
                  <p className='text-xs text-grayChat'>{ad.rating}</p>
                </div>
                <div className="w-1/6 text-right pr-6">
                  <p className="text-2xl font-bold">{ad.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'silver' && (
          <div className="w-full my-6">
            {silverAds.map((ad) => (
              <div key={ad.id} className="flex items-center border-b-2 border-grayProfile py-5">
                <div className="w-2/3 pl-5">
                  <p className="text-xl">{ad.text}</p>
                </div>
                <div className="w-1/6 flex flex-col items-center">
                  <img src={ad.avatar} alt={ad.username} className="w-16 h-16 rounded-full" />
                  <p className="text-sm">{ad.username}</p>
                  <div className="flex items-center">
                    {[...Array(Math.floor(ad.rating))].map((_, index) => (
                      <img key={index} src="GameList/star-icon.svg" alt="Star" className="w-5 h-5" />
                    ))}
                    {ad.rating % 1 !== 0 && (
                      <img src="GameList/half-star-icon.svg" alt="Half Star" className="w-5 h-5" />
                    )}
                  </div>
                  <p className='text-xs text-grayChat'>{ad.rating}</p>
                </div>
                <div className="w-1/6 text-right pr-6">
                  <p className="text-2xl font-bold">{ad.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'account' && (
          <div className="w-full my-6">
            {accountAds.map((ad) => (
              <div key={ad.id} className="flex items-center border-b-2 border-grayProfile py-5">
                <div className="w-2/3 pl-5">
                  <p className="text-xl">{ad.text}</p>
                </div>
                <div className="w-1/6 flex flex-col items-center">
                  <img src={ad.avatar} alt={ad.username} className="w-16 h-16 rounded-full" />
                  <p className="text-sm">{ad.username}</p>
                  <div className="flex items-center">
                    {[...Array(Math.floor(ad.rating))].map((_, index) => (
                      <img key={index} src="GameList/star-icon.svg" alt="Star" className="w-5 h-5" />
                    ))}
                    {ad.rating % 1 !== 0 && (
                      <img src="GameList/half-star-icon.svg" alt="Half Star" className="w-5 h-5" />
                    )}
                  </div>
                  <p className='text-xs text-grayChat'>{ad.rating}</p>
                </div>
                <div className="w-1/6 text-right pr-6">
                  <p className="text-2xl font-bold">{ad.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'service' && (
          <div className="w-full my-6">
            {serviceAds.map((ad) => (
              <div key={ad.id} className="flex items-center border-b-2 border-grayProfile py-5">
                <div className="w-2/3 pl-5">
                  <p className="text-xl">{ad.text}</p>
                </div>

                <div className="w-1/6 flex flex-col items-center">
                  <img src={ad.avatar} alt={ad.username} className="w-16 h-16 rounded-full" />
                  <p className="text-sm">{ad.username}</p>
                  <div className="flex items-center">
                    {[...Array(Math.floor(ad.rating))].map((_, index) => (
                      <img key={index} src="GameList/star-icon.svg" alt="Star" className="w-5 h-5" />
                    ))}
                    {ad.rating % 1 !== 0 && (
                      <img src="GameList/half-star-icon.svg" alt="Half Star" className="w-5 h-5" />
                    )}
                  </div>
                  <p className='text-xs text-grayChat'>{ad.rating}</p>
                </div>
                <div className="w-1/6 text-right pr-6">
                  <p className="text-2xl font-bold">{ad.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
