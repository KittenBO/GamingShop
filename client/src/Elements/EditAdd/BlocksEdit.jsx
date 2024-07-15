import FileInput from './FileInput';

export default function BlocksEdit({grayBlocks, handleInputChange, handleImageChange, handleOpenModal, dropHandler,
  dragStartHandler, dragEndHandler, handleRestoreBlock, index,}){
  return (
    <div
      className={`${grayBlocks[index].bgColor} py-14 px-6 cursor-pointer ${
        grayBlocks[index].type ? 'cursor-default' : 'cursor-pointer'
      } relative`}
      onClick={grayBlocks[index].type ? null : handleOpenModal}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => dropHandler(e, index)}
      onDragStart={(e) => dragStartHandler(e, 'Блок 1')}
      onDragEnd={dragEndHandler}
      draggable
    >
      {grayBlocks[index].type ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 flex-1">
            {grayBlocks[index].type === 'Блок 1' && (
              <>
                <textarea
                  placeholder="Текст"
                  value={grayBlocks[index].text}
                  onChange={(e) => handleInputChange(index, 'text', e.target.value)}
                  className={`border rounded px-2 py-1 flex-1 resize-none ${
                    grayBlocks[index].image ? 'h-48' : 'h-24'
                  }`}
                />
                <div className="flex-1 h-48 flex items-center justify-center">
                  <FileInput value={grayBlocks[index].image} onChange={handleImageChange} index={index} />
                </div>
              </>
            )}
            {grayBlocks[index].type === 'Блок 2' && (
              <>
                <div className="flex-1 h-48 flex items-center justify-center">
                  <FileInput value={grayBlocks[index].image} onChange={handleImageChange} index={index} />
                </div>
                <textarea
                  placeholder="Текст"
                  value={grayBlocks[index].text}
                  onChange={(e) => handleInputChange(index, 'text', e.target.value)}
                  className={`border rounded px-2 py-1 flex-1 resize-none ${
                    grayBlocks[index].image ? 'h-48' : 'h-24'
                  }`}
                />
              </>
            )}
            {grayBlocks[index].type === 'Блок 3' && (
              <>
                <textarea
                  placeholder="Текст"
                  value={grayBlocks[index].text}
                  onChange={(e) => handleInputChange(index, 'text', e.target.value)}
                  className="border rounded mx-52 py-1 flex-1 resize-none h-48"
                />
              </>
            )}
            {grayBlocks[index].type === 'Блок 4' && (
              <>
                <div className="flex-1 h-auto flex items-center justify-center">
                  <FileInput value={grayBlocks[index].image} onChange={handleImageChange} index={index} />
                </div>
              </>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="bg-primary -mr-28 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => {
                e.stopPropagation();
                handleRestoreBlock(index);
              }}
            >
              Удалить
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-2xl font-semibold text-grayChat">Добавить блок+</p>
      )}
    </div>
  );
};

