import React, { useState } from 'react';
import './css/style.css';

function Search() {
  // search type
  const [search, setSearch] = useState(true);
  // input
  const [input, setInput] = useState('')
  const [agency, setAgency] = useState('');
  const [school, setSchool] = useState('');
  // text -> combine to array later
  const [info, setInfo] = useState("I'd like to look up my Agency by 'school'");
  const [text, setText] = useState('Agency');
  const [placeholder, setPlaceholder] = useState("Agency's name");

  const handleClick = () => {
    if (search) {
      setText("Agency");
      setPlaceholder("Agency's name");
      setInfo("I'd like to look up my Agency by 'school'");
    } else {
      setText("School")
      setPlaceholder("School's name");
      setInfo("I'd like to look up my Agency by 'name'");
    }
    setSearch(!search);
  }

  const searchInput = (event) => {
    setInput(event.target.value);
    if (event.key === 'Enter') {
      // test

      // if search == true -> agency
      // false -> school
      console.log(search);
      console.log(input);

      if (search === true) {
        // set agency
        setAgency(input);
        console.log(agency);
      } else {
        // set school
        setSchool(input);
        console.log(school);
      }

    }
  }

  return (
    <div>
      <h2 className='text'>Enter your <span id="emAgency">{text}</span> to get start</h2>
      <input className='input'
        value={input}
        onChange={searchInput}
        onKeyDown={searchInput}
        placeholder={placeholder}
        type='text'
      />
      <p onClick={handleClick} id='info' className='infoName'>{info}</p>
    </div>
  );
}

export default Search;
