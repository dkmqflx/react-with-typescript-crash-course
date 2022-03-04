import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    img: '',
    note: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: '',
      age: '',
      img: '',
      note: '',
    });
  };

  return (
    <div className="AddToList">
      <input
        onChange={handleChange}
        className="AddToList-input"
        type="text"
        placeholder="name"
        value={input.name}
        name="name"
      />
      <input
        // onChange={(e) => {}} inline으로 작성하면 ts에서 e가 뭔지 infer한다
        onChange={handleChange}
        className="AddToList-input"
        type="number"
        placeholder="Age"
        value={input.age}
        name="age"
      />
      <input
        onChange={handleChange}
        className="AddToList-input"
        type="text"
        placeholder="Image Url"
        value={input.img}
        name="img"
      />
      <textarea onChange={handleChange} className="AddToList-input" placeholder="note" value={input.note} name="note" />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
