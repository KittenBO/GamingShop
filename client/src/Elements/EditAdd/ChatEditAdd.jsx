export default function ChatEditAdd({ gameAuthor }) {
  return (
    <div className="h-98 w-3/4 mx-auto my-16 flex flex-col shadow-2xl" id='chatHome'>
      <div className="bg-white shadow p-4 flex-grow overflow-y-auto">
        <h1 className='text-xl xs:text-3xl font-semibold'>Чат с продавцом</h1>
        <div className="p-2 pl-2 sm:pl-10 rounded-lg mb-2 self-end">
          <div className="flex items-center">
            <img
              src={gameAuthor.avatar}
              alt="Author Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="font-bold">{gameAuthor.name}</span>
          </div>
          <p>Лучшие цены только у меня</p>
          <div className="flex">
            <span className="text-grayChat text-center mx-auto py-16 text-sm sm:text-base">Напишите продавцу сюда для заказа</span>
          </div>
        </div>
      </div>
      <div className="bg-white shadow p-2 sm:p-4 flex items-center">
        <input
          type="text"
          placeholder="Введите текст..."
          className="flex-grow rounded-l-sm sm:rounded-l-lg p-0.5 sm:p-2 border-back border-r-0 text-xs sm:text-base"
        />
        <button className="bg-back hover:bg-primary rounded-l-sm sm:rounded-r-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-base">
          Отправить
        </button>
      </div>
    </div>
  );
};

