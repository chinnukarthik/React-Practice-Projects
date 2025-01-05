// import Accordion from "./assets/accodion/accodion";
// import Starrating from "./assets/Star Rating";

import Treeview from "./assets/tree-view";
import menus from "./assets/tree-view/data";

// import ProductShowcase from "./assets/Product-page";

function App() {
  return (
    <div className="">
      {/* <Accordion /> */}
      {/* <ChangeColor /> */}
      {/* <Starrating noofStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}
      {/* <ProductShowcase /> */}
      <Treeview menus={menus} />
    </div>
  );
}

export default App;
