import ImageSlider from "./assets/image-slider";

function App() {
  return (
    <div className="">
      {/* <Accordion /> */}

      {/* <ChangeColor /> */}
      {/* <Starrating noofStars={10} /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
    </div>
  );
}

export default App;
