import { useState } from 'react';

type ModalHookReturnType = {
  isModalOpen: boolean;
  toggleModal: () => void;
};

export const useModal = (): ModalHookReturnType => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (): void => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return { isModalOpen, toggleModal };
};
