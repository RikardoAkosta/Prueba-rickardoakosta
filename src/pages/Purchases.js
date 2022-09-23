import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { buy } from "../store/slice/cart.slices";
import { getPurchases } from "../store/slices/purchases.slice";

const Purchases = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const purchases = useSelector(state => state.purchases);

  useEffect(() => {
    dispatch(getPurchases());
  }, [dispatch]);

  return (
    <div>
      <h1>Purchases</h1>

      <ul>
        {purchases.map(purchases => (
          <li>
            {purchases.product.map(purchases => (
              <div onClick={() => navigate(`/product/${purchases.id}`)}>
                {purchases.product.id}
              </div>
            ))}
          </li>
        ))}
      </ul>

      <div>
        <button onClick= {()=> dispatch(buy())}> 
          Checkout
        </button>
      </div>
    </div>

    
    
  );
};

export default Purchases;
