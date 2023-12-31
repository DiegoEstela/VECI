import React, { useState } from "react";
import { ModalProps } from "../../../domain/entities";
import "./index.css";
import { handleAddText } from "../../../application/modalHandles";



const Modal: React.FC<ModalProps> = ({ onClose, onAddText }) :JSX.Element => {
  const [text, setText] = useState<string>("");

  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Add Text</h2>
        <input
          className="modal__input"
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
          autoFocus
        />
        <div className="modal__footer">
          <button className="modal__button--add" onClick={() => handleAddText(text, onAddText, setText, onClose)} >
            Add
          </button>
          <button className="modal__button--cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
