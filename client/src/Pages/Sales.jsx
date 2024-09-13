const SalesOperations = [
  {
    date: '2023-04-01',
    description: 'Продаю сочный аккаунт в Albion. Золото+ серебро все дела. Аль би бек Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    amount: 100,
    status: 'Закрыт',
    buyer: {
      name: 'Иван06',
      avatar: 'https://via.placeholder.com/50',
    },
  },
  {
    date: '2023-04-02',
    description: 'Продаю сочный аккаунт в Albion. Золото+ серебро все дела. Аль би бек Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    amount: 50,
    status: 'Открыт',
    buyer: {
      name: 'МаксЗдесь',
      avatar: 'https://via.placeholder.com/50',
    },
  },
  {
    date: '2023-04-03',
    description: 'Продаю сочный аккаунт в Albion. Золото+ серебро все дела. Аль би бек Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    amount: 200,
    status: 'Закрыт',
    buyer: {
      name: 'ДимаИгрок',
      avatar: 'https://via.placeholder.com/50',
    },
  },
  {
    date: '2023-04-04',
    description: 'Продаю сочный аккаунт в Albion. Золото+ серебро все дела. Аль би бек Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    amount: 150,
    status: 'Отменен',
    buyer: {
      name: 'АлексПетров',
      avatar: 'https://via.placeholder.com/50',
    },
  },
];

export default function Sales() {
  const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  return (
    <>
      <div className="container mx-auto mt-24">
        <h1 className="font-serif text-7xl text-center font-medium text-primary pb-6">Ваши продажи</h1>
        <hr className="w-4/5 mx-auto mt-2 border-b-2 border-primary" />
        <div className="mx-5 sm:mx-0 mt-8">
          <h2 className="text-2xl text-primary font-bold mb-4">Список продаж</h2>
          <ul>
            {SalesOperations.map((operation, index) => {
              const date = new Date(operation.date);
              const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
              return (
                <li key={index}>
                  <div className="flex py-5 justify-between mb-2">
                    <div>
                      <span className="text-base sm:text-xl font-semibold text-primary  mr-7">{formattedDate}</span>
                      <span className="text-base sm:text-xl">{operation.description}</span>
                      <div className="flex items-center mt-2">
                        <img src={operation.buyer.avatar} alt={operation.buyer.name} className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-base sm:text-xl">{operation.buyer.name}</span>
                      </div>
                    </div>
                    <div className={operation.status === 'Отменен' ? 'text-red text-base sm:text-xl font-semibold' : 'text-green text-base sm:text-xl font-semibold'}>
                      {operation.amount}₽ ({operation.status})
                    </div>
                  </div>
                  {index < SalesOperations.length - 1 && (
                    <div className="bg-grayProfile h-px mt-2 mb-2"></div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
