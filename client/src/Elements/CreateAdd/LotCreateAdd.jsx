import { FaPencilAlt } from "react-icons/fa";

export default function LotCreateAdd ({ lots, handleLotClick }) {
  return (
    <div>
      {lots.map((lot) => (
        <div
          key={lot.id}
          className={`flex flex-col sm:flex-row items-center mx-24 my-7 rounded-md shadow-lg py-5 ${
            lot.isSelected ? 'bg-back' : ''
          }`}
          onClick={() => handleLotClick(lot.id)}
        >
          <div className="w-full sm:w-2/3 px-2 sm:px-5">
            <p className="text-xs sm:text-base lg:text-xl text-justify">{lot.text}</p>
          </div>
          <div className="w-full sm:w-1/6 flex flex-row items-center pl-2 pt-5">
            <p className="text-xs text-center text-grayChat">{lot.type}</p>
          </div>
          <div className="w-full sm:w-1/6 text-right">
            <button className="text-sm xl:text-base bg-primary px-3 xl:px-4 py-1.5 xl:py-2 rounded-md text-white hidden lg:flex">Редактировать</button>
            <button className="bg-primary rounded-md p-2 flex lg:hidden mx-auto"><FaPencilAlt /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

