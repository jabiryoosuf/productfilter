import "./App.css";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/category/Category";
import Product from "./components/products/Product";

function App() {

  
  return (
    <div className="App">
      <Navbar />
      {/* <Heder/> */}
      <div style={{ display: "flex" }}>
        <Category />
        <div style={{ display: "flex", flexDirection: "column",width:"100%" }}>
          {/* <Filter /> */}

          <Product />
        </div>
      </div>
    </div>
  );
}
export default App;
