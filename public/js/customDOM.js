import React, { useState } from 'react';

const SchoolLookup = () => {
  const [isInfoName, setIsInfoName] = useState(true);
  const [placeholder, setPlaceholder] = useState("School's name");
  const [displayText, setDisplayText] = useState("I'd like to look up my Agency by name");

  const handleLookupClick = () => {
    if (isInfoName) {
      setDisplayText("I'd like to look up my Agency by school");
      setPlaceholder("Agency's name");
    } else {
      setDisplayText("I'd like to look up my Agency by name");
      setPlaceholder("School's name");
    }

    setIsInfoName(!isInfoName);
  };

  return (
    <div id="info" onClick={handleLookupClick}>
      {displayText}
      <input id="input" type="text" placeholder={placeholder} />
    </div>
  );
};

export default SchoolLookup;


