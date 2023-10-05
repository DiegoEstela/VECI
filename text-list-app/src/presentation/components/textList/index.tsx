import React from 'react';
import { TextListProps } from '../../../domain/entities';
import './index.css';



const TextList: React.FC<TextListProps> = ({ texts, onSelectText, selectedTextIndex }) : JSX.Element => {

  return (
    <ul className="text-list">
      {texts.map((text, index) => (
        <li key={index} onClick={() => onSelectText(index)} className={index === selectedTextIndex ? 'text-list__selected-item' : 'text-list__normal-item'}>
          {text}
        </li>
      ))}
    </ul>
  );
};

export default TextList;