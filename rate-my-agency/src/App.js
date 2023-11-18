import React, { useState } from 'react';
import './style.css';

function App() {
  const [search,setSearch] = useState('');
  const [agency, setAgency] = useState('');
  const [school,setSchool] = useState('');

const SearchInput = (search) => {
  if(search === 'Agency') {
    setAgency(search);
  } else if (search === 'School') {
    setSchool(search);
  }
}

return (
  <div>
  <h2 className='text'>Enter your <span id="emAgency">Agency</span> to get start</h2>
  <input className='input'
  value={agency}
  onChange={event => setAgency(agency)}
  placeholder="Agency's name"
  type='text'
  />
  <p id='info' className='infoName'>I'd like to look up my Agency by school</p>
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
