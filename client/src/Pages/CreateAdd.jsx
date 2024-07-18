import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import ModalCreateAdd from '../Elements/CreateAdd/ModalCreateAdd';
import LotCreateAdd from '../Elements/CreateAdd/LotCreateAdd';
import HintCreateAdd from '../Elements/CreateAdd/HintCreateAdd';

export default function CreateAdd() {
  const [lots, setLots] = useState([
    {
      id: 1,
      text: 'Продам голду в альбионе, дешево, самое дешевое предложение на рынке, покупайте не пожалеете. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      type: 'Голда в Albion',
      isSelected: false,
    },
    {
      id: 2,
      text: 'Продам аккаунт в альбионе, дешево, самое дешевое предложение на рынке, покупайте не пожалеете. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      type: 'Аккаунт в Albion',
      isSelected: false,
    },
    {
      id: 3,
      text: 'Продам услуги в альбионе, дешево, самое дешевое предложение на рынке, покупайте не пожалеете. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      type: 'Услуги в Albion',
      isSelected: false,
    },
  ]);

  const [newLotText, setNewLotText] = useState('');
  const [newLotGame, setNewLotGame] = useState('');
  const [newLotCategory, setNewLotCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [publishModalTimer, setPublishModalTimer] = useState(null);
  const [publishModalTimeRemaining, setPublishModalTimeRemaining] = useState(5);
  const [selectedLotType, setSelectedLotType] = useState('');
  const navigate = useNavigate();

  const addNewLot = () => {
    if (newLotText.trim() !== '' && newLotGame.trim() !== '' && newLotCategory.trim() !== '') {
      const newLotType = `${newLotCategory} в ${newLotGame}`;
      const newLot = {
        id: lots.length + 1,
        text: newLotText,
        type: newLotType,
        isSelected: false,
      };
      setLots([...lots, newLot]);
      setNewLotText('');
      setNewLotGame('');
      setNewLotCategory('');
      setIsModalOpen(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLotClick = (id) => {
    const updatedLots = lots.map((lot) =>
      lot.id === id ? { ...lot, isSelected: !lot.isSelected } : { ...lot, isSelected: false }
    );
    setLots(updatedLots);
    setSelectedLotType(updatedLots.find((lot) => lot.id === id).type);
  };

  const handlePublish = () => {
    const selectedLot = lots.find((lot) => lot.isSelected);
    if (selectedLot) {
      console.log('Публикуем лот:', selectedLot);
      navigate(`/EditAdd?lotType=${selectedLot.type}`);
    } else {
      setIsPublishModalOpen(true);
      startPublishModalTimer();
    }
  };

  const closePublishModal = () => {
    setIsPublishModalOpen(false);
    clearPublishModalTimer();
  };

  const startPublishModalTimer = () => {
    setPublishModalTimeRemaining(5);
    setPublishModalTimer(
      setInterval(() => {
        setPublishModalTimeRemaining((prevTime) => prevTime - 1);
      }, 1000)
    );
  };

  const clearPublishModalTimer = () => {
    if (publishModalTimer) {
      clearInterval(publishModalTimer);
      setPublishModalTimer(null);
    }
  };

  useEffect(() => {
    if (publishModalTimeRemaining === 0) {
      closePublishModal();
    }
  }, [publishModalTimeRemaining]);

  return (
    <>
      <div className="container mx-auto mt-24">
        <h1 className="text-7xl text-center font-bold text-primary pb-6">Мои товары</h1>
        <hr className="w-4/5 mx-auto my-5 border-b-4 border-primary" />
        <div className="w-full my-6">
          <div className="flex justify-center mb-4">
            <button onClick={openModal} className="font-medium text-3xl py-4 px-12 rounded-md bg-primary text-white">
              Создать лот
            </button>
          </div>
          <div className="flex justify-end">
            <button onClick={handlePublish} className="font-bold py-2 px-4 rounded bg-primary text-white">
              Опубликовать
            </button>
          </div>

          <LotCreateAdd lots={lots} handleLotClick={handleLotClick} />
        </div>
      </div>
      <CSSTransition in={isModalOpen} timeout={300} classNames="alert" unmountOnExit>
        <ModalCreateAdd isOpen={isModalOpen}
          onClose={closeModal} newLotGame={newLotGame}
          setNewLotGame={setNewLotGame} newLotCategory={newLotCategory}
          setNewLotCategory={setNewLotCategory} newLotText={newLotText}
          setNewLotText={setNewLotText} addNewLot={addNewLot} />
      </CSSTransition>
      <CSSTransition in={isPublishModalOpen} timeout={300} classNames="alert" unmountOnExit>
        <HintCreateAdd isOpen={isPublishModalOpen}
          onClose={closePublishModal} publishModalTimeRemaining={publishModalTimeRemaining} />
      </CSSTransition>
    </>
  );
};

