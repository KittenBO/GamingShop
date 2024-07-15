export default function ChatEditAdd({ gameAuthor }) {
  return (
    <div className="h-98 w-3/4 mx-auto my-16 flex flex-col shadow-2xl" id='chatHome'>
      <div className="bg-white shadow p-4 flex-grow overflow-y-auto">
        <h1 className='text-3xl font-semibold'>Чат с продавцом</h1>
        <div className="p-2 pl-10 rounded-lg mb-2 self-end">
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
            <span className="text-grayChat mx-auto py-16">Напишите продавцу сюда для заказа</span>
          </div>
        </div>
      </div>
      <div className="bg-white shadow p-4 flex items-center">
        <input
          type="text"
          placeholder="Введите текст..."
          className="flex-grow rounded-l-lg p-2 border-back border-r-0"
        />
        <button className="bg-back hover:bg-primary rounded-r-lg px-4 py-2">
          Отправить
        </button>
      </div>
    </div>
  );
};

