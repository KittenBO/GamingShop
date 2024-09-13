import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [registrationType, setRegistrationType] = useState('phone');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleRegistrationTypeChange(type) {
    setRegistrationType(type);
  };


  const navigate = useNavigate();

  function handleRegister() {
    console.log('Регистрация:', { registrationType, email, phone, nickname, password, confirmPassword });
    navigate("/profile");
  };

  return (
    <div className="flex justify-center h-screen items-center bg-backgroundPages">
      <div className="bg-back shadow-lg rounded-lg w-full max-w-md md:max-w-xl md:w-3/4 p-8">
        <a href="/" className='pl-2 text-sm hover:text-secondary'> <AiOutlineArrowLeft className="inline-block -mt-1 mr-1 text-lg" />Вернуться назад</a>
        <div className="mb-3 xs:mb-6 mt-4 xs:mt-8 text-center">
          <img className='mx-auto w-1/6 xs:w-1/5' src="logo.svg" alt="" />
          <h1 className="text-lg xs:text-xl font-semibold font-serif">ИгроваяЛавка</h1>
          <h1 className="text-xl xs:text-3xl font-bold pt-3">Зарегистрироваться</h1>
        </div>
        <div>
          <div className="mb-4">
            <button
              className={`w-1/2 py-1.5 xs:py-2 rounded-l-lg ${registrationType === 'phone' ? 'bg-primary text-white' : 'bg-gray-200'}`}
              onClick={() => handleRegistrationTypeChange('phone')}
            >
              По телефону
            </button>
            <button
              className={`w-1/2 py-1.5 xs:py-2 rounded-r-lg ${registrationType === 'email' ? 'bg-primary text-white' : 'bg-gray-200'}`}
              onClick={() => handleRegistrationTypeChange('email')}
            >
              По E-Mail
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
              <IMaskInput
                mask="+7 (000) 000-00-00"
                placeholder="+7 (___) ___-__-__"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={phone}
                onAccept={(value) => setPhone(value)}
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

