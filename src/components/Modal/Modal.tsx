import React, { ReactNode, useRef } from 'react';
import classNames from '@/utils/classNames';
import { IconClose } from '@/components/icon';
import { buttonSizes, buttonTypes } from '@/components/buttons/button-styles/button-styles.config';
import ModalContent from '@/components/Modal/components/ModalContent';

export type TModalProps = {
  isShown: boolean;
  setIsShown: (isShown: boolean) => void;
  children: ReactNode;
};

const Modal = ({ isShown, children, setIsShown }: TModalProps) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const closeModalByClick = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current || e.target === closeBtnRef.current) {
      setIsShown(false);
    }
  };

  return (
    <div
      className={classNames(
        'fixed inset-0 z-30 flex justify-center w-full opacity-0 transition-opacity duration-std overflow-y-auto',
        isShown ? 'opacity-100 visible' : 'invisible'
      )}
    >
      {isShown && (
        <div
          className={
            'flex items-center justify-center bg-gray/ui bg-opacity-80 relative w-full min-h-full overflow-hidden'
          }
          ref={overlayRef}
          onClick={closeModalByClick}
        >
          <div className={classNames('flex relative z-50 m-auto', isShown ? 'animate-showPopup' : '')}>
            <div className="relative">
              {children}
              <button
                onClick={closeModalByClick}
                ref={closeBtnRef}
                className={classNames(
                  'flex items-center justify-center absolute top-3.5 right-3.5 p-1.5 z-50 rounded-std transition duration-std',
                  buttonTypes.noBorder,
                  buttonSizes.smSquare
                )}
              >
                <IconClose className="pointer-events-none" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Modal.Content = ModalContent;

export { Modal };
