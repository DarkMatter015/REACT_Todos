import { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  // Não deve ser feito buscas no DOM dessa maneira
  // const dialog = document.querySelector('dialog');

  const dialogRef = useRef(null);

  useEffect(() => {
    console.log("???", isOpen);
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
      const dialog = dialogRef.current;
      dialog?.addEventListener('close', onClose);
      return () => {
        dialog?.removeEventListener('close', onClose);
      }
  }, [onClose]);


  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // O botão fecha uma Dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div className="btn-close-wrapper">
          <button autoFocus onClick={onClose} className="btn-close">
            <IconClose />
          </button>
        </div>
        <div className="body">
            {children}
        </div>
      </dialog>
    </>
  );
}
