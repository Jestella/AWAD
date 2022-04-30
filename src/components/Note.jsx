import React from 'react';
import { FaTimes } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';

const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className='word'>
      <button onClick={handleClick}>
        <FaTimes />
      </button>
      <h1>{props.word}</h1>
      <p class='sentence'>{props.sentence}</p>
      <p class='meagning_text'>
        <ReactCountryFlag countryCode='US' />: {props.meaning_en}
      </p>
      <p class='meagning_text'>
        <ReactCountryFlag countryCode='ES' />: {props.meaning_es}
      </p>
      <p class='meagning_text'>
        <ReactCountryFlag countryCode='JP' />: {props.meaning_jp}
      </p>
    </div>
  );
};

export default Note;
