import { CSSTransition } from 'react-transition-group';

export default function ModalNewBlock({ isModalOpen, handleCloseModal, dragStartHandler }) {
  return (
    <>
      <CSSTransition in={isModalOpen} timeout={300} classNames="editAdd" unmountOnExit>
        <div className="fixed top-1 mt-20 right-0 w-1/3 lg:w-1/4 bg-white p-5 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xs sm:text-sm font-semibold text-center text-grayChat mb-1 lg:mb-4">
            Просто перетащите нужный блок в нужный отсек
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xs:gap-2 sm:gap-4">
            <div
              className="shadow-xl rounded-md py-2 lg:py-5 xl:py-8 lg:px-3 xl:px-6 cursor-grab flex flex-col items-center w-full xs:w-2/3 sm:w-full mx-auto"
              onDragStart={(e) => dragStartHandler(e, 'Блок 1')}
              draggable
            >
              <img src="EditAdd/blockTextImg.svg" alt="Блок Текста+Изображения" />
              <p className="text-center text-xs mt-2">Текст + Изображение</p>
            </div>
            <div
              className="shadow-xl rounded-md py-2 lg:py-5 xl:py-8 lg:px-3 xl:px-6 cursor-grab flex flex-col items-center w-full xs:w-2/3 sm:w-full mx-auto"
              onDragStart={(e) => dragStartHandler(e, 'Блок 2')}
              draggable
            >
              <img src="EditAdd/blockImgText.svg" alt="Блок Изображения+Текста" />
              <p className="text-center text-xs mt-2">Изображение + Текст</p>
            </div>
            <div
              className="shadow-xl rounded-md py-2 lg:py-5 xl:py-8 lg:px-3 xl:px-6 cursor-grab flex flex-col items-center w-full xs:w-2/3 sm:w-full mx-auto"
              onDragStart={(e) => dragStartHandler(e, 'Блок 3')}
              draggable
            >
              <img src="EditAdd/blockText.svg" alt="Блок Текста" className="w-1/2" />
              <p className="text-center text-xs mt-2">Текст</p>
            </div>
            <div
              className="shadow-xl rounded-md py-2 lg:py-5 xl:py-8 lg:px-3 xl:px-6 cursor-grab flex flex-col items-center w-full xs:w-2/3 sm:w-full mx-auto"
              onDragStart={(e) => dragStartHandler(e, 'Блок 4')}
              draggable
            >
              <img src="EditAdd/blockImg.svg" alt="Блок Изображения" className="w-1/2" />
              <p className="text-center text-xs mt-2">Изображение</p>
            </div>
          </div>
          <div className="mt-4 text-right">
            <button
              className="bg-primary text-sm sm:text-base text-white font-semibold sm:font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded"
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
