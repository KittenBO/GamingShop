const financialOperations = [
  {
    date: '2023-04-01',
    description: 'Вывод средств',
    amount: -100,
  },
  {
    date: '2023-04-02',
    description: 'Пополнение средств',
    amount: 50,
  },
  {
    date: '2023-04-03',
    description: 'Продажа лота "Аккаунт в Albion"',
    amount: 200,
  },
  {
    date: '2023-04-04',
    description: 'Покупка лота "Аккаунт Albion" у Иван06',
    amount: -150,
  },
];

export default function Finance() {
  const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  return (
    <>
      <div className="container mx-auto mt-24">
        <h1 className="text-7xl text-center font-bold text-primary pb-6">Финансы</h1>
        <hr className="w-4/5 mx-auto mt-2 border-b-4 border-primary" />
        <h2 className="bg-primary py-1 text-3xl font-semibold rounded-md text-white text-center w-32 mx-auto mt-5">20 ₽</h2>
        <button className="
      bg-primary px-8 py-2 text-xl font-medium my-6 rounded-md text-white">
          Вывести средства
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Список операций</h2>
          <ul>
            {financialOperations.map((operation, index) => {
              const date = new Date(operation.date);
              const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
              return (
                <li key={index}>
                  <div className="flex py-5 justify-between mb-2">
                    <div>
                      <span className="text-xl font-bold mr-7">{formattedDate}</span> 
                      <span className="text-xl">{operation.description}</span>
                    </div>
                    <div className={operation.amount < 0 ? 'text-red text-xl font-semibold' : 'text-green text-xl font-semibold'}>
                      {operation.amount >= 0 ? '+' : '-'} {Math.abs(operation.amount)} ₽
                    </div>
                  </div>
                  {index < financialOperations.length - 1 && (
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
