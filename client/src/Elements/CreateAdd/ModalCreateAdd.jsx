export default function ModalCreateAdd({
  isOpen,
  onClose,
  newLotGame,
  setNewLotGame,
  newLotCategory,
  setNewLotCategory,
  newLotText,
  setNewLotText,
  addNewLot,
}) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-grayBack p-6 rounded-md shadow-lg w-80">
        <div className="mt-8 text-center">
          <img className="mx-auto w-1/4" src="logo.svg" alt="" />
          <h1 className="text-3xl font-semibold font-serif">ИгроваяЛавка</h1>
        </div>
        <h2 className="text-center font-medium mb-4">Создание нового лота</h2>
        <div className="mb-4">
          <label className="block font-bold mb-2">Выберите игру:</label>
          <select
            value={newLotGame}
            onChange={(e) => setNewLotGame(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          >
            <option value="">Выберите игру</option>
            <option value="Albion">Albion Online</option>
            <option value="WoW">World of Warcraft</option>
            <option value="CSGO">CS:GO</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Выберите категорию:</label>
          <select
            value={newLotCategory}
            onChange={(e) => setNewLotCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          >
            <option value="">Выберите категорию</option>
            <option value="Аккаунт">Аккаунт</option>
            <option value="Голда">Голда</option>
            <option value="Серебро">Серебро</option>
            <option value="Услуга">Услуга</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Текст лота:</label>
          <textarea
            value={newLotText}
            onChange={(e) => setNewLotText(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            rows={3}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 bg-grayProfile hover:bg-grayBack font-bold py-2 px-4 rounded">
            Отмена
          </button>
          <button onClick={addNewLot} className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Создать
          </button>
        </div>
      </div>
    </div>
  );
};

