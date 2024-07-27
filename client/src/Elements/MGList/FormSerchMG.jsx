import { useState } from 'react';
import { Slider } from 'antd';

export default function FormSerchMG() {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  return (
    <>
    <div className="flex w-5/6 mx-auto items-center rounded-md mb-8">
      <button className="text-xl font-medium bg-primary px-8 py-2 rounded-md text-white">
        Создать
      </button>

      <div className="flex items-center flex-1 mx-4">
        <Slider
          range
          min={0}
          max={1000}
          value={priceRange}
          onChange={handlePriceRangeChange}
          className="w-full"
          trackStyle={{
            backgroundColor: '#C99FDC',
          }}
        />
      </div>

      <div className="flex items-center flex-1 mr-4">
        <input
          placeholder="Поиск..."
          className="w-full border pl-2 py-1 rounded-md"
        />
      </div>

      <button className="bg-primary px-8 py-1 rounded-md text-white">
        Поиск
      </button>
    </div>
    </>
  );
}
