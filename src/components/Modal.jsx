import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className=" grid place-content-center backdrop-blur h-screen w-screen absolute top-0 z-40  ">
          <div className=" m-auto z-50 relative min-h-[200px] min-w-full   p-4 rounded-3xl bg-blue-300">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-test")
  );
};

export default Modal;
