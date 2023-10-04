import React, { useState } from 'react';

interface TextInputProps {
  onAddText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onAddText }) : JSX.Element => {
  const [text, setText] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddText = () => {
    if (text.trim() !== '') {
      onAddText(text);
      setText('');
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleAddText}>Add Text</button>
    </div>
  );
};

export default TextInput;