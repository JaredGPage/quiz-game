import React from "react";
import "./avatarCard.styles.css";

const Card = ({ avatar, accessory }) => {
  return (
    //console.log(avatar),//used during debug
    <div className="card-container">
        <div className="card">
            <img className="avatar" src={`/avatars/${avatar}.png`} alt="Avatar" />
            <img className="accessory" src={`/accessories/${accessory}.png`} alt="Accessory" />
        </div>
    </div>
    
  );
};

export default Card;