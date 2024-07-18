import { useRef, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Card({ title, items, link }) {
  return (
    <div className="bg-white shadow-xl my-8 rounded p-4 h-96 relative">
      <h2 className="text-2xl text-center font-bold mb-4">{title}</h2>
      <ul className="list-disc pl-10 text-xl text-secondary">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex absolute bottom-3">
        <a href={link} className="bg-primary px-24 py-2 rounded-md text-white">
          Перейти
        </a>
      </div>
    </div>
  );
}

export default function Cards() {
  const cards = [
    {
      title: 'Карточка 1',
      items: ['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3', 'Элемент списка 2', 'Элемент списка 2',],
      link: '/Example',
    },
    {
      title: 'Карточка 2',
      items: ['Элемент списка 4', 'Элемент списка 5', 'Элемент списка 6'],
      link: '/Example',
    },
    {
      title: 'Карточка 3',
      items: ['Элемент списка 7', 'Элемент списка 8'],
      link: '/Example',
    },
    {
      title: 'Карточка 4',
      items: ['Элемент списка 9', 'Элемент списка 10', 'Элемент списка 11'],
      link: '/Example',
    },
    {
      title: 'Карточка 5',
      items: ['Элемент списка 9', 'Элемент списка 10', 'Элемент списка 11'],
      link: '/Example',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-16 w-4/5 mt-10 mx-auto">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} items={card.items} link={card.link} />
      ))}
    </div>
  );
};
