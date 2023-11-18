import React, { useState } from 'react';
import './style.css';

function App() {
  // search type
  const [search,setSearch] = useState(true);
  // input
  const [agency, setAgency] = useState('');
  const [school,setSchool] = useState('');
  // text -> combine to array later
  const [info,setInfo] = useState("I'd like to look up my Agency by 'school'");
  const [text,setText] = useState('Agency');
  const [placeholder,setPlaceholder] = useState("Agency's name");

const handleClick = () => {
  if(search) {
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

return (
  <div>
  <h2 className='text'>Enter your <span id="emAgency">{text}</span> to get start</h2>
  <input className='input'
  value={agency}
  onChange={event => setAgency(agency)}
  placeholder={placeholder}
  type='text'
  />
  <p onClick={handleClick} id='info' className='infoName'>{info}</p>
  </div>
);
}

export default App;

// const SchoolLookup = () => {
//   const [isInfoName, setIsInfoName] = useState(true);
//   const [placeholder, setPlaceholder] = useState("School's name");
//   const [displayText, setDisplayText] = useState("I'd like to look up my Agency by name");

//   const handleLookupClick = () => {
    
//     if (isInfoName) {
//       setDisplayText("I'd like to look up my Agency by school");
//       setPlaceholder("Agency's name");
//     } else {
//       setDisplayText("I'd like to look up my Agency by name");
//       setPlaceholder("School's name");
//     }

//     setIsInfoName(!isInfoName);
//   };

//   return (
//     <div id="info" onClick={handleLookupClick}>
//       {displayText}
//       <input id="input" type="text" placeholder={placeholder} />
//     </div>
//   );
// };

// export default SchoolLookup;
