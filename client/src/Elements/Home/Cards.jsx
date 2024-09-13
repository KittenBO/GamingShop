function Card({ title, items, link }) {
  return (
    <div className="bg-white shadow-xl my-8 rounded p-4 h-80 md:h-96 relative">
      <h2 className="text-2xl text-center font-bold mb-4">{title}</h2>
      <ul className="list-disc pl-5 xl:pl-10 text-lg xl:text-xl text-secondary">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
        <a href={link} className="bg-primary px-10 xl:px-16 2xl:px-24 py-1.5 xl:py-2 rounded-md text-white text-lg font-medium">
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 w-3/5 sm:w-2/5 md:w-4/6 lg:w-4/5 xl:w-3/5 mt-10 mx-auto">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} items={card.items} link={card.link} />
      ))}
    </div>
  );
};
