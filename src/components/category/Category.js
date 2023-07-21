import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import { includes } from "lodash";
import { allproductApi } from "../../store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const [state,setState]=useState()
  const dispatch = useDispatch();
  const { allproduct } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(allproductApi())

  },[])

  const CategoryFilter=(category)=>{
    const result = allproduct.filter((product) => product.category.includes(category));
console.log(result);
setState(result)
  }


  return (
    <>
      <div className="category-main">
        <button onClick={()=>CategoryFilter("men")}>Men</button>
        <button>Women</button>
        <button>electronics</button>
        <button>All</button>
      </div>
    </>
  );
};

export default Category;
