import React, { useState, useEffect } from 'react';

function Card({ title, items, link }) {
  return (
    <div className="bg-white shadow-xl my-8 rounded p-4 h-72 sm:h-80 md:h-96 relative">
      <h2 className="text-xl md:text-2xl text-center font-bold mb-4">{title[0].toUpperCase() + title.slice(1)}</h2>
      <ul className="list-disc pl-3 sm:pl-10 text-sm sm:text-base md:text-xl text-secondary">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex justify-center absolute bottom-3 w-full -ml-4">
        <a href={link} className="bg-primary px-8 xs:px-12 sm:px-20 2xl:px-32 py-1 xs:py-1.5 sm:py-2 rounded-sm xs:rounded-md text-white">
          Перейти
        </a>
      </div>
    </div>
  );
}

export default function CardsGames() {
  const [cards, setCards] = useState([]);
  const [sortedCards, setSortedCards] = useState([]);

  useEffect(() => {
    const cards = [
      {
        title: 'Albion',
        items: ['Золото', 'Серебро', 'Аккаунты', 'Услуги'],
        link: '/games/albion',
      },
      {
        title: 'Brawl Stars',
        items: ['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3', 'Элемент списка 2', 'Элемент списка 2'],
        link: '/Example',
      },
      {
        title: 'Brawl Boll',
        items: ['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3', 'Элемент списка 2', 'Элемент списка 2'],
        link: '/Example',
      },
      {
        title: 'Хуй',
        items: ['Элемент списка 9', 'Элемент списка 10', 'Элемент списка 11'],
        link: '/Example',
      },
      {
        title: 'Minecraft',
        items: ['Элемент списка 4', 'Элемент списка 5', 'Элемент списка 6'],
        link: '/Example',
      },
      {
        title: 'Minecraft',
        items: ['Элемент списка 4', 'Элемент списка 5', 'Элемент списка 6'],
        link: '/Example',
      },
      {
        title: 'Minecraft',
        items: ['Элемент списка 4', 'Элемент списка 5', 'Элемент списка 6'],
        link: '/Example',
      },
      {
        title: 'Россия',
        items: ['Элемент списка 9', 'Элемент списка 10', 'Элемент списка 11'],
        link: '/Example',
      },
    ];

    setCards(cards);
    setSortedCards(cards.sort((a, b) => a.title[0].localeCompare(b.title[0])));
  }, []);

  return (
    <div className="w-2/5 lg:w-3/5 2xl:w-1/2 mt-10 mx-auto">
      {sortedCards.reduce((acc, card, index) => {
        const firstLetter = card.title[0].toUpperCase();
        const prevFirstLetter = index > 0 ? sortedCards[index - 1].title[0].toUpperCase() : '';

        if (prevFirstLetter !== firstLetter) {
          acc.push(
            <div key={`letter-${firstLetter}`} id={firstLetter} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{firstLetter}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32">
                {sortedCards.filter((c) => c.title[0].toUpperCase() === firstLetter).map((c, i) => (
                  <Card key={i} title={c.title} items={c.items} link={c.link} />
                ))}
              </div>
            </div>
          );
        } else {
        }

        return acc;
      }, [])}
    </div>
  );
}