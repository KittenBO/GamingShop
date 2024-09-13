import React from 'react';

export default function SearchLetters() {
  // Массивы русских и английских букв
  const russianLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Я'];
  const englishLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 w-1/6 z-10 flex items-center px-1">
      <div className="flex flex-col space-y-0.5 items-center ml-3">
        <h2 className="text-lg font-semibold">Ru</h2>
        {russianLetters.map((letter, index) => (
          <button
            key={index}
            className="text-ruLetters hover:text-enLetters font-medium text-xs xs:text-base sm:text-sm py-0.5 xs:py-1 md:py-0.5 px-1 rounded-md"
            onClick={() => scrollToSection(`${letter}`)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="flex flex-col space-y-0.5 items-center ml-10 xs:ml-16 sm:ml-24">
        <h2 className="text-lg font-semibold">En</h2>
        {englishLetters.map((letter, index) => (
          <button
            key={index}
            className="text-ruLetters hover:text-enLetters font-medium text-xs xs:text-base sm:text-sm py-0.5 xs:py-1 md:py-0.5 px-1 rounded-md"
            onClick={() => scrollToSection(`${letter}`)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

