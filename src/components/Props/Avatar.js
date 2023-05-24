import React from "react";
import "./styles.css";
import { getImageUrl } from "./Utils";

const Avatar = ({person, size=100}) => {
//   const person = props.person;
//   const size = props.size;
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
