import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../store/slice/product.slice";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Col,
  Row,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const product = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const filterproduct = () => {
    alert(search);
  };

  return (
    <div>
      <h1>Home</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search product"
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={filterproduct}
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
              <Card.Img variant="top" src={productItem.image} />
              <Card.Body>
                <Card.Title>{productItem.headline}</Card.Title>
                <Card.Text>{productItem.lead}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
