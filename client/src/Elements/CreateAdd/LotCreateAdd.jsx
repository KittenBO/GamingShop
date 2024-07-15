export default function LotCreateAdd ({ lots, handleLotClick }) {
  return (
    <div>
      {lots.map((lot) => (
        <div
          key={lot.id}
          className={`flex items-center mx-24 my-7 rounded-md shadow-lg py-5 ${
            lot.isSelected ? 'bg-back' : ''
          }`}
          onClick={() => handleLotClick(lot.id)}
        >
          <div className="w-2/3 pl-5">
            <p className="text-xl">{lot.text}</p>
          </div>
          <div className="w-1/6 flex flex-col items-center">
            <p className="text-xs text-grayChat">{lot.type}</p>
          </div>
          <div className="w-1/6 text-right pr-6">
            <button className="bg-primary px-4 py-2 rounded-md text-white">Редактировать</button>
          </div>
        </div>
      ))}
    </div>
  );
};

