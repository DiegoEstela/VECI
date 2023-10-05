import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addText, deleteText, selectTexts } from "./redux/slice";
import { AppDispatch } from "./redux/store";
import {
  handleAddText,
  handleDeleteSelectedText,
  handleUndo,
} from "./useCases/crudText";
import TextList from "./presentation/components/textList";
import Modal from "./presentation/components/modal";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const texts : string[] = useSelector(selectTexts);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTextIndex, setSelectedTextIndex] = useState<number | null>(null);
  const [lastAction, setLastAction] = useState<string | null>(null);

  return (
    <div className="text-list-container">
      <h1>Text List App</h1>
      <p>
        To use this app, follow these steps: Click the "Add" button to add a new
        text item. You can select a text item by clicking on it. The selected
        item will appear with a different background color. To delete a selected
        item, click the "Delete" button. If no item is selected, it won't delete
        anything. To undo the last action (add or delete), click the "Undo"
        button. If you wish to add more text items, repeat step 1. You can also
        close the modal without adding an item by clicking "Cancel" in the
        modal.
      </p>
      <TextList
        texts={texts}
        onSelectText={(index) => setSelectedTextIndex(index)}
        selectedTextIndex={selectedTextIndex}
      />
      <div className="text-list-container__footer">
        <div className="text-list-container__footer-remove-buttons">
          <button
            className="text-list-container__footer-remove-buttons__button"
            onClick={() =>
              handleUndo(
                lastAction,
                setLastAction,
                dispatch,
                deleteText,
                texts,
                addText,
                selectedTextIndex
              )
            }
            disabled={!lastAction}
          >
            Undo
          </button>
          <button
            className="text-list-container__footer-remove-buttons__button"
            onClick={() =>
              handleDeleteSelectedText(
                selectedTextIndex,
                setSelectedTextIndex,
                dispatch,
                deleteText,
                setLastAction
              )
            }
            disabled={selectedTextIndex === null}
          >
            Delete
          </button>
        </div>
        <div className="text-list-container__footer-add-button">
          <button className="text-list-container__footer-add-button__button" onClick={() => setIsModalOpen(true)}>
            Add Text
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onAddText={(text) =>
            handleAddText(text, dispatch, addText, setLastAction)
          }
        />
      )}
    </div>
  );
};

export default App;
