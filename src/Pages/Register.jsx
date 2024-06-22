import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from 'react';

export default function Register() {
  const [registrationType, setRegistrationType] = useState('phone');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistrationTypeChange = (type) => {
    setRegistrationType(type);
  };

  const handleRegister = () => {
    // Здесь можно добавить логику регистрации пользователя
    console.log('Регистрация:', { registrationType, email, phone, nickname, password, confirmPassword });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-backgroundPages">
      <div className="bg-back shadow-lg rounded-lg w-full max-w-md md:max-w-xl md:w-3/4 p-8">
        <a href="/" className='pl-2 text-sm hover:text-secondary'> <AiOutlineArrowLeft className="inline-block mr-3" />Вернуться назад</a>
        <div className="mb-6 mt-8 text-center">
          <img className='mx-auto w-1/5' src="logo.svg" alt="" />
          <h1 className="text-xl font-semibold font-serif">ИгроваяЛавка</h1>
        </div>
        <div>
          <div className="mb-4">
            <button
              className={`w-1/2 py-2 rounded-l-lg ${registrationType === 'phone' ? 'bg-primary text-white' : 'bg-gray-200'}`}
              onClick={() => handleRegistrationTypeChange('phone')}
            >
              Зарегеститоваться по телефону
            </button>
            <button
              className={`w-1/2 py-2 rounded-r-lg ${registrationType === 'email' ? 'bg-primary text-white' : 'bg-gray-200'}`}
              onClick={() => handleRegistrationTypeChange('email')}
            >
              Зарегистрироваться по E-Mail
            </button>
          </div>
          {registrationType === 'email' && (
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Введите ваш E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          {registrationType === 'phone' && (
            <div>
              <label htmlFor="phone" className="block font-medium mb-2">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Введите ваш номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}
          <label htmlFor="nickname" className="block font-medium mb-2">
            NICKNAME
          </label>
          <input
            type="text"
            id="nickname"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Придумайте себе NICKNAME"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            
          />
          <label htmlFor="password" className="block font-medium mb-2">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Придумайте пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword" className="block font-medium mb-2">
            Подтвердите пароль
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="bg-primary hover:bg-btnHover text-white font-medium py-2 px-4 rounded-lg w-full" onClick={handleRegister}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}

