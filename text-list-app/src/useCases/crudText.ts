import {
  ActionCreatorWithPayload,
  AnyAction,
  Dispatch,
  ThunkDispatch,
} from "@reduxjs/toolkit";


export const handleAddText = (text: string, dispatch: ThunkDispatch<
    {
      app: unknown;
    },
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>, addText : ActionCreatorWithPayload<string, "app/addText">,  setLastAction: React.Dispatch<React.SetStateAction<string | null>>) => {
    dispatch(addText(text));
    setLastAction("add");
  };

export const handleDeleteSelectedText = (
  selectedTextIndex: number | null,
  setSelectedTextIndex: React.Dispatch<React.SetStateAction<number | null>>,
  dispatch: ThunkDispatch<
    {
      app: unknown;
    },
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>,
  deleteText: ActionCreatorWithPayload<number, "app/deleteText">,
  setLastAction: React.Dispatch<React.SetStateAction<string | null>>
) => {
  if (selectedTextIndex !== null) {
    dispatch(deleteText(selectedTextIndex));
    setSelectedTextIndex(null);
    setLastAction("delete");
  }
};

export const handleUndo = (
  lastAction: string | null,
  setLastAction: React.Dispatch<React.SetStateAction<string | null>>,
  dispatch: ThunkDispatch<
    {
      app: unknown;
    },
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>,
  deleteText: ActionCreatorWithPayload<number, "app/deleteText">,
  texts: string[],
  addText : ActionCreatorWithPayload<string, "app/addText">,
  selectedTextIndex :  number | null
) => {
  if (lastAction === "add") {
    dispatch(deleteText(texts.length - 1));
    setLastAction(null);
  } else if (lastAction === "delete" && selectedTextIndex !== null) {
    dispatch(addText(texts[selectedTextIndex]));
    setLastAction(null);
  }
};


