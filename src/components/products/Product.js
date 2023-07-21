import React, { useEffect, useState } from "react";
import "./poroduct.css";
import { useDispatch, useSelector } from "react-redux";
import { allproductApi } from "../../store/ProductSlice";
import map from "lodash";

const Product = () => {
  const [item,setItem] = useState({})

  const dispatch = useDispatch();
  const { allproduct } = useSelector((state) => state.product);
  console.log(allproduct);

  useEffect(() => {
    dispatch(allproductApi());
  }, []);
  const products = Array.isArray(allproduct) ? allproduct : [];
  return (
    <div className="card-container">
      {products.map((item) => (
        
        <div className="row product-main" >
      {/* {products.map((item) => ( */}
            
          <div className=" product-card ">
            <div className="image-section">
              <img src={item?.image} alt="" />
            </div>
            <div className="content-section">
              <h4>{item.title}</h4>
              <p className="">{item.description}</p>
              <div className="price-container">
                <span>$ {item.price}</span>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
      {/* ))} */}

        </div>

         ))} 

        
        
    </div>
  );
};

export default Product;
