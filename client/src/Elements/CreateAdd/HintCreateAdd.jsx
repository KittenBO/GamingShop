export default function HintCreateAdd({
  isOpen,
  onClose,
  publishModalTimeRemaining,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50">
      <div className="bg-grayBack p-6 rounded-xl w-full max-w-md mb-8 relative">
        <div
          className="absolute top-0 left-0 w-full h-1 bg-btnHover"
          style={{
            width: `${(publishModalTimeRemaining / 5) * 100}%`,
            transition: 'width 1s linear',
          }}
        ></div>
        <h3 className="text-2xl font-bold mb-4">Подсказка</h3>
        <p>Лот не выбран. Пожалуйста, выберите лот для публикации.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-btnHoverDark"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

