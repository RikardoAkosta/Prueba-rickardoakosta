import React from "react";
import { Offcanvas, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PurchasesSidebar = ({ show, handleClose }) => {
  const purchases = useSelector(state => state.purchases);

  const navigate = useNavigate();

  const selectProduct = purchases => {
    handleClose();
    navigate(`/news/${purchases.product.id}`);
  };

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Favorites</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            {purchases.map(purchase => (
              <ListGroup.Item onClick={() => selectProduct(purchases)}>
                {purchase.product.id}
                <img
                  src={purchase.product.imgUrl}
                  className="img-fluid"
                  alt=""
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default PurchasesSidebar;
 