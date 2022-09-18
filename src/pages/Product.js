import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { filterCategory } from "../store/slice/product.slice";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector(state => state.product);

  useEffect(() => {
    axios
      .get(`https://front-test-api.herokuapp.com/api/product/${id}`)
      .then(res => {
        const productSearched = res.data.find(
          productItem => productItem.id === Number(id)
        );
        setProduct(productSearched);
        dispatch(filterCategory(productSearched.product.id));
      });
  }, [dispatch, id]);

  return (
    <div>
      <Row>
        <Col>
          <h1>{product.id}</h1>
          <img src={product.imgUrl} alt="" className="fluid-img" />
          {product?.body.map(paragraph => (
            <p>{paragraph.paragraph}</p>
          ))}
        </Col>
        <Col>
          {productList.map(productItem => (
            <li onclik={() => navigate(`/product/${productItem.id}`)}>
              {productItem.id}
            </li>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Product;
