import React from "react";
import { useEffect } from "react";
import { getProduct } from "../store/slice/product.slice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
