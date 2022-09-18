import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  filterProductId,
  getProduct,
  filterCategory,
} from "../store/slice/product.slice";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Col,
  Row,
  Button,
  FormControl,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  const product = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getProduct());

    axios
      .get("https://front-test-api.herokuapp.com/api/product")
      .then(res => setCategories(res.data));
  }, [dispatch]);

  const filterProduct = () => {
    dispatch(filterProductId(search));
  };
  const selectCategory = id => {
    dispatch(filterCategory(id));
  };

  return (
    <div>
      <h1>Home</h1>

      <Row>
        <Col>
          <ListGroup>
            {categories.map(category => (
              <ListGroup.Item
                key={category.id}
                onClick={() => selectCategory(category.id)}
              >
                {category.model}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search product"
              onChange={e => setSearch(e.target.value)}
              value={search}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={filterProduct}
            >
              Button
            </Button>
          </InputGroup>

          <Row xs={1} md={2} lg={3} className="g-4">
            {product.map(productItem => (
              <Col>
                <Card
                  style={{ cursor: "pointer" }}
                  onClik={() => navigate(`/product/${productItem.id}`)}
                >
                  {/*hacemos que sea código dinamico*/}
                  <Card.Img variant="top" src={productItem.imgUrl} />
                  <Card.Body>
                    <Card.Title>{productItem.product}</Card.Title>
                    <Card.Text>{productItem.brand.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
