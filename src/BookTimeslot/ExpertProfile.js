import React from "react";

const ExpertProfile = ({ expert }) => {
  return (
    <div className="expert-profile">
      <img src={expert.photo} alt={expert.name} className="expert-photo" />
      <h2>{expert.name}</h2>
      <h4>{expert.title}</h4>
      <p>{expert.bio}</p>
    </div>
  );
};

export default ExpertProfile;
