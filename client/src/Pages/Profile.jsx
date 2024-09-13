import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ReviewList from '../Elements/EditAdd/ReviewList';

export default function Profile() {
  const gameAuthor = {
    avatar: 'https://via.placeholder.com/50',
    name: 'Иван06',
    rating: 4.5,
  };

  const reviews = [
    {
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      rating: 4.5,
      text: 'Ебать, купил аккаунт в ахуе от качества, спасибо, заебал. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      avatar: 'https://via.placeholder.com/50',
      name: 'Jane Smith',
      rating: 3.7,
      text: 'Ебать, купил аккаунт в ахуе от качества, спасибо, заебал. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      avatar: 'https://via.placeholder.com/50',
      name: 'Bob Johnson',
      rating: 4.2,
      text: 'Ебать, купил аккаунт в ахуе от качества, спасибо, заебал. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      avatar: 'https://via.placeholder.com/50',
      name: 'Samantha Lee',
      rating: 4.8,
      text: 'Ебать, купил аккаунт в ахуе от качества, спасибо, заебал. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      avatar: 'https://via.placeholder.com/50',
      name: 'Michael Chlen',
      rating: 3.9,
      text: 'Ебать, купил аккаунт в ахуе от качества, спасибо, заебал. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
  ];

  const [activeTab, setActiveTab] = useState('profile');

  function handleTabClick(tab) {
    setActiveTab(tab);
  };

  const navigate = useNavigate();
  

  return (
    <>
      <div className="w-3/5 mx-auto mt-10">
        <ul className="flex justify-between text-xs xs:text-sm sm:text-base md:text-xl lg:text-3xl text-center font-medium list-none">
          <li
            className={`items-center cursor-pointer ${
              activeTab === 'profile' ? 'font-bold' : ''
            }`}
            onClick={() => handleTabClick('profile')}
          >
            Профиль
          </li>
          <li className="border-r-2 mx-4"></li>
          <li
            className={'items-center cursor-pointer'}
            onClick={() => navigate('/createAdd')}
          >
            Мои товары
          </li>
          <li className="border-r-2 mx-4"></li>
          <li
            className={`items-center cursor-pointer ${
              activeTab === 'reviews' ? 'font-bold' : ''
            }`}
            onClick={() => handleTabClick('reviews')}
          >
            Отзывы
          </li>
        </ul>
        <div className="w-full rounded my-4 xs:my-9 sm:my-14 md:my-28 flex items-center">
            {activeTab === 'profile' && (
              <>
              <div className="w-full bg-back rounded my-5 sm:my-28 flex flex-col sm:flex-row items-start sm:items-center">
                <div className="w-full sm:w-2/3 pl-3 sm:pl-7 py-14 text-xs sm:text-sm md:text-base lg:text-xl list-none">
                  <li><span className="font-semibold">Имя </span><span>{gameAuthor.name}</span></li>
                  <li className="border-t-2 sm:border-t-4 border-grayProfile my-2 lg:my-6 mr-8 md:mr-24"></li>
                  <li><span className="font-semibold">Ник </span><span>IvanZolo2004</span></li>
                  <li className="border-t-2 sm:border-t-4 border-grayProfile my-2 lg:my-6 mr-8 md:mr-24"></li>
                  <li><span className="font-semibold">E-mail </span><span>ivanzolo2004@yandex.ru</span></li>
                  <li className="border-t-2 sm:border-t-4 border-grayProfile my-2 lg:my-6 mr-8 md:mr-24"></li>
                  <li><span className="font-semibold">Номер телефона </span><span>+7(800)555-35-35</span></li>
                </div>
                <div className="w-full sm:w-1/3 flex justify-center">
                  <img
                    src={gameAuthor.avatar}
                    alt=""
                    className="w-1/3 sm:w-full lg:w-2/3 rounded-full mr-0 sm:mr-3 lg:mr-0 mb-5 sm:mb-0"
                  />
                </div>
              </div>
              </>
            )}
            {activeTab === 'reviews' && (
              <ReviewList gameAuthor={gameAuthor} reviews={reviews} />
            )}
        </div>
      </div>
    </>
  );
}
