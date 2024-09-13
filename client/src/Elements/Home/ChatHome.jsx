export default function ChatHome() {
  return (
    <div className="h-98 w-3/4 mx-auto my-16 flex flex-col shadow-2xl" id='chatHome'>
      <div className="bg-white shadow p-4 flex-grow overflow-y-auto">
        <h1 className='text-xl sm:text-3xl font-semibold'>Чат с пользователями</h1>
        <div className="p-2 pl-2 sm:pl-10 rounded-lg mb-2 self-end">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="font-bold">Джони</span>
          </div>
          <p>Кто продаёт робуксы?</p>
        </div>
        <div className="p-2 rounded-lg pl-2 sm:pl-10 mb-2">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="font-bold">Катька</span>
          </div>
          <p>Я продаю пжпжпжп</p>
        </div>
        <div className="p-2 pl-2 sm:pl-10 rounded-lg mb-2 self-end">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="font-bold">Джони</span>
          </div>
          <p>Ура!!</p>
        </div>
      </div>
      <div className="bg-white shadow p-1 xs:p-4 flex items-center">
        <input
          type="text"
          placeholder="Введите текст..."
          className="flex-grow rounded-l-md sm:rounded-l-lg text-xs xs:text-base p-1 xs:p-2 border-back border-r-0"
        />
        <button className="bg-back hover:bg-primary text-xs xs:text-sm sm:text-base rounded-r-md sm:rounded-r-lg px-2 xs:px-4 py-1 xs:py-2">
          Отправить
        </button>
      </div>
    </div>
  );
};

