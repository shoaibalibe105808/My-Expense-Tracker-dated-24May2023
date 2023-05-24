import "./styles.css";

function TrueList({ tlName, isPacked }) {
  return (
    <div>
      <li className="item">
        <del>{tlName} {isPacked && '✔'}</del>
      </li>
    </div>
  );
}
export default TrueList;
