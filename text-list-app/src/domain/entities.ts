export interface TextListProps {
  texts: string[];
  onDeleteText?: (index: number) => void;
  onSelectText: (index: number | null) => void;
  selectedTextIndex: number | null;
}

export interface ModalProps {
  onClose: () => void;
  onAddText: (text: string) => void;
}

export interface TextListProps {
  texts: string[];
  onSelectText: (index: number | null) => void;
  selectedTextIndex: number | null; // Agregamos la propiedad selectedTextIndex
}

export interface AppState {
  texts: string[];
}

