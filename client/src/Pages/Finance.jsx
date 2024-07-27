import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { CSSTransition } from 'react-transition-group';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('phone'); // Opción predeterminada: teléfono
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleWithdrawal = () => {
    console.log('Тип вывода:', selectedOption);
    console.log('Номер телефона вывода:', phoneNumber);
    console.log('Номер карты вывода:', cardNumber);
    console.log('Сколько вывести:', withdrawalAmount);
    toggleModal();
  };

  return (
    <>
      <div className="container mx-auto mt-24">
        <h1 className="text-7xl text-center font-bold text-primary pb-6">Финансы</h1>
        <hr className="w-4/5 mx-auto mt-2 border-b-4 border-primary" />
        <h2 className="bg-primary py-1 text-3xl font-semibold rounded-md text-white text-center w-32 mx-auto mt-5">20 ₽</h2>
        <button
          className="bg-primary px-8 py-2 text-xl font-medium my-6 rounded-md text-white"
          onClick={toggleModal}
        >
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
      <CSSTransition in={isModalOpen} timeout={300} classNames="alert" unmountOnExit>
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white shadow-lg p-8 rounded-md w-3/4 max-w-md">
              <h2 className="text-2xl font-bold mb-4">Вывести средства</h2>
              <div className="flex justify-between mb-4">
                <button
                  className={`px-4 py-2 rounded-md ${selectedOption === 'phone' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                  onClick={() => handleOptionChange('phone')}
                >
                  Вывести на телефон
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${selectedOption === 'card' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                  onClick={() => handleOptionChange('card')}
                >
                  Вывести на карту
                </button>
              </div>
              {selectedOption === 'phone' && (
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block font-medium mb-2">Номер телефона:</label>
                  <IMaskInput
                    mask="+7 (000) 000-00-00"
                    placeholder="+7 (___) ___-__-__"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              )}
              {selectedOption === 'card' && (
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block font-medium mb-2">Номер карты:</label>
                  <IMaskInput
                    mask="0000 0000 0000 0000"
                    placeholder="0000 0000 0000 0000"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="withdrawalAmount" className="block font-medium mb-2">Сумма вывода:</label>
                <input
                  type="number"
                  id="withdrawalAmount"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={withdrawalAmount}
                  onChange={(e) => setWithdrawalAmount(e.target.value)}
                />
              </div>
              <button
                className="bg-primary px-4 py-2 text-white rounded"
                onClick={handleWithdrawal}
              >
                Вывести
              </button>
              <button
                className="bg-gray-200 px-4 py-2 rounded ml-4"
                onClick={toggleModal}
              >
                Закрыть
              </button>
            </div>
          </div>
        </CSSTransition>
    </>
  );
}
