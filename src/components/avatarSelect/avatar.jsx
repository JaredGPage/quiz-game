// Avatar

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './avatar.styles.css'
import Card from "../avatar-card/avatar-card";

const AvatarSelection = ({ onSelectAvatar }) => {
  const [avatar, setAvatar] = useState("avatar1");//sets default avatar
  const [accessory, setAccessory] = useState("accessory2");
  const navigate = useNavigate();



  const handleSelectAvatar = (selectedAvatar) => {
    setAvatar(selectedAvatar, "");
  };

  const handleSelectAccessory = (selectedAccessory) => {
    setAccessory(selectedAccessory, "");
  };

  const handleSubmit = () => {
    onSelectAvatar(avatar, accessory);
    navigate(`/quiz?avatar=${avatar}&accessory=${accessory}`); // Navigate to the quiz page
  };

  return (
    <div>
      <h2 className="select-title">Select Avatar</h2>
      <Card avatar={avatar} accessory={accessory} />
      
      <div className="div-buttons">
        <div className="avatar-buttons">
          {/* Avatar selection UI */}
          <button className="button" onClick={() => handleSelectAvatar("avatar1")}>Avatar 1</button>
          <button className="button" onClick={() => handleSelectAvatar("avatar2")}>Avatar 2</button>
          <button className="button" onClick={() => handleSelectAvatar("avatar3")}>Avatar 3</button>
          <button className="button" onClick={() => handleSelectAvatar("avatar4")}>Avatar 4</button>
        </div>

        <div className="accessory-buttons">
          {/* Accessory selection UI */}
          <button className="button" onClick={() => handleSelectAccessory("accessory1")}>Accessory 1</button>
          <button className="button" onClick={() => handleSelectAccessory("accessory2")}>Accessory 2</button>
          <button className="button" onClick={() => handleSelectAccessory("accessory3")}>Accessory 3</button>
          <button className="button" onClick={() => handleSelectAccessory("accessory4")}>Accessory 4</button>
        </div>
        
        {/* Submit button */}
        <button className="button-quiz" onClick={handleSubmit}>Begin Quiz</button>

      </div>
      
    </div>
  );
};

export default AvatarSelection;