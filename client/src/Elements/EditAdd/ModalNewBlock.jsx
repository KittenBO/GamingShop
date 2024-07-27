import { CSSTransition } from 'react-transition-group';

export default function ModalNewBlock({ isModalOpen, handleCloseModal, dragStartHandler }) {
  return (
    <>
      <CSSTransition in={isModalOpen} timeout={300} classNames="editAdd" unmountOnExit>
        <div className="fixed top-1/4 right-0 w-1/4 h-2/3 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-sm font-semibold text-center text-grayChat mb-4">
            Просто перетащите нужный блок в нужный отсек
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="shadow-xl rounded-md py-8 px-6 cursor-grab flex flex-col items-center"
              onDragStart={(e) => dragStartHandler(e, 'Блок 1')}
              draggable
            >
              <img src="EditAdd/blockTextImg.svg" alt="Блок Текста+Изображения" />
              <p className="text-center text-xs mt-2">Текст+Изображение</p>
            </div>
            <div
              className="shadow-xl rounded-md py-8 px-6 cursor-grab flex flex-col items-center"
              onDragStart={(e) => dragStartHandler(e, 'Блок 2')}
              draggable
            >
              <img src="EditAdd/blockImgText.svg" alt="Блок Изображения+Текста" />
              <p className="text-center text-xs mt-2">Изображение+Текст</p>
            </div>
            <div
              className="shadow-xl rounded-md py-8 px-6 cursor-grab flex flex-col items-center"
              onDragStart={(e) => dragStartHandler(e, 'Блок 3')}
              draggable
            >
              <img src="EditAdd/blockText.svg" alt="Блок Текста" className="w-1/2" />
              <p className="text-center text-xs mt-2">Текст</p>
            </div>
            <div
              className="shadow-xl rounded-md py-8 px-6 cursor-grab flex flex-col items-center"
              onDragStart={(e) => dragStartHandler(e, 'Блок 4')}
              draggable
            >
              <img src="EditAdd/blockImg.svg" alt="Блок Изображения" className="w-1/2" />
              <p className="text-center text-xs mt-2">Изображение</p>
            </div>
          </div>
          <div className="mt-4 text-right">
            <button
              className="bg-primary text-white font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Закрыть
            </button>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
