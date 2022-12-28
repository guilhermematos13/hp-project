import { ReactNode } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface ModalProps {
  openModal: boolean;
  handleCloseModal: any;
  children: ReactNode;
}

export const Modal = ({
  openModal,
  handleCloseModal,
  children,
}: ModalProps) => {
  {
    if (!openModal) {
      return null;
    }
  }

  return (
    <div className="flex items-center justify-center h-screen w-full fixed z-10 ">
      <div className="flex flex-col items-center justify-start p-4 bg-black opacity-90 rounded-lg text-white h-auto w-1/5">
        <div className="flex w-full justify-end">
          <AiOutlineCloseCircle
            className="text-3xl cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
