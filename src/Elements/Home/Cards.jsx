import React from 'react';

const Card = ({ title, items }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 w-1/4 h-72 relative">
      <h2 className="text-2xl text-center font-bold mb-4">{title}</h2>
      <ul className="list-disc pl-10 text-xl text-secondary">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex absolute bottom-3">
        <button className="bg-primary px-28 py-2 rounded-md text-white">
          Перейти
        </button>
      </div>
    </div>
  );
};

const Cards = () => {
  const cards = [
    {
      title: 'Карточка 1',
      items: ['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3', 'Элемент списка 2', 'Элемент списка 2',],
    },
    {
      title: 'Карточка 2',
      items: ['Элемент списка 4', 'Элемент списка 5', 'Элемент списка 6'],
    },
    {
      title: 'Карточка 3',
      items: ['Элемент списка 7', 'Элемент списка 8'],
    },
  ];

  return (
    <div className="flex justify-between w-full">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} items={card.items} />
      ))}
    </div>
  );
};

export default Cards;