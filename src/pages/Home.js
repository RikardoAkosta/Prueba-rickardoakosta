import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../store/slice/product.slice";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  const product = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getProduct());

  }, []);

  return (
    <div>
      <h1>Home</h1> 
      {product.map(productItem => (
        <Card onClik = {() => navigate (`/product/${productItem.id}`)} >{/*hacemos que sea código dinamico*/}
          {productItem.headline}
          <img src={productItem.image} alt="" />
        </Card>
      ))
      }   
    </div>
  );
};

export default Home;
