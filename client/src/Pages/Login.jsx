import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-backgroundPages">
      <div className="bg-back shadow-lg rounded-lg w-full max-w-md p-8">
        <a href="/" className='pl-2 text-sm hover:text-secondary'> <AiOutlineArrowLeft className="inline-block -mt-1 mr-1 text-lg" />Вернуться назад</a>
        <div className="mb-6 mt-8 text-center">
          <img className='mx-auto w-1/4' src="logo.svg" alt="" />
          <h1 className="text-xl sm:text-3xl font-semibold font-serif">ИгроваяЛавка</h1>
        </div>
        <div>
          <label htmlFor="login" className="block font-medium mb-2">
            Войти
          </label>
          <input
            type="text"
            id="login"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Телефон, E-mail или Ник"
          />
          <label htmlFor="password" className="block font-medium mb-2">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Введите пароль"
          />
          <button
            className="bg-primary hover:bg-btnHover text-white font-medium py-2 px-4 rounded-lg w-full"
            onClick={handleLogin}
          >
            Войти
          </button>
        </div>
        <div className="w-full text-center mt-4">
          <a href="/register" className="text-sm hover:text-secondary">Забыли пароль? Восстановление пароля</a>
        </div>
        <div className="w-full text-center">
          <a href="/register" className="text-sm hover:text-secondary">Нет аккаунта? Зарегистрироваться</a>
        </div>
      </div>
    </div>
  );
}
