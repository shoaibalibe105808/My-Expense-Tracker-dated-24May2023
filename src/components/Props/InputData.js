function InputData({ changeMyData }) {
  const imageData1 = {
    imageId: "szV5sdG",
    imageAlt: "Maria Skłodowska-Curie",
    imageSize: 100,
    profession: "physicist and chemist",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovered: "polonium (element)",
  };

  const imageData2 = {
    imageId: "YfeOqp2",
    imageAlt: "Katsuko Saruhashi",
    imageSize: 100,
    profession: "geochemist",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovered: "a method for measuring carbon dioxide in seawater",
  };
  <button onClick={() => changeMyData(imageData1)}>Profile 1</button>;

  return (
    <div>
      <button onClick={() => changeMyData(imageData1)}>Profile 1</button>
      <button onClick={() => changeMyData(imageData2)}>Profile 2</button>
    </div>
  );
}
export default InputData;

//const data = [imageData1, imageData2];
