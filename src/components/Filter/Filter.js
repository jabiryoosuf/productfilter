import React, { useEffect, useState } from 'react'
import "./Filter.css"
import { useDispatch, useSelector } from 'react-redux';
import { allproductApi } from '../../store/ProductSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const { allproduct } = useSelector((state) => state.product);
  console.log(allproduct);

  useEffect(() => {
    dispatch(allproductApi)
    

      setData(allproduct);
  
    if (query.length === 0 || query.length > 2) {

    };
  }, [query]);



  return (
    <div className='filter-main'>
      <form action="">
        <input type="search" placeholder='Search here...'  onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
      </form>
    </div>
  )
}

export default Filter
