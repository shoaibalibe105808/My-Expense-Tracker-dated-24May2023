import "./styles.css";
import {getImageUrl} from './Utils';
import { Fragment } from "react";

function FilterArray({ people }) {
  // callback function
  function myChemist(person) {
    //if (person.profession === "chemist") {
      return person.profession;
    //}
  }
  // callback function
  function personFunction(filteredPerson) {
    return (
      <Fragment key={filteredPerson.id}>
      <img
        src={getImageUrl(filteredPerson)}
        alt={filteredPerson.name}
      />
        <p>
          <b>{filteredPerson.name}</b>
          {" " + filteredPerson.profession + " "}
          known for {filteredPerson.accomplishment}
        </p>
      </Fragment>
    );
  }

  let chemists = people.filter(myChemist);
  const listItems = chemists.map(personFunction);

  return <ul>{listItems}</ul>;
}
export default FilterArray;
