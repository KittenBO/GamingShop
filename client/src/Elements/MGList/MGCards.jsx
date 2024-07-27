function MGCard({ image, title, gamersList, min, link }) {
    return (
    <>
      <div className="bg-white shadow-xl my-8 rounded-lg relative">
        <div className="w-full">
            <img className="w-full rounded-md" src={image} alt={title} />
        </div>
        <h2 className="text-2xl text-center font-bold">Мини-игра</h2>
        <h2 className="text-xl text-center font-bold mb-4">{title}</h2>
        <h2 className="text-center text-secondary">Игроков на данный момент в игре: {gamersList}</h2>
        <h2 className="text-center text-secondary">Минимальная ставка: {min} руб.</h2>
        <div className="flex pt-8 mb-3 justify-center">
          <a href={link} className="bg-primary px-14 py-2 rounded-md text-white">
            Играть
          </a>
        </div>
      </div>
    </>
    );
  }
  
  export default function MGCards() {
    const cards = [
      {
        image: 'icon mini-game.svg',
        title: 'Карточка 1',
        gamersList: '1000',
        min: '10',
        link: '/mini-games/emoji-game',
      },
      {
        image: 'icon mini-game.svg',
        title: 'Карточка 2',
        gamersList: '1000',
        min: '10',
        link: '/Example',
      },
      {
        image: 'icon mini-game.svg',
        title: 'Карточка 3',
        gamersList: '1000',
        min: '10',
        link: '/Example',
      },
      {
        image: 'icon mini-game.svg',
        title: 'Карточка 4',
        gamersList: '1000',
        min: '10',
        link: '/Example',
      },
      {
        image: 'icon mini-game.svg',
        title: 'Карточка 5',
        gamersList: '1000',
        min: '10',
        link: '/Example',
      },
      {
        image: 'icon mini-game.svg',
        title: 'Карточка 6',
        gamersList: '1000',
        min: '10',
        link: '/Example',
      },
    ];
  
    return (
      <div className="grid grid-cols-3 gap-x-16 w-4/5 mt-10 mx-auto">
        {cards.map((card, index) => (
          <MGCard key={index} image={card.image} title={card.title}
            gamersList={card.gamersList} min ={ card.min } link={card.link} />
        ))}
      </div>
    );
  };
  