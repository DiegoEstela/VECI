export const handleAddText = (text: string, onAddText: (text: string) => void, setText: React.Dispatch<React.SetStateAction<string>>, onClose: () => void) => {
    if (text.trim() !== "") {
        onAddText(text);
        setText("");
        onClose();
    }
};