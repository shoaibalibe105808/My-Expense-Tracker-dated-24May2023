import './styles.css';
function Item({ years, startFrom }) {
  let newYears = [];

  for (let i = startFrom; i < years.length; i++) {
    newYears.push(years[i]);
  }

  newYears = newYears.map((item) => {
    return <li key={Math.random()}>{item}</li>;
  });
  console.log(newYears);
  return (
    <div>
      <p>No. of Elements in new array: {newYears.length}</p>
      <ul>{newYears}</ul>
      <hr></hr>
      
    </div>
  );
}
export default Item;
