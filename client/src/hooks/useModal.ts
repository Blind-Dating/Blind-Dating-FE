import { useState } from 'react';

type ModalHookReturnType = {
  isModalOpen: boolean;
  handleToggleModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useModal = (): ModalHookReturnType => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleToggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    }
  };

  return { isModalOpen, handleToggleModal };
};
