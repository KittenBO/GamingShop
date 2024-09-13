import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import ModalNewBlock from '../Elements/EditAdd/ModalNewBlock'
import BlocksEdit from '../Elements/EditAdd/BlocksEdit';
import ReviewList from '../Elements/EditAdd/ReviewList';
import ChatEditAdd from '../Elements/EditAdd/ChatEditAdd';


  
  export default function EditAdd() {
    const gameAuthor = {
      avatar: 'https://via.placeholder.com/50',
      name: 'Иван06',
      rating: 4.5,
    };

    const reviews = [
      {
        avatar: 'https://via.placeholder.com/50',
        name: 'John Doe',
        rating: 4.5,
        text: 'Ебать, купил аккаунт в ахуе от качества, спасибо, заебал. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      },
      {
        avatar: 'https://via.placeholder.com/50',
        name: 'Jane Smith',
        rating: 3.7,
        text: 'Ебать, купил аккаунт в ахуе от качества, спасибо, заебал. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      },
      {
        avatar: 'https://via.placeholder.com/50',
        name: 'Bob Johnson',
        rating: 4.2,
        text: 'Ебать, купил аккаунт в ахуе от качества, спасибо, заебал. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      },
      {
        avatar: 'https://via.placeholder.com/50',
        name: 'Samantha Lee',
        rating: 4.8,
        text: 'Ебать, купил аккаунт в ахуе от качества, спасибо, заебал. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      },
      {
        avatar: 'https://via.placeholder.com/50',
        name: 'Michael Chlen',
        rating: 3.9,
        text: 'Ебать, купил аккаунт в ахуе от качества, спасибо, заебал. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      },
    ];

    const location = useLocation();
    const lotType = new URLSearchParams(location.search).get('lotType');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDragged, setIsDragged] = useState(false);
    const [grayBlocks, setGrayBlocks] = useState([
      { type: '', text: '', image: null, imageHeight: 'auto', bgColor: 'bg-grayProfile' },
      { type: '', text: '', image: null, imageHeight: 'auto', bgColor: 'bg-grayProfile' },
    ]);
  
    function handleOpenModal() {
      setIsModalOpen(true);
    };

    function handleRestoreBlock(index) {
      const updatedBlocks = [...grayBlocks];
      updatedBlocks[index].type = null;
      updatedBlocks[index].text = '';
      updatedBlocks[index].image = null;
      updatedBlocks[index].bgColor = 'bg-grayProfile';
      setGrayBlocks(updatedBlocks);
    };


  
    function handleCloseModal() {
      setIsModalOpen(false);
    };
  
    function dragStartHandler(e, blockType) {
      e.dataTransfer.setData('blockType', blockType);
      e.currentTarget.classList.add('bg-transparent');
      setIsDragged(true);
    };
  
    function dragEndHandler(e) {
      e.currentTarget.classList.remove('bg-transparent');
      setIsDragged(false);
    };
  
    function dropHandler(e, targetIndex) {
      e.preventDefault();
      e.currentTarget.classList.remove('bg-transparent');
      const blockType = e.dataTransfer.getData('blockType');
      const updatedGrayBlocks = [...grayBlocks];
      updatedGrayBlocks[targetIndex] = { type: blockType, text: '', image: null, imageHeight: 'auto', bgColor: '' };
      updatedGrayBlocks[targetIndex].isDraggable = false;
      setGrayBlocks(updatedGrayBlocks);
    };
  
    function handleInputChange(index, field, value) {
      const updatedGrayBlocks = [...grayBlocks];
      updatedGrayBlocks[index][field] = value;
      setGrayBlocks(updatedGrayBlocks);
    };
  
    function handleImageChange(index, file) {
      setGrayBlocks((prevBlocks) => {
        const newBlocks = [...prevBlocks];
        newBlocks[index].image = file;
        return newBlocks;
      });
    };
    
  
    return (
      <div className="container mx-auto my-12">
        <h1 className="text-5xl text-center font-bold text-primary">{lotType}</h1>
        <h1 className="text-center text-grayChat mb-8">by {gameAuthor.name}</h1>
        <div className="grid grid-cols-1 gap-4">
          <BlocksEdit grayBlocks={grayBlocks} handleInputChange={handleInputChange}
            handleImageChange={handleImageChange} handleOpenModal={handleOpenModal}
            dropHandler={dropHandler} dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler} handleRestoreBlock={handleRestoreBlock}
            index={0} />
          <BlocksEdit grayBlocks={grayBlocks} handleInputChange={handleInputChange}
            handleImageChange={handleImageChange} handleOpenModal={handleOpenModal}
            dropHandler={dropHandler} dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler} handleRestoreBlock={handleRestoreBlock}
            index={1} />
        </div>
        <ReviewList gameAuthor={gameAuthor} reviews={reviews} />
        <ChatEditAdd gameAuthor={gameAuthor} />
        <div className='flex justify-end'>
          <button className="bg-primary text-xs xs:text-sm sm:text-base text-white font-semibold sm:font-bold py-1.5 sm:py-2 mr-6 px-3 sm:px-4 rounded">
            Cохранить
          </button>
          <button className="bg-primary text-xs xs:text-sm sm:text-base text-white font-semibold sm:font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded">
            Cохранить и опубликовать
          </button>
        </div>
        <ModalNewBlock
        isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}
        dragStartHandler={dragStartHandler} dragEndHandler={dragEndHandler} />
    </div>
  );
};
