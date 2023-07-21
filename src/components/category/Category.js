import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import { includes } from "lodash";
import { allproductApi, fiteredProdectCategory } from "../../store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const [state,setState]=useState()
  const dispatch = useDispatch();
  const { allproduct } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(allproductApi())

  },[])
  useEffect(() => {
    dispatch(fiteredProdectCategory(state));
  },[state])


  const CategoryFilterAll=()=>{
    dispatch(allproductApi())
  }

  const CategoryFilter=(category)=>{
    const result = allproduct.filter((product) => product.category.includes(category));
console.log(result);
setState(result)
  }


  return (
    <>
      <div className="category-main">
        <button onClick={()=>CategoryFilter("men")}>Men</button>
        <button onClick={()=>CategoryFilter("women")}>Women</button>
        <button onClick={()=>CategoryFilter("electronics")}>electronics</button>
        <button onClick={()=>CategoryFilterAll()}>All</button>
      </div>
    </>
  );
};

export default Category;
