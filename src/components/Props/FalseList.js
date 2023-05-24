import "./styles.css";

function FalseList({ flName, isPacked }) {
  return <li className="item">{flName}{!isPacked && ' ❌'}</li>;
}
export default FalseList;
