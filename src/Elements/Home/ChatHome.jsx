import React from 'react';

export default function ChatHome() {
  return (
    <div className="h-96 w-3/4 mx-auto my-7 flex flex-col">
      <div className="bg-white shadow p-4 flex-grow overflow-y-auto">
        <div className="p-2 rounded-lg mb-2 self-end">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-bold">Джони</span>
          </div>
          <p>Кто продаёт робуксы?</p>
        </div>
        <div className="p-2 rounded-lg mb-2">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-bold">Катька</span>
          </div>
          <p>Я продаю пжпжпжп</p>
        </div>
        <div className="p-2 rounded-lg mb-2 self-end">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-bold">Джони</span>
          </div>
          <p>Ура!!</p>
        </div>
      </div>
      <div className="bg-white shadow p-4 flex items-center">
        <input
          type="text"
          placeholder="Введите текст..."
          className="flex-grow rounded-l-lg p-2 border-back border-r-0"
        />
        <button className="bg-back hover:bg-primary rounded-r-lg px-4 py-2">
          Отправить
        </button>
      </div>
    </div>
  );
};

