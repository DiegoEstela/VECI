import React from 'react';
import { TextListProps } from '../../../domain/entities';
import './index.css';



const TextList: React.FC<TextListProps> = ({ texts, onSelectText, selectedTextIndex }) => {

  return (
    <ul className="textList">
      {texts.map((text, index) => (
        <li key={index} onClick={() => onSelectText(index)} className={index === selectedTextIndex ? 'textList__selectedItem' : 'textList__normalItem'}>
          {text}
        </li>
      ))}
    </ul>
  );
};

export default TextList;